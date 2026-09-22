export interface ServiceCardData {
  id: number;
  title: string;
  titleLine2: string | null;
  price: string;
  priceSuffix: string;
  author: string;
  avatar: string;
  role: string;
  city: string;
  photo: string;
}

export const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: 1,
    title: "Догситтер - возьму на передержку",
    titleLine2: "Вторая строка",
    price: "1 500 ₽",
    priceSuffix: "За час",
    author: "Марина Авдеева",
    avatar: "/images/services/avatar.svg",
    role: "Заводчик",
    city: "Москва",
    photo: "/images/blog/article-1.webp",
  },
  {
    id: 2,
    title: "Догситтер - возьму на передержку",
    titleLine2: "Вторая строка",
    price: "5 000 ₽",
    priceSuffix: "За услугу",
    author: "Марина Авдеева",
    avatar: "/images/services/avatar.svg",
    role: "Заводчик",
    city: "Москва",
    photo: "/images/hero/hero-help.webp",
  },
  {
    id: 3,
    title: "Прививки для щенка, первичный осмотр - чипирование бесплатно",
    titleLine2: null,
    price: "6 500 ₽",
    priceSuffix: "За услугу",
    author: "Клиника “Добрый друг”",
    avatar: "/images/services/avatar.svg",
    role: "Заводчик",
    city: "Москва",
    photo: "/images/blog/live-2.webp",
  },
  {
    id: 4,
    title: "Реабилитация собак - курс восстановления собаки после травм",
    titleLine2: null,
    price: "30 500 ₽",
    priceSuffix: "В месяц",
    author: "Реабилитационный центр “Надежный доктор”",
    avatar: "/images/services/avatar.svg",
    role: "Заводчик",
    city: "Москва",
    photo: "/images/social/project-group.webp",
  },
];

export const PET_SERVICES: ServiceCardData[] = [
  ...SERVICE_CARDS,
  ...SERVICE_CARDS.map((card) => ({ ...card, id: card.id + 4 })),
];
