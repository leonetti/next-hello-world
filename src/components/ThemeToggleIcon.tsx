import styles from './ThemeToggleIcon.module.css';

export const ThemeToggleIcon = () => (
  <svg
    className={`w-full hover:text-emphasis-hover ${styles.container}`}
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <title>Toggle Theme</title>
    <mask className={styles.moon} id="moon-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="24" cy="10" r="6" fill="black" />
    </mask>
    <circle
      className={styles.sun}
      cx="12"
      cy="12"
      r="6"
      mask="url(#moon-mask)"
      fill="currentColor"
      // fill="#BBDEFB"
    />
    <g className={styles['sun-beams']} stroke="currentColor" strokeWidth="2px">
      {/* <g className={styles['sun-beams']} stroke="#BBDEFB" strokeWidth="2px"> */}
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
);
