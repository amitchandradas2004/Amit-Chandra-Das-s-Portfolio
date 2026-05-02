import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ilqj5v9";
const EMAILJS_TEMPLATE_ID = "template_xa0g4oq";
const EMAILJS_PUBLIC_KEY = "NBW6pcRoNIiXUDqtU";

const socials = [
  {
    icon: "💼",
    name: "LinkedIn",
    handle: "linkedin.com/in/amitchandradas2004",
    href: "https://www.linkedin.com/in/amitchandradas2004/",
  },
  {
    icon: "🐙",
    name: "GitHub",
    handle: "github.com/amitchandradas2004",
    href: "https://github.com/amitchandradas2004",
  },
  {
    icon: "✉️",
    name: "Email",
    handle: "acdamit2004@gmail.com",
    href: "mailto:acdamit2004@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "success"
        ? "✓ Message Sent!"
        : status === "error"
          ? "✗ Failed — Try Again"
          : "Send Message →";

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label flex justify-center md:justify-start">
          // lets connect
        </div>
        <h2 className="section-title text-center md:text-start">
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

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
                disabled={status === "sending"}
              >
                {buttonLabel}
              </button>
            </div>
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
              I am always happy to chat — whether it is about a potential job,
              project idea, a collab, or just saying hello. My inbox is open!
            </p>

            <div className="social-links">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="social-link"
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
