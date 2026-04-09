import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-100 py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
        <div className="min-h-125 px-2 text-zinc-900 sm:px-4 lg:px-2">
          <div className="flex flex-wrap items-start gap-10 lg:flex-nowrap lg:items-center lg:gap-14">
            <div className="w-full lg:w-[58%]">
              <h2 className="font-ocr text-3xl uppercase tracking-wide text-zinc-900 sm:text-4xl">
                ABOUT THE <span className="text-red-600">EVENT</span>
              </h2>

              <div className="mb-6 mt-2 h-0.5 w-40 bg-zinc-900" />

              <p className="mb-3 max-w-xl text-[1.04rem] leading-8 text-zinc-900">
                NexZero is a Capture the Flag challenge organized by the NEXUS Club.
              </p>
              <p className="mb-3 max-w-xl text-[1.04rem] leading-8 text-zinc-900">
                This competition offers participants the opportunity to tackle advanced technical
                challenges, pushing the boundaries of problem-solving and teamwork.
              </p>
              <p className="mb-3 max-w-xl text-[1.04rem] leading-8 text-zinc-900">
                NexZero combines skill, strategy, and collaboration to deliver an unparalleled
                experience in the cybersecurity landscape.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-zinc-800/20 bg-white/80 px-3.5 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.08)] backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
                    <Image src="/Place.png" alt="Place icon" width={16} height={16} className="h-6 w-6 object-contain" />
                  </span>
                  <div>
                    <p className="font-ocr text-[0.58rem] uppercase tracking-[0.18em] text-zinc-500">Place</p>
                    <p className="text-xs font-medium tracking-wide text-zinc-900">ESTIN, Amizour, Bejaia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-800/20 bg-white/80 px-3.5 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.08)] backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
                    <Image
                      src="/Calendar month.png"
                      alt="Calendar icon"
                      width={16}
                      height={16}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <div>
                    <p className="font-ocr text-[0.58rem] uppercase tracking-[0.18em] text-zinc-500">Date</p>
                    <p className="text-xs font-medium tracking-wide text-zinc-900">December 5–7, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-165 w-full lg:w-[42%]">
              <div className="absolute right-8 top-0 inline-flex items-center gap-2 rounded-full border border-red-500/45 bg-zinc-950/90 px-4 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="font-ocr text-[0.62rem] uppercase tracking-[0.18em] text-zinc-100">
                  Last Event
                </span>
              </div>

              <div className="absolute left-0 top-0 h-85 w-85 overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-800 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                <Image src="/3.png" alt="NexZero event photo 1" fill sizes="340px" className="object-cover" />
              </div>

              <div className="absolute right-0 top-50 h-85 w-85 overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-800 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                <Image src="/4.png" alt="NexZero event photo 2" fill sizes="340px" className="object-cover" />
              </div>

              <div className="absolute left-20 top-80 h-85 w-85 -translate-x-1/2 overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-800 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                <Image src="/5.png" alt="NexZero event photo 3" fill sizes="340px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}