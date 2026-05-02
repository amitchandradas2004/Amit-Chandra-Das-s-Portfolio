import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");
  const isDark = theme === "dark";

  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  /* ── Close mobile menu when clicking outside ── */
  useEffect(() => {
    function onOutsideClick(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  /* ── Close mobile menu on viewport resize to md+ ── */
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Shared class helpers ── */
  const pillBase = [
    "border transition-all duration-300",
    isDark
      ? "bg-white/[0.07] border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]"
      : "bg-white/[0.28] border-white/[0.55] shadow-[0_8px_32px_rgba(80,80,160,0.18),inset_0_1px_0_rgba(255,255,255,0.6)]",
  ].join(" ");

  const themeBtn = [
    "flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer",
    "text-[11px] font-bold tracking-[2px] uppercase",
    "border transition-all duration-200 hover:-translate-y-px whitespace-nowrap",
    isDark
      ? "bg-white/[0.09] border-white/[0.18] text-white/90 hover:bg-white/[0.16] shadow-[2px_3px_10px_rgba(0,0,0,0.2)]"
      : "bg-white/[0.35] border-white/[0.55] text-indigo-800 hover:bg-white/[0.5] shadow-[2px_3px_10px_rgba(80,80,160,0.15)]",
  ].join(" ");

  const dot = [
    "w-2.5 h-2.5 rounded-full flex-shrink-0",
    isDark
      ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
      : "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)]",
  ].join(" ");

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={[
          "fixed top-2 left-1/2 -translate-x-1/2 z-50 text-center",
          "w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-5xl",
          "flex items-center justify-around gap-5",
          "min-h-11 sm:min-h-13",
          "rounded-full px-2 sm:px-3",
          pillBase,
        ].join(" ")}
        style={{
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
        }}
      >
        <a
          href="#"
          className={[
            "min-w-0 shrink w-50 left-5",
            "font-mono font-bold tracking-[1.5px] sm:tracking-[2px] uppercase",
            "no-underline whitespace-nowrap overflow-hidden text-ellipsis",
            "transition-all duration-300",
            "text-[clamp(9px,2vw,13px)]",
            isDark
              ? "text-cyan-300 [text-shadow:0_0_14px_rgba(0,220,255,0.65)]"
              : "text-indigo-700 [text-shadow:0_0_10px_rgba(67,56,202,0.35)]",
          ].join(" ")}
        >
          &lt;AMIT CHANDRA DAS /&gt;
        </a>

        {/* ── Desktop Nav Links (hidden below md) ── */}
        <ul
          className={[
            "hidden md:flex items-center justify-center",
            "list-none rounded-full border shrink-0 gap-2 h-10",
            "transition-all duration-300",
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/25 border-white/40",
          ].join(" ")}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="">
              <a
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={[
                  "rounded-full h-8 w-20 flex items-center justify-center",
                  "text-[12px] lg:text-[13px] font-bold uppercase",
                  "no-underline border  transition-all duration-200 whitespace-nowrap",
                  activeLink === link.href
                    ? isDark
                      ? "bg-white/18 text-white text-center border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                      : "bg-white/[0.55] text-indigo-900 border-white/60"
                    : isDark
                      ? "text-white/80  text-center border-transparent hover:bg-white/12 hover:text-white hover:border-white/18"
                      : "text-indigo-800/80 border-transparent hover:bg-white/45 hover:text-indigo-900",
                ].join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right side controls ── */}
        <div className="flex items-center gap-2 shrink-0 ">
          <button
            onClick={toggleTheme}
            className={`hidden md:flex justify-center h-9 w-22 ${themeBtn}`}
          >
            <span className={dot} />
            {isDark ? "LIGHT" : "DARK"}
          </button>

          {/* Hamburger — visible below md */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={[
              "md:hidden flex flex-col items-center justify-center gap-[5px]",
              "w-9 h-9 sm:w-10 sm:h-10 rounded-xl cursor-pointer border transition-all duration-200",
              isDark
                ? "bg-white/[0.07] border-white/[0.14] hover:bg-white/[0.14]"
                : "bg-white/[0.35] border-white/[0.50] hover:bg-white/[0.50]",
            ].join(" ")}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={[
                  "block w-[18px] h-0.5 rounded-sm transition-all duration-300",
                  isDark ? "bg-white/90" : "bg-indigo-800",
                  i === 0 && menuOpen ? "translate-y-[7px] rotate-45" : "",
                  i === 1 && menuOpen ? "opacity-0 scale-x-0" : "",
                  i === 2 && menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            ))}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={dropdownRef}
        role="dialog"
        aria-label="Mobile navigation"
        className={[
          "md:hidden fixed left-1/2 -translate-x-1/2 z-40",
          "w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-5xl",
          "rounded-2xl sm:rounded-3xl border px-4 overflow-hidden",
          "transition-all duration-300 ease-in-out p-5",
          menuOpen
            ? "top-21 sm:top-23 max-h-100 opacity-100 py-5 pointer-events-auto"
            : "top-20 sm:top-22 max-h-0 opacity-0 py-0 pointer-events-none",
          isDark
            ? "bg-[rgba(10,10,30,0.85)] border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            : "bg-white/[0.55] border-white/[0.55] shadow-[0_16px_40px_rgba(80,80,160,0.18)]",
        ].join(" ")}
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <ul className="p-2 list-none flex flex-col items-center justify-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href} className="h-8 items-center flex">
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMenuOpen(false);
                }}
                className={[
                  "flex w-full rounded-full text-center items-center",
                  "text-xs font-bold tracking-[2px] uppercase",
                  "no-underline border transition-all duration-200",
                  activeLink === link.href
                    ? isDark
                      ? "bg-white/12 text-white border-white/18"
                      : "bg-white/50 text-indigo-900 border-white/45"
                    : isDark
                      ? "text-white/85 border-transparent hover:bg-white/10 hover:border-white/18 hover:text-white"
                      : "text-indigo-900/85 border-transparent hover:bg-white/40 hover:border-white/40 hover:text-indigo-900",
                ].join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Divider */}
          <li
            className={[
              "border-t pt-2",
              isDark ? "border-white/8" : "border-white/40",
            ].join(" ")}
          >
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className={[
                "w-full flex items-center gap-2.5  rounded-xl sm:rounded-2xl",
                "text-sm font-bold tracking-[2px] uppercase text-left",
                "bg-transparent border border-transparent cursor-pointer",
                "transition-all duration-200",
                isDark
                  ? "text-white/85 hover:bg-white/10 hover:border-white/18 hover:text-white"
                  : "text-indigo-900/85 hover:bg-white/40 hover:border-white/40 hover:text-indigo-900",
              ].join(" ")}
            >
              <span className={dot} />
              {isDark ? "LIGHT MODE" : "DARK MODE"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
