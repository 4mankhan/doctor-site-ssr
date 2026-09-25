import { doctor } from "@/data/doctor";
import { MapPin, Clock3, ArrowUpRight } from "lucide-react";

import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function HospitalLocation() {
  const timings = doctor.placeholders.clinicTimings;

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Kohli+Children's+Hospital+Arjun+Nagar+Road+Agra";

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#F8FAF9] py-16 sm:py-20 md:py-24"
      aria-labelledby="location-heading"
    >
      {/* Soft background decoration */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#DDF5EE]/50 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#E8F6FA]/60 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#0F766E]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Find Us
              </span>

              <span className="h-px w-8 bg-[#0F766E]" />
            </div>

            <SectionHeading id="location-heading">
              Visit Our Clinic
            </SectionHeading>

            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              Conveniently located in Arjun Nagar, Agra for pediatric
              consultations and care.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="mt-12 grid overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.22)] md:grid-cols-[0.85fr_1.15fr] md:mt-16">
          {/* Information */}
          <FadeInOnScroll className="relative">
            <div className="flex h-full flex-col justify-between p-7 sm:p-9 lg:p-11">
              <div>
                {/* Location */}
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0FCF8] text-[#0F766E]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                    Clinic Location
                  </p>

                  <h3 className="mt-2 font-heading text-[23px] font-extrabold tracking-[-0.02em] text-[#17212B] sm:text-[26px]">
                    {doctor.hospitalDisplayName}
                  </h3>

                  <address className="mt-3 max-w-md not-italic text-[14px] leading-6 text-[#64748B]">
                    {doctor.address.displayShort}
                  </address>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-slate-100" />

                {/* Timings */}
                <div>
                  <div className="flex items-center gap-2.5">
                    <Clock3 className="h-4 w-4 text-[#0F766E]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Clinic Hours
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-sm font-bold text-[#17212B]">
                        Mon – Wed
                      </span>

                      <span className="text-right text-[13px] leading-5 text-[#64748B]">
                        {timings.monday}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-5">
                      <span className="text-sm font-bold text-[#17212B]">
                        Thu – Sat
                      </span>

                      <span className="text-right text-[13px] leading-5 text-[#64748B]">
                        {timings.thursday}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-5">
                      <span className="text-sm font-bold text-[#17212B]">
                        Sunday
                      </span>

                      <span className="text-right text-[13px] text-[#64748B]">
                        {timings.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-12px_rgba(15,118,110,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B625C]"
                >
                  Get Directions

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <p className="mt-3 text-[11px] text-slate-400">
                  Opens the location in Google Maps
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Map visual */}
          <FadeInOnScroll delay={150} className="min-h-[360px] md:min-h-full">
            <div className="relative h-full min-h-[360px] overflow-hidden bg-gradient-to-br from-[#E8F6FA] via-[#F4FAF8] to-[#DDF5EE]">
              {/* Abstract map texture */}
              <div
                className="absolute inset-0 opacity-60"
                aria-hidden="true"
              >
                <div className="absolute left-[-10%] top-[30%] h-8 w-[120%] rotate-[-16deg] rounded-full bg-white/80" />

                <div className="absolute left-[-10%] top-[62%] h-5 w-[120%] rotate-[22deg] rounded-full bg-white/70" />

                <div className="absolute left-[58%] top-[-20%] h-[140%] w-5 rotate-[17deg] rounded-full bg-white/65" />

                <div className="absolute left-[28%] top-[-20%] h-[140%] w-3 rotate-[-34deg] rounded-full bg-[#D6ECE7]/80" />

                <div className="absolute left-[5%] top-[15%] h-32 w-32 rounded-full bg-[#DDF5EE]/70 blur-2xl" />

                <div className="absolute bottom-[5%] right-[8%] h-40 w-40 rounded-full bg-[#E8F6FA]/80 blur-3xl" />
              </div>

              {/* Location marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-7 animate-pulse rounded-full bg-[#0F766E]/10" />

                  <div className="absolute -inset-3 rounded-full border border-[#0F766E]/20" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white bg-[#0F766E] text-white shadow-[0_15px_35px_-10px_rgba(15,118,110,0.65)]">
                    <MapPin className="h-7 w-7" />
                  </div>
                </div>
              </div>

              {/* Map label */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.3)] backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                      Located in
                    </p>

                    <p className="mt-1 truncate text-sm font-extrabold text-[#17212B]">
                      Arjun Nagar, Agra
                    </p>
                  </div>

                  <MapPin className="h-5 w-5 shrink-0 text-[#0F766E]" />
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
