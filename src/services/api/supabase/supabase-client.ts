import { TEnvironment } from "@/src/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";


export class SupabaseClientFactory {
  static create(env: TEnvironment): SupabaseClient {
    return createClient(
      env.supabase.apiUrl,
      env.supabase.secretKey,
      {
        auth: {
          persistSession: false
        }
      }
    )
  }
}