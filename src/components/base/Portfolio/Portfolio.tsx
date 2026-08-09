import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data";

export default function Portfolio() {
  return (
    <section id="raboti" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Примери</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Работи за реални бизнеси
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link
              key={item.slug}
              to="/raboti/$slug"
              params={{ slug: item.slug }}
              className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={item.seoTitle}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {item.clientType === "paid" ? "Клиент" : "Личен проект"}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {item.category}
                </p>
                <h3 className="mt-1.5 font-semibold text-card-foreground">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.cardResult}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Виж случая
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
