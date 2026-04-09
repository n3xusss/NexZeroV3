import React from "react";
const NODES = [
  { id:1, color:"#84cc16", shadow:"#84cc1688", time:"18:00 – 19:00", desc:"Participants check in and receive their badges, event kits, and team assignments." },
  { id:2, color:"#84cc16", shadow:"#84cc1688", time:"20:00 – 21:00", desc:"Official kickoff of the NexZero CTF challenge. Overview of event rules, scoring system, and platform walkthrough." },
  { id:3, color:"#f59e0b", shadow:"#f59e0b88", time:"21:00 – 08:00", desc:"CTF Challenge Launch: Round 1. Live scoreboard unveiled for real-time team standings." },
  { id:4, color:"#f59e0b", shadow:"#f59e0b88", time:"08:00 – 09:00", desc:"Break and Round 2 launching." },
  { id:5, color:"#f59e0b", shadow:"#f59e0b88", time:"12:00",          desc:"Lunch Break" },
  { id:6, color:"#ef4444", shadow:"#ef444488", time:"18:00 – 19:00",  desc:"Final Round." },
  { id:7, color:"#ef4444", shadow:"#ef444488", time:"11:00",           desc:"Presentation of event highlights and team performances." },
  { id:8, color:"#ef4444", shadow:"#ef444488", time:"12:00",           desc:"Announcement of top 3 teams and awards distribution. Closing remarks by NEXUS Club and event sponsors." },
];

// ── Layout constants ──────────────────────────────────────────────────────────
const CW   = 1248;   // canvas width  px
const CR   = 29;    // circle radius px
const CD   = CR*2;  // circle diameter

// Text box dimensions
const TW   = 202;   // text box width
const TH   = 143;   // text box height (reserved above / below circle)
const GAP  = 13;    // gap between circle edge and text box

// Column X centers
const COL  = [
  Math.round(CW * 0.07),  //  67  — node 1
  Math.round(CW * 0.25),  // 240  — nodes 2, 8
  Math.round(CW * 0.47),  // 451  — nodes 3, 7
  Math.round(CW * 0.69),  // 662  — nodes 4, 6
  Math.round(CW * 0.91),  // 874  — node  5
];

// ROW[1] === ROW[2] so mid and bottom share same cy.
// But bottom nodes are BELOW the line → push them down by enough to not collide.
// Strategy: bottom nodes sit at ROW[1] + 160 so their "above" text ends at ROW[1]+160-CR-GAP
// and the "below" text of row2 ends at ROW[1]+CR+GAP+TH. We need a gap between these two.
// Let's recalculate with separate rows:
//   ROW_MID    = 200   (nodes 2-5, text below)
//   ROW_BOT    = 200 + CD + 2*GAP + 2*TH  = 200+44+20+220 = 484  (nodes 6-8, text above)
// Canvas height = ROW_BOT + CR + GAP + 30(margin) = 484+22+10+30 = 546

const ROW_MID = 260;
const ROW_BOT = ROW_MID + CD + 2 * GAP + 2 * TH; // 200+44+20+220 = 484
const ROW_TOP = 130; // node 1

const CH = ROW_BOT + CR + GAP + TH + 40; // total canvas height ≈ 566

// Redefine placements with correct rows
const FINAL_PLACEMENTS = [
  { nodeIdx:0, cx:COL[0], cy:ROW_TOP, textSide:"below" }, // 1
  { nodeIdx:1, cx:COL[1], cy:ROW_MID, textSide:"below" }, // 2
  { nodeIdx:2, cx:COL[2], cy:ROW_MID, textSide:"below" }, // 3
  { nodeIdx:3, cx:COL[3], cy:ROW_MID, textSide:"below" }, // 4
  { nodeIdx:4, cx:COL[4], cy:ROW_MID, textSide:"below" }, // 5
  { nodeIdx:7, cx:COL[1], cy:ROW_BOT, textSide:"below" }, // 8
  { nodeIdx:6, cx:COL[2], cy:ROW_BOT, textSide:"below" }, // 7
  { nodeIdx:5, cx:COL[3], cy:ROW_BOT, textSide:"below" }, // 6
];

