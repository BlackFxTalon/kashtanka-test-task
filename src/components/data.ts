import type { AnnouncementData } from "./Announcement";

const PHOTOS = ["dog-1", "dog-2", "dog-3", "dog-4", "dog-5", "dog-1", "dog-4", "dog-3"];

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
    photo: `/images/dogs/${PHOTOS[i]}.webp`,
  }),
);

const TOP_PHOTOS = ["dog-1", "dog-2", "dog-3", "dog-4", "dog-5", "dog-1", "dog-4"];

export const TOP_ANNOUNCEMENTS: AnnouncementData[] = TOP_PHOTOS.map(
  (photo, i) => ({
    id: i + 1,
    breed: "Золотистый ретривер",
    title: "Малыши золотистого ретривера",
    titleLine2: "Вторая строка",
    price: "50 000 ₽",
    maleCount: 5,
    femaleCount: 3,
    city: "Москва",
    litterDate: "03.03.2026",
    photo: `/images/dogs/${photo}.webp`,
  }),
);
