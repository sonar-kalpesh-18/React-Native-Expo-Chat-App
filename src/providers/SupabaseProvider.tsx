import { createContext, use, useContext, useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { processLock } from "@supabase/supabase-js";
import { useSession } from "@clerk/clerk-expo";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;
type supabaseContextType = {
    supabase: SupabaseClient;
};
const SupabaseContext = createContext<supabaseContextType>({
    supabase: createClient(supabaseUrl, supabaseAnonKey),
});

export default function SupabaseProvider ({ children }: { children: React.ReactNode }) {
    const { session }= useSession();
    const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
    useEffect(() => {
    const newClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            ...(Platform.OS !== 'web' ? {
                storage: AsyncStorage} : {}),
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: false,
                lock: processLock,
        },
        async accessToken() {
            return session?.getToken() ?? null;
        },
    });
    setSupabase(newClient);
}, [])

    return (
        <SupabaseContext.Provider value={{ supabase }}>
            {children}
        </SupabaseContext.Provider>
    )
}

export const useSupabase = () => {
    const {supabase} = useContext(SupabaseContext);
    return supabase;
}