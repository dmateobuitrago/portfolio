# CSS Modules Migration

**Date:** 2026-05-01
**Status:** Approved

## Goal

Move away from styled-components toward CSS Modules for easier authoring. Migration is opportunistic — components are converted when already being edited for another reason. Some components (notably `GridBlock`, `GridContainer`) are not worth migrating and stay as styled-components indefinitely.

## Approach

Option B: opportunistic / as-you-touch-it. Convert the theme to CSS custom properties once as the foundation, then migrate individual components at your own pace. No migration schedule.

## Theme Conversion (one-time, upfront)

Create `styles/tokens.css` declaring all design tokens as CSS custom properties on `:root`. `tema.js` stays in place — `ThemeProvider` still needs it for remaining styled-components.

```css
:root {
  --color-primary: #100f0f;
  --color-secondary: #fffcf0;
  --font-family: "Quador", Georgia, serif;
  --font-family: "Inter", sans-serif;
  --font-size-small: 15px;
  --font-size-medium: 20px;
  --font-size-large: 30px;
  --font-size-xlarge: 40px;
  --font-size-xxlarge: 60px;
  --space-half: 5px;
  --space-1: 10px;
  --space-2: 20px;
  --space-4: 40px;
  --space-8: 80px;
  --space-12: 120px;
  --bp-small: 451px;
  --bp-medium: 769px;
  --bp-large: 961px;
  --bp-xlarge: 1281px;
}
```

> **Note:** CSS custom properties cannot be used inside `@media` query values — `@media (min-width: var(--bp-large))` is invalid. Breakpoints must be hardcoded in each CSS Module:
>
> ```css
> @media screen and (min-width: 961px) { ... }
> ```
>
> The `--bp-*` variables are still useful for non-media-query uses (e.g. `max-width` on a container), but media queries need the raw values. Keep the four breakpoint values (`451px`, `769px`, `961px`, `1281px`) in a comment at the top of `tokens.css` as a reference.

Import once in `_app.js`:

```js
import "../styles/tokens.css";
```

## Per-Component Migration Pattern

When editing a component for any reason, convert it to CSS Modules:

1. Create `ComponentName.module.css` alongside the `.js` file
2. Remove the `styled-components` import, add `import styles from './ComponentName.module.css'`
3. Move CSS into the module, replacing `props.theme.*` references with `var(--token-name)`
4. For conditional/dynamic styles, use multiple CSS classes combined with an array join:

```jsx
<div className={[styles.base, dark ? styles.dark : styles.light].filter(Boolean).join(' ')}>
```

No `clsx` or other helper needed.

## Coexistence

- `ThemeProvider`, `ServerStyleSheet`, and `tema.js` remain untouched throughout
- `tokens.css` is the only addition to the app shell (`_app.js`)
- Both systems work in parallel with no conflict
- New components always use CSS Modules — no new styled-components

## What to Skip

`GridBlock` and `GridContainer` have many prop-driven conditional styles and are not worth migrating. Leave as styled-components.

## Cleanup (future, optional)

Once all desired components are migrated, remove in one commit:

- `styled-components` and `babel-plugin-styled-components` packages
- `ThemeProvider` from `_app.js`
- `ServerStyleSheet` from `_document.js`
- `tema.js`

## Files Affected by Theme Conversion

- `styles/tokens.css` — new file
- `pages/_app.js` — add tokens.css import

## Component Migration Candidates

Easy to migrate (layout wrappers, project components):

- `components/layout/Footer.js`
- `components/layout/Header.js`
- `components/layout/Layout.js`
- `components/layout/MainMenu.js`
- `components/layout/OneBigColumn.js`
- `components/project/BigImage.js`
- `components/project/ImageGallery.js`
- `components/project/ImageWithCaption.js`
- `components/project/ImpactCallOut.js`
- `components/project/ProjectIntro.js`
- `components/project/TitleAndText.js`
- `components/project/VideoWithCaption.js`
- `components/molecules/DataPair.js`
- `components/molecules/Menu.js`
- `components/molecules/ProjectCard.js`
- `components/molecules/Tag.js`
- `components/atoms/Divider.js`
- `components/atoms/MyLink.js`
- `components/atoms/Typography.js`

Skip (stay as styled-components):

- `components/atoms/GridBlock.js`
- `components/atoms/GridContainer.js`
