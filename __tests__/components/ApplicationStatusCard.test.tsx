import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ApplicationStatusCard from "@/app/apply/status/ApplicationStatusCard";

const mockApplicationData = {
  status: "pending",
  name: "김철수",
  batch: "4",
  created_at: "2024-03-01",
  updated_at: "2024-03-01",
};

describe("ApplicationStatusCard", () => {
  it("renders applicant name correctly", () => {
    render(<ApplicationStatusCard application={mockApplicationData} />);
    expect(screen.getByText("김철수")).toBeInTheDocument();
  });

  it("renders batch info correctly (e.g. '4기')", () => {
    render(<ApplicationStatusCard application={mockApplicationData} />);
    expect(screen.getByText("4기")).toBeInTheDocument();
  });

  it("renders formatted date for created_at", () => {
    render(<ApplicationStatusCard application={mockApplicationData} />);
    // Korean locale format: "2024년 3월 1일"
    expect(screen.getByText(/2024년 3월 1일/)).toBeInTheDocument();
  });

  describe("Status Badge Rendering", () => {
    it("renders '접수완료' badge for pending status", () => {
      const pending = { ...mockApplicationData, status: "pending" };
      render(<ApplicationStatusCard application={pending} />);
      expect(screen.getByText("접수완료")).toBeInTheDocument();
    });

    it("renders '심사중' badge for under_review status", () => {
      const underReview = { ...mockApplicationData, status: "under_review" };
      render(<ApplicationStatusCard application={underReview} />);
      expect(screen.getByText("심사중")).toBeInTheDocument();
    });

    it("renders '합격' badge for accepted status", () => {
      const accepted = { ...mockApplicationData, status: "accepted" };
      render(<ApplicationStatusCard application={accepted} />);
      expect(screen.getByText("합격")).toBeInTheDocument();
    });

    it("renders '불합격' badge for rejected status", () => {
      const rejected = { ...mockApplicationData, status: "rejected" };
      render(<ApplicationStatusCard application={rejected} />);
      expect(screen.getByText("불합격")).toBeInTheDocument();
    });
  });

  describe("Status Messages", () => {
    it("shows congratulations message when status is accepted", () => {
      const accepted = { ...mockApplicationData, status: "accepted" };
      render(<ApplicationStatusCard application={accepted} />);
      expect(
        screen.getByText("축하합니다! 합격하셨습니다. 추후 안내 메일을 확인해주세요.")
      ).toBeInTheDocument();
    });

    it("shows rejection message when status is rejected", () => {
      const rejected = { ...mockApplicationData, status: "rejected" };
      render(<ApplicationStatusCard application={rejected} />);
      expect(
        screen.getByText(/아쉽게도 이번에는 함께하지 못하게 되었습니다/)
      ).toBeInTheDocument();
    });

    it("does NOT show acceptance message for pending status", () => {
      const pending = { ...mockApplicationData, status: "pending" };
      render(<ApplicationStatusCard application={pending} />);
      expect(
        screen.queryByText("축하합니다! 합격하셨습니다. 추후 안내 메일을 확인해주세요.")
      ).not.toBeInTheDocument();
    });

    it("does NOT show rejection message for pending status", () => {
      const pending = { ...mockApplicationData, status: "pending" };
      render(<ApplicationStatusCard application={pending} />);
      expect(
        screen.queryByText(/아쉽게도 이번에는 함께하지 못하게 되었습니다/)
      ).not.toBeInTheDocument();
    });

    it("does NOT show acceptance message for under_review status", () => {
      const underReview = { ...mockApplicationData, status: "under_review" };
      render(<ApplicationStatusCard application={underReview} />);
      expect(
        screen.queryByText("축하합니다! 합격하셨습니다. 추후 안내 메일을 확인해주세요.")
      ).not.toBeInTheDocument();
    });

    it("does NOT show rejection message for under_review status", () => {
      const underReview = { ...mockApplicationData, status: "under_review" };
      render(<ApplicationStatusCard application={underReview} />);
      expect(
        screen.queryByText(/아쉽게도 이번에는 함께하지 못하게 되었습니다/)
      ).not.toBeInTheDocument();
    });
  });

  it("shows result announcement date ('3월 23일 (월)')", () => {
    render(<ApplicationStatusCard application={mockApplicationData} />);
    expect(screen.getByText("3월 23일 (월)")).toBeInTheDocument();
  });

  it("renders the section title '지원 현황'", () => {
    render(<ApplicationStatusCard application={mockApplicationData} />);
    expect(screen.getByText("지원 현황")).toBeInTheDocument();
  });

  it("renders all label rows", () => {
    render(<ApplicationStatusCard application={mockApplicationData} />);
    expect(screen.getByText("지원자")).toBeInTheDocument();
    expect(screen.getByText("지원 차수")).toBeInTheDocument();
    expect(screen.getByText("접수일")).toBeInTheDocument();
    expect(screen.getByText("현재 상태")).toBeInTheDocument();
    expect(screen.getByText("결과 발표")).toBeInTheDocument();
  });
});
