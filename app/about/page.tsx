import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "../_sections/Reveal";
import { CountUp } from "@/components/CountUp";
import { company } from "@/lib/content";
import {
  IconShield, IconClock, IconLeaf, IconWrench, IconDrop, IconCheck,
  IconPhone, IconTruck,
} from "@/components/Icons";

export const metadata = {
  title: "О компании — Мурзалёв",
  description:
    "Производство септиков, накопителей и дренажных колодцев в Крыму с 2014 года. Собственный завод в Симферополе, полный цикл — от проектирования до монтажа.",
};

const values = [
  {
    icon: IconLeaf,
    title: "Производим сами",
    text: "Мы не перепродаём чужое. Каждый септик делается на нашем заводе в Симферополе — от нарезки листа полипропилена до финальной сборки.",
  },
  {
    icon: IconShield,
    title: "Отвечаем за результат",
    text: "Работаем только по договору. Даём гарантию на корпус и монтаж. Предоставляем полный пакет документов для водоканала и СЭС.",
  },
  {
    icon: IconClock,
    title: "Быстро реагируем",
    text: "Отвечаем на заявки в течение 15 минут в рабочие часы. Производство — 1–5 дней, монтаж — обычно за один день.",
  },
  {
    icon: IconWrench,
    title: "Подбираем под задачу",
    text: "От маленького дачного септика до очистных сооружений для посёлков и гостиниц. Рассчитаем под ваш грунт, нагрузку и бюджет.",
  },
];

const milestones = [
  { year: "2014", text: "Начало работы. Первый септик для частного дома в Симферополе." },
  { year: "2017", text: "Запуск серии «Экофильтр ПЛЮС» с энергозависимой очисткой." },
  { year: "2019", text: "Открытие второго цеха. Производство коммерческих станций до 50 м³/сут." },
  { year: "2022", text: "Расширение ассортимента: кессоны, погреба, системы ливневых стоков." },
  { year: "2024", text: "Более 200 установленных септиков по всему Крыму." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="pt-28 pb-20">
        <section className="container-site grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center mb-24">
          <Reveal>
            <div className="space-y-6">
              <div className="eyebrow">О компании</div>
              <h1 className="font-display text-display-lg text-forest text-balance">
                Производим септики <span className="italic">в сердце Крыма</span>
              </h1>
              <p className="text-graphite-400 leading-relaxed text-lg">
                Больше {company.yearsExperience} лет мы производим и устанавливаем септики, накопители, дренажные колодцы, кессоны и погреба. Собственный завод в Симферополе — никаких посредников, ответственность за каждую деталь.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#lead-form" className="btn-primary">Получить консультацию</a>
                <a href={`tel:${company.phoneRaw}`} className="btn-secondary"><IconPhone className="w-4 h-4" /> {company.phone}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative aspect-[5/6] rounded-[2.5rem] bg-gradient-to-br from-moss/15 via-sand/10 to-forest/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream-200/50" />
              <Image
                src="/images/products/septik-hero.png"
                alt="Септик Мурзалёв"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain p-6 mix-blend-multiply"
              />
            </div>
          </Reveal>
        </section>

        <section className="container-site mb-24">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-10 border-y border-graphite-200/60">
              <Stat value="10+" label="лет на рынке Крыма" />
              <Stat value="200+" label="установленных септиков" />
              <Stat value="70+" label="моделей в каталоге" />
              <Stat value="98%" label="степень очистки" />
            </div>
          </Reveal>
        </section>

        <section className="container-site mb-24">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Ценности</div>
            <h2 className="font-display text-display-md text-forest mt-4 text-balance">
              Что для нас важно
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-md bg-forest/10 text-forest flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-graphite mb-3">{v.title}</h3>
                  <p className="text-graphite-400 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-site mb-24">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">История</div>
            <h2 className="font-display text-display-md text-forest mt-4 text-balance">
              Как мы развивались
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-graphite-200 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 60}>
                  <div className={`relative grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>:first-child]:order-2"}`}>
                    <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                      <div className="font-display text-3xl text-forest">{m.year}</div>
                      <p className="text-graphite-400 leading-relaxed mt-2">{m.text}</p>
                    </div>
                    <div className="hidden md:block" />
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-forest border-4 border-cream md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site mb-24">
          <Reveal>
            <div className="card p-8 md:p-14 bg-gradient-to-br from-forest to-forest-700 text-cream border-forest relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-moss/20 blur-3xl pointer-events-none" />
              <div className="relative grid md:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="eyebrow !text-sand">Производство</div>
                  <h2 className="font-display text-display-md text-cream text-balance">
                    Материал, который <span className="italic text-sand">не стареет</span>
                  </h2>
                  <p className="text-cream/80 leading-relaxed">
                    Корпус наших резервуаров — монолитный полипропилен. Не ржавеет, не гниёт, не подвергается коррозии. Срок службы — 50+ лет по материалу. Не боится высокого уровня грунтовых вод и промерзания.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Монолитный корпус", "СанПиН 2.1.5.980-00", "Доставка бесплатно", "Био-набор в комплекте", "Документы для СЭС", "Гарантия 12+ мес."].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-cream/90">
                      <IconCheck className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="lead-form" className="container-site">
          <div className="card p-8 md:p-14 bg-cream-200/60 border-graphite-200/40 grid md:grid-cols-[1.2fr_1fr] gap-10">
            <div className="space-y-6">
              <div className="eyebrow">Связаться с нами</div>
              <h2 className="font-display text-display-sm text-forest text-balance">
                Хотите узнать больше? Напишите нам
              </h2>
              <p className="text-graphite-400 leading-relaxed">
                Проведём экскурсию по производству, расскажем о технологии очистки, покажем готовые объекты. Консультация — бесплатно.
              </p>
              <div className="pt-2 space-y-2 text-sm">
                <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 text-graphite hover:text-forest">
                  <IconPhone className="w-4 h-4" /> {company.phone}
                </a>
                <div className="text-graphite-400">{company.address}</div>
                <div className="text-graphite-400">{company.schedule}</div>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <CountUp value={value} className="font-display text-4xl md:text-5xl text-forest block" />
      <div className="text-sm text-graphite-400 mt-2">{label}</div>
    </div>
  );
}
