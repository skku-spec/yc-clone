import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyShowcase from "@/components/CompanyShowcase";
import About from "@/components/About";
import InTheRoom from "@/components/InTheRoom";
import Knowledge from "@/components/Knowledge";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-clip font-['Source_Serif_4',serif]">
      <div className="relative z-10 bg-[#f5f5ee]">
        <Navbar />
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
        <Footer />
      </div>
    </div>
  );
}
