export interface TariffFeature {
  name: string;
  value: string;
}

export interface TariffCardData {
  id: number;
  plan: string;
  price: string;
  cta: string;
  features: TariffFeature[];
}

const BASE_FEATURES = (ads: string, tree: string): TariffFeature[] => [
  { name: "Количество объявлений", value: ads },
  { name: "Древо родословной", value: tree },
  { name: "Подбор вязки", value: "нет" },
  { name: "Поднять в топ объявление", value: "нет" },
  { name: "On Line трансляция", value: "нет" },
];

const PREMIUM_FEATURES: TariffFeature[] = [
  { name: "Количество объявлений", value: "до 15 штук" },
  { name: "Древо родословной", value: "не ограничено" },
  { name: "Подбор вязки", value: "да" },
  { name: "Поднять в топ объявление", value: "да" },
  { name: "On Line трансляция", value: "да" },
];

export const TARIFFS: TariffCardData[] = [
  {
    id: 1,
    plan: "Бесплатно",
    price: "0 ₽",
    cta: "Выбрать тариф",
    features: BASE_FEATURES("до 5 штук", "ограничено"),
  },
  {
    id: 2,
    plan: "Премиум",
    price: "300 ₽ в мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 3,
    plan: "Премиум",
    price: "1800₽ 12 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 4,
    plan: "Пожизненно",
    price: "10 000₽",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
];

export const PAGE_TARIFFS: TariffCardData[] = [
  {
    id: 1,
    plan: "Бесплатно",
    price: "0 ₽",
    cta: "Ваш тариф",
    features: BASE_FEATURES("до 5 штук", "ограничено"),
  },
  {
    id: 2,
    plan: "Премиум",
    price: "300 ₽ в мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 3,
    plan: "Премиум",
    price: "850₽ 3 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 4,
    plan: "Премиум",
    price: "1700₽ 6 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 5,
    plan: "Премиум",
    price: "3400₽ 12 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 6,
    plan: "Пожизненно",
    price: "10 000₽",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 7,
    plan: "Премиум",
    price: "300 ₽ в мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 8,
    plan: "Премиум",
    price: "850₽ 3 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 9,
    plan: "Премиум",
    price: "1700₽ 6 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 10,
    plan: "Премиум",
    price: "3400₽ 12 мес",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
  {
    id: 11,
    plan: "Пожизненно",
    price: "10 000₽",
    cta: "Купить подписку",
    features: PREMIUM_FEATURES,
  },
];

export const TARIFF_DESCRIPTION = {
  badge: "О подписке",
  title: "Продавцам и заводчикам",
  paragraphs: [
    {
      before: "Вы можете приобрести тариф “Премиум” для новых возможностей если вы “заводчик”, “специалист”, “владелец” - который планируем продать щенков или предложить свои услуги, вы можете приобрести подписку. Она будет давать вам новые преимущества в отличии от бесплатного тарифа. Мы расширяем возможности, включаем новые функции и проект только набирает обороты. ",
      bold: null as string | null,
      after: "",
    },
    {
      before:
        "Для тех, кто хочет сэкономить, вы можете ",
      bold: "купить подписку с пожизненной лицензией за 10 000 рублей",
      after:
        " и пользоваться сервисом постоянно без ограничений, вы поддерживаете своей подпиской наш проект, наш сервис позволит решать глобальные задачи в России, что позволит помогать даже социальным проектам, которые направлены на помощь животным сегодня. ",
    },
  ],
};
