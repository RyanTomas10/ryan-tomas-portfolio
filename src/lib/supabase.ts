import { createClient } from '@supabase/supabase-js';

// Sanitize Supabase Project URL in case user provided the REST endpoint with /rest/v1
function cleanSupabaseUrl(rawUrl: string): string {
  if (!rawUrl) return '';
  return rawUrl.trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
}

const rawUrl =
  (typeof process !== 'undefined' && process.env?.SUPABASE_URL) ||
  'https://xcawzjqwocaccrqixuzn.supabase.co';

export const SUPABASE_URL = cleanSupabaseUrl(rawUrl);

export const SUPABASE_ANON_KEY =
  (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY) ||
  'sb_publishable_u32-P1qws1wF0ZpTMEBdKg_2pn57OtB';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

/**
 * Directly submits an inquiry to the Supabase database.
 * Works seamlessly in both local/serverless environments and static hosting (Netlify/Vercel).
 */
export async function submitInquiryToSupabase(inquiry: {
  name: string;
  email: string;
  projectScope: string;
  message: string;
}) {
  const { data, error } = await supabase
    .from('inquiries')
    .insert([
      {
        name: inquiry.name.trim(),
        email: inquiry.email.trim(),
        project_scope: inquiry.projectScope.trim(),
        message: inquiry.message.trim(),
        status: 'pending',
      },
    ])
    .select();

  if (error) {
    console.error('Supabase submission error:', error);
    throw error;
  }

  return data?.[0];
}
