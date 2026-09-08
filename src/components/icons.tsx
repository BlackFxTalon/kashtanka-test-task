// Инлайновые SVG-иконки (глифы, для которых нет выгруженных ассетов)
// Размеры — из макета Ui KIT

export function PawIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 16) / 21} viewBox="0 0 21 16" fill="currentColor" aria-hidden="true">
      <ellipse cx="4" cy="4.6" rx="1.9" ry="2.5" />
      <ellipse cx="10.5" cy="3.2" rx="1.9" ry="2.6" />
      <ellipse cx="17" cy="4.6" rx="1.9" ry="2.5" />
      <ellipse cx="19.1" cy="9.6" rx="1.7" ry="2.1" />
      <path d="M10.5 6.6c3.1 0 5.9 2.6 5.9 5.1 0 1.6-1.2 2.7-2.8 2.7-1.2 0-2-.6-3.1-.6s-2 .6-3.2.6c-1.6 0-2.8-1.1-2.8-2.7 0-2.5 2.9-5.1 6-5.1Z" />
    </svg>
  );
}

export function MaleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="#15b1ff" strokeWidth="2" aria-hidden="true">
      <circle cx="7" cy="11" r="5" />
      <path d="M11 7l5.5-5.5M16.5 6.5V1H11" />
    </svg>
  );
}

export function FemaleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="#ff0d6e" strokeWidth="2" aria-hidden="true">
      <circle cx="9" cy="6.5" r="5" />
      <path d="M9 11.5V17M5.5 14h7" />
    </svg>
  );
}

export function FlagIcon() {
  return (
    <svg width="6" height="12" viewBox="0 0 6 12" aria-hidden="true">
      <path d="M1 0v12" stroke="var(--color-accent)" strokeWidth="1.4" />
      <path d="M1.7 1h4.3L4.5 3.2 6 5.4H1.7Z" fill="var(--color-accent)" />
    </svg>
  );
}

export function BurgerIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true">
      <path d="M0 1h24M0 9h24M0 17h24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function GearIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="5" cy="5" r="1.8" />
      <path d="M5 0v1.6M5 8.4V10M0 5h1.6M8.4 5H10M1.5 1.5l1.1 1.1M7.4 7.4l1.1 1.1M8.5 1.5 7.4 2.6M2.6 7.4 1.5 8.5" />
    </svg>
  );
}

export function DocIcon({ width = 21, height = 16 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 11" fill="none" stroke="currentColor" strokeWidth="1.1" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path d="M1 1h4.5L8 3.5V10H1Z" />
      <path d="M5.5 1v3H8" />
    </svg>
  );
}

export function BoneIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" aria-hidden="true">
      <circle cx="2" cy="2" r="1.7" />
      <circle cx="2" cy="6" r="1.7" />
      <circle cx="10" cy="2" r="1.7" />
      <circle cx="10" cy="6" r="1.7" />
      <rect x="2" y="3" width="8" height="2" />
    </svg>
  );
}

export function DoorIcon() {
  return (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M6 1H1v9h5" />
      <path d="M4 5.5h6M7.5 3 10 5.5 7.5 8" />
    </svg>
  );
}
