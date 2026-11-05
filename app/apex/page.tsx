import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { SignupBand } from "@/components/Chrome";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "FitU Apex: Elite Performance Platform",
  description:
    "FitU Apex brings your training, nutrition, recovery and mindset into one daily Performance Score, with AI coaching built on your own numbers. Join the founding cohort.",
};

const features = [
  { icon: "🏆", title: "Performance Score", text: "One daily score from your nutrition, training, sleep, steps and check-ins, with status tiers from Operator to Apex." },
  { icon: "🤖", title: "AI Coach and agents", text: "Ask a coach that knows your logs and targets, plus Nutrition, Workout, Recovery, Mindset and Performance agents." },
  { icon: "🏋️", title: "Workouts", text: "A workout library you can build on, including importing a workout from a photo of your program." },
  { icon: "🥗", title: "Nutrition", text: "Log meals by hand or scan a barcode. Your calorie and macro targets come from your own numbers." },
  { icon: "🛒", title: "Meal plans and grocery lists", text: "A 7-day plan with one-serving portions, cooking temperatures and times, and a grocery list by aisle." },
  { icon: "🚚", title: "Shop at Kroger", text: "On Pro+, send your grocery list to your own Kroger cart for pickup or delivery." },
  { icon: "📈", title: "Goals and analytics", text: "Weigh-ins, measurements and habits, with trends and Day 1 versus today." },
  { icon: "👥", title: "Pods and 1-on-1 coaching", text: "Private coach-led groups and video sessions with a coach." },
];

const plans = [
  { name: "Free", price: "$0", text: "Daily check-ins, Performance Score, workouts, food log, goals and the AI Coach (3 messages a day)." },
  { name: "PRO", price: "$29", text: "Every AI agent but Mindset, weekly meal plans and grocery lists, and 1-on-1 sessions at $50 each." },
  { name: "Pro+", price: "$99", text: "All five agents, analytics, Shop at Kroger, private Pods and one 1-on-1 session a month.", featured: true },
  { name: "Executive", price: "$299", text: "By application. Everything in Pro+, three 1-on-1 sessions a month and your own Pods." },
];

const faqs = [
  { q: "What is the founding cohort?", a: "The first group of members in FitU Apex. Founding members get early access and help shape what we build next." },
  { q: "Is there a free plan?", a: "Yes. The Free plan includes daily check-ins, your Performance Score, workouts, the food log, goals and the AI Coach (3 messages a day). Upgrade any time." },
  { q: "How does billing work?", a: "Paid plans are billed monthly through Stripe, and you can cancel any time from the Plans page in the app." },
  { q: "Who can join?", a: "Apex is for members 16 and over. Members aged 16 to 18 need a parent or guardian's consent." },
  { q: "Do I need a gym?", a: "No. Build workouts for home, the gym or the road, or import the program you already follow from a photo." },
];

export default function Apex() {
  const appReady = links.apexApp !== "#";
  return (
    <>
      <section className="hero">
        <Image src="/images/gym-row.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "70% center" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU Apex · Founding cohort</span>
            <h1>
              Elite performance <span className="red">platform</span>
            </h1>
            <p className="lead">
              FitU Apex brings your training, nutrition, recovery and mindset into one daily Performance Score, with AI
              coaching built on your own numbers.
            </p>
            {appReady ? (
              <div className="btn-row">
                <a className="btn" href={links.apexApp}>Create your free account</a>
              </div>
            ) : (
              <SignupForm list="apex-cohort" placement="top" cta="Join the founding cohort" />
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>Everything in one daily score</h2>
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

      <SignupBand title="Be a founding member" sub="Spots in the first cohort are limited. Reserve yours now. It takes ten seconds.">
        <SignupForm list="apex-cohort" placement="middle" cta="Reserve my spot" />
      </SignupBand>

      <section className="alt">
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Plans</span>
            <h2>Start free. Level up when you&apos;re ready.</h2>
          </div>
          <div className="grid g4" style={{ marginTop: 36 }}>
            {plans.map((p) => (
              <div key={p.name} className={`card plan ${p.featured ? "featured" : ""}`}>
                <h3>{p.name}</h3>
                <p className="plan-price">
                  {p.price}
                  <span> / month</span>
                </p>
                <p className="muted">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="small muted center" style={{ marginTop: 20 }}>Billed monthly through Stripe. Cancel anytime from the Plans page.</p>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <Image src="/images/body-types.jpg" alt="Endomorph, mesomorph and ectomorph body types" width={1400} height={845} />
          <div>
            <span className="eyebrow">Built on your numbers</span>
            <h2>A plan for your body, not someone else&apos;s</h2>
            <p className="lead">Your calorie and macro targets, meal plans and coaching all come from your own data.</p>
            <p className="muted">Slower metabolism, easy gainer or hard gainer: Apex meets you where you are and tracks Day 1 versus today.</p>
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
          <p className="small muted" style={{ marginTop: 28 }}>
            Apex gives general fitness and nutrition guidance, not medical advice. Talk to a doctor before starting a new
            exercise or diet program.
          </p>
        </div>
      </section>

      <SignupBand title="Don't miss launch day" sub="Join the FitU Apex founding cohort.">
        <SignupForm list="apex-cohort" placement="bottom" cta="Join the cohort" />
      </SignupBand>
    </>
  );
}
