import React, { useEffect, useRef, useState } from "react";
import Navbarnew from "./components/Navbarnew";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const mx = useRef(0);
  const my = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const move = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    let animId;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = rx.current + "px";
      ring.style.top = ry.current + "px";
      animId = requestAnimationFrame(animate);
    };

    const addHover = () => {
      cursor.classList.add("hovered");
      ring.classList.add("hovered");
    };
    const removeHover = () => {
      cursor.classList.remove("hovered");
      ring.classList.remove("hovered");
    };

    document.addEventListener("mousemove", move);
    animId = requestAnimationFrame(animate);

    const attachHovers = () => {
      document
        .querySelectorAll(
          "a, button, .project-card, .skill-item, .social-link, .highlight-row",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
    };
    attachHovers();
    const observer = new MutationObserver(attachHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* Background effects */}
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Page sections */}
      <Navbarnew theme={theme} toggleTheme={toggleTheme}></Navbarnew>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
