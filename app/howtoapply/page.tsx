import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "지원 가이드 | SPEC",
  description: "SPEC 지원 방법과 좋은 지원서 작성법",
};

export default function HowToApplyPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <PageHeader title="How to Apply" subtitle="SPEC 지원 가이드" align="center" />

      <div className="mx-auto flex max-w-[1100px] flex-col-reverse gap-12 md:flex-row">
        <article className="min-w-0 flex-[2]">
          <h3
            id="intro"
            className="mb-3 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]"
          >
            Introduction
          </h3>

           <h2 className="mb-6 font-['MaruBuri',serif] text-[28px] font-medium leading-snug text-[#16140f]">
             매 기수마다 SPEC은{" "}
             <Link
               href="/apply"
               className="text-[#FF6C0F] underline hover:opacity-70"
             >
               지원서
             </Link>
             를 받습니다. 지원자분들에게 도움이 될 수 있도록, 저희가 지원서를
             읽을 때 무엇을 보는지 설명하겠습니다.
           </h2>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            아마 지원 과정에서 사람들이 가장 잘 모르는 부분은 &apos;명확하게
            표현하는 것&apos;의 중요성일 겁니다. 매 기수마다 우리는 분명히 좋은
            지원서, 분명히 아닌 지원서, 그리고 그 사이의 거대한 회색 지대를
            마주합니다. 아이디어가 괜찮아 보이지만 충분히 설명되지 않아서
            이해하기 어려운 경우, 팀원들이 괜찮은 것 같지만 확신할 수 없는
            경우가 그렇습니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            면접에 초대하는 팀마다, 아마 한두 팀은 실력이 비슷하지만 그걸
            제대로 전달하지 못해서 탈락하는 경우가 있을 겁니다. 다시 말하면,
            면접에 올라올 실력이 되는 팀 중 절반 이상이 지원서 단계에서
            떨어진다는 의미입니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            만약 100개의 지원서를 일주일 안에 읽어야 한다면, 하루에 20개
            이상의 지원서를 검토해야 합니다. 여러분의 지원서를 읽는 심사위원은
            이미 그날 10개의 지원서를 읽었고, 앞으로 10개를 더 읽어야 합니다.
            여러분의 지원서가 눈에 띄어야 합니다. 그래서 명확하고 간결해야
            합니다. 전달하고 싶은 내용이 있다면, 첫 문장에, 가장 단순한
            표현으로 써주세요.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            SPEC의 모든 운영진이 지원서를 읽습니다. 집단사고를 피하기 위해
            각자 독립적으로 평가한 뒤 모여서 논의합니다.
          </p>

          <h3
            id="whatwelookfor"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            What We Look For
          </h3>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            저희가 가장 먼저 보는 질문은 &quot;무엇을 만들 건가요?&quot;
            입니다. 가장 중요한 질문은 아니지만, 지원서 전체를 이해하기 위한
            출발점이기 때문에 먼저 봅니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            가장 좋은 답변은 가장 사실적인 답변입니다. 마케팅 용어를 써서
            아이디어를 더 흥미롭게 포장하려는 것은 실수입니다. 저희는 마케팅
            용어에 면역이 있습니다. 저희에게 그건 그냥 소음일 뿐입니다.
            그러니 이런 식으로 시작하지 마세요:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-['MaruBuri',serif] text-base italic leading-relaxed text-[#16140f]/80">
            우리는 개인과 정보 사이의 관계를 혁신적으로 변환할 것입니다.
          </blockquote>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            인상적으로 들리지만, 아무 내용도 전달하지 못합니다. 어떤 기술
            회사든 될 수 있는 설명입니다. 검색엔진을 만드나요? 데이터베이스
            소프트웨어인가요? 전혀 알 수 없습니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            아이디어를 효과적으로 설명하고 있는지 테스트하는 방법이 있습니다.
            읽는 사람이 그 제품을 얼마나 구체적으로 상상할 수 있는지
            확인하는 것입니다. 위의 문장을 읽고 난 뒤에도 저는 이전보다
            아무것도 더 알게 된 게 없습니다. 내용이 사실상 제로인 것이죠.
            또 다른 흔한 실수는 문제가 얼마나 중요한지에 대한 거창한
            서론으로 시작하는 것입니다:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-['MaruBuri',serif] text-base italic leading-relaxed text-[#16140f]/80">
            정보는 현대 조직의 생명줄입니다. 필요한 사람에게 빠르고 효율적으로
            정보를 전달하는 능력은 조직의 성공에 필수적입니다. 정보 활용에서
            우위를 점하는 기업은, 다른 조건이 같다면, 경쟁사 대비 상당한
            경쟁력을 갖게 됩니다.
          </blockquote>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            역시 내용이 제로입니다. 이걸 읽어도 여러분의 프로젝트를 이해하는
            데 전혀 가까워지지 않습니다. 좋은 답변은 이런 식입니다:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-['MaruBuri',serif] text-base italic leading-relaxed text-[#16140f]/80">
            위키 형태의 인터페이스를 가진 데이터베이스에, 누가 무엇을 보고
            편집할 수 있는지 관리하는 그래픽 UI를 결합한 것입니다.
          </blockquote>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            아직 이게 다음 유니콘이 될 거라고 확신하지는 않지만, 적어도
            관심이 생기기 시작합니다. 그런 제품이 어떤 모습일지 상상하기
            시작하거든요.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            창업자들이 사실적인 설명을 꺼리는 이유는 그것이 자신의 잠재력을
            제한하는 것 같기 때문입니다. &quot;하지만 이건 위키 UI가 달린
            데이터베이스보다 훨씬 더 큰 거예요!&quot; 문제는, 설명이 덜
            제한적일수록 더 적은 것을 말하게 된다는 겁니다. 그러니 사실적인
            쪽으로 치우치는 게 낫습니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            저희는 데모데이에 발표하는 팀들에게도 같은 조언을 합니다.
            프로젝트의 전체 비전을 설명하려다 청중을 완전히 잃는 것보다,
            지나치게 좁은 설명으로 시작하는 게 낫습니다. 잠재력의 절반만
            전달하는 한 문장짜리 설명이 있다면, 사실 꽤 좋은 겁니다.
            첫 문장만으로 목적지의 절반까지 온 거니까요.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            프로젝트를 간결하게 설명하는 좋은 방법은, 청중이 이미 아는
            것의 변형으로 설명하는 것입니다. &quot;조직 내부의
            위키피디아입니다.&quot; &quot;이메일용 자동응답 서비스입니다.&quot;
            &quot;구직자를 위한 중고거래 플랫폼입니다.&quot; 이런 형태의
            설명은 놀라울 정도로 효율적입니다. 이것이 아이디어를
            &quot;파생적&quot;으로 보이게 만들까 걱정하지 마세요. 역사상
            최고의 아이디어 중 일부는 아무도 결합할 수 있다고 생각하지 못한
            두 가지 기존 아이디어를 붙이는 것에서 시작했습니다.
          </p>

          <h3
            id="theteam"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            The Team
          </h3>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            아이디어를 20초 정도 파악한 뒤, 팀원 소개로 넘어갑니다. 처음
            목표는 어떤 유형의 팀인지 파악하는 것입니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            같이 졸업을 앞둔 학교 친구 세 명? 같은 동아리에서 활동하던
            두 명? 모두 개발자인지? 개발자와 기획자의 조합인지? 팀의
            구성은 수십 가지 유형이 있을 수 있습니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            팀 유형을 파악하고 나면, 그 유형에서 얼마나 좋은 팀인지
            판단하려 합니다. 그 판단에 가장 중요한 질문은:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-['MaruBuri',serif] text-base italic leading-relaxed text-[#16140f]/80">
            각 팀원이 만들거나 이루어낸 것 중 가장 인상적인 것을 한두
            문장으로 알려주세요.
          </blockquote>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            저희에게 이것은 지원서에서 가장 중요한 질문입니다. 의도적으로
            열린 질문으로 만들었습니다. 특정 유형의 답을 기대하지 않습니다.
            학교에서 정말 잘했을 수도 있고, 많은 사람이 인정하는 소프트웨어를
            만들었을 수도 있고, 16살에 집을 나와 스스로 학비를 벌었을 수도
            있습니다. 중요한 것은 성취의 종류가 아니라 크기입니다. 스타트업에서
            성공한다는 것은 말 그대로 비범한 일이기에, 비범한 일을 할 수
            있는 사람을 찾고 있습니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            지원서의 모든 질문이 그렇듯, 가장 좋은 답변은 가장 구체적인
            답변입니다. 놀랍도록 많은 사람들이 이런 식으로 답합니다:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-['MaruBuri',serif] text-base italic leading-relaxed text-[#16140f]/80">
            민수는 맡은 모든 프로젝트에 100% 노력을 쏟는 대단히 헌신적인
            사람입니다.
          </blockquote>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            이런 일반적인 주장은 아무 무게가 없습니다. 하나의 구체적인
            사례가 훨씬 설득력 있을 것입니다. 그리고 지원하는 스타트업
            자체를 가장 인상적인 성취로 적는 것은 피해야 합니다. 그건
            이미 알고 있으니까요. 다른 것을 자랑할 기회를 왜 낭비하나요?
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            특별히 내세울 것이 없다고 느껴지면, 여러분이 했던 것 중 가장
            어려웠던 것을 적으세요. 가급적이면 (반드시 그래야 하는 건
            아니지만) 지적으로 가장 어려웠던 것이 좋습니다. 이력서에 쓸
            만한 것이 아니어도 괜찮습니다. 저희는 인사부서와 같은 것을
            찾지 않습니다.
          </p>

          <h3
            id="commonmistakes"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            Common Mistakes
          </h3>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            팀이 유망해 보이면, 이제 아이디어를 더 깊이 이해하는 데 시간을
            씁니다. 저희는 아이디어보다 팀을 더 중시하는데, 투자하는
            스타트업 대부분이 아이디어를 크게 바꾸기 때문입니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            팀이 충분히 인상적이라면 아이디어 없이도 선발할 수 있습니다.
            하지만 정말 좋은 아이디어는 저희의 관심을 끌기도 합니다.
            아이디어 자체 때문이 아니라, 그것이 팀원들이 똑똑하다는
            증거가 되기 때문입니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            팀에서 보는 것이 성취의 종류가 아니라 크기인 것처럼, 아이디어에서
            보는 것도 아이디어의 종류가 아니라 그에 대한 통찰의 깊이입니다.
            중고 경매 사이트를 만들 건가요? 좋을 수도, 나쁠 수도 있습니다.
            중요한 것은 기존 플랫폼에 맞서 어떻게 경쟁할 것인지입니다.
            여러분의 해결책에서 차별화되는 점은 무엇인가요?
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            흔한 실수는 차별점이 &quot;잘 디자인되고 사용하기 쉽다&quot;는
            것이라고 말하는 것입니다. 이건 통찰이 아닙니다. 그냥 잘
            실행하겠다고 주장하는 것뿐입니다. 현재 소프트웨어를 만든 사람도
            아마 그렇게 하려 했을 겁니다. 그러니 더 구체적이어야 합니다.
            정확히 무엇을 해서 더 쉽게 만들 건가요? 그리고 그게 충분할까요?
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            또 다른 흔한 실수들:
          </p>

          <ul className="mb-4 ml-6 list-disc space-y-2 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            <li>
              <strong>추상적인 아이디어:</strong> 구체적인 고객이나 문제 없이
              &quot;플랫폼&quot;이나 &quot;생태계&quot;를 만들겠다는 식의 설명
            </li>
            <li>
              <strong>시장 조사 없음:</strong> 경쟁자가 없다고 주장하거나,
              시장 규모에 대한 감이 전혀 없는 경우
            </li>
            <li>
              <strong>팀 없이 혼자 지원:</strong> 혼자서 모든 것을 할 수
              있다고 주장하는 경우. 물론 1인 창업도 가능하지만, 팀이 있는
              것이 유리합니다
            </li>
            <li>
              <strong>문제 대신 솔루션에 집착:</strong> 해결하려는 문제가
              무엇인지 명확하지 않은 채 기술이나 기능만 나열하는 경우
            </li>
          </ul>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            저희는 심각한 장애물이 있는 일을 해도 괜찮습니다. 사실 그걸
            좋아합니다. 최고의 스타트업 아이디어는 처음에 대부분의 사람들에게
            미친 것처럼 보이는 이상치인 경우가 많습니다. 하지만 여러분이
            장애물을 인식하고 있고, 그것을 극복할 이론이라도 있다는 것을
            보여주셔야 합니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            반면, 여러분의 아이디어에 있는 장애물을 여러분이 인식하지 못한
            것 같으면, 그건 나쁜 신호입니다. 이건 여러분의 아이디어입니다.
            최소 며칠은 생각해봤을 텐데, 저희가 몇 분 만에 떠올리는
            반박을 여러분이 생각하지 못했어야 할 이유가 없습니다.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            역설적이지만, 이런 이유로 아이디어의 결함을 숨기려 하기보다
            모두 공개하는 것이 낫습니다. 저희가 여러분이 언급하지 않은
            문제를 떠올리면, 여러분이 그것을 생각하지 못했다고 가정할
            겁니다. 그리고 저희는 아이디어보다 여러분을 더 중시하기
            때문에, 아이디어를 더 좋아 보이게 하려고 자신을 희생하는 것은
            실수입니다.
          </p>

          <h3
            id="theprocess"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            The Process
          </h3>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            SPEC의 선발 과정은 세 단계로 이루어집니다:
          </p>

          <h4 className="mb-2 mt-4 font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
            1단계: 서류 심사
          </h4>
          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            온라인으로 제출된 지원서를 운영진 전원이 독립적으로 평가합니다.
            팀 구성, 아이디어의 구체성, 실행 계획, 그리고 팀원 각각의
            역량을 종합적으로 검토합니다. 팀이 유망해 보이고 아이디어가
            흥미롭다면, 더 많은 시간을 들여 지원서를 꼼꼼히 살펴봅니다.
            영상이 있다면 영상도 확인하고, 데모가 있다면 데모도 살펴봅니다.
          </p>

          <h4 className="mb-2 mt-4 font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
            2단계: 면접
          </h4>
          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            서류 심사를 통과한 팀은 10~15분 정도의 면접에 초대됩니다.
            면접에서는 지원서에 적은 내용을 더 깊이 파고들고, 팀의 화학
            반응과 실행력을 직접 확인합니다. 모든 팀원이 참석하는 것이
            원칙이며, 각자의 역할과 기여를 명확히 설명할 수 있어야
            합니다.
          </p>

          <h4 className="mb-2 mt-4 font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
            3단계: 최종 선발
          </h4>
          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            면접을 마친 후 운영진 회의를 통해 최종 선발 팀을 결정합니다.
            선발된 팀에게는 개별 연락을 드리며, 한 학기 동안의 SPEC
            프로그램에 참여하게 됩니다. 팀이 유망하지만 아이디어가 아직
            부족한 경우, 지원서 끝부분에 적은 대안 아이디어를 기반으로
            선발하는 경우도 꽤 있습니다.
          </p>

          <h3
            id="interviewtips"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            Interview Tips
          </h3>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            면접에서 가장 중요한 것은 솔직함입니다. 과장하거나 모르는 것을
            아는 척하면 반드시 드러납니다. 차라리 모르는 것을 인정하고,
            어떻게 알아갈 계획인지를 말하는 것이 훨씬 좋은 인상을 줍니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            구체적인 숫자로 말하세요. &quot;많은 사용자가 관심을
            보였습니다&quot;보다 &quot;지난주에 50명이 대기자 명단에
            등록했습니다&quot;가 100배 더 설득력 있습니다. 매출, 사용자 수,
            성장률, 전환율 — 어떤 숫자든 있으면 반드시 언급하세요.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            고객 이야기를 중심으로 말하세요. 여러분이 해결하는 문제를 실제로
            겪고 있는 사람의 이야기를 들려주세요. &quot;우리 친구 중 한 명이
            이런 문제로 매일 3시간을 낭비하고 있었는데...&quot;라는 식의
            이야기는 어떤 시장 분석보다 강력합니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            또한, 저희가 아직 보지 못한 여러분의 강점을 보여줄 기회로
            면접을 활용하세요. 특별히 내세울 것이 없다고 생각하더라도,
            누구에게나 시스템을 자기에게 유리하게 활용해본 경험이 있을
            겁니다. 창의적으로 문제를 해결한 경험은 그 자체로 스타트업
            역량의 증거입니다.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            저희는 순종적이고 중간쯤 가는 사람을 찾지 않습니다. 규칙을
            깨고 새로운 방법을 찾아내는 사람을 찾습니다. 면접에서 그런
            모습을 보여주세요.
          </p>

          <h3
            id="helpusout"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            Help Us Out
          </h3>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            전반적으로 지원자에게 드리는 조언은 이것입니다: 저희를
            도와주세요. 저희는 여러분이 대단하다고 믿고 싶습니다.
            일상에서 만나는 대부분의 사람들과는 다릅니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            &quot;다음 유니콘을 만들겠다&quot;고 말하면, 대부분의 사람들은
            회의적으로 반응합니다. 부분적으로는 성공 확률이 낮아 회의적인
            것이 안전한 판단이기 때문이고, 부분적으로는 야망에 위협을 느끼기
            때문입니다.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            하지만 저희는 다릅니다. 저희는 여러분의 성공을 함께 만들어가는
            파트너이기 때문입니다. 다음 거대한 스타트업을 만들겠다고 하면
            저희는 귀가 솔깃해집니다. 회의적으로 반응하지 않습니다. 위험한
            도전을 좋아하니까요. 그리고 여러분이 성공하면 저희도 함께
            올라가니까요.
          </p>

          <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            모든 심사위원이 그렇듯, 저희는 믿고 싶습니다. 그러니 믿을 수
            있게 도와주세요. 여러분에 대해 돋보이는 것이 있다면, 또는
            해결하려는 문제에 대해 특별한 통찰이 있다면, 저희가 반드시
            그것을 볼 수 있게 해주세요.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            가장 좋은 방법은 간결하게 쓰는 것입니다. 저희에게 자신을
            &quot;팔&quot; 필요가 없습니다. 이해만 시켜주면, 저희 스스로
            설득될 겁니다. 하지만 지원서의 불필요한 단어 하나하나가
            필요한 단어의 효과를 떨어뜨립니다. 그러니 지원서를 제출하기
            전에, 인쇄해서 빨간 펜으로 불필요한 단어를 모두 지우세요.
            그리고 남은 내용은 가능한 한 구체적이고 사실적으로 쓰세요.
          </p>

          <h3
            id="finaladvice"
            className="mb-3 mt-8 font-[system-ui] text-lg font-semibold text-[#16140f]"
          >
            Final Advice
          </h3>

          <h2 className="mb-6 font-['MaruBuri',serif] text-[28px] font-medium leading-snug text-[#16140f]">
            완벽한 아이디어보다 완벽한 실행력을 보여주세요. 아이디어는
            바뀔 수 있지만, 실행하는 사람은 쉽게 바뀌지 않습니다.
            여러분이 문제를 발견하고, 해결하고, 끝까지 밀고 나가는
            사람이라는 것을 보여주세요. 그것이 SPEC이 찾는 사람입니다.
          </h2>

          <p className="mt-8 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
            <strong>지원서 제출:</strong>{" "}
            <Link
              href="/apply"
              className="text-[#FF6C0F] underline hover:opacity-70"
            >
              SPEC 지원 페이지
            </Link>
            에서 온라인으로 제출할 수 있습니다. 궁금한 점이 있으시면{" "}
            <Link
              href="/faq"
              className="text-[#FF6C0F] underline hover:opacity-70"
            >
              자주 묻는 질문
            </Link>
            을 먼저 확인해주세요.
          </p>
        </article>

        <nav className="shrink-0 md:w-[170px]">
          <div className="sticky top-24 font-['Pretendard',sans-serif] text-sm">
            <p className="mb-2 font-semibold uppercase tracking-wider text-[#16140f]/60">
              Contents
            </p>
            <ul className="mb-6 space-y-2">
              <li>
                <a href="#intro" className="text-[#FF6C0F] hover:opacity-70">
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#whatwelookfor"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  What We Look For
                </a>
              </li>
              <li>
                <a
                  href="#theteam"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  The Team
                </a>
              </li>
              <li>
                <a
                  href="#commonmistakes"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  Common Mistakes
                </a>
              </li>
              <li>
                <a
                  href="#theprocess"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  The Process
                </a>
              </li>
              <li>
                <a
                  href="#interviewtips"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  Interview Tips
                </a>
              </li>
              <li>
                <a
                  href="#helpusout"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  Help Us Out
                </a>
              </li>
              <li>
                <a
                  href="#finaladvice"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  Final Advice
                </a>
              </li>
            </ul>

            <p className="mb-2 font-semibold uppercase tracking-wider text-[#16140f]/60">
              Elsewhere
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/apply"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  SPEC 지원하기
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#FF6C0F] hover:opacity-70">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  선발된 팀 보기
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
