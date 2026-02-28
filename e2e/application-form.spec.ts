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

test("form supports field input and step navigation", async ({ page }) => {
  await page.goto("/apply/form");

  await page.getByLabel("이름 *").fill("홍길동");
  await page.getByLabel("학번 *").fill("20240001");
  await page.getByLabel("이메일 *").fill("hong@example.com");
  await page.getByLabel("연락처 *").fill("01012345678");
  await page.getByLabel("전공 *").fill("글로벌경영학과");

  await page.getByRole("button", { name: "학년 선택" }).click();
  await page.getByText("2학년").click();

  await page.getByRole("button", { name: "재학 상태 선택" }).click();
  await page.getByText("재학").click();

  await expect(page.locator("input[name='batch'][type='hidden']").first()).toHaveValue("4");

  await page.getByRole("button", { name: "다음 단계로 →" }).click();
  await expect(page.getByText("Step 2 of 4")).toBeVisible();
  await expect(page.getByRole("heading", { name: "지원 질문 (1/2)" })).toBeVisible();

  await page.getByLabel(/Q1\. 왜 창업인가요\?/).fill(longText("Q1"));
  await page.getByLabel(/Q2\. 지금까지 직접 해본 것들을 알려주세요\./).fill(longText("Q2"));
  await page.getByLabel(/Q3\. SPEC에서의 30주가 끝난 후, 어떤 모습이고 싶나요\?/).fill(longText("Q3"));

  await page.getByRole("button", { name: "다음 단계로 →" }).click();
  await expect(page.getByText("Step 3 of 4")).toBeVisible();
  await expect(page.getByRole("heading", { name: "지원 질문 (2/2)" })).toBeVisible();

  await page.getByRole("button", { name: "이전으로" }).click();
  await expect(page.getByText("Step 2 of 4")).toBeVisible();
  await expect(page.getByLabel(/Q1\. 왜 창업인가요\?/)).toHaveValue(longText("Q1"));

  await page.getByRole("button", { name: "이전으로" }).click();
  await expect(page.getByText("Step 1 of 4")).toBeVisible();
  await expect(page.getByLabel("이름 *")).toHaveValue("홍길동");
  await expect(page.getByRole("button", { name: "2학년" })).toBeVisible();
});
