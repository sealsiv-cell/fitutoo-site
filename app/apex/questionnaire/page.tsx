import type { Metadata } from "next";
import CohortQuestionnaire from "@/components/CohortQuestionnaire";

export const metadata: Metadata = {
  title: "Founding Cohort Questionnaire",
  description: "Tell us about yourself to be considered for the FitU Apex founding cohort.",
};

export default function Questionnaire() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 820 }}>
        <span className="eyebrow">FitU Apex · Founding cohort</span>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
          Founding cohort <span className="red">questionnaire</span>
        </h1>
        <p className="lead">
          Tell us about yourself so we can build the right group. It takes about two minutes, and every question needs an
          answer.
        </p>
        <CohortQuestionnaire />
      </div>
    </section>
  );
}
