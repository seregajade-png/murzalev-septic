import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CatalogList } from "./CatalogList";

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
      </main>
      <Footer />
    </>
  );
}
