export type Category =
  | "ecofilter"
  | "ecofilter-plus"
  | "ecofilter-premium"
  | "ecofilter-vertical"
  | "ecofilter-premium-plus"
  | "ecofilter-stok"
  | "nakopitel"
  | "drainage"
  | "kesson"
  | "pogreb"
  | "gorlovina";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number; // in rubles
  size: string;
  weight: string;
  capacity?: string; // производительность
  users?: number; // кол-во пользователей
  image: string; // path or category fallback
};

export type CategoryInfo = {
  slug: Category;
  title: string;
  short: string;
  description: string;
  descriptionFull?: string;
  composition?: string[];
  advantages?: string[];
  included?: string[];
  includesBio?: boolean;
  tag?: string;
  badge?: string;
  image: string;
  imageOpen?: string;
  energyDependent: boolean;
  chambers?: number;
};

const COMMON_INCLUDED = [
  "**Септик** заводской сборки в полной комплектации",
  "**Гарантия** от производителя — гарантийное и постгарантийное обслуживание",
  "**Доставка** на участок нашим транспортом",
  "Стартовый **набор биопрепаратов** для быстрого выхода станции на рабочий режим",
  "**Консультация** грамотного инженера по монтажу",
  "Полный **пакет документов** для водоканала и СЭС",
];

