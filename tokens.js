/**
 * Jetons de design MILIEU — source unique du style.
 * Deux thèmes : nuit (dark) et jour (light). Les classes Tailwind lisent des variables CSS (--c-…),
 * que l'app renseigne selon le thème ; le code lit les mêmes valeurs via `colors` (src/theme.ts).
 * Contrastes vérifiés (WCAG AA ≥ 4,5:1) pour le texte dans les deux thèmes.
 */
const palettes = {
  dark: {
    brand: '#FF6B1A', brandForeground: '#121316', brandStrong: '#FF8A45',
    energy: '#22C55E', energyForeground: '#121316',
    background: '#121316', surface: '#1B1D21', surfaceRaised: '#25282D', surfaceSunken: '#16181B',
    border: '#2E3238', borderStrong: '#424750',
    foreground: '#FAFAFA', muted: '#B6BBC3', subtle: '#8C929B',
    success: '#22C55E', warning: '#FBBF24', danger: '#F87171', info: '#60A5FA',
  },
  light: {
    brand: '#C2410C', brandForeground: '#FFFFFF', brandStrong: '#9A3412',
    energy: '#15803D', energyForeground: '#FFFFFF',
    background: '#F7F7F4', surface: '#FFFFFF', surfaceRaised: '#EFEFEA', surfaceSunken: '#F1F1ED',
    border: '#E0E0DA', borderStrong: '#C4C4BC',
    foreground: '#121316', muted: '#4B5057', subtle: '#6B7078',
    success: '#15803D', warning: '#B45309', danger: '#DC2626', info: '#2563EB',
  },
};

const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;
const soft = (name) => `rgb(var(--c-${name}) / 0.14)`;

/** Couleurs Tailwind : elles suivent le thème grâce aux variables CSS. */
const colors = {
  brand: { DEFAULT: v('brand'), foreground: v('brandForeground'), soft: soft('brand'), strong: v('brandStrong') },
  energy: { DEFAULT: v('energy'), foreground: v('energyForeground'), soft: soft('energy') },
  background: v('background'),
  surface: { DEFAULT: v('surface'), raised: v('surfaceRaised'), sunken: v('surfaceSunken') },
  border: { DEFAULT: v('border'), strong: v('borderStrong') },
  foreground: { DEFAULT: v('foreground'), muted: v('muted'), subtle: v('subtle') },
  success: { DEFAULT: v('success'), soft: soft('success') },
  warning: { DEFAULT: v('warning'), soft: soft('warning') },
  danger: { DEFAULT: v('danger'), soft: soft('danger') },
  info: { DEFAULT: v('info'), soft: soft('info') },
};

/** Polices de la marque : titres en Archivo Black, texte en Montserrat (chargées sur le web). */
const fontFamily = { display: ['"Archivo Black"', '"Arial Black"', 'sans-serif'], sans: ['Montserrat', 'system-ui', 'Arial', 'sans-serif'] };
const radius = { sm: '8px', md: '12px', lg: '16px', xl: '24px', full: '9999px' };
/** Échelle typographique : [taille, interligne] en px. */
const fontSize = { caption: ['12px', '16px'], label: ['14px', '20px'], body: ['16px', '24px'], heading: ['18px', '26px'], title: ['24px', '32px'], display: ['32px', '40px'] };
const motion = { fast: 150, base: 250 };

module.exports = { palettes, colors, radius, fontSize, fontFamily, motion };
