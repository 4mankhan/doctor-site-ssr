import { doctor } from "@/data/doctor";

const SITE_URL = "https://dr-sunil-kohli.vercel.app";

// Opening hours specification for schema.org
const openingHoursSpec = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
    opens: "10:30",
    closes: "14:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
    opens: "19:00",
    closes: "21:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Thursday", "Friday", "Saturday"],
    opens: "10:30",
    closes: "15:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Thursday", "Friday", "Saturday"],
    opens: "19:00",
    closes: "21:00",
  },
];

export default function StructuredData() {
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress:
      "Arjun Nagar Rd, Ayodhya Kunj-A, South Arjun Nagar, Saraikhwaja, Arjun Nagar",
    addressLocality: "Agra",
    addressRegion: "Uttar Pradesh",
    postalCode: "282001",
    addressCountry: "IN",
  };

  // 1. Physician / Person
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name: doctor.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/dr.sunil_kohli.avif`,
    description: doctor.seo.description,
    medicalSpecialty: [
      "Pediatrics",
      "Neonatology",
      "Pediatric Critical Care Medicine",
    ],
    knowsLanguage: doctor.languages,
    hasCredential: (doctor.qualifications || []).map((q) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: q.degree,
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: q.institution,
      },
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: "Pediatrician",
      occupationLocation: {
        "@type": "City",
        name: "Agra",
      },
      description: `Pediatrician with ${doctor.experienceYearsOverall} years of overall experience and ${doctor.experienceYearsSpecialist} years as a specialist, practising at ${doctor.hospitalDisplayName} in Agra.`,
    },
    alumniOf: (doctor.qualifications || []).map((q) => ({
      "@type": "CollegeOrUniversity",
      name: q.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    })),
    memberOf: (doctor.memberships || []).map((name) => ({
      "@type": "Organization",
      name,
    })),
    worksFor: {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: doctor.hospitalDisplayName,
    },
    address: postalAddress,
    telephone: doctor.placeholders.phone,
    email: doctor.placeholders.email,
    sameAs: [
      doctor.sourceReference?.url,
    ].filter(Boolean),
  };

  // 2. MedicalClinic + LocalBusiness
  const clinic = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_URL}/#clinic`,
    name: doctor.hospitalDisplayName,
    alternateName: doctor.clinicName,
    url: SITE_URL,
    image: `${SITE_URL}/images/dr.sunil_kohli.avif`,
    description: doctor.seo.description,
    telephone: doctor.placeholders.phone,
    email: doctor.placeholders.email,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.1627",
      longitude: "78.0351",
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Kohli+Children%27s+Hospital+Arjun+Nagar+Road+Agra",
    medicalSpecialty: "Pediatrics",
    currenciesAccepted: "INR",
    priceRange: doctor.consultationFeeDisplay,
    openingHoursSpecification: openingHoursSpec,
    availableService: (doctor.areasOfFocus || []).map((area) => ({
      "@type": "MedicalTherapy",
      name: area.title,
      description: area.description,
    })),
    employee: {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: doctor.name,
    },
    sameAs: [
      doctor.sourceReference?.url,
    ].filter(Boolean),
  };

  // 3. BreadcrumbList
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dr. Sunil Kohli — Pediatrician in Agra",
        item: SITE_URL,
      },
    ],
  };

  const graph = [physician, clinic, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
