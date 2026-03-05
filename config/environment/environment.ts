import { THygraphEnv } from "./hygraph-env"
import { TSupabaseEnv } from "./supabase-env"


export type TEnvironment = {
  googleAnalytics: {
    trackingId: string
  }
  hygraph: THygraphEnv
  supabase: TSupabaseEnv
}