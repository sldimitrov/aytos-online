import emailjs from "@emailjs/browser";
import { track } from "@vercel/analytics/react";
import { useState, type ComponentType } from "react";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Coffee,
  Dumbbell,
  Eye,
  Globe,
  HardHat,
  HelpCircle,
  Instagram,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  QrCode,
  RefreshCw,
  Car as CarIcon,
  Scissors,
  Zap,
} from "lucide-react";

interface ChoiceOption {
  value: string;
  icon: ComponentType<{ className?: string }>;
}

const businessOptions: ChoiceOption[] = [
  { value: "Кафене / ресторант", icon: Coffee },
  { value: "Салон за красота", icon: Scissors },
  { value: "Фитнес", icon: Dumbbell },
  { value: "Автосервиз", icon: CarIcon },
  { value: "Строителна фирма", icon: HardHat },
  { value: "Друго", icon: MoreHorizontal },
];

const needOptions: ChoiceOption[] = [
  { value: "Нов сайт", icon: Globe },
  { value: "Обновяване на стар сайт", icon: RefreshCw },
  { value: "Google Business Profile", icon: HelpCircle },
  { value: "QR код за отзиви", icon: QrCode },
  { value: "Не съм сигурен/а", icon: MoreHorizontal },
];

const timelineOptions: ChoiceOption[] = [
  { value: "Веднага", icon: Zap },
  { value: "До 1 месец", icon: CalendarClock },
  { value: "Само проучвам", icon: Eye },
];

const TOTAL_STEPS = 4;

function ChoiceGrid({
  options,
  onSelect,
}: {
  options: ChoiceOption[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onSelect(option.value)}
          className="card-hover flex items-center gap-3 rounded-xl border border-input bg-background px-4 py-4 text-left text-foreground transition-colors hover:border-primary"
        >
          <span className="inline-flex shrink-0 rounded-full bg-primary/10 p-2 text-primary">
            <option.icon className="h-5 w-5" />
          </span>
          <span className="font-medium">{option.value}</span>
        </button>
      ))}
    </div>
  );
}

function ProgressBar({ step }: { step: number }) {
  const percent = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
        <span>
          Стъпка {step} от {TOTAL_STEPS}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function Contact() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [businessTypeOther, setBusinessTypeOther] = useState("");
  const [need, setNeed] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectBusinessType = (value: string) => {
    setBusinessType(value);
    track("Contact funnel choice", { step: "business_type", value });
    if (value !== "Друго") {
      setStep(2);
    }
  };

  const selectNeed = (value: string) => {
    setNeed(value);
    track("Contact funnel choice", { step: "need", value });
    setStep(3);
  };

  const selectTimeline = (value: string) => {
    setTimeline(value);
    track("Contact funnel choice", { step: "timeline", value });
    setStep(4);
  };

  const goBack = () => setStep((current) => Math.max(1, current - 1));

  const resolvedBusinessType =
    businessType === "Друго" ? businessTypeOther.trim() || "Друго" : (businessType ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
    const templateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"];
    const confirmationTemplateId = import.meta.env["VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID"];
    const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];

    if (!serviceId || !templateId || !publicKey) {
      setError("Имейл услугата не е конфигурирана.");
      setSending(false);
      return;
    }

    const summary = `Нужда: ${need}\nКога: ${timeline}`;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          email: email,
          reply_to: email,
          phone: phone,
          business: resolvedBusinessType,
          message: summary,
        },
        { publicKey },
      );

      if (confirmationTemplateId && email) {
        try {
          await emailjs.send(
            serviceId,
            confirmationTemplateId,
            {
              to_name: name,
              to_email: email,
              business: resolvedBusinessType,
              message: summary,
            },
            { publicKey },
          );
        } catch (confirmationErr) {
          console.error("Confirmation email failed:", confirmationErr);
        }
      }

      track("Contact funnel submitted", {
        business: resolvedBusinessType,
        need: need ?? "",
        timeline: timeline ?? "",
      });

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Съобщението не беше изпратено. Опитайте отново или ни позвънете.",
      );
    } finally {
      setSending(false);
    }
  };

  const resetFunnel = () => {
    setStep(1);
    setBusinessType(null);
    setBusinessTypeOther("");
    setNeed(null);
    setTimeline(null);
    setName("");
    setPhone("");
    setEmail("");
    setSubmitted(false);
  };

  return (
    <section id="kontakti" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Контакти</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Пишете ни за безплатна консултация
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Отговорете на няколко бързи въпроса. Ще ви отговорим до 24 часа.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+359876533802"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium">+359 876 533 802</span>
              </a>
              <a
                href="mailto:aytosonline@gmail.com"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">aytosonline@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-medium">Айтос, България</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://instagram.com/aytos.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
              >
                <Instagram className="h-4 w-4" />
                @aytos.online
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  Благодарим ви за запитването!
                </h3>
                <p className="mt-2 text-muted-foreground">Ще се свържем с вас до 24 часа.</p>
                <button
                  type="button"
                  onClick={resetFunnel}
                  className="mt-6 text-sm font-medium text-primary hover:underline"
                >
                  Изпратете ново запитване
                </button>
              </div>
            ) : (
              <div>
                <ProgressBar step={step} />

                {step === 1 && (
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                      Какъв бизнес имате?
                    </h3>
                    <ChoiceGrid options={businessOptions} onSelect={selectBusinessType} />
                    {businessType === "Друго" && (
                      <div className="mt-4">
                        <input
                          type="text"
                          autoFocus
                          value={businessTypeOther}
                          onChange={(e) => setBusinessTypeOther(e.target.value)}
                          placeholder="Напишете накратко с какво се занимавате"
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          type="button"
                          disabled={!businessTypeOther.trim()}
                          onClick={() => setStep(2)}
                          className="mt-3 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Напред
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                      От какво имате нужда?
                    </h3>
                    <ChoiceGrid options={needOptions} onSelect={selectNeed} />
                    <button
                      type="button"
                      onClick={goBack}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Назад
                    </button>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                      Кога искате да започнете?
                    </h3>
                    <ChoiceGrid options={timelineOptions} onSelect={selectTimeline} />
                    <button
                      type="button"
                      onClick={goBack}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Назад
                    </button>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      Последна стъпка — как да се свържем с вас?
                    </h3>
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Вашето име
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          Телефон
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="+359 88 000 0000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          Имейл <span className="text-muted-foreground">(по избор)</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="ivan@example.com"
                        />
                      </div>
                    </div>
                    {error && (
                      <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                        {error}
                      </p>
                    )}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Назад
                      </button>
                      <button
                        type="submit"
                        disabled={sending}
                        className="flex-1 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {sending ? "Изпращане..." : "Изпратете запитване"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
