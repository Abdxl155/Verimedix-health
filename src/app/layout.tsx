import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE, KEYWORDS } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

// Self-hosted fonts (no build-time network dependency).
const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/fraunces-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/fraunces-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/fraunces-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/outfit-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/outfit-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/outfit-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/outfit-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/outfit-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} blood glucose meter`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/verimedix-logo.png`,
    description: SITE.description,
    email: SITE.email,
    areaServed: ["GB", "EU"],
    knowsAbout: [
      "Blood glucose monitoring",
      "Diabetes care",
      "Healthcare diagnostics",
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Verimedix Blood Glucose Meter",
    sku: SITE.productModel,
    category: "Blood glucose monitoring device",
    brand: { "@type": "Brand", name: SITE.name },
    image: `${SITE.url}/images/meter.png`,
    description:
      "Compact self-testing blood glucose monitoring system with a large display, coding-free workflow and 500-result memory.",
  };

  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
