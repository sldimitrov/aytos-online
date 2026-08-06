import { CalendarDays, HelpCircle, Monitor, QrCode, RefreshCw, Search, Star } from "lucide-react";
import cafeMockup from "@/assets/portfolio-cafe.jpg";
import salonMockup from "@/assets/portfolio-salon.jpg";
import gymMockup from "@/assets/portfolio-gym.jpg";
import autoMockup from "@/assets/portfolio-auto.jpg";

export const navLinks = [
  { label: "Услуги", href: "#uslugi" },
  { label: "Работи", href: "#raboti" },
  { label: "За нас", href: "#za-nas" },
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
    description:
      "Оптимизация, за да ви намират в Google при търсене в Айтос и околността.",
  },
];

export const portfolioItems = [
  {
    image: cafeMockup,
    name: "Кафене Айтос",
    result: "Сайт + меню; +40% запитвания за 2 месеца",
  },
  {
    image: salonMockup,
    name: "Салон за красота Елеганс",
    result: "Онлайн резервации; спестени 10+ часа телефонни обаждания седмично",
  },
  {
    image: gymMockup,
    name: "Фитнес Айтос Спорт",
    result: "Нов сайт с график; 30% повече посещения от Google",
  },
  {
    image: autoMockup,
    name: "Автосервиз Мотор",
    result: "Google отзиви + QR; рейтинг от 3.8 на 4.7 за 3 месеца",
  },
];
