import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="pb-10 pt-16 poppin">
        <Hero />
        <About />
        <Schedule />
        <Register />
      </main>

      <Footer />
    </div>
  );
}