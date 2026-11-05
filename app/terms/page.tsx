import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <section>
      <div className="wrap prose">
        <h1>Terms of Use</h1>
        <p className="muted">Last updated: November 2026</p>
        <h2>Health disclaimer</h2>
        <p>FitU content and programs are for general fitness and wellness purposes and are not medical advice. Talk to your doctor before starting any new exercise or nutrition program. Individual results vary.</p>
        <h2>Use of this site</h2>
        <p>All content on this site belongs to FitU and may not be copied or reused without permission.</p>
        <h2>Programs and purchases</h2>
        <p>Specific terms for coaching, the FitU Apex app, the Wellness Academy and apparel are provided at the time of purchase or enrollment.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
      </div>
    </section>
  );
}
