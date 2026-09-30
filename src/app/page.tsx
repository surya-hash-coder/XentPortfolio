import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PlatformHighlights from "@/components/landing/PlatformHighlights";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import ProductGallery from "@/components/landing/ProductGallery";
import Benefits from "@/components/landing/Benefits";
import MobileSection from "@/components/landing/MobileSection";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";
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
        <ProductGallery />
        <Benefits />
        <MobileSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}