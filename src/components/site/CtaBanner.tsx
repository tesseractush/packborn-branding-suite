import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground shadow-xl md:px-16 md:py-20">
        <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Your packaging is your silent salesman.
          </h2>
          <p className="mt-4 text-primary-foreground/85 md:text-lg">
            Make every order an experience your customers remember.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:bg-background/90 hover:shadow-lg"
          >
            Start Your Branding Today
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
