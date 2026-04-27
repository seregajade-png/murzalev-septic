import { Suspense } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CatalogList } from "./CatalogList";
import { company } from "@/lib/content";
import { IconPhone } from "@/components/Icons";

export const metadata = {
  title: "Каталог септиков и резервуаров — Мурзалёв",
  description: "Полный каталог септиков Экофильтр, накопителей, дренажных колодцев и кессонов. Собственное производство в Крыму.",
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="pt-28 pb-20">
        <div className="container-site">
          <div className="max-w-3xl space-y-5 mb-12">
            <div className="eyebrow">Каталог</div>
            <h1 className="font-display text-display-lg text-forest text-balance">
              Вся продукция <span className="italic">Мурзалёв</span>
            </h1>
            <p className="text-graphite-400 leading-relaxed">
              Септики, накопители, дренажные колодцы, кессоны и погреба из монолитного полипропилена. Собственное производство в Симферополе, доставка по всему Крыму.
            </p>
          </div>
          <Suspense fallback={<div className="text-graphite-400">Загрузка…</div>}>
            <CatalogList />
          </Suspense>
        </div>

        <section className="container-site mt-20">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-5 rounded-[2.5rem] overflow-hidden">
            <div className="bg-forest text-cream p-8 md:p-10 flex flex-col justify-between gap-8 min-h-[400px]">
              <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight text-balance">
                Или свяжитесь<br/>
                <span className="italic text-sand">с нами напрямую</span>
              </h2>

              <div className="space-y-3">
                <a
                  href={company.telegram}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 bg-cream/95 hover:bg-cream text-graphite rounded-2xl px-5 py-3.5 transition"
                >
                  <span className="w-9 h-9 rounded-full bg-[#229ED9] text-white flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.036 16.57l-.396 3.958c.564 0 .81-.242 1.104-.532l2.648-2.525 5.487 4.017c1.006.554 1.715.263 1.987-.93l3.602-16.874c.32-1.492-.54-2.075-1.52-1.71L1.11 9.38c-1.459.566-1.437 1.376-.248 1.742l5.124 1.596L17.794 5.24c.56-.37 1.07-.165.65.204L9.036 16.57z"/>
                    </svg>
                  </span>
                  <span className="font-medium">Написать в Telegram</span>
                </a>

                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 bg-cream/95 hover:bg-cream text-graphite rounded-2xl px-5 py-3.5 transition"
                >
                  <span className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span className="font-medium">Написать в WhatsApp</span>
                </a>

                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-3 bg-cream/95 hover:bg-cream text-graphite rounded-2xl px-5 py-3.5 transition"
                >
                  <span className="w-9 h-9 rounded-full bg-forest text-cream flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-4 h-4" />
                  </span>
                  <span className="font-medium">{company.phone}</span>
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs">
                  <span className="uppercase tracking-[0.2em] text-sand">Время работы:</span>
                  <span className="text-cream/90">пн–сб 09:00–17:00</span>
                  <span className="text-cream/70">связь до 23:00</span>
                </div>
                <Image src="/images/logo.svg" alt={company.name} width={130} height={40} className="h-9 w-auto brightness-0 invert opacity-90" />
              </div>
            </div>

            <div className="relative min-h-[400px] bg-graphite-200/30">
              <iframe
                title="Карта Мурзалёв"
                src="https://yandex.ru/map-widget/v1/?ll=34.072463%2C44.926556&mode=usermaps&source=mapframe&um=constructor%3A159684d441e7918b1832635d19e8b2c5869dbebb056a9cb014c2bc2966bbc0a4&z=17"
                width="100%"
                height="100%"
                frameBorder={0}
                className="absolute inset-0"
                allowFullScreen
              />
              <a
                href="https://yandex.ru/maps/146/simferopol/?ll=34.072463%2C44.926556&mode=usermaps&um=constructor%3A159684d441e7918b1832635d19e8b2c5869dbebb056a9cb014c2bc2966bbc0a4&z=17"
                target="_blank"
                rel="noopener"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-cream/95 backdrop-blur text-forest text-sm font-medium px-4 py-2 rounded-full shadow-elevated hover:bg-cream transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                Открыть в Яндекс Картах
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
