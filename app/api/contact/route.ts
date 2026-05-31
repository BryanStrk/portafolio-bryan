import { NextResponse } from "next/server"
import { Resend } from "resend"

// Editables: cambia "to" cuando quieras que llegue a otro buzón. El "from" requiere
// usar un dominio verificado en Resend; "onboarding@resend.dev" es el sandbox que
// solo entrega al correo del dueño de la cuenta (suficiente para empezar).
const FROM = "Portfolio <onboarding@resend.dev>"
const TO = "bryanpaicoalbines97@gmail.com"

// IMPORTANTE: añadir RESEND_API_KEY en .env.local (dev) y en Vercel → Project Settings
// → Environment Variables (preview + production). NUNCA exponer al cliente.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo inválido." },
      { status: 400 },
    )
  }

  const { name, email, subject, message } = (body ?? {}) as Record<string, unknown>

  if (
    !isNonEmpty(name) ||
    !isNonEmpty(email) ||
    !isNonEmpty(subject) ||
    !isNonEmpty(message)
  ) {
    return NextResponse.json(
      { ok: false, error: "Todos los campos son obligatorios." },
      { status: 400 },
    )
  }

  const cleanEmail = email.trim()
  if (!EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json(
      { ok: false, error: "El correo no tiene un formato válido." },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY no está definido en el entorno.")
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 },
    )
  }

  const cleanName = name.trim()
  const cleanSubject = subject.trim()
  const cleanMessage = message.trim()
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: cleanEmail,
      subject: `[Portfolio] ${cleanSubject}`,
      text: `De: ${cleanName} <${cleanEmail}>\n\n${cleanMessage}`,
      html: `<p><strong>De:</strong> ${escapeHtml(cleanName)} &lt;${escapeHtml(cleanEmail)}&gt;</p>
<p><strong>Asunto:</strong> ${escapeHtml(cleanSubject)}</p>
<pre style="font-family:inherit;white-space:pre-wrap;margin:0">${escapeHtml(cleanMessage)}</pre>`,
    })

    if (error) {
      console.error("Resend devolvió un error:", error)
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el mensaje." },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e) {
    console.error("Fallo al llamar a Resend:", e)
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 },
    )
  }
}
