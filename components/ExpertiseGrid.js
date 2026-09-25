import { doctor } from "@/data/doctor";
import { Activity, Baby, Stethoscope, HeartPulse, Shield, Thermometer } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

const iconMap = {
  "Chicken Pox (Varicella)": <Thermometer className="h-7 w-7" />,
  "NICU": <Activity className="h-7 w-7" />,
  "PICU": <HeartPulse className="h-7 w-7" />,
  "Viral Fever": <Shield className="h-7 w-7" />,
  "Pediatrics & Neonatology": <Baby className="h-7 w-7" />,
  "Growth & Development Evaluation / Management": <Stethoscope className="h-7 w-7" />,
};

export default function ExpertiseGrid() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-[#F8FAF9]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionHeading>Areas of Pediatric Care</SectionHeading>
        </FadeInOnScroll>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {(doctor.areasOfFocus || []).map((item, idx) => (
            <FadeInOnScroll key={item.title || idx} delay={idx * 100}>
              <div className="group bg-white rounded-[24px] p-8 border border-slate-100 card-hover h-full flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  {iconMap[item.title] || <HeartPulse className="h-24 w-24" />}
                </div>
                <div className="h-14 w-14 rounded-[16px] bg-[#E8F6FA] text-[#0F766E] flex items-center justify-center mb-6 group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.title] || <HeartPulse className="h-7 w-7" />}
                </div>
                <h3 className="text-xl font-bold text-[#17212B] font-heading leading-snug">
                  {item.title}
                </h3>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
