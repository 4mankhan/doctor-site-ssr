import { doctor } from "@/data/doctor";
import FadeInOnScroll from "./FadeInOnScroll";

const stats = [
  {
    label: "Years Experience",
    value: `${doctor.experienceYearsOverall}+`,
    sub: "Overall",
  },
  {
    label: "As Specialist",
    value: `${doctor.experienceYearsSpecialist}`,
    sub: "Years",
  },
  {
    label: "Consultation",
    value: doctor.consultationFeeDisplay,
    sub: "Fee",
  },
  {
    label: "Patient Recommendation",
    value: `${doctor.patientRecommendationPercent}%`,
    sub: `Based on ${doctor.patientRecommendationCount} patients`,
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-2 pb-10 md:pb-14" aria-label="Key statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl bg-white border border-slate-100 px-4 py-5 sm:px-5 sm:py-6 shadow-sm hover:shadow-md transition-shadow text-center motion-reduce:transition-none"
              >
                <p className="text-2xl sm:text-3xl font-bold text-teal-700 font-[family-name:var(--font-poppins)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{stat.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.sub}</p>
              </li>
            ))}
          </ul>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
