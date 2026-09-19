import Image from "next/image";
import styles from "./SocialIcon.module.css";

export type SocialNetwork =
  | "youtube"
  | "rutube"
  | "telegram"
  | "max"
  | "whatsapp"
  | "vk"
  | "instagram"
  | "zen"
  | "pinterest";

const ICONS: Record<Exclude<SocialNetwork, "rutube">, { over: string; hover: string }> = {
  youtube: { over: "/images/social/youtube-over.svg", hover: "/images/social/youtube-hover.svg" },
  telegram: { over: "/images/social/telegram-over.svg", hover: "/images/social/telegram-hover.svg" },
  max: { over: "/images/social/max-over.svg", hover: "/images/social/max-hover.svg" },
  whatsapp: { over: "/images/social/whatsapp-over.svg", hover: "/images/social/whatsapp-hover.svg" },
  vk: { over: "/images/social/vk-over.svg", hover: "/images/social/vk-hover.svg" },
  instagram: { over: "/images/social/instagram-over.svg", hover: "/images/social/instagram-hover.svg" },
  zen: { over: "/images/social/zen-over.svg", hover: "/images/social/zen-hover.svg" },
  pinterest: { over: "/images/social/pinterest-over.svg", hover: "/images/social/pinterest-hover.svg" },
};

export default function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "rutube") {
    return (
      <span className={styles.socialIcon} aria-hidden="true">
        <Image className={styles.over} src="/images/social/rutube-over.svg" alt="Rutube" fill unoptimized />
        <Image className={styles.hover} src="/images/social/rutube-hover.svg" alt="" fill unoptimized />
      </span>
    );
  }

  const { over, hover } = ICONS[network];

  return (
    <span className={styles.socialIcon} aria-hidden="true">
      <Image className={styles.over} src={over} alt={`Иконка соцсети ${network}`} fill unoptimized />
      <Image className={styles.hover} src={hover} alt="" fill unoptimized />
    </span>
  );
}
