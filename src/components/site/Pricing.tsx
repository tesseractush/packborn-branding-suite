import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    who: "Small businesses and new brands just getting started.",
    focus: "Entry-level custom packaging with essential branding support.",
    features: ["Custom packaging basics", "Logo & label design", "Small-batch production"],
    highlight: false,
  },
  {
    name: "Growth",
    who: "Scaling businesses with increasing demand.",
    focus: "Expanded customization options and higher-volume production.",
    features: ["Full packaging suite", "Brand identity kit", "Bulk production discounts", "Priority turnaround"],
    highlight: true,
  },
  {
    name: "Premium",
    who: "Multi-outlet brands requiring large-scale production.",
    focus: "Full-service packaging and branding with priority support.",
    features: ["End-to-end branding", "Large-scale production", "Dedicated account manager", "Material consultation"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-kraft">Pricing</p>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Flexible Pricing for Every Stage of Growth
          </h2>
          <p className="mt-3 text-muted-foreground">
            We offer flexible pricing based on your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-3xl border p-7 shadow-sm transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "border-primary bg-primary text-primary-foreground shadow-lg md:scale-[1.03]"
                  : "border-border bg-card text-foreground"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-kraft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.who}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                {p.focus}
              </p>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      strokeWidth={3}
                      className={`mt-0.5 shrink-0 ${p.highlight ? "text-primary-foreground" : "text-primary"}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Request Custom Quote
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-muted-foreground">
          Not sure which plan is right for you?{" "}
          <a href="#contact" className="font-semibold text-primary hover:underline">
            Let's talk →
          </a>
        </p>
      </div>
    </section>
  );
}
