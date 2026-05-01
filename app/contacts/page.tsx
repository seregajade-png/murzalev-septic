import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "../_sections/Reveal";
import { company } from "@/lib/content";
import { IconPhone, IconMail, IconClock } from "@/components/Icons";

export const metadata = {
  title: "Контакты — Мурзалёв",
  description: `Свяжитесь с нами по телефону ${company.phone}, WhatsApp, Telegram или email. Производство в Симферополе, работаем по всему Крыму.`,
};

const contacts = [
  {
    icon: IconPhone,
    title: "Телефон",
    value: company.phone,
    href: `tel:${company.phoneRaw}`,
    hint: "Звонок бесплатный",
  },
  {
    icon: IconMail,
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    hint: "Отвечаем в течение дня",
  },
  {
    icon: IconClock,
    title: "График работы",
    value: "пн–сб 09:00–17:00",
    hint: "Связь ежедневно до 23:00",
  },
];

export default function ContactsPage() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="pt-28 pb-20">
        <section className="container-site mb-16">
          <div className="max-w-3xl space-y-5">
            <div className="eyebrow">Контакты</div>
            <h1 className="font-display text-display-lg text-forest text-balance">
              Как нас <span className="italic">найти и связаться</span>
            </h1>
            <p className="text-graphite-400 leading-relaxed">
              Производство и офис — в Симферополе. Работаем по всему Крыму и за его пределами. Выезжаем на замеры бесплатно.
            </p>
          </div>
        </section>

        <section className="container-site mb-12">
          <div className="grid md:grid-cols-3 gap-5">
            {contacts.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="card card-hover p-7 h-full">
                  <div className="w-12 h-12 rounded-md bg-forest/10 text-forest flex items-center justify-center mb-5">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-graphite-400 mb-2">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="font-display text-xl text-forest hover:text-forest-600 transition block">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-display text-xl text-forest">{c.value}</div>
                  )}
                  <div className="text-sm text-graphite-400 mt-2">{c.hint}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-site mb-16">
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href={company.max}
              target="_blank"
              rel="noopener"
              className="card card-hover p-6 flex items-center gap-5 group bg-[#0077FF]/5 border-[#0077FF]/20"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-graphite-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg width="26" height="26" viewBox="0 0 42 42" fill="#0077FF"><path fillRule="evenodd" d="M21.47 41.88c-4.11 0-6.02-.6-9.34-3-2.1 2.7-8.75 4.81-9.04 1.2 0-2.71-.6-5-1.28-7.5C1 29.5.08 26.07.08 21.1.08 9.23 9.82.3 21.36.3c11.55 0 20.6 9.37 20.6 20.91a20.6 20.6 0 0 1-20.49 20.67m.17-31.32c-5.62-.29-10 3.6-10.97 9.7-.8 5.05.62 11.2 1.83 11.52.58.14 2.04-1.04 2.95-1.95a10.4 10.4 0 0 0 5.08 1.81 10.7 10.7 0 0 0 11.19-9.97 10.7 10.7 0 0 0-10.08-11.1Z" clipRule="evenodd"/></svg>
              </div>
              <div>
                <div className="font-display text-xl text-graphite">Написать в MAX</div>
                <div className="text-sm text-graphite-400 mt-1">Быстрый ответ в рабочие часы</div>
              </div>
            </a>
            <a
              href={company.telegram}
              target="_blank"
              rel="noopener"
              className="card card-hover p-6 flex items-center gap-5 group bg-[#229ED9]/5 border-[#229ED9]/20"
            >
              <div className="w-14 h-14 rounded-full bg-[#229ED9] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.036 16.57l-.396 3.958c.564 0 .81-.242 1.104-.532l2.648-2.525 5.487 4.017c1.006.554 1.715.263 1.987-.93l3.602-16.874c.32-1.492-.54-2.075-1.52-1.71L1.11 9.38c-1.459.566-1.437 1.376-.248 1.742l5.124 1.596L17.794 5.24c.56-.37 1.07-.165.65.204L9.036 16.57z"/></svg>
              </div>
              <div>
                <div className="font-display text-xl text-graphite">Написать в Telegram</div>
                <div className="text-sm text-graphite-400 mt-1">Отправим каталог и рассчитаем стоимость</div>
              </div>
            </a>
          </div>
        </section>

        <section className="container-site mb-16">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card p-8 space-y-3">
              <div className="eyebrow">Адрес производства</div>
              <h2 className="font-display text-2xl text-forest">{company.city}</h2>
              <p className="text-graphite-400 leading-relaxed">{company.address}</p>
              <p className="text-graphite-400 leading-relaxed"><strong className="text-graphite">Регион работы:</strong> {company.region.toLowerCase()}</p>
            </div>
            <div className="card overflow-hidden aspect-[4/3] md:aspect-auto relative">
              <iframe
                title="Карта"
                src="https://yandex.ru/map-widget/v1/?ll=34.072463%2C44.926556&mode=usermaps&source=mapframe&um=constructor%3A159684d441e7918b1832635d19e8b2c5869dbebb056a9cb014c2bc2966bbc0a4&z=17"
                width="100%"
                height="100%"
                frameBorder={0}
                className="absolute inset-0"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="lead-form" className="container-site">
          <div className="card p-8 md:p-14 bg-cream-200/60 border-graphite-200/40 grid md:grid-cols-[1fr_1.2fr] gap-10">
            <div className="space-y-6">
              <div className="eyebrow">Форма связи</div>
              <h2 className="font-display text-display-sm text-forest text-balance">
                Не нашли ответ? <span className="italic">Напишите нам</span>
              </h2>
              <p className="text-graphite-400 leading-relaxed">
                Оставьте заявку — менеджер свяжется с вами в течение 15 минут в рабочее время. Консультация и выезд на замеры — бесплатно.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
