import React from "react";

const EVENTS = [
  {
    id: 1,
    day: "Day 1",
    dayStart: true,
    color: "#d8a62e",
    shadow: "rgba(216,166,46,0.45)",
    time: "18:00",
    desc: "Check-In",
    details: "Arrival, badge pickup, and team confirmation.",
  },
  {
    id: 2,
    day: "Day 1",
    color: "#d8a62e",
    shadow: "rgba(216,166,46,0.45)",
    time: "19:00",
    desc: "Opening Ceremony",
    details: "Welcome remarks and the main event briefing.",
  },
  {
    id: 3,
    day: "Day 1",
    color: "#c98a24",
    shadow: "rgba(201,138,36,0.42)",
    time: "21:00",
    desc: "Begin the competition",
    details: "CTF platform opens and the challenge officially starts.",
    accent: "gold",
  },
  {
    id: 4,
    day: "Day 1",
    color: "#b67b1f",
    shadow: "rgba(182,123,31,0.42)",
    time: "22:30",
    desc: "Dinner",
    details: "Dinner service and a short recharge break.",
  },
  {
    id: 5,
    day: "Day 1",
    color: "#b67b1f",
    shadow: "rgba(182,123,31,0.42)",
    time: "23:00",
    desc: "Working",
    details: "Teams continue solving challenges and scoring.",
  },
  {
    id: 6,
    day: "Day 2",
    dayStart: true,
    color: "#b67b1f",
    shadow: "rgba(182,123,31,0.42)",
    time: "04:00",
    desc: "Snacks",
    details: "Late-night snacks break between the work sessions.",
  },
  {
    id: 7,
    day: "Day 2",
    color: "#b67b1f",
    shadow: "rgba(182,123,31,0.42)",
    time: "08:00",
    desc: "Breakfast",
    details: "Morning breakfast before activities resume.",
  },
  {
    id: 8,
    day: "Day 2",
    color: "#b67b1f",
    shadow: "rgba(182,123,31,0.42)",
    time: "12:00",
    desc: "Lunch and prayer",
    details: "Midday break for lunch and prayer.",
  },
  {
    id: 9,
    day: "Day 2",
    color: "#d8a62e",
    shadow: "rgba(216,166,46,0.45)",
    time: "14:00",
    desc: "Conference 1",
    details: "Conference session in parallel with the competition, open to all players.",
    accent: "gold",
  },
  {
    id: 10,
    day: "Day 2",
    color: "#d8a62e",
    shadow: "rgba(216,166,46,0.45)",
    time: "16:00",
    desc: "Conference 2",
    details: "Second conference in parallel with the competition, open to all players.",
    accent: "gold",
  },
  {
    id: 11,
    day: "Day 2",
    color: "#b67b1f",
    shadow: "rgba(182,123,31,0.42)",
    time: "20:00",
    desc: "Dinner",
    details: "Evening dinner before the final work block.",
  },
  {
    id: 12,
    day: "Day 2",
    color: "#595148",
    shadow: "rgba(89,81,72,0.4)",
    time: "21:00",
    desc: "Competition Continues",
    details: "Teams keep competing through the final night session.",
  },
  {
    id: 13,
    day: "Day 3",
    dayStart: true,
    color: "#c65e48",
    shadow: "rgba(198,94,72,0.42)",
    time: "08:00",
    desc: "End of the competition",
    details: "Challenge submissions close and scores freeze.",
    accent: "red",
  },
  {
    id: 14,
    day: "Day 3",
    color: "#595148",
    shadow: "rgba(89,81,72,0.4)",
    time: "08:30",
    desc: "Breakfast",
    details: "Morning breakfast before final activities.",
  },
  {
    id: 15,
    day: "Day 3",
    color: "#595148",
    shadow: "rgba(89,81,72,0.4)",
    time: "09:00",
    desc: "Closing Ceremony",
    details: "Awards, recognitions, and final remarks.",
  },
  {
    id: 16,
    day: "Day 3",
    color: "#595148",
    shadow: "rgba(89,81,72,0.4)",
    time: "10:00",
    desc: "Take souvenirs",
    details: "Collect souvenirs, photos, and departures.",
  },
];

const DAY_ORDER = ["Day 1", "Day 2", "Day 3"];

const CW = 1340;
const CH = 1180;
const CR = 29;
const CD = CR * 2;
const TW = 236;
const TH = 168;
const GAP = 14;

const ROWS = [
  { y: 120, xs: [110, 410, 710, 1010, 1230], eventIndices: [0, 1, 2, 3, 4] },
  { y: 410, xs: [1230, 1010, 710, 410], eventIndices: [5, 6, 7, 8] },
  { y: 700, xs: [410, 710, 1010], eventIndices: [9, 10, 11] },
  { y: 990, xs: [1010, 710, 410, 110], eventIndices: [12, 13, 14, 15] },
];

const CONNECTORS = [
  { x1: 110, y1: 120, x2: 1230, y2: 120 },
  { x1: 1230, y1: 120, x2: 1230, y2: 410 },
  { x1: 1230, y1: 410, x2: 410, y2: 410 },
  { x1: 410, y1: 410, x2: 410, y2: 700 },
  { x1: 410, y1: 700, x2: 1010, y2: 700 },
  { x1: 1010, y1: 700, x2: 1010, y2: 990 },
  { x1: 1010, y1: 990, x2: 110, y2: 990 },
];

const DESKTOP_PLACEMENTS = ROWS.flatMap((row) =>
  row.eventIndices.map((eventIndex, index) => ({
    eventIndex,
    cx: row.xs[index],
    cy: row.y,
  })),
);

