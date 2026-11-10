/**
 * Jetons de design MILIEU — source unique du style.
 * Lus par tailwind.config.js (classes NativeWind) et par le code (couleurs des icônes, graphiques).
 *
 * Palette énergique : orange (action principale), vert (énergie, succès), noir anthracite (fond).
 * Les couleurs ne sont pas imposées par le cahier des charges (la charte existante du client reste à confirmer) :
 * pour adopter la charte du client, il suffit de modifier ce fichier.
 *
 * Contrastes vérifiés (WCAG AA ≥ 4,5:1) sur la carte `surface` : texte 16:1, muted 8,7:1, subtle 5,4:1,
 * orange 5,9:1, vert 7,4:1. Sur un fond orange ou vert, le texte est anthracite (6,5:1 et 8:1), jamais blanc.
 */
const colors = {
  brand: { DEFAULT: '#FF6B1A', foreground: '#121316', soft: 'rgba(255,107,26,0.16)', strong: '#FF8A45' },
  energy: { DEFAULT: '#22C55E', foreground: '#121316', soft: 'rgba(34,197,94,0.16)' },
  background: '#121316',
  surface: { DEFAULT: '#1B1D21', raised: '#25282D', sunken: '#16181B' },
  border: { DEFAULT: '#2E3238', strong: '#424750' },
  foreground: { DEFAULT: '#FAFAFA', muted: '#B6BBC3', subtle: '#8C929B' },
  success: { DEFAULT: '#22C55E', soft: 'rgba(34,197,94,0.16)' },
  warning: { DEFAULT: '#FBBF24', soft: 'rgba(251,191,36,0.16)' },
  danger: { DEFAULT: '#F87171', soft: 'rgba(248,113,113,0.16)' },
  info: { DEFAULT: '#60A5FA', soft: 'rgba(96,165,250,0.16)' },
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
