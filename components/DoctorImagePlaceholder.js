import Image from "next/image";
import { Baby } from "lucide-react";
import { doctor } from "@/data/doctor";

/**
 * Replace placeholder with a real photo:
 * 1. Add image to public/images/doctor-photo.jpg
 * 2. Set usePhoto to true (or wire from doctor config)
 */
export default function DoctorImagePlaceholder({ usePhoto = false }) {
  if (usePhoto) {
    return (
      <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-xl shadow-teal-900/10 ring-1 ring-slate-200/80">
        <Image
          src={doctor.placeholders.photoPath}
          alt={`Portrait of ${doctor.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 via-sky-50 to-white shadow-xl shadow-teal-900/10 ring-1 ring-teal-100 flex flex-col items-center justify-center gap-4 p-8 text-center"
      role="img"
      aria-label={`Photo placeholder for ${doctor.name}`}
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-teal-200/50 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-200/50 blur-2xl" />
      </div>
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md text-teal-600">
        <Baby className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="relative">
        <p className="text-lg font-semibold text-slate-800 font-[family-name:var(--font-poppins)]">
          {doctor.name}
        </p>
        <p className="mt-1 text-sm text-slate-500">Photo can be added here</p>
      </div>
    </div>
  );
}
