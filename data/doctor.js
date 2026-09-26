export const doctor = {
  name: "Dr. Sunil Kohli",
  specialization: "Pediatrician",
  tagline: "Experienced Pediatrician in Agra",
  clinicName: "Kohli Clinic",
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
  recommendationStatement: "Recommended by 87% of 23 patients on Practo.",
  address: {
    lines: [
      "Kohli Clinic",
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
      title: "Pediatrics & Neonatology",
      description: "Comprehensive care for infants, children, and newborns.",
    },
    {
      title: "Growth & Development Evaluation / Management",
      description:
        "Assessment and guidance for healthy growth and childhood development.",
    },
    {
      title: "Viral Fever",
      description:
        "Evaluation and management of common childhood viral illnesses.",
    },
    {
      title: "Chicken Pox (Varicella)",
      description: "Pediatric assessment and supportive care for chicken pox.",
    },
    {
      title: "NICU",
      description:
        "Specialized care for newborns requiring closer medical monitoring.",
    },
    {
      title: "PICU",
      description:
        "Hospital-based care for children requiring intensive monitoring and treatment.",
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
    phone: "9999999999",
    whatsapp: "9999999999",
    email: "sunilkohli@gmail.com",
    clinicTimings: {
      monday: "10:30 AM – 2:00 PM & 7:00 PM – 9:00/9:30 PM",
      tuesday: "10:30 AM – 2:00 PM & 7:00 PM – 9:00/9:30 PM",
      wednesday: "10:30 AM – 2:00 PM & 7:00 PM – 9:00/9:30 PM",
      thursday: "10:30 AM – 3:00 PM & 7:00 PM – 9:00 PM",
      friday: "10:30 AM – 3:00 PM & 7:00 PM – 9:00 PM",
      saturday: "10:30 AM – 3:00 PM & 7:00 PM – 9:00 PM",
      sunday: "Closed",
    },
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
  { href: "#professionals", label: "Professionals" },
  { href: "#expertise", label: "Expertise" },
  { href: "#hospital", label: "Hospital" },
  { href: "#contact", label: "Contact" },
];