const skills = [
  {
    name: "HTML5",
    icon: "https://img.icons8.com/?size=96&id=20909&format=png",
    link: "https://www.w3schools.com/Html/",
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/?size=160&id=YjeKwnSQIBUq&format=png",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/?size=96&id=20906&format=png",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png",
    link: "https://github.com/",
  },

  {
    name: "VS Code",
    icon: "https://img.icons8.com/?size=96&id=9OGIyU8hrxW5&format=png",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "DaisyUI",
    icon: "https://img.daisyui.com/images/daisyui/mark-static.svg",
    link: "https://daisyui.com/docs/install/",
  },
  {
    name: "Framer Motion",
    icon: "https://motion.dev/favicon.svg",
    link: "https://motion.dev",
  },
  {
    name: "Hero UI",
    icon: "https://heroui.com/icons/favicon.svg",
    link: "https://heroui.com/",
  },

  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "React.js",
    icon: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "https://nextjs.org/favicon.ico?favicon.117ezoe8m31dk.ico",
    link: "https://nextjs.org/",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/?size=96&id=54087&format=png",
    link: "https://nodejs.org/en",
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/?size=96&id=PZQVBAxaueDJ&format=png",
    link: "https://expressjs.com/",
  },
  {
    name: "JWT Auth",
    icon: "https://img.icons8.com/?size=96&id=rHpveptSuwDz&format=png",
    link: "https://jwt-auth.readthedocs.io/en/develop/",
  },
  // {
  //   name: "PostgreSQL",
  //   icon: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png",
  //   link: "https://www.postgresql.org/",
  // },
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
            <a href={s.link} target="_blank">
              <div
                className="skill-item border border-gray-600 rounded-xl select-none h-full items-center"
                key={i}
              >
                <div className="skill-icon flex justify-center overflow-hidden">
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="w-12  rounded-full"
                  />
                </div>
                <div className="skill-name">{s.name}</div>
              </div>
            </a>
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
