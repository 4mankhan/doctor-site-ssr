import { doctor } from "@/data/doctor";
import VerificationBadges from "./VerificationBadges";
import Button from "./Button";
import DoctorImagePlaceholder from "./DoctorImagePlaceholder";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-[#f8fafc] pt-8 pb-12 md:pt-14 md:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <FadeInOnScroll className="order-2 lg:order-1">
            <VerificationBadges className="mb-5" />
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight font-[family-name:var(--font-poppins)] leading-[1.1]"
            >
              {doctor.name}
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-teal-700">
              {doctor.tagline}
            </p>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {doctor.heroSupportingText}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button href="#book" variant="primary" size="lg">
                Book Consultation
              </Button>
              <Button href="#about" variant="secondary" size="lg">
                View Profile
              </Button>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll className="order-1 lg:order-2">
            <DoctorImagePlaceholder usePhoto={false} />
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
