import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://yhbcdhkdzmoesqnykiaz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloYmNkaGtkem1vZXNxbnlraWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNTE4NzIsImV4cCI6MTk4NDcyNzg3Mn0.OvGyiOlLG79dFQ9IpmzprZYSC0zomol12m0VDGU5m7s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
});