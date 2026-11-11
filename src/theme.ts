// Thèmes nuit / jour. `colors` est un objet vivant : applyTheme() le met à jour en place,
// puis l'app se redessine. Les classes Tailwind suivent les variables CSS de themeVariables().
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokens = require('../tokens.js') as { palettes: Record<ThemeMode, Palette>; motion: { fast: number; base: number } };

export type ThemeMode = 'dark' | 'light';
type Palette = Record<
  'brand' | 'brandForeground' | 'brandStrong' | 'energy' | 'energyForeground' | 'background' | 'surface' | 'surfaceRaised' | 'surfaceSunken'
  | 'border' | 'borderStrong' | 'foreground' | 'muted' | 'subtle' | 'success' | 'warning' | 'danger' | 'info', string>;

const rgb = (hex: string) => { const h = hex.replace('#', ''); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
const alpha = (hex: string, a: number) => `rgba(${rgb(hex).join(',')},${a})`;

const build = (p: Palette) => ({
  brand: { DEFAULT: p.brand, foreground: p.brandForeground, soft: alpha(p.brand, 0.14), strong: p.brandStrong },
  energy: { DEFAULT: p.energy, foreground: p.energyForeground, soft: alpha(p.energy, 0.14) },
  background: p.background,
  surface: { DEFAULT: p.surface, raised: p.surfaceRaised, sunken: p.surfaceSunken },
  border: { DEFAULT: p.border, strong: p.borderStrong },
  foreground: { DEFAULT: p.foreground, muted: p.muted, subtle: p.subtle },
  success: { DEFAULT: p.success, soft: alpha(p.success, 0.14) },
  warning: { DEFAULT: p.warning, soft: alpha(p.warning, 0.14) },
  danger: { DEFAULT: p.danger, soft: alpha(p.danger, 0.14) },
  info: { DEFAULT: p.info, soft: alpha(p.info, 0.14) },
});

let mode: ThemeMode = 'dark';
export const colors = build(tokens.palettes.dark);
export const motion = tokens.motion;
export const getThemeMode = () => mode;

/** Change de thème : met à jour `colors` en place. L'app doit ensuite se redessiner. */
export function applyTheme(next: ThemeMode) {
  mode = next;
  const fresh = build(tokens.palettes[next]) as Record<string, unknown>;
  const target = colors as Record<string, unknown>;
  for (const key of Object.keys(fresh)) {
    if (typeof fresh[key] === 'string') target[key] = fresh[key];
    else Object.assign(target[key] as object, fresh[key]);
  }
}

/** Variables CSS du thème (« R G B »), à poser sur la racine de l'app. */
export function themeVariables(m: ThemeMode): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [name, hex] of Object.entries(tokens.palettes[m])) out[`--c-${name}`] = rgb(hex).join(' ');
  return out;
}
