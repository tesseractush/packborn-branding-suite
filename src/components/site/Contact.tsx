import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "917055499136";
const EMAIL = "packborn.hq@gmail.com";

type FormState = {
  name: string;
  business: string;
  type: string;
  need: string;
  qty: string;
  budget: string;
  phone: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  business: "",
  type: "Restaurant",
  need: "Packaging",
  qty: "",
  budget: "Under ₹10,000",
  phone: "",
  notes: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const buildMessage = () =>
    [
      "Hi Packborn! I'd like a custom quote.",
      "",
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Business Type: ${form.type}`,
      `Need: ${form.need}`,
      `Quantity: ${form.qty}`,
      `Budget: ${form.budget}`,
      `Phone: ${form.phone}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean).join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.business || !form.phone) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const mailto = () => {
    const subject = encodeURIComponent("Custom Quote Request — Packborn");
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-kraft">Get in Touch</p>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Let's build packaging that represents your brand
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your requirements and we'll get back with a customized
            solution built around your brand and budget.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="reveal rounded-3xl border border-border bg-background p-7 shadow-md md:p-9"
          >
            <h3 className="font-display text-2xl text-foreground">Request a Custom Quote</h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *">
                <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" />
              </Field>
              <Field label="Business Name *">
                <input required value={form.business} onChange={update("business")} className={inputCls} placeholder="Your business" />
              </Field>
              <Field label="Business Type">
                <select value={form.type} onChange={update("type")} className={inputCls}>
                  {["Restaurant", "Café", "Cloud Kitchen", "Bakery", "Retail", "Other"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="What do you need?">
                <select value={form.need} onChange={update("need")} className={inputCls}>
                  {["Packaging", "Branding", "Both"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Quantity Requirement">
                <input value={form.qty} onChange={update("qty")} className={inputCls} placeholder="e.g. 2,000 units" />
              </Field>
              <Field label="Budget Range">
                <select value={form.budget} onChange={update("budget")} className={inputCls}>
                  {["Under ₹10,000", "₹10,000–₹50,000", "₹50,000–₹1,00,000", "Above ₹1,00,000"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Phone Number *" className="sm:col-span-2">
                <input required value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+91 ..." type="tel" />
              </Field>
              <Field label="Additional Notes" className="sm:col-span-2">
                <textarea value={form.notes} onChange={update("notes")} className={`${inputCls} min-h-[110px] resize-y`} placeholder="Anything else we should know?" />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Get My Custom Quote
              </button>
              <button
                type="button"
                onClick={mailto}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:border-foreground/30"
              >
                <Mail size={16} /> Email Instead
              </button>
            </div>

            {sent && (
              <p className="mt-4 rounded-lg bg-primary/10 px-4 py-3 text-sm text-primary">
                WhatsApp opened with your details — send the message to complete your request.
              </p>
            )}

            <p className="mt-4 text-xs text-muted-foreground">
              We'll never share your details. We'll only use them to prepare your quote.
            </p>
          </form>

          {/* Quick contact */}
          <aside className="reveal flex flex-col gap-4">
            <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <h3 className="font-display text-xl text-foreground">Prefer a Faster Response?</h3>
              <p className="mt-1 text-sm text-muted-foreground">We're a message away.</p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={20} />
                  <span className="text-sm font-semibold">Chat on WhatsApp</span>
                </span>
                <span className="text-xs opacity-90">→</span>
              </a>

              <a
                href="tel:+917055499136"
                className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-foreground transition-colors hover:border-primary/40"
              >
                <span className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <span className="text-sm font-semibold">Call our team directly</span>
                </span>
                <span className="text-xs text-muted-foreground">→</span>
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <h3 className="font-display text-lg text-foreground">Contact Info</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-kraft" /> +91 70554 99136
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-kraft" /> packborn.hq@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-kraft" /> Lucknow, India
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label}
      </span>
      {children}
    </label>
  );
}
