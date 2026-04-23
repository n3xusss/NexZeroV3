import Image from "next/image";
import { EVENT_DATE_LABEL } from "../lib/event";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[linear-gradient(180deg,#c3853b_0%,#af6f2c_100%)] py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,166,46,0.16)_0%,transparent_42%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
        <div className="min-h-125 px-2 text-[var(--foreground)] sm:px-4 lg:px-2">
          <div className="flex flex-wrap items-start gap-10 lg:flex-nowrap lg:items-center lg:gap-14">
            <div className="w-full lg:w-[58%]">
              <h2 className="font-ocr text-3xl uppercase tracking-wide text-[var(--foreground)] sm:text-4xl">
                ABOUT THE <span className="text-[var(--gold)]">EVENT</span>
              </h2>

              <div className="mb-6 mt-2 h-0.5 w-40 bg-[var(--gold)]" />

              <p className="mb-3 max-w-xl text-[1.04rem] leading-8 text-[var(--foreground)]">
                NexZero is a Capture the Flag challenge organized by the NEXUS Club.
              </p>
              <p className="mb-3 max-w-xl text-[1.04rem] leading-8 text-[var(--foreground)]">
                This competition offers participants the opportunity to tackle advanced technical
                challenges, pushing the boundaries of problem-solving and teamwork.
              </p>
              <p className="mb-3 max-w-xl text-[1.04rem] leading-8 text-[var(--foreground)]">
                NexZero combines skill, strategy, and collaboration to deliver an unparalleled
                experience in the cybersecurity landscape.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-[rgba(255,240,210,0.18)] bg-[rgba(255,232,190,0.16)] px-3.5 py-2 shadow-[0_8px_18px_var(--shadow)] backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,236,203,0.26)] p-1">
                    <Image src="/Place.png" alt="Place icon" width={16} height={16} className="h-6 w-6 object-contain" />
                  </span>
                  <div>
                    <p className="font-ocr text-[0.58rem] uppercase tracking-[0.18em] text-[var(--muted)]">Place</p>
                    <p className="text-xs font-medium tracking-wide text-[var(--foreground)]">ESTIN, Amizour, Bejaia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[rgba(255,240,210,0.18)] bg-[rgba(255,232,190,0.16)] px-3.5 py-2 shadow-[0_8px_18px_var(--shadow)] backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,236,203,0.26)] p-1">
                    <Image
                      src="/Calendar month.png"
                      alt="Calendar icon"
                      width={16}
                      height={16}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <div>
                    <p className="font-ocr text-[0.58rem] uppercase tracking-[0.18em] text-[var(--muted)]">Date</p>
                    <p className="text-xs font-medium tracking-wide text-[var(--foreground)]">{EVENT_DATE_LABEL}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-165 w-full lg:w-[42%]">
              <div className="absolute right-8 top-0 inline-flex items-center gap-2 rounded-full border border-[rgba(216,166,46,0.34)] bg-[var(--brown-deep)]/90 px-4 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
                <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                <span className="font-ocr text-[0.62rem] uppercase tracking-[0.18em] text-[var(--paper-soft)]">
                  Last Event
                </span>
              </div>

              <div className="absolute left-0 top-0 h-85 w-85 overflow-hidden rounded-3xl border border-[rgba(216,166,46,0.24)] bg-[var(--brown-deep)] shadow-[0_10px_24px_var(--shadow)]">
                <Image src="/3.png" alt="NexZero event photo 1" fill sizes="340px" className="object-cover" />
              </div>

              <div className="absolute right-0 top-50 h-85 w-85 overflow-hidden rounded-3xl border border-[rgba(216,166,46,0.24)] bg-[var(--brown-deep)] shadow-[0_10px_24px_var(--shadow)]">
                <Image src="/4.png" alt="NexZero event photo 2" fill sizes="340px" className="object-cover" />
              </div>

              <div className="absolute left-20 top-80 h-85 w-85 -translate-x-1/2 overflow-hidden rounded-3xl border border-[rgba(216,166,46,0.24)] bg-[var(--brown-deep)] shadow-[0_10px_24px_var(--shadow)]">
                <Image src="/5.png" alt="NexZero event photo 3" fill sizes="340px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
