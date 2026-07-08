import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/tanya3")({
  head: () => ({
    meta: [
      { title: "Tanya M. Lawson — Operations, Bookkeeping & AI" },
      { name: "description", content: "30+ years running back offices. Now building AI tools. Remote or on-site near NJ." },
      { property: "og:title", content: "Tanya M. Lawson — Operations & AI" },
      { property: "og:description", content: "Do the work. Keep your word. Let results speak." },
    ],
  }),
  component: Tanya3Home,
});

/* ----------------------------- theme (from /tanya2) ---------------------- */

const themeCss = `
  [data-tanya3] {
    --navy-deep:  #0F1210;
    --navy:       #1F2621;
    --navy-elev:  #2A322C;
    --platinum:   #EFEBE2;
    --platinum-2: #C7C4B9;
    --platinum-d: #8A8A80;
    --gold:       #C9BFA3;
    --gold-soft:  #DDD4B8;
    --sky:        #87A878;
    --sky-soft:   #A8C0A0;
    --line:       rgba(239,235,226,0.09);
    --serif:      'Libre Baskerville', Georgia, serif;
    --sans:       'IBM Plex Sans', system-ui, sans-serif;
    --mono:       'JetBrains Mono', ui-monospace, monospace;

    background: var(--navy-deep);
    color: var(--platinum);
    font-family: var(--sans);
    font-size: clamp(18px, 1.15vw, 20px);
    line-height: 1.6;
  }
  [data-tanya3] ::selection { background: var(--sky); color: var(--navy-deep); }

  [data-tanya3] .h-display { font-family: var(--serif); font-weight: 700; font-size: clamp(56px, 7.2vw, 112px); line-height: 0.98; letter-spacing: -0.025em; }
  [data-tanya3] .h-section { font-family: var(--serif); font-weight: 700; font-size: clamp(44px, 5.4vw, 80px); line-height: 1.05; letter-spacing: -0.02em; }
  [data-tanya3] .h-card    { font-family: var(--serif); font-weight: 700; font-size: clamp(26px, 2.4vw, 38px); line-height: 1.2; letter-spacing: -0.01em; }
  [data-tanya3] .lead      { font-family: var(--sans); font-size: clamp(20px, 1.7vw, 26px); line-height: 1.5; color: var(--platinum-2); }
  [data-tanya3] .body      { font-family: var(--sans); font-size: clamp(17px, 1.2vw, 21px); line-height: 1.65; color: var(--platinum-2); }
  [data-tanya3] .body-sm   { font-family: var(--sans); font-size: clamp(15px, 1vw, 17px); line-height: 1.55; color: var(--platinum-d); }
  [data-tanya3] .eyebrow   { font-family: var(--mono); font-size: clamp(13px, 0.95vw, 15px); letter-spacing: 0.32em; text-transform: uppercase; color: var(--sky); font-weight: 500; }
  [data-tanya3] .stat {
    font-family: var(--serif); font-weight: 700;
    font-size: clamp(40px, 4.6vw, 78px);
    line-height: 0.95; letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums; white-space: nowrap;
    background: linear-gradient(180deg, var(--platinum) 0%, var(--sky) 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  [data-tanya3] .brandmark { font-family: var(--serif); font-weight: 700; font-size: clamp(20px, 1.5vw, 24px); letter-spacing: -0.01em; }
  [data-tanya3] .navlink   { font-family: var(--sans); font-weight: 500; font-size: clamp(15px, 1vw, 17px); color: var(--platinum-2); }
  [data-tanya3] .navlink:hover { color: var(--sky); }

  /* 3D floating cards from /tanya2 */
  [data-tanya3] .card-3d {
    position: relative; overflow: hidden;
    border: 1px solid transparent;
    background-image:
      linear-gradient(hsl(40 10% 14% / 0.7), hsl(40 10% 14% / 0.5)),
      linear-gradient(160deg, hsl(42 29% 91% / 0.22) 0%, hsl(40 12% 22% / 0.4) 45%, hsl(0 0% 0% / 0.7) 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-shadow:
      18px 18px 40px hsl(0 0% 0% / 0.6),
      0 22px 44px hsl(0 0% 0% / 0.55),
      -10px -10px 28px hsl(42 29% 91% / 0.05),
      inset 0 1px 0 hsl(42 29% 91% / 0.14),
      inset 0 -1px 0 hsl(0 0% 0% / 0.6);
    transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease;
  }
  [data-tanya3] .card-3d:hover { transform: translateY(-6px); }

  [data-tanya3] .btn { display: inline-flex; align-items: center; gap: 12px; font-family: var(--sans); font-weight: 600; font-size: clamp(16px, 1.15vw, 19px); padding: 16px 30px; border-radius: 999px; transition: all .25s ease; }
  [data-tanya3] .btn-sky   { background: var(--sky); color: var(--navy-deep); box-shadow: 0 12px 30px -12px rgba(135,168,120,0.6); }
  [data-tanya3] .btn-sky:hover { transform: translateY(-2px); }
  [data-tanya3] .btn-gold  { background: var(--gold); color: var(--navy-deep); box-shadow: 0 14px 34px -14px rgba(201,191,163,0.7); }
  [data-tanya3] .btn-gold:hover { transform: translateY(-2px); }
  [data-tanya3] .btn-ghost { color: var(--sky); border: 2px solid var(--sky); background: rgba(135,168,120,0.06); }
  [data-tanya3] .btn-ghost:hover { background: rgba(135,168,120,0.12); }

  [data-tanya3] .lattice-bg {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(to right, rgba(239,235,226,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(239,235,226,0.06) 1px, transparent 1px),
      linear-gradient(to right, rgba(135,168,120,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(135,168,120,0.04) 1px, transparent 1px);
    background-size: 88px 88px, 88px 88px, 22px 22px, 22px 22px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, #000 0%, rgba(0,0,0,0.55) 65%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, #000 0%, rgba(0,0,0,0.55) 65%, transparent 100%);
  }
  [data-tanya3] .navy-glow {
    background:
      radial-gradient(ellipse at 20% 0%, #1F2621 0%, transparent 55%),
      radial-gradient(ellipse at 80% 20%, rgba(135,168,120,0.18) 0%, transparent 50%),
      var(--navy-deep);
  }
  @keyframes t3-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  [data-tanya3] .hl { font-style: italic; color: var(--gold); }
  [data-tanya3] .grad-italic {
    font-style: italic;
    background: linear-gradient(135deg, var(--sky) 0%, var(--gold-soft) 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  [data-tanya3] .good-heading-word {
    display: inline-block;
    padding: 0 0.06em 0.16em 0.14em;
    margin-bottom: -0.16em;
  }
  [data-tanya3] .hero-running {
    display: block;
    margin-top: 0.15em;
    line-height: 1.05;
    padding: 0 0 0.18em 0;
    margin-bottom: -0.18em;
  }



`;

