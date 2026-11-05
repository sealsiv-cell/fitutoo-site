import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Header, Footer } from "@/components/Chrome";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fitutoo.com"),
  title: { default: "FitU | Fitness, Wellness & Coaching", template: "%s | FitU" },
  description:
    "FitU is a Benefit Corporation creating health and wellness opportunities for anyone who desires a better life. Apex App, Elite Personal Training, Wellness Academy and apparel.",
  openGraph: { images: ["/images/hero-silhouette.jpg"], siteName: "FitU" },
  icons: { icon: "/images/logo-hex.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
