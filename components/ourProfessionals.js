import Image from "next/image";
import { GraduationCap, ShieldCheck } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

const professionals = [

  {
    name: "Dr. Sunil Kohli",
    title: "Pediatric Specialist",
    image: "/images/dr.sunil_kohli.avif",
    qualifications: [
      "MD (Pediatrics) — Sarojini Naidu Medical College, Agra — 1990",
      "MBBS — Sarojini Naidu Medical College, Agra — 1986",
    ],
  },

      {
    name: "Dr. Monica Kohli",
    title: "Pediatric Specialist",
    image: "/images/dr.monica_kohli.avif",
    qualifications: [
      "MD (Pediatrics) — Sarojini Naidu Medical College, Agra — 1992",
      "MBBS — Sarojini Naidu Medical College, Agra — 1989",
    ],
  },
];

export default function OurProfessionals() {
  return (
    <section
      id="professionals"
      className="relative overflow-hidden bg-[#F8FAF9] py-20 sm:py-24 lg:py-28"
      aria-labelledby="professionals-heading"
    >
      {/* Very subtle background */}
      <div
        className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-[#E8F6FA]/50 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <FadeInOnScroll>
          <div className="max-w-[650px]">

            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Our Professionals
              </span>
            </div>

            <h2
              id="professionals-heading"
              className="max-w-[700px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#17212B] font-heading sm:text-[44px]"
            >
              Experienced hands.
              <br />
              <span className="text-[#0F766E]">
                Compassionate care.
              </span>
            </h2>

            <p className="mt-5 max-w-[570px] text-[16px] leading-7 text-[#64748B]">
              Dedicated pediatric specialists with decades of experience,
              committed to providing thoughtful care for every child.
            </p>
          </div>
        </FadeInOnScroll>

        {/* PROFESSIONALS */}
        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-7">

          {professionals.map((doctor) => (
            <FadeInOnScroll key={doctor.name}>

              <article
                className="
                  group
                  overflow-hidden
                  rounded-[26px]
                  border border-slate-200/80
                  bg-white
                  shadow-[0_15px_45px_-25px_rgba(15,23,42,0.18)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_55px_-25px_rgba(15,23,42,0.22)]
                "
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden bg-[#E8F6FA] sm:h-[310px]">

                  {/* Simple organic shape */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[58%]
                      h-[90%]
                      w-[62%]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-[50%]
                      bg-[#DDF5EE]
                    "
                    aria-hidden="true"
                  />

                  <div className="relative mx-auto h-full w-[58%] sm:w-[52%]">
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name}, Pediatric Specialist`}
                      fill
                      className="
                        object-cover
                        object-[center_top]
                        transition-transform
                        duration-700
                        group-hover:scale-[1.02]
                      "
                      sizes="(max-width: 640px) 55vw, 280px"
                    />
                  </div>

                  {/* Minimal badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#0F766E]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                        Pediatric Specialist
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-5 py-5 sm:px-7 sm:py-6">

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <h3 className="text-[23px] font-extrabold tracking-[-0.025em] text-[#17212B] font-heading">
                        {doctor.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#0F766E]">
                        {doctor.title}
                      </p>
                    </div>

                    <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1FAF8] sm:flex">
                      <GraduationCap className="h-4 w-4 text-[#0F766E]" />
                    </div>
                  </div>

                  {/* Qualification list */}
                  <div className="mt-5 border-t border-slate-100 pt-4">

                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Education
                    </p>

                    <div className="space-y-2">
                      {doctor.qualifications.map((qualification) => (
                        <p
                          key={qualification}
                          className="text-[13px] leading-5 text-[#64748B]"
                        >
                          {qualification}
                        </p>
                      ))}
                    </div>

                  </div>
                </div>
              </article>

            </FadeInOnScroll>
          ))}
        </div>

        {/* Small footer */}
        <FadeInOnScroll>
          <div className="mt-9 flex items-center gap-3 border-t border-slate-200/70 pt-6">
            <div className="h-px w-8 bg-[#0F766E]/40" />

            <p className="text-xs font-medium tracking-wide text-slate-400">
              Trusted pediatric care in Agra
            </p>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
}