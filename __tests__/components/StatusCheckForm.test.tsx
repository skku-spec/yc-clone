import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StatusCheckForm from "@/app/apply/status/StatusCheckForm";

const mockGetApplicationByCredentials = vi.fn();

vi.mock("@/lib/actions/applications", () => ({
  getApplicationByCredentials: (...args: unknown[]) => mockGetApplicationByCredentials(...args),
}));

vi.mock("@/app/apply/status/ApplicationStatusCard", () => ({
  default: ({ application }: { application: { name: string } }) => (
    <div data-testid="application-status-card">{application.name}</div>
  ),
}));

describe("StatusCheckForm", () => {
  beforeEach(() => {
    mockGetApplicationByCredentials.mockReset();
  });

  it("renders email input and student_id input", () => {
    render(<StatusCheckForm />);

    expect(screen.getByPlaceholderText("지원 시 입력한 이메일")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("8~10자리 숫자")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<StatusCheckForm />);

    expect(screen.getByRole("button", { name: "조회하기" })).toBeInTheDocument();
  });

  it("disables submit button when inputs are empty", () => {
    render(<StatusCheckForm />);

    expect(screen.getByRole("button", { name: "조회하기" })).toBeDisabled();
  });

  it("enables submit button after filling both inputs", async () => {
    const user = userEvent.setup();
    render(<StatusCheckForm />);

    const emailInput = screen.getByPlaceholderText("지원 시 입력한 이메일");
    const studentIdInput = screen.getByPlaceholderText("8~10자리 숫자");
    const submitButton = screen.getByRole("button", { name: "조회하기" });

    await user.type(emailInput, "test@example.com");
    await user.type(studentIdInput, "20240001");

    expect(submitButton).toBeEnabled();
  });

  it("calls getApplicationByCredentials with correct email and studentId on submit", async () => {
    const user = userEvent.setup();
    mockGetApplicationByCredentials.mockResolvedValue({ success: true });

    render(<StatusCheckForm />);

    await user.type(screen.getByPlaceholderText("지원 시 입력한 이메일"), "test@example.com");
    await user.type(screen.getByPlaceholderText("8~10자리 숫자"), "20240001");
    await user.click(screen.getByRole("button", { name: "조회하기" }));

    await waitFor(() => {
      expect(mockGetApplicationByCredentials).toHaveBeenCalledWith("test@example.com", "20240001");
    });
  });

  it("shows loading text while submitting", async () => {
    const user = userEvent.setup();
    let resolveRequest: ((value: { success: boolean }) => void) | undefined;

    mockGetApplicationByCredentials.mockReturnValue(
      new Promise((resolve) => {
        resolveRequest = resolve;
      })
    );

    render(<StatusCheckForm />);

    await user.type(screen.getByPlaceholderText("지원 시 입력한 이메일"), "test@example.com");
    await user.type(screen.getByPlaceholderText("8~10자리 숫자"), "20240001");
    await user.click(screen.getByRole("button", { name: "조회하기" }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "조회 중..." })).toBeInTheDocument();
    });

    resolveRequest?.({ success: true });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "조회하기" })).toBeInTheDocument();
    });
  });

  it("renders ApplicationStatusCard when response is successful", async () => {
    const user = userEvent.setup();
    mockGetApplicationByCredentials.mockResolvedValue({
      success: true,
      application: {
        status: "pending",
        name: "홍길동",
        batch: "4",
        created_at: "2024-03-01",
        updated_at: "2024-03-02",
      },
    });

    render(<StatusCheckForm />);

    await user.type(screen.getByPlaceholderText("지원 시 입력한 이메일"), "test@example.com");
    await user.type(screen.getByPlaceholderText("8~10자리 숫자"), "20240001");
    await user.click(screen.getByRole("button", { name: "조회하기" }));

    await waitFor(() => {
      expect(screen.getByTestId("application-status-card")).toBeInTheDocument();
    });
  });

  it("shows error message in red box on error response", async () => {
    const user = userEvent.setup();
    const errorMessage = "해당 정보로 접수된 지원서를 찾을 수 없습니다.";

    mockGetApplicationByCredentials.mockResolvedValue({ error: errorMessage });

    render(<StatusCheckForm />);

    await user.type(screen.getByPlaceholderText("지원 시 입력한 이메일"), "test@example.com");
    await user.type(screen.getByPlaceholderText("8~10자리 숫자"), "20240001");
    await user.click(screen.getByRole("button", { name: "조회하기" }));

    await waitFor(() => {
      const errorBox = screen.getByText(errorMessage);
      expect(errorBox).toBeInTheDocument();
      expect(errorBox).toHaveClass("text-[#b42318]");
    });
  });
});
