import { createServerFn } from "@tanstack/react-start";

const TO_EMAIL = "aytosonline@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

type ContactInput = {
  name: string;
  business: string;
  message: string;
};

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") throw new Error("Невалидни данни");
  const trimmed = value.trim().replace(/[\r\n]+/g, " ");
  if (!trimmed) throw new Error("Моля, попълнете всички полета");
  return trimmed.slice(0, max);
}

function encodeHeader(value: string): string {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: ContactInput) => ({
    name: clean(input?.name, 100),
    business: clean(input?.business, 120),
    message: (() => {
      if (typeof input?.message !== "string") throw new Error("Невалидни данни");
      const trimmed = input.message.trim();
      if (!trimmed) throw new Error("Моля, попълнете всички полета");
      return trimmed.slice(0, 3000);
    })(),
  }))
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
    if (!lovableApiKey || !connectionKey) {
      throw new Error("Имейл услугата не е конфигурирана");
    }

    const subject = `Ново запитване от сайта: ${data.name} (${data.business})`;
    const body = [
      `Име: ${data.name}`,
      `Бизнес: ${data.business}`,
      "",
      "Съобщение:",
      data.message,
    ].join("\n");

    const raw = [
      `To: ${TO_EMAIL}`,
      `Subject: ${encodeHeader(subject)}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "Content-Transfer-Encoding: base64",
      "",
      Buffer.from(body, "utf8").toString("base64"),
    ].join("\r\n");

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": connectionKey,
      },
      body: JSON.stringify({
        raw: Buffer.from(raw, "utf8").toString("base64url"),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Gmail send failed [${response.status}]: ${errorBody}`);
      throw new Error("Съобщението не беше изпратено. Опитайте отново.");
    }

    return { sent: true as const };
  });
