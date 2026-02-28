import { expect, test } from "@playwright/test";

const longText = (label: string) => `${label} `.repeat(80);

test("apply page moves to application form", async ({ page }) => {
  await page.goto("/apply");

  await page.getByRole("link", { name: "Apply", exact: true }).nth(1).click();

  await expect(page).toHaveURL("/apply/form");
  await expect(page.getByText("Step 1 of 4")).toBeVisible();
  await expect(page.getByRole("heading", { name: "기본 정보" })).toBeVisible();
});

test("form shows client-side validation errors for empty required fields", async ({ page }) => {
  await page.goto("/apply/form");

  await page.getByRole("button", { name: "다음 단계로 →" }).click();

  await expect(page.getByText("기본 정보의 모든 필수 항목을 입력해주세요.")).toBeVisible();
});

test("form supports required field input and step navigation", async ({ page }) => {
  await page.goto("/apply/form");

  await page.getByLabel("이름 *").fill("홍길동");
  await page.getByLabel("학번 *").fill("20240001");
  await page.getByLabel("이메일 *").fill("hong@example.com");
  await page.getByLabel("연락처 *").fill("01012345678");
  await page.getByLabel("전공 *").fill("글로벌경영학과");

  await expect(page.locator("input[name='batch'][value='4']").first()).toBeAttached();

  await page.getByRole("button", { name: "다음 단계로 →" }).click();
  await expect(page.getByText("Step 2 of 4")).toBeVisible();
  await expect(page.getByRole("heading", { name: "자기소개 및 지원 동기" })).toBeVisible();

  await page.getByLabel(/창업과 관련된 경험.*\*/).fill(longText("자기소개"));
  await page.getByLabel(/SPEC에 지원한 동기.*\*/).fill(longText("지원동기"));
  await page.getByLabel(/SPEC에서 함께 도전해보고 싶은 창업 아이템.*\*/).fill("캠퍼스 기반 B2B SaaS 아이디어를 검증하고 싶습니다.");

  await page.getByRole("button", { name: "다음 단계로 →" }).click();
  await expect(page.getByText("Step 3 of 4")).toBeVisible();
  await expect(page.getByRole("heading", { name: "촬영/디자인 경험 조사" })).toBeVisible();

  await page.getByRole("button", { name: "이전으로" }).click();
  await expect(page.getByText("Step 2 of 4")).toBeVisible();
  await expect(page.getByLabel(/창업과 관련된 경험.*\*/)).toHaveValue(longText("자기소개"));

  await page.getByRole("button", { name: "이전으로" }).click();
  await expect(page.getByText("Step 1 of 4")).toBeVisible();
  await expect(page.getByLabel("이름 *")).toHaveValue("홍길동");
});
