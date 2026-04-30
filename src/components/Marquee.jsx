import React from "react";

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "DaisyUI",
  "MongoDB",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
];

export default function Marquee() {
  const doubled = [...stack, ...stack];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
