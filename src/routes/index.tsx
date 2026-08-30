import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import certTechVeda from "@/assets/cert-techveda.jpg";
import certOptimus from "@/assets/cert-optimus.jpg";
import certYes from "@/assets/cert-yes.jpg";
import certSkillIndia from "@/assets/cert-skillindia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhavya Yadav — CSE Student & Embedded Systems Developer" },
      {
        name: "description",
        content:
          "Portfolio of Bhavya Yadav, B.Tech Computer Science student at LPU building embedded systems, robotics and AI-driven projects.",
      },
      { property: "og:title", content: "Bhavya Yadav — CSE Student & Embedded Systems Developer" },
      {
        property: "og:description",
        content:
          "Projects in robotics, IoT and AI, plus certifications from Microsoft Skill India, Tech Veda, NPTEL and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { group: "Languages", items: ["Python", "C", "C++", "Embedded C", "HTML"] },
  { group: "Technologies", items: ["React", "Node.js", "Bootstrap", "Arduino", "Raspberry Pi"] },
  { group: "Tools & Data", items: ["PostgreSQL", "Git", "GitHub", "Figma", "Arduino IDE"] },
  { group: "Strengths", items: ["Problem solving", "Team collaboration", "Time management", "Adaptability"] },
];

const projects = [
  {
    title: "Smart Plant Health Recommendation System",
    period: "Sep 2025 – Nov 2025",
    body: "Real-time sensing of soil moisture, pH, humidity and light with leaf imaging, streamed to a cloud AI engine for disease prediction, nutrient-deficiency detection and growth analysis — returning personalised care actions to a web dashboard and alerts.",
    stack: ["Python", "Raspberry Pi", "Web Dashboard", "HTTP"],
  },
  {
    title: "Autonomous Obstacle Avoiding Robot Car",
    period: "Aug 2025 – Oct 2025",
    body: "A four-wheeled robot built on Arduino Uno with HC-SR04 ultrasonic sensing and an L293D driver, running a stop → turn → resume decision loop that reached 100% obstacle avoidance in indoor testing.",
    stack: ["Arduino Uno", "C++", "DC Motors"],
  },
  {
    title: "Automatic Fire Fighting System",
    period: "Oct 2025 – Nov 2025",
    body: "An autonomous fire response unit that detects flame direction with KY-026 sensors, aims a nozzle through servo-based localization and triggers targeted water suppression via relay-controlled pumping.",
    stack: ["Embedded C", "SG90 Servos", "Relay Modules"],
  },
];

const certificates = [
  {
    title: "Effective Time Management (MOOC)",
    issuer: "Tech Veda",
    meta: "Proctored examination · Nov 2025",
    image: certTechVeda.url,
  },
  {
    title: "Skill Competency — AI to Aspire",
    issuer: "Microsoft × Skill India (NCVET)",
    meta: "NSQF Level 4 · Nov 2025",
    image: certSkillIndia.url,
  },
  {
    title: "ALGO-N-HUNT Coding Marathon",
    issuer: "OPTIMUS, LPU",
    meta: "Participation · Nov 2025",
    image: certOptimus.url,
  },
  {
    title: "Youth Empowerment & Skills (YES!+)",
    issuer: "The Art of Living",
    meta: "LPU, Kapurthala · Nov 2025",
    image: certYes.url,
  },
];

const education = [
  {
    school: "Lovely Professional University",
    place: "Phagwara, Punjab",
    detail: "B.Tech, Computer Science and Engineering — CGPA 8.1",
    period: "Aug 2025 – Present",
  },
  {
    school: "St. Mary's School",
    place: "Kashipur, Uttarakhand",
    detail: "Higher Secondary Education — 79.6%",
    period: "Apr 2023 – May 2025",
  },
  {
    school: "St. Mary's School",
    place: "Kashipur, Uttarakhand",
    detail: "Secondary Education — 89.6%",
    period: "Apr 2022 – Mar 2023",
  },
];

const achievements = [
  "Solved 100+ programming problems across online judges through daily practice.",
  "Earned the NeoColab 100 Days Badge for consistent problem solving.",
  "Ranked 2nd in the LPU Tech Marathon among 10+ competing teams.",
  "Completed NPTEL Digital Electronics Circuits — logic design, flip-flops, counters and sequential circuits.",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">{children}</p>
  );
}

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="veil pointer-events-none absolute inset-x-0 top-0 h-[70vh]" />

      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-24 pb-24 md:grid-cols-[1.15fr_0.85fr] md:pt-32">
        <div className="reveal">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Bhavya <span className="text-gold-gradient italic">Yadav</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Computer Science undergraduate at Lovely Professional University, building at the
            seam between hardware and intelligence — robotics, embedded systems and AI-assisted
            sensing.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:bhavyayadav2106@gmail.com"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/prataprudra4567-afk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhavya-yadav-9414a1371/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              LinkedIn
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["8.1", "CGPA"],
              ["100+", "Problems solved"],
              ["3", "Hardware builds"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-3xl text-gold">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/25" />
          <img
            src={profile.url}
            alt="Portrait of Bhavya Yadav"
            className="relative aspect-4/5 w-full rounded-[1.6rem] object-cover object-top shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <div className="hairline mx-auto h-px max-w-6xl" />

      {/* About + skills */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Profile</SectionLabel>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-3xl leading-snug md:text-4xl">
            I design systems that <em className="text-gold-gradient">sense, decide and act</em>.
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  {s.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/85"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel>Selected work</SectionLabel>
        <div className="mt-8 space-y-px">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group grid gap-6 border-t border-border py-10 md:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <h3 className="text-2xl leading-tight transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.period}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li key={t} className="text-xs tracking-wide text-gold/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="mb-10 text-3xl md:text-4xl">Recognition & training</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((c) => (
            <figure key={c.title} className="card-elegant overflow-hidden rounded-xl">
              <img
                src={c.image}
                alt={`${c.title} certificate issued by ${c.issuer}`}
                loading="lazy"
                className="aspect-[1.45] w-full border-b border-border object-cover object-top"
              />
              <figcaption className="p-6">
                <h3 className="text-xl leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-gold">{c.issuer}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.meta}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <ul className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {["C Programming Certification — iamNeo", "NPTEL Digital Electronics Circuits"].map(
            (x) => (
              <li key={x} className="border-l border-gold/40 pl-4">
                {x}
              </li>
            ),
          )}
        </ul>
      </section>

      {/* Achievements + education */}
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-2">
        <div>
          <SectionLabel>Achievements</SectionLabel>
          <ul className="mt-6 space-y-5">
            {achievements.map((a) => (
              <li key={a} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-px w-6 shrink-0 bg-gold/60" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>Education</SectionLabel>
          <div className="mt-6 space-y-8">
            {education.map((e) => (
              <div key={e.school + e.detail} className="border-l border-border pl-5">
                <h3 className="text-xl">{e.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gold/70">
                  {e.place} · {e.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="hairline mb-16 h-px" />
        <h2 className="text-4xl md:text-5xl">
          Let&apos;s build something <span className="text-gold-gradient italic">worth making</span>.
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
          <a className="transition-colors hover:text-gold" href="mailto:bhavyayadav2106@gmail.com">
            bhavyayadav2106@gmail.com
          </a>
          <a className="transition-colors hover:text-gold" href="tel:+917668395201">
            +91 76683 95201
          </a>
          <span>Phagwara, Punjab, India</span>
        </div>
        <p className="mt-14 text-xs tracking-widest text-muted-foreground/60">
          © {new Date().getFullYear()} Bhavya Yadav
        </p>
      </footer>
    </main>
  );
}
