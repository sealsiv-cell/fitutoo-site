import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { SignupBand } from "@/components/Chrome";
import { elite, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "FitU Elite Personal Training & VIP Coaching",
  description:
    "The high-performer's blueprint for fitness, energy and confidence. 1:1 VIP coaching and traveling trainers for CEOs, entrepreneurs and high achievers.",
};

const included = [
  { icon: "🎯", title: "1:1 Coaching", text: "A dedicated coach who knows your goals, schedule and history." },
  { icon: "📋", title: "Custom Fitness Plan", text: "Workouts built around your calendar, travel and equipment." },
  { icon: "🥗", title: "Nutrition Guidance", text: "Fuel for energy and focus, not another crash diet." },
  { icon: "📱", title: "App Access", text: "Your plan, check-ins and progress in the FitU app, 24/7." },
  { icon: "🎥", title: "Live Calls", text: "Weekly live coaching to adjust, troubleshoot and push forward." },
  { icon: "👥", title: "Private Community", text: "A circle of driven peers who hold the same standard." },
];

export default function Elite() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <Image src="/images/hero-silhouette.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "right center" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU Elite Personal Training · VIP Coaching</span>
            <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.8rem)" }}>
              Unlock the high-performer&apos;s blueprint for <span className="red">fitness, energy &amp; confidence</span>
            </h1>
            <p className="lead">
              Without wasting hours in the gym. Tailored for CEOs, entrepreneurs and high achievers who want results, not excuses.
            </p>
            <SignupForm list="elite-application" placement="top" cta="Apply now: limited spots" />
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section>
        <div className="wrap split">
          <div>
            <span className="eyebrow">Sound familiar?</span>
            <h2>Success shouldn&apos;t cost you your health</h2>
            <p className="lead">
              You&apos;ve built a successful career, but your energy is tanking, your body&apos;s not where you want it, and
              you&apos;re tired of wasting time on programs that don&apos;t fit your life.
            </p>
            <div className="pains">
              <span className="pill">🕒 Energy drain</span>
              <span className="pill">❌ Inconsistency</span>
              <span className="pill">⚡ Lack of time</span>
            </div>
            <a href="#apply" className="btn">Apply now: limited spots</a>
          </div>
          <Image src="/images/kick.jpg" alt="" width={594} height={395} />
        </div>
      </section>

      {/* 3. Solution */}
      <section className="alt">
        <div className="wrap split">
          <Image src="/images/couple.jpg" alt="FitU coaches" width={800} height={1000} style={{ maxHeight: 560 }} />
          <div>
            <span className="eyebrow">The solution</span>
            <h2>
              FitU VIP Coaching: a proven system for high performers who <span className="red">refuse to settle</span>
            </h2>
            <ul className="checks">
              <li>Tailored workouts &amp; nutrition</li>
              <li>Weekly live coaching</li>
              <li>24/7 app support</li>
              <li>Private community</li>
              <li>Traveling trainers who come to you</li>
            </ul>
            <a href="#apply" className="btn">Apply for FitU VIP now</a>
          </div>
        </div>
      </section>

      {/* 4. Testimonials: hidden until real ones are added in lib/site.ts */}
      {testimonials.length > 0 && (
        <section>
          <div className="wrap">
            <div className="center">
              <span className="eyebrow">Social proof</span>
              <h2>Real results from real high performers</h2>
            </div>
            <div className="grid g3" style={{ marginTop: 36 }}>
              {testimonials.map((t) => (
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

      {/* 5. Offer breakdown */}
      <section className={testimonials.length > 0 ? "alt" : ""}>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">The package</span>
            <h2>What&apos;s inside your VIP coaching package</h2>
          </div>
          <div className="grid g3" style={{ marginTop: 36 }}>
            {included.map((f) => (
              <div key={f.title} className="card">
                <div className="icon" aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 48 }}>
            <p className="muted" style={{ marginBottom: 0 }}>Investment</p>
            <p className="price">{elite.price}</p>
            {elite.paymentPlans && <p className="muted">Payment plans available</p>}
            <a href="#apply" className="btn">Apply for FitU VIP Coaching</a>
          </div>
        </div>
      </section>

      <SignupBand title="Not ready to apply yet?" sub="Leave your email and we'll send you the details, including payment plan options.">
        <SignupForm list="elite-interest" placement="middle" cta="Send me the details" />
      </SignupBand>

      {/* 6. Scarcity & urgency */}
      <section className="urgent" id="apply">
        <div className="wrap split">
          <div>
            {elite.spotsLeft !== null && (
              <span className="eyebrow" style={{ fontSize: "1rem" }}>Only {elite.spotsLeft} spots left</span>
            )}
            <h2>
              Doors close soon. <span className="red">Apply now</span> to secure your spot.
            </h2>
            <p className="lead">
              We keep VIP coaching small on purpose, so every client gets real attention. Tell us about your goals and
              we&apos;ll be in touch within 48 hours.
            </p>
          </div>
          <SignupForm list="elite-application" placement="bottom" variant="apply" cta="Apply now: limited spots available" />
        </div>
      </section>
    </>
  );
}
