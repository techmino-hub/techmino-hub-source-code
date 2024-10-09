import { createClient } from "@supabase/supabase-js";
import { DBWrapper } from '~/assets/scripts/database';

export function useSupabaseInfo() {
    const runtimeConfig = useRuntimeConfig();

    return {
        url: runtimeConfig.public.supabaseUrl,
        key: runtimeConfig.public.supabaseAnonKey
    }
}

/** Creates an instance of the database wrapper. */
export function useDatabase() {
    const { url, key } = useSupabaseInfo();

    return new DBWrapper(url, key);
};

/** Creates an instance of Supabase. */
export function useSupabase() {
    const { url, key } = useSupabaseInfo();

    return createClient(url, key);
}

/** Creates an instance of Supabase, then get the current user. */
export function useSupabaseUser() {
    const { url, key } = useSupabaseInfo();

    const supabase = createClient(url, key);

    return supabase.auth.getUser();
}