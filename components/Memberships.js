import { Users } from "lucide-react";
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Memberships() {
  return (
    <section className="py-14 md:py-20 bg-[#f8fafc]" aria-labelledby="memberships-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="memberships-heading" title="Professional Memberships" />

        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {doctor.memberships.map((name) => (
            <FadeInOnScroll key={name}>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700"
                  aria-hidden="true"
                >
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-slate-800 leading-snug pt-2">
                  {name}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
