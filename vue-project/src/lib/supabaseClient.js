import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://dctworfsniezubogathx.supabase.co', '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdHdvcmZzbmllenVib2dhdGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMzk3ODEsImV4cCI6MjAyNzgxNTc4MX0.3TNwmbvfuxmSan_Ma7J7SyF7X100nqkxp5v_DNimGGo>')