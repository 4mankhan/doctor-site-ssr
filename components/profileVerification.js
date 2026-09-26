
import { ShieldCheck } from "lucide-react";

export default function ProfileClaimedBadge() {
  return (
    <div
      className="
        inline-flex items-center gap-2
        rounded-full
        border border-[#DDF5EE]
        bg-white
        px-3 py-1.5
        shadow-[0_2px_8px_rgba(15,118,110,0.08)]
        ring-1 ring-[#DDF5EE]/40
      "
    >
      <span
        className="
          flex h-6 w-6 items-center justify-center
          rounded-full
          bg-[#E8F6FA]
          ring-1 ring-[#DDF5EE]
        "
      >
        <ShieldCheck
          className="h-3.5 w-3.5 text-[#0F766E]"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </span>

      <span
        className="
          text-[11px]
          font-semibold
          tracking-[0.08em]
          text-[#0F766E]
        "
      >
        PROFILE CLAIMED
      </span>
    </div>
  );
}
