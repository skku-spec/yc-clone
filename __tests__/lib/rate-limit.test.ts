import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { rateLimit } from "@/lib/rate-limit";

describe("rateLimit", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(0);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows requests within limit", () => {
    const key = "within-limit-key";
    const config = { maxRequests: 3, windowMs: 1000 };

    const first = rateLimit(key, config);
    const second = rateLimit(key, config);
    const third = rateLimit(key, config);

    expect(first.allowed).toBe(true);
    expect(second.allowed).toBe(true);
    expect(third.allowed).toBe(true);
  });

  it("blocks when limit is exceeded", () => {
    const key = "exceeded-limit-key";
    const config = { maxRequests: 3, windowMs: 1000 };

    rateLimit(key, config);
    rateLimit(key, config);
    rateLimit(key, config);
    const fourth = rateLimit(key, config);

    expect(fourth.allowed).toBe(false);
    expect(fourth.remaining).toBe(0);
  });

  it("returns correct remaining count", () => {
    const key = "remaining-count-key";
    const config = { maxRequests: 3, windowMs: 1000 };

    const first = rateLimit(key, config);
    const second = rateLimit(key, config);
    const third = rateLimit(key, config);

    expect(first.remaining).toBe(2);
    expect(second.remaining).toBe(1);
    expect(third.remaining).toBe(0);
  });

  it("returns retryAfterMs when blocked", () => {
    const key = "retry-after-key";
    const config = { maxRequests: 3, windowMs: 1000 };

    rateLimit(key, config);
    rateLimit(key, config);
    rateLimit(key, config);
    const blocked = rateLimit(key, config);

    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterMs).toBeGreaterThan(0);
  });

  it("allows requests again after timestamps expire from the window", () => {
    const key = "window-sliding-key";
    const config = { maxRequests: 3, windowMs: 1000 };

    rateLimit(key, config);
    rateLimit(key, config);
    rateLimit(key, config);

    vi.advanceTimersByTime(1001);

    const afterWindow = rateLimit(key, config);

    expect(afterWindow.allowed).toBe(true);
    expect(afterWindow.remaining).toBe(2);
  });

  it("keeps limits independent across keys", () => {
    const config = { maxRequests: 1, windowMs: 1000 };

    rateLimit("key-a", config);
    const blockedA = rateLimit("key-a", config);
    const keyB = rateLimit("key-b", config);

    expect(blockedA.allowed).toBe(false);
    expect(keyB.allowed).toBe(true);
    expect(keyB.remaining).toBe(0);
  });

  it("resets almost instantly with a very short window", () => {
    const key = "short-window-key";
    const config = { maxRequests: 1, windowMs: 1 };

    const first = rateLimit(key, config);
    const blocked = rateLimit(key, config);

    vi.advanceTimersByTime(1);

    const afterReset = rateLimit(key, config);

    expect(first.allowed).toBe(true);
    expect(blocked.allowed).toBe(false);
    expect(afterReset.allowed).toBe(true);
  });
});
