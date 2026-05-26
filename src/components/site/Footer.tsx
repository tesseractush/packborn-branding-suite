import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/packborn-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Packborn logo" className="h-9 w-9 rounded-md" />
              <span className="font-display text-xl font-semibold text-foreground">Packborn</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Packaging that Builds Brands, Not Just Boxes.
            </p>
            <a
              href="https://instagram.com/packborn2026"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              <Instagram size={16} /> @packborn2026
            </a>
          </div>

          <FooterCol title="Quick Links">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#portfolio">Portfolio</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#contact">Get a Quote</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink href="#services">Custom Packaging</FooterLink>
            <FooterLink href="#services">Branding &amp; Design</FooterLink>
            <FooterLink href="#services">Bulk Production</FooterLink>
            <FooterLink href="#services">Packaging Consultation</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <li className="flex items-center gap-2 text-sm text-foreground/80">
              <Phone size={14} className="text-kraft" /> +91 70554 99136
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground/80">
              <Mail size={14} className="text-kraft" /> packborn.hq@gmail.com
            </li>
            <li>
              <a
                href="https://wa.me/917055499136"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                <MessageCircle size={14} className="text-kraft" /> WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground/80">
              <MapPin size={14} className="text-kraft" /> Lucknow, India
            </li>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2025 Packborn. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
        {children}
      </a>
    </li>
  );
}
