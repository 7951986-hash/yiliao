import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medviachina.com";

export const metadata: Metadata = {
  metadataBase: new URL(
    siteUrl,
  ),
  title: {
    default: "Medical Tourism in China | MedVia China",
    template: "%s | MedVia China",
  },
  description:
    "Plan medical treatment in China with Shanghai hospital information, specialist pathways, cost guidance, interpretation and non-clinical patient coordination.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "MedVia China",
    type: "website",
    images: [{ url: "/images/shanghai-medical-concierge-hero.png", width: 1536, height: 1024, alt: "MedVia China medical coordination in Shanghai" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/shanghai-medical-concierge-hero.png"] },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#12304A" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "MedVia China", url: siteUrl, email: "support@medviachina.com", telephone: "+86 198 5814 6860", address: { "@type": "PostalAddress", addressLocality: "Shanghai", addressCountry: "CN" } },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "MedVia China", publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: ["en", "zh-CN"] },
    ],
  };
  return (
    <html lang="en" className="scroll-smooth">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>{children}</body>
    </html>
  );
}
