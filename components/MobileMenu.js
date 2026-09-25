"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
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
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-[min(100%,320px)] bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <p className="font-semibold text-slate-800 text-sm font-[family-name:var(--font-poppins)]">
            {doctor.hospitalDisplayName}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <Button href="#book" variant="primary" size="lg" className="w-full" onClick={onClose}>
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
