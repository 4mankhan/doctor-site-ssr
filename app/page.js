import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import QuickInfo from "@/components/QuickInfo";
import AboutDoctor from "@/components/AboutDoctor";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import Qualifications from "@/components/Qualifications";
import Memberships from "@/components/Memberships";
import PatientRecommendation from "@/components/PatientRecommendation";
import HospitalLocation from "@/components/HospitalLocation";
import AppointmentForm from "@/components/AppointmentForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileConsultationBar from "@/components/MobileConsultationBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <QuickInfo />
        <AboutDoctor />
        <ExpertiseGrid />
        <Qualifications />
        <Memberships />
        <PatientRecommendation />
        <HospitalLocation />
        <AppointmentForm />
        <ContactSection />
      </main>
      <Footer />
      <MobileConsultationBar />
    </>
  );
}
