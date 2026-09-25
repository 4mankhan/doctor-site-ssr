"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Stethoscope } from "lucide-react";
import { navLinks, doctor } from "@/data/doctor";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-300 motion-reduce:transition-none ${
          scrolled ? "shadow-md bg-white/95 backdrop-blur-md" : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="#home"
            className="flex items-center gap-2.5 min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 rounded-lg"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm">
              <Stethoscope className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-[family-name:var(--font-poppins)] font-semibold text-slate-800 text-sm sm:text-base leading-tight">
              {doctor.hospitalDisplayName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#book" variant="primary" size="sm" className="hidden sm:inline-flex">
              Book Consultation
            </Button>
            <button
              type="button"
              className="md:hidden rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
