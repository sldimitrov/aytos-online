import { problemCards } from "@/data";

export default function Problem() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Къде се задъхва онлайн присъствието ви?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Повечето местни бизнеси губят клиенти, защото не изглеждат добре онлайн. Ние поправяме
            точно това.
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
  );
}
