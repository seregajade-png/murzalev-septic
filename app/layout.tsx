import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";
import { Preloader } from "@/components/Preloader";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://85.239.34.21:3001";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Мурзалёв — септики, накопители, дренажные колодцы в Крыму",
    template: "%s — Мурзалёв",
  },
  description:
    "Производство и монтаж септиков серии Экофильтр, накопителей, кессонов и дренажных колодцев. Собственный завод в Симферополе, работаем по всему Крыму.",
  keywords: [
    "септик Крым",
    "септик Симферополь",
    "Экофильтр",
    "накопитель",
    "дренажный колодец",
    "кессон",
    "септик без откачки",
    "септик под ключ",
    "Мурзалёв",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE,
    siteName: company.name,
    title: "Мурзалёв — септики и накопители в Крыму",
    description:
      "Производство и монтаж септиков под ключ. Без запаха, без откачки, с гарантией. Собственный завод в Симферополе.",
    images: [
      {
        url: "/images/products/septik-hero.png",
        width: 1200,
        height: 630,
        alt: "Септик Мурзалёв",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Мурзалёв — септики в Крыму",
    description: "Производство и монтаж септиков под ключ по всему Крыму.",
    images: ["/images/products/septik-hero.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `${SITE}/images/products/septik-hero.png`,
    "@id": SITE,
    url: SITE,
    telephone: company.phone,
    email: company.email,
    priceRange: "от 650 ₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Генерала Васильева",
      addressLocality: "Симферополь",
      addressRegion: "Республика Крым",
      addressCountry: "RU",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Крым" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [company.whatsapp, company.telegram],
  };

  return (
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <body>
        <Preloader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
