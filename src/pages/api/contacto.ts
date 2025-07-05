// src/pages/api/contacto.ts
import type { APIRoute } from "astro";
import { sendEmail } from "../../lib/sendEmail";
import type { ISendEmail } from "../../lib/sendEmail";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as Record<string, string>;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan parámetros obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const info = await sendEmail({ name, email, message } as ISendEmail);

    return new Response(
      JSON.stringify({ ok: true, messageId: info.messageId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Error enviando email:", err);
    return new Response(
      JSON.stringify({ error: "Error interno al enviar el mensaje." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
