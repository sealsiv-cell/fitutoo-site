import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CohortBuy from "@/components/CohortBuy";
import { SignupBand } from "@/components/Chrome";
import { cohort, cohortIncluded, cohortTestimonials, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FitU Apex Founding Cohort: Claim Your Seat",
  description:
    "Be one of the first members of FitU Apex, the elite performance platform. Buy a founding seat, take the cohort survey and get early access, coaching and founding member pricing.",
};

const price = cohort.seatPrice ?? "Price announced soon";
const start = cohort.startDate ?? "Start date announced soon";
const length = cohort.length ?? "Length announced soon";
const seatsKnown = cohort.seatsTotal !== null && cohort.seatsLeft !== null;

const steps = [
  { title: "Claim your seat", text: "Buy your founding seat through secure Stripe checkout. Seats are limited." },
  { title: "Take the survey", text: "Two minutes on your goals, schedule and training so we can place you in the right Pod." },
  { title: "Get set up", text: "We'll email your early access login and kickoff details before the cohort starts." },
  { title: "Start training", text: "Build your Performance Score from Day 1 with your coach and your founding Pod." },
];

const faqs = [
  {
    q: "What is the founding cohort?",
    a: "The first group of members to use FitU Apex, the elite performance platform. You get early access before public launch, coaching and a founding Pod, and your feedback shapes what we build next.",
  },
  { q: "When does it start, and how long does it run?", a: cohort.startDate && cohort.length ? `It starts ${cohort.startDate} and runs ${cohort.length}.${cohort.enrollmentDeadline ? ` Enrollment closes ${cohort.enrollmentDeadline}, or sooner if seats sell out.` : ""}` : `${start}. ${length}.` },
  {
    q: "How many seats are there?",
    a: seatsKnown
      ? `${cohort.seatsTotal} founding seats in total. When they're gone, you can join the waitlist.`
      : "Seats are limited so every member gets real coaching time. When they're gone, you can join the waitlist.",
  },
  {
    q: "How do I pay?",
    a: "Checkout is handled securely by Stripe. You can pay with a card, and you'll get a receipt by email.",
  },
  {
    q: "What if it's not for me?",
    a: "If you attend the 1-on-1 kickoff and aren't satisfied, ask for a full refund within 14 days of the cohort's start date and you'll get your money back.",
  },
  {
    q: "Why is there a survey?",
    a: "The survey tells us your goals, experience and schedule, so we can place you in the right Pod and have your plan ready on Day 1. It takes about two minutes.",
  },
  {
    q: "What happens when the cohort ends?",
    a: "You keep your account and your data. You can stay on Free or keep a paid plan (PRO, Pro+ or Executive) at founding member pricing.",
  },
  { q: "Do I need a gym?", a: "No. Build workouts for home, the gym or the road, or import the program you already follow from a photo." },
  {
    q: "Who can join?",
    a: "The cohort is for anyone 16 and over, at any fitness level. Members aged 16 to 18 need a parent or guardian's consent. There are no set types. Just what fits you.",
  },
  {
    q: "I have another question.",
    a: `Email us at ${site.contactEmail} and we'll get back to you.`,
  },
];

