import { doctor } from "@/data/doctor";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: doctor.experienceYearsOverall ? doctor.experienceYearsOverall + "+" : "" },
    { label: "Years as Specialist", value: doctor.experienceYearsSpecialist || "" },
    { label: "Consultation", value: doctor.consultationFeeDisplay || "" },
    { label: "Patient Recommendation", value: doctor.patientRecommendationPercent ? doctor.patientRecommendationPercent + "%" : "" },
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-y border-slate-100" aria-label="Experience Statistics">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-slate-100">
          {stats.map((stat, idx) => (
            <FadeInOnScroll key={stat.label} delay={idx * 100} className="flex flex-col items-center justify-center text-center px-2 sm:px-4 group">
              <dt className="text-[12px] sm:text-[14px] md:text-[15px] font-semibold text-[#64748B] order-2 mt-1 sm:mt-2">{stat.label}</dt>
              <dd className="text-[28px] sm:text-[38px] md:text-[44px] font-extrabold text-[#0F766E] tracking-tight font-heading order-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </dd>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
