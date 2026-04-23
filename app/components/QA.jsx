import { EVENT_DATE_LABEL, EVENT_LOCATION_LABEL, REGISTRATION_URL } from "../lib/event";

const QUESTIONS = [
  {
    question: "When is NexZero happening?",
    answer: `NexZero runs from ${EVENT_DATE_LABEL}, with the challenge flow and on-site activities scheduled across the event window.`,
  },
  {
    question: "Where will the event take place?",
    answer: `The event takes place at ${EVENT_LOCATION_LABEL}, bringing the competition directly to ESTIN's community in Bejaia.`,
  },
  {
    question: "How do I reserve a spot?",
    answer: "Use the official registration form to secure your place before the challenge starts.",
    href: REGISTRATION_URL,
    linkLabel: "Open registration",
  },
  {
    question: "What is the team size?",
    answer:
      "Each team must have 4 members. To be accepted onsite, at least 3 team members must be present onsite.",
  },
  {
    question: "Are there prizes?",
    answer: "Yes. There will be great prizes for the top teams and standout performances.",
  },
  {
    question: "Who supports the event experience?",
    answer:
      "NexZero is backed by its sponsors and partners, with CascRoot serving as the event's official technical team.",
  },
];

export default function QA() {
  return (
    <section
      id="qa"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#1a0f09_0%,#2b180f_100%)] py-18 text-[#f4e5ca] sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,138,36,0.14)_0%,transparent_38%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,166,46,0.24)] bg-[rgba(37,21,13,0.68)] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
            <span className="font-ocr text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(244,229,202,0.78)]">
              Q&A
            </span>
          </div>

          <h2 className="mt-6 font-ocr text-3xl uppercase tracking-wide text-[#f4e5ca] sm:text-4xl">
            QUICK <span className="text-[var(--gold)]">ANSWERS</span>
          </h2>

          <div className="mx-auto mb-6 mt-2 h-0.5 w-40 bg-[var(--gold)]" />

          <p className="text-[1rem] leading-8 text-[rgba(244,229,202,0.78)]">
            The essentials for participants, visitors, and partners before the event kicks off.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {QUESTIONS.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-[rgba(216,166,46,0.18)] bg-[rgba(255,248,236,0.04)] shadow-[0_16px_34px_rgba(0,0,0,0.16)] open:border-[rgba(216,166,46,0.34)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5">
                <span className="font-ocr text-sm uppercase tracking-[0.14em] text-[#f4e5ca] sm:text-[0.92rem]">
                  {item.question}
                </span>
                <span className="text-2xl leading-none text-[var(--gold)] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-[rgba(216,166,46,0.12)] px-5 pb-5 pt-4 text-sm leading-7 text-[rgba(244,229,202,0.74)] sm:text-[0.98rem]">
                <p>{item.answer}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--gold)] transition hover:text-[#f4e5ca]"
                  >
                    {item.linkLabel}
                    <span aria-hidden>↗</span>
                  </a>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}