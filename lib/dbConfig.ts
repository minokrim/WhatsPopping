import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if(!supabaseUrl || !supabaseKey){
  console.error("supabase config failed"); 
}
export const supabase = createClient(supabaseUrl, supabaseKey)