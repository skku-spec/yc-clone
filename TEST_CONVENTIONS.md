# Testing Conventions & Setup Guide
## YC-Clone Project

---

## ✅ Current Testing Setup

### What Works Now: Playwright E2E Tests

The project already has **Playwright** configured for E2E testing with proper CI/CD integration.

#### Run E2E Tests Locally
```bash
npm test                 # Headless
npm run test:ui        # Interactive UI mode
```

#### E2E Test Files Location
```
e2e/
├── public-pages.spec.ts       (6 tests - public routes)
├── protected-routes.spec.ts   (4 tests - auth redirects)
└── application-form.spec.ts   (3 tests - form functionality)
```

---

## 📋 Existing Playwright Convention

### File Naming
```typescript
// Pattern: *.spec.ts
e2e/public-pages.spec.ts
```

### Test Structure
```typescript
import { expect, test } from "@playwright/test";

test("page loads without errors", async ({ page }) => {
  // ARRANGE: Set up initial state
  await page.goto("/path");
  
  // ACT: Perform actions
  await page.getByRole("button").click();
  
  // ASSERT: Verify outcomes
  await expect(page).toHaveURL("/expected-path");
  await expect(page.getByRole("heading")).toBeVisible();
});
```

### Best Practices (From Existing Tests)

1. **Use Semantic Locators**
   ```typescript
   page.getByRole("heading", { name: /heading text/i })
   page.getByRole("button", { name: "Click me" })
   page.getByLabel("Form Label")
   page.getByText("Some text")
   ```
   ✅ DON'T: `page.querySelector(".class")` or `page.$('#id')`

2. **Test Data with Parameterization**
   ```typescript
   const testCases = [
     { path: "/", heading: /Home/i },
     { path: "/about", heading: /About/i },
   ];
   
   for (const testCase of testCases) {
     test(`${testCase.heading} page`, async ({ page }) => {
       await page.goto(testCase.path);
       await expect(page.getByRole("heading", { name: testCase.heading })).toBeVisible();
     });
   }
   ```

3. **Error Detection**
   ```typescript
   const consoleErrors: string[] = [];
   page.on("console", (message) => {
     if (message.type() === "error") consoleErrors.push(message.text());
   });
   // ... test actions ...
   expect(consoleErrors).toEqual([]);
   ```

4. **Wait for Network**
   ```typescript
   await page.waitForLoadState("networkidle");
   ```

---

## ❌ What's NOT Set Up (Yet)

### Missing: Unit Testing Framework
No Jest or Vitest configured for:
- Component unit tests
- Utility function tests  
- Hook tests
- API mocking

### Missing: Test Utilities
No helper files for:
- Mock Supabase client
- Test fixtures
- Common test helpers
- Component render utilities

---

## 🚀 Recommended Next Steps

### Step 1: Choose Unit Test Framework
**Recommendation: Vitest** (for Next.js projects)
- Faster than Jest
- Native ESM support
- Great TypeScript integration
- Smaller bundle impact

**Alternative: Jest** (if already familiar)
- Mature ecosystem
- More tutorials/examples
- Works well with Next.js

### Step 2: Installation Commands
If choosing **Vitest**:
```bash
npm install -D vitest @vitest/ui
npm install -D @testing-library/react @testing-library/dom
npm install -D @testing-library/jest-dom
npm install -D @testing-library/user-event
```

If choosing **Jest**:
```bash
npm install -D jest @types/jest ts-jest
npm install -D @testing-library/react @testing-library/dom
npm install -D @testing-library/jest-dom
npm install -D @testing-library/user-event
```

### Step 3: Create Base Configuration

**For Vitest** (`vitest.config.ts`):
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test-setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

**For Jest** (`jest.config.js`):
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

### Step 4: Add Package.json Scripts

Add to `"scripts"`:
```json
{
  "test:unit": "vitest",
  "test:unit:ui": "vitest --ui",
  "test:watch": "vitest --watch",
  "test:coverage": "vitest --coverage",
  "test": "playwright test"
}
```

### Step 5: Create Test Utils

