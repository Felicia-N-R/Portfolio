import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
  }

  const { name, email, message, website } = body as Record<string, unknown>;
  // Quietly accept automated honeypot submissions without sending them.
  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    name.length > 100 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !message.trim() ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Check your name, email, and note, then try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL || "Portfolio contact <onboarding@resend.dev>";
  if (!apiKey || !recipient) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please check back soon." },
      { status: 503 },
    );
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email.trim(),
        subject: `Portfolio note from ${name.trim()}`,
        text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        { error: "Your note could not be sent right now. Please try again later." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Your note could not be sent right now. Please try again later." },
      { status: 502 },
    );
  }
}
