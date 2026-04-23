import Image from "next/image";

const SPONSORS = [
  {
    name: "Doctome",
    href: "https://www.doctome.dz/",
    src: "/sponsors/doctome-footer.svg",
    wrapperClassName: "mx-auto w-52 max-w-full",
    logoHeightClassName: "h-16",
    boxClassName: "bg-[rgba(255,232,190,0.22)] px-4",
    imageClassName: "object-contain object-center p-2",
  },
  {
    name: "Hawiyat",
    href: "https://hawiyat.org/",
    src: "/sponsors/hawiyat.svg",
    logoHeightClassName: "h-[4.5rem]",
    imageClassName: "object-contain object-center p-0",
  },
  {
    name: "Cyber Wave",
    href: "https://training.cyberwave.network/",
    src: "/sponsors/cyberwave-logo.png",
    wrapperClassName: "mx-auto w-48 max-w-full",
    logoHeightClassName: "h-24",
    boxClassName:
      "bg-[radial-gradient(circle,rgba(255,232,190,0.18)_0%,rgba(255,248,236,0.04)_72%)] px-2",
    imageClassName:
      "object-contain object-center drop-shadow-[0_10px_18px_rgba(0,0,0,0.2)]",
  },
  {
    name: "Offensive Security",
    href: "https://www.offsec.com/",
    src: "/sponsors/offsec.svg",
    logoHeightClassName: "h-14",
    imageClassName: "object-contain object-center p-1",
  },
  {
    name: "APIsec",
    href: "https://www.apisec.ai/",
    src: "/sponsors/apisec.webp",
    logoHeightClassName: "h-14",
    imageClassName: "object-contain object-center p-1",
  },
  {
    name: "hackviser",
    href: "https://hackviser.com/",
    src: "/sponsors/hackviser.svg",
    logoHeightClassName: "h-14",
    imageClassName: "object-contain object-center p-1",
  },
  {
    name: "TrainSec",
    href: "https://trainsec.net/",
    src: "/sponsors/trainsec.png",
    wrapperClassName: "mx-auto w-72 max-w-full",
    logoHeightClassName: "h-16",
    imageClassName: "object-contain object-center p-1",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#c3853b_0%,#af6f2c_100%)] py-18 text-[var(--foreground)] sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,166,46,0.16)_0%,transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-[8%] h-56 w-56 bg-[radial-gradient(circle,rgba(255,244,220,0.08)_0%,transparent_72%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,240,210,0.18)] bg-[rgba(255,232,190,0.16)] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
            <span className="font-ocr text-[0.62rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
              Sponsors & Partners
            </span>
          </div>

          <h2 className="mt-6 font-ocr text-3xl uppercase tracking-wide text-[rgba(36,21,13,0.88)] sm:text-4xl">
            SPONSORS <span className="text-[rgba(244,229,202,0.92)]">SECTION</span>
          </h2>

          <div className="mx-auto mb-6 mt-2 h-0.5 w-40 bg-[rgba(36,21,13,0.72)]" />

          <p className="text-[1rem] leading-8 text-[rgba(36,21,13,0.82)]">
            Confirmed sponsor logos, kept simple and ready for the final partner lineup.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SPONSORS.map((sponsor, index) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noreferrer"
              className={`rounded-[1.6rem] border border-[rgba(255,240,210,0.18)] bg-[linear-gradient(180deg,rgba(42,25,15,0.9)_0%,rgba(57,35,23,0.94)_100%)] px-5 py-5 shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition hover:border-[rgba(201,138,36,0.38)] hover:-translate-y-0.5 ${
                index === SPONSORS.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[32rem] xl:col-span-1 xl:col-start-2 xl:max-w-none"
                  : ""
              }`}
            >
              <div
                className={`flex h-28 items-center justify-center rounded-[1.2rem] border border-[rgba(255,244,220,0.08)] ${sponsor.boxClassName ?? "bg-[rgba(255,248,236,0.03)] px-4"}`}
              >
                {sponsor.labelOnly ? (
                  <span className={sponsor.fallbackClassName}>{sponsor.name}</span>
                ) : (
                  <div className={`relative ${sponsor.wrapperClassName ?? "w-full"} ${sponsor.logoHeightClassName}`}>
                    <Image
                      src={sponsor.src}
                      alt={`${sponsor.name} logo`}
                      fill
                      sizes="(min-width: 1280px) 220px, (min-width: 768px) 40vw, 90vw"
                      className={sponsor.imageClassName}
                    />
                  </div>
                )}
              </div>

              <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#f4e5ca]">
                {sponsor.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
