import { doctor } from "@/data/doctor";

export default function StructuredData() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: "Pediatrics",
    knowsLanguage: doctor.languages,
    worksFor: {
      "@type": "MedicalClinic",
      name: doctor.hospitalDisplayName,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.address.lines.slice(1, -1).join(", "),
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282001",
        addressCountry: "IN",
      },
    },
    alumniOf: (doctor.qualifications || []).map((q) => ({
      "@type": "CollegeOrUniversity",
      name: q.institution,
    })),
    memberOf: (doctor.memberships || []).map((name) => ({
      "@type": "Organization",
      name,
    })),
  };

  const clinic = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Hospital", "LocalBusiness"],
    name: doctor.hospitalDisplayName,
    description: doctor.seo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arjun Nagar Rd, Ayodhya Kunj-A, South Arjun Nagar, Saraikhwaja, Arjun Nagar",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282001",
      addressCountry: "IN",
    },
    priceRange: doctor.consultationFeeDisplay,
  };

  const jsonLd = [physician, clinic];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
