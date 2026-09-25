import { doctor } from "@/data/doctor";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Qualifications() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionHeading>Qualifications</SectionHeading>
        </FadeInOnScroll>
        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#E8F6FA] before:via-[#0F766E]/20 before:to-[#E8F6FA]">
          {(doctor.qualifications || []).map((qual, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 150} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-[3px] border-[#E8F6FA] text-[#0F766E] shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:border-[#0F766E]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-[24px] border border-slate-100 card-hover">
                <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#17212B] mb-2">{qual.degree}</h3>
                <p className="text-[#64748B] font-medium text-[16px]">{qual.institution}</p>
                {qual.year && <p className="text-[13px] font-bold text-[#0F766E] mt-3 bg-[#E8F6FA] inline-block px-3 py-1 rounded-full">{qual.year}</p>}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
