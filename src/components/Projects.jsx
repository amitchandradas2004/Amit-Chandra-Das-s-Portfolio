// export Image from "/src/Assets/Startupforge.png";

const projects = [
  {
    num: "01",
    tag: "// Full-Stack - FrontEnd",
    title: "Startup Forge – Collaborative Startup Ecosystem Platform",
    desc: "A modern full-stack platform that connects founders with talented collaborators, enabling users to create startups, post opportunities, recruit team members, and build innovative ventures through a seamless, secure, and collaborative ecosystem.",
    stack: [
      "Next.js 15",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Stripe",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
    ],
    github:
      "https://github.com/amitchandradas2004/StartupForge-Startup-Team-Builder-Platform-ClientSide",
    live: "https://startupforge-client-swart.vercel.app",
    image: "/src/Assets/Startupforge.png",
  },
  {
    num: "02",
    tag: "//  Full-Stack - FrontEnd",
    title: "HireLoop – Modern AI-Powered Job Marketplace",
    desc: "HireLoop is a full-stack job portal that connects job seekers with recruiters through a modern, subscription-based hiring platform. It enables seamless job discovery, secure recruitment, AI-powered matching, application tracking, and premium hiring features with a fast, responsive user experience.",
    stack: [
      "Next.js 15",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Stripe",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
    ],
    github: "https://github.com/amitchandradas2004/Hireloop-Client",
    live: "https://hireloop-client-one.vercel.app",
    image: "/src/Assets/Hireloop.png",
  },
  {
    num: "03",
    tag: "// frontend",
    title: "SportNest-Sports-Facility-Booking-Management-System",
    desc: "SportNest is a full-stack sports community platform built with Next.js, MongoDB, and modern web technologies. It enables users to explore sports content, manage profiles, discover events, and connect with other sports enthusiasts. The platform features secure authentication, responsive design, real-time interactions, and a seamless user experience.",
    stack: ["NextJS", "NodeJS", "ExpressJS", "Framer-Motion", "Tailwind CSS"],
    github:
      "https://github.com/amitchandradas2004/SportNest-Sports-Facility-Booking-Management-System",
    live: "https://sportnest-black.vercel.app",
    image: "/src/Assets/Sportnest.png",
  },
  {
    num: "04",
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
    num: "05",
    tag: "// frontend . ui",
    title: "Keep Keeper",
    desc: "Keep Keeper is a simple and intuitive frontend application designed to manage and track your friend list. It helps you monitor your total friends and keep a record of your interactions with them. ",
    stack: ["React.js", "Node.js", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/amitchandradas2004/Keep-Keeper",
    live: "https://keen-keeper-ebon.vercel.app/",
    image:
      "https://i.ibb.co.com/7tTF6Vh9/Gemini-Generated-Image-5ky6mo5ky6mo5ky6.png",
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
