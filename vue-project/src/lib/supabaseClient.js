import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://givenxncncbjahyqmfpn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpdmVueG5jbmNiamFoeXFtZnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNDIxMjksImV4cCI6MjAyOTkxODEyOX0.h_0E7syFHKMpPujcMIttuomU9lAYlbbX87TNv1tVuDI')