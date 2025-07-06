// src/pages/api/contacto.ts
import type { APIRoute } from "astro";
import { sendEmail } from "../../lib/sendEmail";
import type { ISendEmail } from "../../lib/sendEmail";

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1) Leer cuerpo
    const body = (await request.json()) as Record<string, unknown>;
    console.log("[API/contacto] body:", body);

    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    // 2) Validar
    if (!name || !email || !message) {
      console.warn("[API/contacto] Faltan campos:", { name, email, message });
      return new Response(
        JSON.stringify({ error: "Faltan parámetros obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3) Enviar
    const info = await sendEmail({ name, email, message } as ISendEmail);
    console.log("[API/contacto] email enviado, id:", info.messageId);

    return new Response(
      JSON.stringify({ ok: true, messageId: info.messageId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err: any) {
    console.error("[API/contacto] ERROR:", err);
    return new Response(
      JSON.stringify({ error: "Error interno al enviar el mensaje." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
