"use client"

import { Suspense } from "react"
import { AnalyticsProvider } from "./analytics-provider"

export function AnalyticsRoot() {
  return (
    <>
      < Suspense fallback={null} >
        <AnalyticsProvider />
      </Suspense >
    </>
  )
}