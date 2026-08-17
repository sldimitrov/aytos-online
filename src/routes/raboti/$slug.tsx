import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Clock, ExternalLink, MessageCircleMore } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/data";

export const Route = createFileRoute("/raboti/$slug")({
  loader: ({ params }) => {
    const caseStudy = getCaseStudyBySlug(params.slug);
    if (!caseStudy) throw notFound();
    return caseStudy;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.seoTitle} | Айтос Онлайн` },
          { name: "description", content: loaderData.metaDescription },
          { property: "og:title", content: `${loaderData.seoTitle} | Айтос Онлайн` },
          { property: "og:description", content: loaderData.metaDescription },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Проектът не е намерен
        </h1>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Начало
          </Link>
        </div>
      </div>
    </div>
  ),
});

function CaseStudyPage() {
  const caseStudy = Route.useLoaderData();

  const otherCaseStudies = caseStudies.filter((item) => item.slug !== caseStudy.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            Айтос <span className="text-primary">Онлайн</span>
          </Link>
          <Link
            to="/"
            hash="raboti"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Всички работи
          </Link>
        </div>
      </header>

      <section className="relative px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {caseStudy.clientType === "paid" ? "Платен клиент" : "Личен проект"}
            </span>
            <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {caseStudy.category}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {caseStudy.name}
          </h1>
          <a
            href={caseStudy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {caseStudy.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border">
          <img
            src={caseStudy.coverImage}
            alt={`${caseStudy.seoTitle} — начална страница на сайта`}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Проблемът
            </p>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {caseStudy.problem}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Решението
            </p>
            <ul className="mt-3 space-y-3">
              {caseStudy.solution.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-lg leading-relaxed text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Резултатът</p>
          {caseStudy.result.status === "ready" ? (
            <>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {caseStudy.result.stat}
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {caseStudy.result.description}
              </p>
            </>
          ) : (
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <Clock className="h-5 w-5 shrink-0" />
              <p className="text-base font-medium">
                Все още е рано за резултати — ще добавим цифрите тук, щом ги видим.
              </p>
            </div>
          )}
        </div>
      </section>

      {caseStudy.gallery.length > 0 && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {caseStudy.gallery.map((image, index) => (
                <div
                  key={image}
                  className="aspect-[4/3] overflow-hidden rounded-2xl border border-border"
                >
                  <img
                    src={image}
                    alt={caseStudy.galleryAlt[index] ?? `${caseStudy.name} — снимка ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {caseStudy.testimonial.status === "ready" ? (
            <div className="rounded-3xl border border-dashed border-border p-8 text-center sm:p-10">
              <p className="text-lg italic leading-relaxed text-foreground">
                „{caseStudy.testimonial.quote}“
              </p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                — {caseStudy.testimonial.author}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border p-8 text-center sm:p-10">
              <MessageCircleMore className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">
                Отзивът от клиента предстои — ще го добавим тук веднага щом го получим.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary/10 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Искате подобен резултат за вашия бизнес?
          </h2>
          <Link
            to="/"
            hash="kontakti"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
          >
            Безплатна консултация
          </Link>
        </div>
      </section>

      {otherCaseStudies.length > 0 && (
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
              Други работи
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherCaseStudies.map((item) => (
                <Link
                  key={item.slug}
                  to="/raboti/$slug"
                  params={{ slug: item.slug }}
                  className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.cardResult}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            Айтос <span className="text-primary">Онлайн</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Айтос Онлайн. Всички права запазени.
          </p>
        </div>
      </footer>
    </div>
  );
}