/* ------------------------------- data ---------------------------------- */

const skills = [
  { i: "i.",   t: "Taking care of people",       d: "Most of my work has been customer- and client-facing — answering calls and emails, scheduling, and solving problems with patience. I listen first, explain things clearly, and follow through so people feel taken care of." },
  { i: "ii.",  t: "Keeping an office organized", d: "Files, schedules, and systems that other people can actually follow. I set things up so nothing slips through the cracks — and so the next person can pick it right up." },
  { i: "iii.", t: "Handling money carefully",    d: "Accounts payable and receivable, payroll, bank reconciliations, and cash-flow tracking. I've supported CFOs and controllers for years and kept the numbers right and on time." },
  { i: "iv.",  t: "Supporting busy leaders",     d: "I've been the right hand to executives for most of my career. I protect their time, keep things private, and stay calm and steady when everyone else is in a rush." },
  { i: "v.",   t: "Putting AI to real work",     d: "I use AI to handle the slow, repetitive parts faster — drafting, cleanup, and routine tasks — without letting the quality drop. I also build my own AI tools (more on that below)." },
];

const tickerItems = [
  "Do the work. Keep your word. Let results speak.",
  "Calm is a strategy.",
  "Consistency beats intensity.",
  "Do the right thing, even when no one is watching.",
];

