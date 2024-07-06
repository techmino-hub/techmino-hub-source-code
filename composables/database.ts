import { createClient } from "@supabase/supabase-js";
import { DBWrapper } from '~/assets/scripts/database';

export const useSupabaseInfo = () => {
    const runtimeConfig = useRuntimeConfig();

    console.debug('cfg', runtimeConfig); // DEBUG

    return {
        url: runtimeConfig.public.supabaseUrl,
        key: runtimeConfig.public.supabaseAnonKey
    }
}

/** Creates an instance of the database wrapper. */
export const useDatabase = () => {
    const { url, key } = useSupabaseInfo();

    return new DBWrapper(url, key);
};

/** Creates an instance of Supabase. */
export const useSupabase = () => {
    const { url, key } = useSupabaseInfo();

    return createClient(url, key);
}

/** Creates an instance of Supabase, then get the current user. */
export const useSupabaseUser = () => {
    const { url, key } = useSupabaseInfo();

    const supabase = createClient(url, key);

    return supabase.auth.getUser();
}