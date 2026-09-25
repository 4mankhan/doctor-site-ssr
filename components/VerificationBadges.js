import { ShieldCheck, Award } from "lucide-react";

export default function VerificationBadges({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F6FA] px-3 py-1.5 border border-[#DDF5EE]">
        <ShieldCheck className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
        <span className="text-[13px] font-bold text-[#0F766E]">Profile Claimed</span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F6FA] px-3 py-1.5 border border-[#DDF5EE]">
        <Award className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
        <span className="text-[13px] font-bold text-[#0F766E]">Medical Registration Verified</span>
      </div>
    </div>
  );
}
