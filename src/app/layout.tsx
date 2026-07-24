import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site, socials } from "@/config/site";

const montserrat = Montserrat({
  weight: ["500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TEX Labs — Platform Engineering, Cloud & SaaS",
    template: "%s | TEX Labs",
  },
  description: site.description,
  keywords: [
    "TEX Labs",
    "platform engineering",
    "cloud infrastructure",
    "SaaS development",
    "backend engineering",
    "blockchain infrastructure",
    "DeFi",
    "AI integration",
    "Midnight Network",
    "software engineering company",
  ],
  authors: [{ name: "TEX Labs", url: site.url }],
  creator: "TEX Labs",
  publisher: "TEX Labs",
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/tex.png",
  },
  openGraph: {
    title: "TEX Labs — Platform Engineering, Cloud & SaaS",
    description: site.description,
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "TEX Labs",
    images: [
      {
        url: "/tex.png",
        width: 1200,
        height: 630,
        alt: "TEX Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEX Labs — Platform Engineering, Cloud & SaaS",
    description: site.description,
    images: ["/tex.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      logo: `${site.url}/tex.png`,
      sameAs: Object.values(socials).filter((u) => u && u !== "#"),
      knowsAbout: [
        "Platform Engineering",
        "Cloud Infrastructure",
        "SaaS Development",
        "Blockchain",
        "DeFi",
        "AI Integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-ink font-sans text-slate-200 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleAnalytics gaId="G-MK95TFT1EJ" />
      </body>
    </html>
  );
}
