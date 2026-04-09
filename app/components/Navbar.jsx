"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

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
          ? "border-b border-red-600/20 bg-zinc-950/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between gap-2 px-3 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 overflow-hidden rounded">
            <Image src="/nexus.png" alt="Nexus logo" fill sizes="28px" className="object-contain" />
          </div>
          <span className="font-sans text-base font-bold tracking-[0.08em] text-white sm:text-lg">
            NEX<span className="text-red-600">ZER</span>O
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <a href="#overview" className={linkClass}>
            Overview
          </a>
          <a href="#agenda" className={linkClass}>
            Agenda
          </a>
        </div>

        <a href="#register" className={buttonClass}>
          REGISTER
        </a>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/20 text-zinc-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-4 py-3 backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#overview"
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Overview
            </a>
            <a href="#agenda" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
              Agenda
            </a>
            <a href="#register" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

const linkClass =
  "text-sm uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:text-red-500";

const buttonClass =
  "hidden rounded bg-red-600 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-500 sm:inline-flex md:px-4 md:py-2 md:text-xs";

const mobileLinkClass =
  "rounded border border-white/10 px-3 py-2 text-sm uppercase tracking-[0.12em] text-zinc-200";