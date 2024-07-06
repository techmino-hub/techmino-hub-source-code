import { createClient, SupabaseClient, type SupabaseClientOptions } from "@supabase/supabase-js";

/**
 * The Profile type represents a user's profile.  
 * This should be what you get from querying from the `public.profiles` table.
 */
export type Profile = {
    /**
     * The user's unique identifier.  
     * Postgres type: uuid
     */
    id: string;

    /**
     * The user's username.  
     * Postgres type: text
     */
    name: string;

    /**
     * The user's account state.  
     * Postgres type: enum
     */
    account_state: AccountState;

    /**
     * The user's role.  
     * Postgres type: enum
     */
    role: Role;

    /**
     * The user's bio.  
     * Postgres type: text
     */
    bio: string;
}

/**
 * The Submission type represents the metadata of a run.  
 * This should be what you get from querying from the `public.submissions` table.
 * The Submission type does not include the replay data because the replay data is usually much larger than the metadata.  
 * To get the replay data, you need to query the `public.replays` table with the submission's UUID.  
 */
export type Submission = {
    /**
     * The submission's unique identifier.  
     * Postgres type: uuid
     */
    id: string;

    /**
     * The game mode of the submission.  
     * Postgres type: text
     */
    game_mode: string;

    /**
     * An object of values that appear in the in-game leaderboard.  
     * It is different for each game mode, and can even be null.  
     * Postgres type: jsonb
     */
    score: Object | null;

    /**
     * The timestamp when the submission was uploaded.  
     * Postgres type: timestamptz
     */
    upload_date: string;

    /**
     * The timestamp stored in the replay.  
     * Postgres type: timestamp
     */
    replay_date: string;

    /**
     * The UUID of the profile that uploaded the submission.  
     * Postgres type: uuid
     */
    submitted_by: string;

    /**
     * The validity of the submission.  
     * Postgres type: enum
     */
    validity: SubmissionValidity;

    /**
     * Ideally, a link proving the submission's validity, such as a video recording.  
     * Postgres type: text
     */
    proof: string | null;
}

/**
 * The ReplayData type represents the replay data of a run.  
 * This should be what you get from querying from the `public.replays` table.  
 */
export type ReplayData = {
    /**
     * The submission UUID that the replay data belongs to.  
     * Postgres type: uuid
     */
    submission_id: string;

    /**
     * The base-64 version of the replay data.  
     * Postgres type: text
     */
    replay_data: string;
}

export type SubmissionWithReplay = Submission & {
    /**
     * The base-64 version of the replay data.
     * Postgres type: text
     */
    replay_data: string;
}

/**
 * Represents the state of an account.
 */
export enum AccountState {
    /** The account is in good standing. */
    Normal = "Normal",

    /** The account is banned. */
    Banned = "Banned",

    /** The account has not been verified yet, and thus has limited access. */
    Unverified = "Unverified"
}

/**
 * Represents the role of a user.  
 * The role of a user dictates what they can do on the platform.
 */
export enum Role {
    /** A regular user. */
    User = "User",

    /** A trusted user that can verify submissions. */
    Verifier = "Verifier",

    /** An administrator that can manage the platform. */
    Admin = "Administrator"
}

/** Represents the validity of a submission. */
export enum SubmissionValidity {
    /** The submission has not been verified yet. */
    Unverified = "Unverified",

    /** The submission has been checked by a verifier and seems valid. */
    Verified = "Verified",

    /** The submission is suspicious and needs further investigation. */
    Suspicious = "Suspicious",

    /** The submission has been rejected. */
    Rejected = "Rejected"
}


/** An enum of tables in the `public` schema. */
export enum Table {
    /**
     * The `profiles` table which contains user profiles.  
     * Querying it should return a list of Profile objects.
     */
    Profiles = "profiles",

    /**
     * The `submissions` table which contains submission metadata.  
     * Querying it should return a list of Submission objects.
     */
    Submissions = "submissions",

    /**
     * The `replays` table which contains replay data.  
     * Querying it should return a list of ReplayData objects.
     */
    Replays = "replays"
}