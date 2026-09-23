import React from "react";
import { CalendarCheck2, Clock3, MessageCircle } from "lucide-react";

function Availability() {
  const items = [
    {
      icon: CalendarCheck2,
      title: "Professional Discussions",
      description:
        "Open to conversations around business, technology, leadership, and meaningful opportunities.",
    },
    {
      icon: MessageCircle,
      title: "Technology & Ideas",
      description:
        "Conversations around technology, innovation, automation, and practical digital solutions.",
    },
    {
      icon: Clock3,
      title: "Response",
      description:
        "Messages are reviewed based on the nature and context of the conversation.",
    },
  ];

  return (
    <section className="bg-[var(--theme-bg)] py-12 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--theme-accent)" }}
          >
            <span
              className="h-px w-8"
              style={{ background: "var(--theme-accent)" }}
            />
            Availability
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Open to{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              meaningful conversations.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            The right conversation can lead to a useful idea, a strong
            relationship, or a meaningful opportunity.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border p-7 sm:p-8"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--theme-soft)",
                    color: "var(--theme-accent)",
                  }}
                >
                  <Icon size={21} />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Availability;