import { createClient,SupabaseClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.supabaseUrl as string
const supabaseKey = process.env.supabaseKey as string
const supabase:SupabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabase;