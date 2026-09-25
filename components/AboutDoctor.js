import { ShieldCheck, Calendar } from "lucide-react";
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function AboutDoctor() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="about-heading" title={`About ${doctor.name}`} align="left" />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <FadeInOnScroll className="lg:col-span-3">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {doctor.profileDescription}
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="lg:col-span-2">
            <div className="rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 p-6 sm:p-8 text-white shadow-lg shadow-teal-900/15">
              <div className="flex items-center gap-2 text-teal-100 text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Experience
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold font-[family-name:var(--font-poppins)]">
                    {doctor.experienceYearsOverall}
                  </p>
                  <p className="text-teal-100 mt-1">Years of Overall Experience</p>
                </div>
                <div className="h-px bg-teal-500/50" aria-hidden="true" />
                <div>
                  <p className="text-4xl font-bold font-[family-name:var(--font-poppins)]">
                    {doctor.experienceYearsSpecialist}
                  </p>
                  <p className="text-teal-100 mt-1">Years as Specialist</p>
                </div>
              </div>
              {doctor.registrationVerified ? (
                <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Medical Registration Verified
                </p>
              ) : null}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
