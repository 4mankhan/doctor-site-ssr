import {
  Stethoscope,
  IndianRupee,
  Languages,
  IdCard,
  GraduationCap,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import InfoCard from "./InfoCard";
import FadeInOnScroll from "./FadeInOnScroll";

const items = [
  { icon: Stethoscope, label: "Specialization", value: doctor.specialization },
  {
    icon: IndianRupee,
    label: "Consultation Fee",
    value: doctor.consultationFeeDisplay,
  },
  {
    icon: Languages,
    label: "Languages Spoken",
    value: doctor.languages.join(", "),
  },
  { icon: IdCard, label: "Registration", value: doctor.registration },
  {
    icon: GraduationCap,
    label: "Qualification",
    value: "MD (Pediatrics)",
  },
];

export default function QuickInfo() {
  return (
    <section className="py-14 md:py-20 bg-[#f8fafc]" aria-labelledby="quick-info-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="quick-info-heading"
          title="Quick Information"
          subtitle="Essential details at a glance for your visit planning."
        />
        <FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {items.map((item) => (
              <InfoCard
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
