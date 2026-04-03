"use client"

import { Suspense } from "react"
import { AnalyticsScripts } from "./analytics-scripts"
import { AnalyticsProvider } from "./analytics-provider"

export function AnalyticsRoot() {
  return (
    <>
      <AnalyticsScripts />
      < Suspense fallback={null} >
        <AnalyticsProvider />
      </Suspense >
    </>
  )
}