import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadForm } from "@/components/LeadForm";
import { getArticle, articles, recentArticles, type Block } from "@/lib/articles";
import { getProduct, getCategory, formatPrice } from "@/lib/products";
import { company } from "@/lib/content";
import { IconArrowRight, IconCheck } from "@/components/Icons";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://septicmurzalev.ru";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Статья не найдена" };
  return {
    title: `${article.title} · Блог Мурзалёв`,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${SITE}/blog/${article.slug}`,
      publishedTime: article.publishedAt,
      authors: [company.name],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ProductCard({ slug }: { slug: string }) {
  const p = getProduct(slug);
  if (!p) return null;
  const cat = getCategory(p.category);
  return (
    <Link
      href={`/catalog/${p.slug}`}
      className="not-prose group card card-hover overflow-hidden flex items-center gap-5 p-5 my-6"
    >
      {cat?.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cat.image} alt={p.name} className="w-24 h-24 object-contain shrink-0" />
      )}
      <div className="flex-1 space-y-1">
        <div className="font-display text-lg text-graphite group-hover:text-forest transition">{p.name}</div>
        <div className="text-xs text-graphite-400">{p.size} · {p.weight}</div>
        <div className="text-forest font-medium pt-1">от {formatPrice(p.price)}</div>
      </div>
      <IconArrowRight className="w-5 h-5 text-graphite-400 group-hover:text-forest group-hover:translate-x-1 transition shrink-0" />
    </Link>
  );
}

function CategoryCard({ slug, text }: { slug: string; text?: string }) {
  const cat = getCategory(slug as never);
  if (!cat) return null;
  const url = `/catalog?category=${cat.slug}`;
  return (
    <Link
      href={url}
      className="not-prose inline-flex items-center gap-2 my-4 px-5 py-3 rounded-full bg-forest/10 text-forest font-medium hover:bg-forest hover:text-cream transition"
    >
      <span>{text || cat.title}</span>
      <IconArrowRight className="w-4 h-4" />
    </Link>
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="text-graphite leading-relaxed">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="font-display text-2xl md:text-3xl text-forest mt-12 mb-4 text-balance">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2.5 my-4">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-graphite leading-relaxed">
              <IconCheck className="w-5 h-5 text-moss-600 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const variant = block.variant || "info";
      const cls =
        variant === "warning"
          ? "border-l-4 border-sand bg-sand/15 text-graphite"
          : "border-l-4 border-forest bg-forest/5 text-graphite";
      return (
        <aside key={i} className={`my-6 p-5 rounded-r-lg ${cls}`}>
          <p className="leading-relaxed">{block.text}</p>
        </aside>
      );
    }
    case "product":
      return <ProductCard key={i} slug={block.slug} />;
    case "category":
      return <CategoryCard key={i} slug={block.slug} text={block.text} />;
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = recentArticles(article.slug, 3);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: company.name,
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: `${SITE}/images/logo.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${article.slug}`,
    },
  };

  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="pt-28 pb-20">
        <div className="container-site">
          <nav className="text-sm text-graphite-400 mb-8 flex flex-wrap gap-x-2 gap-y-1 items-center">
            <Link href="/" className="py-1.5 hover:text-forest">Главная</Link>
            <span>/</span>
            <Link href="/blog" className="py-1.5 hover:text-forest">Блог</Link>
            <span>/</span>
            <span className="py-1.5 text-graphite">{article.category}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <article className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest font-medium">{article.category}</span>
                <span className="text-graphite-300">{formatDate(article.publishedAt)}</span>
                <span className="text-graphite-300">· {article.readMinutes} мин чтения</span>
              </div>

              <h1 className="font-display text-display-md md:text-display-lg text-forest text-balance leading-tight">
                {article.title}
              </h1>

              <p className="text-lg text-graphite-400 leading-relaxed border-l-4 border-moss/40 pl-5">
                {article.excerpt}
              </p>

              <div className="pt-6 space-y-1">
                {article.body.map((b, i) => renderBlock(b, i))}
              </div>

              {/* CTA after article */}
              <div className="mt-16 card p-8 md:p-10 bg-forest text-cream border-forest space-y-5">
                <div className="font-display text-2xl text-cream">Нужна консультация по подбору?</div>
                <p className="text-cream/80 leading-relaxed">
                  Инженер бесплатно выезжает на ваш участок, смотрит грунт пробным шурфом, считает фиксированную смету.
                  Перезваниваем в течение часа в рабочее время.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={`tel:${company.phoneRaw}`} className="btn bg-cream text-forest px-6 py-3 hover:bg-sand">
                    {company.phone}
                  </a>
                  <a href={company.telegram} target="_blank" rel="noopener" className="btn border border-cream/30 text-cream px-6 py-3 hover:bg-cream/10">
                    Написать в Telegram
                  </a>
                </div>
              </div>

              {/* Lead form short */}
              <div id="article-lead" className="mt-10 card p-8 md:p-10 space-y-5">
                <div className="eyebrow">Заявка</div>
                <h3 className="font-display text-xl text-forest">Оставьте номер — перезвоним</h3>
                <LeadForm variant="compact" />
              </div>
            </article>

            {/* Sidebar related */}
            <aside className="space-y-6 lg:sticky lg:top-28 self-start">
              <div>
                <div className="eyebrow mb-4">Ещё статьи</div>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="block card card-hover p-5 space-y-2"
                    >
                      <div className="text-xs text-moss-600 font-medium">{r.category}</div>
                      <div className="font-display text-base text-graphite leading-snug">{r.title}</div>
                      <div className="text-xs text-graphite-300">{r.readMinutes} мин</div>
                    </Link>
                  ))}
                </div>
                <Link href="/blog" className="btn-ghost mt-4 inline-flex">
                  Все статьи <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </>
  );
}
