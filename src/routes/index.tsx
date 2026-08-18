import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  Monitor,
  QrCode,
  CalendarDays,
  Search,
  HelpCircle,
  RefreshCw,
  Star,
  Users,
  Instagram,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

import { navLinks, problemCards, services } from "@/data";
import About from "@/components/base/About/About.tsx";
import Contact from "@/components/base/Contact/Contact.tsx";
import FAQ from "@/components/base/FAQ/FAQ.tsx";
import Portfolio from "@/components/base/Portfolio/Portfolio.tsx";
import Problem from "@/components/base/Problem/Problem.tsx";
import Hero from "@/components/base/Hero/Hero.tsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Уебсайтове за бизнес в Айтос | Айтос Онлайн" },
      {
        name: "description",
        content:
          "Изработваме уебсайтове за малък бизнес в Айтос — кафенета, салони, фитнеси, автосервизи и строителни фирми. Google Business Profile оптимизация и QR код.",
      },
      {
        property: "og:title",
        content: "Уебсайтове за бизнес в Айтос | Айтос Онлайн",
      },
      {
        property: "og:description",
        content:
          "Правим бързи, красиви и работещи сайтове за малки бизнеси — кафенета, салони, фитнеси, бутици и сервизи в Айтос.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConsultPopup, setShowConsultPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConsultPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            Айтос <span className="text-primary">Онлайн</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
            >
              Безплатна консултация
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Затвори меню" : "Отвори меню"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakti"
                className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Безплатна консултация
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <Hero />

      {/* Problem / Value section */}
      <Problem />

      {/* Services */}
      <section id="uslugi" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Какво правим
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Всичко необходимо, за да ви намерят и изберат
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* About */}
      <About />

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            Айтос <span className="text-primary">Онлайн</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Айтос Онлайн. Всички права запазени.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/aytos.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating consultation CTA */}
      {showConsultPopup && (
        <div className="fixed bottom-4 right-4 z-50 flex max-w-xs animate-in fade-in slide-in-from-bottom-4 items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-2xl sm:bottom-6 sm:right-6">
          <div className="inline-flex shrink-0 rounded-full bg-primary/10 p-2.5 text-primary">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-card-foreground">Искате повече клиенти?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Получете безплатна консултация за вашия бизнес.
            </p>
            <a
              href="#kontakti"
              onClick={() => setShowConsultPopup(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Безплатна консултация
            </a>
          </div>
          <button
            type="button"
            onClick={() => setShowConsultPopup(false)}
            aria-label="Затвори"
            className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
