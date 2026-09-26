import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { doctor } from "@/data/doctor";
import StructuredData from "@/components/StructuredData";

const SITE_URL = "https://dr-sunil-kohli.vercel.app";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  // ── Base URL so all relative OG/Twitter image paths resolve correctly ──
  metadataBase: new URL(SITE_URL),

  title: doctor.seo.title,
  description: doctor.seo.description,

  keywords: [
    "Dr. Sunil Kohli",
    "Dr Sunil Kohli",
    "Pediatrician in Agra",
    "Pediatrician near me",
    "Child Specialist in Agra",
    "Child Doctor in Agra",
    "Best Pediatrician Agra",
    "Kohli Children's Hospital",
    "Kohli Clinic Agra",
    "Pediatric doctor Agra",
    "Neonatologist Agra",
    "NICU Agra",
    "PICU Agra",
    "Kids doctor Agra",
    "Baby doctor Agra",
    "Child specialist Uttar Pradesh",
    "Pediatrician Arjun Nagar Agra",
    "MD Pediatrics Agra",
    "Viral fever children Agra",
    "Growth development child specialist Agra",
  ],

  // ── Canonical URL ─────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Robots: explicitly allow indexing ────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "images/fevicon/fevicon2.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "images/fevicon/fevicon2.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },

  // ── Open Graph ───────────────────────────────────────────────────────
  openGraph: {
    title: doctor.seo.title,
    description: doctor.seo.description,
    url: SITE_URL,
    siteName: doctor.hospitalDisplayName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/dr.sunil_kohli.avif",
        width: 800,
        height: 600,
        alt: "Dr. Sunil Kohli — Pediatrician at Kohli Children's Hospital, Agra",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: doctor.seo.title,
    description: doctor.seo.description,
    images: ["/images/dr.sunil_kohli.avif"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans text-[#17212B] bg-[#F8FAF9] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#0F766E] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
