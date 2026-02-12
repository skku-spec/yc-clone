import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "SPEC 소개 | SPEC — 성균관대 창업학회",
  description:
    "SPEC은 성균관대학교에서 시작된 실전 창업 학회입니다. 이론이 아닌 실행으로 증명합니다.",
};

const tocLinks = [
  { label: "소개", href: "#intro" },
  { label: "The Program", href: "#the-program" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Community", href: "#community" },
  { label: "Demo Day", href: "#demo-day" },
];

const pageLinks = [
  { label: "멤버", href: "/people" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "프레스", href: "/press" },
];

const pClass =
  "mb-6 font-['MaruBuri',serif] font-normal text-[17px] leading-[1.75] text-[#16140f] last:mb-0";

const sectionClass = "mb-10";

const h2Class =
  "mb-3 font-['system-ui'] text-[1.5rem] font-bold leading-tight uppercase text-[#16140f]";

const spanClass =
  "mb-3 block font-['Pretendard',sans-serif] font-semibold leading-[1.4] text-[#16140f]";

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <PageHeader title="What Happens at SPEC" />
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12">
        {/* Sidebar Navigation */}
        <nav className="sticky top-24 hidden w-[170px] shrink-0 self-start lg:block">
          <ul className="space-y-2 font-['Pretendard',sans-serif] text-sm font-normal tracking-[0.3px]">
            {tocLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block leading-relaxed text-[#16140f] transition-colors hover:text-orange-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-[#d9d9cc] pt-4">
            <ul className="space-y-2 font-['Pretendard',sans-serif] text-sm font-normal tracking-[0.3px]">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block leading-relaxed text-[#16140f]/60 transition-colors hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

         {/* Main Content */}
         <div className="min-w-0 flex-1">
           <article className="max-w-[720px]">
             <p id="intro" className={`scroll-mt-28 ${pClass}`}>
               SPEC은 성균관대학교에서 시작된 실전 창업 학회입니다. 이론이 아닌 실행으로 증명합니다. 여기서 무슨 일이 벌어지는지 소개합니다.
             </p>

             {/* The Program */}
             <section id="the-program" className={`scroll-mt-28 ${sectionClass}`}>
               <h2 className={h2Class}>The Program</h2>

               <p className={pClass}>
                 <span className={spanClass}>Goal</span>
               </p>
               <p className={pClass}>
                 SPEC의 목표는 30주 안에 창업자가 실제 매출을 만들어내는 것입니다. 아이디어가 아닌 실행으로 증명합니다.
               </p>

               <p className={pClass}>
                 <span className={spanClass}>Phase 1 (W1-W10)</span>
               </p>
               <p className={pClass}>
                 매주 팀 셔플 + 매출 챌린지가 진행됩니다. 10만원을 시작으로 200만원까지 만들어내는 것을 목표로 합니다. 핵심은 간단합니다: &ldquo;일단 팔아라, 만들지 마라.&rdquo;
               </p>

               <p className={pClass}>
                 <span className={spanClass}>Phase 2 (W11-W28)</span>
               </p>
               <p className={pClass}>
                 확정팀이 정해지면서 MVP 개발, 런칭, 매출 스케일링, IR 준비가 진행됩니다. 매주 매출 보드가 공개되면서 투명한 경쟁과 협력의 문화가 형성됩니다.
               </p>

               <p className={pClass}>
                 <span className={spanClass}>Phase 3 (W29-W30)</span>
               </p>
               <p className={pClass}>
                 데모데이에서 투자자와 기업 관계자 앞에서 피칭합니다. 그 후에는 SPEC 알럼나이 네트워크의 일원으로 계속해서 연결됩니다.
               </p>

               <p className={pClass}>
                 <span className={spanClass}>Funding</span>
               </p>
               <p className={pClass}>
                 SPEC은 투자금을 제공하지 않습니다. 대신 더 귀한 것을 제공합니다 &mdash; 돈을 벌어내는 감각, 함께 싸울 팀, 그리고 절대 끊기지 않는 네트워크입니다.
               </p>
             </section>

             {/* Mentoring */}
             <section id="mentoring" className={`scroll-mt-28 ${sectionClass}`}>
               <h2 className={h2Class}>Mentoring</h2>
               <p className={pClass}>
                 카카오모빌리티를 포함한 주요 기업의 현직자 멘토링을 받게 됩니다. VCC (Venture Creation Course) 미니 MBA 커리큘럼도 병행하면서 실무와 이론을 동시에 습득합니다.
               </p>
               <p className={pClass}>
                 격주 1:1 오피스아워와 그룹 세션을 통해 팀의 성장 단계에 맞춘 맞춤형 조언을 받을 수 있습니다.
               </p>
             </section>

             {/* Community */}
             <section id="community" className={`scroll-mt-28 ${sectionClass}`}>
               <h2 className={h2Class}>Community</h2>
               <p className={pClass}>
                 <span className={spanClass}>Alumni Network</span>
               </p>
               <p className={pClass}>
                 SPEC 알럼나이 네트워크는 선배 창업자들과의 연결고리입니다. 30주 프로그램이 끝나도 절대 끝나지 않는 관계를 맺습니다.
               </p>
               <p className={pClass}>
                 <span className={spanClass}>Monthly Gatherings</span>
               </p>
               <p className={pClass}>
                 월간 동문 모임을 통해 아이디어 교환, 협력 기회, 동료 간 문제 해결이 일어납니다.
               </p>
               <p className={pClass}>
                 <span className={spanClass}>Mentoring Juniors</span>
               </p>
               <p className={pClass}>
                 SPEC 알럼나이는 후배 팀들을 멘토링하면서 자신의 경험을 공유하고 커뮤니티를 지속적으로 성장시킵니다.
               </p>
             </section>

             {/* Demo Day */}
             <section id="demo-day" className={`scroll-mt-28 ${sectionClass}`}>
               <h2 className={h2Class}>Demo Day</h2>
               <p className={pClass}>
                 30주의 여정의 마지막은 데모데이입니다. 투자자, 기업 관계자, 미디어 앞에서 팀의 성과를 피칭합니다.
               </p>
               <p className={pClass}>
                 데모데이는 끝이 아닙니다. 그 이후부터 SPEC 알럼나이로서 평생 네트워크와 함께 성장합니다.
               </p>
             </section>
          </article>
        </div>
      </div>
    </main>
  );
}
