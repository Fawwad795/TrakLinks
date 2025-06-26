import React from "react";
import Navbar from "../components/LandingPageComp/Navbar";
import HeroSection from "../components/LandingPageComp/HeroSection";
import FeaturesSection from "../components/LandingPageComp/FeaturesSection";
import FAQSection from "../components/LandingPageComp/FAQSection";
import FooterSection from "../components/LandingPageComp/FooterSection";

export default function LandingPage() {
  return (
    <div id="landingPage" className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
