import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '커리큘럼 | SPEC — 성균관대 창업학회',
  description:
    'SPEC의 두 가지 트랙 커리큘럼. Preneur 트랙(조직 리더십)과 Learner 트랙(실전 창업)을 확인하세요. 3월–11월 운영.',
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
