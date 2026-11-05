import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (v: unknown, n = 500) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field filled in: pretend success, store nothing.
  if (clip(body.company)) return NextResponse.json({ ok: true });

  const email = clip(body.email, 200).toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const row = {
    timestamp: new Date().toISOString(),
    email,
    name: clip(body.name, 100),
    phone: clip(body.phone, 40),
    goals: clip(body.goals, 1000),
    list: clip(body.list, 50),
    placement: clip(body.placement, 20),
    page: clip(body.page, 100),
  };

  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) {
    console.warn("GOOGLE_SHEET_WEBHOOK_URL is not set; signup not saved:", row);
    return NextResponse.json({ error: "Signups are not connected yet. Please try again soon." }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...row, secret: process.env.GOOGLE_SHEET_SECRET || "" }),
      redirect: "follow",
    });
    const text = await res.text();
    if (!res.ok || !text.includes('"ok":true')) throw new Error(`Sheet responded ${res.status}: ${text.slice(0, 200)}`);
  } catch (err) {
    console.error("Failed to save signup", err);
    return NextResponse.json({ error: "We couldn't save that just now. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
