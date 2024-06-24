import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hcilqdsjdasfuqmqysht.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjaWxxZHNqZGFzZnVxbXF5c2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3NzQwMTcsImV4cCI6MjAzMjM1MDAxN30.bruDFltURztKEciz9vTiGUfBRxoffTwNl7jTESKyb0I'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
