# Kohli Children's Hospital — Dr. Sunil Kohli

Modern, responsive pediatric healthcare website built with **Next.js (JavaScript)**, **React**, and **Tailwind CSS**.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Project structure

- `app/` — Next.js App Router (`layout.js`, `page.js`, `globals.css`)
- `components/` — Reusable UI sections
- `data/doctor.js` — **Single source of truth** for doctor/hospital content
- `public/images/` — Static assets (doctor photo)

## Where to add content later

| Item | Location |
|------|----------|
| Doctor photo | Add `public/images/doctor-photo.jpg`, then set `usePhoto={true}` in `components/Hero.js` (`DoctorImagePlaceholder`) |
| Phone number | `data/doctor.js` → `placeholders.phone` and display in `ContactSection.js` |
| WhatsApp | `data/doctor.js` → `placeholders.whatsapp` |
| Clinic timings | `data/doctor.js` → `placeholders.clinicTimings` |
| Real appointment API | `data/doctor.js` → `placeholders.appointmentApiEndpoint` and `components/AppointmentForm.js` (`onSubmit`) |
| Google Maps embed/API | `components/HospitalLocation.js` map area; optional `placeholders.googleMapsApiKey` in `data/doctor.js` |

## Content rules

All medical and profile facts come from `data/doctor.js`. Update that file to change site-wide content without editing every component.
