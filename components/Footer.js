import Link from "next/link";
import { navLinks, doctor } from "@/data/doctor";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white font-[family-name:var(--font-poppins)]">
              {doctor.hospitalDisplayName}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {doctor.name} — {doctor.specialization}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-white mb-3">Quick links</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm leading-relaxed text-slate-400 lg:col-span-1">
            <p>
              Information on this website is for general informational purposes and does not
              replace professional medical advice.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Profile information sourced from publicly listed information including
              Justdial/Practo references.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-xs text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} {doctor.hospitalDisplayName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