Create `test-utils/index.ts`:
```typescript
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</> // Add providers as needed
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

### Step 6: Create Directory Structure

```
project/
├── __tests__/
│   ├── setup.ts                 (shared setup)
│   └── fixtures/
│       ├── supabase.mock.ts     (Supabase mocks)
│       └── data.ts              (test data)
├── components/
│   ├── Button.tsx
│   └── __tests__/
│       └── Button.test.tsx      (component test)
├── lib/
│   ├── utils.ts
│   └── __tests__/
│       └── utils.test.ts        (utils test)
├── hooks/
│   ├── useAuth.ts
│   └── __tests__/
│       └── useAuth.test.ts      (hook test)
├── test-utils/
│   └── index.ts
├── vitest.config.ts
├── test-setup.ts
└── package.json
```

---

## 💡 Example: Writing Your First Unit Test

### Component Test Example

**Component**: `components/Badge.tsx`
```typescript
export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'error'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>
}
```

**Test**: `components/__tests__/Badge.test.ts`
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test-utils'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Hello</Badge>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('applies default variant', () => {
    render(<Badge>Default</Badge>)
    expect(screen.getByText('Default')).toHaveClass('badge-default')
  })

  it('applies custom variant', () => {
    render(<Badge variant="success">Success</Badge>)
    expect(screen.getByText('Success')).toHaveClass('badge-success')
  })
})
```

### Utility Test Example

**Utility**: `lib/validateEmail.ts`
```typescript
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
```

**Test**: `lib/__tests__/validateEmail.test.ts`
```typescript
import { describe, it, expect } from 'vitest'
import { validateEmail } from '../validateEmail'

describe('validateEmail', () => {
  it('returns true for valid emails', () => {
    expect(validateEmail('user@example.com')).toBe(true)
    expect(validateEmail('test.email+tag@domain.co.uk')).toBe(true)
  })

  it('returns false for invalid emails', () => {
    expect(validateEmail('invalid')).toBe(false)
    expect(validateEmail('user@')).toBe(false)
    expect(validateEmail('@domain.com')).toBe(false)
  })
})
```

### Hook Test Example

**Hook**: `hooks/useCounter.ts`
```typescript
import { useState } from 'react'

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial)
  return {
    count,
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
  }
}
```

**Test**: `hooks/__tests__/useCounter.test.ts`
```typescript
import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  it('increments count', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  it('decrements count', () => {
    const { result } = renderHook(() => useCounter(5))
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(4)
  })
})
```

---

## 📚 Testing Supabase Code

### Mocking Supabase Client

Create `test/fixtures/supabase.mock.ts`:
```typescript
import { vi } from 'vitest'

export const mockSupabaseClient = {
  auth: {
    getSession: vi.fn(),
    onAuthStateChange: vi.fn(),
  },
  from: vi.fn().mockReturnValue({
    select: vi.fn().mockResolvedValue({ data: [], error: null }),
    insert: vi.fn().mockResolvedValue({ data: {}, error: null }),
    update: vi.fn().mockResolvedValue({ data: {}, error: null }),
    delete: vi.fn().mockResolvedValue({ data: {}, error: null }),
  }),
}

export const mockUseSupabase = vi.fn(() => mockSupabaseClient)
```

### Using in Tests

```typescript
import { describe, it, expect, beforeEach } from 'vitest'
import { mockSupabaseClient, mockUseSupabase } from '@/__tests__/fixtures/supabase.mock'

describe('MyComponent with Supabase', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('loads data from Supabase', () => {
    mockSupabaseClient.from('users').select.mockResolvedValueOnce({
      data: [{ id: 1, name: 'John' }],
      error: null,
    })
    
    // Test implementation...
  })
})
```

---

## 🔗 Integration with CI/CD

The `e2e` test job already runs automatically in GitHub Actions.

To add unit tests to CI/CD, update `.github/workflows/cicd.yml`:

```yaml
unit-test:
  name: ci-unit-test
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: 20
        cache: npm
    - run: npm ci
    - run: npm run test:unit -- --run  # --run for CI (non-watch)
```

---

## 🎯 Summary

### Quick Start Checklist

- [ ] Choose test framework (Vitest recommended)
- [ ] Install dependencies
- [ ] Create configuration file
- [ ] Create test-utils helper
- [ ] Create first unit test
- [ ] Add scripts to package.json
- [ ] Update CI/CD workflow
- [ ] Document team conventions

### Key Points

✅ **Keep existing**: Playwright E2E tests work great  
❌ **Add now**: Unit test framework + utilities  
🎯 **Follow convention**: Existing Playwright patterns apply to unit tests too

### Resources

- [Vitest Docs](https://vitest.dev/)
- [Jest Docs](https://jestjs.io/)
- [React Testing Library Docs](https://testing-library.com/react)
- [Playwright Docs](https://playwright.dev/)

