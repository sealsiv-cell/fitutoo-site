import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { SignupBand } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "FitU Apex App: Founding Cohort",
  description: "Join the founding cohort of the FitU Apex app. Early access, guided training and a community that keeps you accountable.",
};

const features = [
  { icon: "🏋️", title: "Guided workouts", text: "Programs that fit your schedule, your level and your goals." },
  { icon: "🥗", title: "Nutrition guidance", text: "Simple, realistic eating plans you can actually stick to." },
  { icon: "📈", title: "Progress tracking", text: "See your wins add up, week after week." },
  { icon: "🤝", title: "Cohort community", text: "Train alongside other founding members and keep each other on track." },
];

const faqs = [
  { q: "What is the founding cohort?", a: "The first group of members to get into the FitU Apex app. You get early access and help shape what we build next." },
  { q: "Does it cost anything to sign up?", a: "Joining the list is free. We'll share founding-member pricing with you before launch." },
  { q: "Do I need a gym?", a: "No. FitU programs work at home, at the gym or on the road." },
  { q: "I'm a complete beginner. Is this for me?", a: "Yes. Every body type and every starting point is welcome. Programs scale to where you are today." },
];

export default function Apex() {
  return (
    <>
      <section className="hero">
        <Image src="/images/gym-row.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "70% center" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU Apex App · Founding cohort</span>
            <h1>
              Make your body <span className="red">stronger</span>
            </h1>
            <p className="lead">
              Your coach, your plan and your community, all in your pocket. Join the founding cohort and get in before
              everyone else.
            </p>
            <SignupForm list="apex-cohort" placement="top" cta="Join the cohort" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">What you get</span>
            <h2>Built to keep you moving</h2>
          </div>
          <div className="grid g4" style={{ marginTop: 36 }}>
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="icon" aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">How it works</span>
            <h2>Three steps to day one</h2>
          </div>
          <div className="grid g3 steps" style={{ marginTop: 36 }}>
            <div className="card"><h3>Join the list</h3><p className="muted">Drop your email to reserve a founding-member spot.</p></div>
            <div className="card"><h3>Get your invite</h3><p className="muted">We&apos;ll send your download link and founding-member offer at launch.</p></div>
            <div className="card"><h3>Train together</h3><p className="muted">Start your program with the cohort and build momentum from week one.</p></div>
          </div>
        </div>
      </section>

      <SignupBand title="Spots in the first cohort are limited" sub="Reserve yours now. It takes ten seconds.">
        <SignupForm list="apex-cohort" placement="middle" cta="Reserve my spot" />
      </SignupBand>

      <section>
        <div className="wrap split">
          <Image src="/images/body-types.jpg" alt="Endomorph, mesomorph and ectomorph body types" width={1400} height={845} />
          <div>
            <span className="eyebrow">Every body</span>
            <h2>A plan for your body type</h2>
            <p className="lead">Slower metabolism, easy gainer or hard gainer: your plan should fit the body you have, not someone else&apos;s.</p>
            <p className="muted">FitU Apex meets you where you are and builds from there.</p>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap prose" style={{ margin: "0 auto" }}>
          <h2 className="center">Questions</h2>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SignupBand title="Don't miss launch day" sub="Join the FitU Apex founding cohort.">
        <SignupForm list="apex-cohort" placement="bottom" cta="Join the cohort" />
      </SignupBand>
    </>
  );
}
