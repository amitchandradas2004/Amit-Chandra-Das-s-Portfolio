import React, { useEffect, useState } from "react";
import AmitImage from "../Assets/amit.png";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
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
    <section style={{ position: "relative" }}>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-tag fade-up d1">
            🚀 Available for internships &amp; opportunities
          </div>

          <h1 className="hero-name fade-up d2">
            <div style={{ color: "var(--text)" }}>Hey, I'm</div>
            <div className="grad-text">Amit Chandra Das.</div>
          </h1>

          <p className="hero-role fade-up d3">
            I'm a&nbsp;<span className="typed">{typed}</span>
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

          <p className="hero-desc fade-up d4">
            A passionate fresher developer who loves building clean, functional,
            and user-friendly web experiences. I enjoy turning ideas into real
            products using modern web technologies.
          </p>

          <div className="hero-btns fade-up d5">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-right fade-up d3">
          <div className="glass-card profile-card">
            <div className="status">
              <span className="dot"></span>
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
              {/* <div className="stat-cell">
                <div className="stat-num grad-text">9</div>
                <div className="stat-label">Skills</div>
              </div> */}
            </div>

            <div className="skill-pills">
              <span className="pill pill-purple">Next.js</span>
              <span className="pill pill-cyan">React.js</span>
              <span className="pill pill-green">MongoDB</span>
              <span className="pill pill-cyan">Tailwind CSS</span>
              <span className="pill pill-purple">JavaScript</span>
              <span className="pill pill-purple">Daisy UI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <div className="scroll-text">Scroll</div>
      </div>
    </section>
  );
}
