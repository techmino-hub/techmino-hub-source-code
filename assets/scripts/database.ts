import {
    createClient,
    SupabaseClient,
    type PostgrestError,
    type SupabaseClientOptions,
    type User
} from '@supabase/supabase-js';

import {
    type Profile,
    type Submission,
    type SubmissionWithReplay,
    type ReplayData,
    Table,
    SubmissionValidity
} from '~/assets/types/database';
import type { TableOrder } from '../types/record';

/**
 * Represents a wrapper around the Supabase client.  
 * This provides a simple interface to interact with the database.
 */
export class DBWrapper {
    public supabase: SupabaseClient;
    private userRef: Ref<User | null>;

    constructor(
        supabaseUrl: string,
        supabaseAnonKey: string,
        options?: SupabaseClientOptions<"public">
    ) {
        this.supabase = createClient(supabaseUrl, supabaseAnonKey, options);
        this.userRef = ref(null);
    }

    async getUserRef() {
        if(!this.userRef.value) {
            this.userRef.value = (await this.supabase.auth.getUser()).data.user;

            this.supabase.auth.onAuthStateChange((_, session) => {
                this.userRef.value = session?.user ?? null;
            });
        }

        return this.userRef;
    }

    // #region Profiles

    /** @throws {PostgrestError} */
    async getAllProfiles(limit = 10, offset = 0) {
        const { data, error } = await this.supabase
            .from(Table.Profiles)
            .select('*')
            .range(offset, offset + limit - 1);
        
        if(error) throw error;
        return data as Profile[];
    }

    /** @throws {PostgrestError | Error} */
    async getProfileById(id: string) {
        const { data, error } = await this.supabase
            .from(Table.Profiles)
            .select()
            .eq('id', id);

        if(error) throw error;
        
        if(data && data.length > 0) {
            return data[0] as Profile;
        } else {
            throw new Error('Profile not found');
        }
    }

    /** @throws {PostgrestError | Error} */
    async getProfileByUsername(username: string) {
        const { data, error } = await this.supabase
            .from(Table.Profiles)
            .select()
            .eq('username', username);

        if(error) throw error;
        
        if(data && data.length > 0) {
            return data[0] as Profile;
        }
        throw new Error('Profile not found');
    }

    /** @throws {PostgrestError} */
    async editProfile(id: string, newProfileData: Partial<Profile>) {
        const { error } = await this.supabase
            .from(Table.Profiles)
            .update(newProfileData)
            .eq('id', id);

        if(error) throw error;
    }

    /** @throws {PostgrestError} */
    async deleteAccount() {
        const { error } = await this.supabase.rpc('delete_account');
        if(error) throw error;
    }

    // #endregion

    // #region Submissions

    /** @throws {PostgrestError} */
    async getSubmissionsByGameMode(
        gameMode: string,
        validity = SubmissionValidity.Verified,
        limit = 10,
        offset = 0,
        order = [] as TableOrder[]
    ) {
        let query = this.supabase
            .from(Table.Submissions)
            .select('*')
            .eq('game_mode', gameMode)
            .eq('validity', validity);
        
        for(const column of order) {
            query = query.order(column.column, column.options);
        }

        query = query.range(offset, offset + limit - 1);

        const { data, error } = await query;

        if(error) throw error;
        return data as Submission[];
    }

    /** @throws {PostgrestError | Error} */
    async getSubmissionById(id: string) {
        const { data, error } = await this.supabase
            .from(Table.Submissions)
            .select()
            .eq('id', id);

        if(error) throw error;
        if(data && data.length > 0) {
            return data[0] as Submission;
        }
        throw new Error('Submission not found');
    }

    /** @throws {PostgrestError | Error} */
    async getSubmissionWithReplayById(id: string) {
        const { data, error } = await this.supabase
            .from(Table.Submissions)
            .select('*, replays(replay_data)')
            .eq('id', id);
        
        if(error) throw error;
        if(data && data.length > 0) {
            return data[0] as SubmissionWithReplay;
        }
        throw new Error('Submission not found');
    }

