"use client";

import { useState } from "react";

type Props = {
  /** Which list this signup is for, e.g. "apex-cohort". Saved as a column in the sheet. */
  list: string;
  /** Where on the page the form sits (top / middle / bottom). Saved for tracking. */
  placement: string;
  cta?: string;
  /** Long form adds phone and goals, used for Elite / VIP applications. */
  variant?: "short" | "apply";
  compact?: boolean;
};

export default function SignupForm({ list, placement, cta = "Join now", variant = "short", compact }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, list, placement, page: window.location.pathname }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong. Please try again.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done" role="status">
        <strong>You&apos;re in.</strong>{" "}
        {variant === "apply"
          ? "We received your application and will reach out within 48 hours."
          : "Check your inbox for next steps."}
      </div>
    );
  }

  return (
    <form className={`signup ${variant} ${compact ? "compact" : ""}`} onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="First name" autoComplete="given-name" required={variant === "apply"} aria-label="First name" />
      <input name="email" type="email" placeholder="Email address" autoComplete="email" required aria-label="Email address" />
      {variant === "apply" && (
        <>
          <input name="phone" type="tel" placeholder="Phone (optional)" autoComplete="tel" aria-label="Phone" />
          <textarea name="goals" rows={3} placeholder="What's your #1 goal for the next 90 days?" aria-label="Your goal" />
        </>
      )}
      {/* Honeypot: real people never fill this in. */}
      <input name="company" type="text" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : cta}
      </button>
      {status === "error" && <p className="form-error">{error}</p>}
    </form>
  );
}
