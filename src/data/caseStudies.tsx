import burgasFrameCover from "@/assets/case-studies/burgas-frame-cover.jpg";
import burgasFrame1 from "@/assets/case-studies/burgas-frame-1.jpg";
import burgasFrame2 from "@/assets/case-studies/burgas-frame-2.jpg";
import burgasFrame3 from "@/assets/case-studies/burgas-frame-3.jpg";
import gutterMatterCover from "@/assets/case-studies/gutter-matter-cover.jpg";
import gutterMatterSite from "@/assets/case-studies/gutter-matter-site.jpg";
import gutterMatter1 from "@/assets/case-studies/gutter-matter-1.jpg";
import gutterMatter2 from "@/assets/case-studies/gutter-matter-2.jpg";
import ivanRusevCover from "@/assets/case-studies/ivan-rusev-cover.jpg";
import ivanRusev1 from "@/assets/case-studies/ivan-rusev-1.jpg";
import ivanRusev2 from "@/assets/case-studies/ivan-rusev-2.jpg";
import ivanRusev3 from "@/assets/case-studies/ivan-rusev-3.jpg";

export type Testimonial = { status: "tbd" } | { status: "ready"; quote: string; author: string };

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  clientType: "paid" | "free";
  url: string;
  cardResult: string;
  problem: string;
  solution: string[];
  result: { stat: string; description: string };
  testimonial: Testimonial;
  coverImage: string;
  gallery: string[];
  /** Keyword-pattern page title, e.g. "Уебсайт за строителна фирма — Burgas Frame" */
  seoTitle: string;
  /** ~150-160 char meta description for this case study page */
  metaDescription: string;
  /** Alt text per gallery image, same order as `gallery` */
  galleryAlt: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "burgas-frame",
    name: "Burgas Frame",
    category: "Строителство на дървени къщи",
    clientType: "paid",
    url: "https://www.burgasframe.com/",
    cardResult: "50+ лийда от калкулатора за цена",
    problem:
      "Преди да заработим заедно, Burgas Frame имаха само страница във Facebook — без собствен сайт, без структуриран начин да показват завършени обекти и без начин да събират данни от заинтересовани купувачи.",
    solution: [
      "Витрина с проекти (Проекти), в която клиентите разглеждат завършени къщи",
      "Страница „Как строим“, която обяснява процеса и изгражда доверие преди първия разговор",
      "Интерактивен калкулатор за цена на къща, който събира данни от посетителите и ги превръща в квалифицирани лийдове",
      "Настройка на Google Business Profile",
    ],
    result: {
      stat: "50+ лийда",
      description:
        "Калкулаторът генерира над 50 запитвания, всяко от които е последвано с обаждане. Посетителите вече разглеждат страницата с проекти преди да се свържат — поведение, което не съществуваше, докато присъствието им бе само във Facebook.",
    },
    testimonial: {
      status: "ready",
      quote:
        "Преди имахме само Facebook страница и хората трудно виждаха какво реално строим. Сега клиентите разглеждат проектите ни онлайн и ни звънят вече убедени. Калкулаторът ни докара над 50 запитвания — нещо, което просто нямаше как да се случи преди.",
      author: "Burgas Frame",
    },
    coverImage: burgasFrameCover,
    gallery: [burgasFrame1, burgasFrame2, burgasFrame3],
    seoTitle: "Уебсайт за строителна фирма — Burgas Frame",
    metaDescription:
      "Уебсайт за Burgas Frame — строителна фирма за дървени къщи в Бургаски регион. Калкулатор за цена, който докара над 50 запитвания.",
    galleryAlt: [
      "Завършена дървена къща, изградена от Burgas Frame",
      "Дървена конструкция на къща в процес на изграждане от Burgas Frame",
      "Проект на дървена къща на Burgas Frame — външен изглед",
    ],
  },
  {
    slug: "gutter-matter",
    name: "Gutter Matter",
    category: "Услуга за почистване на улуци (Обединеното кралство)",
    clientType: "paid",
    url: "https://guttermatter.com/",
    cardResult: "10+ входящи запитвания",
    problem:
      "Нямаха онлайн присъствие, което да изгражда доверие или да улеснява местните собственици на имоти да се свържат за почистване на улуци.",
    solution: [
      "Пълен сайт със страници за всяка услуга",
      "Контактна форма за входящи запитвания",
      "Страници с условия и политики на услугата",
    ],
    result: {
      stat: "10+ запитвания",
      description: "Досега сайтът е генерирал над 10 директни запитвания от нови клиенти.",
    },
    testimonial: {
      status: "ready",
      quote:
        "Сайтът ни даде лице, което можем да покажем на клиенти — услуги, условия, начин за връзка, всичко на едно място. Получихме над 10 запитвания директно през формата за контакт.",
      author: "Gutter Matter",
    },
    coverImage: gutterMatterCover,
    gallery: [gutterMatterSite, gutterMatter1, gutterMatter2],
    seoTitle: "Уебсайт за услуга по почистване на улуци — Gutter Matter",
    metaDescription:
      "Уебсайт за Gutter Matter — услуга за почистване на улуци в Тънбридж Уелс, Великобритания. Контактна форма, която докара 10+ запитвания.",
    galleryAlt: [
      "Начална страница на сайта на Gutter Matter",
      "Преди и след снимка от почистване на улук от Gutter Matter",
      "Работа по почистване на улук, извършена от Gutter Matter",
    ],
  },
  {
    slug: "ivan-rusev",
    name: "Иван Русев",
    category: "Личен сайт на спортист — downhill колоездене",
    clientType: "free",
    url: "https://ivanrusevdh.com/",
    cardResult: "1 нов спонсор след пускането",
    problem:
      "Нямаше личен сайт, който да показва резултати от състезания и спонсори, или да изгражда аргумент за привличане на нови партньори.",
    solution: [
      "Секция с резултати от състезания",
      "Страница за партньори/спонсори",
      "Фото галерия от писти, тренировки и състезания",
    ],
    result: {
      stat: "1 нов спонсор",
      description: "Спечели нов спонсор в периода след пускането на сайта.",
    },
    testimonial: {
      status: "ready",
      quote:
        "Личният ми сайт с резултати, спонсорска страница и галерия ми помогна да изглеждам сериозно пред нови спонсори. Още в първите месеци си намерих нов спонсор благодарение на сайта.",
      author: "Иван Русев",
    },
    coverImage: ivanRusevCover,
    gallery: [ivanRusev1, ivanRusev2, ivanRusev3],
    seoTitle: "Личен сайт за спортист — Иван Русев",
    metaDescription:
      "Личен сайт за Иван Русев — downhill колоездач. Резултати от състезания, спонсорска страница и галерия, довели до нов спонсор.",
    galleryAlt: [
      "Иван Русев на зимно състезание по колоездене",
      "Иван Русев със спортния директор на UAE Team Emirates Mauro Gianetti",
      "Оборудване и рама на downhill велосипед на Иван Русев",
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((item) => item.slug === slug);
