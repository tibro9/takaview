import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhxtvamnsvtyqpsgoemo.supabase.co";
const supabaseAnonKey = "sb_publishable_SOeXpVb2NTKiL6kU7dTaQg_ZjaPUEVN";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
