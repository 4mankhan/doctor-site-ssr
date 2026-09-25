"use client";

import { useState } from "react";
import { CalendarDays, Clock, User, Phone, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function AppointmentForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <section id="book" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <div className="bg-white rounded-[32px] p-12 text-center border border-slate-100 shadow-[0_10px_30px_-15px_rgba(15,118,110,0.1)]">
            <div className="mx-auto h-20 w-20 bg-[#DDF5EE] rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-[#0F766E]" />
            </div>
            <h3 className="text-3xl font-extrabold font-heading text-[#17212B] mb-4">Request Received</h3>
            <p className="text-[#64748B] text-lg font-medium">
              Thank you for reaching out. Our clinic will contact you shortly to confirm your appointment time.
            </p>
            <Button onClick={() => setStatus("idle")} variant="secondary" className="mt-8">
              Book Another Appointment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8F6FA]/50 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DDF5EE]/50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        <SectionHeading>Book a Consultation</SectionHeading>
        
        <div className="mx-auto max-w-[800px] bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.08)] relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-[#17212B]">
                  Parent's Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    className="block w-full pl-11 pr-4 py-3.5 bg-[#F8FAF9] border-transparent rounded-[14px] text-[#17212B] focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#E8F6FA] transition-all font-medium"
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-[#17212B]">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="block w-full pl-11 pr-4 py-3.5 bg-[#F8FAF9] border-transparent rounded-[14px] text-[#17212B] focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#E8F6FA] transition-all font-medium"
                    placeholder="Mobile number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-bold text-[#17212B]">
                  Preferred Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <CalendarDays className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    required
                    className="block w-full pl-11 pr-4 py-3.5 bg-[#F8FAF9] border-transparent rounded-[14px] text-[#17212B] focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#E8F6FA] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-bold text-[#17212B]">
                  Preferred Time (approx)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-slate-400" />
                  </div>
                  <select
                    id="time"
                    className="block w-full pl-11 pr-4 py-3.5 bg-[#F8FAF9] border-transparent rounded-[14px] text-[#17212B] focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#E8F6FA] transition-all font-medium appearance-none"
                  >
                    <option value="morning">Morning (10 AM - 1 PM)</option>
                    <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                    <option value="evening">Evening (6 PM - 8 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-4"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Request Consultation"}
            </Button>
            
            <p className="text-center text-[13px] text-[#64748B] mt-4 font-medium">
              Our staff will call you to confirm the exact appointment time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
