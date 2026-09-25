import { doctor } from "@/data/doctor";
import { Stethoscope, Languages, FileText, GraduationCap } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function QuickInfo() {
  const items = [
    { icon: <Stethoscope />, label: "Specialization", value: doctor.specialization },
    { icon: <Languages />, label: "Languages Spoken", value: doctor.languages.join(", ") },
    { icon: <FileText />, label: "Registration", value: doctor.registration },
    { icon: <GraduationCap />, label: "Qualification", value: (doctor.qualifications || []).map(q => q.degree).join(", ") },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <FadeInOnScroll>
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] p-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {items.map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-4 ${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-8 lg:pl-8' : ''}`}>
                    <div className="h-12 w-12 shrink-0 rounded-[14px] bg-[#E8F6FA] text-[#0F766E] flex items-center justify-center">
                        {item.icon}
                    </div>
                    <div>
                        <p className="text-[13px] font-semibold text-[#64748B] uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="text-[16px] font-bold text-[#17212B] leading-tight">{item.value}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
