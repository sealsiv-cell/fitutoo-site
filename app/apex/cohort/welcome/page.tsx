import type { Metadata } from "next";
import Link from "next/link";
import { cohort, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Welcome to the Founding Cohort",
  description: "Your FitU Apex founding seat is confirmed. Take the cohort survey next.",
  robots: { index: false },
};

// Stripe sends buyers here after checkout (set as the Payment Link's "After payment" redirect).
export default function CohortWelcome() {
  return (
    <section className="urgent">
      <div className="wrap center" style={{ maxWidth: 760 }}>
        <span className="eyebrow">FitU Apex · Founding cohort</span>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
          Your seat is <span className="red">confirmed</span>
        </h1>
        <p className="lead">
          Welcome to the founding cohort. Stripe has emailed your receipt. One step left: take the 2-minute survey so we can
          place you in the right Pod and have your plan ready on Day 1.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn btn-lg" href="/apex/questionnaire">Take the survey now</Link>
        </div>
        <p className="muted small" style={{ marginTop: 28 }}>
          {cohort.startDate ? `The cohort starts ${cohort.startDate}. ` : ""}We&apos;ll email your early access login and
          kickoff details before it starts. Questions? <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>
      </div>
    </section>
  );
}
