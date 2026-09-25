import { GraduationCap } from "lucide-react";
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="py-14 md:py-20 bg-white"
      aria-labelledby="qualifications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="qualifications-heading" title="Qualifications" />

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {doctor.qualifications.map((item, index) => (
            <FadeInOnScroll key={item.degree}>
              <div className="relative flex gap-5 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-sky-50/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md"
                  aria-hidden="true"
                >
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                    Education {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-800 font-[family-name:var(--font-poppins)]">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.institution}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
