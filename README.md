# milieu-ui

Design system de MILIEU (submodule `packages/ui` du dépôt `milieu`).

- `tokens.js` : source unique des couleurs, rayons, tailles de texte et durées d'animation, lue par Tailwind/NativeWind.
- `src/components` : composants dans le style shadcn/ui / React Native Reusables (variantes `cva`, utilitaire `cn`), stylés avec NativeWind :
  `Text`, `Button`, `Card`, `PressableCard`, `Badge`, `Chip`, `TokenAmount`, `SeatsBadge`, `Avatar`, `SectionHeader`, `ListRow`, `Divider`, `EmptyState`, `Skeleton`, `Sheet`, `Screen`.

Règles : contraste ≥ 4,5:1, cibles tactiles ≥ 44 px, libellés d'accessibilité sur chaque élément interactif.

## Publication (paquet npm versionné)

Publié sur **GitHub Packages** sous `@youssefghozzi/milieu-ui`, en sources TypeScript (les apps Expo les compilent avec Metro).

```bash
npm version minor          # commit + tag
git push --follow-tags     # la CI « Publication » publie la version
```

Dans une app Expo, en gardant `import … from '@milieu/ui'` :

```bash
# .npmrc
@youssefghozzi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

```json
"dependencies": { "@milieu/ui": "npm:@youssefghozzi/milieu-ui@^0.1.0" }
```
