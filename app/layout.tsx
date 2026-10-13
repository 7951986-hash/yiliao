import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://shanghai-medical-concierge.tangycream256.chatgpt.site",
  ),
  title: {
    default: "Shanghai Medical Concierge | International Patient Support",
    template: "%s | Shanghai Medical Concierge",
  },
  description:
    "Independent hospital information and non-clinical medical concierge support for international patients planning care in Shanghai.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body><NextIntlClientProvider locale="en">{children}</NextIntlClientProvider></body>
    </html>
  );
}
