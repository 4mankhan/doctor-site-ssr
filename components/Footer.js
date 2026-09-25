import Link from "next/link";
import { navLinks, doctor } from "@/data/doctor";

export default function Footer() {
  return (
    <footer className="bg-[#17212B] text-slate-300 pt-16 pb-24 md:pb-12 border-t-4 border-[#0F766E]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-white font-heading">
              {doctor.hospitalDisplayName}
            </p>
            <p className="mt-2 text-sm text-[#DDF5EE] font-medium">
              {doctor.name} — {doctor.specialization}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-base font-bold text-white mb-4 font-heading">Quick links</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#DDF5EE] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm leading-relaxed text-[#64748B] lg:col-span-1">
            <p>
              Information on this website is for general informational purposes and does not
              replace professional medical advice.
            </p>
            <p className="mt-4 text-xs">
              Profile information sourced from publicly listed information including
              Justdial/Practo references.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 text-xs text-[#64748B] flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {doctor.hospitalDisplayName}. All rights reserved.</p>
          <p>Designed for Pediatric Care</p>
        </div>
      </div>
    </footer>
  );
}
