"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import {
  AdminPanelIcon,
  BellIcon,
  BurgerIcon,
  CheckboxIcon,
  CloseIcon,
  DogsDatabaseIcon,
  FavoriteMenuIcon,
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  MenuArrowIcon,
  MessageIcon,
  ProfileIcon,
  SearchIcon,
  ServiceListingIcon,
  UserProfileIcon,
} from "./icons";
import styles from "./Header.module.css";



const MENU: { label: string; wide: "xl" | "md" | "all" | "1920"; trigger?: boolean; href?: string }[] = [
  { label: "О проекте", wide: "xl", href: "/about" },
  { label: "Щенки", wide: "all" },
  { label: "Услуги", wide: "all" },
  { label: "Тарифы", wide: "1920", href: "/tariffs" },
  { label: "Социальные проекты", wide: "1920", href: "/social-projects" },
  { label: "Блог", wide: "1920", href: "/blog" },
  { label: "База пород", wide: "xl" },
  { label: "Другое", wide: "all", trigger: true },
];

const SUBMENU = ["Профили собак", "Сбор средств на «Планете»"];

const COLLAPSED_MENU = MENU.filter(
  (item) => !item.trigger && item.wide !== "all",
);

const USER_MENU: { label: string; icon: "gear" | "profile" | "heart" | "doc" | "paw" | "bone" | "door" }[] = [
  { label: "Админ панель", icon: "gear" },
  { label: "Мой профиль", icon: "profile" },
  { label: "Избранное", icon: "heart" },
  { label: "Объявление услуг", icon: "doc" },
  { label: "Объявление щенков", icon: "paw" },
  { label: "Мои собаки в базе", icon: "bone" },
  { label: "Выход", icon: "door" },
];

const MOBILE_MENU: { label: string; href?: string }[] = [
  { label: "О проекте", href: "/about" },
  { label: "Щенки" },
  { label: "Услуги" },
  { label: "Тарифы", href: "/tariffs" },
  { label: "Породы собак" },
  { label: "Базы пород" },
  { label: "Социальные проекты", href: "/social-projects" },
  { label: "Сбор средств на «Планете»" },
];

function UserMenuIcon({ name }: { name: (typeof USER_MENU)[number]["icon"] }) {
  switch (name) {
    case "gear":
      return <AdminPanelIcon />;
    case "profile":
      return <UserProfileIcon />;
    case "heart":
      return <FavoriteMenuIcon />;
    case "doc":
      return <ServiceListingIcon />;
    case "paw":
      return <ProfileIcon width={14} height={11} />;
    case "bone":
      return <DogsDatabaseIcon />;
    case "door":
      return <LogoutIcon />;
  }
}

export default function Header() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bySite, setBySite] = useState(true);
  const [byMedia, setByMedia] = useState(false);

  const toggleUserMenu = () => {
    setSubmenuOpen(false);
    setSearchOpen(false);
    setUserMenuOpen((isOpen) => !isOpen);
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

        <Link href="/" className={styles.logo} aria-label="На главную страницу">
          <Logo />
        </Link>

        <button type="button" className={styles.homeBtn}>
          <HomeIcon className={styles.homeIcon} />
        </button>

        <div className={styles.menu}>
            <div className={`${styles.search}${searchOpen ? ` ${styles.searchOpen}` : ""}`}>
              <div className={styles.searchBody}>
                <input className={styles.searchInput} type="text" placeholder="Введите фразу для поиска" />
                <button type="button" className={styles.checkbox} onClick={() => setBySite((v) => !v)}>
                  <CheckboxIcon active={bySite} />
                  По сайту
                </button>
                <button type="button" className={styles.checkbox} onClick={() => setByMedia((v) => !v)}>
                  <CheckboxIcon active={byMedia} />
                  По медиа
                </button>
                <span className={styles.searchDivider} />
                <button type="button" className={styles.searchSubmit}>
                  <SearchIcon className={styles.searchFlip} />
                </button>
                <button type="button" className={styles.searchClose} onClick={() => setSearchOpen(false)}>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <nav className={styles.nav}>
              {MENU.map((item) => {
                const className = `${styles.navLink} ${
                  item.wide === "xl"
                    ? styles.navLinkXl
                    : item.wide === "md"
                      ? styles.navLinkMd
                      : item.wide === "1920"
                        ? styles.navLink1920
                        : ""
                }${item.trigger && submenuOpen ? ` ${styles.navLinkOpen}` : ""}`;

                return item.href ? (
                  <Link key={item.label} href={item.href} className={className}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    className={className}
                    onClick={item.trigger ? () => setSubmenuOpen((v) => !v) : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <span className={styles.menuDivider} />
            <a href="#" className={`btn btn--sale ${styles.saleBtn}`}>
              <span>Продажа<span className={styles.saleSuffix}> щенка</span></span>
              <ProfileIcon />
            </a>
            <div className={`${styles.submenu}${submenuOpen ? ` ${styles.submenuOpen}` : ""}`}>
              {COLLAPSED_MENU.map((item) => {
                const className = `${styles.submenuItem} ${
                  item.wide === "xl"
                    ? styles.submenuItemBelow1800
                    : item.wide === "md"
                      ? styles.submenuItemBelow1240
                      : styles.submenuItemBelow1600
                }`;

                return item.href ? (
                  <Link key={item.label} href={item.href} className={className}>
                    <MenuArrowIcon />
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.label} className={className}>
                    <MenuArrowIcon />
                    {item.label}
                  </span>
                );
              })}
              {SUBMENU.map((label) => (
                <span key={label} className={styles.submenuItem}>
                  <MenuArrowIcon />
                  {label}
                </span>
              ))}
              <button type="button" className={styles.submenuClose} onClick={() => setSubmenuOpen(false)}>
                <CloseIcon />
              </button>
            </div>
          </div>

        <div className={styles.profileNav}>
          <button type="button" className={styles.iconBtn} onClick={() => setSearchOpen(true)}>
            <SearchIcon className={styles.searchFlip} />
          </button>
          <a href="#" className={styles.login}>
            <LoginIcon />
            <span>Вход</span>
          </a>
          <span className={styles.profileDivider} />
          <button type="button" className={`${styles.iconBtn} ${styles.messageBtn}`}>
            <MessageIcon />
          </button>
          <button type="button" className={`${styles.iconBtn} ${styles.notificationBtn}`}>
            <BellIcon />
          </button>
          <div className={styles.userWrap}>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={toggleUserMenu}
            >
              <ProfileIcon />
            </button>
            <div className={`${styles.userMenu}${userMenuOpen ? ` ${styles.userMenuOpen}` : ""}`}>
              <button type="button" className={styles.userMenuClose} onClick={() => setUserMenuOpen(false)}>
                <CloseIcon width={12} height={12} />
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
          </div>
        </div>
      </div>

      <div className={`${styles.mobileMenu}${mobileMenuOpen ? ` ${styles.mobileMenuOpen}` : ""}`}>
        <button type="button" className={styles.mobileMenuClose} onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </button>
        <a href="#" className={`btn btn--primary ${styles.mobileSale}`}>
          <span>Продажа щенка</span>
          <ProfileIcon color="white"/>
        </a>
        {MOBILE_MENU.map((item) =>
          item.href ? (
            <Link key={item.label} href={item.href} className={styles.mobileMenuItem}>
              <MenuArrowIcon />
              {item.label}
            </Link>
          ) : (
            <span key={item.label} className={styles.mobileMenuItem}>
              <MenuArrowIcon />
              {item.label}
            </span>
          ),
        )}
      </div>
    </header>
  );
}
