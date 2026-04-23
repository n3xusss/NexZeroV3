import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import TechnicalTeam from "./components/TechnicalTeam";
import QA from "./components/QA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden text-[var(--foreground)]">
      <Navbar />

      <main className="pt-16 poppin">
        <Hero />
        <About />
        <TechnicalTeam />
        <Schedule />
        <Sponsors />
        <QA />
      </main>

      <Footer />
    </div>
  );
}
