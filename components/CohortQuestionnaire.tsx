"use client";

import { useState } from "react";
import { cohortQuestions, US_STATES } from "@/lib/questionnaire";

export default function CohortQuestionnaire() {
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
        body: JSON.stringify({ ...data, list: "apex-questionnaire", placement: "questionnaire", page: window.location.pathname }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong. Please try again.");
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done" role="status" style={{ maxWidth: 720 }}>
        <strong>Thank you. Your questionnaire is in.</strong> We review every response and will email you about your place
        in the FitU Apex founding cohort.
      </div>
    );
  }

  return (
    <form className="quiz" onSubmit={onSubmit}>
      <fieldset>
        <legend>About you</legend>
        <div className="quiz-row">
          <label>
            First name
            <input name="name" required autoComplete="given-name" />
          </label>
          <label>
            Last name
            <input name="lastName" required autoComplete="family-name" />
          </label>
        </div>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <div className="quiz-row">
          <label>
            City
            <input name="city" required autoComplete="address-level2" />
          </label>
          <label>
            State
            <select name="state" required defaultValue="">
              <option value="" disabled>
                Choose your state
              </option>
              {US_STATES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      {cohortQuestions.map((q, i) => (
        <fieldset key={q.key}>
          <legend>
            <span className="red">{String(i + 1).padStart(2, "0")}</span> {q.label}
          </legend>
          <div className="choices">
            {q.options.map((o, j) => (
              <label key={o} className="choice">
                <input type="radio" name={q.key} value={o} required={j === 0} />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <fieldset>
        <legend>Anything else we should know? (optional)</legend>
        <label>
          Notes, comments, injuries or medical conditions
          <textarea name="comments" rows={4} maxLength={1500} placeholder="For example: a past knee injury, high blood pressure, or anything you'd like your coach to know." />
        </label>
        <p className="small muted" style={{ margin: "10px 0 0" }}>Only the FitU coaching team sees this.</p>
      </fieldset>

      <input name="company" type="text" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit my questionnaire"}
      </button>
      {status === "error" && <p className="form-error">{error}</p>}
    </form>
  );
}
