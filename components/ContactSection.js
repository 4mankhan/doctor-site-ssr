import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ShieldCheck,
  ArrowUpRight,
  IndianRupee,
  Languages,
  User,
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
      className="relative overflow-hidden py-16 md:py-24 bg-[#F8FAF9] scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#DDF5EE]/60 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#E8F6FA]/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="contact-heading" title="Kohli Hospital" />

        <FadeInOnScroll>
          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-25px_rgba(15,118,110,0.18)]">
            {/* Top emergency banner */}
            <div className="relative overflow-hidden bg-[#0F766E] px-6 py-7 sm:px-10">
              <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-white/5" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 border border-white/20">
                    <ShieldCheck
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      Emergency & Admission Facility
                    </p>

                    <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-white font-[family-name:var(--font-poppins)]">
                      Kohli Hospital
                    </h3>

                    <p className="mt-1 text-sm text-white/80">
                      For children requiring emergency care or hospital
                      admission.
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${doctor.placeholders.phone}`}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0F766E] transition hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4" />
                  Call Hospital
                </a>
              </div>
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left: hospital information */}
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                    About the Hospital
                  </p>

                  <h4 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#17212B] font-[family-name:var(--font-poppins)]">
                    A dedicated hospital facility for pediatric emergency &
                    admission care.
                  </h4>

                  <p className="mt-5 text-[15px] sm:text-base leading-7 text-[#64748B]">
                    Kohli Hospital is the hospital facility associated with Dr.
                    Sunil Kohli&apos;s pediatric practice, where children
                    requiring emergency attention or hospital admission can be
                    cared for.
                  </p>

                  <p className="mt-4 text-[15px] sm:text-base leading-7 text-[#64748B]">
                    Hospital admissions and inpatient care are managed under
                    <span className="font-bold text-[#17212B]">
                      {" "}
                      Mrs. Monica Kohli
                    </span>
                    , wife of Dr. Sunil Kohli.
                  </p>
                </div>

                {/* Hospital details */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {/* Address */}
                  <div className="rounded-2xl border border-slate-100 bg-[#F8FAF9] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F6FA] text-[#0F766E]">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                      Hospital Address
                    </p>

                    <address className="mt-2 not-italic text-sm leading-6 text-[#64748B]">
                      {doctor.address.lines.join(", ")}
                    </address>
                  </div>

                  {/* Phone */}
                  <div className="rounded-2xl border border-slate-100 bg-[#F8FAF9] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F6FA] text-[#0F766E]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                      Contact
                    </p>

                    <a
                      href={`tel:${doctor.placeholders.phone}`}
                      className="mt-2 block text-sm font-bold text-[#17212B] hover:text-[#0F766E]"
                    >
                      {doctor.placeholders.phone}
                    </a>

                    <a
                      href={`mailto:${doctor.placeholders.email}`}
                      className="mt-1 block break-all text-sm text-[#64748B] hover:text-[#0F766E]"
                    >
                      {doctor.placeholders.email}
                    </a>
                  </div>
                </div>

                {/* Additional information */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                    <IndianRupee
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Consultation
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#17212B]">
                        {doctor.consultationFeeDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                    <Languages
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Languages
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#17212B]">
                        {doctor.languages.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: timings / care information */}
              <div className="border-t border-slate-100 bg-[#F8FAF9] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-sm">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                      Clinic Timings
                    </p>

                    <p className="mt-0.5 text-lg font-extrabold text-[#17212B] font-[family-name:var(--font-poppins)]">
                      Consultation Hours
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl bg-white border border-slate-100 p-4">
                    <p className="text-sm font-bold text-[#17212B]">
                      Monday – Wednesday
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#64748B]">
                      {timings.monday}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-100 p-4">
                    <p className="text-sm font-bold text-[#17212B]">
                      Thursday – Saturday
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#64748B]">
                      {timings.thursday}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-100 p-4">
                    <p className="text-sm font-bold text-[#17212B]">Sunday</p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {timings.sunday}
                    </p>
                  </div>
                </div>

                {/* Doctor */}
                {/* Doctor & Hospital Administration */}
                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#DDF5EE] bg-[#EFFFF9] p-4">
                  {/* Doctor */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F766E] shadow-sm">
                      <Stethoscope className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                        Pediatrician
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-[#17212B]">
                        {doctor.name}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="ml-[55px] h-px bg-[#DDF5EE]" />

                  {/* Hospital Administration */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F766E] shadow-sm">
                      <Building2 className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                        Hospital Administration
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-[#17212B]">
                        Mrs. Monica Kohli
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-7 space-y-3">
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
                    Get Directions
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
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
