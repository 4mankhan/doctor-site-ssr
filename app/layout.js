import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { doctor } from "@/data/doctor";
import StructuredData from "@/components/StructuredData";

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
  title: doctor.seo.title,
  description: doctor.seo.description,
  keywords: [
    "Dr Sunil Kohli",
    "Pediatrician Agra",
    "Kohli Children's Hospital",
    "pediatric doctor Agra",
  ],
  openGraph: {
    title: doctor.seo.title,
    description: doctor.seo.description,
    type: "website",
    locale: "en_IN",
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
