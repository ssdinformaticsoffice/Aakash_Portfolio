import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

function ContactInformation() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@ssdinformatics.com",
      href: "mailto:contact@ssdinformatics.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      value: "Professional Network",
      href: "#",
    },
  ];

  return (
    <section className="bg-[var(--theme-bg)] mt-12 py-14 sm:py-20 lg:py-25">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Intro */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Contact Information
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Let's start a{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                meaningful conversation.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
              Whether the conversation is about technology, business,
              collaboration, or a new opportunity, every meaningful
              conversation starts with a simple message.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--theme-card)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        background: "var(--theme-soft)",
                        color: "var(--theme-accent)",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ color: "var(--theme-accent)" }}
                    />
                  </div>

                  <p
                    className="mt-6 text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-medium text-[var(--theme-white)]">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInformation;