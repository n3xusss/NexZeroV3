"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { REGISTRATION_URL } from "../lib/event";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(201,138,36,0.18)] bg-[radial-gradient(circle_at_top,#90561f_0%,#552f16_40%,#21130b_100%)]"
          : "bg-[radial-gradient(circle_at_top,#90561f_0%,#552f16_40%,#21130b_100%)]"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between gap-2 px-3 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-7 overflow-hidden">
            <Image
              src="/nexus%20logo.svg"
              alt="Nexus logo"
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
          <span className="font-ocr text-sm uppercase tracking-[0.18em] text-[var(--paper)] sm:text-base">
            NEX<span className="text-[var(--gold)]">ZERO</span>
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <a href="#overview" className={linkClass}>
            Overview
          </a>
          <a href="#about" className={linkClass}>
            About
          </a>
          <a href="#agenda" className={linkClass}>
            Agenda
          </a>
        </div>

        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noreferrer"
          className={buttonClass}
        >
          REGISTER
        </a>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(216,166,46,0.22)] bg-[rgba(37,21,13,0.48)] text-[var(--paper-soft)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[rgba(216,166,46,0.16)] bg-[radial-gradient(circle_at_top,#90561f_0%,#552f16_40%,#21130b_100%)] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#overview"
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Overview
            </a>
            <a href="#about" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#agenda" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
              Agenda
            </a>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

const linkClass =
  "text-sm uppercase tracking-[0.14em] text-[rgba(248,238,216,0.76)] transition-colors hover:text-[var(--gold)]";

const buttonClass =
  "hidden rounded-full bg-[#c98a24] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#25150d] shadow-[0_10px_20px_rgba(0,0,0,0.16)] transition hover:bg-[#d89a34] sm:inline-flex md:px-4 md:py-2 md:text-xs";

const mobileLinkClass =
  "rounded-full border border-[rgba(216,166,46,0.18)] bg-[rgba(37,21,13,0.68)] px-3 py-2 text-sm uppercase tracking-[0.12em] text-[var(--paper)]";
