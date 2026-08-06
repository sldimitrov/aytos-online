import { portfolioItems } from "@/data";

export default function Portfolio() {
  return (
    <section id="raboti" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Примери</p>
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
  );
}
