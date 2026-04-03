export const trackEvent = (
  event: string,
  data: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...data,
  });
};