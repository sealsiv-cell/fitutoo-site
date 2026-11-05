import Image from "next/image";
import Link from "next/link";
import { nav, site, links } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="FitU home">
          <Image src="/images/logo-hex.png" alt="" width={44} height={40} priority />
          <span>FIT U</span>
        </Link>
        <nav aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <Image src="/images/logo-circle.png" alt="FitU" width={120} height={81} />
          <p className="muted small">
            FitU is a Benefit Corporation. {site.tagline}
          </p>
        </div>
        <div className="footer-links">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${site.contactEmail}`}>Contact</a>
          {links.instagram !== "#" && <a href={links.instagram}>Instagram</a>}
          {links.facebook !== "#" && <a href={links.facebook}>Facebook</a>}
        </div>
      </div>
      <div className="wrap small muted copyright">© {new Date().getFullYear()} FitU. All rights reserved.</div>
    </footer>
  );
}

export function SignupBand({
  title,
  sub,
  children,
  id,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="band" id={id}>
      <div className="wrap band-inner">
        <div>
          <h2>{title}</h2>
          {sub && <p className="lead">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