// Lines (px coords)
const LINES = [
  // node1 drops down to ROW_MID
  { x1:COL[0], y1:ROW_TOP+CR, x2:COL[0], y2:ROW_MID },
  // horizontal across ROW_MID: col0 → col4
  { x1:COL[0], y1:ROW_MID,    x2:COL[4], y2:ROW_MID },
  // col4 drops from ROW_MID to ROW_BOT
  { x1:COL[4], y1:ROW_MID+CR, x2:COL[4], y2:ROW_BOT },
  // horizontal across ROW_BOT: col4 → col1 (right to left)
  { x1:COL[1], y1:ROW_BOT,    x2:COL[4], y2:ROW_BOT },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function Schedule() {
  return (
    <section id="agenda" style={{ background:"var(--bg)", padding:"5rem clamp(1rem,4vw,4rem)", position:"relative", overflow:"hidden" }}>
      <div aria-hidden style={{ position:"absolute", right:0, top:"12%", width:300, height:300, background:"radial-gradient(circle,rgba(200,0,0,.16) 0%,transparent 70%)", pointerEvents:"none", zIndex:0 }} />
      <div aria-hidden style={{ position:"absolute", left:0, bottom:"8%", width:240, height:240, background:"radial-gradient(circle,rgba(200,0,0,.12) 0%,transparent 70%)", pointerEvents:"none", zIndex:0 }} />

      {/* Badge */}
      <div style={{ display:"flex", justifyContent:"center", marginBottom:"2.5rem", position:"relative", zIndex:1 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"rgba(0,0,0,.6)", border:"1px solid rgba(255,255,255,.2)", borderRadius:24, padding:"0.4rem 1.2rem" }}>
          <span style={{ fontSize:"0.9rem" }}>⏱</span>
          <span style={{ fontFamily:"var(--font-body)", fontSize:"1.14rem", color:"#fff", letterSpacing:"0.14em" }}>Schedule</span>
        </div>
      </div>

      {/* Desktop */}
      <div className="sched-desktop" style={{ display:"none", position:"relative", zIndex:1 }}>
        <DesktopCanvas />
      </div>

      {/* Mobile */}
      <div className="sched-mobile" style={{ display:"flex", flexDirection:"column", gap:"0.9rem", maxWidth:480, margin:"0 auto", position:"relative", zIndex:1 }}>
        {NODES.map(n => (
          <div key={n.id} style={{ display:"flex", gap:"1rem", alignItems:"flex-start", background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:10, padding:"0.85rem 1rem" }}>
            <MobileCircle node={n} />
            <div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:"1.07rem", fontWeight:700, color:"#fff", marginBottom:"0.2rem" }}>{n.time}</div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:"1.01rem", color:"#999", lineHeight:1.6 }}>{n.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Register now */}
      <div style={{ paddingLeft:"clamp(1rem,8%,80px)", marginTop:"2.5rem", position:"relative", zIndex:1 }}>
        <span style={{ fontFamily:"Georgia,serif", fontSize:"1.5rem", color:"#fff", fontStyle:"italic", opacity:.9 }}>register now</span>
        <svg width="90" height="44" viewBox="0 0 90 44" fill="none" style={{ display:"block", marginTop:4 }}>
          <path d="M8 8 C 30 50, 60 -10, 82 28" stroke="white" strokeWidth="1.4" fill="none" strokeDasharray="5 3" opacity="0.7"/>
          <polygon points="79,22 88,30 80,36" fill="white" opacity="0.7"/>
        </svg>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .sched-desktop { display:block !important; }
          .sched-mobile  { display:none  !important; }
        }
      `}</style>
    </section>
  );
}

function DesktopCanvas() {
  return (
    <div style={{ maxWidth:CW, margin:"0 auto", position:"relative", height:CH, width:"100%" }}>
      {/* Lines rendered first — behind everything */}
      {LINES.map((l,i) => <Line key={i} {...l} />)}

      {/* Nodes */}
      {FINAL_PLACEMENTS.map(p => {
        const node = NODES[p.nodeIdx];
        return <NodeBlock key={node.id} node={node} cx={p.cx} cy={p.cy} textSide={p.textSide} />;
      })}
    </div>
  );
}

function NodeBlock({ node, cx, cy, textSide }) {
  const circleLeft = cx - CR;
  const circleTop  = cy - CR;

  // Text box top — placed so it doesn't overlap the circle
  const textTop  = textSide === "below"
    ? cy + CR + GAP                  // text starts just below circle bottom
    : cy - CR - GAP - TH;           // text ends just above circle top
  const textLeft = cx - TW / 2;

  return (
    <>
      {/* Text */}
      <div style={{
        position:"absolute", left:textLeft, top:textTop,
        width:TW, height:TH,
        textAlign:"center", zIndex:3,
        display:"flex", flexDirection:"column", alignItems:"center",
        justifyContent: textSide === "above" ? "flex-end" : "flex-start",
        padding: textSide === "above" ? "0 0 4px" : "4px 0 0",
      }}>
        <div style={{ fontFamily:"var(--font-body)", fontSize:"1rem", fontWeight:700, color:"#e5e5e5", letterSpacing:"0.04em", marginBottom:"0.3rem", whiteSpace:"nowrap" }}>
          {node.time}
        </div>
        <div style={{ fontFamily:"var(--font-body)", fontSize:"0.96rem", color:"#aaa", lineHeight:1.6, wordBreak:"break-word" }}>
          {node.desc}
        </div>
      </div>

      {/* Circle */}
      <div style={{
        position:"absolute", left:circleLeft, top:circleTop,
        width:CD, height:CD, borderRadius:"50%",
        background:node.color, boxShadow:`0 0 20px ${node.shadow}`,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontFamily:"var(--font-display)", fontWeight:900, fontSize:"1.43rem", color:"#fff",
        zIndex:4,
      }}>
        {node.id}
      </div>
    </>
  );
}

function Line({ x1, y1, x2, y2 }) {
  const dx = x2-x1, dy = y2-y1;
  const length = Math.sqrt(dx*dx + dy*dy);
  const angle  = Math.atan2(dy,dx) * (180/Math.PI);
  return (
    <div aria-hidden style={{
      position:"absolute", left:x1, top:y1,
      width:length, height:2,
      background:"rgba(255,255,255,0.22)",
      transformOrigin:"0 50%",
      transform:`rotate(${angle}deg)`,
      zIndex:1, borderRadius:1,
    }}/>
  );
}

function MobileCircle({ node }) {
  return (
    <div style={{ width:52, height:52, borderRadius:"50%", background:node.color, boxShadow:`0 0 14px ${node.shadow}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontWeight:900, fontSize:"1rem", color:"#fff", flexShrink:0 }}>
      {node.id}
    </div>
  );
}