const stats = [
  { n: "30+",     label: "Years running back offices", center: true },
  { n: "40,000",  label: "People at the largest company I supported", center: true },
  { n: "6",       label: "Software tools I use daily", center: true },
  { n: "100%",    label: "Remote-ready, or on-site near NJ", center: true },
];

const roles = [
  { years: "2023–2025", place: "A & E Group — Nashville, TN (Remote)",                       title: "Remote Operations Manager",                     body: "I was the executive's main right hand on a fully remote team — running their schedule, setting up meetings, and keeping everyone on the same page. I handled expense reports, billing, and confidential paperwork, and organized team meetings and trainings with the agendas, notes, and materials to match." },
  { years: "2010–2025", place: "Self-employed — NJ / NY",                                     title: "Licensed Massage Therapist",                    body: "I gave on-site therapeutic massages using Swedish, deep tissue, Thai, and Shiatsu techniques, and planned each session around what the client needed. I built my own client base through referrals and word of mouth, kept every session private and respectful, and ran it as a small business — handling the scheduling, records, and finances myself." },
  { years: "2019–2024", place: "Lele's Used Cars — Orange, NJ",                               title: "Office Manager & Executive Assistant",          body: "I ran the day-to-day office and supported the owner — managing calendars and travel, writing professional letters and reports, and coordinating with customers, vendors, and state agencies like the NJ DMV. I kept customer and financial records accurate and confidential, and balanced shifting priorities with sound judgment." },
  { years: "2010–2017", place: "Catholic Charities — Dept. of Persons with Disabilities, NJ", title: "Residential Counselor (Direct Care)",           body: "I supported residents with disabilities in their daily lives — helping with life skills, transportation, and personal care, and administering medication. I helped build each person's recovery plan and kept careful, up-to-date records. It taught me patience, compassion, and how to solve problems calmly in sensitive situations." },
  { years: "2001–2009", place: "Interstate Industrial Corp. — Clifton, NJ",                   title: "Administrative Support to the CFO & Controllers", body: "Tracked contracts and billing so cash flow stayed predictable. Made deposits, recorded them correctly, and managed wire transfers in and out of company accounts. Ran payroll for several related companies, paid the taxes on time, and made sure deductions like union dues and 401(k) were right." },
  { years: "1999–2001", place: "Kushner Companies — Florham Park, NJ",                        title: "Executive Assistant to the CFO",                body: "Pulled together cash-flow reports across dozens of apartment and commercial properties, sent out checks to partners, and processed wire transfers. Helped make sure 400+ tax and partnership returns were prepared, signed, and mailed on time. Built forms and spreadsheets the whole team relied on." },
  { years: "1997–1999", place: "Circuit City Stores, Inc. — Piscataway, NJ",                  title: "Administrative Assistant to the Regional Director", body: "Supported a regional director and district managers across 125 stores. Prepared monthly budgets, handled staffing updates and bonuses for about 1,100 employees, tracked customer service, and arranged travel and scheduling for new-store openings." },
  { years: "1995–1997", place: "Info Line of Middlesex County — North Brunswick, NJ",         title: "Executive Assistant & Office Manager",          body: "Ran the day-to-day of the office and supported leadership — the role where I learned to keep everything moving at once." },
  { years: "1991–1995", place: "National Association of Social Workers — New York, NY",       title: "Executive Assistant & Interim Office Manager",  body: "Supported executives and stepped in to manage the office when it was needed. This is where my career in administration began." },
];

const buildCards = [
  { tag: "Writing that sounds human", title: "Human Texture Engine", body: "I built this skill to fix AI writing that sounds flat and robotic. It helps AI write like a real person — specific, natural, and easy to read." },
  { tag: "Trustworthy AI memory",     title: "Memory Firewall",       body: "Rules that keep an AI from treating unchecked information as fact — so its memory stays honest instead of mixing up guesses with the truth." },
  { tag: "Know your rights",           title: "OddLaw",                body: "Plain-language tools that teach everyday people how to stand up for themselves — how evidence works, and how to ask the right questions." },
];

