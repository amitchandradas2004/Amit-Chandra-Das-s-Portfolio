import React from "react";

const skills = [
  { name: "HTML5", icon: "🌐", color: "cyan" },
  { name: "CSS3", icon: "🎨", color: "purple" },
  { name: "Tailwind CSS", icon: "💨", color: "cyan" },
  { name: "DaisyUI", icon: "🌸", color: "purple" },
  { name: "JavaScript", icon: "⚡", color: "green" },
  { name: "React.js", icon: "⚛️", color: "cyan" },
  { name: "Next.js", icon: "▲", color: "purple" },
  { name: "MongoDB", icon: "🍃", color: "green" },
  { name: "Node.js", icon: "🟢", color: "green" },
  { name: "Git", icon: "⚛️", color: "green" },
  { name: "GitHub", icon: "🌸", color: "green" },
  { name: "VS Code", icon: "🎨", color: "green" },
];

const learningNow = ["TypeScript", "Express.js", "REST APIs"];

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label flex justify-center md:justify-start">// what I work with</div>
        <h2 className="section-title text-center md:text-start">
          My <span className="grad-text">Tech Stack</span>
        </h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-item border border-gray-800 rounded-xl" key={i}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className={`skill-accent`} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            // currently exploring
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {learningNow.map((item, i) => (
              <span
                className="pill pill-purple"
                key={i}
                style={{ fontSize: "0.65rem", letterSpacing: "1.5px" }}
              >
                🔍 {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
