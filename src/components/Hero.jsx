import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AmitImage from "../Assets/Amit.jpg";
import { Button } from "@heroui/react";

const roles = [
  "Full-Stack Developer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

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
    //   <section
    //     className="
    //   container
    //   mx-auto
    //   py-20
    //   px-5
    //   justify-center
    // "
    //   >
    /* Background Glow */
    /* <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      </motion.div> */

    <div className="mx-auto flex flex-col-reverse md:flex-row justify-center py-20 gap-5 px-5 md:px-0">
      {/* LEFT */}
      <motion.div
        className="text-center md:text-start left-div"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="
          
  inline-flex
  items-center
  justify-center
  gap-2
  text-black
  w-85
  rounded-full
  border
  border-cyan-500/30
  mb-6
  bg-cyan-100
"
        >
          🚀 Available for internships & opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="
              text-[clamp(2.2rem,6vw,5rem)]
              font-extrabold
              leading-[1.05]
           left-div-h1

            "
        >
          <div>Hey, I'm</div>
          <div className="grad-text">Amit Chandra Das.</div>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="
              font-mono
              text-[0.9rem]
              tracking-[2px]
              my-7
            "
        >
          I'm a <span className="text-cyan-400 font-semibold">{typed}</span>
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
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="
              text-[1rem]
              leading-[1.9]
           md:text-start
              mb-9
              mx-auto
              md:mx-0
              text-gray-400 text-center
            "
        >
          A passionate fresher developer who loves building clean, functional,
          and user-friendly web experiences.
          <br /> I enjoy turning ideas into real products using modern web
          technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <Button color="primary" className={"w-30"}>
            <a href="#projects">View My Work</a>
          </Button>

          <Button variant="primary" className={"w-30"}>
            <a href="#contact">Let's Talk</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="w-full md:w-80 lg:w-90"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="glass-card profile-card rounded-xl overflow-hidden"
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="status">
            <span className="dot" />
            Open to opportunities
          </div>

          <div className="profile-avatar">
            <motion.img
              src={AmitImage}
              alt="Image of Amit Chandra Das"
              className="rounded-full select-none"
            />
          </div>

          <div className="text-2xl font-bold mb-1">Amit Chandra Das</div>

          <div className="profile-handle">// Full-Stack Developer</div>

          <div className="stat-row">
            <div className="stat-cell">
              <div className="stat-num grad-text">5+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React.js",
              "MongoDB",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "Framer Motion",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="stack-tag"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>

    /* Scroll Indicator * 
      /* <div className="absolute bottom-10 left-16 flex flex-col items-center gap-1.5">
        <motion.div
          className="w-px h-11"
          animate={{
            scaleY: [1, 1.4, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            background: "linear-gradient(to bottom, var(--cyan), transparent)",
          }}
        />

        <span className="font-mono text-[0.55rem] tracking-[3px] uppercase">
          Scroll
        </span>
      </div> */
    // </section>
  );
}