export const categories: CategoryInfo[] = [
  {
    slug: "ecofilter",
    title: "Экофильтр",
    short: "Энергонезависимый септик",
    description:
      "Пластиковая горизонтальная ёмкость из 3 камер. Очистка анаэробными бактериями без электричества. Идеально для дачи и сезонного проживания.",
    descriptionFull:
      "Энергонезависимый септик для частного дома и дачи. Пластиковая горизонтальная цилиндрическая ёмкость из 3 камер очистки. Очистка стоков происходит за счёт анаэробных бактерий — микроорганизмов, не потребляющих кислород. На выходе осветлённые стоки направляются на дренажный колодец или дренажную траншею. Технология обеспечивает результат, соответствующий СанПиН 2.1.5.980-00 «Гигиенические требования к охране поверхностных вод».",
    composition: [
      "**Первая камера** — первичное отстаивание сточных вод. Грубодисперсные примеси оседают на дно, лёгкие всплывают на поверхность, осветлённые стоки через корзину поступают во вторую камеру.",
      "**Вторая камера** — анаэробные бактерии на биологической загрузке разлагают органические соединения и продолжают очистку стоков.",
      "**Третья камера** — окончательное отстаивание и полное осветление воды.",
    ],
    advantages: [
      "**Прочный и долговечный корпус** из монолитного полипропилена. Не гниёт, не ржавеет, не подвергается коррозии",
      "**Компактный** — не занимает много места на участке",
      "**Простой монтаж** без спецтехники, без нарушения ландшафта",
      "**Оптимальное заглубление** подводящих труб",
      "**Монтаж в любые типы грунта**, включая участки с высоким уровнем грунтовых вод",
      "**Простота эксплуатации** — извлекать излишние иловые отложения 1 раз в год",
      "**Не потребляет электричества** — подходит для сезонного проживания и дачи",
      "**Высокая степень очистки** до уровня СанПиН 2.1.5.980-00",
    ],
    included: COMMON_INCLUDED,
    includesBio: true,
    image: "/images/products/catalog/ecofilter-closed.png",
    imageOpen: "/images/products/catalog/ecofilter-open.png",
    energyDependent: false,
    chambers: 3,
    tag: "Без электричества",
    badge: "Очистка 60–65%",
  },
  {
    slug: "ecofilter-plus",
    title: "Экофильтр плюс",
    short: "Энергозависимая станция",
    description:
      "Переработка аэробными бактериями с дисковым аэратором и компрессором от 40 л/мин. Высокая степень очистки, подходит для постоянного проживания.",
    descriptionFull:
      "Энергозависимая станция «Экофильтр плюс» перерабатывает сточные воды при помощи аэробных (быстрых) микроорганизмов. Колония бактерий зарождается благодаря мелкопузырчатому дисковому аэратору в нижней части второй камеры с сетчатой полимерной загрузкой. Третья камера оснащена системой эрлифт, которая собирает микропримеси со дна и направляет их в первую камеру на доочистку. Станция работает с компрессором производительностью от 40 л/мин в зависимости от модели.",
    composition: [
      "**Первая камера** — приёмная септическая. Сточные воды разделяются на нерастворимую фракцию, оседают иловые массы. Здесь же расположен патрубок, по которому микропримеси возвращаются на доочистку.",
      "**Вторая камера** — смежный био- и аэро-реактор с дисковым аэратором и полимерной сеточной биозагрузкой. Аэробные бактерии перерабатывают основную массу стоков.",
      "**Третья камера** — осветлитель-успокоитель. Эрлифт поднимает взвесь со дна и отправляет в первую камеру на доочистку. Очищенная вода направляется в ливнёвку, кювет, овраг или лесополосу.",
    ],
    advantages: [
      "**Прочный и долговечный корпус** из монолитного полипропилена",
      "**Простой монтаж** без спецтехники",
      "**Оптимальное заглубление** подводящих труб",
      "**Монтаж в любые типы грунта**, включая участки с высоким уровнем грунтовых вод",
      "**Простота эксплуатации** — обслуживание 1 раз в год",
      "**Не боится отключения электричества** — переходит в энергонезависимый режим",
      "**Высокая степень очистки** до уровня СанПиН 2.1.5.980-00",
    ],
    included: COMMON_INCLUDED,
    includesBio: true,
    image: "/images/products/catalog/ecofilter-plus-closed.png",
    imageOpen: "/images/products/catalog/ecofilter-plus-open.png",
    energyDependent: true,
    chambers: 3,
    badge: "Очистка 80–85%",
  },
  {
    slug: "ecofilter-premium",
    title: "Экофильтр премиум",
    short: "6-камерная станция очистки",
    description:
      "Аналог городских очистных сооружений. 6 дублированных камер для максимальной эффективности. Одна из лучших моделей на рынке.",
    descriptionFull:
      "Станция «Экофильтр премиум» — аналог городских очистных сооружений. Состоит из 6 камер, каждая дублируется для более эффективной переработки стоков. На сегодняшний день одна из лучших моделей на рынке. Работает с компрессором производительностью от 40 л/мин в зависимости от модели.",
    composition: [
      "**Первая камера** — приёмная септическая. Тут оседает грубая фракция и иловые отложения.",
      "**Вторая камера** — биореактор с полимерной сеточной загрузкой. На загрузке живут колонии аэробных бактерий.",
      "**Третья камера** — аэро-реактор. Аэратор в нижней части камеры создаёт крупные пузыри для смешения и насыщения стоков кислородом.",
      "**Четвёртая камера** — система эрлифт. Поднимает микропримеси со дна и направляет их в первую камеру на доочистку.",
      "**Пятая камера** — смежный био- и аэро-реактор с дисковым аэратором. Колония аэробных бактерий эффективно перерабатывает стоки.",
      "**Шестая камера** — эрлифт. Биологическая плёнка и взвеси поднимаются со дна и отправляются на повторный цикл очистки. Очищенная вода — в ливнёвку, кювет, овраг или лесополосу.",
    ],
    advantages: [
      "**Прочный и долговечный корпус** из монолитного полипропилена",
      "**Простой монтаж** без спецтехники",
      "**Оптимальное заглубление** подводящих труб",
      "**Монтаж в любые типы грунта**, включая участки с высоким уровнем грунтовых вод",
      "**Простота эксплуатации** — обслуживание 1 раз в год",
      "**Не боится отключения электричества** — переходит в энергонезависимый режим",
      "**Высокая степень очистки** до уровня СанПиН 2.1.5.980-00",
    ],
    included: COMMON_INCLUDED,
    includesBio: true,
    image: "/images/products/catalog/ecofilter-premium-closed.png",
    imageOpen: "/images/products/catalog/ecofilter-premium-open.png",
    energyDependent: true,
    chambers: 6,
    tag: "Премиум",
    badge: "Очистка до 98%",
  },
  {
    slug: "ecofilter-vertical",
    title: "Экофильтр премиум вертикальный",
    short: "Компактная вертикальная станция",
    description:
      "Компрессорная станция с двумя дисковыми аэраторами и системой эрлифт. Вертикальная компоновка экономит место на участке.",
    descriptionFull:
      "Компрессорная станция с крупным и мелким дисковыми аэраторами, биореактором и системой эрлифт. Насыщение воды кислородом происходит непосредственно в толще жидкости. Вертикальная компоновка экономит место на участке. Работает с компрессором производительностью от 40 л/мин в зависимости от модели.",
    composition: [
      "**Первая камера** — аэратор крупными пузырями смешивает массы до однородного состояния и подготавливает их для переработки в смежном био- и аэро-реакторе.",
      "**Вторая камера** — оснащена полимерной сеточной загрузкой и дисковым аэратором с мелкопузырчатой аэрацией. Аэробные бактерии перерабатывают основную массу стоков.",
      "**Третья камера** — осветлитель с системой эрлифт. Недоочищенные частицы подхватываются эрлифтом и возвращаются в первую камеру на повторный цикл. Очищенная вода направляется в ливнёвку, кювет, овраг или лесополосу.",
    ],
    advantages: [
      "**Прочный и долговечный корпус** из монолитного полипропилена",
      "**Простой монтаж** без спецтехники",
      "**Оптимальное заглубление** подводящих труб",
      "**Монтаж в любые типы грунта**, включая участки с высоким уровнем грунтовых вод",
      "**Простота эксплуатации** — обслуживание 1 раз в год",
      "**Не боится отключения электричества** — переходит в энергонезависимый режим",
      "**Высокая степень очистки** до уровня СанПиН 2.1.5.980-00",
    ],
    included: COMMON_INCLUDED,
    includesBio: true,
    image: "/images/products/catalog/ecofilter-vertical-closed.png",
    imageOpen: "/images/products/catalog/ecofilter-vertical-open.png",
    energyDependent: true,
    chambers: 3,
    tag: "Компактный",
    badge: "Очистка 90–95%",
  },
  {
    slug: "ecofilter-premium-plus",
    title: "Экофильтр премиум плюс",
    short: "Для отелей и посёлков",
    description:
      "Для гостиниц, турбаз, коттеджных посёлков и многоквартирных домов. Объёмы от 5 до 50 м³ в сутки.",
    descriptionFull:
      "Аналог городских очистных сооружений для коммерческих объектов. Используется в посёлковых домах, отелях, гостиницах, турбазах, хостелах, коттеджных посёлках и промышленных объектах. Состоит из 6 камер, каждая дублируется для более эффективной переработки больших объёмов стоков. Работает с компрессором производительностью от 60 л/мин в зависимости от модели.",
    composition: [
      "**Первая камера** — приёмная септическая. Тут оседает грубая фракция и иловые отложения.",
      "**Вторая камера** — биореактор с полимерной сеточной загрузкой, на которой живут колонии аэробных бактерий.",
      "**Третья камера** — аэро-реактор. Аэратор в нижней части создаёт крупные пузыри для смешения и насыщения стоков кислородом.",
      "**Четвёртая камера** — система эрлифт. Поднимает микропримеси со дна и направляет их в первую камеру на доочистку.",
      "**Пятая камера** — смежный био- и аэро-реактор с дисковым аэратором. Колония аэробных бактерий эффективно перерабатывает стоки.",
      "**Шестая камера** — эрлифт. Биологическая плёнка и взвеси отправляются на повторный цикл очистки. Очищенная вода — в ливнёвку, кювет, овраг или лесополосу.",
    ],
    advantages: [
      "**Подходит для турбаз, гостиниц**, гостевых домов, хостелов, коттеджных посёлков с расходом стоков от 5 000 до 50 000 литров в сутки",
      "**Прочный и долговечный корпус** из монолитного полипропилена",
      "**Монтируется в любые типы грунта**, включая участки с высоким уровнем грунтовых вод",
      "**Прост в эксплуатации** — обслуживание 1 раз в год",
      "**Не боится отключения электричества** — не переполняется, работает в энергонезависимом режиме",
      "**Очистка стоков соответствует** СанПиН 2.1.5.980-00",
    ],
    included: COMMON_INCLUDED,
    includesBio: true,
    image: "/images/products/catalog/ecofilter-premium-plus-closed.png",
    imageOpen: "/images/products/catalog/ecofilter-premium-plus-open.png",
    energyDependent: true,
    chambers: 6,
    tag: "Коммерческий",
    badge: "Очистка до 98%",
  },
  {
    slug: "ecofilter-stok",
    title: "Экофильтр сток",
    short: "Очистка ливневых вод",
    description:
      "Для очистки поверхностных талых и ливнёвых стоков с территории, парковок и крыш. С пескоуловителем, нефтеуловителем и угольной загрузкой.",
    descriptionFull:
      "Станция для очистки поверхностных талых и ливневых сточных вод. Применяется при строительстве объектов, где по нормативам требуется очистка воды с прилегающих территорий, парковок, дорог и крыш. Очистка осуществляется поэтапно: сначала через пескоуловитель и нефтеуловитель, затем через фильтрующие элементы с инертными материалами и угольной загрузкой. После всех ступеней вода соответствует санитарным нормам и может сбрасываться в ливнёвку, кювет, овраг или почву.",
    composition: [
      "**Пескоуловитель** — задерживает крупные примеси и песок.",
      "**Нефтеуловитель** — удаляет остатки нефтепродуктов и масел.",
      "**Фильтрующие элементы и инертные материалы** — доочищают воду от мелких частиц.",
      "**Угольная загрузка** — устраняет остаточные загрязнения и запахи.",
    ],
    advantages: [
      "**Прочный и долговечный корпус** из монолитного полипропилена",
      "**Простой монтаж** без спецтехники",
      "**Оптимальное заглубление** подводящих труб",
      "**Монтаж в любые типы грунта**, включая участки с высоким уровнем грунтовых вод",
      "**Простота эксплуатации и обслуживания**",
      "**Высокая степень очистки** поверхностных сточных вод до уровня установленных нормативов",
    ],
    included: COMMON_INCLUDED,
    image: "/images/products/catalog/ecofilter-stok-open.png",
    energyDependent: false,
    badge: "Ливневые стоки",
  },
  {
    slug: "nakopitel",
    title: "Накопитель",
    short: "Герметичные резервуары",
    description:
      "Пластиковые накопительные ёмкости от 1 до 30 м³. Идеально для участков с высоким уровнем грунтовых вод.",
    image: "/images/products/nakopitel.png",
    energyDependent: false,
    badge: "Герметичный резервуар",
  },
  {
    slug: "drainage",
    title: "Дренажный колодец",
    short: "Фильтрация через грунт",
    description:
      "Используется после септика для дополнительной фильтрации осветлённых стоков через грунт. Размеры под любую глубину.",
    image: "/images/products/drainage.png",
    energyDependent: false,
    badge: "Доп. фильтрация",
  },
  {
    slug: "kesson",
    title: "Кессон",
    short: "Защита скважины и оборудования",
    description:
      "Пластиковая камера для защиты скважины и насосного оборудования от промерзания. Не ржавеет, не требует обслуживания.",
    image: "/images/products/kesson.png",
    energyDependent: false,
    badge: "Защита скважины",
  },
  {
    slug: "pogreb",
    title: "Погреб",
    short: "Пластиковый погреб для хранения",
    description:
      "Герметичный пластиковый погреб с лестницей и полками. Поддерживает стабильную температуру и влажность круглый год.",
    image: "/images/products/pogreb.png",
    energyDependent: false,
    badge: "50+ лет службы",
  },
  {
    slug: "gorlovina",
    title: "Доборная горловина",
    short: "Удлинение горловины",
    description: "Пластиковое кольцо для удлинения горловины септика или колодца на 100 мм.",
    image: "/images/products/gorlovina.png",
    energyDependent: false,
  },
];

