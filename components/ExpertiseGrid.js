import {
  Sparkles,
  HeartPulse,
  Activity,
  Thermometer,
  Baby,
  TrendingUp,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

const icons = [Sparkles, HeartPulse, Activity, Thermometer, Baby, TrendingUp];

export default function ExpertiseGrid() {
  return (
    <section
      id="expertise"
      className="py-14 md:py-20 bg-[#f8fafc]"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="expertise-heading"
          title="Pediatric Care & Areas of Focus"
          subtitle="Areas of pediatric practice and focus as listed on the doctor's profile."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctor.areasOfFocus.map((area, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeInOnScroll key={area.title}>
                <article className="h-full rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 font-[family-name:var(--font-poppins)]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </article>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
