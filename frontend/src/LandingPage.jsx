import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
