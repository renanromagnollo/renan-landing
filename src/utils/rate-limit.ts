// src/lib/rate-limit.ts

type RateLimitEntry = {
  count: number;
  lastRequest: number;
};

const store = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 1000; // 1 minuto
const MAX_REQUESTS = 5;

export function rateLimit(ip: string): boolean {
  const now = Date.now();

  const entry = store.get(ip);

  if (!entry) {
    store.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  // reset janela
  if (now - entry.lastRequest > WINDOW_MS) {
    store.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  // incrementa
  entry.count++;

  if (entry.count > MAX_REQUESTS) {
    return false;
  }

  return true;
}