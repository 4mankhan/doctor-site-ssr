import { doctor } from "@/data/doctor";
import { ThumbsUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function PatientRecommendation() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
        <FadeInOnScroll>
          <div className="bg-white rounded-[32px] p-10 md:p-14 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <ThumbsUp className="w-48 h-48" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#E8F6FA] text-[#0F766E] flex items-center justify-center mb-6">
                <ThumbsUp className="w-10 h-10" />
              </div>
              <h2 className="text-[64px] font-extrabold font-heading text-[#0F766E] leading-none tracking-tight mb-4">
                {doctor.patientRecommendationPercent}%
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#17212B] mb-2 font-heading">
                Patient Recommendation
              </p>
              <p className="text-[#64748B] text-[16px] font-medium">
                Recommended by {doctor.patientRecommendationPercent}% of patients based on recent feedback.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
