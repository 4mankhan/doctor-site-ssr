import { MapPin, IndianRupee, Languages, User } from "lucide-react";
import { doctor, getGoogleMapsDirectionsUrl } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

export default function ContactSection() {
  const mapsUrl = getGoogleMapsDirectionsUrl();

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#f8fafc] scroll-mt-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="contact-heading" title="Contact & Location" />

        <FadeInOnScroll>
          <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-10 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 font-[family-name:var(--font-poppins)]">
              {doctor.hospitalDisplayName}
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {doctor.address.lines.join(", ")}
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <IndianRupee className="h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                <span>
                  Consultation fee: <strong className="text-slate-800">{doctor.consultationFeeDisplay}</strong>
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Languages className="h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                <span>Languages: {doctor.languages.join(", ")}</span>
              </li>
              <li className="flex gap-3 items-center">
                <User className="h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                <span>Doctor: {doctor.name}</span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-slate-500">
              Phone, email, WhatsApp, and clinic hours can be added in{" "}
              <code className="text-teal-700 text-xs">data/doctor.js</code> when available.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="#book" variant="primary" size="md">
                Book Consultation
              </Button>
              <Button href={mapsUrl} variant="secondary" size="md" target="_blank" rel="noopener noreferrer">
                Get Directions
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
