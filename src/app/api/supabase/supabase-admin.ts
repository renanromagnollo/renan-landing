import { TEnvironment } from "@/src/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class SupabaseAdminClientFactory {
  static create(env: TEnvironment): SupabaseClient {
    if (typeof window !== "undefined") {
      throw new Error("Admin client cannot run on client side")
    }
    return createClient(
      env.supabase.apiUrl,
      env.supabase.roleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        }
      }
    )
  }
}