const education = [
  { yr: "1986", t: "Certified Executive Secretary",  s: "American Business Institute — New York, NY" },
  { yr: "1985", t: "Diploma, Marketing",             s: "Murray Bergtraum High School for Business Careers — New York, NY" },
  { yr: "2010", t: "Clinical Massage Therapy",       s: "Academy of Massage Therapy — certificate" },
];

/* ---------------------------------- page --------------------------------- */

function Tanya3Home() {
  return (
    <div data-tanya3 className="min-h-screen -mt-16 pt-16 relative">
      <style dangerouslySetInnerHTML={{ __html: themeCss }} />
      <div className="navy-glow fixed inset-0 -z-10" />
      <div className="lattice-bg" aria-hidden />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Ticker />
        <StickySkills />
        <StatStrip />
        <ExperienceRail />
        <Ties />
        <BuildSection />
        <Education />
        <QuoteBand />
        <ContactCTA />
        <Foot />
      </div>
    </div>
  );
}

/* --------------------------------- nav ---------------------------------- */

function Nav() {
  return (
    <nav className="max-w-[1400px] mx-auto px-8 pt-10 pb-6 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-4">
        <span
          aria-hidden
          className="w-11 h-11 rounded-full grid place-items-center text-[16px]"
          style={{ background: "linear-gradient(135deg, var(--sky) 0%, var(--gold) 100%)", color: "var(--navy-deep)", fontFamily: "var(--serif)", fontWeight: 700 }}
        >TL</span>
        <span className="brandmark">Tanya M. Lawson</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#skills" className="navlink transition-colors">What I do</a>
        <a href="#experience" className="navlink transition-colors">Experience</a>
        <a href="#build" className="navlink transition-colors">What I build</a>
        <a href="#education" className="navlink transition-colors">Education</a>
      </div>
      <a href="#contact" className="btn btn-sky">Hire me</a>
    </nav>
  );
}

/* --------------------------------- hero --------------------------------- */

function Hero() {
  return (
    <section id="top" className="max-w-[1400px] mx-auto px-8 pt-16 pb-24 relative">
      <div
        aria-hidden
        className="absolute top-4 left-8 w-28 h-28 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(var(--gold) 2px, transparent 0)", backgroundSize: "16px 16px" }}
      />
      <div className="flex items-center justify-end gap-6 mb-10">
        <span className="eyebrow">Customer service · Operations · AI</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="h-display text-left mt-[10vh] mb-16"
      >
        I keep the back office <span className="grad-italic hero-running">running.</span>
      </motion.h1>

      <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lead max-w-[62ch]"
          >
            I'm Tanya Lawson. For more than 30 years I've kept offices organized, records clean, and money tracked — from a small startup all the way to a company with over 40,000 people. I work well under pressure, I keep my word, and I let the results speak. Today I'm also the founder of <strong style={{ color: "var(--platinum)" }}>CREATORSEAL CORPORATION</strong>, where I build AI tools I stand behind.
          </motion.p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-5">
            <a href="#contact" className="btn btn-gold min-w-[220px] justify-center">Hire Me →</a>
            <a href="#experience" className="btn btn-ghost min-w-[220px] justify-center">See My Experience</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{
            filter: "drop-shadow(0 0 28px rgba(239,235,226,0.18)) drop-shadow(0 0 60px rgba(201,191,163,0.10))",
          }}
        >
          <img
            src="/tanya-hero.jpg"
            alt="Tanya M. Lawson"
            className="rounded-2xl w-full aspect-[4/5] object-cover"
            style={{
              boxShadow:
                "0 32px 64px -16px rgba(0,0,0,0.55), 0 16px 32px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(239,235,226,0.08)",
            }}
          />
          {/* platinum-glass border */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: "2px solid rgba(219,209,181,0.75)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.25), 0 0 28px rgba(219,209,181,0.18)",
            }}
          />
          {/* subtle glass sheen */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.05) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- ticker -------------------------------- */

