import { Quote } from "lucide-react";

const steps = [
  { n: "01", title: "Understand", copy: "We start by learning about your business, your audience, and your goals. No generic solutions." },
  { n: "02", title: "Design", copy: "Our team creates packaging and branding concepts tailored specifically to your brand." },
  { n: "03", title: "Prototype", copy: "We refine designs based on your feedback and finalize the best solution." },
  { n: "04", title: "Production", copy: "We manufacture with a strong focus on quality, consistency, and material integrity." },
  { n: "05", title: "Delivery", copy: "Timely delivery so your business operations run smoothly — no delays." },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-kraft">About Packborn</p>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            We believe packaging is a brand's silent salesman
          </h2>
        </div>

        <div className="reveal mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-1">
            <h3 className="font-display text-xl text-foreground">Our Story</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Packborn was created to help local businesses move beyond basic
              packaging and build strong, recognizable brands. Every box, bag,
              and label that leaves your counter is a message your brand sends
              to the world. We make sure that message is worth remembering.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-xl text-foreground">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To make premium packaging and branding accessible to every
              growing business — regardless of size or stage.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-xl text-foreground">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To become the most trusted packaging and branding partner for
              small and medium businesses across India.
            </p>
          </div>
        </div>

        {/* Founder quote */}
        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-kraft/30 bg-gradient-to-br from-card to-background">
          <div className="relative p-8 md:p-12">
            <Quote className="absolute right-6 top-6 text-primary/15" size={80} />
            <p className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
              “We started Packborn with a simple idea — local businesses deserve
              the same level of branding as big brands. Every box, bag, and
              label is an opportunity to tell a story. Our goal is to help
              businesses tell that story better.”
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-kraft">
              — Ankit Srivastava, Founder of Packborn
            </p>
          </div>
        </div>

        {/* Process timeline */}
        <div className="reveal mt-20">
          <div className="text-center">
            <h3 className="font-display text-3xl text-foreground md:text-4xl">How We Work</h3>
            <p className="mt-2 text-muted-foreground">
              A streamlined, collaborative process from start to finish.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-5">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-semibold text-primary">{s.n}</span>
                  {i < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border md:block" />
                  )}
                </div>
                <h4 className="mt-3 font-display text-lg text-foreground">{s.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
