import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
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
  );
}
