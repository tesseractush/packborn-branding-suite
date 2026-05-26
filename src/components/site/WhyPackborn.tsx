import { Check } from "lucide-react";

const benefits = [
  {
    title: "Fast Turnaround Times",
    copy: "We understand that your business cannot wait. We deliver on schedule, every time.",
  },
  {
    title: "Affordable Bulk Pricing",
    copy: "Quality packaging at prices that make sense for growing businesses.",
  },
  {
    title: "End-to-End Solutions",
    copy: "From design to production — everything under one roof.",
  },
  {
    title: "Tailored for Local Businesses",
    copy: "We understand the unique challenges of local and regional brands.",
  },
  {
    title: "Scalable as You Grow",
    copy: "Our solutions evolve with your business — whether you have one outlet or twenty.",
  },
];

export function WhyPackborn() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-medium uppercase tracking-wider text-kraft">Why Packborn?</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
              Built for the way real businesses grow
            </h2>
            <p className="mt-4 text-muted-foreground">
              Local businesses deserve the same level of branding as big brands.
              Here's what makes Packborn the right partner.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="reveal flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
