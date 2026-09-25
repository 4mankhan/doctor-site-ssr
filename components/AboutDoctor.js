
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

export default function AboutDoctor() {
  // Use the actual property name from data/doctor.js
  const paragraphs = doctor.profileDescription
    ? doctor.profileDescription.split(/\n\s*\n/)
    : [];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Decorative background */}
      <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#E8F6FA] opacity-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* About Content */}
          <FadeInOnScroll className="lg:col-span-7">
            <SectionHeading align="left" className="mb-6">
              About Dr. Sunil Kohli
            </SectionHeading>

            <div className="prose prose-lg prose-slate max-w-none text-[16px] font-medium leading-[1.75] text-[#64748B] sm:text-[18px]">
              {paragraphs.length > 0 ? (
                paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-5 last:mb-0">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>
                  Dr. Sunil Kohli is a Pediatrician in Agra with{" "}
                  {doctor.experienceYearsOverall} years of experience,
                  practising at {doctor.hospitalDisplayName}.
                </p>
              )}
            </div>
          </FadeInOnScroll>

          {/* Experience Card */}
          <FadeInOnScroll delay={200} className="lg:col-span-5">
            <div className="card-hover relative overflow-hidden rounded-[32px] bg-[#0F766E] p-10 text-white shadow-[0_20px_40px_-15px_rgba(15,118,110,0.3)] md:p-12">
              {/* Decorative elements */}
              <div className="absolute -mr-10 -mt-10 right-0 top-0 h-32 w-32 rounded-full bg-white opacity-10 blur-2xl" />
              <div className="absolute -mb-20 -ml-20 bottom-0 left-0 h-40 w-40 rounded-full bg-[#DDF5EE] opacity-10 blur-2xl" />

              <div className="relative z-10 space-y-10">
                {/* Overall Experience */}
                <div>
                  <div className="mb-2 font-heading text-[56px] font-extrabold leading-none">
                    {doctor.experienceYearsOverall}+
                  </div>

                  <div className="text-xl font-bold text-[#DDF5EE]">
                    Years Overall Experience
                  </div>
                </div>

                <div className="h-px w-full bg-white/20" />

                {/* Specialist Experience */}
                <div>
                  <div className="mb-2 font-heading text-[44px] font-extrabold leading-none">
                    {doctor.experienceYearsSpecialist}+
                  </div>

                  <div className="text-lg font-bold text-[#DDF5EE]">
                    Years as Specialist
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
