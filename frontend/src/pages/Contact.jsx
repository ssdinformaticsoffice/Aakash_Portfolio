import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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
    href: "tel:+9196873591",
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
  return (
    <section className="mx-auto w-full max-w-6xl px-3 py-10 sm:px-4 md:px-8 md:py-14">
      <h1 className="text-2xl font-light tracking-tight sm:text-3xl md:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-xl text-sm muted sm:text-base">
        Looking to collaborate, hire, or just say hello? Reach out — I usually
        respond within 24 hours.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-3 lg:gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className="glass-card card-hover flex items-center gap-4 p-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
              <link.Icon size={18} className="text-[#3B82F6]" />
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

        <a
          href="https://wa.me/9196873591"
          target="_blank"
          rel="noreferrer"
          className="glass-card card-hover relative flex flex-col items-center justify-center gap-3 overflow-hidden py-10 text-center sm:col-span-2 lg:col-span-3"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
          <MessageCircle size={26} className="relative text-[#3B82F6]" />
          <div className="relative">
            <h2 className="text-xl font-light tracking-tight sm:text-2xl">
              Open to opportunities & collaborations
            </h2>
            <p className="mt-2 text-sm muted">Let's build something meaningful together.</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;