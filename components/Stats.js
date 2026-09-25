
import { doctor } from "@/data/doctor";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Stats() {
  const stats = [
    {
      label: "Years Experience",
      value: doctor.experienceYearsOverall
        ? `${doctor.experienceYearsOverall}+`
        : "",
    },
    {
      label: "Years as Specialist",
      value: doctor.experienceYearsSpecialist
        ? `${doctor.experienceYearsSpecialist}+`
        : "",
    },
    {
      label: "Consultation",
      value: doctor.consultationFeeDisplay || "",
    },
    {
      label: "Patient Recommendation",
      value: doctor.patientRecommendationPercent
        ? `${doctor.patientRecommendationPercent}%`
        : "",
    },
  ];

  return (
    <section
      className="relative overflow-hidden border-y border-slate-100 bg-[#F8FAF9]"
      aria-label="Experience Statistics"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DDF5EE]/40 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <FadeInOnScroll
              key={stat.label}
              delay={idx * 100}
              className="group relative"
            >
              <div
                className={`flex min-h-[150px] flex-col justify-center py-8 text-center sm:min-h-[170px] sm:py-10 md:min-h-[185px] md:px-8 ${
                  idx > 0 ? "border-l border-slate-200/80" : ""
                }`}
              >
                {/* Small accent */}
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:w-5 ${
                      idx === 0 || idx === 1
                        ? "bg-[#0F766E]"
                        : "bg-[#2A9D8F]/60"
                    }`}
                  />
                </div>

                {/* Value */}
                <dd
                  className={`font-heading font-extrabold leading-none tracking-[-0.04em] transition-transform duration-300 group-hover:-translate-y-1 ${
                    idx === 0 || idx === 1
                      ? "text-[38px] text-[#17212B] sm:text-[46px] md:text-[50px]"
                      : "text-[30px] text-[#0F766E] sm:text-[36px] md:text-[40px]"
                  }`}
                >
                  {stat.value}
                </dd>

                {/* Label */}
                <dt className="mx-auto mt-3 max-w-[150px] text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]">
                  {stat.label}
                </dt>
              </div>
            </FadeInOnScroll>
          ))}
        </dl>
      </div>
    </section>
  );
}
