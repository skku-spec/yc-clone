/**
 * In-memory sliding window rate limiter.
 * Zero dependencies. Works with Next.js Server Actions.
 *
 * NOTE: In-memory store resets on server restart and is per-instance.
 * This is acceptable for a single-instance Vercel deployment.
 * For multi-instance, use Redis or Upstash instead.
 */

type RateLimitEntry = {
  timestamps: number[];
};

const store = new Map<string, RateLimitEntry>();

// Cleanup interval: remove stale entries every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000;

let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function ensureCleanup(windowMs: number) {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store.entries()) {
      entry.timestamps = entry.timestamps.filter((ts) => now - ts < windowMs);
      if (entry.timestamps.length === 0) {
        store.delete(key);
      }
    }
  }, CLEANUP_INTERVAL);
  // Allow Node.js process to exit even if timer is active
  if (cleanupTimer && typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
    cleanupTimer.unref();
  }
}

type RateLimitConfig = {
  /** Maximum number of requests allowed within the window */
  maxRequests: number;
  /** Time window in milliseconds */
  windowMs: number;
};

type RateLimitResult = {
  /** Whether the request is allowed */
  allowed: boolean;
  /** Remaining requests in the current window */
  remaining: number;
  /** Milliseconds until the oldest request expires (0 if allowed) */
  retryAfterMs: number;
};

/**
 * Check and consume a rate limit slot for the given identifier.
 *
 * @example
 * ```ts
 * const ip = (await headers()).get("x-forwarded-for") ?? "unknown";
 * const result = rateLimit(`apply:${ip}`, { maxRequests: 3, windowMs: 15 * 60 * 1000 });
 * if (!result.allowed) {
 *   return { error: "너무 많은 요청입니다. 잠시 후 다시 시도해주세요." };
 * }
 * ```
 */
export function rateLimit(identifier: string, config: RateLimitConfig): RateLimitResult {
  const { maxRequests, windowMs } = config;
  const now = Date.now();

  ensureCleanup(windowMs);

  const entry = store.get(identifier) ?? { timestamps: [] };

  // Remove expired timestamps
  entry.timestamps = entry.timestamps.filter((ts) => now - ts < windowMs);

  if (entry.timestamps.length >= maxRequests) {
    // Rate limited
    const oldestTimestamp = entry.timestamps[0];
    const retryAfterMs = oldestTimestamp + windowMs - now;

    store.set(identifier, entry);

    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: Math.max(0, retryAfterMs),
    };
  }

  // Allow and record
  entry.timestamps.push(now);
  store.set(identifier, entry);

  return {
    allowed: true,
    remaining: maxRequests - entry.timestamps.length,
    retryAfterMs: 0,
  };
}