    /** @throws {PostgrestError} */
    async getSubmissionsByUserId(
        userId: string,
        order: "NewestFirst" | "OldestFirst" = "NewestFirst",
        limit = 10,
        offset = 0
    ) {
        const { data, error } = await this.supabase
            .from(Table.Submissions)
            .select('*')
            .eq('submitted_by', userId)
            .order('upload_date', { ascending: order === 'OldestFirst' })
            .range(offset, offset + limit - 1);

        if(error) throw error;
        return data as Submission[];
    }

    /** @throws {PostgrestError} */
    async getSubmissionsWithReplaysByUserId(userId: string, limit = 10, offset = 0) {
        const { data, error } = await this.supabase
            .from(Table.Submissions)
            .select('*, replays(replay_data)')
            .eq('submitted_by', userId)
            .range(offset, offset + limit - 1);

        if(error) throw error;
        return data as SubmissionWithReplay[];
    }

    /** @throws {PostgrestError} */
    async createSubmission(newSubmission: Submission) {
        const { error } = await this.supabase
            .from(Table.Submissions)
            .insert(newSubmission);

        if(error) throw error;
    }

    /** @throws {PostgrestError} */
    async editSubmission(id: string, newSubmissionData: Partial<Submission>) {
        const { error } = await this.supabase
            .from(Table.Submissions)
            .update(newSubmissionData)
            .eq('id', id);

        if(error) throw error;
    }

    /** @throws {PostgrestError} */
    async deleteSubmission(id: string) {
        const { error } = await this.supabase
            .from(Table.Submissions)
            .delete()
            .eq('id', id);

        if(error) throw error;
    }
    // #endregion

    // #region Replays

    /** @throws {PostgrestError | Error} */
    async getReplayBySubmissionId(submissionId: string) {
        const { data, error } = await this.supabase
            .from(Table.Replays)
            .select()
            .eq('submission_id', submissionId);

        if(error) throw error;

        if(data.length < 1) {
            throw new Error('Replay not found');
        }

        return data[0] as ReplayData;
    }

    /** @throws {PostgrestError} */
    async createReplay(submissionId: string, replayData: string) {
        const { error } = await this.supabase
            .from(Table.Replays)
            .insert({ submission_id: submissionId, replay_data: replayData });

        if(error) throw error;
    }

    /** @throws {PostgrestError} */
    async deleteReplay(submissionId: string) {
        const { error } = await this.supabase
            .from(Table.Replays)
            .delete()
            .eq('submission_id', submissionId);

        if(error) throw error;
    }

    // #endregion

    // #region Avatars/Profile Pictures
    // Avatars are stored in Supabase Storage, and the name of the file is the user's ID.

    /** @throws {PostgrestError} */
    async getAvatarByUserId(userId: string) {
        const { data, error } = await this.supabase
            .storage
            .from('avatars')
            .download(userId);

        if(error) throw error;
        return data;
    }

    /** @throws {PostgrestError} */
    async updateAvatar(userId: string, newAvatar: File) {
        const { data, error } = await this.supabase
            .storage
            .from('avatars')
            .upload(userId, newAvatar, {
                upsert: true
            });
        
        if(error) throw error;
        return data;
    }

    /** @throws {PostgrestError} */
    async deleteAvatar(userId: string) {
        const { error } = await this.supabase
            .storage
            .from('avatars')
            .remove([userId]);

        if(error) throw error;
    }

    // #endregion

    // #region Scrape all of the user's data
    
    /** @throws {AuthError | Error | PostgrestError} */
    async getAllOwnedData() {
        const { data, error } = await this.supabase.auth.getUser();

        if(error) throw error;
        if(!data) throw new Error('User not found');
    
        const userId = data.user.id;
    
        const profile = await this.getProfileById(userId);
        const submissions = await this.getSubmissionsWithReplaysByUserId(userId, 1000);
        const avatar = await this.getAvatarByUserId(userId);
    
        return {
            profile,
            submissions,
            avatar
        };
    }
}