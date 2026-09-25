
import { doctor } from "@/data/doctor";
import { Users, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Memberships() {
  const memberships = doctor.memberships || [];

  return (
    <section
      id="memberships"
      className="relative overflow-hidden bg-[#F8FAF9] py-16 sm:py-20 md:py-24"
      aria-labelledby="memberships-heading"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#DDF5EE]/50 blur-[90px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#E8F6FA]/60 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeInOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F766E]/15 bg-white/80 px-3.5 py-1.5 shadow-sm">
              <Users className="h-3.5 w-3.5 text-[#0F766E]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">
                Professional Associations
              </span>
            </div>

            <SectionHeading id="memberships-heading">
              Professional Memberships
            </SectionHeading>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              Professional associations and memberships reflecting continued
              involvement in the pediatric medical community.
            </p>
          </div>
        </FadeInOnScroll>

        {memberships.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
            <div className="relative">
              {/* Continuous center accent */}
              <div
                className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-transparent via-[#0F766E]/25 to-transparent sm:left-[27px]"
                aria-hidden="true"
              />

              <div className="space-y-2">
                {memberships.map((membership, idx) => (
                  <FadeInOnScroll
                    key={idx}
                    delay={idx * 100}
                    className="relative"
                  >
                    <div className="group flex items-center gap-5 py-4 sm:gap-7 sm:py-5">
                      {/* Number marker */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DDF5EE] bg-white shadow-[0_5px_20px_-10px_rgba(15,118,110,0.35)] transition-all duration-300 group-hover:border-[#0F766E] group-hover:bg-[#0F766E] sm:h-14 sm:w-14">
                        <span className="text-[10px] font-extrabold tracking-wider text-[#0F766E] transition-colors group-hover:text-white sm:text-xs">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Membership content */}
                      <div className="flex min-w-0 flex-1 items-center justify-between gap-4 border-b border-slate-200/70 pb-4 transition-colors group-hover:border-[#0F766E]/20 sm:pb-5">
                        <div className="min-w-0">
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0F766E]">
                            Professional Membership
                          </p>

                          <h3 className="font-heading text-[16px] font-extrabold leading-snug tracking-[-0.01em] text-[#17212B] transition-colors group-hover:text-[#0F766E] sm:text-[19px]">
                            {membership}
                          </h3>
                        </div>

                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F766E] sm:h-5 sm:w-5" />
                      </div>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </div>
        )}

        {memberships.length === 0 && (
          <FadeInOnScroll>
            <div className="mt-12 text-center">
              <p className="text-sm font-medium text-[#64748B]">
                Professional membership information will be added here.
              </p>
            </div>
          </FadeInOnScroll>
        )}
      </div>
    </section>
  );
}
