import type { Metadata } from "next";
import ScrollBackground from "@/components/ScrollBackground";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Manifesto from "@/components/Manifesto";
import Partners from "@/components/Partners";
import TwoTracks from "@/components/TwoTracks";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import AlumniGrid from "@/components/AlumniGrid";
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

      <div className="relative z-10 py-16 md:py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <Philosophy />
        </div>
      </div>

      <div className="relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <Partners />
        </div>
      </div>

      <div className="relative z-10 py-16 md:py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <TwoTracks />
        </div>
      </div>

      <div className="relative z-10 py-16 md:py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <CurriculumRoadmap />
        </div>
      </div>

      <div className="relative z-10 py-16 md:py-32">
        <div className="mx-auto max-w-[960px] px-6">
          <Manifesto />
        </div>
      </div>

      <div className="relative z-10 py-16 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AlumniGrid />
        </div>
      </div>

      <div className="relative z-10 py-16 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <InTheRoom />
        </div>
      </div>

      <div className="relative z-10 py-14 md:py-24">
        <div className="mx-auto max-w-[640px] px-6">
          <CTA />
        </div>
      </div>
    </div>
  );
}
