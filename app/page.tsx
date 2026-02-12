import type { Metadata } from "next";
import ScrollBackground from "@/components/ScrollBackground";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import About from "@/components/About";
import VCCSection from "@/components/VCCSection";
import Achievements from "@/components/Achievements";
import InTheRoom from "@/components/InTheRoom";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SKKU SPEC | 성균관대학교 창업 학회",
  description:
    "Execution is everything. SPEC은 30주 안에 진짜 매출을 만드는 성균관대학교 창업 프로그램입니다.",
};

export default function Home() {
  return (
    <div className="dark-theme min-h-screen">
      <ScrollBackground />

      <div className="relative z-10">
        <div className="mx-auto max-w-[960px]">
          <Hero />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <Partners />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <CurriculumRoadmap />
        </div>
      </div>

      <div id="about-section" className="relative z-10 border-t border-white/6 py-32">
        <div className="mx-auto max-w-[640px] px-6">
          <About />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <VCCSection />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <Achievements />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <InTheRoom />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 py-24">
        <div className="mx-auto max-w-[640px] px-6">
          <CTA />
        </div>
      </div>
    </div>
  );
}
