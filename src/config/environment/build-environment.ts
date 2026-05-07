
export function buildEnvironment() {
  return {
    googleAnalytics: {
      // gaTracking: process.env.GOOGLE_ANALYTICS_TRACKING as string,
      trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID as string
    },
    hygraph: {
      accessToken: process.env.HYGRAPH_TOKEN as string,
      apiUrl: process.env.HYGRAPH_URL as string
    },
    supabase: {
      apiUrl: process.env.SUPABASE_URL as string,
      secretKey: process.env.SUPABASE_SECRET_KEY as string,
      roleKey: process.env.SUPABASE_SERVICE_ROLE_KEY as string
    },
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY!,
      siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
    }
  }
}