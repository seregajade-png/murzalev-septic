import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/content";

export const metadata = {
  title: "Политика конфиденциальности — Мурзалёв",
  description: "Политика обработки персональных данных компании Мурзалёв (септики, накопители).",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="container-site max-w-3xl">
          <div className="eyebrow mb-4">Документ</div>
          <h1 className="font-display text-display-md text-forest text-balance mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-graphite-400 mb-12">Дата вступления в силу: {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-graphite-400 leading-relaxed">
            <Section title="1. Общие положения">
              <p>
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных посетителей сайта {company.name} (далее — «Сайт»), обращающихся за консультацией или заказом продукции.
              </p>
              <p>
                Используя Сайт и отправляя заявку через форму обратной связи, вы подтверждаете своё согласие с условиями данной Политики.
              </p>
            </Section>

            <Section title="2. Какие данные мы собираем">
              <p>В процессе работы Сайта мы можем собирать следующие данные:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Имя, указанное в форме заявки</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты (при указании)</li>
                <li>Текст комментария к заявке</li>
                <li>Сведения о категории интересующей продукции</li>
                <li>Технические данные: IP-адрес, тип браузера, время посещения (через системы веб-аналитики)</li>
              </ul>
            </Section>

            <Section title="3. Цели обработки персональных данных">
              <p>Мы используем полученные данные исключительно для:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ответа на запрос и консультации по продукции</li>
                <li>Подготовки коммерческого предложения</li>
                <li>Организации доставки и монтажа оборудования</li>
                <li>Заключения договора и ведения документооборота</li>
                <li>Улучшения работы Сайта и качества обслуживания</li>
              </ul>
            </Section>

            <Section title="4. Передача данных третьим лицам">
              <p>
                Мы не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством Российской Федерации (№152-ФЗ «О персональных данных»).
              </p>
              <p>
                Для работы Сайта используются сервисы веб-аналитики (Яндекс.Метрика, Google Analytics), которые собирают обезличенные данные о посещениях в соответствии со своими политиками конфиденциальности.
              </p>
            </Section>

            <Section title="5. Хранение и защита данных">
              <p>
                Данные хранятся на защищённых серверах. Доступ к ним имеют только уполномоченные сотрудники компании. Срок хранения — не более срока, необходимого для достижения целей обработки, либо в соответствии с требованиями законодательства.
              </p>
            </Section>

            <Section title="6. Ваши права">
              <p>В соответствии с законодательством вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Запросить информацию о своих данных, которые мы обрабатываем</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления своих данных</li>
                <li>Отозвать согласие на обработку</li>
              </ul>
              <p>
                Для реализации прав направьте запрос на адрес электронной почты:{" "}
                <a href={`mailto:${company.email}`} className="text-forest underline">{company.email}</a>
              </p>
            </Section>

            <Section title="7. Файлы cookie">
              <p>
                Сайт использует файлы cookie для корректной работы и анализа посещаемости. Вы можете отключить cookie в настройках браузера, однако это может повлиять на функциональность.
              </p>
            </Section>

            <Section title="8. Изменения в Политике">
              <p>
                Мы оставляем за собой право изменять Политику. Новая версия вступает в силу с момента публикации на Сайте.
              </p>
            </Section>

            <Section title="9. Контактная информация">
              <p>
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <ul className="list-none space-y-1 pl-0">
                <li><strong className="text-graphite">Компания:</strong> {company.name}</li>
                <li><strong className="text-graphite">Адрес:</strong> {company.address}</li>
                <li><strong className="text-graphite">Email:</strong> <a href={`mailto:${company.email}`} className="text-forest underline">{company.email}</a></li>
                <li><strong className="text-graphite">Телефон:</strong> <a href={`tel:${company.phoneRaw}`} className="text-forest underline">{company.phone}</a></li>
              </ul>
            </Section>
          </div>

          <div className="mt-16 pt-8 border-t border-graphite-200/60">
            <Link href="/" className="btn-secondary">← На главную</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl md:text-2xl text-forest mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
