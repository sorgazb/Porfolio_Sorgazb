import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  // Parsear los datos del formulario
  const data: ContactFormData = await request.json();
  
  // Validar los datos
  if (!data.name || !data.email || !data.subject || !data.message) {
    return new Response(JSON.stringify({ error: 'Todos los campos son requeridos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return new Response(JSON.stringify({ error: 'Formato de email inválido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Configurar el transportador con SendGrid
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey', // ¡Literalmente la palabra 'apikey'!
        pass: process.env.SENDGRID_API_KEY, // Tu API Key de SendGrid
      },
    });

    // Configurar el correo
    await transporter.sendMail({
      from: 'sorgazb@gmail.com', // Debe ser un email verificado en SendGrid
      to: 'sorgazb@gmail.com', // Tu email
      replyTo: data.email,
      subject: `Nuevo mensaje: ${data.subject}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Asunto:</strong> ${data.subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error: any) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al enviar el mensaje',
      details: error.message 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  }
};