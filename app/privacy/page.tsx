import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <section>
      <div className="wrap prose">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: November 2026</p>
        <h2>What we collect</h2>
        <p>When you sign up or apply on this site, we collect the details you give us: your name, email address and, for coaching applications, your phone number and goals. Questionnaire answers can include optional health notes you choose to share; we use these only to keep your training safe and never share them outside the FitU coaching team.</p>
        <h2>How we use it</h2>
        <p>We use your details to send the updates you asked for, respond to your application and tell you about FitU programs. We never sell your personal information.</p>
        <h2>Where it is stored</h2>
        <p>Signups are stored securely with our service providers, such as Google and our email marketing platform.</p>
        <h2>Your choices</h2>
        <p>You can unsubscribe from any email at any time, or ask us to delete your information by emailing <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
      </div>
    </section>
  );
}
