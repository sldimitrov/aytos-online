import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { sendContactMessage } from "../lib/contact.functions";

import {
  Monitor,
  QrCode,
  CalendarDays,
  Search,
  HelpCircle,
  RefreshCw,
  Star,
  Users,
  MapPin,
  Phone,
  Mail,
  Instagram,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import cafeMockup from "../assets/portfolio-cafe.jpg";
import salonMockup from "../assets/portfolio-salon.jpg";
import gymMockup from "../assets/portfolio-gym.jpg";
import autoMockup from "../assets/portfolio-auto.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Айтос Онлайн | Правим бизнеса ви видим" },
      {
        name: "description",
        content:
          "Правим бързи, красиви и работещи сайтове за малки бизнеси — кафенета, салони, фитнеси, бутици и сервизи в Айтос. Без сложни процеси и скрити такси. Безплатна консултация.",
      },
      {
        property: "og:title",
        content: "Айтос Онлайн | Правим бизнеса ви видим",
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

const navLinks = [
  { label: "Услуги", href: "#uslugi" },
  { label: "Работи", href: "#raboti" },
  { label: "За нас", href: "#za-nas" },
  { label: "Контакти", href: "#kontakti" },
];

const problemCards = [
  {
    icon: HelpCircle,
    title: "Нямате сайт?",
    description:
      "Клиентите не могат да ви намерят онлайн. Създаваме бърз, ясен сайт, който представя бизнеса ви професионално още от първия ден.",
  },
  {
    icon: RefreshCw,
    title: "Сайтът ви е остарял?",
    description:
      "Стара визия и бавно зареждане отблъскват клиентите. Обновяваме дизайна, скоростта и мобилната версия, за да продавате по-добре.",
  },
  {
    icon: Star,
    title: "Нямате онлайн отзиви?",
    description:
      "Липсата на ревюта намалява доверието. Внедряваме лесен начин клиентите ви да оставят Google отзиви с едно докосване.",
  },
];

const services = [
  {
    icon: Monitor,
    title: "Дизайн на уебсайт",
    description:
      "Съвременен, адаптивен сайт, който работи перфектно на телефон, таблет и компютър.",
  },
  {
    icon: QrCode,
    title: "Google отзиви с QR",
    description:
      "QR код и табелка, с които доволните клиенти оставят отзив за секунди директно в Google.",
  },
  {
    icon: CalendarDays,
    title: "Онлайн резервации",
    description:
      "Интеграция на система за записване на часове — идеална за салони, фитнеси и сервизи.",
  },
  {
    icon: Search,
    title: "SEO основи",
    description:
      "Оптимизация, за да ви намират в Google при търсене в Айтос и околността.",
  },
];

const portfolioItems = [
  {
    image: cafeMockup,
    name: "Кафене Айтос",
    result: "Сайт + меню; +40% запитвания за 2 месеца",
  },
  {
    image: salonMockup,
    name: "Салон за красота Елеганс",
    result: "Онлайн резервации; спестени 10+ часа телефонни обаждания седмично",
  },
  {
    image: gymMockup,
    name: "Фитнес Айтос Спорт",
    result: "Нов сайт с график; 30% повече посещения от Google",
  },
  {
    image: autoMockup,
    name: "Автосервиз Мотор",
    result: "Google отзиви + QR; рейтинг от 3.8 на 4.7 за 3 месеца",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConsultPopup, setShowConsultPopup] = useState(false);
  const sendContact = useServerFn(sendContactMessage);

  useEffect(() => {
    const timer = setTimeout(() => setShowConsultPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await sendContact({ data: formState });
      setSubmitted(true);
      setFormState({ name: "", business: "", message: "" });
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Възникна грешка. Опитайте отново или ни позвънете.",
      );
    } finally {
      setSending(false);
    }
  };


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
      <section className="relative flex min-h-screen flex-col justify-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary sm:text-base">
            Локален уеб дизайн в Айтос
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Уебсайтове, които печелят повече клиенти за бизнеса ви в{" "}
            <span className="text-gradient">Айтос</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Правим бързи, красиви и работещи сайтове за малки бизнеси — кафенета, салони, фитнеси,
            бутици и сервизи. Без сложни процеси и скрити такси.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
            >
              Безплатна консултация
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#raboti"
              className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-accent"
            >
              Вижте примери
            </a>
          </div>
        </div>
      </section>

      {/* Problem / Value section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Къде се задъхва онлайн присъствието ви?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Повечето местни бизнеси губят клиенти, защото не изглеждат добре онлайн. Ние
              поправяме точно това.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="card-hover rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="raboti" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Примери
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Работи за местни бизнеси
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item) => (
              <div
                key={item.name}
                className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Сайт за ${item.name}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="za-nas" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                За нас
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Двама души, една цел — повече клиенти за вашия бизнес
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ние сме малък екип от Айтос, който обича да помага на местния бизнес да расте
                онлайн. Работим лично с всеки клиент, обясняваме всичко на разбираем език и не
                продаваме услуги, които не са ви нужни.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Разбираме спецификата на града ни — знаем как клиентите в Айтос търсят услуги и как
                да сте там, където те първо поглеждат: в Google и на телефона им.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">Базирани в Айтос, България</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">Личен подход, двама души екип</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <Monitor className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Дизайн и разработка</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Чист код, бързи сайтове и дизайн, който продава.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Локална видимост</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    SEO и Google Business оптимизация за Айтос.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Автоматизация</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Резервации, запитвания и отзиви — без ръчна работа.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Поддръжка</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Винаги на разположение, когато имате нужда от помощ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakti" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Контакти
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Пишете ни за безплатна консултация
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Разкажете ни накратко за бизнеса си. Ще ви отговорим до 24 часа.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="tel:+359876533802"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium">+359 876 533 802</span>
                </a>
                <a
                  href="mailto:aytosonline@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">aytosonline@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Айтос, България</span>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="https://instagram.com/aytos.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  <Instagram className="h-4 w-4" />
                  @aytos.online
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    Благодарим ви за запитването!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Ще се свържем с вас до 24 часа.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-primary hover:underline"
                  >
                    Изпратете ново запитване
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-card-foreground">
                      Вашето име
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-2 block text-sm font-medium text-card-foreground">
                      Бизнес / дейност
                    </label>
                    <input
                      id="business"
                      type="text"
                      required
                      value={formState.business}
                      onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Например: кафене, салон, автосервиз"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-card-foreground">
                      Съобщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Разкажете ни накратко какъв сайт търсите..."
                    />
                  </div>
                  {error && (
                    <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Изпращане..." : "Изпратете запитване"}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-sm font-semibold text-card-foreground">
              Искате повече клиенти?
            </p>
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
