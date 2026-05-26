import { Package, Palette, Printer, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Custom Packaging",
    copy: "High-quality, fully customized packaging designed to reflect your brand identity.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    copy: "From logos to complete brand kits, we help your business stand out.",
  },
  {
    icon: Printer,
    title: "Bulk Printing Solutions",
    copy: "Cost-effective production with consistent quality at scale.",
  },
  {
    icon: Lightbulb,
    title: "Packaging Consultation",
    copy: "Strategic guidance to optimize packaging design, cost, and impact.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-kraft">What We Do</p>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Everything your brand needs, under one roof
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
