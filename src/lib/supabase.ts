import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hsbszwksktdotdgsvpbv.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYnN6d2tza3Rkb3RkZ3N2cGJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjE2MzU1OSwiZXhwIjoyMDIxNzM5NTU5fQ.hq4hIcDIuZqF_yokXAo--0tgK9LV856F4L5KVRCD9hY'
)