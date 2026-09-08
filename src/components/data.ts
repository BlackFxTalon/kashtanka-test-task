import type { AnnouncementData } from "./Announcement";

/* Все карточки в макете — один и тот же помёт ретриверов; различаем только id. */
export const ANNOUNCEMENTS: AnnouncementData[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: i + 1,
    breed: "Золотистый ретривер",
    title: "Малыши золотистого ретривера",
    titleLine2: "Вторая строка",
    price: "50 000 ₽",
    maleCount: 5,
    femaleCount: 3,
    city: "Москва",
    litterDate: "03.03.2026",
    photo: "/images/dogs/dog-1.png",
  }),
);
