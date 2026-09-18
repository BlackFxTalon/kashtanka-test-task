import Image from "next/image";
import type { ComponentType } from "react";
import {
  MaxIcon,
  ProfileIcon,
  RutubeIcon,
  TelegramIcon,
  YoutubeIcon,
} from "./icons";
import styles from "./LiveSection.module.css";

export interface LiveItem {
  image: string;
  imageAlt: string;
  badge: string;
  timeLabel: string;
  startTime: string;
  title: string;
  channels: LiveChannel[];
  channelPrompt: string;
  author: string;
  role: string;
}

export type LiveChannel = "youtube" | "rutube" | "telegram" | "max";

const CHANNEL_ICONS: Record<LiveChannel, ComponentType> = {
  youtube: YoutubeIcon,
  rutube: RutubeIcon,
  telegram: TelegramIcon,
  max: MaxIcon,
};

function LiveCard({
  image,
  imageAlt,
  badge,
  timeLabel,
  startTime,
  title,
  channels,
  channelPrompt,
  author,
  role,
}: LiveItem) {
  return (
    <article className={styles.card}>
      <a href="#" className={styles.imageLink} aria-label={title}>
        <Image
          className={styles.image}
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 979px) 355px, (max-width: 1239px) 450px, 400px"
        />
      </a>
      <span className={styles.badge}>{badge}</span>
      <span className={styles.time}>{timeLabel} <i /> {startTime}</span>
      <div className={styles.description}>
        <h3><a href="#">{title}</a></h3>
        <div className={styles.channels}>
          {channels.map((channel) => {
            const ChannelIcon = CHANNEL_ICONS[channel];
            return <ChannelIcon key={channel} />;
          })}
          <i />
          <span>{channelPrompt}</span>
        </div>
        <div className={styles.author}>
          <span className={styles.avatar}>
            <ProfileIcon width={25} height={19} />
          </span>
          <span>{author}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </article>
  );
}

interface LiveSectionProps {
  items: LiveItem[];
  variant?: "blog" | "article" | "page";
  moreButtonPlacement?: "responsive" | "top" | "bottom";
  home?: boolean;
  showHeading?: boolean;
  showMoreButton?: boolean;
}

export default function LiveSection({
  items,
  variant = "blog",
  moreButtonPlacement = "responsive",
  home = false,
  showHeading = true,
  showMoreButton = true,
}: LiveSectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]} ${styles[moreButtonPlacement]}${home ? ` ${styles.home}` : ""}`}>
      {showHeading && (
        <div className={styles.heading}>
          <h2>On Line эфиры</h2>
          {showMoreButton && <a href="#" className="btn btn--primary"><span>Смотреть еще</span></a>}
        </div>
      )}
      <div className={styles.grid}>
        {items.map((item, index) => <LiveCard key={`${item.image}-${index}`} {...item} />)}
      </div>
      {showMoreButton && <a href="#" className={`btn btn--primary ${styles.mobileMore}`}><span>Смотреть еще</span></a>}
    </section>
  );
}
