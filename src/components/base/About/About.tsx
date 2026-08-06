import { CalendarDays, MapPin, Monitor, Phone, Search, Users } from "lucide-react";

export default function About() {
  return (
    <section id="za-nas" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">За нас</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Двама души, една цел — повече клиенти за вашия бизнес
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ние сме малък екип от Айтос, който обича да помага на местния бизнес да расте онлайн.
              Работим лично с всеки клиент, обясняваме всичко на разбираем език и не продаваме
              услуги, които не са ви нужни.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Разбираме спецификата на града ни — знаем как клиентите в Айтос търсят услуги и как да
              сте там, където те първо поглеждат: в Google и на телефона им.
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
  );
}
