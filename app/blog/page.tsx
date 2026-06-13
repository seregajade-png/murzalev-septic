import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { articles } from "@/lib/articles";
import { IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Статьи о септиках, накопителях и автономной канализации в Крыму",
  description:
    "Экспертные статьи завода Мурзалёв: как выбрать септик, в чём разница между накопителем и септиком, монтаж в скальном грунте Крыма, СанПиН и нормы.",
  alternates: { canonical: "/blog" },
};

const categoryColors: Record<string, string> = {
  Выбор: "bg-forest/10 text-forest",
  Технология: "bg-moss/20 text-forest",
  Монтаж: "bg-sand/30 text-graphite",
  Крым: "bg-forest text-cream",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="pt-28 pb-20">
        <div className="container-site">
          <div className="max-w-3xl space-y-5 mb-12">
            <div className="eyebrow">Блог</div>
            <h1 className="font-display text-display-lg text-forest text-balance">
              Статьи о септиках, накопителях и <span className="italic">автономной канализации</span>
            </h1>
            <p className="text-graphite-400 leading-relaxed">
              Опыт завода «Мурзалёв» в Симферополе — как выбрать септик под Крымские грунты,
              когда нужен накопитель, а когда септик, что в технологиях правда, а что маркетинг.
              Без воды и не для галочки.
            </p>
          </div>

          {/* Featured article */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group card card-hover block overflow-hidden mb-10"
          >
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="p-8 md:p-12 space-y-5 order-2 md:order-1">
                <div className="flex items-center gap-3 text-xs">
                  <span className={`px-3 py-1 rounded-full font-medium ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="text-graphite-300">{formatDate(featured.publishedAt)}</span>
                  <span className="text-graphite-300">· {featured.readMinutes} мин</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-graphite leading-tight text-balance group-hover:text-forest transition-colors">
                  {featured.title}
                </h2>
                <p className="text-graphite-400 leading-relaxed">{featured.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-forest font-medium pt-2">
                  Читать статью <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gradient-to-br from-forest via-moss/40 to-sand/50 min-h-[200px] md:min-h-full flex items-center justify-center p-10">
                <div className="font-display text-6xl md:text-7xl text-cream/90 leading-none">
                  {featured.category[0]}
                </div>
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group card card-hover overflow-hidden flex flex-col"
              >
                <div className="bg-gradient-to-br from-moss/15 via-sand/15 to-forest/10 aspect-[16/10] flex items-end p-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[a.category]}`}>
                    {a.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <h3 className="font-display text-lg text-graphite leading-snug text-balance group-hover:text-forest transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-graphite-400 leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-graphite-200/50 text-xs">
                    <span className="text-graphite-300">{formatDate(a.publishedAt)}</span>
                    <span className="text-graphite-300">{a.readMinutes} мин</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
