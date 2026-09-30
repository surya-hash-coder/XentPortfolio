import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PlatformHighlights from "@/components/landing/PlatformHighlights";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Benefits from "@/components/landing/Benefits";
import MobileSection from "@/components/landing/MobileSection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformHighlights />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Benefits />
        <MobileSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}