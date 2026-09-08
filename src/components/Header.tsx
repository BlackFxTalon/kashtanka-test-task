"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "./Logo";
import {
  PawIcon,
  FlagIcon,
  BurgerIcon,
  GearIcon,
  DocIcon,
  BoneIcon,
  DoorIcon,
} from "./icons";
import styles from "./Header.module.css";

/* wide: на каких диапазонах пункт виден.
   xl — только ≥1800 (по макету 1920), md — ≥1240 (по макету 1600), all — всегда */
const MENU: { label: string; wide: "xl" | "md" | "all"; trigger?: boolean }[] = [
  { label: "О проекте", wide: "xl" },
  { label: "Щенки", wide: "all" },
  { label: "Услуги", wide: "all" },
  { label: "Тарифы", wide: "md" },
  { label: "Социальные проекты", wide: "all" },
  { label: "Блог", wide: "md" },
  { label: "База пород", wide: "xl" },
  { label: "Другое", wide: "all", trigger: true },
];

const SUBMENU = ["Профили собак", "Сбор средств на «Планете»"];

const USER_MENU: { label: string; icon: "gear" | "profile" | "heart" | "doc" | "paw" | "bone" | "door" }[] = [
  { label: "Админ панель", icon: "gear" },
  { label: "Мой профиль", icon: "profile" },
  { label: "Избранное", icon: "heart" },
  { label: "Объявление услуг", icon: "doc" },
  { label: "Объявления щенков", icon: "paw" },
  { label: "Мои собаки в базе", icon: "bone" },
  { label: "Выход", icon: "door" },
];

const MOBILE_MENU = [
  "О проекте",
  "Щенки",
  "Услуги",
  "Тарифы",
  "Породы собак",
  "Базы пород",
  "Социальные проекты",
  "Сбор средств на «Планете»",
];

function UserMenuIcon({ name }: { name: (typeof USER_MENU)[number]["icon"] }) {
  switch (name) {
    case "gear":
      return <GearIcon />;
    case "profile":
      return <Image src="/images/icons/icon-profile.svg" alt="" width={10} height={11} />;
    case "heart":
      return <Image src="/images/icons/heart-inactive.svg" alt="" width={12} height={12} />;
    case "doc":
      return <DocIcon />;
    case "paw":
      return <PawIcon size={12} />;
    case "bone":
      return <BoneIcon />;
    case "door":
      return <DoorIcon />;
  }
}

export default function Header() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bySite, setBySite] = useState(true);
  const [byMedia, setByMedia] = useState(false);

  const closeAll = () => {
    setSubmenuOpen(false);
    setUserMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <header className={styles.top}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <BurgerIcon />
        </button>

        <div className={styles.logo}>
          <Logo />
        </div>

        <button type="button" className={styles.iconBtn} >
          <Image src="/images/icons/icon-home.svg" alt="Главная" width={17} height={17} className={styles.homeIcon} />
        </button>

        {searchOpen ? (
          <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Введите фразу для поиска" />
            <button type="button" className={styles.checkbox} onClick={() => setBySite((v) => !v)}>
              <Image
                src={bySite ? "/images/icons/checkbox-active.svg" : "/images/icons/checkbox-inactive.svg"}
                alt={bySite ? "Чекбокс отмечен" : "Чекбокс не отмечен"}
                width={20}
                height={20}
              />
              По сайту
            </button>
            <button type="button" className={styles.checkbox} onClick={() => setByMedia((v) => !v)}>
              <Image
                src={byMedia ? "/images/icons/checkbox-active.svg" : "/images/icons/checkbox-inactive.svg"}
                alt={byMedia ? "Чекбокс отмечен" : "Чекбокс не отмечен"}
                width={20}
                height={20}
              />
              По медиа
            </button>
            <span className={styles.searchDivider} />
            <button type="button" className={styles.searchSubmit}>
              <Image src="/images/icons/icon-search.svg" alt="Найти" width={17} height={17} />
            </button>
            <button type="button" className={styles.searchClose} onClick={() => setSearchOpen(false)}>
              <Image src="/images/icons/icon-close.svg" alt="Закрыть поиск" width={38} height={38} />
            </button>
          </div>
        ) : (
          <div className={styles.menu}>
            <nav className={styles.nav}>
              {MENU.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`${styles.navLink} ${
                    item.wide === "xl" ? styles.navLinkXl : item.wide === "md" ? styles.navLinkMd : ""
                  }${item.trigger && submenuOpen ? ` ${styles.navLinkOpen}` : ""}`}
                  onClick={item.trigger ? () => setSubmenuOpen((v) => !v) : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <span className={styles.menuDivider} />
            <a href="#" className={`btn btn--sale ${styles.saleBtn}`}>
              Продажа щенка
              <Image src="/images/icons/icon-profile.svg" alt="Меню пользователя" width={38} height={38} />
            </a>
            {submenuOpen && (
              <div className={styles.submenu}>
                {SUBMENU.map((label) => (
                  <span key={label} className={styles.submenuItem}>
                    <FlagIcon />
                    {label}
                  </span>
                ))}
                <button type="button" className={styles.submenuClose} onClick={() => setSubmenuOpen(false)}>
                  <Image src="/images/icons/icon-close.svg" alt="Закрыть меню" width={38} height={38} />
                </button>
              </div>
            )}
          </div>
        )}

        <div className={styles.profileNav}>
          <button type="button" className={styles.iconBtn} onClick={() => setSearchOpen(true)}>
            <Image src="/images/icons/icon-search.svg" alt="Открыть поиск" width={17} height={17} />
          </button>
          <a href="#" className={styles.login}>
            <Image src="/images/icons/icon-login.svg" alt="" width={18} height={18} />
            Вход
          </a>
          <span className={styles.profileDivider} />
          <button type="button" className={styles.iconBtnPlain}>
            <Image src="/images/icons/icon-message.svg" alt="Сообщения" width={38} height={38} />
          </button>
          <button type="button" className={styles.iconBtnPlain}>
            <Image src="/images/icons/icon-bell.svg" alt="Уведомления" width={38} height={38} />
          </button>
          <span className={styles.userWrap}>
            <button
              type="button"
              className={styles.iconBtnPlain}
              onClick={() => setUserMenuOpen((v) => !v)}
            >
              <Image src="/images/icons/icon-profile.svg" alt="Меню пользователя" width={38} height={38} />
            </button>
            {userMenuOpen && (
              <div className={styles.userMenu}>
                <button type="button" className={styles.userMenuClose} onClick={() => setUserMenuOpen(false)}>
                  <Image src="/images/icons/icon-close.svg" alt="Закрыть меню пользователя" width={26} height={26} />
                </button>
                {USER_MENU.map((item) => (
                  <a key={item.label} href="#" className={styles.userMenuItem}>
                    <span className={styles.userMenuIcon}>
                      <UserMenuIcon name={item.icon} />
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </span>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button type="button" className={styles.mobileMenuClose} onClick={() => setMobileMenuOpen(false)}>
            <Image src="/images/icons/icon-close.svg" alt="Закрыть меню" width={38} height={38} />
          </button>
          <a href="#" className={`btn btn--primary ${styles.mobileSale}`}>
            Продажа щенка
            <PawIcon />
          </a>
          {MOBILE_MENU.map((label) => (
            <span key={label} className={styles.mobileMenuItem}>
              <FlagIcon />
              {label}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
