import type { LiveChannel, LiveItem } from "./LiveSection";

const LIVE_CHANNELS: LiveChannel[] = ["youtube", "rutube", "telegram", "max"];

const LIVE_CARD_DETAILS = {
  imageAlt: "Эфир о собаках",
  badge: "Живой эфир",
  timeLabel: "Время эфира",
  startTime: "18.45 Мск",
  channels: LIVE_CHANNELS,
  channelPrompt: "Выберите канал",
  author: "Марина Авдеева",
};

export const LIVE_ITEMS: LiveItem[] = [
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/article-1.png",
    title: "Наши озорники, ищут дом - кто хочет себе идеального друга?",
    role: "Заводчик",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/live-2.png",
    title: "Как правильно ухаживать за щенком? Приучаем щенка к режиму",
    role: "Заводчик",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/live-3.png",
    title: "Вакцинация и прививки - поговорим о постоянном контроле здоровья собак",
    role: "Ветеринар",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/live-4.png",
    title: "Наши озорники, ищут дом - кто хочет себе идеального друга?",
    role: "Заводчик",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/article-1.png",
    title: "Как правильно ухаживать за щенком? Приучаем щенка к режиму",
    role: "Заводчик",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/live-2.png",
    title: "Как правильно ухаживать за щенком - приучаем к месту, правила кормления",
    role: "Ветеринар",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/live-3.png",
    title: "Наши озорники, ищут дом - кто хочет себе идеального друга?",
    role: "Заводчик",
  },
  {
    ...LIVE_CARD_DETAILS,
    image: "/images/blog/live-4.png",
    title: "Как правильно ухаживать за щенком? Приучаем щенка к режиму",
    role: "Заводчик",
  },
];
