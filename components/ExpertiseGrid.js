
import { doctor } from "@/data/doctor";
import {
  Activity,
  Baby,
  Stethoscope,
  HeartPulse,
  Shield,
  Thermometer,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

const iconMap = {
  "Chicken Pox (Varicella)": Thermometer,
  NICU: Activity,
  PICU: HeartPulse,
  "Viral Fever": Shield,
  "Pediatrics & Neonatology": Baby,
  "Growth & Development Evaluation / Management": Stethoscope,
};

export default function ExpertiseGrid() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-16 md:py-24"
      aria-labelledby="expertise-heading"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#E8F6FA]/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#DDF5EE]/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">

        {/* Heading */}
        <FadeInOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F766E]/15 bg-[#E8F6FA]/70 px-4 py-1.5">
              <HeartPulse className="h-3.5 w-3.5 text-[#0F766E]" />

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0F766E]">
                Pediatric Care
              </span>
            </div>

            <SectionHeading id="expertise-heading">
              Areas of Pediatric Care
            </SectionHeading>

            <p className="mt-5 text-base leading-7 text-[#64748B] sm:text-lg">
              Comprehensive pediatric care covering common childhood
              illnesses, newborn care, critical care, and growth and
              development.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(doctor.areasOfFocus || []).map((item, idx) => {
            const Icon = iconMap[item.title] || HeartPulse;

            return (
              <FadeInOnScroll
                key={item.title || idx}
                delay={idx * 80}
              >
                <article className="group relative h-full overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-[0_10px_35px_-25px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0F766E]/15 hover:shadow-[0_22px_45px_-25px_rgba(15,118,110,0.3)]">

                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />

                  {/* Large background number */}
                  <span
                    className="pointer-events-none absolute -right-1 -top-4 text-[90px] font-black leading-none text-slate-100/70 transition-colors duration-300 group-hover:text-[#E8F6FA]"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F6FA] text-[#0F766E] transition-all duration-300 group-hover:bg-[#0F766E] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0F766E]/20">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 text-slate-300 transition-all duration-300 group-hover:border-[#0F766E]/20 group-hover:bg-[#E8F6FA] group-hover:text-[#0F766E]">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                      Pediatric Care
                    </p>

                    <h3 className="max-w-[280px] text-xl font-extrabold leading-snug text-[#17212B] font-heading">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-3 text-sm leading-6 text-[#64748B]">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom line */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-px flex-1 bg-slate-100 transition-colors duration-300 group-hover:bg-[#DDF5EE]" />

                    <span className="text-[11px] font-bold text-slate-400 transition-colors duration-300 group-hover:text-[#0F766E]">
                      Learn more
                    </span>
                  </div>
                </article>
              </FadeInOnScroll>
            );
          })}
        </div>

        {/* Bottom note */}
        <FadeInOnScroll delay={300}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#DDF5EE] bg-[#F4FCF9] px-5 py-4 text-center">
            <p className="text-sm leading-6 text-[#64748B]">
              Care is tailored to the child&apos;s age, symptoms, medical
              history, and individual needs.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
