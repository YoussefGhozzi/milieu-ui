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
// Charte MILIEU (reprise de la maquette du client) : orange #FF3C00, lime #D9E650, noir.
// Sur l'orange et le lime, le texte est toujours noir (contrastes 5,9:1 et 15:1).
const colors = {
  brand: { DEFAULT: '#FF3C00', foreground: '#000000', soft: 'rgba(255,60,0,0.16)', strong: '#FF6333' },
  energy: { DEFAULT: '#D9E650', foreground: '#000000', soft: 'rgba(217,230,80,0.14)' },
  background: '#0A0A0A',
  surface: { DEFAULT: '#161616', raised: '#222222', sunken: '#101010' },
  border: { DEFAULT: '#2A2A2A', strong: '#404040' },
  foreground: { DEFAULT: '#FFFFFF', muted: '#B4B4B4', subtle: '#8A8A8A' },
  success: { DEFAULT: '#D9E650', soft: 'rgba(217,230,80,0.14)' },
  warning: { DEFAULT: '#FBBF24', soft: 'rgba(251,191,36,0.16)' },
  danger: { DEFAULT: '#F87171', soft: 'rgba(248,113,113,0.16)' },
  info: { DEFAULT: '#60A5FA', soft: 'rgba(96,165,250,0.16)' },
};

/** Polices de la marque : titres en Archivo Black, texte en Montserrat (chargées sur le web). */
const fontFamily = { display: ['"Archivo Black"', '"Arial Black"', 'sans-serif'], sans: ['Montserrat', 'system-ui', 'Arial', 'sans-serif'] };

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

module.exports = { colors, radius, fontSize, fontFamily, motion };
