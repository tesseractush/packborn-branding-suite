import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-packaging.jpg";
import logo from "@/assets/packborn-logo.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="absolute inset-0 paper-grain opacity-40 pointer-events-none" />
      <img
        src={logo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 w-[520px] opacity-[0.06] md:opacity-[0.08]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-14 md:px-8">
        <div className="reveal">
          <span className="inline-flex items-center rounded-full border border-kraft/40 bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-kraft">
            Packaging · Branding · Production
          </span>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Packaging that{" "}
            <span className="text-primary italic">Builds Brands</span>,
            <br className="hidden sm:block" /> Not Just Boxes
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Custom packaging and branding solutions designed for restaurants,
            cafés, cloud kitchens, and growing local businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Get Custom Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-card"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <img
              src={hero}
              alt="Branded kraft paper packaging on a café counter"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
