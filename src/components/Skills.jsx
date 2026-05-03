import React from "react";

const skills = [
  {
    name: "HTML5",
    icon: "https://img.icons8.com/?size=96&id=20909&format=png",
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/?size=160&id=YjeKwnSQIBUq&format=png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png",
  },
  {
    name: "DaisyUI",
    icon: "https://img.daisyui.com/images/daisyui/mark-static.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "React.js",
    icon: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
  },
  {
    name: "Next.js",
    icon: "https://img.icons8.com/?size=96&id=MWiBjkuHeMVq&format=png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/?size=96&id=54087&format=png",
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/?size=96&id=PZQVBAxaueDJ&format=png",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/?size=96&id=20906&format=png",
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png",
  },
  {
    name: "VS Code",
    icon: "https://img.icons8.com/?size=96&id=9OGIyU8hrxW5&format=png",
  },
];

const learningNow = ["TypeScript", "Express.js", "REST APIs", "Next.js"];

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper fade-up d3">
        <div className="section-label flex justify-center md:justify-start">
          // what I work with
        </div>
        <h2 className="section-title text-center md:text-start">
          My <span className="grad-text">Tech Stack</span>
        </h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              className="skill-item border border-gray-800 rounded-xl select-none profile-card-1"
              key={i}
            >
              <div className="skill-icon flex justify-center">
                <img src={s.icon} alt={s.name} className="w-10" />
              </div>
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
                className="stack-tag"
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
