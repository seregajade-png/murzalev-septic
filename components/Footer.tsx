import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";
import { IconPhone, IconMail } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-forest text-cream mt-24">
      <div className="container-site py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-5">
          <Image src="/images/logo.svg" alt={company.name} width={160} height={48} className="h-12 w-auto brightness-0 invert" />
          <p className="text-cream/70 leading-relaxed max-w-sm">
            Производство и установка септиков, накопителей, дренажных колодцев и кессонов по всему Крыму. Собственный завод в Симферополе.
          </p>
          <div className="flex gap-3">
            <a href={company.whatsapp} target="_blank" rel="noopener" className="btn bg-cream/10 border border-cream/20 text-cream px-4 py-2 hover:bg-cream hover:text-forest transition text-sm">
              WhatsApp
            </a>
            <a href={company.telegram} target="_blank" rel="noopener" className="btn bg-cream/10 border border-cream/20 text-cream px-4 py-2 hover:bg-cream hover:text-forest transition text-sm">
              Telegram
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-sand mb-4">Разделы</div>
          <Link href="/catalog" className="block text-cream/80 hover:text-sand transition">Каталог</Link>
          <Link href="/#works" className="block text-cream/80 hover:text-sand transition">Наши работы</Link>
          <Link href="/about" className="block text-cream/80 hover:text-sand transition">О компании</Link>
          <Link href="/contacts" className="block text-cream/80 hover:text-sand transition">Контакты</Link>
          <Link href="/#faq" className="block text-cream/80 hover:text-sand transition">Вопросы и ответы</Link>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-sand mb-4">Контакты</div>
          <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 text-cream hover:text-sand transition">
            <IconPhone className="w-4 h-4" /> {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-cream/80 hover:text-sand transition">
            <IconMail className="w-4 h-4" /> {company.email}
          </a>
          <div className="text-cream/70 pt-2">{company.address}</div>
          <div className="text-cream/70">{company.schedule}</div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/60">
          <div>© {new Date().getFullYear()} {company.name}. Все права защищены.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-sand">Политика конфиденциальности</Link>
            <Link href="/design-system" className="hover:text-sand opacity-50">Дизайн-система</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
