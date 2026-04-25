import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadForm } from "@/components/LeadForm";
import {
  IconShield, IconClock, IconLeaf, IconTruck, IconWrench, IconDrop,
  IconArrowRight, IconCheck, IconStar, IconPhone,
} from "@/components/Icons";
import { company, hero, advantages, processSteps, reviews, faq, works } from "@/lib/content";
import { categories, getMinPrice, formatPrice } from "@/lib/products";
import { FAQAccordion } from "./_sections/FAQAccordion";
import { Reveal } from "./_sections/Reveal";
import { CountUp } from "@/components/CountUp";
import { ParallaxHero } from "@/components/ParallaxHero";
import { SplitText } from "@/components/SplitText";

const iconMap = { IconShield, IconClock, IconLeaf, IconTruck, IconWrench, IconDrop };

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <main className="pt-20">
        <HeroSection />
        <AdvantagesSection />
        <CatalogPreview />
        <SelectorSection />
        <AboutSection />
        <WorksSection />
        <ProcessSection />
        <ReviewsSection />
        <LeadSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full bg-moss/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-forest/10 blur-3xl" />
      </div>

      <div className="container-site relative grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="space-y-8">
          <Reveal>
            <div className="eyebrow">Производство и монтаж · {company.city}</div>
          </Reveal>
          <SplitText
            text={hero.title}
            as="h1"
            className="font-display text-display-xl font-light text-forest text-balance"
            delay={100}
            stagger={50}
          />
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-graphite-400 leading-relaxed max-w-xl">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3">
              <a href="#lead-form" className="btn-primary btn-lg">
                Получить консультацию <IconArrowRight className="w-5 h-5" />
              </a>
              <a href="#catalog" className="btn-secondary btn-lg">Смотреть каталог</a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="grid grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-graphite-200/60 max-w-lg">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <CountUp value={s.value} className="font-display text-2xl md:text-3xl text-forest block" />
                  <div className="text-xs text-graphite-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative w-full max-w-[560px] ml-auto">
            <ParallaxHero strength={0.08}>
              <div className="relative aspect-[5/6] rounded-[2.5rem] bg-gradient-to-br from-moss/15 via-sand/10 to-forest/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream-200/50" />
                <Image
                  src="/images/products/septik-hero.png"
                  alt="Септик Экофильтр Мурзалёв"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 560px"
                  className="object-contain p-6 mix-blend-multiply"
                />
              </div>
            </ParallaxHero>

            <div className="absolute top-6 -right-2 md:-right-6 bg-cream/95 backdrop-blur border border-graphite-200/40 rounded-xl px-4 py-3 shadow-elevated hidden md:flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0">
                <IconCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-graphite leading-tight">Без запаха</div>
                <div className="text-[11px] text-graphite-400">СанПиН 2.1.5.980-00</div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-2 md:-left-6 bg-cream/95 backdrop-blur border border-graphite-200/40 rounded-xl px-4 py-3 shadow-elevated hidden md:flex items-center gap-3 animate-float-delayed">
              <div className="w-9 h-9 rounded-full bg-moss/20 text-forest flex items-center justify-center flex-shrink-0">
                <IconClock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-graphite leading-tight">Монтаж за 1 день</div>
                <div className="text-[11px] text-graphite-400">По всему Крыму</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-section">
      <div className="container-site">
        <SectionHeader eyebrow="Почему Мурзалёв" title="Шесть причин выбрать нас" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {advantages.map((a, i) => {
            const Icon = iconMap[a.icon as keyof typeof iconMap];
            return (
              <Reveal key={a.title} delay={i * 60}>
                <div className="card card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-md bg-forest/10 text-forest flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-graphite mb-3">{a.title}</h3>
                  <p className="text-graphite-400 leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CatalogPreview() {
  return (
    <section id="catalog" className="py-section">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeader eyebrow="Каталог" title="Что мы производим" subtitle="От дачного септика до промышленных станций очистки" inline />
          <Link href="/catalog" className="btn-ghost self-start">
            Весь каталог <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.slice(0, 6).map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <Link href={`/catalog?category=${c.slug}`} className="group card card-hover overflow-hidden block h-full">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-moss/15 via-sand/10 to-forest/5 flex items-center justify-center overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 ease-smooth group-hover:scale-110"
                  />
                  {c.tag && <span className="absolute top-4 left-4 chip bg-forest text-cream">{c.tag}</span>}
                  {c.badge && <span className="absolute top-4 right-4 chip bg-moss/90 text-cream text-[10px]">{c.badge}</span>}
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-xl text-graphite">{c.title}</h3>
                  <p className="text-sm text-graphite-400 leading-relaxed line-clamp-2">{c.short}</p>
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-forest font-medium">от {formatPrice(getMinPrice(c.slug))}</span>
                    <span className="text-graphite-400 text-sm group-hover:text-forest transition-colors flex items-center gap-1">
                      Подробнее <IconArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectorSection() {
  return (
    <section className="py-section">
      <div className="container-site">
        <div className="card p-8 md:p-14 bg-gradient-to-br from-forest to-forest-700 text-cream relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss/20 blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-5 max-w-xl">
              <div className="eyebrow !text-sand">Не знаете, какой септик нужен?</div>
              <h2 className="font-display text-display-md text-cream text-balance">
                Подберём модель <span className="italic text-sand">бесплатно</span>
              </h2>
              <p className="text-cream/80 leading-relaxed">
                Расскажите нам о вашем участке — количестве жильцов, типе грунта, уровне грунтовых вод. Инженер подберёт оптимальную модель и рассчитает точную стоимость монтажа.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#lead-form" className="btn bg-cream text-forest px-6 py-3 hover:bg-sand transition">
                  Оставить заявку
                </a>
                <a href={`tel:${company.phoneRaw}`} className="btn border border-cream/30 text-cream px-6 py-3 hover:bg-cream/10">
                  <IconPhone className="w-4 h-4" /> {company.phone}
                </a>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3 text-sm">
              {["Количество людей", "Тип грунта", "Грунтовые воды", "Бюджет"].map((item, i) => (
                <div key={item} className="flex items-center gap-3 bg-cream/5 border border-cream/10 rounded-md px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-sand/20 text-sand flex items-center justify-center font-mono text-xs">0{i + 1}</div>
                  <span className="text-cream/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-section">
      <div className="container-site grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="space-y-6">
            <div className="eyebrow">О компании</div>
            <h2 className="font-display text-display-md text-forest text-balance">
              Собственный завод <span className="italic">в сердце Крыма</span>
            </h2>
            <p className="text-graphite-400 leading-relaxed">
              Производим септики, накопители, дренажные колодцы и кессоны на собственном заводе в Симферополе. Мы — единственный производитель таких систем в Крыму: здесь живём, здесь работаем, здесь отвечаем за результат.
            </p>
            <p className="text-graphite-400 leading-relaxed">
              Делаем всё: от маленьких дачных септиков до огромных резервуаров для гостиниц и многоквартирных домов. Работаем официально — по договору, с пакетом документов для водоканала и СЭС.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-graphite-200/60">
              <div><div className="font-display text-3xl text-forest">200+</div><div className="text-xs text-graphite-400 mt-1">установлено</div></div>
              <div><div className="font-display text-3xl text-forest">70+</div><div className="text-xs text-graphite-400 mt-1">моделей</div></div>
              <div><div className="font-display text-3xl text-forest">98%</div><div className="text-xs text-graphite-400 mt-1">очистка</div></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="grid grid-cols-2 gap-4">
            <div className="card overflow-hidden aspect-[3/4] bg-gradient-to-br from-moss/20 to-forest/10">
              <Image src="/images/about-production.jpg" alt="Производство Мурзалёв" width={300} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <div className="card p-6 bg-forest text-cream border-forest">
                <div className="font-display text-2xl mb-1">СанПиН</div>
                <div className="text-xs text-cream/70">2.1.5.980-00</div>
                <div className="text-sm text-cream/80 mt-3">Соответствие нормам по охране поверхностных вод</div>
              </div>
              <div className="card p-6">
                <div className="font-display text-2xl text-forest mb-1">УФ / Озон</div>
                <div className="text-sm text-graphite-400 mt-2">Дополнительное обеззараживание по запросу</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works" className="py-section">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeader eyebrow="Наши работы" title="Реальные проекты в Крыму" inline />
          <a href="#lead-form" className="btn-ghost self-start">
            Хочу так же <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((w, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="card card-hover overflow-hidden group">
                <div className="aspect-[4/3] bg-gradient-to-br from-sand/20 to-moss/10 relative overflow-hidden">
                  <Image src={w.image} alt={w.title} width={400} height={300} className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base text-graphite">{w.title}</h3>
                  <p className="text-xs text-graphite-400 mt-1">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="py-section">
      <div className="container-site">
        <SectionHeader eyebrow="Как мы работаем" title="Пять шагов от заявки до запуска" />
        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {processSteps.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card p-6 h-full relative">
                <div className="font-display text-4xl text-moss/40 font-light">0{i + 1}</div>
                <h3 className="font-display text-base text-graphite mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-graphite-400 leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-section">
      <div className="container-site">
        <SectionHeader eyebrow="Отзывы" title="Что говорят клиенты" subtitle="Отзывы с Avito · 5★ средний рейтинг" />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card p-7 space-y-4 h-full flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="flex gap-1 text-sand">
                    {Array.from({ length: r.rating }).map((_, j) => <IconStar key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-xs text-graphite-300 uppercase tracking-wider">{r.source}</span>
                </div>
                <p className="text-graphite leading-relaxed flex-1">«{r.text}»</p>
                <div className="pt-4 border-t border-graphite-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center font-display text-forest">{r.name[0]}</div>
                  <div>
                    <div className="text-sm font-medium text-graphite">{r.name}</div>
                    <div className="text-xs text-graphite-300">{r.date}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadSection() {
  return (
    <section id="lead-form" className="py-section">
      <div className="container-site">
        <div className="card p-8 md:p-14 bg-cream-200/60 border-graphite-200/40 grid md:grid-cols-[1.2fr_1fr] gap-10">
          <div className="space-y-6">
            <div className="eyebrow">Заявка на консультацию</div>
            <h2 className="font-display text-display-md text-forest text-balance">
              Оставьте заявку — <span className="italic">перезвоним</span> за час
            </h2>
            <p className="text-graphite-400 leading-relaxed">
              Инженер подберёт модель септика под ваш участок, рассчитает точную стоимость и срок монтажа. Консультация и выезд на замеры — бесплатно.
            </p>
            <div className="pt-4 space-y-3">
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-3 text-graphite hover:text-forest transition group">
                <div className="w-10 h-10 rounded-full bg-forest/10 group-hover:bg-forest group-hover:text-cream transition flex items-center justify-center">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">{company.phone}</div>
                  <div className="text-xs text-graphite-400">{company.schedule}</div>
                </div>
              </a>
              <div className="flex flex-wrap gap-2">
                <a href={company.whatsapp} target="_blank" rel="noopener" className="btn-secondary btn-sm flex-1">WhatsApp</a>
                <a href={company.telegram} target="_blank" rel="noopener" className="btn-secondary btn-sm flex-1">Telegram</a>
                <a href={company.max} target="_blank" rel="noopener" className="btn-secondary btn-sm flex-1">MAX</a>
                <a href={company.avito} target="_blank" rel="noopener" className="btn-secondary btn-sm flex-1">Авито</a>
              </div>
            </div>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-section">
      <div className="container-site max-w-3xl">
        <SectionHeader eyebrow="Вопросы и ответы" title="Часто спрашивают" />
        <div className="mt-10">
          <FAQAccordion items={faq} />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle, inline }: { eyebrow: string; title: string; subtitle?: string; inline?: boolean }) {
  return (
    <div className={`space-y-4 ${inline ? "" : "max-w-2xl"}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="font-display text-display-md text-forest text-balance">{title}</h2>
      {subtitle && <p className="text-graphite-400 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
