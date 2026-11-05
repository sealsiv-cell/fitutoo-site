import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import { SignupBand } from "@/components/Chrome";

const offers = [
  {
    href: "/apex",
    img: "/images/gym-row.jpg",
    tag: "Launching now",
    title: "FitU Apex App",
    text: "One daily Performance Score with AI coaching built on your own numbers. Start free and join the founding cohort.",
  },
  {
    href: "/elite",
    img: "/images/hero-silhouette.jpg",
    tag: "1:1 coaching",
    title: "Elite Personal Training",
    text: "VIP coaching and traveling trainers for high performers who want results without wasted hours.",
  },
  {
    href: "/academy",
    img: "/images/couple.jpg",
    tag: "Community",
    title: "FitU Too Wellness Academy",
    text: "Courses, accountability and a community built around workouts, nutrition and more.",
  },
  {
    href: "/apparel",
    img: "/images/pink-fit.jpg",
    tag: "Shop",
    title: "FitU Apparel",
    text: "Approximit Fit, Z1G, Yak Fitness and more. Gear that works as hard as you do.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/images/kick.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "right center" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU · A Benefit Corporation</span>
            <h1>
              Stay healthy.
              <br />
              <span className="red">Keep strong.</span>
            </h1>
            <p className="lead">
              FitU creates health and wellness opportunities for anyone who desires a better life. Be first in line for the
              FitU Apex App founding cohort.
            </p>
            <SignupForm list="apex-cohort" placement="top" cta="Join the Apex Cohort" />
            <p className="small muted" style={{ marginTop: 10 }}>
              Free to join the list. No spam, unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Choose your path</span>
            <h2>Everything FitU, in one place</h2>
            <p className="lead">Whether you want an app in your pocket, a coach by your side, or a community to grow with, there&apos;s a FitU for you.</p>
          </div>
          <div className="grid g4" style={{ marginTop: 40 }}>
            {offers.map((o) => (
              <Link key={o.href} href={o.href} className="card offer-card">
                <Image src={o.img} alt="" width={600} height={450} className="thumb" />
                <div className="body">
                  <span className="eyebrow" style={{ marginBottom: 6 }}>{o.tag}</span>
                  <h3>{o.title}</h3>
                  <p className="muted">{o.text}</p>
                  <span className="more">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SignupBand title="Be a founding member" sub="The FitU Apex App founding cohort is opening now. Save your spot and get early access.">
        <SignupForm list="apex-cohort" placement="middle" cta="Save my spot" />
      </SignupBand>

      <section className="alt">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Our mission</span>
            <h2>
              Fitness with a <span className="red">purpose</span>
            </h2>
            <p className="lead">
              FitU is a Benefit Corporation. That means we&apos;re built to do more than turn a profit: we exist to create health
              and wellness opportunities for anyone who desires a better life.
            </p>
            <p className="muted">
              There&apos;s no magic bullet, no secret pill, no special food. Hard work and good habits give you good health. We
              won&apos;t do the work for you, but we&apos;ll make sure you have every tool you need to succeed.
            </p>
          </div>
          <video className="video" controls preload="none" poster="/video/poster.jpg" playsInline>
            <source src="/video/fitu-commercial.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <SignupBand title="Let us help with your game plan" sub="Get launch news, early access and training tips from FitU.">
        <SignupForm list="apex-cohort" placement="bottom" cta="Count me in" />
      </SignupBand>
    </>
  );
}