function Ticker() {
  const line = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <section className="py-10 overflow-hidden border-y" style={{ borderColor: "var(--line)" }}>
      <div className="flex whitespace-nowrap" style={{ animation: "t3-marquee 70s linear infinite", width: "max-content" }}>
        {line.map((p, i) => (
          <span key={i} className="px-10" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(28px, 3.4vw, 48px)", color: "var(--platinum)" }}>
            {p} <span aria-hidden style={{ color: "var(--sky)", margin: "0 20px" }}>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- sticky pin skills ---------------------------- */

function StickySkills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative">
      <div className="lg:hidden max-w-[1400px] mx-auto px-8 pt-24 pb-8">
        <div className="eyebrow mb-6">What I do</div>
        <h2 className="h-section" style={{ lineHeight: 1.2 }}>
          What I'm <span className="grad-italic good-heading-word">good at.</span>
        </h2>
        <p className="body mt-6 max-w-[42ch]">
          Five things I've been doing, in one form or another, for three decades.
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-[1.1fr_1.2fr] gap-16 relative">
          {/* Left — pinned intro card */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="card-3d rounded-2xl p-10 lg:p-12 min-h-[50vh] flex flex-col justify-center">
                <div className="eyebrow mb-6">What I do</div>
                <h2 className="h-section" style={{ lineHeight: 1.2 }}>
                  What I'm <span className="grad-italic good-heading-word">good at.</span>
                </h2>
                <p className="body mt-8">
                  Five things I've been doing, in one form or another, for three decades. Scroll to move through them.
                </p>
                <StepDots activeIdx={activeIdx} count={skills.length} />
              </div>
            </div>
          </div>

          {/* Right — scrolling cards */}
          <div className="space-y-8">
            {skills.map((s, i) => (
              <div
                key={s.i}
                ref={(el) => { cardRefs.current[i] = el; }}
                data-idx={i}
                className="card-3d rounded-2xl p-8 lg:p-10 min-h-[45vh] flex flex-col justify-center"
              >
                <div className="flex items-center gap-6 mb-4">
                  <span className="eyebrow" style={{ color: "var(--gold)" }}>{s.i}</span>
                  <span className="body-sm">0{i + 1} / 0{skills.length}</span>
                </div>
                <h3 className="h-card mb-4" style={{ maxWidth: "18ch" }}>{s.t}</h3>
                <p className="body max-w-[54ch]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepDots({ activeIdx, count }: { activeIdx: number; count: number }) {
  return (
    <div className="mt-12 flex items-center gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            width: activeIdx === i ? 32 : 12,
            height: 4,
            background: "var(--sky)",
            borderRadius: 999,
            display: "block",
            opacity: activeIdx === i ? 1 : 0.35,
            transition: "width 0.3s ease, opacity 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------ stat strip ------------------------------ */

function StatStrip() {
  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-y" style={{ borderColor: "var(--line)" }}>
        {stats.map((s) => (
          <div key={s.n} className={`min-w-0 ${s.center ? "text-center" : ""}`}>
            <div className="stat">{s.n}</div>
            <div className={`body-sm mt-5 ${s.center ? "mx-auto" : ""}`} style={{ maxWidth: "24ch" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- experience rail ---------------------------- */

function ExperienceRail() {
  return (
    <section id="experience" className="max-w-[1400px] mx-auto px-8 py-24">
      <div className="eyebrow mb-6">Where I've Worked</div>
      <h2 className="h-section max-w-[20ch] mb-16">A working <span className="grad-italic">history.</span></h2>
      <div className="relative">
        {roles.map((r, i) => (
          <article
            key={r.title + r.years}
            className="card-3d rounded-2xl p-8"
            style={{
              position: "sticky",
              top: `${80 + i * 22}px`,
              marginBottom: "28px",
              backgroundColor: "hsl(40 10% 8%)",
            }}
          >
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <div className="h-card" style={{ color: "var(--sky)", fontSize: "clamp(22px, 1.8vw, 28px)" }}>{r.years}</div>
              <div className="eyebrow" style={{ letterSpacing: "0.2em", fontSize: 12 }}>
                Role {String(i + 1).padStart(2, "0")} / {String(roles.length).padStart(2, "0")}
              </div>
            </div>
            <h3 className="h-card" style={{ fontSize: "clamp(22px, 1.9vw, 30px)" }}>{r.title}</h3>
            <p className="body mt-4">{r.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- ties together ---------------------------- */

function Ties() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-24">
      <div className="card-3d rounded-2xl p-8 lg:p-12 max-w-[900px] mx-auto text-center">
        <div className="eyebrow mb-6">The thread</div>
        <h2 className="h-section mb-10">How it all <span className="grad-italic">ties together.</span></h2>
        <div className="body space-y-6 max-w-[68ch] mx-auto">
          <p>My path hasn't been a straight line — a front office, a finance department, a car lot, a group home, my own massage practice, a remote operations team, and now building AI tools. But look closer and it's really all the same job: <span className="hl">taking care of people and earning their trust.</span></p>
          <p>In every role I've answered the calls and emails, kept things organized and private, stayed calm when it got busy, and followed through on what I promised. An executive, a customer, a resident — everyone wants to feel heard and helped. That's what I'm good at, and it's what customer service really comes down to.</p>
          <p>It's also why I build the way I do. CREATORSEAL and my other tools come from the same place: keep good records, treat people honestly, and earn trust with proof — not promises.</p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {["Patience","Clear communication","Empathy","Emotional intelligence","Active listening","Discretion","Problem-solving","Calm under pressure","Follow-through","Dependability","Confidentiality"].map(t => (
          <span key={t} className="body-sm" style={{ padding: "8px 16px", borderRadius: 999, border: "1px solid var(--sky)", background: "rgba(135,168,120,0.08)", color: "var(--platinum-2)" }}>{t}</span>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- what I build ---------------------------- */

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setOn(true);
          else setOn(false);
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "translateY(0) scale(1)" : "translateY(60px) scale(0.94)",
        transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.2,0.8,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function BuildSection() {
  return (
    <section id="build" className="max-w-[1400px] mx-auto px-8 py-24">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 mb-16">
        <div>
          <div className="eyebrow mb-6">What I build</div>
          <h2 className="h-section">I also build <span className="grad-italic">AI tools.</span></h2>
        </div>
        <div className="body space-y-5 max-w-[60ch]">
          <p>In 2026 I founded <strong style={{ color: "var(--platinum)" }}>CREATORSEAL CORPORATION</strong> because I kept seeing the same problem: it's getting harder to tell what's real and who made what. So I build tools around one simple idea — <span className="hl">proof before trust.</span></p>
          <p>I'm not just using AI — I'm shaping how it works. Everything below is something I built and stand behind.</p>
        </div>
      </div>

      <Reveal className="mb-10">
        <a href="https://creatorseal.app" target="_blank" rel="noopener noreferrer" className="card-3d rounded-2xl p-10 lg:p-14 grid lg:grid-cols-2 gap-12 items-center block">
          <div>
            <span className="eyebrow" style={{ color: "var(--sky-soft)" }}>● Live now · free 3-day trial</span>
            <h3 className="h-section mt-6" style={{ fontSize: "clamp(36px, 4vw, 60px)" }}>CREATORSEAL</h3>
            <p className="body mt-6 max-w-[52ch]">My main product, live now at <strong style={{ color: "var(--platinum)" }}>creatorseal.app</strong>. It gives your work a digital fingerprint before you share it — like a receipt that proves the file was yours, and exactly when you made it. It all happens on your own device, so your file never leaves your hands.</p>
            <span className="mt-8 inline-block" style={{ color: "var(--sky)", fontWeight: 600 }}>Visit creatorseal.app →</span>
          </div>
          <div
            className="rounded-xl p-6"
            style={{ background: "rgba(15,18,16,0.7)", border: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 14 }}
          >
            <div className="flex justify-between mb-4" style={{ color: "var(--sky)" }}>
              <span>Receipt of Provenance</span><span>✓ Verified</span>
            </div>
            <div className="space-y-2" style={{ color: "var(--platinum-2)" }}>
              <div className="flex justify-between"><span>Seal ID</span><span style={{ color: "var(--platinum)" }}>CS-2026-0F3A</span></div>
              <div className="flex justify-between"><span>Issued</span><span style={{ color: "var(--platinum)" }}>2026-06-21</span></div>
              <div className="flex justify-between"><span>Method</span><span style={{ color: "var(--platinum)" }}>SHA-384 · local</span></div>
              <div className="flex justify-between"><span>Status</span><span style={{ color: "var(--sky)" }}>Protected</span></div>
              <div className="mt-4 pt-4 break-all" style={{ borderTop: "1px solid var(--line)", color: "var(--gold)", fontSize: 12 }}>
                9f3a7b21c84e6d50f1ab92c7d3e4f506<br />1a8b9c0d1e2f3041526374859afbecd0
              </div>
            </div>
          </div>
        </a>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {buildCards.map((c, i) => (
          <Reveal key={c.title} delay={i * 120}>
            <div className="card-3d rounded-2xl p-8 h-full">
              <span className="eyebrow" style={{ color: "var(--gold)" }}>{c.tag}</span>
              <h4 className="h-card mt-4" style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}>{c.title}</h4>
              <p className="body mt-4">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <a href="https://www.instagram.com/thehardwin/" target="_blank" rel="noopener noreferrer" className="card-3d rounded-2xl p-10 lg:p-14 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center block">
          <div>
            <span className="eyebrow" style={{ color: "var(--sky-soft)" }}>My first end-to-end automation</span>
            <h3 className="h-section mt-6" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>The Hard Win</h3>
            <p className="body mt-6">I shipped my first end-to-end automation. It runs a faceless Instagram channel, <strong style={{ color: "var(--platinum)" }}>The Hard Win</strong> (@thehardwin) — every other day it posts a real historical figure who did the hard version of something, paired with a source line you can actually check.</p>
            <p className="body mt-4">About 75% of it is automated: a custom Python renderer builds the cards, Supabase stores them, n8n schedules them, and the Instagram Graph API posts them. The other 25% is me — and that part is on purpose. <span className="hl">I automated the labor. I kept the judgment.</span></p>
            <span className="mt-6 inline-block" style={{ color: "var(--sky)", fontWeight: 600 }}>See the posts · @thehardwin →</span>
          </div>
          <div className="space-y-3" style={{ fontFamily: "var(--mono)" }}>
            {[
              ["01","Research & niche validation","NexLev — real view data, not headline numbers"],
              ["02","Verified content standard","Two independent sources per fact"],
              ["03","Data & storage","Supabase — Postgres + image bucket"],
              ["04","Schedule & publish","n8n · Instagram Graph API"],
              ["05","Human approval gate","Nothing posts until I review and approve"],
            ].map(([n,t,s]) => (
              <div key={n} className="flex gap-4 p-4 rounded-lg" style={{ background: "rgba(15,18,16,0.55)", border: "1px solid var(--line)" }}>
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>{n}</span>
                <div>
                  <div style={{ color: "var(--platinum)", fontSize: 14, fontWeight: 600 }}>{t}</div>
                  <div style={{ color: "var(--platinum-d)", fontSize: 13, marginTop: 2 }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </a>
      </Reveal>
    </section>
  );
}

/* ------------------------------ education ----------------------------- */

function Education() {
  return (
    <section id="education" className="max-w-[1400px] mx-auto px-8 py-24">
      <div className="eyebrow mb-6">Training</div>
      <h2 className="h-section mb-16">Education & <span className="grad-italic">certifications.</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {education.map(e => (
          <div key={e.t} className="card-3d rounded-2xl p-8">
            <div className="h-card" style={{ color: "var(--sky)", fontSize: "clamp(22px, 1.8vw, 28px)" }}>{e.yr}</div>
            <h4 className="h-card mt-4" style={{ fontSize: "clamp(20px, 1.6vw, 26px)" }}>{e.t}</h4>
            <p className="body mt-3">{e.s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- quote band --------------------------------- */

function QuoteBand() {
  return (
    <section className="py-24 border-y" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1000px] mx-auto px-8 text-center">
        <blockquote className="h-section" style={{ fontStyle: "italic" }}>
          Do the work. Keep your word. <span className="grad-italic">Let results speak.</span>
        </blockquote>
        <div className="body-sm mt-8">— the rule I've followed my whole career</div>
      </div>
    </section>
  );
}

/* ------------------------------ contact --------------------------------- */

function ContactCTA() {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-8 py-32">
      <div className="card-3d rounded-2xl p-10 md:p-14 text-center max-w-[900px] mx-auto">
        <div className="eyebrow mb-8">Let's work</div>
        <h2 className="h-section">Let's <span className="grad-italic">work together.</span></h2>
        <p className="lead mt-8 max-w-[56ch] mx-auto">
          I'm open to operations, administrative, and AI roles — on-site near NJ/NY or fully remote. Tell me what you need and I'll tell you how I can help.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <a href="mailto:support@tanyamlawson.com" className="btn btn-sky">Email Me →</a>
          <a href="/assets/pdf/lawson_tanya_resume_2025.pdf" target="_blank" rel="noopener" className="btn btn-ghost">Download My Résumé</a>
        </div>
        <div className="body-sm mt-10">
          support@tanyamlawson.com &nbsp;·&nbsp; 732-309-2625 &nbsp;·&nbsp; Swedesboro, NJ &nbsp;·&nbsp; Open to remote &nbsp;·&nbsp;{" "}
          <a href="https://www.linkedin.com/in/tm-lawson-wbm1/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--sky)", fontWeight: 600 }}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- footer -------------------------------- */

function Foot() {
  return (
    <footer className="max-w-[1400px] mx-auto px-8 py-16 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="brandmark mb-4">Tanya M. Lawson</div>
          <p className="body-sm">30+ years in operations and administration, now founder of CREATORSEAL CORPORATION — building AI tools around one idea: proof before trust.</p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Site</h4>
          <div className="flex flex-col gap-2">
            <a href="#skills" className="navlink">What I do</a>
            <a href="#experience" className="navlink">Experience</a>
            <a href="#build" className="navlink">What I build</a>
            <a href="#education" className="navlink">Education</a>
            <a href="/about/" className="navlink">About</a>
            <a href="/work/" className="navlink">Work</a>
            <a href="/resume/" className="navlink">Résumé</a>
            <a href="/how-i-work/" className="navlink">How I Work</a>
            <a href="/her-story/" className="navlink">Her Story</a>
            <a href="/contact/" className="navlink">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Build</h4>
          <div className="flex flex-col gap-2">
            <a href="https://creatorseal.app" target="_blank" rel="noopener noreferrer" className="navlink">CREATORSEAL</a>
            <a href="#build" className="navlink">Human Texture Engine</a>
            <a href="#build" className="navlink">Memory Firewall</a>
            <a href="#build" className="navlink">OddLaw</a>
          </div>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Connect</h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:support@tanyamlawson.com" className="navlink">Email</a>
            <a href="https://www.linkedin.com/in/tm-lawson-wbm1/" target="_blank" rel="noopener noreferrer" className="navlink">LinkedIn</a>
            <a href="https://www.youtube.com/@creatorsealofficial" target="_blank" rel="noopener noreferrer" className="navlink">YouTube</a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 flex flex-wrap justify-between gap-4 body-sm" style={{ borderTop: "1px solid var(--line)" }}>
        <span>© 2026 Tanya M. Lawson</span>
        <span>
          <a href="/privacy/" className="navlink">Privacy</a> &nbsp;·&nbsp; <a href="/terms/" className="navlink">Terms</a> &nbsp;·&nbsp; support@tanyamlawson.com
        </span>
      </div>
    </footer>
  );
}
