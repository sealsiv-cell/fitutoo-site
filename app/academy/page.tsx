import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { SignupBand } from "@/components/Chrome";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "FitU Too Wellness Academy",
  description: "Workouts, nutrition and more. Join the FitU Too Wellness Academy community on Skool.",
};

const inside = [
  { icon: "🏋️", title: "Workouts", text: "Follow-along training for every level." },
  { icon: "🥗", title: "Nutrition", text: "Practical guidance on eating for energy and results." },
  { icon: "🧠", title: "Mindset & habits", text: "Build the routines that make progress automatic." },
  { icon: "💬", title: "Community", text: "Ask questions, share wins and stay accountable." },
];

export default function Academy() {
  const skoolReady = links.skoolAcademy !== "#";
  return (
    <>
      <section className="hero">
        <Image src="/images/couple.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "right 20%" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU Too Wellness Academy · Online course</span>
            <h1>
              Workouts, nutrition <span className="red">and more</span>
            </h1>
            <p className="lead">Start training and join us. The Academy is FitU&apos;s online community for learning, training and growing together.</p>
            {skoolReady ? (
              <div className="btn-row">
                <a className="btn" href={links.skoolAcademy} target="_blank" rel="noopener noreferrer">Join the Academy on Skool</a>
              </div>
            ) : (
              <SignupForm list="academy" placement="top" cta="Get early access" />
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>Everything you need to keep going</h2>
          </div>
          <div className="grid g4" style={{ marginTop: 36 }}>
            {inside.map((f) => (
              <div key={f.title} className="card">
                <div className="icon" aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SignupBand title="Stay in the loop" sub="Get Academy updates, new courses and live session dates.">
        <SignupForm list="academy" placement="bottom" cta="Keep me posted" />
      </SignupBand>
    </>
  );
}
