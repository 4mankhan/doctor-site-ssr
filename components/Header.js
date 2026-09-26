"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import { navLinks, doctor } from "@/data/doctor";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from "@/public/images/fevicon/fevicon2.png";

function PediatricCareIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 sm:h-8 sm:w-8"
      aria-hidden="true"
    >
      {/* Soft protective heart */}
      <path
        d="M24 42C22.8 40.9 8 29.3 8 17.7C8 11.8 12.2 7.5 17.6 7.5C20.6 7.5 23 9.1 24 11.4C25 9.1 27.4 7.5 30.4 7.5C35.8 7.5 40 11.8 40 17.7C40 29.3 25.2 40.9 24 42Z"
        fill="currentColor"
        opacity="0.12"
      />

      {/* Baby head */}
      <circle
        cx="24"
        cy="21"
        r="8.5"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Baby ears */}
      <circle
        cx="15.8"
        cy="21.5"
        r="2.2"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="32.2"
        cy="21.5"
        r="2.2"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Hair */}
      <path
        d="M18.5 17.5C20 14.8 22 13.7 24 13.7C26.3 13.7 28.5 15 29.7 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <circle cx="21" cy="21.2" r="1" fill="currentColor" />
      <circle cx="27" cy="21.2" r="1" fill="currentColor" />

      {/* Smile */}
      <path
        d="M21.5 24.5C22.2 25.4 23 25.8 24 25.8C25 25.8 25.8 25.4 26.5 24.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Small care cross */}
      <path
        d="M35 29.5V35.5M32 32.5H38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 motion-reduce:transition-none ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/90 py-2 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.3)] backdrop-blur-xl"
            : "border-b border-slate-100 bg-white py-3 sm:py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F766E]"
            aria-label={`${doctor.clinicName} - Home`}
          >
            <span
              className={`relative flex shrink-0 items-center justify-center rounded-[15px] text-[#0F766E] transition-all duration-300 ${
                scrolled ? "h-10 w-10 bg-[#F0FCF8]" : "h-11 w-11 bg-[#E8F6FA]"
              } group-hover:bg-[#0F766E] group-hover:text-white`}
            >
              {/* <PediatricCareIcon /> */}
              <div className="flex items-center p-1">
                <Image
                  src={logo}
                  alt="Pediatrician logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>

              {/* Tiny decorative dot */}
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#2A9D8F]" />
            </span>

            <span className="min-w-0">
             <span
      className="
        block
        break-words
        font-heading
        text-[12px]
        font-extrabold
        leading-tight
        tracking-[-0.01em]
        text-[#17212B]
        sm:text-[16px]
        sm:truncate
      "
    >
      {doctor.clinicName}
    </span>

              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.16em] text-[#0F766E] sm:text-[10px]">
                Pediatric Care
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center md:flex"
            aria-label="Primary navigation"
          >
            <div className="flex items-center gap-0.5 rounded-full border border-slate-100 bg-[#F8FAF9] p-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-3 py-2 text-[13px] font-bold text-[#64748B] transition-all duration-200 hover:bg-white hover:text-[#0F766E] hover:shadow-sm lg:px-3.5 lg:text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
    href="#book"
    variant="primary"
    size="sm"
    className="
      inline-flex
      shrink-0
      whitespace-nowrap
      rounded-full
      px-2.5
      text-[10px]
      shadow-[0_8px_20px_-10px_rgba(15,118,110,0.6)]
      sm:px-5
      sm:text-sm
    "
  >
    Book Consultation
    <ArrowUpRight className="ml-1 h-3 w-3 sm:ml-1.5 sm:h-3.5 sm:w-3.5" />
  </Button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#17212B] transition-all hover:border-[#DDF5EE] hover:bg-[#F0FCF8] hover:text-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E] md:hidden"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
