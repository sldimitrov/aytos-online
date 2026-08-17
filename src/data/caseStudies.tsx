import burgasFrameCover from "@/assets/case-studies/burgas-frame-cover.png";
import burgasFrame2 from "@/assets/case-studies/burgas-frame-2.png";
import burgasFrame3 from "@/assets/case-studies/burgas-frame-3.png";
import burgasFrame4 from "@/assets/case-studies/burgas-frame-4.png";
import gutterMatterCover from "@/assets/case-studies/gutter-matter-cover.png";
import gutterMatter1 from "@/assets/case-studies/gutter-matter-1.png";
import gutterMatter2 from "@/assets/case-studies/gutter-matter-2.png";
import gutterMatter3 from "@/assets/case-studies/gutter-matter-3.png";
import ivanRusevCover from "@/assets/case-studies/ivan-rusev-cover.png";
import ivanRusev1 from "@/assets/case-studies/ivan-rusev-1.png";
import ivanRusev2 from "@/assets/case-studies/ivan-rusev-2.png";
import ivanRusev3 from "@/assets/case-studies/ivan-rusev-3.png";
import ivanRusev4 from "@/assets/case-studies/ivan-rusev-4.png";
import niksunaCover from "@/assets/case-studies/niksuna-cover.png";
import niksuna1 from "@/assets/case-studies/niksuna-1.png";
import niksuna2 from "@/assets/case-studies/niksuna-2.png";
import niksuna3 from "@/assets/case-studies/niksuna-3.png";
import niksuna4 from "@/assets/case-studies/niksuna-4.png";
import niksuna5 from "@/assets/case-studies/niksuna-5.png";

export type Testimonial = { status: "tbd" } | { status: "ready"; quote: string; author: string };

export type Result = { status: "tbd" } | { status: "ready"; stat: string; description: string };

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  clientType: "paid" | "free";
  url: string;
  cardResult: string;
  problem: string;
  solution: string[];
  result: Result;
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
      status: "ready",
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
    gallery: [burgasFrame2, burgasFrame3, burgasFrame4],
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
      status: "ready",
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
    gallery: [gutterMatter1, gutterMatter2, gutterMatter3],
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
      status: "ready",
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
    gallery: [ivanRusev1, ivanRusev2, ivanRusev3, ivanRusev4],
    seoTitle: "Личен сайт за спортист — Иван Русев",
    metaDescription:
      "Личен сайт за Иван Русев — downhill колоездач. Резултати от състезания, спонсорска страница и галерия, довели до нов спонсор.",
    galleryAlt: [
      "Иван Русев на зимно състезание по колоездене",
      "Иван Русев със спортния директор на UAE Team Emirates Mauro Gianetti",
      "Оборудване и рама на downhill велосипед на Иван Русев",
    ],
  },
  {
    slug: "niksuna-autolab",
    name: "Niksuna's AutoLab",
    category: "Фолиране и претапициране на автомобили",
    clientType: "paid",
    url: "https://www.niksuna-autolab.com/",
    cardResult: "Нова галерия с проекти и запитване на стъпки",
    problem:
      "Преди сайта клиентите на Niksuna's AutoLab виждаха завършените автомобили основно в Instagram — без обособена галерия по вид услуга и без лесен начин да оставят запитване извън директно съобщение.",
    solution: [
      "Галерия със завършени автомобили, филтрируема по услуга — фолиране на стъкла, PPF, претапициране, chrome delete, полиране на фарове",
      "Административен панел за самостоятелно добавяне и управление на снимки в галерията",
      "SEO оптимизация и настройка на Google Business Profile за по-добра видимост в Google",
      "Многостъпкова форма за запитване, която насочва клиента към точната услуга",
      "Секция „Защо да изберете нас“, която изгражда доверие преди първия разговор",
    ],
    result: { status: "tbd" },
    testimonial: { status: "tbd" },
    coverImage: niksunaCover,
    gallery: [niksuna1, niksuna2, niksuna3, niksuna4, niksuna5],
    seoTitle: "Уебсайт за автосервиз — Niksuna's AutoLab",
    metaDescription:
      "Уебсайт за Niksuna's AutoLab — фолиране на автостъкла, PPF защита и претапициране в Айтос. Галерия с завършени автомобили и запитване на стъпки.",
    galleryAlt: [
      "Претапициран таван на автомобил от Niksuna's AutoLab",
      "Фолирани автостъкла на автомобил от Niksuna's AutoLab",
      "Полиран фар на автомобил от Niksuna's AutoLab",
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((item) => item.slug === slug);
