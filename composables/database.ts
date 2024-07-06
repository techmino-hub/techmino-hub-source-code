import { createClient } from "@supabase/supabase-js";
import { DBWrapper } from '~/assets/scripts/database';

/** Creates an instance of the database wrapper. */
export const useDatabase = () => {
    const runtimeConfig = useRuntimeConfig();
    const url = runtimeConfig.public.supabaseUrl;
    const key = runtimeConfig.public.supabaseAnonKey;

    return new DBWrapper(url, key);
};

/** Creates an instance of Supabase. */
export const useSupabase = () => {
    const runtimeConfig = useRuntimeConfig();
    const url = runtimeConfig.public.supabaseUrl;
    const key = runtimeConfig.public.supabaseAnonKey;

    return createClient(url, key);
}

/** Creates an instance of Supabase, then get the current user. */
export const useSupabaseUser = () => {
    const runtimeConfig = useRuntimeConfig();
    const url = runtimeConfig.public.supabaseUrl;
    const key = runtimeConfig.public.supabaseAnonKey;

    const supabase = createClient(url, key);

    return supabase.auth.getUser();
}