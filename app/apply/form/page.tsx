"use client";

import { useTransition, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { submitApplication } from "@/lib/actions/applications";
import { useRouter } from "next/navigation";

export default function ApplicationFormPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 3; // Step 0: Notice, Step 1: Basic, Step 2: Content

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    let formattedValue = "";

    if (value.length <= 3) {
      formattedValue = value;
    } else if (value.length <= 7) {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }

    setPhone(formattedValue);
  };

  const handleSubmit = (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      const result = await submitApplication(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setSubmitted(true);
        window.scrollTo(0, 0);
      }
    });
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-[800px] px-6 py-24 text-center">
        <div className="mb-6 text-6xl animate-bounce">🎉</div>
        <h1 className="mb-4 text-3xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">지원서가 성공적으로 제출되었습니다!</h1>
        <p className="mb-10 text-[#6b6b5e] leading-relaxed">
          SPEC 3기 모집에 지원해주셔서 감사합니다. <br />
          서류 심사 결과는 기입하신 이메일로 안내해 드릴 예정입니다.
        </p>
        <button
          onClick={() => router.push("/")}
          className="inline-flex h-14 items-center rounded-full bg-[#16140f] px-10 font-['MaruBuri',serif] text-lg italic text-white transition-all hover:scale-105 active:scale-95"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <div className="mb-12 flex justify-center">
        <div className="flex items-center gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  step === i ? "bg-[#FF6C0F] text-white" : step > i ? "bg-[#16140f] text-white" : "bg-[#ddd9cc] text-[#6b6b5e]"
                }`}
              >
                {i + 1}
              </div>
              {i < 2 && (
                <div className={`ml-4 h-[2px] w-12 rounded-full ${step > i ? "bg-[#16140f]" : "bg-[#ddd9cc]"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form action={handleSubmit} className="mx-auto max-w-[800px]">
        {step === 0 && (
          <div className="space-y-12">
            <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-8 md:p-12 shadow-sm">
              <h1 className="mb-8 text-3xl font-black text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] leading-tight">
                실전창업동아리 SPEC 3기 <br /> 러너 리쿠르팅
              </h1>
              
              <div className="prose prose-sm max-w-none text-[#4a4a40] space-y-8 font-['Pretendard',sans-serif]">
                <p className="text-lg leading-relaxed">
                  안녕하세요, 성균관대학교 실전창업동아리 SPEC입니다!<br/><br/>
                  🚀 창업 아이디어는 있지만, 함께할 팀원을 찾기 어려우셨나요?<br/>
                  📖 밑바닥부터 실전 창업을 경험하고 싶다면?
                </p>

                <div className="bg-[#fcfcf8] p-6 rounded-lg border border-[#f0efe6]">
                  <p>
                    SPEC은 다양한 멘토분들의 강연을 통해 창업에 대한 지식을 쌓고, 여러 학과의 사람들이 모여 함께 창업에 도전하는 동아리입니다.<br/><br/>
                    SPEC은 러너(Learner)와 프러너(Preneur) 두 가지 트랙으로 운영되며, 이 지원서는 러너(Learner) 모집을 위한 지원서입니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#16140f]">📢 러너(Learner)란?</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>창업에 대한 교육 및 팀 프로젝트를 중심으로 활동하는 트랙입니다.</li>
                    <li>매주 정기 세션에 참여해야 합니다.</li>
                    <li>팀 프로젝트를 통해 포트폴리오를 쌓고, 실전 창업 역량을 기를 수 있습니다.</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#16140f] flex items-center gap-2">
                       <span className="h-2 w-2 rounded-full bg-[#FF6C0F]"></span> 지원 정보
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>지원 자격:</strong> 창업에 관심 있는 누구나</li>
                      <li>• <strong>활동 기간:</strong> 2025년 2학기 (25.09.22. ~ 26.03.03.)</li>
                      <li>• <strong>회비:</strong> 35,000원</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#16140f] flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FF6C0F]"></span> 활동 정보
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>정기 세션:</strong> 매주 월요일 저녁 7시</li>
                      <li>• <strong>활동 장소:</strong> 자연과학캠퍼스</li>
                      <li>• <strong>주요 활동:</strong> 멘토 강연, 아이디어톤, 데모데이 등</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 bg-[#16140f] text-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold">📢 러너 모집 일정</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm opacity-90">
                    <span className="font-semibold">1차 서류 접수</span>
                    <span>~ 9월 14일 23:59</span>
                    <span className="font-semibold">서류 결과 발표</span>
                    <span>9월 15일(월) 저기</span>
                    <span className="font-semibold">2차 면접 (온라인)</span>
                    <span>9월 16일 - 17일</span>
                    <span className="font-semibold">최종 결과 발표</span>
                    <span>9월 19일(금)</span>
                    <span className="font-semibold text-[#FF6C0F]">OT (필참)</span>
                    <span className="text-[#FF6C0F]">9월 22일(월) 18:00</span>
                  </div>
                </div>

                <p className="text-xs text-[#9a9a8c] italic">
                  📌 보다 자세한 정보는 SPEC 인스타그램(@skku_spec)에서 확인할 수 있습니다.<br/>
                  * 본 동아리는 성균관대학교 캠퍼스타운사업단과 함께합니다.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex h-[60px] w-full max-w-[400px] items-center justify-center rounded-full bg-[#FF6C0F] font-['MaruBuri',serif] text-xl italic text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                지원서 작성 시작하기 →
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-8 space-y-7 shadow-sm">
              <h2 className="text-2xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] border-b border-[#f0efe6] pb-4">
                기본 정보
              </h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">이름 *</span>
                  <input
                    name="name"
                    required
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="홍길동"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">이메일 *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="example@skku.edu"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">연락처 *</span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={13}
                    required
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">전공 *</span>
                  <input
                    name="major"
                    required
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="글로벌경영학과"
                  />
                </label>
              </div>
              
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">지원 차수 *</span>
                <select
                  name="batch"
                  className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:outline-none bg-white transition-all"
                >
                  <option value="3">SPEC 3기 러너</option>
                  <option value="4">SPEC 4기 (준비중)</option>
                </select>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="h-14 flex-1 rounded-full border border-[#ddd9cc] font-semibold text-[#6b6b5e] hover:bg-gray-50 transition-colors"
              >
                이전으로
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="h-14 flex-[2] rounded-full bg-[#16140f] font-semibold text-white hover:opacity-90 transition-opacity"
              >
                다음 단계로 →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-8 space-y-7 shadow-sm">
              <h2 className="text-2xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] border-b border-[#f0efe6] pb-4">
                자기소개 및 비전
              </h2>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">자기소개 (경험과 역량 중심) *</span>
                <textarea
                  name="introduction"
                  required
                  rows={8}
                  className="w-full rounded-md border border-[#ddd9cc] p-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                  placeholder="창업과 관련된 경험이나 본인만의 강점을 기술해주세요."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">SPEC에서 이루고 싶은 목표 *</span>
                <textarea
                  name="vision"
                  required
                  rows={8}
                  className="w-full rounded-md border border-[#ddd9cc] p-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                  placeholder="SPEC 활동을 통해 어떤 성장을 꿈꾸시나요?"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">포트폴리오 / 관련 링크 (선택)</span>
                <input
                  name="portfolio_url"
                  type="url"
                  className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                  placeholder="https://github.com/username 또는 프로젝트 링크"
                />
              </label>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-100 animate-shake">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="h-14 flex-1 rounded-full border border-[#ddd9cc] font-semibold text-[#6b6b5e] hover:bg-gray-50 transition-colors"
                disabled={isPending}
              >
                이전으로
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="h-14 flex-[2] rounded-full bg-[#FF6C0F] font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-all shadow-md active:scale-95"
              >
                {isPending ? "제출 처리 중..." : "지원서 제출 완료하기 →"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
