import React, { useState } from "react";

const socials = [
  {
    icon: "💼",
    name: "LinkedIn",
    handle: "https://www.linkedin.com/in/amitchandradas2004/",
    href: "https://www.linkedin.com/in/amitchandradas2004/",
  },
  {
    icon: "🐙",
    name: "GitHub",
    handle: "https://github.com/amitchandradas2004",
    href: "https://github.com/amitchandradas2004",
  },
  // { icon: "🐦", name: "Twitter / X", handle: "@yourhandle", href: "#" },
  {
    icon: "✉️",
    name: "Email",
    handle: "acdamit2004@gmail.com",
    href: "mailto:acdamit2004@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">// let's connect</div>
        <h2 className="section-title">
          Get In <span className="grad-text">Touch</span>
        </h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>

          <div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.85,
                marginBottom: "1.5rem",
              }}
            >
              I'm always happy to chat — whether it's about a potential job, a
              project idea, a collab, or just saying hello. My inbox is open! 🙌
            </p>
            <div className="social-links">
              {socials.map((s, i) => (
                <a
                  href={s.href}
                  className="social-link"
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{s.icon}</span>
                  <div>
                    <div className="social-name">{s.name}</div>
                    <div className="social-handle">{s.handle}</div>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
