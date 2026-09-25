
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, MapPin } from "lucide-react";

import { doctor } from "@/data/doctor";
import VerificationBadges from "./VerificationBadges";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#E8F6FA]/60 via-[#F8FAF9] to-white pt-8 pb-16 sm:pt-12 md:pb-24 lg:pt-16 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#DDF5EE]/50 blur-[90px]" />

        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#E8F6FA]/70 blur-[90px]" />

        <div className="absolute right-[18%] top-[22%] hidden h-3 w-3 rounded-full bg-[#0F766E]/15 lg:block" />

        <div className="absolute left-[8%] top-[38%] hidden h-5 w-5 rounded-full bg-[#0F766E]/10 lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

          {/* LEFT CONTENT */}
          <FadeInOnScroll className="order-2 lg:order-1">
            <div className="max-w-[650px]">

              {/* Verification */}
              <VerificationBadges className="mb-6" />

              {/* Small label */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F766E]/15 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#0F766E]" />
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">
                  Pediatric Care in Agra
                </span>
              </div>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="max-w-[680px] text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#17212B] font-heading sm:text-[48px] md:text-[56px] lg:text-[62px]"
              >
                {doctor.name}
              </h1>

              {/* Tagline */}
              <p className="mt-4 max-w-[600px] text-[20px] font-bold leading-snug text-[#0F766E] font-heading sm:text-[23px]">
                {doctor.tagline}
              </p>

              {/* Description */}
              <p className="mt-5 max-w-[590px] text-[16px] leading-7 text-[#64748B] sm:text-[17px]">
                {doctor.heroSupportingText}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="#book"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  href="#about"
                  variant="secondary"
                  size="lg"
                >
                  View Profile
                </Button>
              </div>

              {/* Quick contact */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6">

                <a
                  href={`tel:${doctor.placeholders.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#64748B] transition hover:text-[#0F766E]"
                >
                  <Phone className="h-4 w-4 text-[#0F766E]" />
                  {doctor.placeholders.phone}
                </a>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#64748B]">
                  <MapPin className="h-4 w-4 text-[#0F766E]" />
                  Agra, Uttar Pradesh
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* RIGHT — DOCTOR IMAGE */}
          <FadeInOnScroll className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[500px]">

              {/* Large soft background shape */}
              <div
                className="absolute left-1/2 top-1/2 h-[92%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-[#DDF5EE]"
                aria-hidden="true"
              />

              {/* Decorative circle */}
              <div
                className="absolute -right-2 top-8 h-20 w-20 rounded-full border-[10px] border-white bg-[#E8F6FA] shadow-sm sm:-right-5 sm:h-24 sm:w-24"
                aria-hidden="true"
              />

              {/* Image frame */}
              <div className="relative mx-auto w-[82%] sm:w-[78%]">

                <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border-[7px] border-white bg-[#E8F6FA] shadow-[0_30px_70px_-25px_rgba(15,118,110,0.35)]">

                  <Image
                    src="/images/dr.sunil_kohli.avif"
                    alt="Dr. Sunil Kohli, Pediatrician in Agra"
                    fill
                    priority
                    className="object-cover object-[center_top] transition-transform duration-700 hover:scale-[1.025]"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 390px, 400px"
                  />

                  {/* Subtle image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17212B]/20 via-transparent to-transparent" />
                </div>

                {/* Bottom doctor information card */}
                <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 sm:-bottom-6">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.25)] backdrop-blur-md sm:px-5 sm:py-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F6FA] text-[#0F766E] sm:h-11 sm:w-11">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                        Pediatric Specialist
                      </p>

                      <p className="mt-0.5 truncate text-sm font-extrabold text-[#17212B]">
                        {doctor.name}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute bottom-8 -left-1 hidden sm:block">
                <div className="rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_35px_-15px_rgba(15,23,42,0.25)] backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Caring for
                  </p>
                  <p className="mt-0.5 text-sm font-extrabold text-[#17212B]">
                    Children & Families
                  </p>
                </div>
              </div>

            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
