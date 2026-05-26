import { useState } from "react";
import food1 from "@/assets/portfolio-food-1.jpg";
import food2 from "@/assets/portfolio-food-2.jpg";
import cafe1 from "@/assets/portfolio-cafe-1.jpg";
import cafe2 from "@/assets/portfolio-cafe-2.jpg";
import retail1 from "@/assets/portfolio-retail-1.jpg";
import retail2 from "@/assets/portfolio-retail-2.jpg";

type Category = "All" | "Food Packaging" | "Café Branding" | "Retail Packaging";

const projects: { img: string; title: string; cat: Exclude<Category, "All">; desc: string }[] = [
  { img: cafe1, title: "Café Rebranding", cat: "Café Branding", desc: "Unified cup, sleeve, and bag system" },
  { img: food1, title: "Burger House", cat: "Food Packaging", desc: "Branded boxes for dine-in and delivery" },
  { img: retail1, title: "Boutique Apparel", cat: "Retail Packaging", desc: "Premium boxed presentation" },
  { img: food2, title: "Cloud Kitchen Wraps", cat: "Food Packaging", desc: "Custom-printed paper sleeves" },
  { img: cafe2, title: "Artisan Bakery", cat: "Café Branding", desc: "Stamped kraft bag and cup system" },
  { img: retail2, title: "Lifestyle Brand", cat: "Retail Packaging", desc: "Bag + tissue wrap with brand mark" },
];

const tabs: Category[] = ["All", "Food Packaging", "Café Branding", "Retail Packaging"];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-kraft">Our Work</p>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-3 text-muted-foreground">
            A showcase of packaging and branding solutions delivered for real
            businesses — each one built around a unique brand story.
          </p>
        </div>

        <div className="reveal mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === t
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-2 text-background opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-wider">{p.cat}</p>
                  <p className="font-display text-lg">{p.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-kraft">{p.cat}</p>
                <h3 className="mt-1 font-display text-lg text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Featured case study */}
        <div className="reveal mt-14 overflow-hidden rounded-3xl border border-border bg-background shadow-md md:grid md:grid-cols-2">
          <img
            src={cafe1}
            alt="Café rebranding featured project"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="p-7 md:p-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Featured · Café Branding
            </span>
            <h3 className="mt-4 font-display text-3xl text-foreground">Café Rebranding</h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-kraft">The Challenge</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Generic, unbranded packaging that failed to communicate the café's
                  identity or create any sense of brand recognition.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-kraft">Our Solution</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  A cohesive packaging suite — branded cups, takeaway bags, and food
                  boxes — unified under a single, carefully crafted brand theme.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-kraft">The Result</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Noticeably improved brand recall among repeat customers and
                  stronger visual engagement across social media and in-store.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Start a Similar Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
