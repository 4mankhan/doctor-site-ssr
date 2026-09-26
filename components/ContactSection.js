
import {
  MapPin,
  Phone,
  Clock3,
  ShieldCheck,
  ArrowUpRight,
  Languages,
  Stethoscope,
  Building2,
} from "lucide-react";

import { doctor, getGoogleMapsDirectionsUrl } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

export default function ContactSection() {
  const mapsUrl = getGoogleMapsDirectionsUrl();
  const timings = doctor.placeholders.clinicTimings;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FAF9] py-12 scroll-mt-20 md:py-16"
      aria-labelledby="contact-heading"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#DDF5EE]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#E8F6FA]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="contact-heading" title="Kohli Hospital" />

        <FadeInOnScroll>
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_-24px_rgba(15,118,110,0.25)]">

            {/* Compact hospital header */}
            <div className="border-b border-white/10 bg-[#0F766E] px-5 py-5 sm:px-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                    <Building2
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl font-[family-name:var(--font-poppins)]">
                        Kohli Hospital
                      </h3>

                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                        Pediatric Care
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-white/70 sm:text-sm">
                      Primarily associated with Dr. Monica Kohli & Dr. Sunil Kohli
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${doctor.placeholders.phone}`}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0F766E] transition hover:bg-slate-50 sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call Hospital
                </a>
              </div>
            </div>

            {/* Landscape content */}
            <div className="grid lg:grid-cols-[1.25fr_0.9fr]">

              {/* LEFT */}
              <div className="p-5 sm:p-7">

                {/* Intro */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className="h-4 w-4 text-[#0F766E]"
                      aria-hidden="true"
                    />

                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                      Hospital & Pediatric Care
                    </p>
                  </div>

<h4 className="mt-2 text-xl font-extrabold tracking-tight text-[#17212B] sm:text-2xl font-[family-name:var(--font-poppins)]">
  Dedicated pediatric care, emergency support & hospital admission.
</h4>

<p className="mt-2.5 max-w-2xl text-sm leading-6 text-[#64748B]">
  Kohli Hospital provides pediatric consultation, emergency support and
  hospital admission care under the care of Dr. Sunil Kohli and Dr. Monica
  Kohli.
</p>

                </div>

                {/* Information grid */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {/* Address */}
                  <div className="flex gap-3 rounded-xl border border-slate-100 bg-[#F8FAF9] p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F6FA] text-[#0F766E]">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Hospital Address
                      </p>

                      <address className="mt-1 not-italic text-xs leading-5 text-[#64748B]">
                        {doctor.address.lines.join(", ")}
                      </address>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-3 rounded-xl border border-slate-100 bg-[#F8FAF9] p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F6FA] text-[#0F766E]">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Contact
                      </p>

                      <a
                        href={`tel:${doctor.placeholders.phone}`}
                        className="mt-1 block text-xs font-bold text-[#17212B] hover:text-[#0F766E]"
                      >
                        {doctor.placeholders.phone}
                      </a>

                      <a
                        href={`mailto:${doctor.placeholders.email}`}
                        className="mt-0.5 block truncate text-xs text-[#64748B] hover:text-[#0F766E]"
                      >
                        {doctor.placeholders.email}
                      </a>
                    </div>
                  </div>

                  {/* Consultation */}
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5">
                    <Stethoscope
                      className="h-4 w-4 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Consultation
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-[#17212B]">
                        {doctor.consultationFeeDisplay}
                      </p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5">
                    <Languages
                      className="h-4 w-4 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Languages
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-[#17212B]">
                        {doctor.languages.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Doctors / hospital association */}
                <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#DDF5EE] bg-[#F1FCF8] p-3.5 sm:flex-row sm:items-center">

                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0F766E] shadow-sm">
                      <Stethoscope className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Pediatrician
                      </p>

                      <p className="text-xs font-bold text-[#17212B]">
                        Dr. Sunil Kohli
                      </p>
                    </div>
                  </div>

                  <div className="hidden h-8 w-px bg-[#DDF5EE] sm:block" />

                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0F766E] shadow-sm">
                      <Building2 className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Pediatrician & Hospital
                      </p>

                      <p className="text-xs font-bold text-[#17212B]">
                        Dr. Monica Kohli
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — timings */}
              <div className="border-t border-slate-100 bg-[#F8FAF9] p-5 sm:p-7 lg:border-l lg:border-t-0">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F766E] text-white">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                      Clinic Timings
                    </p>

                    <p className="text-base font-extrabold text-[#17212B]">
                      Consultation Hours
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3.5 py-2.5">
                    <p className="text-xs font-bold text-[#17212B]">
                      Monday – Wednesday
                    </p>

                    <p className="text-right text-[11px] text-[#64748B]">
                      {timings.monday}
                    </p>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3.5 py-2.5">
                    <p className="text-xs font-bold text-[#17212B]">
                      Thursday – Saturday
                    </p>

                    <p className="text-right text-[11px] text-[#64748B]">
                      {timings.thursday}
                    </p>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3.5 py-2.5">
                    <p className="text-xs font-bold text-[#17212B]">
                      Sunday
                    </p>

                    <p className="text-right text-[11px] font-semibold text-slate-500">
                      {timings.sunday}
                    </p>
                  </div>
                </div>

                {/* Monica profile highlight */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F6FA] text-[#0F766E]">
                      <Stethoscope className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Dr. Monica Kohli
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-[#17212B]">
                        Pediatrician · MD (Pediatrics)
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#64748B]">
                        34 years of experience · MBBS 1989 · MD Pediatrics 1992
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <Button
                    href="#book"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Book Consultation
                  </Button>

                  <Button
                    href={mapsUrl}
                    variant="secondary"
                    size="md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                  >
                    Directions
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>

                <p className="mt-3 text-center text-[10px] leading-4 text-slate-400">
                  For emergencies, please call the hospital directly before
                  travelling whenever possible.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
