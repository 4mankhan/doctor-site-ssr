import { MapPin, Navigation } from "lucide-react";
import { doctor, getGoogleMapsDirectionsUrl } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

export default function HospitalLocation() {
  const mapsUrl = getGoogleMapsDirectionsUrl();

  return (
    <section
      id="hospital"
      className="py-14 md:py-20 bg-[#f8fafc]"
      aria-labelledby="hospital-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="hospital-heading"
          title={`Visit ${doctor.hospitalDisplayName}`}
          subtitle="Find the clinic location in Agra. Map integration can be connected later."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeInOnScroll>
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-100 shadow-sm h-full">
              <h3 className="text-xl font-bold text-slate-800 font-[family-name:var(--font-poppins)]">
                {doctor.hospitalName}
              </h3>
              <address className="mt-4 not-italic text-slate-600 leading-relaxed">
                {doctor.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href={mapsUrl}
                  variant="secondary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </Button>
                <Button href="#book" variant="primary" size="md">
                  Book Consultation
                </Button>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm min-h-[280px] flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center bg-gradient-to-br from-slate-100 to-sky-50">
                <MapPin className="h-10 w-10 text-teal-600" aria-hidden="true" />
                <p className="text-sm font-medium text-slate-700">Map preview area</p>
                <p className="text-xs text-slate-500 max-w-xs">
                  Connect Google Maps embed or API using the hospital address in{" "}
                  <code className="text-teal-700">data/doctor.js</code>.
                </p>
                <Button
                  href={mapsUrl}
                  variant="outline"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
