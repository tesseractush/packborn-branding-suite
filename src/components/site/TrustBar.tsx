import { useRef } from "react";
import { useCountUp } from "./useReveal";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, value);
  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-display text-5xl font-semibold text-primary md:text-6xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-border bg-card/40 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            Trusted by 100+ Local Businesses Across Food &amp; Retail
          </h2>
          <p className="mt-3 text-muted-foreground">
            We partner with ambitious brands to transform everyday packaging
            into memorable brand experiences.
          </p>
        </div>
        <div className="reveal mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Stat value={100} suffix="+" label="Businesses Served" />
          <Stat value={500} suffix="+" label="Projects Delivered" />
          <Stat value={5} suffix="+" label="Industries Catered" />
        </div>
      </div>
    </section>
  );
}
