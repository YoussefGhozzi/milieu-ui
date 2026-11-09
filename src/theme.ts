// Accès typé aux jetons depuis le code (couleurs d'icônes, etc.).
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokens = require('../tokens.js') as {
  colors: {
    brand: { DEFAULT: string; foreground: string; soft: string; strong: string };
    background: string;
    surface: { DEFAULT: string; raised: string; sunken: string };
    border: { DEFAULT: string; strong: string };
    foreground: { DEFAULT: string; muted: string; subtle: string };
    success: { DEFAULT: string; soft: string };
    warning: { DEFAULT: string; soft: string };
    danger: { DEFAULT: string; soft: string };
    info: { DEFAULT: string; soft: string };
  };
  motion: { fast: number; base: number };
};

export const colors = tokens.colors;
export const motion = tokens.motion;
