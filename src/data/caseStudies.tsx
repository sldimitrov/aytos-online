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

export type Testimonial =
  | { status: "tbd" }
  | { status: "draft"; quote: string; author: string }
  | { status: "ready"; quote: string; author: string };

/**
 * Manual switch only — must never be true in what ships to production.
 * Flip to true locally to preview the testimonial layout with placeholder
 * quotes (status: "draft"), then flip back before deploying. Real
 * testimonials go in as status: "ready" and always render regardless of
 * this flag.
 */
export const SHOW_MOCK_TESTIMONIALS = false;

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
      status: "draft",
      quote:
        "Преди имахме само Facebook страница и хората трудно виждаха какво реално строим. Сега клиентите разглеждат проектите ни онлайн и ни звънят вече убедени. Калкулаторът ни докара над 50 запитвания — нещо, което просто нямаше как да се случи преди.",
      author: "[Име], Burgas Frame — очаква потвърждение",
    },
    coverImage: burgasFrameCover,
    gallery: [burgasFrame1, burgasFrame2, burgasFrame3],
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
      status: "draft",
      quote:
        "Сайтът ни даде лице, което можем да покажем на клиенти — услуги, условия, начин за връзка, всичко на едно място. Получихме над 10 запитвания директно през формата за контакт.",
      author: "[Име], Gutter Matter — очаква потвърждение",
    },
    coverImage: gutterMatterCover,
    gallery: [gutterMatterSite, gutterMatter1, gutterMatter2],
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
      status: "draft",
      quote:
        "Личният ми сайт с резултати, спонсорска страница и галерия ми помогна да изглеждам сериозно пред нови спонсори. Още в първите месеци си намерих нов спонсор благодарение на сайта.",
      author: "Иван Русев — текстът очаква потвърждение",
    },
    coverImage: ivanRusevCover,
    gallery: [ivanRusev1, ivanRusev2, ivanRusev3],
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((item) => item.slug === slug);
