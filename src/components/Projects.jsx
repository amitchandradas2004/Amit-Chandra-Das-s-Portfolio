import React from "react";

const projects = [
  {
    num: "01",
    tag: "// frontend . ui",
    title: "Keep Keeper",
    desc: "Keep Keeper is a simple and intuitive frontend application designed to manage and track your friend list. It helps you monitor your total friends and keep a record of your interactions with them. ",
    stack: ["React.js", "Node.js", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/amitchandradas2004/Keep-Keeper",
    live: "https://keen-keeper-ebon.vercel.app/",
  },
  {
    num: "02",
    tag: "// frontend · ui",
    title: "AI Model Hub",
    desc: "AI Model Hub is a frontend platform for exploring a curated collection of AI models and tools. It allows users to browse features, compare options, and view subscription plans in a clean, organized interface.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/amitchandradas2004/AI-Model-Hub-By-React",
    live: "https://ai-model-hub-by-react.vercel.app/",
  },
  {
    num: "03",
    tag: "// frontend . ui",
    title: "English Janala - Vocabulary Explorer",
    desc: "English Janala - Vocabulary Explorer is a frontend application for discovering English words with clear definitions and Bangla meanings. It provides a simple, structured interface to help users quickly understand and expand their vocabulary.",
    stack: ["Tailwind CSS", "JavaScript", "Daisy UI"],
    github:
      "https://github.com/amitchandradas2004/English-Window-Vocabulary-FAQ-Explorer",
    live: "https://amitchandradas2004.github.io/English-Window-Vocabulary-FAQ-Explorer/",
  },
  {
    num: "04",
    tag: "// frontend . landing page",
    title: "Teamollo - Creative Design Agency Landing Page",
    desc: "Teamollo – Creative Design Agency Landing Page is a modern frontend layout crafted to showcase a design agency’s services and portfolio. It features a clean, visually engaging interface with well-structured sections for branding, projects, and client engagement. Designed for impact, it delivers a smooth and professional user experience.",
    stack: ["Tailwind CSS", "HTML5", "CSS3", "Daisy UI"],
    github:
      "https://github.com/amitchandradas2004/Teamollo-Responsive-Web-Application",
    live: "https://amitchandradas2004.github.io/Teamollo-Responsive-Web-Application/",
  },
  {
    num: "05",
    tag: "// css · responsive",
    title: "Portfolio Website",
    desc: "This very portfolio! Built with React.js, featuring dark glassmorphism design, neon aesthetics, smooth animations, and fully responsive layout.",
    stack: ["React.js", "CSS3", "Tailwind CSS", "DaisyUI"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">// what I've built</div>
        <h2 className="section-title">
          My <span className="grad-text-green">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="glass-card project-card" key={i}>
              <div className="project-num">{p.num}</div>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-stack">
                {p.stack.map((t, j) => (
                  <span className="stack-tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} className="proj-link">
                  GitHub →
                </a>
                <a href={p.live} className="proj-link">
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a
            href="https://github.com/amitchandradas2004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: "inline-block" }}
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
