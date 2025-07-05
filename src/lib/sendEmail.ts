// src/lib/sendEmail.ts
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export interface ISendEmail {
  email: string;
  message: string;
  name: string;
}

export async function sendEmail({ email, message, name }: ISendEmail) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    secure: false, // true si usas el puerto 465
  } as SMTPTransport.Options);

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Nuevo contacto desde la web",
    html: `
      <h1>Formulario de Contacto</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br/>${message}</p>
    `,
  };

  return await transporter.sendMail(mailOptions);
}
