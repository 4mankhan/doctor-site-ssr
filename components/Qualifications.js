
import { doctor } from "@/data/doctor";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Qualifications() {
  const qualifications = doctor.qualifications || [];

  return (
    <section
      id="qualifications"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24"
      aria-labelledby="qualifications-heading"
    >
      {/* Soft background decoration */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#E8F6FA]/60 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#DDF5EE]/50 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F766E]/15 bg-[#F0FCF8] px-3.5 py-1.5">
              <GraduationCap className="h-3.5 w-3.5 text-[#0F766E]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">
                Professional Education
              </span>
            </div>

            <SectionHeading id="qualifications-heading">
              Qualifications
            </SectionHeading>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              Academic qualifications and professional education supporting
              pediatric and neonatal care.
            </p>
          </div>
        </FadeInOnScroll>

        {qualifications.length > 0 && (
          <div className="relative mx-auto mt-12 max-w-[900px] sm:mt-16">
            {/* Timeline line */}
            <div
              className="absolute bottom-0 left-[22px] top-0 w-px bg-gradient-to-b from-transparent via-[#0F766E]/20 to-transparent md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-8 md:space-y-10">
              {qualifications.map((qual, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <FadeInOnScroll
                    key={`${qual.degree || "qualification"}-${idx}`}
                    delay={idx * 120}
                    className="relative"
                  >
                    <div className="flex items-start md:items-center">
                      {/* Mobile timeline icon */}
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#E8F6FA] text-[#0F766E] shadow-[0_5px_20px_-8px_rgba(15,118,110,0.5)] md:absolute md:left-1/2 md:h-12 md:w-12 md:-translate-x-1/2">
                        <GraduationCap className="h-5 w-5" />
                      </div>

                      {/* Qualification card */}
                      <div
                        className={`ml-5 w-[calc(100%-4rem)] md:ml-0 md:w-[calc(50%-48px)] ${
                          isLeft
                            ? "md:mr-auto md:pr-0"
                            : "md:ml-auto md:pl-0"
                        }`}
                      >
                        <div className="group relative overflow-hidden rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDF5EE] hover:shadow-[0_20px_45px_-24px_rgba(15,118,110,0.28)] sm:p-6">
                          {/* Top accent */}
                          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#0F766E] via-[#2A9D8F] to-transparent opacity-80" />

                          {/* Subtle number */}
                          <span
                            className="pointer-events-none absolute -right-2 -top-4 text-[72px] font-black leading-none text-[#0F766E]/[0.035]"
                            aria-hidden="true"
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>

                          <div className="relative">
                            <div className="mb-3 flex items-center gap-2">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0FCF8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                                <Award className="h-3 w-3" />
                                Qualification
                              </span>
                            </div>

                            <h3 className="font-heading text-[17px] font-extrabold leading-snug tracking-[-0.01em] text-[#17212B] sm:text-[19px]">
                              {qual.degree}
                            </h3>

                            {qual.institution && (
                              <p className="mt-2 text-[14px] font-medium leading-6 text-[#64748B] sm:text-[15px]">
                                {qual.institution}
                              </p>
                            )}

                            {qual.year && (
                              <div className="mt-4 inline-flex items-center rounded-full border border-[#DDF5EE] bg-[#F8FFFC] px-3 py-1.5">
                                <span className="text-xs font-bold text-[#0F766E]">
                                  {qual.year}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        )}

        {qualifications.length === 0 && (
          <FadeInOnScroll>
            <div className="mx-auto mt-12 max-w-xl rounded-[24px] border border-slate-100 bg-[#F8FAF9] p-8 text-center">
              <GraduationCap className="mx-auto h-8 w-8 text-[#0F766E]" />
              <p className="mt-3 text-sm font-medium text-[#64748B]">
                Qualification information will be added here.
              </p>
            </div>
          </FadeInOnScroll>
        )}
      </div>
    </section>
  );
}
