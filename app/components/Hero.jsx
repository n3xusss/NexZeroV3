"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EVENT_START_ISO, REGISTRATION_URL } from "../lib/event";

const TARGET = new Date(EVENT_START_ISO).getTime();
const INITIAL_TIME = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft() {
  const now = Date.now();
  const diff = TARGET - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="min-w-16 text-center sm:min-w-20">
      <div className="text-4xl font-black leading-none tracking-[0.04em] text-[var(--gold)] sm:text-5xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(248,238,216,0.56)] sm:text-[0.68rem]">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [time, setTime] = useState(INITIAL_TIME);

  useEffect(() => {
    const initialTimer = setTimeout(() => setTime(getTimeLeft()), 0);
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <section
      id="overview"
      className="font-ocr relative box-border h-[calc(100svh-4rem)] overflow-hidden bg-[radial-gradient(circle_at_top,#90561f_0%,#552f16_40%,#21130b_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/2.png')] bg-cover bg-center opacity-10 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,11,6,0.16)_0%,rgba(20,11,6,0.42)_100%)]" />
      <div className="pointer-events-none absolute -left-[5%] -top-[10%] h-125 w-125 bg-[radial-gradient(circle,rgba(216,166,46,0.18)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-90 w-90 bg-[radial-gradient(circle,rgba(248,238,216,0.06)_0%,transparent_72%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-360 flex-col px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
        <div className="flex flex-1 flex-wrap items-center justify-between gap-8 sm:gap-10">
          <div className="max-w-135">
            <h1 className="text-5xl font-black leading-[1.02] tracking-[0.04em] text-[var(--paper-soft)] sm:text-7xl lg:text-8xl">
              NEXZERO
            </h1>
            <p className="mb-6 mt-3 text-xs uppercase tracking-[0.14em] text-[rgba(248,238,216,0.72)] sm:text-sm">
              The Ultimate <span className="font-bold text-[var(--gold)]">Cybersecurity</span>{" "}
              Challenge
            </p>
            <p className="max-w-110 text-sm leading-7 text-[rgba(248,238,216,0.78)] sm:text-[0.92rem]">
              <span className="text-[var(--gold)]">NexZero</span> is where innovation meets
              cybersecurity. Step into the ultimate challenge designed to test and refine your
              skills in a competitive and thrilling environment.
            </p>
            <p className="mb-7 mt-2 text-[0.72rem] uppercase tracking-widest text-[rgba(248,238,216,0.6)]">
              Presented by NEXUS
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                className={btnPrimary}
              >
                REGISTER
              </a>
              <a href="#agenda" className={btnOutline}>
                AGENDA ›
              </a>
            </div>
          </div>

          <div className="relative aspect-square w-48 shrink-0 rounded-lg border-2 border-[rgba(248,238,216,0.18)] bg-[rgba(37,21,13,0.22)] sm:w-58 lg:w-65">
            <div className="absolute left-0 top-0 h-3.5 w-3.5 border-l-2 border-t-2 border-[var(--gold)]" />
            <div className="absolute right-0 top-0 h-3.5 w-3.5 border-r-2 border-t-2 border-[var(--gold)]" />
            <div className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-[var(--gold)]" />
            <div className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-[var(--gold)]" />
            <div className="relative flex h-full w-full items-center justify-center px-4 text-center text-xs uppercase tracking-widest text-[rgba(248,238,216,0.55)]">
              <Image
                src="/1.png"
                alt="NexZero mascot"
                fill
                sizes="(min-width: 640px) 260px, 220px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center pb-2 sm:pb-4">
          <div className="flex w-full max-w-4xl flex-wrap justify-center gap-5 rounded-[1.4rem] border border-[rgba(248,238,216,0.16)] bg-[rgba(37,21,13,0.34)] px-5 py-5 backdrop-blur-[2px] sm:gap-6 sm:px-8 sm:py-6">
            {[
              { value: time.days, label: "DAYS" },
              { value: time.hours, label: "HOURS" },
              { value: time.minutes, label: "MINUTES" },
              { value: time.seconds, label: "SECONDS" },
            ].map((unit) => (
              <CountdownUnit key={unit.label} {...unit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const btnPrimary =
  "rounded-full bg-[var(--gold)] px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-[var(--brown-deep)] transition hover:bg-[#e3b64d]";

const btnOutline =
  "rounded-full border border-[rgba(248,238,216,0.32)] px-6 py-2.5 text-sm uppercase tracking-wide text-[var(--paper-soft)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]";
