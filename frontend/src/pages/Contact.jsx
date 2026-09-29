import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:2000/api").replace(/\/+$/, "");


const LINKS = [
  {
    label: "Email",
    value: "ssdinformatics.dir@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ssdinformatics.dir@gmail.com",
    Icon: Mail,
    external: true,
  },
  {
    label: "Phone",
    value: "+91 9196873591",
    href: "tel:+919196873591",
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Lucknow, India",
    href: "/contact",
    Icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akash-verma",
    href: "https://www.linkedin.com/in/akashverma7054",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/akash-verma",
    href: "https://github.com/akashverma7054",
    Icon: FaGithub,
    external: true,
  },
];

function Contact() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-3 py-10 sm:px-4 md:px-8 md:py-14">

      {/* Heading */}
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--theme-accent)]">
          Get in touch
        </p>

        <h1 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
          Contact
        </h1>

        <p className="mt-3 max-w-xl text-sm muted sm:text-base">
          Whether you want to collaborate, hire, or discuss an
          opportunity, feel free to reach out.
        </p>
      </div>

      {/* Contact Links */}
      <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className="glass-card card-hover flex items-center gap-4 p-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--card-border)] bg-[var(--card)]">
              <link.Icon
                size={18}
                className="text-[var(--theme-accent)]"
              />
            </span>

            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-soft">
                {link.label}
              </span>

              <span className="block truncate text-sm font-medium">
                {link.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card)]">

        {/* Top Accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--theme-accent)] to-transparent" />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Content */}
          <div className="relative flex flex-col justify-between border-b border-[var(--card-border)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--theme-soft),transparent_55%)]" />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--theme-accent)]">
                Let's connect
              </span>

              <h2 className="mt-4 max-w-sm text-3xl font-light leading-tight sm:text-4xl">
                Have an idea?
                <br />
                <span className="text-soft">
                  Let's talk.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 muted">
                Whether it's a business opportunity, technology
                collaboration, or a new idea, I'd be happy to hear
                from you.
              </p>
            </div>

            {/* Bottom Info */}
            <div className="relative mt-10 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--card-border)] bg-[var(--card)]">
                <MessageCircle
                  size={18}
                  className="text-[var(--theme-accent)]"
                />
              </div>

              <div>
                <p className="text-xs text-soft">
                  Response time
                </p>

                <p className="text-sm font-medium">
                  Usually within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-medium text-soft">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="field"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-medium text-soft">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="field"
                />
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-soft">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="field"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-soft">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your idea…"
                  rows={6}
                  required
                  className="field resize-none"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--theme-accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--theme-accent-strong)] hover:shadow-lg hover:shadow-[var(--theme-glow)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919196873591"
        target="_blank"
        rel="noreferrer"
        className="glass-card card-hover relative mt-3 flex flex-col items-center justify-center gap-3 overflow-hidden py-10 text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,var(--theme-soft),transparent_60%)]" />

 {/* 🔵 Blue Scanning Line */}
  <div
    className="
      map-scan-line
      pointer-events-none
      absolute
      bottom-0
      top-0
      w-px
      bg-blue-400/70
      shadow-[0_0_10px_#008cff]
    "
  />

        <MessageCircle
          size={26}
          className="relative text-[var(--theme-accent)]"
        />

        <div className="relative">
          <h2 className="text-xl font-light tracking-tight sm:text-2xl">
            Open to opportunities & collaborations
          </h2>

          <p className="mt-2 text-sm muted">
            Let's build something meaningful together.
          </p>
        </div>
      </a>

    </section>
  );
}

export default Contact;

