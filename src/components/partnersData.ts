import type { PartnerSlide } from "./PartnersSlider";

/** В макете повторяются две марки партнёров; десять позиций сохраняют прокрутку слайдера. */
export const PARTNER_SLIDES: PartnerSlide[] = Array.from({ length: 10 }, (_, index) => {
  const isYellow = index % 2 === 0;

  return {
    id: index + 1,
    variant: isYellow ? "yellow" : "white",
    logo: isYellow ? "yellow" : "white",
  };
});
