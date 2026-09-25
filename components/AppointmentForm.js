"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "What age group do you provide care for?",
    answer:
      "Kohli Children's Hospital provides pediatric care for infants, children, and adolescents. Our team is available to support children's healthcare needs across different stages of childhood.",
  },
  {
    question: "Can I book a consultation online?",
    answer:
      "Yes. You can submit your preferred date and time using the appointment form. Our staff will contact you to confirm the exact appointment time.",
  },
  {
    question: "Do you provide nursing or emergency care for children?",
    answer:
      "Please contact Kohli Children's Hospital directly for information about pediatric nursing services and emergency care availability.",
  },
  {
    question: "How far is Kohli Children's Hospital from Kohli Hospital?",
    answer:
      "Both facilities are located in the Arjun Nagar area of Agra. Kohli Children's Hospital is on Arjun Nagar Road, while Kohli Hospital is on VIP Road. Please contact the hospital for the most convenient route and current travel information.",
  },
  {
    question: "Do you offer vaccinations for children?",
    answer:
      "Please contact the hospital to confirm the availability of specific childhood vaccinations and the appropriate vaccination schedule for your child.",
  },
];

export default function AppointmentForm() {
  const [status, setStatus] = useState("idle");
  const [openFaq, setOpenFaq] = useState(0);

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

            <h3 className="text-3xl font-extrabold font-heading text-[#17212B] mb-4">
              Request Received
            </h3>

            <p className="text-[#64748B] text-lg font-medium">
              Thank you for reaching out. Our clinic will contact you shortly to
              confirm your appointment time.
            </p>

            <Button
              onClick={() => setStatus("idle")}
              variant="secondary"
              className="mt-8"
            >
              Book Another Appointment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="book"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8F6FA]/50 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DDF5EE]/50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        <SectionHeading>Book a Consultation</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
          {/* FAQ Section */}
          <div className="bg-[#F8FAF9] rounded-[32px] p-8 md:p-10 border border-slate-100">
            <div className="mb-8">
              <span className="inline-block text-sm font-bold text-[#0F766E] uppercase tracking-wider mb-3">
                FAQs
              </span>

              <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-[#17212B]">
                Frequently Asked Questions
              </h3>

              <p className="text-[#64748B] mt-3 font-medium leading-relaxed">
                Have questions before booking? Here are some common questions
                parents ask about our pediatric services.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                const faqClassName = isOpen
                  ? "bg-white border-[#DDF5EE] shadow-sm"
                  : "bg-white/70 border-slate-200";

                return (
                  <div
                    key={faq.question}
                    className={
                      "rounded-[18px] border transition-all duration-300 " +
                      faqClassName
                    }
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setOpenFaq(isOpen ? null : index);
                      }}
                      className="w-full flex items-center justify-between gap-4 text-left p-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] md:text-base font-bold text-[#17212B] leading-snug">
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={
                          "h-5 w-5 shrink-0 text-[#0F766E] transition-transform duration-300 " +
                          (isOpen ? "rotate-180" : "")
                        }
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-sm md:text-[15px] text-[#64748B] leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.08)]">
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold font-heading text-[#17212B]">
                Request an Appointment
              </h3>

              <p className="text-[#64748B] mt-2 font-medium">
                Share your details and our staff will contact you to confirm
                your appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Parent's Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-[#17212B]"
                  >
                    Parent'sName
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

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-[#17212B]"
                  >
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

                {/* Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold text-[#17212B]"
                  >
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
                      className="block w-full pl-11 pr-4 py-3.5 md:text-sm bg-[#F8FAF9] border-transparent rounded-[14px] text-[#17212B] focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#E8F6FA] transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="block text-sm font-bold text-[#17212B]"
                  >
                    Preferred Time (approx)
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-slate-400" />
                    </div>

                    <select
                      id="time"
                      className="block w-full pl-11 pr-4 py-3.5 md:text-sm bg-[#F8FAF9] border-transparent rounded-[14px] text-[#17212B] focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#E8F6FA] transition-all font-medium appearance-none"
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
                {status === "submitting"
                  ? "Submitting..."
                  : "Request Consultation"}
              </Button>

              <div className="text-center text-[13px] text-[#64748B] mt-4 font-medium leading-relaxed space-y-1">
                <p>
                  Our staff will call you to confirm the exact appointment time.
                </p>
                <p>
                  <span className="font-bold text-[#17212B]">Important:</span>{" "}
                  <p>
                    Emergency consultations may be subject to additional
                    charges. Sunday appointments are available during daytime
                    hours only.
                  </p>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
