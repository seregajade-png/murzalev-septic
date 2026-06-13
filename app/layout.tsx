import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";
import { Preloader } from "@/components/Preloader";
import { YandexMetrika } from "@/components/YandexMetrika";

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

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://septicmurzalev.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Септики в Крыму под ключ — свой завод в Симферополе | Мурзалёв",
    template: "%s — Мурзалёв",
  },
  description:
    "Свой завод септиков в Симферополе. 70+ моделей под любой грунт и бюджет. Монтаж под ключ за 1-5 дней, без запаха, без откачки. Гарантия от 12 месяцев, бесплатный выезд по всему Крыму.",
  keywords: [
    "септик в Крыму",
    "септик Симферополь",
    "септики Крым под ключ",
    "септики в Крыму от производителя",
    "свой завод септиков",
    "септик без запаха",
    "септик без откачки",
    "автономная канализация Крым",
    "септик под ключ за 1 день",
    "Экофильтр",
    "накопитель Крым",
    "дренажный колодец Крым",
    "кессон Крым",
    "септики Севастополь",
    "Мурзалёв",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE,
    siteName: company.name,
    title: "Септики в Крыму под ключ — свой завод в Симферополе",
    description:
      "Производим и устанавливаем по всему Крыму. 70+ моделей, монтаж за 1-5 дней, без запаха и откачки. Гарантия, договор, бесплатный выезд инженера.",
    images: [
      {
        url: "/images/products/septik-hero.png",
        width: 1200,
        height: 630,
        alt: "Септик Мурзалёв — свой завод в Симферополе",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Септики в Крыму под ключ — Мурзалёв",
    description: "Свой завод в Симферополе. Монтаж за 1 день, без запаха и откачки, гарантия 12+ месяцев.",
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
        <YandexMetrika />
      </body>
    </html>
  );
}