export default function CohortSales() {
  const pct = seatsKnown ? Math.round(((cohort.seatsTotal! - cohort.seatsLeft!) / cohort.seatsTotal!) * 100) : 0;

  return (
    <>
      {/* Hero: offer + top call to action */}
      <section className="hero">
        <Image src="/images/gym-row.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "70% center" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU Apex · Founding cohort · Prelaunch</span>
            <h1>
              Claim your <span className="red">founding seat</span>
            </h1>
            <p className="lead">
              Be one of the first members of FitU Apex. Get early access, coaching and a founding Pod, and lock in
              founding member pricing before the public launch.
            </p>
            {seatsKnown && (
              <div className="seat-meter" aria-label={`${cohort.seatsLeft} of ${cohort.seatsTotal} seats left`}>
                <div className="seat-bar"><span style={{ width: `${pct}%` }} /></div>
                <p className="small">
                  <strong className="red">{cohort.seatsLeft}</strong> of {cohort.seatsTotal} seats left
                </p>
              </div>
            )}
            <CohortBuy placement="top" />
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="facts">
        <div className="wrap grid g4">
          <div><span className="eyebrow">Founding seat</span><p className="fact">{price}</p>{cohort.compareAt && <p className="small muted">{cohort.compareAt}</p>}</div>
          <div><span className="eyebrow">Starts</span><p className="fact">{start}</p></div>
          <div><span className="eyebrow">Length</span><p className="fact">{length}</p></div>
          <div>
            <span className="eyebrow">Seats</span>
            <p className="fact">{seatsKnown ? `${cohort.seatsLeft} left` : "Limited"}</p>
            {cohort.enrollmentDeadline && <p className="small muted">Enrollment closes {cohort.enrollmentDeadline}</p>}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">How it works</span>
            <h2>Four steps to Day 1</h2>
          </div>
          <div className="grid g4 steps" style={{ marginTop: 36 }}>
            {steps.map((s) => (
              <div key={s.title} className="card">
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="alt" id="included">
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">What&apos;s included</span>
            <h2>Everything in your founding seat</h2>
          </div>
          <div className="grid g4" style={{ marginTop: 36 }}>
            {cohortIncluded.map((f) => (
              <div key={f.title} className="card">
                <div className="icon" aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle call to action */}
      <SignupBand
        id="buy"
        title={cohort.seatPrice ? `One seat. ${cohort.seatPrice}.` : "Seats are limited"}
        sub="When the founding seats are gone, they're gone. Claim yours before public launch."
      >
        <CohortBuy placement="middle" onDark />
      </SignupBand>

      {/* Offer summary */}
      <section>
        <div className="wrap split">
          <div>
            <span className="eyebrow">The offer</span>
            <h2>
              Built on your numbers. <span className="red">Not a category.</span>
            </h2>
            <p className="lead">
              Every body is different. Your targets, meal plans and coaching come from your own data, and the cohort meets
              you where you are today.
            </p>
            <ul className="checks">
              {cohortIncluded.map((f) => (
                <li key={f.title}>{f.title}</li>
              ))}
            </ul>
          </div>
          <div className="card offer-box">
            <span className="eyebrow">Founding seat</span>
            <p className="price">{cohort.seatPrice ?? "Coming soon"}</p>
            {cohort.compareAt && <p className="muted">{cohort.compareAt}</p>}
            <p className="muted">
              {start} · {length}
            </p>
            <CohortBuy placement="offer" />
          </div>
        </div>
      </section>

      {/* Survey */}
      <section className="alt" id="survey">
        <div className="wrap split">
          <Image src="/images/body-shapes.jpg" alt="Six people of different body shapes, sizes and skin tones" width={1400} height={688} style={{ background: "#fff" }} />
          <div>
            <span className="eyebrow">Cohort survey</span>
            <h2>Tell us about you</h2>
            <p className="lead">
              The 2-minute survey covers your goals, experience and schedule, so we can build the right Pods and have your
              plan ready on Day 1.
            </p>
            <p className="muted">Already have a seat? Take it now. Still deciding? Take it anyway and we&apos;ll follow up.</p>
            <Link className="btn ghost" href="/apex/questionnaire">Take the survey</Link>
          </div>
        </div>
      </section>

      {/* Testimonials: hidden until real ones are added in lib/site.ts */}
      {cohortTestimonials.length > 0 && (
        <section>
          <div className="wrap">
            <div className="center">
              <span className="eyebrow">Real members</span>
              <h2>What people are saying</h2>
            </div>
            <div className="grid g3" style={{ marginTop: 36 }}>
              {cohortTestimonials.map((t) => (
                <blockquote key={t.name} className="card quote" style={{ margin: 0 }}>
                  “{t.quote}”
                  <footer>
                    <strong>{t.name}</strong>
                    {t.role ? `, ${t.role}` : ""}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={cohortTestimonials.length > 0 ? "alt" : ""} id="faq">
        <div className="wrap prose" style={{ margin: "0 auto" }}>
          <h2 className="center">Frequently asked questions</h2>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <p className="small muted" style={{ marginTop: 28 }}>
            FitU Apex gives general fitness and nutrition guidance, not medical advice. Talk to a doctor before starting a
            new exercise or diet program.
          </p>
        </div>
      </section>

      {/* Bottom call to action */}
      <SignupBand title="Don't watch launch day. Be part of it." sub="Claim your FitU Apex founding seat.">
        <CohortBuy placement="bottom" onDark />
      </SignupBand>
    </>
  );
}
