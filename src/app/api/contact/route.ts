import { NextResponse } from 'next/server'
import { domain } from '@/config/site'
import nodemailer from 'nodemailer'

interface MailerData {
  name: string
  email: string
  message: string
}

const noreplyEmail = `noreply@${domain}`
const subject = 'Nuevo mensaje desde formulario web'

export async function POST (request: Request) {
  const { name, email, message }: Partial<MailerData> = await request.json() as MailerData

  if (!name || !email || !message) {
    return NextResponse.json({
      message: 'Al parecer faltan algunos datos para poder enviar tu mensaje.'
    }, {
      status: 400
    })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: noreplyEmail,
      pass: process.env.GMAIL_APP_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `Formulario de contacto ${noreplyEmail}`,
      to: `contacto@${domain}`,
      subject,
      html: `
        <h2>
          ${subject}
        </h2>
        </br>
        <h3>
          Nombre de contacto
        </h3>
        <p style='padding:12px;background:#d1d1d1'>
          ${name}
        </p>
        </br>
        <h3>
          Correo de contacto
        </h3>
        <p style='padding:12px;background:#d1d1d1'>
          ${email}
        </p>
        </br>
        <h3>
          Mensaje de contacto
        </h3>
        <p style='padding:12px;background:#d1d1d1'>
          ${message}
        </p>
      `
    })
    return NextResponse.json({
      message: 'Tu mensaje ha sido enviado exitosamente.'
    }, {
      status: 200
    })
  } catch {
    return NextResponse.json({
      message: 'No pudimos enviar el mensaje en este momento, porfavor, intentalo más tarde.'
    }, {
      status: 500
    })
  }
}
