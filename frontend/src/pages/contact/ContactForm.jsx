import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("error");
      return;
    }

    // Backend integration baad me yahan add kar sakte ho.
    setStatus("success");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[var(--theme-bg-secondary)] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Send a Message
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Have an idea?{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                Let's talk.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)]">
              Share your requirements, idea, or opportunity. A clear message
              is the first step toward a meaningful conversation.
            </p>

            <div
              className="mt-8 rounded-3xl border p-6"
              style={{
                background: "var(--theme-card)",
                borderColor: "var(--theme-border)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Communication
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
                Please provide enough context so the conversation can begin
                with a clear understanding of your requirements.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl border p-6 sm:p-8 lg:p-10"
            style={{
              background: "var(--theme-card)",
              borderColor: "var(--theme-border)",
            }}
          >
            {status === "success" && (
              <div
                className="mb-6 flex items-start gap-3 rounded-2xl border p-4"
                style={{
                  background: "var(--theme-soft)",
                  borderColor: "var(--theme-border-strong)",
                }}
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--theme-accent)" }}
                />

                <div>
                  <p className="text-sm font-semibold text-[var(--theme-white)]">
                    Message ready
                  </p>

                  <p className="mt-1 text-sm text-[var(--theme-muted)]">
                    Your message has been submitted successfully.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                className="mb-6 flex items-start gap-3 rounded-2xl border p-4"
                style={{
                  background: "var(--theme-soft)",
                  borderColor: "var(--theme-border-strong)",
                }}
              >
                <AlertCircle
                  size={20}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--theme-accent)" }}
                />

                <div>
                  <p className="text-sm font-semibold text-[var(--theme-white)]">
                    Please complete the form
                  </p>

                  <p className="mt-1 text-sm text-[var(--theme-muted)]">
                    All fields are required.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--theme-text)]">
                    Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--theme-dim)" }}
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-2xl border bg-transparent py-3.5 pl-11 pr-4 text-sm text-[var(--theme-white)] outline-none transition-all placeholder:text-[var(--theme-dim)] focus:border-[var(--theme-accent)]"
                      style={{
                        borderColor: "var(--theme-border)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--theme-text)]">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--theme-dim)" }}
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border bg-transparent py-3.5 pl-11 pr-4 text-sm text-[var(--theme-white)] outline-none transition-all placeholder:text-[var(--theme-dim)] focus:border-[var(--theme-accent)]"
                      style={{
                        borderColor: "var(--theme-border)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--theme-text)]">
                    Phone
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--theme-dim)" }}
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className="w-full rounded-2xl border bg-transparent py-3.5 pl-11 pr-4 text-sm text-[var(--theme-white)] outline-none transition-all placeholder:text-[var(--theme-dim)] focus:border-[var(--theme-accent)]"
                      style={{
                        borderColor: "var(--theme-border)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--theme-text)]">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-2xl border bg-transparent px-4 py-3.5 text-sm text-[var(--theme-white)] outline-none transition-all placeholder:text-[var(--theme-dim)] focus:border-[var(--theme-accent)]"
                    style={{
                      borderColor: "var(--theme-border)",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--theme-text)]">
                  Message
                </label>

                <div className="relative">
                  <MessageSquare
                    size={17}
                    className="absolute left-4 top-4"
                    style={{ color: "var(--theme-dim)" }}
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your idea, requirement, or opportunity..."
                    className="w-full resize-none rounded-2xl border bg-transparent py-3.5 pl-11 pr-4 text-sm leading-7 text-[var(--theme-white)] outline-none transition-all placeholder:text-[var(--theme-dim)] focus:border-[var(--theme-accent)]"
                    style={{
                      borderColor: "var(--theme-border)",
                    }}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--theme-accent)",
                  boxShadow: "0 12px 35px var(--theme-glow)",
                }}
              >
                Send Message
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;