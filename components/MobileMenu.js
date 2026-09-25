
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { navLinks, doctor } from "@/data/doctor";
import Button from "./Button";

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", onKey);
    }

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-[#17212B]/50 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col overflow-hidden bg-[#F8FAF9] shadow-[-20px_0_60px_-20px_rgba(15,23,42,0.35)]">

        {/* Header */}
        <div className="border-b border-slate-200/80 bg-white px-5 py-4">
          <div className="flex items-center justify-between gap-4">

            <div className="min-w-0">
              <p className="truncate text-base font-extrabold text-[#17212B] font-heading">
                {doctor.hospitalDisplayName}
              </p>

              <p className="mt-0.5 truncate text-xs font-medium text-[#0F766E]">
                {doctor.name}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-[#64748B] transition hover:bg-[#E8F6FA] hover:text-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E]"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick contact */}
        <div className="border-b border-slate-200/80 bg-white px-5 py-4">
          <div className="grid grid-cols-2 gap-2">

            <a
              href={`tel:${doctor.placeholders.phone}`}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-[#F8FAF9] px-3 py-2.5 transition hover:border-[#DDF5EE] hover:bg-[#F4FCF9]"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#0F766E]" />

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Call
                </p>

                <p className="truncate text-xs font-bold text-[#17212B]">
                  {doctor.placeholders.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${doctor.placeholders.email}`}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-[#F8FAF9] px-3 py-2.5 transition hover:border-[#DDF5EE] hover:bg-[#F4FCF9]"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#0F766E]" />

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="truncate text-xs font-bold text-[#17212B]">
                  {doctor.placeholders.email}
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* Navigation */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-5"
          aria-label="Mobile navigation"
        >
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Navigation
          </p>

          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-bold text-[#17212B] transition-all hover:bg-white hover:text-[#0F766E] hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-extrabold text-slate-400 transition-colors group-hover:bg-[#E8F6FA] group-hover:text-[#0F766E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.label}
                </span>

                <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0F766E]" />
              </Link>
            ))}
          </div>

          {/* Emergency card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#DDF5EE] bg-[#F0FCF8]">

            <div className="p-4">
              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F766E] text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                    Emergency & Admission
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#17212B]">
                    Kohli Hospital
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Hospital facility for children requiring emergency care or
                    admission.
                  </p>
                </div>

              </div>

              <a
                href={`tel:${doctor.placeholders.phone}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#0F766E] shadow-sm ring-1 ring-[#DDF5EE] transition hover:bg-[#0F766E] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call {doctor.placeholders.phone}
              </a>
            </div>

          </div>

          {/* Location */}
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold leading-5 text-[#17212B]">
                Agra, Uttar Pradesh
              </p>
            </div>
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="border-t border-slate-200 bg-white p-4">
          <Button
            href="#book"
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
          >
            Book Consultation
            <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Button>

          <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
            Our staff will call to confirm the exact appointment time.
          </p>
        </div>
      </div>
    </div>
  );
}
