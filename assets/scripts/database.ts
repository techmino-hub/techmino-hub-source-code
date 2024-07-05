import { createClient, type PostgrestError } from '@supabase/supabase-js';
import {
    type Profile,
    type Submission,
    type SubmissionWithReplay,
    type ReplayData,
    Table
} from '~/assets/types/database';

const runtimeConfig = useRuntimeConfig();

export const SUPABASE = createClient(
    runtimeConfig.supabaseUrl,
    runtimeConfig.supabaseAnonKey
);

export default SUPABASE;

// #region Profiles

/** @throws {PostgrestError} */
export async function getAllProfiles(limit = 10, offset = 0) {
    const { data, error } = await SUPABASE
        .from(Table.Profiles)
        .select('*')
        .range(offset, offset + limit - 1);
    
    if(error) throw error;
    return data as Profile[];
}

/** @throws {PostgrestError | Error} */
export async function getProfileById(id: string) {
    const { data, error } = await SUPABASE
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
export async function getProfileByUsername(username: string) {
    const { data, error } = await SUPABASE
        .from(Table.Profiles)
        .select()
        .eq('username', username);

    if(error) throw error;
    
    if(data && data.length > 0) {
        return data[0] as Profile;
    } else {
        throw new Error('Profile not found');
    }
}

/** @throws {PostgrestError} */
export async function editProfile(id: string, newProfileData: Partial<Profile>) {
    const { error } = await SUPABASE
        .from(Table.Profiles)
        .update(newProfileData)
        .eq('id', id);

    if(error) throw error;
}

/** @throws {PostgrestError} */
export async function deleteAccount() {
    const { error } = await SUPABASE.rpc('delete_account');
    if(error) throw error;
}

// #endregion

// #region Submissions
/** @throws {PostgrestError} */
export async function getSubmissionsByGameMode(gameMode: string, limit = 10, offset = 0) {
    const { data, error } = await SUPABASE
        .from(Table.Submissions)
        .select('*')
        .eq('game_mode', gameMode)
        .range(offset, offset + limit - 1);

    if(error) throw error;
    return data as Submission[];
}

/** @throws {PostgrestError | Error} */
export async function getSubmissionById(id: string) {
    const { data, error } = await SUPABASE
        .from(Table.Submissions)
        .select()
        .eq('id', id);

    if(error) throw error;
    if(data && data.length > 0) {
        return data[0] as Submission;
    } else {
        throw new Error('Submission not found');
    }
}

/** @throws {PostgrestError | Error} */
export async function getSubmissionWithReplayById(id: string) {
    const { data, error } = await SUPABASE
        .from(Table.Submissions)
        .select('*, replays(replay_data)')
        .eq('id', id);
    
    if(error) throw error;
    if(data && data.length > 0) {
        return data[0] as SubmissionWithReplay;
    } else {
        throw new Error('Submission not found');
    }
}

/** @throws {PostgrestError} */
export async function getSubmissionsByUserId(userId: string, limit = 10, offset = 0) {
    const { data, error } = await SUPABASE
        .from(Table.Submissions)
        .select('*')
        .eq('submitted_by', userId)
        .range(offset, offset + limit - 1);

    if(error) throw error;
    return data as Submission[];
}

/** @throws {PostgrestError} */
export async function getSubmissionsWithReplaysByUserId(userId: string, limit = 10, offset = 0) {
    const { data, error } = await SUPABASE
        .from(Table.Submissions)
        .select('*, replays(replay_data)')
        .eq('submitted_by', userId)
        .range(offset, offset + limit - 1);

    if(error) throw error;
    return data as SubmissionWithReplay[];
}

/** @throws {PostgrestError} */
export async function createSubmission(newSubmission: Submission) {
    const { error } = await SUPABASE
        .from(Table.Submissions)
        .insert(newSubmission);

    if(error) throw error;
}

/** @throws {PostgrestError} */
export async function editSubmission(id: string, newSubmissionData: Partial<Submission>) {
    const { error } = await SUPABASE
        .from(Table.Submissions)
        .update(newSubmissionData)
        .eq('id', id);

    if(error) throw error;
}

/** @throws {PostgrestError} */
export async function deleteSubmission(id: string) {
    const { error } = await SUPABASE
        .from(Table.Submissions)
        .delete()
        .eq('id', id);

    if(error) throw error;
}
// #endregion

// #region Replays

/** @throws {PostgrestError} */
export async function getReplayBySubmissionId(submissionId: string) {
    const { data, error } = await SUPABASE
        .from(Table.Replays)
        .select()
        .eq('submission_id', submissionId);

    if(error) throw error;
    return data as ReplayData[];
}

/** @throws {PostgrestError} */
export async function createReplay(submissionId: string, replayData: string) {
    const { error } = await SUPABASE
        .from(Table.Replays)
        .insert({ submission_id: submissionId, replay_data: replayData });

    if(error) throw error;
}

/** @throws {PostgrestError} */
export async function deleteReplay(submissionId: string) {
    const { error } = await SUPABASE
        .from(Table.Replays)
        .delete()
        .eq('submission_id', submissionId);

    if(error) throw error;
}

// #endregion

// #region Avatars/Profile Pictures
// Avatars are stored in Supabase Storage, and the name of the file is the user's ID.

/** @throws {PostgrestError} */
export async function getAvatarByUserId(userId: string) {
    const { data, error } = await SUPABASE
        .storage
        .from('avatars')
        .download(userId);

    if(error) throw error;
    return data;
}

/** @throws {PostgrestError} */
export async function updateAvatar(userId: string, newAvatar: File) {
    const { data, error } = await SUPABASE
        .storage
        .from('avatars')
        .upload(userId, newAvatar, {
            upsert: true
        });
    
    if(error) throw error;
    return data;
}

/** @throws {PostgrestError} */
export async function deleteAvatar(userId: string) {
    const { error } = await SUPABASE
        .storage
        .from('avatars')
        .remove([userId]);

    if(error) throw error;
}

// #endregion

// #region Scrape all of the user's data

/** @throws {AuthError | Error | PostgrestError} */
export async function getAllOwnedData() {
    const {
        data: userData,
        error: userError
    } = await SUPABASE.auth.getUser();

    if(userError) throw userError;
    if(!userData) throw new Error('User not found');

    const userId = userData.user.id;

    const profile = await getProfileById(userId);
    const submissions = await getSubmissionsWithReplaysByUserId(userId, 1000);
    const avatar = await getAvatarByUserId(userId);

    return {
        profile,
        submissions,
        avatar
    };
}

// #endregion