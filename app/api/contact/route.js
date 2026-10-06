import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2, "Podaj imię lub nazwę firmy"),
  email: z.string().email("Nieprawidłowy adres e-mail"),

  phone: z.string().optional(),

  projectType: z.enum([
    "landing-page",
    "strona-firmowa",
    "rozbudowany-serwis",
    "sklep-internetowy",
    "przebudowa",
    "nie-wiem",
  ]),

  budget: z.enum([
    "do-3000",
    "3000-5000",
    "5000-8000",
    "8000-15000",
    "15000-plus",
    "nie-wiem",
  ]),

  website: z.string().optional(),

  message: z.string().min(10, "Wiadomość jest zbyt krótka"),

  consent: z.boolean(),

  // honeypot
  company: z.string().optional(),
});

const projectLabels = {
  "landing-page": "Landing Page",
  "strona-firmowa": "Strona firmowa",
  "rozbudowany-serwis": "Rozbudowany serwis",
  "sklep-internetowy": "Sklep internetowy",
  przebudowa: "Przebudowa istniejącej strony",
  "nie-wiem": "Jeszcze nie wiem / potrzebuję konsultacji",
};

const budgetLabels = {
  "do-3000": "Do 3 000 zł",
  "3000-5000": "3 000 - 5 000 zł",
  "5000-8000": "5 000 - 8 000 zł",
  "8000-15000": "8 000 - 15 000 zł",
  "15000-plus": "15 000+ zł",
  "nie-wiem": "Jeszcze nie wiem",
};

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      console.error("Zod error:", parsed.error.flatten());

      return Response.json(
        {
          success: false,
          error: "Nieprawidłowe dane formularza.",
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      phone,
      projectType,
      budget,
      website,
      message,
      consent,
      company,
    } = parsed.data;

    // Honeypot
    if (company) {
      // Botowi nie pokazujemy, że został wykryty.
      return Response.json({ success: true }, { status: 200 });
    }

    if (!consent) {
      return Response.json(
        {
          success: false,
          error: "Wymagana jest zgoda na przetwarzanie danych.",
        },
        { status: 400 },
      );
    }

    const port = Number(process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const projectLabel = projectLabels[projectType];
    const budgetLabel = budgetLabels[budget];

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Nie podano");
    const safeWebsite = escapeHtml(website || "Nie podano");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    // Mail do GrabCode
    await transporter.sendMail({
      from: `"Formularz GrabCode Studio" <${process.env.SMTP_USER}>`,
      to: "kontakt@grabcode.pl",
      replyTo: email,

      subject: `Nowe zapytanie - ${projectLabel}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #1d3557;
          "
        >
          <h2 style="margin-bottom: 24px;">
            Nowe zapytanie ze strony GrabCode
          </h2>

          <p>
            <strong>Imię / firma:</strong><br>
            ${safeName}
          </p>

          <p>
            <strong>E-mail:</strong><br>
            ${safeEmail}
          </p>

          <p>
            <strong>Telefon:</strong><br>
            ${safePhone}
          </p>

          <p>
            <strong>Rodzaj projektu:</strong><br>
            ${projectLabel}
          </p>

          <p>
            <strong>Orientacyjny budżet:</strong><br>
            ${budgetLabel}
          </p>

          <p>
            <strong>Obecna strona:</strong><br>
            ${safeWebsite}
          </p>

          <hr
            style="
              border: 0;
              border-top: 1px solid #e5e7eb;
              margin: 24px 0;
            "
          >

          <p>
            <strong>Wiadomość:</strong>
          </p>

          <p style="line-height: 1.6;">
            ${safeMessage}
          </p>
        </div>
      `,
    });

    // Autoresponder
    await transporter.sendMail({
      from: `"GrabCode Studio" <${process.env.SMTP_USER}>`,
      to: email,

      subject: "Dziękuję za wiadomość - GrabCode Studio",

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #1d3557;
          "
        >
          <h2 style="margin-bottom: 20px;">
            Dziękuję za kontakt!
          </h2>

          <p>
            Cześć ${safeName},
          </p>

          <p style="line-height: 1.6;">
            Twoje zapytanie dotyczące projektu
            <strong>${projectLabel}</strong>
            dotarło do mnie.
          </p>

          <p style="line-height: 1.6;">
            Zapoznam się z przesłanymi informacjami i odezwę się
            możliwie szybko — zazwyczaj w ciągu 1 dnia roboczego.
          </p>

          <hr
            style="
              border: 0;
              border-top: 1px solid #e5e7eb;
              margin: 24px 0;
            "
          >

          <p>
            <strong>Twoja wiadomość:</strong>
          </p>

          <p
            style="
              padding: 16px;
              background: #f8f9fa;
              line-height: 1.6;
              border-left: 3px solid #e6b000;
            "
          >
            ${safeMessage}
          </p>

          <p style="margin-top: 32px;">
            Pozdrawiam,<br>
            <strong>Robert Grabowski</strong><br>
            GrabCode Studio
          </p>

          <p>
            <a
              href="https://grabcode.pl"
              style="color: #1d3557;"
            >
              grabcode.pl
            </a>
          </p>
        </div>
      `,
    });

    return Response.json(
      {
        success: true,
        message: "Wiadomość została wysłana.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        error: "Nie udało się wysłać wiadomości.",
      },
      { status: 500 },
    );
  }
}
