import { CalendarDays, HelpCircle, Monitor, QrCode, RefreshCw, Search, Star } from "lucide-react";

export const navLinks = [
  { label: "Услуги", href: "#uslugi" },
  { label: "Работи", href: "#raboti" },
  { label: "За нас", href: "#za-nas" },
  { label: "Въпроси", href: "#vaprosi" },
  { label: "Контакти", href: "#kontakti" },
];

export const problemCards = [
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

export const services = [
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
    description: "Оптимизация, за да ви намират в Google при търсене в Айтос и околността.",
  },
];

export { caseStudies, getCaseStudyBySlug } from "./caseStudies";
export type { CaseStudy, Testimonial } from "./caseStudies";
