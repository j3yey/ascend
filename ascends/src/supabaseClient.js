import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fcseehgswbptbpvigjmo.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjc2VlaGdzd2JwdGJwdmlnam1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NzY2MDQsImV4cCI6MjA2MzE1MjYwNH0.a8zuMyb3uGPE6oXjVs3t5tyHVhUdT0_dkTqN6Y_Qcoo'; // Replace with your Supabase anon/public key

export const supabase = createClient(supabaseUrl, supabaseKey);