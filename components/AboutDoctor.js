
import { doctor } from "@/data/doctor";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function AboutDoctor() {
  const paragraphs = doctor.profileDescription
    ? doctor.profileDescription.split(/\n\s*\n/)
    : [];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      {/* Very subtle background detail */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E8F6FA]/50 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 xl:gap-28">

          {/* About content */}
          <FadeInOnScroll>
            <div className="max-w-[700px]">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-[#0F766E]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                  About the Doctor
                </span>
              </div>

              <div id="about-heading">
                <SectionHeading align="left">
                  About Dr. Sunil Kohli
                </SectionHeading>
              </div>

              <div className="mt-7 space-y-5 text-[16px] leading-[1.85] text-[#64748B] sm:text-[17px]">
                {paragraphs.length > 0 ? (
                  paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? "font-medium text-[#4B5A67]"
                          : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="font-medium text-[#4B5A67]">
                    Dr. Sunil Kohli is a Pediatrician in Agra with{" "}
                    {doctor.experienceYearsOverall} years of experience,
                    practising at {doctor.hospitalDisplayName}.
                  </p>
                )}
              </div>

              {/* Small profile link */}
              <div className="mt-8 flex items-center gap-3 text-sm font-bold text-[#0F766E]">
                <span className="h-px w-10 bg-[#0F766E]/30" />
                <span>Dedicated Pediatric Care</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Experience */}
          <FadeInOnScroll delay={150}>
            <div className="lg:pt-10">
              <div className="border-t border-slate-200 pt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Professional Experience
                </p>

                <div className="mt-7 divide-y divide-slate-200">
                  {/* Overall experience */}
                  <div className="group flex items-end justify-between gap-6 pb-7">
                    <div>
                      <p className="font-heading text-[52px] font-extrabold leading-none tracking-[-0.04em] text-[#17212B] sm:text-[60px]">
                        {doctor.experienceYearsOverall}+
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[#64748B]">
                        Years of overall experience
                      </p>
                    </div>

                    <span className="mb-1 h-9 w-9 rounded-full bg-[#F0FCF8] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Specialist experience */}
                  <div className="group flex items-end justify-between gap-6 pt-7">
                    <div>
                      <p className="font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] text-[#0F766E] sm:text-[52px]">
                        {doctor.experienceYearsSpecialist}+
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[#64748B]">
                        Years as a specialist
                      </p>
                    </div>

                    <span className="mb-1 h-9 w-9 rounded-full bg-[#E8F6FA] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Quiet supporting line */}
              <div className="mt-7 flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F766E]" />
                <p className="max-w-sm text-xs leading-5 text-slate-400">
                  Focused on thoughtful, evidence-informed care for infants,
                  children, and their families.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
