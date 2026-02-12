import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Interview Guide | SPEC",
  description:
    "SPEC 면접 준비 가이드",
};

export default function InterviewsPage() {
  return (
    <>
      <div className="pt-14 md:pt-20">
        <PageHeader title="Interview Guide" align="center" />
      </div>

      <div className="mx-auto max-w-[720px] px-4 pb-24 pt-8 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f] md:px-8">
        <p className="mb-8 text-lg">
          SPEC 면접에 초대되셨다면 축하드립니다! 
          면접은 복잡한 준비가 필요하지 않습니다. 
          아래 가이드를 읽고 편안하게 준비하세요. 
          면접은 심사가 아니라 대화입니다.
        </p>

        <h2 className="mb-4 mt-10 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
          기본 정보
        </h2>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li>SPEC 면접은 20분 내외의 화상 또는 대면 면접입니다.</li>
          <li>모든 팀원이 참석해야 합니다.</li>
          <li>SPEC 운영진 2-3명과 멘토 1-2명이 참여합니다.</li>
          <li>
            면접관들은 지원서를 미리 읽고 준비합니다.
          </li>
        </ul>

        <h2 className="mb-4 mt-10 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
          면접 준비 영상
        </h2>
        <p className="mb-4">
          이 영상에서 스타트업 면접에서 무엇을 기대해야 하는지, 
          그리고 성공적인 면접을 위해 무엇을 준비해야 하는지 배울 수 있습니다.
        </p>
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/B5tU2447OK8"
            title="스타트업 면접 가이드"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        <h2 className="mb-4 mt-10 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
          SPEC 면접 준비 방법
        </h2>
        <p className="mb-6">
          면접 시간이 짧기 때문에 잡담이나 공식적인 발표는 하지 않습니다. 
          우리는 두 가지만 합니다: 질문을 하고, 여러분이 만든 것을 봅니다.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          리허설은 하지 마세요
        </h3>
        <p className="mb-6">
          합격하고 싶어서 면접 연습을 많이 하는 분들이 있습니다. 
          하지만 기본적인 준비 이상으로 과도하게 준비하는 것은 오히려 역효과를 낼 수 있습니다.
        </p>
        <p className="mb-6">
          모의 면접이나 발표 자료를 준비할 필요가 없습니다. 
          과도하게 준비하면 면접이 어색해질 수 있습니다. 
          (예: 질문이 끝나기도 전에 준비한 답변을 쏟아내는 경우) 
          준비된 연설, 슬라이드, 영상 같은 것은 필요 없습니다. 
          우리는 그냥 대화를 나누고 싶습니다. 
          자연스럽게 이야기할 때 대화가 더 잘 됩니다.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          리허설 대신 진짜 진전을 만드세요
        </h3>
        <p className="mb-6">
          합격 가능성을 높이고 싶다면, 가장 좋은 방법은 지원 후 면접 전까지 
          스타트업을 실제로 발전시키는 것입니다. 
          제품을 출시하거나, 개선하거나, 매출을 늘리는 것이 
          면접관에게 가장 인상적입니다. 빠르게 움직이는 모습을 보여주세요.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          어떤 문제를 풀고 있는지 명확히 설명하세요
        </h3>
        <p className="mb-6">
          보통 첫 질문은 "어떤 문제를 풀고 있나요?"입니다. 
          가장 기본적인 질문이지만, 놀랍게도 많은 팀들이 명확하게 대답하지 못합니다. 
          전문 용어 없이 간단한 문장으로 설명하세요.
        </p>
        <p className="mb-6">
          우리는 새로운 것을 배우는 걸 좋아합니다. 
          좋은 스타트업 아이디어는 듣는 사람에게 뭔가 새로운 것을 가르쳐줍니다. 
          여러분의 아이디어가 특정 분야의 사람들만 관심 있어 할 내용이어도 괜찮습니다. 
          우리는 그런 걸 좋아합니다. 
          지루한 일반론보다 흥미로운 디테일이 훨씬 낫습니다.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          고객과 지표를 파악하세요
        </h3>
        <p className="mb-6">
          이미 출시했다면, 고객과 지표에 대해 최대한 많이 알고 있어야 합니다. 
          우리는 고객을 잘 이해하고, 그들로부터 배운 것을 말해줄 수 있는 팀에게 감명받습니다.
        </p>
        <p className="mb-6">
          자주 묻는 질문들: 새 고객은 어디서 오나요? 성장률은 어떤가요? 
          고객들이 제품을 얼마나 자주 쓰나요? 계속 사용하나요? 
          단위 경제성은 어떤가요? 새 고객이 여러분을 시도하는 이유는 뭔가요? 
          망설이는 사람들은 왜 망설이나요? 고객들이 가장 원하는 것은 뭔가요? 
          고객 행동에서 놀라웠던 점은 뭔가요?
        </p>
        <p className="mb-6">
          이미 고객이 있다면, 주요 지표를 어딘가에 적어두고 면접 중에 참고하세요. 
          모든 숫자를 외울 필요는 없습니다. 
          적어두면 부담이 줄어듭니다. 
          면접에서 숫자를 언급하면 나중에 증빙을 요청할 수 있습니다.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          어려움에 대해 솔직하게 말하세요
        </h3>
        <p className="mb-6">
          앞으로 마주칠 장애물에 대해 생각해보세요. 
          우리는 자주 그런 질문을 하고, 
          어려움을 가볍게 무시하는 것보다 솔직하게 논의하는 것을 더 선호합니다. 
          모든 스타트업은 장애물을 마주합니다. 
          마치 장애물이 없는 것처럼 행동하면, 여러분이 그것을 간과했다고 생각할 것입니다.
        </p>
        <p className="mb-6">
          모든 답을 알고 있을 거라고 기대하지 않습니다. 
          모르는 질문을 받아도 당황하지 마세요. 
          똑똑한 사람이 예상치 못한 질문에 진심으로 답하려고 노력하는 모습은 
          훌륭한 대화로 이어질 수 있습니다.
        </p>
        <p className="mb-6">
          시장에 있는 기존 제품들에 대해 잘 알고 있어야 하고, 
          구체적으로 무엇이 잘못되었는지 설명할 수 있어야 합니다. 
          "더 강력하게 만들 거예요" 또는 "더 쉽게 만들 거예요"라고만 말하는 건 부족합니다. 
          어떻게 그렇게 할 건지 설명할 수 있어야 합니다.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          데모를 준비하세요
        </h3>
        <p className="mb-6">
          만들고 있는 것의 데모를 보여달라고 요청할 수 있습니다. 
          데모는 여러분이 만든 것의 작동하는 버전을 의미합니다. 
          소프트웨어라면 화면 공유를 준비하세요. 
          하드웨어라면 실물을 가지고 있거나 영상을 준비하세요. 
          아직 완성되지 않았어도 괜찮습니다. 지금까지 만든 것을 보여주세요.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          모든 팀원이 참여하세요
        </h3>
        <p className="mb-6">
          여러 명의 팀원이 있다면, 각자 최소한 하나의 질문에는 답하는 것을 선호합니다. 
          모든 팀원을 조금씩이라도 알고 싶습니다.
        </p>

        <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-semibold text-[#16140f]">
          진솔하게 대화하세요
        </h3>
        <p className="mb-6">
          면접에서 만나는 SPEC 운영진과 멘토들은 합격 후 여러분과 함께 
          긴 여정을 갈 사람들입니다. 
          면접은 우리가 함께 가고 싶은 팀을 찾는 과정이며, 
          대화가 진솔하고 솔직하고 자연스러울수록 좋습니다.
        </p>

        <h2 className="mb-4 mt-10 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
          면접 후 피드백
        </h2>
        <p className="mb-6">
          면접 후 합격하지 못하더라도, 이메일로 피드백을 드립니다. 
          우리의 목표는 정말로 유용한 조언을 제공하여 
          여러분이 성공할 가능성을 높이는 것입니다. 
          피드백을 받아들이고 다음 학기에 재지원하여 합격하는 경우가 많습니다.
        </p>

        <h2 className="mb-4 mt-10 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
          유용한 자료
        </h2>
        <p className="mb-4">
          스타트업 면접에 대한 더 많은 조언:
        </p>
        <div className="space-y-3">
           <p>
             <a
               href="https://www.ycombinator.com/blog/tips-for-yc-interviews/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               스타트업 면접 팁
             </a>{" "}
             <span className="text-[#16140f]/60">
               참고 자료
             </span>
           </p>
           <p>
             <a
               href="https://www.youtube.com/watch?v=rfTgzA6iKZc"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               면접을 잘 보는 3가지 팁
             </a>{" "}
             <span className="text-[#16140f]/60">
               영상 자료
             </span>
           </p>
           <p>
             <a
               href="https://twitter.com/mwseibel/status/660557656927563776"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               면접 준비를 위한 10가지 조언
             </a>{" "}
             <span className="text-[#16140f]/60">
               추가 자료
             </span>
           </p>
        </div>
      </div>
    </>
  );
}
