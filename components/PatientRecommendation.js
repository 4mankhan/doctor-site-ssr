import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function PatientRecommendation() {
  const percent = doctor.patientRecommendationPercent;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <section className="py-14 md:py-20 bg-white" aria-labelledby="recommendation-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="recommendation-heading"
          title="Patient Recommendation"
          subtitle="Patient recommendation statistic from publicly listed profile information."
        />

        <FadeInOnScroll>
          <div className="mx-auto max-w-lg rounded-3xl border border-slate-100 bg-gradient-to-b from-sky-50/80 to-white p-8 sm:p-10 shadow-sm text-center">
            <div className="relative mx-auto h-40 w-40" role="img" aria-label={`${percent} percent patient recommendation based on ${doctor.patientRecommendationCount} patients`}>
              <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-1000 motion-reduce:transition-none"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-teal-700 font-[family-name:var(--font-poppins)]">
                  {percent}%
                </span>
              </div>
            </div>

            <p className="mt-6 text-lg font-semibold text-slate-800">
              Recommended by {percent}% of {doctor.patientRecommendationCount} patients
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {doctor.recommendationStatement}
            </p>
            <p className="mt-4 text-xs text-slate-400">
              This is a patient recommendation metric, not individual reviews.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
