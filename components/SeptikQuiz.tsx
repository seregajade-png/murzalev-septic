"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/lib/content";
import { IconArrowRight, IconCheck, IconPhone, IconDrop, IconLeaf } from "@/components/Icons";

const userOptions = [
  { value: 3, label: "до 3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 8, label: "6–8" },
  { value: 10, label: "9–10" },
  { value: 12, label: "11–12" },
  { value: 15, label: "13–15" },
  { value: 20, label: "16–20" },
];

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

type Site = "premium" | "standard";

export function SeptikQuiz() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [users, setUsers] = useState<number | null>(null);
  const [site, setSite] = useState<Site | null>(null);

  const reset = () => {
    setStep(1);
    setUsers(null);
    setSite(null);
  };

  const size = users ? sizeForUsers(users) : null;
  const sizeText = size ? displaySize(size) : "";

  return (
    <section id="quiz" className="py-section">
      <div className="container-site">
        <div className="card p-8 md:p-14 bg-gradient-to-br from-forest to-forest-700 text-cream relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sand/10 blur-3xl pointer-events-none" />

          <div className="relative space-y-8">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="space-y-3 max-w-xl">
                <div className="eyebrow !text-sand">Подбор модели за 30 секунд</div>
                <h2 className="font-display text-display-md text-cream text-balance">
                  Какой септик <span className="italic text-sand">подходит вам?</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-cream/70">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono ${step >= 1 ? "bg-sand text-forest" : "bg-cream/10 text-cream/50"}`}>1</span>
                <span className="w-6 h-px bg-cream/20" />
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono ${step >= 2 ? "bg-sand text-forest" : "bg-cream/10 text-cream/50"}`}>2</span>
                <span className="w-6 h-px bg-cream/20" />
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono ${step >= 3 ? "bg-sand text-forest" : "bg-cream/10 text-cream/50"}`}>3</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div className="text-lg text-cream/90">Сколько человек будет проживать?</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {userOptions.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => { setUsers(o.value); setStep(2); }}
                      className="bg-cream/5 hover:bg-cream/15 border border-cream/15 hover:border-sand/60 rounded-2xl py-5 px-3 text-cream font-display text-2xl transition group"
                    >
                      <div>{o.label}</div>
                      <div className="text-xs text-cream/50 font-sans mt-1 group-hover:text-sand">человек</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="text-lg text-cream/90">Какой у вас участок?</div>
                  <button onClick={() => setStep(1)} className="text-sm text-cream/60 hover:text-sand transition">← Назад</button>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <button
                    onClick={() => { setSite("premium"); setStep(3); }}
                    className="text-left bg-cream/5 hover:bg-cream/15 border border-cream/15 hover:border-sand/60 rounded-2xl p-6 transition"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-sand/20 text-sand flex items-center justify-center">
                        <IconDrop className="w-5 h-5" />
                      </div>
                      <div className="font-display text-xl text-cream">Сложный участок</div>
                    </div>
                    <div className="text-sm text-cream/70 leading-relaxed">
                      Высокие грунтовые воды, водоохранная зона, рядом скважина или колодец
                    </div>
                  </button>
                  <button
                    onClick={() => { setSite("standard"); setStep(3); }}
                    className="text-left bg-cream/5 hover:bg-cream/15 border border-cream/15 hover:border-sand/60 rounded-2xl p-6 transition"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-moss/30 text-cream flex items-center justify-center">
                        <IconLeaf className="w-5 h-5" />
                      </div>
                      <div className="font-display text-xl text-cream">Обычный участок</div>
                    </div>
                    <div className="text-sm text-cream/70 leading-relaxed">
                      Дача, СНТ, частный дом — без колодцев и скважин рядом
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && users && site && size && (
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="space-y-1">
                    <div className="text-sm text-sand uppercase tracking-[0.2em]">Рекомендуем</div>
                    <div className="text-lg text-cream/90">
                      Для {users === 3 ? "до 3" : users === 8 ? "6–8" : users === 10 ? "9–10" : users === 12 ? "11–12" : users === 15 ? "13–15" : users === 20 ? "16–20" : users} {users === 1 ? "человека" : "человек"} · {site === "premium" ? "сложный участок" : "обычный участок"}
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
