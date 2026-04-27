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
              href={company.whatsapp}
              target="_blank"
              rel="noopener"
              className="card card-hover p-6 flex items-center gap-5 group bg-[#25D366]/5 border-[#25D366]/20"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <div className="font-display text-xl text-graphite">Написать в WhatsApp</div>
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
