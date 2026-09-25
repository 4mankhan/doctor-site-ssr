import { doctor } from "@/data/doctor";
import VerificationBadges from "./VerificationBadges";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#E8F6FA]/50 via-[#F8FAF9] to-[#F8FAF9] pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#DDF5EE]/40 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#E8F6FA]/60 blur-[60px]" />
        <div className="absolute top-[20%] left-[5%] h-4 w-4 rounded-full bg-[#0F766E]/10" />
        <div className="absolute bottom-[30%] right-[10%] h-6 w-6 rounded-full bg-[#0F766E]/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeInOnScroll className="order-2 lg:order-1 flex flex-col justify-center">
            <VerificationBadges className="mb-6" />
            <h1
              id="hero-heading"
              className="text-[38px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-extrabold text-[#17212B] tracking-tight font-heading leading-[1.1] mb-4"
            >
              {doctor.name}
            </h1>
            <p className="text-[20px] sm:text-[24px] font-bold text-[#0F766E] mb-6 font-heading">
              {doctor.tagline}
            </p>
            <p className="text-base sm:text-lg text-[#64748B] leading-[1.75] max-w-[540px] mb-10">
              {doctor.heroSupportingText}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button href="#book" variant="primary" size="lg">
                Book Consultation
              </Button>
              <Button href="#about" variant="secondary" size="lg">
                View Profile
              </Button>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative overflow-hidden rounded-[32px] bg-[#E8F6FA] shadow-[0_24px_60px_rgba(15,118,110,0.12)] aspect-[4/5]">
                <Image
                  src="/images/dr.sunil_kohli.avif"
                  alt="Dr. Sunil Kohli - Pediatrician in Agra"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F766E]/15 via-transparent to-transparent" />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
