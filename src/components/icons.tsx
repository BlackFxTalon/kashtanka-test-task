


export function PawIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 16) / 21} viewBox="0 0 21 16" fill="currentColor">
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
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="#15b1ff" strokeWidth="2">
      <circle cx="7" cy="11" r="5" />
      <path d="M11 7l5.5-5.5M16.5 6.5V1H11" />
    </svg>
  );
}

export function FemaleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="#ff0d6e" strokeWidth="2">
      <circle cx="9" cy="6.5" r="5" />
      <path d="M9 11.5V17M5.5 14h7" />
    </svg>
  );
}

export function MenuArrowIcon() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path
        d="M0.750047 0.750046C0.750047 0.750046 6.74999 5.16898 6.75 6.75009C6.75001 8.33121 0.75 12.75 0.75 12.75"
        stroke="#6832E9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BurgerIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18">
      <path d="M0 1h24M0 9h24M0 17h24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function GearIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="5" cy="5" r="1.8" />
      <path d="M5 0v1.6M5 8.4V10M0 5h1.6M8.4 5H10M1.5 1.5l1.1 1.1M7.4 7.4l1.1 1.1M8.5 1.5 7.4 2.6M2.6 7.4 1.5 8.5" />
    </svg>
  );
}

export function DocIcon({ width = 21, height = 16 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 11" fill="none" stroke="currentColor" strokeWidth="1.1" preserveAspectRatio="xMidYMid meet">
      <path d="M1 1h4.5L8 3.5V10H1Z" />
      <path d="M5.5 1v3H8" />
    </svg>
  );
}

export function BoneIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
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
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M6 1H1v9h5" />
      <path d="M4 5.5h6M7.5 3 10 5.5 7.5 8" />
    </svg>
  );
}

type SvgIconProps = {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
};

export function ProfileIcon({ width = 21, height = 16, className, color = "black" }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="8.92 11.01 21.16 16.09" fill="none" className={className}>
      <path d="M29.9152 24.2039L28.6488 17.4692C28.4725 16.5276 28.01 15.6649 27.3255 15.001C26.6411 14.337 25.7687 13.9049 24.8297 13.7647C25.54 14.7255 25.9778 15.8635 26.0961 17.0565L26.5548 21.6369C26.6215 22.2695 26.5596 22.9093 26.3727 23.5169C26.1858 24.1245 25.8779 24.6871 25.4679 25.1703C25.6001 25.7697 25.9628 26.2915 26.4761 26.621C26.9894 26.9504 27.6114 27.0605 28.2051 26.927C28.7988 26.7935 29.3156 26.4274 29.642 25.9091C29.9683 25.3909 30.0773 24.763 29.9451 24.1637L29.9152 24.2039Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4153 21.6369L12.8739 17.0565C12.9922 15.8635 13.43 14.7255 14.1403 13.7647C13.2013 13.9049 12.329 14.337 11.6445 15.001C10.9601 15.6649 10.4975 16.5276 10.3212 17.4692L9.05486 24.2039C8.92263 24.8033 9.03166 25.4312 9.35798 25.9494C9.6843 26.4676 10.2012 26.8338 10.7949 26.9673C11.3886 27.1008 12.0105 26.9907 12.5238 26.6612C13.0372 26.3318 13.3998 25.81 13.5321 25.2106C13.1116 24.725 12.7953 24.1568 12.6031 23.5418C12.4109 22.9267 12.3469 22.2781 12.4153 21.6369Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.8983 26.7911H17.072C16.4209 26.7942 15.7763 26.6593 15.1799 26.3952C14.5836 26.1312 14.0487 25.7438 13.6099 25.2581C13.171 24.7723 12.838 24.1991 12.6322 23.5754C12.4265 22.9516 12.3526 22.2913 12.4154 21.6369L12.874 17.0565C13.033 15.3994 13.7988 13.8617 15.0215 12.7446C16.2443 11.6274 17.836 11.0112 19.4851 11.0164C21.1343 11.0112 22.726 11.6274 23.9488 12.7446C25.1715 13.8617 25.9373 15.3994 26.0963 17.0565L26.5549 21.6369C26.6177 22.2913 26.5438 22.9516 26.3381 23.5754C26.1323 24.1991 25.7993 24.7723 25.3604 25.2581C24.9216 25.7438 24.3867 26.1312 23.7904 26.3952C23.194 26.6593 22.5494 26.7942 21.8983 26.7911Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.485 23.167L18.0591 21.5463C18.0591 21.2126 18.1904 20.8925 18.4242 20.6565C18.6579 20.4205 18.9749 20.2879 19.3055 20.2879H19.6645C19.9951 20.2879 20.3121 20.4205 20.5459 20.6565C20.7796 20.8925 20.9109 21.2126 20.9109 21.5463L19.485 23.167Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.4851 23.167V26.7911M16.344 17.127V17.9723M22.6261 17.127V17.9723" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ width = 17, height = 17, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 21.5 21.5078" fill="none" className={className}>
      <path d="M10.75 16.0191H10.759" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.75 7.06826V12.3335C18.75 16.3047 18.75 18.2904 17.5784 19.5241C16.4069 20.7578 14.5212 20.7578 10.75 20.7578C6.97876 20.7578 5.09315 20.7578 3.92157 19.5241C2.75 18.2904 2.75 16.3047 2.75 12.3335V7.06826" stroke="black" strokeWidth="1.5" />
      <path d="M20.75 9.17434L16.4069 4.78893C13.7402 2.09631 12.4069 0.75 10.75 0.75C9.09315 0.75 7.75981 2.09631 5.09315 4.78892L0.75 9.17434" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CheckboxIcon({ active, width = 20, height = 20, className }: SvgIconProps & { active: boolean }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="0.25" y="0.25" width="19.5" height="19.5" rx="5.75" fill={active ? "#364FB9" : "#6E7374"} stroke="white" strokeWidth="0.5" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.9106 7.6839C13.9968 7.78468 14.0394 7.91557 14.0291 8.04779C14.0188 8.18001 13.9564 8.30271 13.8556 8.3889L9.0606 12.5039C8.81329 12.7147 8.44311 12.6903 8.2256 12.4489L6.1306 10.1439C6.01002 10.0117 5.96912 9.82524 6.02331 9.65472C6.0775 9.4842 6.21855 9.35555 6.39331 9.31722C6.56808 9.27889 6.75002 9.33671 6.8706 9.4689L8.7056 11.4689L13.2056 7.6139C13.3083 7.52944 13.4403 7.48935 13.5726 7.50249C13.7049 7.51563 13.8265 7.5809 13.9106 7.6839Z" fill="white" />
    </svg>
  );
}

