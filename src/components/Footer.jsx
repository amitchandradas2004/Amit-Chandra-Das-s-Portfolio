import React from "react";

export default function Footer() {
  return (
    <>
      <div className="cta-band">
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "4px",
            color: "var(--green)",
            textTransform: "uppercase",
            marginBottom: "0.8rem",
          }}
        >
          // open to work
        </div>
        <h2 className="cta-big">
          Let's build something
          <br />
          <span className="grad-text">together.</span>
        </h2>
        <p className="cta-sub">
          I'm actively looking for my first role as a developer. Got a project
          or an opportunity? I'd love to hear from you!
        </p>
        <a href="#contact" className="btn-primary">
          Start a Conversation
        </a>
      </div>

      <footer>
        <div className="footer-logo">&lt;AMIT_CHANDRA_DAS /&gt;</div>
        <div className="footer-copy">© 2026 — Made with ❤️ &amp; React.js</div>
      </footer>
    </>
  );
}
