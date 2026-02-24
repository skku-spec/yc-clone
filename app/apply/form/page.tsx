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
  const [error, setError] = useState<string | null>(null);

  // Form states for validation
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [vision, setVision] = useState("");
  const [startupIdea, setStartupIdea] = useState("");
  const [acceptedConsent, setAcceptedConsent] = useState(false);

  // Survey states (Step 3)
  const [equip, setEquip] = useState(false);
  const [photoExp, setPhotoExp] = useState(false);
  const [designExp, setDesignExp] = useState(false);
  const [figma, setFigma] = useState(false);
  const [illustrator, setIllustrator] = useState(false);
  const [experienceExtra, setExperienceExtra] = useState("");

  const totalSteps = 5;

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

  const validateStep = (currentStep: number) => {
    setError(null);
    if (currentStep === 1) {
      if (!name || !studentId || !email || !phone || !major) {
        setError("기본 정보의 모든 필수 항목을 입력해주세요.");
        return false;
      }
      if (studentId.length < 8) {
        setError("올바른 학번을 입력해주세요.");
        return false;
      }
    } else if (currentStep === 2) {
      if (!introduction || !vision || !startupIdea) {
        setError("모든 필수 질문에 답변해주세요.");
        return false;
      }
      if (introduction.length < 300) {
        setError(`자기소개 항목은 최소 300자 이상 작성해야 합니다. (현재 ${introduction.length}자)`);
        return false;
      }
      if (vision.length < 300) {
        setError(`지원 동기 항목은 최소 300자 이상 작성해야 합니다. (현재 ${vision.length}자)`);
        return false;
      }
    }
    return true;
  };

  const goToNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevStep = () => {
    setError(null);
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (formData: FormData) => {
    setError(null);
    if (step === 4 && !acceptedConsent) {
      setError("개인정보 수집 및 이용에 동의해야 제출할 수 있습니다.");
      return;
    }

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
      <div className="mx-auto max-w-[800px] px-6 py-24 text-center animate-in fade-in zoom-in duration-700">
        <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-12 md:p-20 shadow-xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fcfcf8] border-2 border-[#FF6C0F] text-4xl shadow-inner">
              ✨
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl font-black text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] tracking-tight">
            지원이 완료되었습니다!
          </h1>
          
          <div className="space-y-6 text-lg leading-relaxed text-[#6b6b5e] font-['Pretendard',sans-serif]">
            <p>
              성균관대학교 실전창업동아리 <span className="font-bold text-[#16140f]">SPEC 3기</span>에 <br className="hidden md:block"/>
              소중한 시간을 내어 지원해주셔서 진심으로 감사합니다.
            </p>
            
            <div className="mx-auto max-w-[400px] rounded-lg bg-[#fcfcf8] p-6 text-sm text-left border border-[#f0efe6]">
              <h3 className="font-bold text-[#16140f] mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6C0F]"></span> 향후 안내 사항
              </h3>
              <ul className="space-y-2 text-[#4a4a40]">
                <li>• <span className="font-semibold">서류 결과 발표:</span> 9월 15일(월)</li>
                <li>• <span className="font-semibold">안내 채널:</span> 지원서에 기재하신 개별 이메일</li>
                <li>• <span className="font-semibold">문의 사항:</span> spec@skku.edu</li>
              </ul>
            </div>

            <p className="text-sm italic text-[#9a9a8c]">
              작성하신 정성만큼 깊이 고민하고 신중하게 검토하겠습니다.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={() => router.push("/")}
              className="inline-flex h-16 items-center rounded-full bg-[#16140f] px-12 font-['MaruBuri',serif] text-xl italic text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              홈으로 이동하기 →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <div className="mb-12 flex justify-center">
        <div className="flex items-center gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  step === i ? "bg-[#FF6C0F] text-white" : step > i ? "bg-[#16140f] text-white" : "bg-[#ddd9cc] text-[#6b6b5e]"
                }`}
              >
                {i + 1}
              </div>
              {i < 4 && (
                <div className={`ml-4 h-[2px] w-8 md:w-12 rounded-full ${step > i ? "bg-[#16140f]" : "bg-[#ddd9cc]"}`} />
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="홍길동"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">학번 *</span>
                  <input
                    name="student_id"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                    maxLength={10}
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="2024000000"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">이메일 *</span>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    required
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                    placeholder="글로벌경영학과"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#16140f]">지원 차수 *</span>
                  <select
                    name="batch"
                    className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:outline-none bg-white transition-all"
                  >
                    <option value="3">SPEC 3기 러너</option>
                  </select>
                </label>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-100 animate-shake">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={goToPrevStep}
                className="h-14 flex-1 rounded-full border border-[#ddd9cc] font-semibold text-[#6b6b5e] hover:bg-gray-50 transition-colors"
              >
                이전으로
              </button>
              <button
                type="button"
                onClick={goToNextStep}
                className="h-14 flex-[2] rounded-full bg-[#16140f] font-semibold text-white hover:opacity-90 transition-opacity"
              >
                다음 단계로 →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-8 space-y-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] border-b border-[#f0efe6] pb-4">
                자기소개 및 지원 동기
              </h2>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">
                  창업과 관련된 경험 혹은 단체 활동 및 프로젝트 경험을 통해 파악한 본인의 강점과 약점, 그리고 갈등을 해결했던 경험이 있다면 작성해주세요. *
                </span>
                <p className="mb-3 text-xs text-[#6b6b5e]">* 최소 300자, 자유 분량 (현재 {introduction.length}자)</p>
                <textarea
                  name="introduction"
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  required
                  rows={10}
                  className="w-full rounded-md border border-[#ddd9cc] p-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all leading-relaxed"
                  placeholder="본인의 강점, 약점, 그리고 문제 해결 경험을 구체적으로 기술해주세요."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">
                  SPEC에 지원한 동기와 SPEC 활동을 통해 이루고자 하는 목표를 작성해주세요. *
                </span>
                <p className="mb-3 text-xs text-[#6b6b5e]">* 최소 300자, 자유 분량 (현재 {vision.length}자)</p>
                <textarea
                  name="vision"
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  required
                  rows={10}
                  className="w-full rounded-md border border-[#ddd9cc] p-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all leading-relaxed"
                  placeholder="지원을 결심하게 된 계기와 SPEC을 통해 어떤 성취를 얻고 싶은지 작성해주세요."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">
                  SPEC에서 함께 도전해보고 싶은 창업 아이템(아이디어)이 있다면 자유롭게 작성해주세요. *
                </span>
                <p className="mb-3 text-xs text-[#6b6b5e]">* 공백 포함 자유 분량</p>
                <textarea
                  name="startup_idea"
                  value={startupIdea}
                  onChange={(e) => setStartupIdea(e.target.value)}
                  required
                  rows={6}
                  className="w-full rounded-md border border-[#ddd9cc] p-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all leading-relaxed"
                  placeholder="구체적인 아이디어가 아니어도 괜찮습니다. 관심 있는 도메인이나 해결해보고 싶은 문제를 적어주세요."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#16140f]">첨부하고자 하는 이력서 혹은 포트폴리오가 있다면 URL을 제출해주세요. (선택)</span>
                <input
                  name="portfolio_url"
                  type="url"
                  className="h-12 w-full rounded-md border border-[#ddd9cc] px-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                  placeholder="https://docs.google.com/..., https://notion.so/..."
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
                onClick={goToPrevStep}
                className="h-14 flex-1 rounded-full border border-[#ddd9cc] font-semibold text-[#6b6b5e] hover:bg-gray-50 transition-colors"
                disabled={isPending}
              >
                이전으로
              </button>
              <button
                type="button"
                onClick={goToNextStep}
                className="h-14 flex-[2] rounded-full bg-[#16140f] font-semibold text-white hover:opacity-90 transition-opacity"
              >
                다음 단계로 →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-8 space-y-7 shadow-sm font-['Pretendard',sans-serif]">
              <h2 className="text-2xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] border-b border-[#f0efe6] pb-4">
                촬영/디자인 경험 조사
              </h2>
              
              <div className="space-y-10 pt-4">
                <p className="text-sm leading-relaxed text-[#4a4a40]">
                  본 항목은 우대 사항이며, <span className="font-bold">선발 시 앞선 지원서의 내용을 더욱 중요하게 평가합니다.</span> 해당되지 않더라도 걱정하지 않으셔도 됩니다! 😊 해당되는 분들은 아래 설문에 답변해 주세요.
                </p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-bold text-[#16140f]">영상 촬영 경력 및 장비 소지 여부</h3>
                    <p className="text-xs text-[#6b6b5e]">* 응답에 따라 가산점이 부여됩니다.</p>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="equip" 
                        checked={equip}
                        onChange={(e) => setEquip(e.target.checked)}
                        className="h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]" 
                      />
                      <span className="text-[#6b6b5e] group-hover:text-[#16140f] transition-colors">촬영 장비 소지</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="photo_exp" 
                        checked={photoExp}
                        onChange={(e) => setPhotoExp(e.target.checked)}
                        className="h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]" 
                      />
                      <span className="text-[#6b6b5e] group-hover:text-[#16140f] transition-colors">촬영 경력 있음</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-6 border-t border-[#f0efe6] pt-10">
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-bold text-[#16140f]">디자인 경력 및 툴 사용 여부</h3>
                    <p className="text-xs text-[#6b6b5e]">* 응답에 따라 가산점이 부여됩니다.</p>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="design_exp" 
                        checked={designExp}
                        onChange={(e) => setDesignExp(e.target.checked)}
                        className="h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]" 
                      />
                      <span className="text-[#6b6b5e] group-hover:text-[#16140f] transition-colors">디자인 경력 있음</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="figma" 
                        checked={figma}
                        onChange={(e) => setFigma(e.target.checked)}
                        className="h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]" 
                      />
                      <span className="text-[#6b6b5e] group-hover:text-[#16140f] transition-colors">피그마 사용 가능</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="illustrator" 
                        checked={illustrator}
                        onChange={(e) => setIllustrator(e.target.checked)}
                        className="h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]" 
                      />
                      <span className="text-[#6b6b5e] group-hover:text-[#16140f] transition-colors">일러스트레이터 사용 가능</span>
                    </label>
                    <div className="pt-2">
                      <label className="block space-y-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]" />
                          <span className="text-[#6b6b5e]">기타:</span>
                        </div>
                        <textarea
                          name="experience_extra"
                          value={experienceExtra}
                          onChange={(e) => setExperienceExtra(e.target.value)}
                          className="w-full rounded-md border border-[#ddd9cc] p-4 text-sm focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F] focus:outline-none transition-all"
                          placeholder="다양한 AI 툴들을 활용해 간단한 영상을 만든 경험이 있습니다. 등"
                          rows={3}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="h-14 flex-1 rounded-full border border-[#ddd9cc] font-semibold text-[#6b6b5e] hover:bg-gray-50 transition-colors"
              >
                이전으로
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="h-14 flex-[2] rounded-full bg-[#16140f] font-semibold text-white hover:opacity-90 transition-opacity"
              >
                다음 단계로 →
              </button>
            </div>
          </div>
        )}

        {/* Hidden inputs to preserve data across steps for final submission */}
        <input type="hidden" name="name" value={name} />
        <input type="hidden" name="student_id" value={studentId} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="phone" value={phone} />
        <input type="hidden" name="major" value={major} />
        <input type="hidden" name="introduction" value={introduction} />
        <input type="hidden" name="vision" value={vision} />
        <input type="hidden" name="startup_idea" value={startupIdea} />
        <input type="hidden" name="batch" value="3" />

        {/* hidden survey inputs */}
        <input type="hidden" name="equip" value={equip ? "true" : "false"} />
        <input type="hidden" name="photo_exp" value={photoExp ? "true" : "false"} />
        <input type="hidden" name="design_exp" value={designExp ? "true" : "false"} />
        <input type="hidden" name="figma" value={figma ? "true" : "false"} />
        <input type="hidden" name="illustrator" value={illustrator ? "true" : "false"} />
        <input type="hidden" name="experience_extra" value={experienceExtra} />

        {step === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-[10px] border border-[#ddd9cc] bg-white p-8 space-y-7 shadow-sm">
              <h2 className="text-2xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] border-b border-[#f0efe6] pb-4">
                개인정보 수집 및 동의
              </h2>

              <div className="rounded-lg bg-[#fcfcf8] p-6 text-sm text-[#6b6b5e] leading-relaxed border border-[#f0efe6]">
                <h3 className="font-bold text-[#16140f] mb-3">개인정보 수집 및 이용 안내</h3>
                <ul className="space-y-2 list-disc pl-4">
                  <li>수집 항목: 성명, 학번, 이메일, 연락처, 전공, 자기소개 등 지원 시 기재한 내용</li>
                  <li>수집 목적: SPEC 3기 회원 선발 및 활동 관리</li>
                  <li>보유 기간: 선발 종료 후 1년 간 보관 후 파기</li>
                </ul>
                <p className="mt-4 text-xs font-medium text-[#16140f]">
                  * 귀하는 동의를 거부할 권리가 있으나, 동의 거부 시 선발 과정에서 제외될 수 있습니다.
                </p>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input
                  id="consent-checkbox"
                  type="checkbox"
                  checked={acceptedConsent}
                  onChange={(e) => setAcceptedConsent(e.target.checked)}
                  required
                  className="mt-1 h-5 w-5 rounded border-[#ddd9cc] text-[#FF6C0F] focus:ring-[#FF6C0F]"
                />
                <label htmlFor="consent-checkbox" className="text-sm font-medium text-[#16140f] select-none cursor-pointer">
                  개인정보 수집 및 이용에 동의합니다. (필수)
                </label>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-100 animate-shake">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={goToPrevStep}
                className="h-14 flex-1 rounded-full border border-[#ddd9cc] font-semibold text-[#6b6b5e] hover:bg-gray-50 transition-colors"
                disabled={isPending}
              >
                이전으로
              </button>
              <button
                type="submit"
                disabled={isPending || !acceptedConsent}
                className="h-14 flex-[2] rounded-full bg-[#FF6C0F] font-semibold text-white hover:opacity-90 disabled:opacity-30 transition-all shadow-md active:scale-95"
              >
                {isPending ? "제출 처리 중..." : "최종 제출하기 →"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
