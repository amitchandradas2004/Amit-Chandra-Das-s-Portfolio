import { useEffect, useState } from "react";
import AmitImage from "../Assets/amit.png";

const roles = [
  "Full-Stack Developer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const word = roles[roleIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => setCharIdx((i) => i + 1), 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((i) => i - 1), 55);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }
    }

    setTyped(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <>
      <style>
        {`/* ---- HERO ---- */
    .hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 4rem 4rem;
  gap: 3rem;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}
  .fade-up {
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
}
.d1 {
  animation-delay: 0.1s;
}
.d2 {
  animation-delay: 0.25s;
}
.d3 {
  animation-delay: 0.4s;
}
.d4 {
  animation-delay: 0.55s;
}
.d5 {
  animation-delay: 0.7s;
}
}`}
      </style>
      <section style={{ position: "relative" }}>
        <div className="hero flex-col md:flex-row">
          {/* LEFT */}
          <div className="flex-1 w-full flex flex-col items-center text-center md:items-start md:text-left">
            {/* hero-tag */}
            <div
              className="
                hero-tag
                inline-flex items-center gap-2
                font-mono text-[0.68rem] tracking-[3px]
                text-[var(--green)] uppercase
                mb-6 fade-up d1
              "
            >
              🚀 Available for internships &amp; opportunities
            </div>

            {/* hero-name */}
            <h1
              className="
                text-[clamp(2.2rem,6vw,5rem)]
                font-extrabold leading-[1.05] py-2 tracking-[-1px]
                mb-1 fade-up d2
              "
            >
              <div style={{ color: "var(--text)" }}>Hey, I'm</div>
              <div className="grad-text">Amit Chandra Das.</div>
            </h1>

            {/* hero-role */}
            <p
              className="
                font-mono text-[0.85rem]
                text-[var(--muted)] tracking-[2px]
                my-7
                fade-up d3
              "
            >
              I'm a&nbsp;
              <span className="text-[var(--cyan)]">{typed}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "0.9em",
                  background: "var(--cyan)",
                  marginLeft: "2px",
                  verticalAlign: "text-bottom",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </p>

            {/* hero-desc */}
            <p
              className="
                text-[0.95rem] text-[var(--muted)] leading-[1.85]
                max-w-[460px] mx-auto md:mx-0
                mb-9 fade-up d4
              "
            >
              A passionate fresher developer who loves building clean,
              functional, and user-friendly web experiences. I enjoy turning
              ideas into real products using modern web technologies.
            </p>

            {/* hero-btns */}
            <div
              className="
                flex gap-4 flex-wrap
                justify-center md:justify-start
                fade-up d5
              "
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              w-full max-w-[300px]
              md:w-[300px] md:flex-none
              lg:w-[320px]
              fade-up d3
            "
          >
            <div className="glass-card profile-card rounded-xl overflow-hidden">
              <div className="status">
                <span className="dot" />
                Open to opportunities
              </div>
              <div className="profile-avatar">
                <img src={AmitImage} alt="Image of Amit Chandra Das" />
              </div>
              <div className="text-2xl font-bold mb-1">Amit Chandra Das</div>
              <div className="profile-handle">// fresher full-stack dev</div>

              <div className="stat-row">
                <div className="stat-cell">
                  <div className="stat-num grad-text">5+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="stack-tag">Next.js</span>
                <span className="stack-tag">React.js</span>
                <span className="stack-tag">MongoDB</span>
                <span className="stack-tag">Tailwind CSS</span>
                <span className="stack-tag">JavaScript</span>
                <span className="stack-tag">Daisy UI</span>
              </div>
            </div>
          </div>
        </div>

        {/* .scroll-hint */}
        <div className="absolute bottom-10 left-16 flex flex-col items-center gap-1.5">
          <div
            className="w-px h-11"
            style={{
              background:
                "linear-gradient(to bottom, var(--cyan), transparent)",
              animation: "pulse 2.2s ease-in-out infinite",
            }}
          />

          {/* .scroll-text */}
          <span className="font-mono text-[0.55rem] tracking-[3px] text-[var(--muted)] uppercase">
            Scroll
          </span>
        </div>
      </section>
    </>
  );
}
