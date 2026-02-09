import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/lib/email-templates/ContactFormEmail';

// Inicializar Resend con manejo de API key
const apiKey = process.env.RESEND_API_KEY || 're_123456789'; // Fallback temporal
const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación en el servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Verificar si hay API key configurada
    if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️ RESEND_API_KEY no configurada. Email no enviado.');
      console.log('📧 Mensaje recibido (sin enviar):');
      console.log('Nombre:', name);
      console.log('Email:', email);
      console.log('Mensaje:', message);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Mensaje recibido (modo desarrollo sin email)',
          data: { name, email }
        },
        { status: 200 }
      );
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_ADMIN_EMAIL || 'jaimebernaldezimpulsa@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - Portfolio JB`,
      react: ContactFormEmail({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    console.log('✅ Email enviado exitosamente. ID:', data?.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente',
        data: { name, email }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar mensaje de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}