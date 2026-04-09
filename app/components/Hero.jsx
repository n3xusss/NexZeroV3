"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const TARGET = new Date("2025-04-25T18:00:00").getTime();
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
      <div className="text-4xl font-black leading-none tracking-[0.04em] text-red-600 sm:text-5xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-zinc-500 sm:text-[0.68rem]">
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
    <section id="overview" className="font-ocr relative overflow-hidden py-14 sm:py-20">
  
        

      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/2.png')] bg-cover bg-center opacity-85" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-black/10 to-transparent" />
      <div className="pointer-events-none absolute -left-[5%] -top-[10%] h-125 w-125 bg-[radial-gradient(circle,rgba(220,38,38,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
        <div className="flex min-h-[70vh] flex-wrap items-center justify-between gap-10">
          <div className="max-w-135">
            <h1 className="text-5xl font-black leading-[1.02] tracking-[0.04em] text-white sm:text-7xl lg:text-8xl">
              NEXZERO
            </h1>
            <p className="mb-6 mt-3 text-xs uppercase tracking-[0.14em] text-zinc-500 sm:text-sm">
              The Ultimate <span className="font-bold text-red-600">Cybersecurity</span> Challenge
              Registration
            </p>
            <p className="max-w-110 text-sm leading-7 text-zinc-400 sm:text-[0.92rem]">
              <span className="text-red-600">NexZero</span> is where innovation meets
              cybersecurity. Step into the ultimate challenge designed to test and refine your
              skills in a competitive and thrilling environment.
            </p>
            <p className="mb-7 mt-2 text-[0.72rem] uppercase tracking-widest text-zinc-600">
              Presented by NEXUS
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#register" className={btnPrimary}>
                REGISTER
              </a>
              <a href="#about" className={btnOutline}>
                Overview ›
              </a>
            </div>
          </div>

          <div className="relative aspect-square w-55 shrink-0 rounded-lg border-2 border-white/15 bg-white/5 sm:w-65">
            <div className="absolute left-0 top-0 h-3.5 w-3.5 border-l-2 border-t-2 border-red-600" />
            <div className="absolute right-0 top-0 h-3.5 w-3.5 border-r-2 border-t-2 border-red-600" />
            <div className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-red-600" />
            <div className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-red-600" />
            <div className="relative flex h-full w-full items-center justify-center px-4 text-center text-xs uppercase tracking-widest text-zinc-600">
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
      </div>

      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-360 items-center justify-center px-4 sm:px-6 lg:px-10">
        <div className="flex w-full max-w-4xl flex-wrap justify-center gap-5 rounded-xl border border-white/10 bg-white/5 px-5 py-5 sm:gap-6 sm:px-8 sm:py-6">
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
    </section>
  );
}

const btnPrimary =
  "rounded bg-red-600 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-red-500";

const btnOutline =
  "rounded border border-white/25 px-6 py-2.5 text-sm uppercase tracking-wide text-zinc-200 transition hover:border-red-500 hover:text-red-500";