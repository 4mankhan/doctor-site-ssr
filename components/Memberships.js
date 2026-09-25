import { doctor } from "@/data/doctor";
import { Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Memberships() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionHeading>Professional Memberships</SectionHeading>
        </FadeInOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {(doctor.memberships || []).map((membership, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 100}>
              <div className="bg-white rounded-[20px] p-6 border border-slate-100 card-hover flex items-center gap-4 h-full">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#E8F6FA] text-[#0F766E] flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-[#17212B] text-[16px] leading-snug">
                  {membership}
                </h3>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
