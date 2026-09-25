export const doctor = {
  name: "Dr. Sunil Kohli",
  specialization: "Pediatrician",
  tagline: "Experienced Pediatrician in Agra",
  hospitalName: "Kohli Childrens Hospital",
  hospitalDisplayName: "Kohli Children's Hospital",
  profileClaimed: true,
  registrationVerified: true,
  experienceYearsOverall: 36,
  experienceYearsSpecialist: 30,
  consultationFee: 500,
  consultationFeeDisplay: "₹500",
  languages: ["Hindi", "English"],
  registration: "30896 - Uttar Pradesh Medical Council",
  patientRecommendationPercent: 87,
  patientRecommendationCount: 23,
  recommendationStatement:
    "Recommended by 87% of 23 patients on Practo.",
  address: {
    lines: [
      "Kohli Childrens Hospital",
      "Arjun Nagar Rd",
      "Ayodhya Kunj-A",
      "South Arjun Nagar",
      "Saraikhwaja",
      "Arjun Nagar",
      "Agra, Uttar Pradesh 282001",
    ],
    singleLine:
      "Kohli Childrens Hospital, Arjun Nagar Rd, Ayodhya Kunj-A, South Arjun Nagar, Saraikhwaja, Arjun Nagar, Agra, Uttar Pradesh 282001",
    displayShort:
      "Arjun Nagar Rd, Ayodhya Kunj-A, South Arjun Nagar, Saraikhwaja, Arjun Nagar, Agra, Uttar Pradesh 282001",
  },
  qualifications: [
    {
      degree: "MBBS",
      institution: "Sarojini Naidu Medical College, Agra",
    },
    {
      degree: "MD (Pediatrics)",
      institution: "Sarojini Naidu Medical College, Agra",
    },
  ],
  memberships: [
    "Indian Academy of Paediatric",
    "Indian Academy of Paediatrics (IAP)",
  ],
  areasOfFocus: [
    {
      title: "Chicken Pox (Varicella)",
      description:
        "Care and guidance related to varicella (chicken pox) in children.",
    },
    {
      title: "NICU",
      description:
        "Neonatal intensive care support for newborns requiring specialized monitoring.",
    },
    {
      title: "PICU",
      description:
        "Pediatric intensive care for children who need close medical attention.",
    },
    {
      title: "Viral Fever",
      description:
        "Evaluation and management of fever associated with common viral illnesses in children.",
    },
    {
      title: "Pediatrics & Neonatology",
      description:
        "General pediatric and newborn care across a range of childhood health needs.",
    },
    {
      title: "Growth & Development Evaluation / Management",
      description:
        "Evaluation and management related to children's growth and developmental progress.",
    },
  ],
  profileDescription:
    "Dr. Sunil Kohli is a Pediatrician in Agra with 36 years of experience, practising at Kohli Children Hospital. Qualifications include MBBS from Sarojini Naidu Medical College, Agra and MD - Pediatrics from Sarojini Naidu Medical College, Agra. Memberships include Indian Academy of Paediatric and Indian Academy of Paediatrics (IAP). Areas of focus include Chicken Pox (varicella), NICU, PICU, Viral Fever, Pediatrics & Neonatology and Growth & Development Evaluation / Management.",
  heroSupportingText:
    "36 years of overall experience, including 30 years as a specialist, with expertise in pediatrics and neonatology.",
  sourceReference: {
    label: "Justdial.com",
    url: "https://www.justdial.com/Agra/Dr-Sunil-Kohli-Arjun-Nagar/0562PX562-X562-161009055051-I5B5_BZDET",
  },
  seo: {
    title: "Dr. Sunil Kohli | Pediatrician in Agra | Kohli Children's Hospital",
    description:
      "Dr. Sunil Kohli is a Pediatrician in Agra with 36 years of overall experience, including 30 years as a specialist. View qualifications, areas of focus, consultation fee, and hospital location.",
  },
  placeholders: {
    photoPath: "/images/doctor-photo.jpg",
    phone: null,
    whatsapp: null,
    email: null,
    clinicTimings: null,
    appointmentApiEndpoint: null,
    googleMapsApiKey: null,
  },
};

export function getGoogleMapsDirectionsUrl() {
  const query = encodeURIComponent(doctor.address.singleLine);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#hospital", label: "Hospital" },
  { href: "#contact", label: "Contact" },
];
