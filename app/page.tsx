import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CompanyShowcase from "@/components/CompanyShowcase";
import About from "@/components/About";
import InTheRoom from "@/components/InTheRoom";
import Knowledge from "@/components/Knowledge";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Y Combinator: The Leading Startup Accelerator",
  description: "Y Combinator is a startup accelerator that has funded over 5,000 startups including Airbnb, Stripe, DoorDash, and more.",
};

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-[1200px] py-0">
          <Hero />
        </div>
      </div>
      <div className="relative z-20">
        <CompanyShowcase />
      </div>
      <div className="relative z-20">
        <div className="mx-auto max-w-[1200px] py-0">
          <About />
        </div>
      </div>
      <div className="relative z-20">
        <InTheRoom />
      </div>
      <div className="relative z-20">
        <div className="mx-auto max-w-[1200px] py-0">
          <Knowledge />
        </div>
      </div>
      <div className="relative z-20">
        <CTA />
      </div>
    </>
  );
}