const xPercent = (value) => `${(value / CW) * 100}%`;
const yPercent = (value) => `${(value / CH) * 100}%`;
const wPercent = (value) => `${(value / CW) * 100}%`;
const hPercent = (value) => `${(value / CH) * 100}%`;

export default function Schedule() {
  return (
    <section
      id="agenda"
      style={{
        background: "linear-gradient(180deg,#311b10 0%, #24150d 100%)",
        padding: "5rem clamp(1rem,4vw,4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: "12%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle,rgba(201,138,36,.16) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          bottom: "8%",
          width: 240,
          height: 240,
          background: "radial-gradient(circle,rgba(255,255,255,.05) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(37,21,13,.92)",
              border: "1px solid rgba(216,166,46,.22)",
              borderRadius: 24,
              padding: "0.4rem 1.2rem",
            }}
          >
            <span style={{ fontSize: "0.9rem", color: "var(--gold)" }}>⏱</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "1.2rem", color: "#f4e5ca", letterSpacing: "0.14em" }}>
              Schedule
            </span>
          </div>
        </div>

        <div className="sched-desktop" style={{ display: "none", position: "relative", zIndex: 1 }}>
          <DesktopCanvas />
        </div>

        <div className="sched-mobile" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: 620, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {DAY_ORDER.map((day) => (
            <div key={day} style={{ display: "grid", gap: "0.9rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                  borderRadius: 999,
                  border: "1px solid rgba(216,166,46,.16)",
                  background: "rgba(255,248,236,.04)",
                  padding: "0.35rem 0.85rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.96rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(244,229,202,.82)",
                }}
              >
                {day}
              </div>

              {EVENTS.filter((event) => event.day === day).map((event) => (
                <div
                  key={event.id}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 14,
                    padding: "0.95rem 1rem",
                    boxShadow: "0 10px 22px rgba(0,0,0,.18)",
                  }}
                >
                  <MobileCircle event={event} />
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "1.22rem", fontWeight: 700, color: event.accent === "gold" ? "var(--gold)" : event.accent === "red" ? "#f06b55" : "#f4e5ca", marginBottom: "0.18rem" }}>
                      {event.time}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontWeight: 600, color: event.accent === "gold" ? "rgba(216,166,46,.92)" : event.accent === "red" ? "rgba(240,107,85,.9)" : "rgba(244,229,202,.88)", lineHeight: 1.45, marginBottom: "0.2rem" }}>
                      {event.desc}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", color: "rgba(244,229,202,.74)", lineHeight: 1.55 }}>
                      {event.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1100px) {
          .sched-desktop { display:block !important; }
          .sched-mobile  { display:none  !important; }
        }
      `}</style>
    </section>
  );
}

function DesktopCanvas() {
  return (
    <div style={{ maxWidth: CW, margin: "0 auto", position: "relative", width: "100%", aspectRatio: `${CW} / ${CH}` }}>
      {CONNECTORS.map((connector, index) => (
        <Line key={index} {...connector} />
      ))}

      {DESKTOP_PLACEMENTS.map((placement) => {
        const event = EVENTS[placement.eventIndex];
        return <NodeBlock key={event.id} event={event} cx={placement.cx} cy={placement.cy} />;
      })}
    </div>
  );
}

function NodeBlock({ event, cx, cy }) {
  const circleLeft = cx - CR;
  const circleTop = cy - CR;
  const textLeft = cx - TW / 2;
  const textTop = cy + CR + GAP;
  const timeColor = event.accent === "gold" ? "var(--gold)" : event.accent === "red" ? "#f06b55" : "#f4e5ca";
  const descColor = event.accent === "gold" ? "rgba(216,166,46,.92)" : event.accent === "red" ? "rgba(240,107,85,.9)" : "rgba(244,229,202,.74)";

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: xPercent(textLeft),
          top: yPercent(textTop),
          width: wPercent(TW),
          height: hPercent(TH),
          textAlign: "center",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 4,
        }}
      >
        {event.dayStart ? (
          <div
            style={{
              marginBottom: "0.45rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(216,166,46,.84)",
            }}
          >
            {event.day}
          </div>
        ) : null}
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.18rem",
            fontWeight: 700,
            color: timeColor,
            letterSpacing: "0.04em",
            marginBottom: "0.16rem",
            whiteSpace: "nowrap",
          }}
        >
          {event.time}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.08rem",
            fontWeight: 600,
            color: descColor,
            lineHeight: 1.45,
            marginBottom: "0.18rem",
            wordBreak: "break-word",
          }}
        >
          {event.desc}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "rgba(244,229,202,.72)",
            lineHeight: 1.55,
            wordBreak: "break-word",
          }}
        >
          {event.details}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: xPercent(circleLeft),
          top: yPercent(circleTop),
          width: wPercent(CD),
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: event.color,
          boxShadow: `0 0 20px ${event.shadow}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "1.35rem",
          color: "#f4e5ca",
          zIndex: 4,
        }}
      >
        {event.id}
      </div>
    </>
  );
}

function Line({ x1, y1, x2, y2 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: xPercent(x1),
        top: yPercent(y1),
        width: wPercent(length),
        height: 2,
        background: "rgba(244,229,202,0.16)",
        transformOrigin: "0 50%",
        transform: `rotate(${angle}deg)`,
        zIndex: 1,
        borderRadius: 1,
      }}
    />
  );
}

function MobileCircle({ event }) {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: event.color,
        boxShadow: `0 0 14px ${event.shadow}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: "1rem",
        color: "#f4e5ca",
        flexShrink: 0,
      }}
    >
      {event.id}
    </div>
  );
}
