import { ArrowRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import VerificationBadges from "./medicalVerificationBadge";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";
import ProfileClaimedBadge from "./profileVerification";
import MedicalVerifiedBadge from "./medicalVerificationBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[650px] overflow-hidden sm:min-h-[700px] lg:min-h-[760px]"
      aria-labelledby="hero-heading"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/pediatrician.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark / gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B1D]/85 via-[#071B1D]/65 to-[#071B1D]/25"
        aria-hidden="true"
      />

      {/* Additional bottom gradient for readability */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071B1D]/60 via-transparent to-[#071B1D]/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mt-53 lg:mt-0 mx-auto flex min-h-[650px] max-w-[1280px] items-center px-5 py-20 sm:min-h-[700px] sm:px-6 lg:min-h-[760px] lg:px-8">
        <FadeInOnScroll>
          <div className="max-w-[700px]">
            {/* Verification */}
            <div className="mb-6 hidden flex-wrap items-center gap-3 lg:flex">
              <ProfileClaimedBadge />
              <MedicalVerifiedBadge />
            </div>

            {/* Small label */}

            <div
              className="
    mb-5
    inline-flex items-center gap-2
    rounded-full
    border border-white/15
    bg-white/[0.08]
    px-3.5 py-1.5
    shadow-[0_4px_16px_rgba(0,0,0,0.08)]
    backdrop-blur-md
    ring-1 ring-white/5
  "
            >
              <span
                className="
      h-1.5 w-1.5
      rounded-full
      bg-[#5EEAD4]
    "
              />

              <span
                className="
      text-[11px]
      font-semibold
      uppercase
      tracking-[0.12em]
      text-white/95
    "
              >
                Pediatric Care in Agra
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="max-w-[700px] text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white font-heading sm:text-[50px] md:text-[60px] lg:text-[68px]"
            >
              {doctor.name}
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-[650px] text-[20px] font-bold leading-snug text-[#99F6E4] font-heading sm:text-[24px] md:text-[26px]">
              {doctor.tagline}
            </p>

            {/* Supporting text */}
            <p className="mt-5 max-w-[600px] text-[16px] leading-7 text-white/80 sm:text-[17px]">
              {doctor.heroSupportingText}
            </p>

            {/* Buttons */}
            <div className="mt-30 lg:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href="#book"
                variant="primary"
                size="lg"
                className="group"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button href="#about" variant="secondary" size="lg">
                View Profile
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
