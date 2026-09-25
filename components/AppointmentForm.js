"use client";

import { useState } from "react";
import { doctor } from "@/data/doctor";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

const initialForm = {
  parentName: "",
  childName: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  reason: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.parentName.trim()) errors.parentName = "Parent or guardian name is required.";
  if (!form.childName.trim()) errors.childName = "Child's name is required.";
  const phoneDigits = form.phone.replace(/\D/g, "");
  if (!phoneDigits) errors.phone = "Phone number is required.";
  else if (phoneDigits.length < 10) errors.phone = "Enter a valid phone number (at least 10 digits).";
  if (!form.preferredDate) errors.preferredDate = "Preferred date is required.";
  if (!form.preferredTime) errors.preferredTime = "Preferred time is required.";
  if (!form.reason.trim()) errors.reason = "Reason for visit is required.";
  return errors;
}

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [requests, setRequests] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    const payload = { ...form, submittedAt: new Date().toISOString() };
    setRequests((prev) => [...prev, payload]);

    /**
     * Connect a real booking API later:
     * await fetch(doctor.placeholders.appointmentApiEndpoint, { method: 'POST', body: JSON.stringify(payload) })
     */
    if (doctor.placeholders.appointmentApiEndpoint) {
      // Reserved for future API integration
    }

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 text-slate-800 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal-600 ${
      errors[field] ? "border-red-300 bg-red-50/50" : "border-slate-200 bg-white"
    }`;

  return (
    <section id="book" className="py-14 md:py-20 bg-white scroll-mt-20" aria-labelledby="book-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="book-heading"
          title="Book a Consultation"
          subtitle={`Schedule a consultation with ${doctor.name} at ${doctor.hospitalDisplayName}.`}
        />

        <FadeInOnScroll>
          {submitted ? (
            <div
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="text-lg font-semibold text-emerald-900">
                Your consultation request has been submitted.
              </p>
              <p className="mt-2 text-sm text-emerald-800/90">
                This is a frontend request only. The clinic will contact you when a booking
                system is connected. No appointment is confirmed until the hospital responds.
              </p>
              <Button
                type="button"
                variant="secondary"
                size="md"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Submit another request
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 sm:p-8 shadow-sm space-y-5"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Parent/Guardian Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    autoComplete="name"
                    value={form.parentName}
                    onChange={onChange}
                    className={inputClass("parentName")}
                    aria-invalid={!!errors.parentName}
                    aria-describedby={errors.parentName ? "parentName-error" : undefined}
                  />
                  {errors.parentName ? (
                    <p id="parentName-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.parentName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Child&apos;s Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="childName"
                    name="childName"
                    type="text"
                    value={form.childName}
                    onChange={onChange}
                    className={inputClass("childName")}
                    aria-invalid={!!errors.childName}
                    aria-describedby={errors.childName ? "childName-error" : undefined}
                  />
                  {errors.childName ? (
                    <p id="childName-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.childName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange}
                  className={inputClass("phone")}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone ? (
                  <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Preferred Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={onChange}
                    className={inputClass("preferredDate")}
                    aria-invalid={!!errors.preferredDate}
                  />
                  {errors.preferredDate ? (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.preferredDate}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Preferred Time <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={form.preferredTime}
                    onChange={onChange}
                    className={inputClass("preferredTime")}
                    aria-invalid={!!errors.preferredTime}
                  />
                  {errors.preferredTime ? (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.preferredTime}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Reason for Visit <span className="text-red-600">*</span>
                </label>
                <input
                  id="reason"
                  name="reason"
                  type="text"
                  value={form.reason}
                  onChange={onChange}
                  className={inputClass("reason")}
                  aria-invalid={!!errors.reason}
                />
                {errors.reason ? (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.reason}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Optional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className={`${inputClass("message")} resize-y min-h-[100px]`}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Request Consultation
              </Button>

              {requests.length > 0 ? (
                <p className="text-xs text-slate-400">
                  {requests.length} request(s) stored locally in this session (demo flow).
                </p>
              ) : null}
            </form>
          )}
        </FadeInOnScroll>
      </div>
    </section>
  );
}
