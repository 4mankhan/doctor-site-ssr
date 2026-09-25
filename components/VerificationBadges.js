import { BadgeCheck, ShieldCheck } from "lucide-react";
import { doctor } from "@/data/doctor";

export default function VerificationBadges({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {doctor.profileClaimed ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 border border-sky-100">
          <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Profile is Claimed
        </span>
      ) : null}
      {doctor.registrationVerified ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-100">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Medical Registration Verified
        </span>
      ) : null}
    </div>
  );
}
