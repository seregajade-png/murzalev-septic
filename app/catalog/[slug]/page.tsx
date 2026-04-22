import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadForm } from "@/components/LeadForm";
import {
  products,
  getProduct,
  getCategory,
  productsByCategory,
  formatPrice,
} from "@/lib/products";
import { company } from "@/lib/content";
import {
  IconCheck, IconArrowRight, IconShield, IconClock, IconTruck,
  IconPhone, IconLeaf, IconWrench,
} from "@/components/Icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Товар не найден" };
  return {
    title: `${product.name} — ${formatPrice(product.price)} · Мурзалёв`,
    description: `${product.name}, ${product.size}, ${product.capacity || ""}. Производство и монтаж септиков по всему Крыму.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  if (!category) notFound();

  const related = productsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 3);

  const features = [
    { icon: IconShield, title: "Гарантия", text: "На корпус и монтаж" },
    { icon: IconClock, title: "Монтаж за 1 день", text: "По всему Крыму" },
    { icon: IconTruck, title: "Бесплатная доставка", text: "Собственным транспортом" },
    { icon: IconLeaf, title: "Био-набор в комплекте", text: "Для быстрого запуска" },
  ];

  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="pt-28 pb-20">
        <div className="container-site">
          <nav className="text-sm text-graphite-400 mb-8 flex flex-wrap gap-2 items-center">
            <Link href="/" className="hover:text-forest">Главная</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-forest">Каталог</Link>
            <span>/</span>
            <Link href={`/catalog?category=${category.slug}`} className="hover:text-forest">{category.title}</Link>
            <span>/</span>
            <span className="text-graphite">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
            <div className="space-y-4">
              <div className="card overflow-hidden bg-gradient-to-br from-moss/15 via-sand/10 to-forest/5 aspect-square flex items-center justify-center p-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  priority
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
              <div className="flex gap-2 text-xs text-graphite-400 flex-wrap">
                {category.tag && <span className="chip">{category.tag}</span>}
                <span className="chip">{category.energyDependent ? "Энергозависимый" : "Без электричества"}</span>
                {category.chambers && <span className="chip">{category.chambers} камеры</span>}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Link href={`/catalog?category=${category.slug}`} className="text-sm text-moss-600 hover:text-forest transition">
                  {category.title}
                </Link>
                <h1 className="font-display text-display-md text-forest mt-2 text-balance">{product.name}</h1>
              </div>

              <p className="text-graphite-400 leading-relaxed">{category.description}</p>

              <div className="card p-6 space-y-3 bg-white/80">
                <Spec label="Размер" value={product.size} />
                <Spec label="Вес" value={product.weight} />
                {product.capacity && <Spec label="Производительность" value={product.capacity} />}
                {product.users && <Spec label="Количество пользователей" value={`до ${product.users}`} />}
                <Spec label="Материал" value="Монолитный полипропилен" />
                <Spec label="Гарантия" value="От 12 месяцев" />
              </div>

              <div className="flex items-end justify-between border-t border-graphite-200/60 pt-6">
                <div>
                  <div className="text-xs text-graphite-400 uppercase tracking-wider">Стоимость</div>
                  <div className="font-display text-3xl text-forest mt-1">{formatPrice(product.price)}</div>
                </div>
                <div className="text-xs text-graphite-400 text-right">
                  + доставка бесплатно<br />
                  + монтаж по запросу
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#product-lead" className="btn-primary flex-1 min-w-[200px]">Узнать точную стоимость</a>
                <a href={company.whatsapp} target="_blank" rel="noopener" className="btn-secondary">WhatsApp</a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-forest/10 text-forest flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-graphite">{f.title}</div>
                      <div className="text-xs text-graphite-400">{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-20 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 card p-8 md:p-10 space-y-6">
              <h2 className="font-display text-2xl text-forest">Для кого подходит</h2>
              <ul className="space-y-3 text-graphite">
                {getAudience(product).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-graphite-200/60">
                <h3 className="font-display text-lg text-graphite mb-3">Что в комплекте</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-graphite-400">
                  {["Септик заводской сборки", "Стартовый био-набор", "Бесплатная доставка", "Пакет документов для СЭС", "Консультация инженера", "Гарантийное обслуживание"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <IconCheck className="w-4 h-4 text-moss-600" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="product-lead" className="card p-6 md:p-8 bg-forest text-cream border-forest space-y-5 scroll-mt-28">
              <div className="eyebrow !text-sand">Заявка</div>
              <h3 className="font-display text-xl text-cream">Узнайте стоимость с монтажом</h3>
              <p className="text-sm text-cream/80">Оставьте номер — рассчитаем и перезвоним за 15 минут.</p>
              <div className="[&_input]:bg-cream/10 [&_input]:border-cream/20 [&_input]:text-cream [&_input]:placeholder:text-cream/50 [&_textarea]:bg-cream/10 [&_textarea]:border-cream/20 [&_textarea]:text-cream [&_textarea]:placeholder:text-cream/50 [&_select]:bg-cream/10 [&_select]:border-cream/20 [&_select]:text-cream [&_button]:bg-cream [&_button]:text-forest [&_button]:hover:bg-sand [&_button]:hover:text-forest [&_a]:text-sand [&_.text-red-500]:!text-sand">
                <LeadForm variant="compact" category={product.category} />
              </div>
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 text-cream hover:text-sand transition pt-2">
                <IconPhone className="w-4 h-4" /> {company.phone}
              </a>
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-24">
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-display-sm text-forest">Похожие модели</h2>
                <Link href={`/catalog?category=${category.slug}`} className="btn-ghost">
                  Вся серия <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link key={p.slug} href={`/catalog/${p.slug}`} className="card card-hover overflow-hidden group">
                    <div className="aspect-[4/3] bg-gradient-to-br from-moss/15 via-sand/10 to-forest/5 flex items-center justify-center p-6">
                      <Image src={p.image} alt={p.name} width={300} height={225} className="w-full h-full object-contain transition-transform duration-700 ease-smooth group-hover:scale-110" />
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-display text-base text-graphite">{p.name}</h3>
                      <div className="text-xs text-graphite-400">{p.capacity} · {p.users && `до ${p.users} чел.`}</div>
                      <div className="text-forest font-medium pt-2">{formatPrice(p.price)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-graphite-400">{label}</span>
      <span className="text-graphite font-medium text-right">{value}</span>
    </div>
  );
}

function getAudience(product: { users?: number; category: string }): string[] {
  const items: string[] = [];
  if (product.users) {
    if (product.users <= 5) items.push(`Частный дом или дача с 2–${product.users} жильцами`);
    else if (product.users <= 15) items.push(`Коттедж или дом для постоянного проживания — до ${product.users} человек`);
    else if (product.users <= 50) items.push(`Гостевые дома, турбазы, небольшие гостиницы — до ${product.users} человек`);
    else items.push(`Коттеджные посёлки, отели, многоквартирные дома — до ${product.users} человек`);
  }
  if (product.category === "ecofilter") {
    items.push("Сезонное или непостоянное проживание — не требует электричества");
    items.push("Участки с ограниченным энергоснабжением");
  }
  if (product.category.includes("plus") || product.category.includes("premium")) {
    items.push("Участки с высоким уровнем грунтовых вод");
    items.push("Дома с круглогодичным проживанием");
  }
  if (product.category === "nakopitel") {
    items.push("Участки без возможности организовать дренаж");
    items.push("Временное решение — с последующим вывозом ассенизатором");
  }
  if (product.category === "ecofilter-stok") {
    items.push("Очистка ливневых стоков с территории, парковок, крыш");
    items.push("Объекты с требованиями по экологии");
  }
  if (items.length === 0) {
    items.push("Частные дома, коттеджи, дачи");
    items.push("Загородные объекты в Крыму");
  }
  return items;
}
