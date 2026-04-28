"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";
import { IconArrowRight, IconCheck, IconPhone, IconDrop, IconLeaf } from "@/components/Icons";

function sizeForUsers(users: number) {
  if (users <= 3) return "0-6";
  if (users <= 4) return "0-8";
  if (users <= 5) return "1";
  if (users <= 8) return "1-5";
  if (users <= 10) return "2";
  if (users <= 12) return "2-4";
  if (users <= 15) return "3";
  return "4";
}

function displaySize(size: string) {
  return size.replace("-", ".");
}

function userRangeLabel(users: number) {
  if (users <= 3) return "до 3 человек";
  if (users <= 4) return "4 человека";
  if (users <= 5) return "5 человек";
  if (users <= 8) return "6–8 человек";
  if (users <= 10) return "9–10 человек";
  if (users <= 12) return "11–12 человек";
  if (users <= 15) return "13–15 человек";
  return "16–20 человек";
}

type Site = "premium" | "standard";

export function SeptikQuiz() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [users, setUsers] = useState<number>(5);
  const [site, setSite] = useState<Site | null>(null);

  const reset = () => {
    setStep(1);
    setUsers(5);
    setSite(null);
  };

  const size = sizeForUsers(users);
  const sizeText = displaySize(size);

  return (
    <section id="quiz" className="py-section">
      <div className="container-site">
        <div className="card p-8 md:p-14 bg-gradient-to-br from-forest to-forest-700 text-cream relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sand/10 blur-3xl pointer-events-none" />

          <div className="relative space-y-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 chip bg-sand text-forest font-medium">
                <IconArrowRight className="w-3.5 h-3.5" /> Подбор модели за 1 минуту
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream text-balance leading-[1.05]">
                Подберите свой септик <span className="italic text-sand">за 2 шага</span>
              </h2>
              <p className="text-cream/80 text-lg max-w-2xl mx-auto md:mx-0">
                Ответьте на 2 вопроса — покажем подходящую модель с ценой. Без регистрации и заявок.
              </p>
              <div className="flex items-center gap-2 text-sm text-cream/70 justify-center md:justify-start pt-2">
                <span className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold ${step >= 1 ? "bg-sand text-forest" : "bg-cream/10 text-cream/50"}`}>1</span>
                <span className="w-8 h-px bg-cream/20" />
                <span className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold ${step >= 2 ? "bg-sand text-forest" : "bg-cream/10 text-cream/50"}`}>2</span>
                <span className="w-8 h-px bg-cream/20" />
                <span className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold ${step >= 3 ? "bg-sand text-forest" : "bg-cream/10 text-cream/50"}`}>3</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-8">
                <div className="text-xl md:text-2xl font-display text-cream">
                  Шаг 1 · Сколько человек будет проживать?
                </div>

                <div className="bg-cream rounded-2xl p-8 md:p-10 text-graphite shadow-soft">
                  <div className="flex flex-col items-center gap-6">
                    <div className="text-center">
                      <div className="font-display text-7xl md:text-8xl font-bold text-forest leading-none">
                        {users}
                      </div>
                      <div className="text-sm uppercase tracking-[0.2em] text-graphite-400 mt-3">
                        {users === 1 ? "человек" : users < 5 ? "человека" : "человек"}
                      </div>
                      <div className="text-base text-graphite-400 mt-1">
                        диапазон: {userRangeLabel(users)}
                      </div>
                    </div>

                    <div className="w-full max-w-xl space-y-2">
                      <input
                        type="range"
                        min={1}
                        max={20}
                        step={1}
                        value={users}
                        onChange={(e) => setUsers(Number(e.target.value))}
                        className="w-full h-2 bg-graphite-200 rounded-full appearance-none cursor-pointer accent-forest"
                        style={{
                          background: `linear-gradient(to right, var(--color-forest, #1f3a2c) 0%, var(--color-forest, #1f3a2c) ${((users - 1) / 19) * 100}%, #e5e1d8 ${((users - 1) / 19) * 100}%, #e5e1d8 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-graphite-400 px-1">
                        <span>1</span>
                        <span>5</span>
                        <span>10</span>
                        <span>15</span>
                        <span>20</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="btn-primary btn-lg mt-2"
                    >
                      Дальше <IconArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <a href="#lead-form" className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-sand transition underline underline-offset-4">
                    Другое — оставить заявку специалисту →
                  </a>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="text-xl md:text-2xl font-display text-cream">Шаг 2 · Какой у вас участок?</div>
                  <button onClick={() => setStep(1)} className="text-sm text-cream/60 hover:text-sand transition">← Назад</button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => { setSite("premium"); setStep(3); }}
                    className="text-left bg-cream hover:bg-sand text-graphite border-2 border-cream hover:border-sand rounded-2xl overflow-hidden transition shadow-soft hover:shadow-elevated hover:-translate-y-0.5 group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="/images/quiz-site-premium.jpg"
                        alt="Сложный участок"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 chip bg-forest/90 text-cream">
                        <IconDrop className="w-3.5 h-3.5" /> Премиум-серия
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-display text-xl md:text-2xl text-forest mb-2">Сложный участок</div>
                      <div className="text-sm text-graphite-400 leading-relaxed">
                        Высокие грунтовые воды, водоохранная зона, рядом скважина или колодец
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => { setSite("standard"); setStep(3); }}
                    className="text-left bg-cream hover:bg-sand text-graphite border-2 border-cream hover:border-sand rounded-2xl overflow-hidden transition shadow-soft hover:shadow-elevated hover:-translate-y-0.5 group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="/images/quiz-site-standard.jpg"
                        alt="Обычный участок"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 chip bg-moss/90 text-cream">
                        <IconLeaf className="w-3.5 h-3.5" /> Базовая серия
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-display text-xl md:text-2xl text-forest mb-2">Обычный участок</div>
                      <div className="text-sm text-graphite-400 leading-relaxed">
                        Дача, СНТ, частный дом — без колодцев и скважин рядом
                      </div>
                    </div>
                  </button>
                </div>
                <div className="pt-2 text-center">
                  <a href="#lead-form" className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-sand transition underline underline-offset-4">
                    Другое / не знаю — оставить заявку специалисту →
                  </a>
                </div>
              </div>
            )}

            {step === 3 && site && (
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="space-y-1">
                    <div className="text-sm text-sand uppercase tracking-[0.2em]">Рекомендуем</div>
                    <div className="text-lg text-cream/90">
                      Для {userRangeLabel(users)} · {site === "premium" ? "сложный участок" : "обычный участок"}
                    </div>
                  </div>
                  <button onClick={reset} className="text-sm text-cream/60 hover:text-sand transition">Начать заново</button>
                </div>

                {site === "premium" ? (
                  <div className="bg-cream rounded-2xl p-7 text-graphite">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-forest mb-1">Премиум серия · очистка до 98%</div>
                        <div className="font-display text-2xl md:text-3xl text-forest">Экофильтр премиум {sizeText}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-graphite-400">
                        <IconCheck className="w-4 h-4 text-forest" /> 6-камерная станция
                      </div>
                    </div>
                    <p className="text-graphite-400 leading-relaxed text-sm mb-5">
                      Городской уровень очистки. Подходит для участков с высокими грунтовыми водами, водоохранных зон и территорий со скважинами. Дублированные камеры обеспечивают максимальную надёжность.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/catalog/ecofilter-premium-${size}`} className="btn-primary">
                        Подробнее <IconArrowRight className="w-4 h-4" />
                      </Link>
                      <a href="#lead-form" className="btn-secondary">Получить расчёт</a>
                      <a href={`tel:${company.phoneRaw}`} className="btn-secondary">
                        <IconPhone className="w-4 h-4" /> {company.phone}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-cream rounded-2xl p-6 text-graphite">
                      <div className="text-xs uppercase tracking-wider text-forest mb-1">Базовая серия · очистка 60–65%</div>
                      <div className="font-display text-2xl text-forest mb-2">Экофильтр {sizeText}</div>
                      <p className="text-graphite-400 leading-relaxed text-sm mb-4">
                        Энергонезависимый. Идеален для дачи и сезонного проживания.
                      </p>
                      <Link href={`/catalog/ecofilter-${size}`} className="btn-primary w-full justify-center">
                        Подробнее <IconArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="bg-cream rounded-2xl p-6 text-graphite">
                      <div className="text-xs uppercase tracking-wider text-forest mb-1">Усиленная · очистка 80–85%</div>
                      <div className="font-display text-2xl text-forest mb-2">Экофильтр плюс {sizeText}</div>
                      <p className="text-graphite-400 leading-relaxed text-sm mb-4">
                        С компрессором. Подходит для постоянного проживания.
                      </p>
                      <Link href={`/catalog/ecofilter-plus-${size}`} className="btn-primary w-full justify-center">
                        Подробнее <IconArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}

                {site === "standard" && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="#lead-form" className="btn bg-cream text-forest px-5 py-2.5 hover:bg-sand transition">Получить точный расчёт</a>
                    <a href={`tel:${company.phoneRaw}`} className="btn border border-cream/30 text-cream px-5 py-2.5 hover:bg-cream/10">
                      <IconPhone className="w-4 h-4" /> {company.phone}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