export function SearchIcon({ width = 20, height = 20, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 21.5 21.5078" fill="none" className={className}>
      <path d="M5.25 16.2561L0.75 20.7578" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.75 9.75351C2.75 4.78101 6.77944 0.75 11.75 0.75C16.7206 0.75 20.75 4.78101 20.75 9.75351C20.75 14.726 16.7206 18.757 11.75 18.757C6.77944 18.757 2.75 14.726 2.75 9.75351Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ width = 12, height = 12, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M11 1L1 11M1 1L11 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LoginIcon({ width = 18, height = 18, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 19 19.0071" fill="none" className={className}>
      <path d="M12.5 15.1307C12.4264 16.9834 10.8831 18.5565 8.81564 18.5059C8.33465 18.4941 7.74014 18.3264 6.55112 17.9909C3.68962 17.1834 1.20555 15.8264 0.609558 12.7864C0.500003 12.2276 0.500003 11.5988 0.500003 10.3411L0.500003 8.66596C0.500003 7.40833 0.500003 6.77952 0.609559 6.22071C1.20555 3.18071 3.68962 1.82369 6.55112 1.01623C7.74014 0.68072 8.33465 0.512964 8.81565 0.501192C10.8831 0.450595 12.4264 2.02367 12.5 3.87634" stroke="black" strokeLinecap="round" />
      <path d="M7.5 9.50355H18.5M7.5 9.50355C7.5 8.80305 9.4943 7.49429 10 7.00257M7.5 9.50355C7.5 10.204 9.4943 11.5128 10 12.0045" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MessageIcon({ width = 18, height = 18, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="10 10 18 18" fill="none" className={className}>
      <path d="M15 16.5185H22M15 20.5201H20M22.3 26.1223L28 28.0231L26.1 22.3209C26.1 22.3209 27 21.0203 27 18.5193C27 13.8231 23.1944 10.016 18.5 10.016C13.8056 10.016 10 13.8231 10 18.5193C10 23.2156 13.8056 27.0226 18.5 27.0226C21.0847 27.0226 22.3 26.1223 22.3 26.1223Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BellIcon({ width = 19, height = 20, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20.5026 21.5074" fill="none" className={className}>
      <path d="M0.781228 13.1489C0.568574 14.5024 1.5193 15.4419 2.68336 15.9101C7.14611 17.7052 13.3565 17.7052 17.8193 15.9101C18.9833 15.4419 19.934 14.5024 19.7214 13.1489C19.5907 12.317 18.9445 11.6244 18.4657 10.948C17.8386 10.0512 17.7763 9.07296 17.7762 8.03225C17.7762 4.01038 14.4072 0.75 10.2513 0.75C6.09543 0.75 2.72643 4.01038 2.72643 8.03225C2.72634 9.07296 2.66403 10.0512 2.03691 10.948C1.55814 11.6244 0.911918 12.317 0.781228 13.1489Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.25131 19.7574C8.04744 20.3793 9.09877 20.7574 10.2513 20.7574C11.4038 20.7574 12.4552 20.3793 13.2513 19.7574" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ active, width = 38, height = 38, className }: SvgIconProps & { active: boolean }) {
  return (
    <svg width={width} height={height} viewBox="0 0 38 38" fill="none" className={className}>
      <path d="M11.3314 19.0474L19 27L26.6686 19.0474C27.5211 18.1633 28 16.9643 28 15.714C28 13.1105 25.9648 11 23.4543 11C22.2487 11 21.0925 11.4967 20.24 12.3807L19 13.6667L17.76 12.3807C16.9075 11.4967 15.7513 11 14.5457 11C12.0352 11 10 13.1106 10 15.714C10 16.9643 10.4789 18.1633 11.3314 19.0474Z" stroke={active ? "#364FB9" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CityIcon({ width = 10, height = 10, className }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 11.5 11.5" fill="none" className={className}>
      <path d="M5.75 6.86111C6.78553 6.86111 7.625 6.11492 7.625 5.19444C7.625 4.27397 6.78553 3.52778 5.75 3.52778C4.71447 3.52778 3.875 4.27397 3.875 5.19444C3.875 6.11492 4.71447 6.86111 5.75 6.86111Z" stroke="#364FB9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.75 10.75C8.51142 9.63889 10.75 7.64904 10.75 5.19444C10.75 2.73985 8.51142 0.75 5.75 0.75C2.98858 0.75 0.75 2.73985 0.75 5.19444C0.75 7.64904 2.98858 9.63889 5.75 10.75Z" stroke="#364FB9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AdminPanelIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M0.5 0.5H4.20588V4.20588H0.5V0.5ZM0.5 5.79412H4.20588V9.5H0.5V5.79412ZM5.79412 0.5H9.5V4.20588H5.79412V0.5ZM5.79412 5.79412H9.5V9.5H5.79412V5.79412Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UserProfileIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
      <path d="M8 8H3C1.61929 8 0.5 9.11929 0.5 10.5V11.75H10.5V10.5C10.5 9.11929 9.38071 8 8 8Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 5.5C6.88071 5.5 8 4.38071 8 3C8 1.61929 6.88071 0.5 5.5 0.5C4.11929 0.5 3 1.61929 3 3C3 4.38071 4.11929 5.5 5.5 5.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FavoriteMenuIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M1.23967 5.52961L5.5 10.5L9.76033 5.52961C10.2339 4.97708 10.5 4.22768 10.5 3.44628C10.5 1.81909 9.36935 0.5 7.97462 0.5C7.30485 0.5 6.66251 0.81041 6.1889 1.36294L5.5 2.16667L4.8111 1.36295C4.3375 0.810411 3.69515 0.5 3.02538 0.5C1.63065 0.5 0.5 1.81909 0.5 3.44628C0.5 4.22768 0.766065 4.97708 1.23967 5.52961Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceListingIcon() {
  return (
    <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
      <path d="M4.5 5.38889V9.05556M4.5 7.22222H2.78571M4.5 7.22222H6.21429M5.07143 0.5H0.5V11.5H8.5V4.16667M5.07143 0.5H5.64286L8.5 3.55556V4.16667M5.07143 0.5V2.94444C5.07143 3.55556 5.64286 4.16667 6.21429 4.16667H8.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DogsDatabaseIcon() {
  return (
    <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
      <path d="M8.42859 7.09345L5.32864 10.5L4.00003 9.04004M3 4.89563H0.5M8.5 3.79672V2.69782C8.5 2.09091 8.05228 1.59891 7.5 1.59891H1.5C0.947715 1.59891 0.5 2.09091 0.5 2.69782V9.29126C0.5 9.89817 0.947715 10.3902 1.5 10.3902H2.5M6 0.5V2.69782M3 0.5V2.69782" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M6.91667 0.5H8.66667C9.311 0.5 9.83333 1.02233 9.83333 1.66667V8.66667C9.83333 9.311 9.311 9.83333 8.66667 9.83333H6.91667M2.83333 7.5L0.5 5.16667L2.83333 2.83333M0.5 5.16667L7.5 5.16667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