export const getCategory = (slug: Category) => categories.find((c) => c.slug === slug);

export const products: Product[] = [
  // Экофильтр (энергонезависимый)
  { slug: "ecofilter-0-6", name: "Экофильтр 0.6", category: "ecofilter", price: 30000, size: "960×960×1500 мм", weight: "60 кг", capacity: "0,6 м³/сут", users: 3, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-0-8", name: "Экофильтр 0.8", category: "ecofilter", price: 43000, size: "960×960×1800 мм", weight: "65 кг", capacity: "0,8 м³/сут", users: 4, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-1", name: "Экофильтр 1", category: "ecofilter", price: 51000, size: "960×960×2000 мм", weight: "70 кг", capacity: "1 м³/сут", users: 5, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-1-5", name: "Экофильтр 1.5", category: "ecofilter", price: 74000, size: "960×960×3000 мм", weight: "160 кг", capacity: "1,5 м³/сут", users: 8, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-2", name: "Экофильтр 2", category: "ecofilter", price: 101000, size: "1286×1286×3000 мм", weight: "200 кг", capacity: "2 м³/сут", users: 10, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-2-4", name: "Экофильтр 2.4", category: "ecofilter", price: 108000, size: "1286×1286×3500 мм", weight: "205 кг", capacity: "2,4 м³/сут", users: 12, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-3", name: "Экофильтр 3", category: "ecofilter", price: 121000, size: "1430×1430×3500 мм", weight: "210 кг", capacity: "3 м³/сут", users: 15, image: "/images/products/ecofilter.png" },
  { slug: "ecofilter-4", name: "Экофильтр 4", category: "ecofilter", price: 186000, size: "1430×1430×4000 мм", weight: "310 кг", capacity: "4 м³/сут", users: 20, image: "/images/products/ecofilter.png" },

  // Экофильтр плюс (энергозависимый)
  { slug: "ecofilter-plus-0-6", name: "Экофильтр плюс 0.6", category: "ecofilter-plus", price: 65000, size: "960×960×1500 мм", weight: "60 кг", capacity: "0,6 м³/сут", users: 3, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-0-8", name: "Экофильтр плюс 0.8", category: "ecofilter-plus", price: 73000, size: "960×960×1800 мм", weight: "65 кг", capacity: "0,8 м³/сут", users: 4, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-1", name: "Экофильтр плюс 1", category: "ecofilter-plus", price: 87000, size: "960×960×2000 мм", weight: "70 кг", capacity: "1 м³/сут", users: 5, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-1-5", name: "Экофильтр плюс 1.5", category: "ecofilter-plus", price: 101000, size: "960×960×3000 мм", weight: "160 кг", capacity: "1,5 м³/сут", users: 8, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-2", name: "Экофильтр плюс 2", category: "ecofilter-plus", price: 116000, size: "1286×1286×3000 мм", weight: "200 кг", capacity: "2 м³/сут", users: 10, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-2-4", name: "Экофильтр плюс 2.4", category: "ecofilter-plus", price: 138000, size: "1286×1286×3500 мм", weight: "205 кг", capacity: "2,4 м³/сут", users: 12, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-3", name: "Экофильтр плюс 3", category: "ecofilter-plus", price: 146000, size: "1430×1430×3500 мм", weight: "210 кг", capacity: "3 м³/сут", users: 15, image: "/images/products/ecofilter-plus.png" },
  { slug: "ecofilter-plus-4", name: "Экофильтр плюс 4", category: "ecofilter-plus", price: 203000, size: "1430×1430×4000 мм", weight: "310 кг", capacity: "4 м³/сут", users: 20, image: "/images/products/ecofilter-plus.png" },

  // Экофильтр премиум
  { slug: "ecofilter-premium-0-6", name: "Экофильтр премиум 0.6", category: "ecofilter-premium", price: 83000, size: "960×960×1800 мм", weight: "90 кг", capacity: "0,6 м³/сут", users: 3, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-0-8", name: "Экофильтр премиум 0.8", category: "ecofilter-premium", price: 91000, size: "960×960×2250 мм", weight: "95 кг", capacity: "0,8 м³/сут", users: 4, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-1", name: "Экофильтр премиум 1", category: "ecofilter-premium", price: 101000, size: "960×960×3000 мм", weight: "110 кг", capacity: "1 м³/сут", users: 5, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-1-5", name: "Экофильтр премиум 1.5", category: "ecofilter-premium", price: 123000, size: "1286×1286×3000 мм", weight: "220 кг", capacity: "1,5 м³/сут", users: 8, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-2", name: "Экофильтр премиум 2", category: "ecofilter-premium", price: 156000, size: "1286×1286×3500 мм", weight: "250 кг", capacity: "2 м³/сут", users: 10, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-2-4", name: "Экофильтр премиум 2.4", category: "ecofilter-premium", price: 163000, size: "1430×1430×3000 мм", weight: "290 кг", capacity: "2,4 м³/сут", users: 12, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-3", name: "Экофильтр премиум 3", category: "ecofilter-premium", price: 177000, size: "1430×1430×3700 мм", weight: "290 кг", capacity: "3 м³/сут", users: 15, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-4", name: "Экофильтр премиум 4", category: "ecofilter-premium", price: 252000, size: "1430×1430×5000 мм", weight: "390 кг", capacity: "4 м³/сут", users: 20, image: "/images/products/ecofilter-premium.png" },

  // Экофильтр премиум вертикальный
  { slug: "ecofilter-vertical-0-6", name: "Экофильтр премиум вертикальный 0.6", category: "ecofilter-vertical", price: 82000, size: "1286×1286×1650 мм", weight: "75 кг", capacity: "0,6 м³/сут", users: 3, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-0-8", name: "Экофильтр премиум вертикальный 0.8", category: "ecofilter-vertical", price: 88000, size: "1286×1286×1850 мм", weight: "90 кг", capacity: "0,8 м³/сут", users: 4, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-1", name: "Экофильтр премиум вертикальный 1", category: "ecofilter-vertical", price: 97000, size: "1286×1286×2000 мм", weight: "100 кг", capacity: "1 м³/сут", users: 5, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-1-5", name: "Экофильтр премиум вертикальный 1.5", category: "ecofilter-vertical", price: 113000, size: "1430×1430×2000 мм", weight: "150 кг", capacity: "1,5 м³/сут", users: 8, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-2", name: "Экофильтр премиум вертикальный 2", category: "ecofilter-vertical", price: 147000, size: "1430×1430×2300 мм", weight: "250 кг", capacity: "2 м³/сут", users: 10, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-2-4", name: "Экофильтр премиум вертикальный 2.4", category: "ecofilter-vertical", price: 156000, size: "3500×2000×1850 мм", weight: "180 кг", capacity: "2,4 м³/сут", users: 12, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-3", name: "Экофильтр премиум вертикальный 3", category: "ecofilter-vertical", price: 172000, size: "3500×2000×2000 мм", weight: "200 кг", capacity: "3 м³/сут", users: 15, image: "/images/products/ecofilter-vertical.png" },
  { slug: "ecofilter-vertical-4", name: "Экофильтр премиум вертикальный 4", category: "ecofilter-vertical", price: 237000, size: "3600×1800×2000 мм", weight: "300 кг", capacity: "4 м³/сут", users: 20, image: "/images/products/ecofilter-vertical.png" },

  // Экофильтр премиум плюс (коммерческие)
  { slug: "ecofilter-premium-plus-5", name: "Экофильтр премиум плюс 5", category: "ecofilter-premium-plus", price: 286000, size: "4000×2000×2300 мм", weight: "460 кг", capacity: "5 м³/сут", users: 25, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-6", name: "Экофильтр премиум плюс 6", category: "ecofilter-premium-plus", price: 307000, size: "4500×2000×2300 мм", weight: "480 кг", capacity: "6 м³/сут", users: 30, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-8", name: "Экофильтр премиум плюс 8", category: "ecofilter-premium-plus", price: 413000, size: "4800×2200×2500 мм", weight: "730 кг", capacity: "8 м³/сут", users: 40, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-10", name: "Экофильтр премиум плюс 10", category: "ecofilter-premium-plus", price: 442000, size: "5500×2200×2500 мм", weight: "750 кг", capacity: "10 м³/сут", users: 50, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-15", name: "Экофильтр премиум плюс 15", category: "ecofilter-premium-plus", price: 550000, size: "6000×2200×2500 мм", weight: "770 кг", capacity: "15 м³/сут", users: 75, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-20", name: "Экофильтр премиум плюс 20", category: "ecofilter-premium-plus", price: 655000, size: "6500×2200×2500 мм", weight: "845 кг", capacity: "20 м³/сут", users: 100, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-25", name: "Экофильтр премиум плюс 25", category: "ecofilter-premium-plus", price: 802000, size: "7000×2200×2500 мм", weight: "940 кг", capacity: "25 м³/сут", users: 125, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-30", name: "Экофильтр премиум плюс 30", category: "ecofilter-premium-plus", price: 959000, size: "7500×2200×2500 мм", weight: "1060 кг", capacity: "30 м³/сут", users: 150, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-40", name: "Экофильтр премиум плюс 40", category: "ecofilter-premium-plus", price: 1200000, size: "8500×2200×2500 мм", weight: "1220 кг", capacity: "40 м³/сут", users: 200, image: "/images/products/ecofilter-premium.png" },
  { slug: "ecofilter-premium-plus-50", name: "Экофильтр премиум плюс 50", category: "ecofilter-premium-plus", price: 1530000, size: "9500×2200×2500 мм", weight: "1330 кг", capacity: "50 м³/сут", users: 250, image: "/images/products/ecofilter-premium.png" },

  // Экофильтр сток
  { slug: "ecofilter-stok-0-5", name: "Экофильтр сток 0.5", category: "ecofilter-stok", price: 177000, size: "960×1210×2000 мм", weight: "85 кг", capacity: "0,5 л/с", image: "/images/products/ecofilter-stok.png" },
  { slug: "ecofilter-stok-1", name: "Экофильтр сток 1", category: "ecofilter-stok", price: 206500, size: "1280×1530×2000 мм", weight: "120 кг", capacity: "1 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-1-5", name: "Экофильтр сток 1.5", category: "ecofilter-stok", price: 240000, size: "1280×1530×2800 мм", weight: "168 кг", capacity: "1,5 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-2", name: "Экофильтр сток 2", category: "ecofilter-stok", price: 275000, size: "1430×1680×2900 мм", weight: "187 кг", capacity: "2 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-3", name: "Экофильтр сток 3", category: "ecofilter-stok", price: 330000, size: "1430×1680×3200 мм", weight: "275 кг", capacity: "3 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-5", name: "Экофильтр сток 5", category: "ecofilter-stok", price: 460000, size: "1430×1680×3600 мм", weight: "310 кг", capacity: "5 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-10", name: "Экофильтр сток 10", category: "ecofilter-stok", price: 670000, size: "1910×2160×5500 мм", weight: "583 кг", capacity: "10 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-15", name: "Экофильтр сток 15", category: "ecofilter-stok", price: 1030000, size: "1910×2160×7000 мм", weight: "740 кг", capacity: "15 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-20", name: "Экофильтр сток 20", category: "ecofilter-stok", price: 1140000, size: "1910×2160×9500 мм", weight: "1000 кг", capacity: "20 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-30", name: "Экофильтр сток 30", category: "ecofilter-stok", price: 1290000, size: "1910×2160×10500 мм", weight: "1110 кг", capacity: "30 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-40", name: "Экофильтр сток 40", category: "ecofilter-stok", price: 1680000, size: "2400×2650×9500 мм", weight: "1800 кг", capacity: "40 л/с", image: "/images/products/ecofilter-stok.png"  },
  { slug: "ecofilter-stok-50", name: "Экофильтр сток 50", category: "ecofilter-stok", price: 2200000, size: "2400×2650×12400 мм", weight: "2350 кг", capacity: "50 л/с", image: "/images/products/ecofilter-stok.png"  },

  // Накопители
  { slug: "nakopitel-1", name: "Накопитель 1 м³", category: "nakopitel", price: 31500, size: "960×1500 мм", weight: "45 кг", capacity: "1 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-2", name: "Накопитель 2 м³", category: "nakopitel", price: 50800, size: "1280×1600 мм", weight: "70 кг", capacity: "2 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-2-alt", name: "Накопитель 2 м³ (удлинённый)", category: "nakopitel", price: 55000, size: "960×2800 мм", weight: "68 кг", capacity: "2 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-3", name: "Накопитель 3 м³", category: "nakopitel", price: 65500, size: "1280×2500 мм", weight: "78 кг", capacity: "3 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-3-alt", name: "Накопитель 3 м³ (широкий)", category: "nakopitel", price: 75500, size: "1430×2000 мм", weight: "84 кг", capacity: "3 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-5", name: "Накопитель 5 м³", category: "nakopitel", price: 120700, size: "1430×3200 мм", weight: "144 кг", capacity: "5 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-10", name: "Накопитель 10 м³", category: "nakopitel", price: 195000, size: "2200×2800 мм", weight: "372 кг", capacity: "10 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-10-alt", name: "Накопитель 10 м³ (удлинённый)", category: "nakopitel", price: 263200, size: "1910×3700 мм", weight: "372 кг", capacity: "10 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-15", name: "Накопитель 15 м³", category: "nakopitel", price: 334600, size: "2200×4000 мм", weight: "415 кг", capacity: "15 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-15-alt", name: "Накопитель 15 м³ (удлинённый)", category: "nakopitel", price: 372900, size: "1910×5500 мм", weight: "415 кг", capacity: "15 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-20", name: "Накопитель 20 м³", category: "nakopitel", price: 455200, size: "2200×5500 мм", weight: "563 кг", capacity: "20 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-20-alt", name: "Накопитель 20 м³ (широкий)", category: "nakopitel", price: 515600, size: "2400×4500 мм", weight: "563 кг", capacity: "20 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-25", name: "Накопитель 25 м³", category: "nakopitel", price: 559400, size: "2200×6700 мм", weight: "712 кг", capacity: "25 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-25-alt", name: "Накопитель 25 м³ (широкий)", category: "nakopitel", price: 685300, size: "2400×5700 мм", weight: "712 кг", capacity: "25 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-30", name: "Накопитель 30 м³", category: "nakopitel", price: 619800, size: "2200×8000 мм", weight: "867 кг", capacity: "30 м³", image: "/images/products/nakopitel.png" },
  { slug: "nakopitel-30-alt", name: "Накопитель 30 м³ (широкий)", category: "nakopitel", price: 792200, size: "2400×6700 мм", weight: "867 кг", capacity: "30 м³", image: "/images/products/nakopitel.png" },

  // Дренажные колодцы
  { slug: "drainage-1", name: "Дренажный колодец 1", category: "drainage", price: 25000, size: "960×1750 мм", weight: "45 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-2", name: "Дренажный колодец 2", category: "drainage", price: 31900, size: "960×2050 мм", weight: "48 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-3", name: "Дренажный колодец 3", category: "drainage", price: 37300, size: "960×2250 мм", weight: "50 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-4", name: "Дренажный колодец 4", category: "drainage", price: 49900, size: "960×3000 мм", weight: "70 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-5", name: "Дренажный колодец 5", category: "drainage", price: 40900, size: "1286×1500 мм", weight: "63 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-6", name: "Дренажный колодец 6", category: "drainage", price: 54300, size: "1286×2050 мм", weight: "70 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-7", name: "Дренажный колодец 7", category: "drainage", price: 62300, size: "1286×2250 мм", weight: "75 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-8", name: "Дренажный колодец 8", category: "drainage", price: 101900, size: "1286×3250 мм", weight: "126 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-9", name: "Дренажный колодец 9", category: "drainage", price: 67900, size: "1450×1750 мм", weight: "77 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-10", name: "Дренажный колодец 10", category: "drainage", price: 78000, size: "1450×2050 мм", weight: "82 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-11", name: "Дренажный колодец 11", category: "drainage", price: 80000, size: "1450×2250 мм", weight: "100 кг", image: "/images/products/drainage.png" },
  { slug: "drainage-12", name: "Дренажный колодец 12", category: "drainage", price: 130000, size: "1450×3250 мм", weight: "136 кг", image: "/images/products/drainage.png" },

  // Кессоны
  { slug: "kesson-1", name: "Кессон 1", category: "kesson", price: 55000, size: "960×960×1500 мм", weight: "45 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-2", name: "Кессон 2", category: "kesson", price: 61000, size: "960×960×2000 мм", weight: "50 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-3", name: "Кессон 3", category: "kesson", price: 69000, size: "960×960×2500 мм", weight: "57 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-4", name: "Кессон 4", category: "kesson", price: 80000, size: "1286×1286×1500 мм", weight: "63 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-5", name: "Кессон 5", category: "kesson", price: 94000, size: "1286×1286×2000 мм", weight: "75 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-6", name: "Кессон 6", category: "kesson", price: 81000, size: "1286×1286×2500 мм", weight: "86 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-7", name: "Кессон 7", category: "kesson", price: 85000, size: "1430×1430×1500 мм", weight: "77 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-8", name: "Кессон 8", category: "kesson", price: 90000, size: "1430×1430×2000 мм", weight: "100 кг", image: "/images/products/kesson.png" },
  { slug: "kesson-9", name: "Кессон 9", category: "kesson", price: 95000, size: "1430×1430×2500 мм", weight: "115 кг", image: "/images/products/kesson.png" },

  // Погреба
  { slug: "pogreb-1", name: "Погреб 1", category: "pogreb", price: 260000, size: "1910×2000×2250 мм", weight: "250 кг", image: "/images/products/pogreb.png" },
  { slug: "pogreb-2", name: "Погреб 2", category: "pogreb", price: 310000, size: "2200×2000×2250 мм", weight: "320 кг", image: "/images/products/pogreb.png" },
  { slug: "pogreb-3", name: "Погреб 3", category: "pogreb", price: 370000, size: "2400×2000×2250 мм", weight: "360 кг", image: "/images/products/pogreb.png" },
  { slug: "pogreb-4", name: "Погреб 4", category: "pogreb", price: 480000, size: "3000×2000×2250 мм", weight: "615 кг", image: "/images/products/pogreb.png" },

  // Доборные горловины
  { slug: "gorlovina-470", name: "Доборная горловина 470", category: "gorlovina", price: 900, size: "470×100 мм", weight: "2 кг", image: "/images/products/gorlovina.png" },
  { slug: "gorlovina-640", name: "Доборная горловина 640", category: "gorlovina", price: 1200, size: "640×100 мм", weight: "3 кг", image: "/images/products/gorlovina.png" },
  { slug: "gorlovina-960", name: "Доборная горловина 960", category: "gorlovina", price: 1550, size: "960×100 мм", weight: "4,5 кг", image: "/images/products/gorlovina.png" },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (cat: Category) => products.filter((p) => p.category === cat);

export const formatPrice = (rub: number) => new Intl.NumberFormat("ru-RU").format(rub) + " ₽";

export const getMinPrice = (cat: Category) => {
  const items = productsByCategory(cat);
  return items.length ? Math.min(...items.map((p) => p.price)) : 0;
};
