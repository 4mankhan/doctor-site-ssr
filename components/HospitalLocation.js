import { doctor } from "@/data/doctor";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";
import Button from "./Button";

export default function HospitalLocation() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9] border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionHeading>Visit Our Clinic</SectionHeading>
        </FadeInOnScroll>
        
        <div className="mt-12 bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row">
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#17212B] font-heading mb-2">{doctor.hospitalDisplayName}</h3>
              <p className="text-[#64748B] font-medium text-lg">Pediatric Care Center</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-[#E8F6FA] text-[#0F766E] flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-[#17212B] text-[16px] mb-1">Address</p>
                  <p className="text-[#64748B] text-[15px] leading-relaxed">{doctor.address.displayShort}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-[#E8F6FA] text-[#0F766E] flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-[#17212B] text-[16px] mb-1">Timings</p>
                  <p className="text-[#64748B] text-[15px]">{doctor.timings}</p>
                </div>
              </div>
            </div>

            <Button href={`https://maps.google.com/?q=${encodeURIComponent(doctor.address)}`} variant="secondary" size="lg" className="self-start">
              Get Directions
            </Button>
          </div>
          
          <div className="bg-slate-100 md:w-1/2 min-h-[300px] relative">
             {/* Map Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#E8F6FA] to-slate-200 flex items-center justify-center">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white">
                    <MapPin className="h-10 w-10 text-[#0F766E] mx-auto mb-3" />
                    <p className="font-bold text-[#17212B] font-heading">Kohli Children's Hospital</p>
                    <p className="text-sm text-[#64748B] mt-1">Interactive Map Disabled</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
