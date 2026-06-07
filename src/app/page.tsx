"use client";

import { useState, useCallback } from "react";
import LaunchSequence from "@/components/launch-sequence/LaunchSequence";
import Navigation from "@/components/navigation/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectCommandCenter from "@/components/projects/ProjectCommandCenter";
import EducationSection from "@/components/education/EducationSection";
import GitHubSection from "@/components/github/GitHubSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/ui/Footer";
import EasterEgg from "@/components/easter-egg/EasterEgg";

export default function Home() {
  const [launched, setLaunched] = useState(false);

  const handleLaunchComplete = useCallback(() => {
    setLaunched(true);
  }, []);

  return (
    <>
      <LaunchSequence onComplete={handleLaunchComplete} />

      {launched && (
        <main className="relative bg-[#050008]">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectCommandCenter />
          <EducationSection />
          <GitHubSection />
          <ContactSection />
          <Footer />
          <EasterEgg />
        </main>
      )}
    </>
  );
}
