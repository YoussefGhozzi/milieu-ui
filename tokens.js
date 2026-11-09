/**
 * Jetons de design MILIEU — source unique du style.
 * Lus par tailwind.config.js (classes NativeWind) et par le code (couleurs des icônes, graphiques).
 * Contrastes vérifiés sur fond `surface` : foreground 16:1, muted 7:1, brand 8:1 (WCAG AA ≥ 4,5:1).
 * `subtle` (3,9:1) est réservé aux textes secondaires de grande taille ou décoratifs.
 */
const colors = {
  brand: { DEFAULT: '#c4a91a', foreground: '#090909', soft: 'rgba(196,169,26,0.14)', strong: '#d9bd2b' },
  background: '#090909',
  surface: { DEFAULT: '#141414', raised: '#1c1c1c', sunken: '#0f0f0f' },
  border: { DEFAULT: '#262626', strong: '#3a3a3a' },
  foreground: { DEFAULT: '#f5f5f4', muted: '#a8a29e', subtle: '#78716c' },
  success: { DEFAULT: '#34d399', soft: 'rgba(52,211,153,0.14)' },
  warning: { DEFAULT: '#fbbf24', soft: 'rgba(251,191,36,0.14)' },
  danger: { DEFAULT: '#f87171', soft: 'rgba(248,113,113,0.14)' },
  info: { DEFAULT: '#60a5fa', soft: 'rgba(96,165,250,0.14)' },
};

const radius = { sm: '8px', md: '12px', lg: '16px', xl: '24px', full: '9999px' };

/** Échelle typographique : [taille, interligne] en px. */
const fontSize = {
  caption: ['12px', '16px'],
  label: ['14px', '20px'],
  body: ['16px', '24px'],
  heading: ['18px', '26px'],
  title: ['24px', '32px'],
  display: ['32px', '40px'],
};

/** Durées d'animation (ms). */
const motion = { fast: 150, base: 250 };

module.exports = { colors, radius, fontSize, motion };
