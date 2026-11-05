import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { SignupBand } from "@/components/Chrome";
import { apparelBrands } from "@/lib/site";

export const metadata: Metadata = {
  title: "FitU Apparel",
  description: "Approximit Fit, Z1G, Yak Fitness and more from the FitU family of brands.",
};

export default function Apparel() {
  return (
    <>
      <section className="hero" style={{ minHeight: 480 }}>
        <Image src="/images/pink-fit.jpg" alt="" fill priority className="hero-bg" sizes="100vw" style={{ objectPosition: "center 30%" }} />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">FitU Apparel</span>
            <h1>
              Gear that works <span className="red">as hard as you</span>
            </h1>
            <p className="lead">The FitU family of brands. Be first to hear about new drops.</p>
            <SignupForm list="apparel" placement="top" cta="Get drop alerts" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Our brands</span>
            <h2>Find your fit</h2>
          </div>
          <div className="grid g3" style={{ marginTop: 36 }}>
            {apparelBrands.map((b) => {
              const live = b.url !== "#";
              const inner = (
                <>
                  {b.image ? (
                    <Image src={b.image} alt="" width={600} height={450} className="thumb" />
                  ) : (
                    <div className="thumb" style={{ display: "grid", placeItems: "center", background: "#141416" }}>
                      <span className="display" style={{ fontSize: "2.4rem" }}>{b.name}</span>
                    </div>
                  )}
                  <div className="body">
                    <h3>{b.name}</h3>
                    <p className="muted">{b.blurb}</p>
                    <span className="more">{live ? "Shop now →" : "Coming soon"}</span>
                  </div>
                </>
              );
              return live ? (
                <a key={b.name} href={b.url} className="card offer-card" target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={b.name} className="card offer-card">{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <SignupBand title="Never miss a drop" sub="New releases, restocks and member-only discounts.">
        <SignupForm list="apparel" placement="bottom" cta="Sign me up" />
      </SignupBand>
    </>
  );
}
