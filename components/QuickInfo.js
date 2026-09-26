
import { doctor } from "@/data/doctor";
import {
  Stethoscope,
  Languages,
  FileText,
  GraduationCap,
} from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function QuickInfo() {
  const items = [
    {
      icon: Stethoscope,
      label: "Specialization",
      value: doctor.specialization,
    },
    {
      icon: Languages,
      label: "Languages",
      value: doctor.languages.join(", "),
    },
    {
      icon: FileText,
      label: "Registration",
      value: doctor.registration,
    },
    {
      icon: GraduationCap,
      label: "Qualification",
      value: (doctor.qualifications || [])
        .map((q) => q.degree)
        .join(", "),
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_-20px_rgba(15,23,42,0.18)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={[
                      "flex min-h-[104px] items-center gap-3.5 px-5 py-4",
                      "border-slate-100",
                      idx > 0 ? "border-t sm:border-t-0 sm:border-l" : "",
                      idx === 2 ? "lg:border-l" : "",
                    ].join(" ")}
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F6FA] text-[#0F766E]">
                      <Icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {item.label}
                      </p>

                      <p
                        className="mt-1 line-clamp-2 text-[13px] font-bold leading-5 text-[#17212B]"
                        title={item.value}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}