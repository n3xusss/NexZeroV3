import Image from "next/image";

const TEAM_HIGHLIGHTS = [
  "Dedicated technical team from Algeria",
  "Forged at ESTIN in Amizour, Bejaia",
  "Driving the event's technical spirit",
];

export default function TechnicalTeam() {
  return (
    <section
      id="technical-team"
      className="relative overflow-hidden border-t border-[rgba(255,224,178,0.12)] bg-[linear-gradient(180deg,#6f431e_0%,#3c2214_38%,#160d09_100%)] py-18 text-[rgba(236,214,177,0.9)] sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,166,46,0.18)_0%,transparent_30%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(244,229,202,0.05)_0%,transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-360 gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,166,46,0.22)] bg-[rgba(37,21,13,0.24)] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
            <span className="font-ocr text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,214,177,0.82)]">
              Technical Team
            </span>
          </div>

          <h2 className="mt-6 font-ocr text-2xl leading-[1.15] uppercase tracking-wide text-[rgba(236,214,177,0.9)] sm:text-3xl lg:text-4xl">
            OUR TECHNICAL TEAM IS <span className="text-[var(--gold)]">CASCROOT</span>
          </h2>

          <div className="mb-6 mt-2 h-0.5 w-40 bg-[var(--gold)]" />

          <p className="mx-auto max-w-2xl text-[1rem] leading-8 text-[rgba(236,214,177,0.8)] lg:mx-0">
            CascRoot is the technical team behind NexZero. As a dedicated Algerian CTF
            team forged at ESTIN in Amizour, Bejaia, they reinforce the event&apos;s
            competitive energy and technical atmosphere.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {TEAM_HIGHLIGHTS.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[rgba(216,166,46,0.18)] bg-[rgba(255,232,190,0.08)] px-4 py-2 text-[0.76rem] font-medium uppercase tracking-[0.12em] text-[rgba(236,214,177,0.82)]"
              >
                {highlight}
              </span>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/company/casc-root/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(216,166,46,0.28)] bg-[rgba(255,232,190,0.08)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[rgba(236,214,177,0.9)] transition hover:border-[var(--gold)] hover:bg-[rgba(255,232,190,0.16)] hover:text-[var(--gold)] sm:w-auto"
          >
            Visit CascRoot On LinkedIn
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-[rgba(216,166,46,0.18)] bg-[linear-gradient(180deg,rgba(63,37,22,0.96)_0%,rgba(36,21,13,0.96)_100%)] p-4 sm:p-5 shadow-[0_18px_36px_rgba(24,12,6,0.32)]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(216,166,46,0.12)] bg-[rgba(255,232,190,0.06)]">
            <div className="relative aspect-square w-full sm:aspect-[4/3]">
              <Image
                src="/partners/cascroot.jpg"
                alt="CascRoot logo"
                fill
                sizes="(min-width: 1024px) 34vw, 92vw"
                className="object-contain p-6"
              />
            </div>
          </div>

          <div className="mt-5 rounded-[1.4rem] bg-[rgba(255,232,190,0.06)] px-4 py-4 text-center">
            <p className="font-ocr text-sm uppercase tracking-[0.18em] text-[rgba(236,214,177,0.88)]">
              Official Technical Team
            </p>
            <p className="mt-2 text-sm leading-7 text-[rgba(220,195,160,0.78)]">
              CascRoot is NexZero&apos;s official technical team, bringing a strong CTF
              identity and deeper technical energy to the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}