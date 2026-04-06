"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Ignora o primeiro load (GTM já cuida disso)
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const search = searchParams.toString();
    const url = pathname + (search ? `?${search}` : "");

    const isExternalReferrer =
      typeof document !== "undefined" &&
      document.referrer &&
      !document.referrer.includes(window.location.origin);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
      referrer: document.referrer || null,
      is_external_referrer: isExternalReferrer,
    });
  }, [pathname, searchParams]);

  return null;
}