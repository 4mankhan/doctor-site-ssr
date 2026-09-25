"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, HeartPulse } from "lucide-react";
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 motion-reduce:transition-none ${
          scrolled ? "shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] bg-white/95 backdrop-blur-md py-2" : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 md:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="#home"
            className="flex items-center gap-3 min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E] rounded-lg group"
          >
            <span className="flex h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F6FA] text-[#0F766E] shadow-sm group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300">
              <HeartPulse className="h-[18px] w-[18px] sm:h-5 sm:w-5 md:h-6 md:w-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
                <span className="font-heading font-bold text-[#17212B] text-[14px] sm:text-[16px] md:text-lg leading-tight tracking-tight">
                {doctor.hospitalDisplayName}
                </span>
                <span className="text-[10px] sm:text-[11px] md:text-[13px] text-[#64748B] font-medium tracking-wide">PEDIATRIC CARE</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-6" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-lg px-2 py-2 text-[15px] font-semibold text-[#64748B] hover:text-[#0F766E] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#0F766E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="#book" variant="primary" size="sm" className="hidden sm:inline-flex">
              Book Consultation
            </Button>
            <button
              type="button"
              className="md:hidden rounded-xl p-2.5 text-[#17212B] hover:bg-[#E8F6FA] hover:text-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E] transition-colors"
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
