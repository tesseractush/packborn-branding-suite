import { UtensilsCrossed, Coffee, ChefHat, Croissant, ShoppingBag } from "lucide-react";

const items = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Coffee, label: "Cafés" },
  { icon: ChefHat, label: "Cloud Kitchens" },
  { icon: Croissant, label: "Bakeries" },
  { icon: ShoppingBag, label: "Retail Brands" },
];

export function Industries() {
  return (
    <section id="industries" className="bg-card/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-foreground md:text-5xl">
            Industries We Serve
          </h2>
          <p className="mt-3 text-muted-foreground">We work with a wide range of businesses:</p>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          {items.map((i) => (
            <div
              key={i.label}
              className="inline-flex items-center gap-2 rounded-full border border-kraft/30 bg-background px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <i.icon size={16} className="text-kraft" />
              {i.label}
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-muted-foreground">
          Whether you are starting out or scaling up, we tailor solutions to your needs.
        </p>
      </div>
    </section>
  );
}
