"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(userMail, userName, msg) {
  try {
    const { data, error } = await resend.emails.send({
      from: `GRABCODE STUDIO <onboarding@resend.dev>`,
      to: ["robert.grabowski97@gmail.com"],
      subject: userName,
      html: `<h1>Email Klienta: ${userMail}</h1><br><//br><h2>Imię/Nazwa Klienta: ${userName}</h2><br><//br><p>${msg}</p>`,
      // attachments: [
      //   {
      //     content,
      //     filename,
      //   },
      // ],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
