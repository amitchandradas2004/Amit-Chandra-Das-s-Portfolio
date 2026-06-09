const projects = [
  {
    num: "01",
    tag: "// frontend",
    title: "SportNest-Sports-Facility-Booking-Management-System",
    desc: "SportNest is a full-stack sports community platform built with Next.js, MongoDB, and modern web technologies. It enables users to explore sports content, manage profiles, discover events, and connect with other sports enthusiasts. The platform features secure authentication, responsive design, real-time interactions, and a seamless user experience.",
    stack: ["NextJS", "NodeJS", "ExpressJS", "Framer-Motion", "Tailwind CSS"],
    github:
      "https://github.com/amitchandradas2004/SportNest-Sports-Facility-Booking-Management-System",
    live: "https://sportnest-black.vercel.app",
    image: "https://ibb.co/bqz1MbQ",
  },
  {
    num: "02",
    tag: "// frontend · ui",
    title: "AI Model Hub",
    desc: "AI Model Hub is a frontend platform for exploring a curated collection of AI models and tools. It allows users to browse features, compare options, and view subscription plans in a clean, organized interface.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/amitchandradas2004/AI-Model-Hub-By-React",
    live: "https://ai-model-hub-by-react.vercel.app/",
    image:
      "https://i.ibb.co.com/tPP2j1Nr/Gemini-Generated-Image-ozjcwqozjcwqozjc.png",
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
    image:
      "https://i.ibb.co.com/4hG0v4G/Gemini-Generated-Image-dhxvpudhxvpudhxv.png",
  },
  {
    num: "04",
    tag: "// frontend . ui",
    title: "Keep Keeper",
    desc: "Keep Keeper is a simple and intuitive frontend application designed to manage and track your friend list. It helps you monitor your total friends and keep a record of your interactions with them. ",
    stack: ["React.js", "Node.js", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/amitchandradas2004/Keep-Keeper",
    live: "https://keen-keeper-ebon.vercel.app/",
    image:
      "https://i.ibb.co.com/7tTF6Vh9/Gemini-Generated-Image-5ky6mo5ky6mo5ky6.png",
  },
  {
    num: "05",
    tag: "// css · responsive",
    title: "Portfolio Website",
    desc: "This very portfolio! Built with React.js, featuring dark glassmorphism design, neon aesthetics, smooth animations, and fully responsive layout.",
    stack: ["React.js", "CSS3", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/amitchandradas2004/Portfolio-Website",
    live: "https://amitchandradasportfolio.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper  fade-up d3">
        <div className="section-label flex justify-center md:justify-start">
          // what I've built
        </div>
        <h2 className="section-title text-center md:text-start">
          My <span className="grad-text-green">Projects</span>
        </h2>

        <div className="projects-grid profile-card-1">
          {projects.map((p, i) => (
            <div
              className="glass-card project-card rounded-xl shadow-2xl"
              key={i}
            >
              <div className="project-num">{p.num}</div>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <div>
                <img
                  src={p.image}
                  alt={p.name}
                  className="rounded-xl select-none"
                />
              </div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-stack">
                {p.stack.map((t, j) => (
                  <span className="stack-tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links ">
                <a href={p.github} className="stack-tag-live">
                  GitHub →
                </a>
                <a href={p.live} className="stack-tag-live">
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
