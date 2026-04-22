"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IconDrop, IconShield, IconWrench, IconTruck, IconLeaf, IconClock,
  IconPhone, IconMail, IconArrowRight, IconChevronDown, IconCheck,
  IconStar, IconTank, IconHouse,
} from "@/components/Icons";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-cream text-graphite">
      <Header />
      <main className="container-site py-16 space-y-24">
        <Intro />
        <Section id="colors" eyebrow="01" title="Цветовая палитра" subtitle="«Лесной мох» — природная, приглушённая гамма с тёмно-зелёным акцентом.">
          <Colors />
        </Section>
        <Section id="typography" eyebrow="02" title="Типографика" subtitle="Unbounded — для заголовков с характером. Inter — для основного текста, нейтральный и читаемый.">
          <Typography />
        </Section>
        <Section id="spacing" eyebrow="03" title="Сетка и отступы" subtitle="Модульная шкала отступов и скруглений на базе 4px.">
          <Spacing />
        </Section>
        <Section id="shadows" eyebrow="04" title="Тени и глубина" subtitle="Мягкие, не агрессивные — чтобы сохранить премиальный характер.">
          <Shadows />
        </Section>
        <Section id="buttons" eyebrow="05" title="Кнопки" subtitle="Primary — основной CTA (консультация). Secondary — второстепенные действия. Ghost — текстовые ссылки.">
          <Buttons />
        </Section>
        <Section id="inputs" eyebrow="06" title="Формы и поля" subtitle="Поля заявки «Получить консультацию».">
          <Inputs />
        </Section>
        <Section id="icons" eyebrow="07" title="Иконки" subtitle="Линейный стиль, толщина 1.5px, сдержанная геометрия.">
          <Icons />
        </Section>
        <Section id="components" eyebrow="08" title="Компоненты UI" subtitle="Базовые блоки, из которых собираются страницы.">
          <Components />
        </Section>
        <Section id="motion" eyebrow="09" title="Принципы анимации" subtitle="Плавно, но не медленно. Всё короче 0.6с, easing — cubic-bezier(0.22, 1, 0.36, 1).">
          <Motion />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-graphite-200/60 bg-cream/90 backdrop-blur sticky top-0 z-50">
      <div className="container-site h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="Мурзалёв" width={140} height={40} priority className="h-10 w-auto" />
          <span className="hidden md:inline text-xs text-graphite-300 uppercase tracking-[0.2em] ml-4 pl-4 border-l border-graphite-200">Design System</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-graphite-400">
          <a href="#colors" className="hover:text-forest transition">Цвета</a>
          <a href="#typography" className="hover:text-forest transition">Шрифты</a>
          <a href="#buttons" className="hover:text-forest transition">Кнопки</a>
          <a href="#components" className="hover:text-forest transition">Компоненты</a>
        </nav>
        <button className="btn-primary btn-sm">Получить консультацию</button>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="pt-8">
      <div className="max-w-3xl space-y-6">
        <div className="eyebrow">Design System v1.0</div>
        <h1 className="font-display text-display-xl font-light text-forest text-balance">
          Дизайн-кит<br />
          <span className="italic">Мурзалёв</span>
        </h1>
        <p className="text-lg text-graphite-400 max-w-xl leading-relaxed">
          Единая визуальная система для сайта производителя септиков, накопителей и дренажных колодцев. Премиальный индустриальный стиль с природной палитрой.
        </p>
        <div className="flex flex-wrap gap-2 pt-4">
          <span className="chip">Next.js 15</span>
          <span className="chip">Tailwind CSS</span>
          <span className="chip">Unbounded + Inter</span>
          <span className="chip">Forest Moss palette</span>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="grid md:grid-cols-[260px_1fr] gap-10 mb-10">
        <div>
          <div className="text-xs font-mono text-moss-600">{eyebrow}</div>
          <h2 className="font-display text-display-sm text-forest mt-2">{title}</h2>
        </div>
        {subtitle && <p className="text-graphite-400 max-w-xl leading-relaxed md:pt-10">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Colors() {
  const colors = [
    { name: "Cream", role: "Основной фон", hex: "#F5F2EC", bg: "bg-cream", text: "text-graphite" },
    { name: "Forest", role: "Акцент, CTA", hex: "#2D4A3A", bg: "bg-forest", text: "text-cream" },
    { name: "Moss", role: "Вторичный акцент", hex: "#7A8B5C", bg: "bg-moss", text: "text-cream" },
    { name: "Graphite", role: "Основной текст", hex: "#1F2421", bg: "bg-graphite", text: "text-cream" },
    { name: "Sand", role: "Дополнительный", hex: "#D4C5A9", bg: "bg-sand", text: "text-graphite" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {colors.map((c) => (
        <div key={c.name} className="group">
          <div className={`${c.bg} h-44 rounded-lg border border-graphite-200/30 transition-all duration-500 ease-smooth group-hover:-translate-y-1 group-hover:shadow-elevated flex items-end p-5`}>
            <div className={c.text}>
              <div className="font-display text-xl">{c.name}</div>
              <div className="text-xs opacity-80 mt-1">{c.role}</div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3 px-1">
            <span className="font-mono text-xs text-graphite-400">{c.hex}</span>
            <span className="text-xs text-graphite-300">bg-{c.name.toLowerCase()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Typography() {
  return (
    <div className="space-y-8">
      <div className="card p-8 md:p-12 space-y-8">
        <Type label="Display XL · Unbounded 300" meta="clamp(3.5rem → 6rem)" className="font-display text-display-xl font-light text-forest text-balance">
          Септики без запаха и&nbsp;откачки
        </Type>
        <Type label="Display LG · Unbounded 400" meta="clamp(2.5rem → 4.5rem)" className="font-display text-display-lg text-forest">
          Производим и устанавливаем
        </Type>
        <Type label="Display MD · Unbounded 500" meta="clamp(2rem → 3rem)" className="font-display text-display-md text-graphite">
          Наши преимущества
        </Type>
        <Type label="Display SM · Unbounded 500" meta="clamp(1.5rem → 2rem)" className="font-display text-display-sm text-graphite">
          Как мы работаем
        </Type>
      </div>
      <div className="card p-8 md:p-12 space-y-6">
        <Type label="Body LG · Inter 400" meta="18px / 1.6" className="text-lg text-graphite leading-relaxed max-w-2xl">
          Компания «Мурзалёв» производит септики серии Экофильтр — автономные системы очистки сточных вод для частных домов.
        </Type>
        <Type label="Body MD · Inter 400" meta="16px / 1.6" className="text-base text-graphite-400 leading-relaxed max-w-2xl">
          Изготавливаем резервуары на собственном производстве, доставляем и монтируем за 1–5 дней. Даём гарантию от 12 месяцев на все работы.
        </Type>
        <Type label="Body SM · Inter 400" meta="14px / 1.55" className="text-sm text-graphite-400 max-w-2xl">
          Подберём систему под ваш участок, глубину грунтовых вод и количество пользователей. Бесплатный выезд инженера по Крыму.
        </Type>
        <Type label="Caption · Inter 500 uppercase" meta="12px / 0.2em tracking" className="text-xs uppercase tracking-[0.2em] text-moss-600 font-medium">
          Производство в Крыму · с 2014 года
        </Type>
      </div>
    </div>
  );
}

function Type({ label, meta, className, children }: { label: string; meta: string; className: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 items-baseline">
      <div className="text-xs font-mono text-graphite-300 space-y-1">
        <div>{label}</div>
        <div className="opacity-60">{meta}</div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}

function Spacing() {
  const scale = [
    { name: "xs", px: 4, cls: "w-1" },
    { name: "sm", px: 8, cls: "w-2" },
    { name: "md", px: 16, cls: "w-4" },
    { name: "lg", px: 24, cls: "w-6" },
    { name: "xl", px: 40, cls: "w-10" },
    { name: "2xl", px: 64, cls: "w-16" },
    { name: "3xl", px: 96, cls: "w-24" },
  ];
  const radii = [
    { name: "sm", px: 6, cls: "rounded-sm" },
    { name: "base", px: 10, cls: "rounded" },
    { name: "md", px: 14, cls: "rounded-md" },
    { name: "lg", px: 20, cls: "rounded-lg" },
    { name: "xl", px: 28, cls: "rounded-xl" },
    { name: "2xl", px: 36, cls: "rounded-2xl" },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card p-8">
        <div className="text-xs font-mono text-graphite-300 mb-6 uppercase tracking-wider">Spacing scale</div>
        <div className="space-y-3">
          {scale.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <div className="w-12 text-xs font-mono text-graphite-400">{s.name}</div>
              <div className={`${s.cls} h-3 bg-forest rounded-sm`} />
              <div className="text-xs font-mono text-graphite-300 ml-auto">{s.px}px</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-8">
        <div className="text-xs font-mono text-graphite-300 mb-6 uppercase tracking-wider">Border radius</div>
        <div className="grid grid-cols-3 gap-4">
          {radii.map((r) => (
            <div key={r.name} className="text-center">
              <div className={`${r.cls} bg-forest/10 border-2 border-forest/30 h-20 flex items-center justify-center`}>
                <span className="font-mono text-xs text-forest">{r.px}</span>
              </div>
              <div className="text-xs font-mono text-graphite-400 mt-2">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Shadows() {
  const shadows = [
    { name: "soft", cls: "shadow-soft", desc: "Карточки, inputs" },
    { name: "medium", cls: "shadow-medium", desc: "Hover, dropdowns" },
    { name: "elevated", cls: "shadow-elevated", desc: "Модалки, popover" },
    { name: "focus", cls: "shadow-focus", desc: "Фокус форм" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {shadows.map((s) => (
        <div key={s.name} className="text-center">
          <div className={`${s.cls} bg-cream h-32 rounded-lg flex items-center justify-center border border-graphite-200/30`}>
            <span className="font-display text-forest">{s.name}</span>
          </div>
          <div className="text-xs text-graphite-400 mt-3">{s.desc}</div>
        </div>
      ))}
    </div>
  );
}

function Buttons() {
  return (
    <div className="space-y-6">
      <div className="card p-8 space-y-6">
        <div className="text-xs font-mono text-graphite-300 uppercase tracking-wider">Primary · основной CTA</div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="btn-primary btn-sm">Написать</button>
          <button className="btn-primary">Получить консультацию</button>
          <button className="btn-primary btn-lg">Связаться с менеджером <IconArrowRight className="w-5 h-5" /></button>
          <button className="btn-primary" disabled>Отправка...</button>
        </div>
      </div>
      <div className="card p-8 space-y-6">
        <div className="text-xs font-mono text-graphite-300 uppercase tracking-wider">Secondary · второстепенные</div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="btn-secondary btn-sm">Подробнее</button>
          <button className="btn-secondary">Узнать стоимость</button>
          <button className="btn-secondary btn-lg">Скачать каталог</button>
        </div>
      </div>
      <div className="card p-8 space-y-6">
        <div className="text-xs font-mono text-graphite-300 uppercase tracking-wider">Ghost · текстовые</div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="btn-ghost">Смотреть все →</button>
          <button className="btn-ghost">Читать далее</button>
          <button className="btn-ghost">Свернуть</button>
        </div>
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-8 space-y-5">
        <Field label="Имя" placeholder="Иван" />
        <Field label="Телефон" placeholder="+7 (___) ___-__-__" />
        <Field label="Email" placeholder="you@example.ru" type="email" />
        <div className="space-y-2">
          <label className="text-sm font-medium text-graphite">Какая продукция интересует</label>
          <select className="input">
            <option>Септик Экофильтр</option>
            <option>Экофильтр ПЛЮС</option>
            <option>Экофильтр ПРЕМИУМ</option>
            <option>Накопитель</option>
            <option>Кессон</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-graphite">Комментарий</label>
          <textarea className="input min-h-[100px]" placeholder="Расскажите о вашей задаче" />
        </div>
        <label className="flex items-start gap-3 text-sm text-graphite-400">
          <input type="checkbox" className="mt-1 accent-forest" defaultChecked />
          <span>Согласен с политикой конфиденциальности</span>
        </label>
        <button className="btn-primary w-full">Получить консультацию</button>
      </div>
      <div className="space-y-6">
        <div className="card p-6">
          <div className="text-xs font-mono text-graphite-300 mb-4 uppercase tracking-wider">States</div>
          <div className="space-y-3">
            <input className="input" placeholder="Default" />
            <input className="input" defaultValue="Заполнено" />
            <input className="input focus:shadow-focus" style={{ borderColor: "var(--color-forest)", boxShadow: "0 0 0 3px rgba(45,74,58,0.25)" }} defaultValue="Focused" readOnly />
            <input className="input border-red-400" defaultValue="Ошибка" />
            <div className="text-xs text-red-500 -mt-1">Укажите корректный номер</div>
          </div>
        </div>
        <div className="card p-6 bg-forest text-cream border-forest">
          <div className="eyebrow text-sand !text-sand mb-3">Быстрая связь</div>
          <h3 className="font-display text-display-sm mb-4">Оставьте телефон — перезвоним за 15 минут</h3>
          <div className="flex gap-2">
            <input className="input bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50" placeholder="+7 (___) ___-__-__" />
            <button className="btn bg-cream text-forest px-5 hover:bg-sand">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-graphite">{label}</label>
      <input className="input" {...props} />
    </div>
  );
}

function Icons() {
  const icons = [
    { C: IconDrop, n: "Drop" }, { C: IconShield, n: "Shield" },
    { C: IconWrench, n: "Wrench" }, { C: IconTruck, n: "Truck" },
    { C: IconLeaf, n: "Leaf" }, { C: IconClock, n: "Clock" },
    { C: IconPhone, n: "Phone" }, { C: IconMail, n: "Mail" },
    { C: IconArrowRight, n: "Arrow" }, { C: IconChevronDown, n: "Chevron" },
    { C: IconCheck, n: "Check" }, { C: IconStar, n: "Star" },
    { C: IconTank, n: "Tank" }, { C: IconHouse, n: "House" },
  ];
  return (
    <div className="card p-8">
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {icons.map(({ C, n }) => (
          <div key={n} className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-forest/5 transition-colors group">
            <C className="w-8 h-8 text-forest transition-transform group-hover:scale-110" />
            <span className="text-xs font-mono text-graphite-400">{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Components() {
  return (
    <div className="space-y-10">
      <Subsection label="Feature cards — блок «Наши преимущества»">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { C: IconShield, t: "Гарантия 12 мес.", d: "На материалы и монтажные работы" },
            { C: IconClock, t: "Монтаж за 1–5 дней", d: "От заключения договора до запуска" },
            { C: IconTruck, t: "Бесплатная доставка", d: "По всему Крыму в день установки" },
            { C: IconLeaf, t: "Экологичность", d: "Очистка до 98% без запаха" },
            { C: IconWrench, t: "Без откачки", d: "Самоочистка на 15+ лет" },
            { C: IconDrop, t: "Собственное производство", d: "Контроль качества на каждом этапе" },
          ].map((f, i) => (
            <div key={i} className="card card-hover p-6 space-y-3">
              <f.C className="w-8 h-8 text-forest" />
              <div className="font-display text-lg text-graphite mt-4">{f.t}</div>
              <div className="text-sm text-graphite-400 leading-relaxed">{f.d}</div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection label="Product card — карточка каталога">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Экофильтр", v: "до 4 чел.", p: "от 89 000 ₽", tag: "Бестселлер" },
            { t: "Экофильтр ПЛЮС", v: "до 6 чел.", p: "от 145 000 ₽" },
            { t: "Экофильтр ПРЕМИУМ", v: "до 10 чел.", p: "от 215 000 ₽", tag: "98% очистка" },
          ].map((p, i) => (
            <article key={i} className="card card-hover group overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-forest/10 via-moss/20 to-sand/30 flex items-center justify-center overflow-hidden">
                <IconTank className="w-24 h-24 text-forest/30 transition-transform duration-700 ease-smooth group-hover:scale-110" />
                {p.tag && <span className="absolute top-4 left-4 chip bg-forest text-cream">{p.tag}</span>}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl text-graphite">{p.t}</h3>
                  <span className="text-xs text-graphite-300 whitespace-nowrap mt-1.5">{p.v}</span>
                </div>
                <div className="text-forest font-medium">{p.p}</div>
                <div className="flex gap-2 pt-2">
                  <button className="btn-primary btn-sm flex-1">Узнать стоимость</button>
                  <button className="btn-secondary btn-sm">Подробнее</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Subsection>

      <Subsection label="Stats — анимированные цифры">
        <div className="card p-10 bg-forest text-cream border-forest grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "200+", d: "семей выбрали нас" },
            { n: "11", d: "лет на рынке" },
            { n: "12 мес.", d: "гарантия минимум" },
            { n: "98%", d: "степень очистки" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display text-display-md text-sand">{s.n}</div>
              <div className="text-sm text-cream/70 mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection label="Steps — этапы работы">
        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Бесплатная консультация", "Выезд инженера", "Договор и оплата",
            "Производство 1–5 дней", "Монтаж и запуск",
          ].map((step, i) => (
            <div key={i} className="card p-6 relative">
              <div className="font-display text-4xl text-moss/40 font-light">0{i + 1}</div>
              <div className="mt-3 text-sm font-medium text-graphite">{step}</div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection label="Review card — отзыв клиента">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { n: "Александр К.", c: "Симферополь", t: "Установили септик на участке за 2 дня. Никакого запаха, всё работает как часы уже вторую зиму. Рекомендую." },
            { n: "Марина С.", c: "Ялта", t: "Приезжали на выезд в субботу, подобрали оптимальный вариант под наш участок. Монтаж прошёл аккуратно, мастера убрали за собой." },
          ].map((r, i) => (
            <div key={i} className="card p-7 space-y-4">
              <div className="flex gap-1 text-sand">
                {Array.from({ length: 5 }).map((_, j) => <IconStar key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-graphite leading-relaxed">«{r.t}»</p>
              <div className="pt-4 border-t border-graphite-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center font-display text-forest">{r.n[0]}</div>
                <div>
                  <div className="text-sm font-medium text-graphite">{r.n}</div>
                  <div className="text-xs text-graphite-300">{r.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection label="FAQ — раскрывающиеся вопросы">
        <FAQ />
      </Subsection>

      <Subsection label="Chips / теги">
        <div className="flex flex-wrap gap-2">
          {["Автономный", "До 6 чел.", "Без откачки", "Гарантия 12 мес.", "Доставка бесплатно", "Монтаж за 1 день"].map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
      </Subsection>

      <Subsection label="CTA block — финальный блок">
        <div className="card p-10 md:p-16 bg-gradient-to-br from-forest to-forest-700 text-cream border-forest relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-moss/20 blur-3xl pointer-events-none" />
          <div className="relative max-w-xl space-y-6">
            <div className="eyebrow text-sand !text-sand">Готовы начать?</div>
            <h3 className="font-display text-display-md text-cream text-balance">
              Подберём септик под ваш участок <span className="italic text-sand">бесплатно</span>
            </h3>
            <p className="text-cream/80 leading-relaxed">Инженер приедет с замерами, подберёт оптимальную модель и рассчитает точную стоимость монтажа.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="btn bg-cream text-forest px-6 py-3 hover:bg-sand transition">Оставить заявку</button>
              <button className="btn border border-cream/30 text-cream px-6 py-3 hover:bg-cream/10">
                <IconPhone className="w-4 h-4" /> +7 (978) 000-00-00
              </button>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection label="Floating CTA — плавающая кнопка мессенджеров">
        <div className="card p-10 relative min-h-[160px] flex items-center justify-center">
          <div className="text-graphite-300 text-sm">Превью плавающей кнопки в правом нижнем углу ↘</div>
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center shadow-elevated hover:scale-110 transition-transform" title="WhatsApp">
              <IconPhone className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-moss text-cream flex items-center justify-center shadow-elevated hover:scale-110 transition-transform" title="Telegram">
              <IconMail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Subsection>
    </div>
  );
}

function Subsection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-mono text-graphite-300 uppercase tracking-wider">{label}</div>
      {children}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "Нужно ли откачивать септик?", a: "Нет. Экофильтр работает по принципу биологической очистки, ил самоутилизируется. Единственное — раз в 3–5 лет рекомендуется профилактическая очистка." },
    { q: "Сколько по времени занимает монтаж?", a: "От 1 до 5 дней в зависимости от модели и условий на участке. Земляные работы, установка резервуара, подключение — всё под ключ." },
    { q: "Какая гарантия на оборудование?", a: "Минимум 12 месяцев на все работы и комплектующие. На корпус резервуара — до 50 лет по материалу." },
    { q: "Работает ли зимой?", a: "Да. Конструкция учитывает промерзание грунта, система работает круглый год без дополнительного обогрева." },
  ];
  return (
    <div className="card divide-y divide-graphite-200/60">
      {items.map((item, i) => (
        <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 flex items-start gap-4 hover:bg-forest/5 transition-colors">
          <IconChevronDown className={`w-5 h-5 text-forest flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
          <div className="flex-1">
            <div className="font-display text-lg text-graphite">{item.q}</div>
            <div className={`grid transition-all duration-500 ease-smooth ${open === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-graphite-400 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function Motion() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-8 space-y-4">
        <div className="text-xs font-mono text-graphite-300 uppercase tracking-wider">Timing</div>
        <ul className="space-y-2 text-sm text-graphite-400">
          <li className="flex justify-between"><span>Micro-interactions (hover)</span><span className="font-mono text-forest">200ms</span></li>
          <li className="flex justify-between"><span>UI transitions</span><span className="font-mono text-forest">300ms</span></li>
          <li className="flex justify-between"><span>Content reveals (scroll)</span><span className="font-mono text-forest">500ms</span></li>
          <li className="flex justify-between"><span>Max duration</span><span className="font-mono text-forest">600ms</span></li>
        </ul>
      </div>
      <div className="card p-8 space-y-4">
        <div className="text-xs font-mono text-graphite-300 uppercase tracking-wider">Easing</div>
        <div className="space-y-2 text-sm text-graphite-400">
          <div>Стандартный: <code className="font-mono text-xs text-forest">cubic-bezier(0.22, 1, 0.36, 1)</code></div>
          <div>Tailwind-токен: <code className="font-mono text-xs text-forest">ease-smooth</code></div>
        </div>
        <div className="pt-4 flex gap-2">
          <div className="w-16 h-16 rounded-md bg-forest transition-all duration-500 ease-smooth hover:w-32 hover:bg-moss" title="Hover me" />
          <div className="w-16 h-16 rounded-md bg-forest/60 transition-all duration-500 ease-smooth hover:rounded-full hover:bg-forest" title="Hover me" />
          <div className="w-16 h-16 rounded-md bg-moss transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-elevated" title="Hover me" />
        </div>
        <p className="text-xs text-graphite-300 pt-2">Наведите на блоки, чтобы проверить анимацию.</p>
      </div>
      <div className="card p-8 md:col-span-2 bg-forest/5 border-forest/20">
        <div className="text-xs font-mono text-forest uppercase tracking-wider mb-3">Принцип</div>
        <p className="text-graphite leading-relaxed max-w-3xl">
          Анимации должны <strong className="text-forest">помогать</strong>, а не мешать. Всё, что длится дольше 0.6 секунды и не реагирует на действие пользователя — раздражает. На мобильной версии анимации упрощаются. Контент всегда доступен сразу, даже если анимация не успела загрузиться.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-graphite-200/60 mt-24 py-10">
      <div className="container-site flex flex-col md:flex-row justify-between gap-4 text-sm text-graphite-400">
        <div>© 2026 Мурзалёв · Дизайн-кит v1.0</div>
        <div className="flex gap-6">
          <a href="/" className="hover:text-forest transition">На главную</a>
          <a href="#colors" className="hover:text-forest transition">Наверх</a>
        </div>
      </div>
    </footer>
  );
}
