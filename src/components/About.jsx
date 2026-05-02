import React from "react";

const highlights = [
  {
    icon: "🎓",
    label: "Education",
    value: "B.A. in English Language & Literature",
  },
  { icon: "📍", label: "Location", value: "Chattogram, Bangladesh" },
  { icon: "💼", label: "Status", value: "Fresher — Open to Work" },
  { icon: "🌐", label: "Languages", value: "Bengali, English" },
  { icon: "🎯", label: "Goal", value: "Land my first dev job" },
  { icon: "❤️", label: "Passion", value: "Building real products" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(11,15,26,0.5)",
      }}
    >
      <div className="section-wrapper">
        <div className="section-label flex justify-center md:justify-start">
          // who am I
        </div>
        <h2 className="section-title text-center md:text-start">
          About <span className="grad-text">Me</span>
        </h2>

        <div className="about-grid">
          <div>
            <div className="about-text">
              <p>
                Hi! I'm <strong>Amit Chandra Das</strong>, a passionate
                self-taught web developer from Bangladesh. I fell in love with
                coding when I first built a simple webpage and watched it come
                alive in the browser.
              </p>
              <p>
                I'm a <strong>fresher developer</strong> with a strong
                foundation in modern frontend technologies. I've spent the past
                year building projects, watching tutorials, reading docs, and
                pushing myself to learn something new every single day.
              </p>
              <p>
                My current stack revolves around <strong>React.js</strong>,{" "}
                <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
                <strong>MongoDB</strong>. I enjoy creating clean, responsive UIs
                and connecting them to real backends.
              </p>
              <p>
                I'm actively looking for my <strong>first opportunity</strong> —
                whether that's an internship, a junior role, or freelance work.
                I'm a fast learner, a team player, and I bring energy and
                curiosity to everything I do.
              </p>
            </div>

            <div className="my-10 flex flex-wrap gap-5 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">
                Hire Me
              </a>
              <a href="/resume.pdf" className="btn-outline" download>
                Download CV
              </a>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <div
                className="highlight-row rounded-xl overflow-hidden border border-gray-800"
                key={i}
              >
                <span className="h-icon">{h.icon}</span>
                <div>
                  <div className="h-label">{h.label}</div>
                  <div className="h-value">{h.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
