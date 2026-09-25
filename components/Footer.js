import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { navLinks, doctor } from "@/data/doctor";

export default function Footer() {
  const timings = doctor.placeholders.clinicTimings;

  return (
    <footer className="relative overflow-hidden bg-[#17212B] text-slate-300 border-t-4 border-[#0F766E]">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#0F766E]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#0F766E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-14 pb-10 lg:px-8">

        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr_1.15fr]">

          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold text-white font-heading">
              {doctor.hospitalDisplayName}
            </p>

            <p className="mt-2 text-sm font-medium text-[#DDF5EE]">
              {doctor.name} — {doctor.specialization}
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Pediatric consultation and child healthcare with a focus on
              compassionate care for children and their families.
            </p>

            {/* Emergency badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0F766E]/30 bg-[#0F766E]/10 px-4 py-2 text-xs font-bold text-[#DDF5EE]">
              <span className="h-2 w-2 rounded-full bg-[#5EEAD4]" />
              Emergency & Admission Facility Available at Kohli Hospital
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </p>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#DDF5EE] rounded"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </p>

            <div className="space-y-4">

              {/* Phone */}
              <a
                href={`tel:${doctor.placeholders.phone}`}
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F766E]/15 text-[#5EEAD4]">
                  <Phone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-200 group-hover:text-white">
                    {doctor.placeholders.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${doctor.placeholders.email}`}
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F766E]/15 text-[#5EEAD4]">
                  <Mail className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-0.5 break-all text-sm font-semibold text-slate-200 group-hover:text-white">
                    {doctor.placeholders.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F766E]/15 text-[#5EEAD4]">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-0.5 text-sm leading-5 text-slate-300">
                    Agra, Uttar Pradesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Timings */}
          <div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#5EEAD4]" />

              <p className="text-sm font-bold uppercase tracking-wider text-white">
                Clinic Hours
              </p>
            </div>

            <div className="mt-5 space-y-3">

              <div>
                <p className="text-xs font-bold text-slate-300">
                  Monday – Wednesday
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {timings.monday}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-300">
                  Thursday – Saturday
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {timings.thursday}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-300">
                  Sunday
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {timings.sunday}
                </p>
              </div>

            </div>

            <Link
              href="#book"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0F766E] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#0B625C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDF5EE]"
            >
              Book Consultation
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Hospital information strip */}
        <div className="mt-12 rounded-2xl border border-slate-700/60 bg-white/[0.03] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-bold text-white">
                Kohli Hospital
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Emergency & hospital admission facility for children.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5EEAD4] hover:text-white"
            >
              View hospital details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 max-w-4xl text-xs leading-5 text-slate-500">
          <p>
            Information on this website is provided for general informational
            purposes and does not replace professional medical advice,
            diagnosis, or treatment.
          </p>

          <p className="mt-2">
            For urgent or emergency situations, please contact the hospital
            directly or seek appropriate emergency medical care.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/70 pt-7 text-xs text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()}{" "}
            {doctor.hospitalDisplayName}. All rights reserved.
          </p>

          <p className="text-center">
            Pediatric Care · Agra, Uttar Pradesh
          </p>

        </div>
      </div>
    </footer>
  );
}
