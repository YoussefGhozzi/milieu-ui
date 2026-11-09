# milieu-ui

Design system de MILIEU (submodule `packages/ui` du dépôt `milieu`).

- `tokens.js` : source unique des couleurs, rayons, tailles de texte et durées d'animation, lue par Tailwind/NativeWind.
- `src/components` : composants dans le style shadcn/ui / React Native Reusables (variantes `cva`, utilitaire `cn`), stylés avec NativeWind :
  `Text`, `Button`, `Card`, `PressableCard`, `Badge`, `Chip`, `TokenAmount`, `SeatsBadge`, `Avatar`, `SectionHeader`, `ListRow`, `Divider`, `EmptyState`, `Skeleton`, `Sheet`, `Screen`.

Règles : contraste ≥ 4,5:1, cibles tactiles ≥ 44 px, libellés d'accessibilité sur chaque élément interactif.
