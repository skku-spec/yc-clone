import type { Metadata } from "next";
import ScrollBackground from "@/components/ScrollBackground";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import InTheRoom from "@/components/InTheRoom";
import Knowledge from "@/components/Knowledge";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SKKU SPEC | 성균관대학교 창업 학회",
  description: "만드는 사람이 세상을 바꾼다. SKKU SPEC은 성균관대학교 창업 학회입니다.",
};

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] py-0">
          <Hero />
        </div>
      </div>
      <div className="relative z-10">
        <Achievements />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] py-0">
          <About />
        </div>
      </div>
      <div className="relative z-10">
        <InTheRoom />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] py-0">
          <Knowledge />
        </div>
      </div>
      <div className="relative z-10">
        <CTA />
      </div>
    </>
  );
}
