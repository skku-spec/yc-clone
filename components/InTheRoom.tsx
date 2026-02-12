'use client';

import { useEffect, useRef, useState } from 'react';

const speakerCards = [
  {
    name: "김태호",
    company: "카카오모빌리티 CTO",
    poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop",
  },
  {
    name: "이수진",
    company: "전 토스 VP of Product",
    poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
  },
  {
    name: "박영훈",
    company: "스파크랩 파트너",
    poster: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
  },
  {
    name: "최서영",
    company: "쿠팡 시니어 PM",
    poster: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop",
  },
  {
    name: "정현수",
    company: "연쇄 창업가 (3x Exit)",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    name: "한지원",
    company: "삼성전자 신사업개발",
    poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
  },
];

const teamCards = [
  {
    name: "홍길동",
    role: "4기 대표",
    batch: "2기 수료",
    description: "에듀테크 스타트업 창업 경험. 프로덕트 매니지먼트와 팀 빌딩 전문.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "김서현",
    role: "4기 부대표",
    batch: "2기 수료",
    description: "핀테크 프로젝트 리드. 데이터 분석과 그로스 해킹 담당.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "이준호",
    role: "커리큘럼 디렉터",
    batch: "1기 수료",
    description: "SaaS 창업 경험. SPEC 커리큘럼 설계와 멘토 매칭 담당.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "박소연",
    role: "VCC 코디네이터",
    batch: "3기 수료",
    description: "RISE 사업단 연계 VCC 프로그램 기획 및 운영.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "정우진",
    role: "파트너십 매니저",
    batch: "2기 수료",
    description: "카카오모빌리티, 삼성 등 기업 파트너십 관리.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "한예진",
    role: "커뮤니티 매니저",
    batch: "3기 수료",
    description: "알럼나이 네트워크 운영, 이벤트 기획, SNS 마케팅.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function InTheRoom() {
  const speakers = useScrollReveal();
  const team = useScrollReveal();

  return (
    <>
      <section className="py-24 lg:py-32 px-6 bg-transparent">
        <div ref={speakers.ref} className="mx-auto max-w-[1100px]">
          <span
            className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            In The Room
          </span>
          <h2
            className="text-5xl font-black uppercase text-white lg:text-6xl"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.02em" }}
          >
            역대 연사
          </h2>
          <p
            className="text-white/70 text-xl mt-4 mb-12 font-normal"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            업계 리더들이 직접 방문해 이야기합니다
          </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {speakerCards.map((speaker) => (
               <div
                 key={speaker.name}
                 className="rounded-xl overflow-hidden relative border border-white/10"
                 style={{
                   backgroundColor: "#1a1a1a",
                   aspectRatio: "16 / 9",
                   opacity: speakers.isVisible ? 1 : 0,
                   transform: speakers.isVisible
                     ? "translateY(0)"
                     : "translateY(32px)",
                   transition: "opacity 0.5s ease, transform 0.5s ease",
                 }}
               >
                 <img
                   src={speaker.poster}
                   alt={`${speaker.name} - ${speaker.company}`}
                   loading="lazy"
                   className="absolute inset-0 w-full h-full object-cover opacity-80"
                 />

                 <div
                   className="absolute bottom-0 left-0 right-0 h-[120px]"
                   style={{
                     background:
                       "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
                   }}
                 />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                   <p
                     className="text-white font-semibold text-xl"
                     style={{
                       fontFamily: "'Pretendard', sans-serif",
                     }}
                   >
                     {speaker.name}
                   </p>
                   <p
                     className="text-white/80 font-normal text-base"
                     style={{
                       fontFamily: "'Pretendard', sans-serif",
                     }}
                   >
                     {speaker.company}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-transparent">
        <div ref={team.ref} className="mx-auto max-w-[1100px]">
          <span
            className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            The Team
          </span>
          <h2
            className="text-5xl font-black uppercase text-white lg:text-6xl"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.02em" }}
          >
            운영진
          </h2>
          <p
            className="text-white/70 text-xl mt-4 mb-12 font-normal"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            모든 운영진은 직접 창업을 경험한 사람들입니다
          </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {teamCards.map((member) => (
               <div
                 key={member.name}
                 className="overflow-hidden relative block rounded-xl border border-white/10"
                 style={{
                   backgroundColor: "#1a1a1a",
                   aspectRatio: "3 / 3.5",
                   opacity: team.isVisible ? 1 : 0,
                   transform: team.isVisible
                     ? "translateY(0)"
                     : "translateY(32px)",
                   transition: "opacity 0.5s ease, transform 0.5s ease",
                 }}
               >
                 <img
                   src={member.photo}
                   alt={member.name}
                   loading="lazy"
                   className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
                 />

                 <div
                   className="absolute inset-0"
                   style={{
                     background:
                       "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.9) 100%)",
                   }}
                 />

                 <div
                   className="absolute bottom-0 left-0 right-0"
                   style={{ padding: "30px" }}
                 >
                   <p
                     className="text-white font-bold text-xl"
                     style={{
                       fontFamily: "'Pretendard', sans-serif",
                     }}
                   >
                     {member.name}
                   </p>
                   <p
                     className="text-white/70 font-normal text-base mb-1"
                     style={{
                       fontFamily: "'Pretendard', sans-serif",
                     }}
                   >
                     {member.role}
                   </p>
                   <p
                     className="text-white/80 font-normal text-base"
                     style={{
                       fontFamily: "'Pretendard', sans-serif",
                       lineHeight: 1.5,
                     }}
                   >
                     <span className="text-white/60">{member.batch}</span>
                     {" · "}
                     {member.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </>
  );
}
