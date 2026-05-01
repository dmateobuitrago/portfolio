# CSS Modules Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish CSS Modules as the styling system for this Next.js portfolio, replacing styled-components incrementally as components are edited.

**Architecture:** Create a `tokens.css` file that exposes all design tokens as CSS custom properties, import it globally in `_app.js`, then migrate `Typography` as the reference component that establishes the pattern. All future component migrations follow the same pattern. `GridBlock` and `GridContainer` stay as styled-components indefinitely.

**Tech Stack:** Next.js 15, React 19, CSS Modules (built into Next.js — no config needed), styled-components v6 (stays for unmigrated components)

---

## Breakpoint reference (use these hardcoded in all media queries — CSS vars don't work inside `@media`)

| Token     | Value  |
| --------- | ------ |
| bp-small  | 451px  |
| bp-medium | 769px  |
| bp-large  | 961px  |
| bp-xlarge | 1281px |

---

### Task 1: Create `styles/tokens.css`

**Files:**

- Create: `styles/tokens.css`

- [ ] **Step 1: Create the file**

Create `styles/tokens.css` with this exact content:

```css
/* Breakpoints (hardcode these in media queries — CSS vars don't work inside @media):
   small:  451px
   medium: 769px
   large:  961px
   xlarge: 1281px
*/

:root {
  --color-primary: #100f0f;
  --color-secondary: #fffcf0;

  --font-family: "Quador", Georgia, "Times New Roman", serif;
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

- [ ] **Step 2: Commit**

```bash
git add styles/tokens.css
git commit -m "feat: add CSS custom properties tokens file"
```

---

### Task 2: Import tokens globally in `_app.js`

**Files:**

- Modify: `pages/_app.js`

- [ ] **Step 1: Add the import**

In `pages/_app.js`, add one import at the top of the file, after the existing imports:

```js
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { tema } from "../styles/tema";
import "../styles/tokens.css";
```

Everything else in `_app.js` stays exactly the same. `ThemeProvider` is not removed.

- [ ] **Step 2: Verify visually**

Run `pnpm dev` and open the site. It should look identical to before — no visual changes expected yet.

- [ ] **Step 3: Verify tokens are available**

Open browser DevTools → Elements → inspect any element → Computed → scroll to `--color-primary`. You should see `#100F0F` listed as a custom property on `:root`.

- [ ] **Step 4: Commit**

```bash
git add pages/_app.js
git commit -m "feat: import CSS tokens globally"
```

---

### Task 3: Migrate `Typography` to CSS Modules (reference migration)

This is the most complex atom — it has multiple type variants, conditional color and weight props, and is extended via `styled(Typography)` in `Tag.js` and `MyLink.js`. Completing this migration proves the full pattern works.

**Files:**

- Create: `components/atoms/Typography.module.css`
- Modify: `components/atoms/Typography.js`

**Key behaviours to preserve:**

- `type` prop selects the variant: `"huge"`, `"title"`, `"subtitle"`, `"body"` (default), `"small"`
- `dark` prop → dark color (`--color-primary`); no `dark` prop → light color (`--color-secondary`)
- `bold` prop → `font-weight: 700`; no `bold` → `font-weight: 300`
- `align` prop → `textAlign` (dynamic string, handled via inline style)
- `className` prop → passed through to support `styled(Typography)` in `Tag.js` and `MyLink.js`
- `huge`, `title`, `subtitle` use `--font-family` (Inter); `body` and `small` use `--font-family` (Quador)

- [ ] **Step 1: Create `Typography.module.css`**

Create `components/atoms/Typography.module.css`:

```css
.base {
  font-family: var(--font-family);
  font-weight: 300;
  text-align: left;
}

.dark {
  color: var(--color-primary);
}
.light {
  color: var(--color-secondary);
}
.bold {
  font-weight: 700;
}

.huge {
  font-family: var(--font-family);
  font-size: var(--font-size-xlarge);
  line-height: 1.1;
}
@media screen and (min-width: 961px) {
  .huge {
    font-size: var(--font-size-xxlarge);
  }
}

.title {
  font-family: var(--font-family);
  font-size: var(--font-size-large);
  line-height: 1.5;
}
@media screen and (min-width: 961px) {
  .title {
    font-size: var(--font-size-xlarge);
  }
}

.subtitle {
  font-family: var(--font-family);
  font-size: var(--font-size-medium);
  line-height: 1.5;
}
@media screen and (min-width: 961px) {
  .subtitle {
    font-size: var(--font-size-large);
  }
}

.body {
  font-size: var(--font-size-medium);
  line-height: 1.5;
}

.small {
  font-size: var(--font-size-small);
  line-height: 1.5;
}
```

- [ ] **Step 2: Rewrite `Typography.js`**

Replace the entire contents of `components/atoms/Typography.js` with:

```jsx
import React from "react";
import styles from "./Typography.module.css";

class Typography extends React.Component {
  render() {
    const { type, bold, dark, align, className, children } = this.props;

    const classes = [
      styles.base,
      styles[type] || styles.body,
      dark ? styles.dark : styles.light,
      bold ? styles.bold : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={classes} style={align ? { textAlign: align } : undefined}>
        {children}
      </div>
    );
  }
}

export default Typography;
```

Notes on what changed:

- All styled-components removed; single `<div>` with composed class names
- `type` maps directly to a CSS module class via `styles[type]`
- `align` uses inline style — it's a dynamic string, not practical as CSS classes
- `className` is spread last so external overrides (from `styled(Typography)` callers) still apply
- The unused `formatContent` method and `$mb` prop (neither were wired up) are removed

- [ ] **Step 3: Verify visually**

Run `pnpm dev`. Check the following pages and verify text looks identical to before:

- Home page — body text, headings
- A project page — `Huge`, `Title`, `Subtitle` variants
- About page — body and small text

Pay attention to: font family (Inter for headings, Quador for body), font weight, color (dark vs light variants), responsive font sizes.

- [ ] **Step 4: Verify `styled(Typography)` consumers still work**

`Tag.js` and `MyLink.js` both call `styled(Typography)`. They should still render correctly because:

- `Tag` uses `<StyledTag type="small" dark>` — check that tags appear with correct border and background
- `MyLink` uses `<StyledLink type="body" dark>` — check that links are underlined

- [ ] **Step 5: Commit**

```bash
git add components/atoms/Typography.js components/atoms/Typography.module.css
git commit -m "feat: migrate Typography to CSS modules"
```

---

## Pattern reference for future opportunistic migrations

When you next edit any component in the migration candidates list, follow this checklist:

1. Create `ComponentName.module.css` alongside the `.js` file
2. Copy CSS from the styled-component template literals into `.module.css` classes
3. Replace `props.theme.someToken` with `var(--some-token)` using the token names from `tokens.css`
4. Hardcode breakpoint values in `@media` queries (see table at top of plan)
5. Replace the styled-component with a plain element using `className={styles.myClass}`
6. For conditional styles: `[styles.base, condition ? styles.a : styles.b].filter(Boolean).join(" ")`
7. For dynamic string props (like `align`): use inline `style={{ cssProp: value }}`
8. Remove the `styled-components` import if it's the last one in the file
9. Commit per component

**Components still to migrate (do when touching them):**

- `components/atoms/Divider.js`
- `components/atoms/MyLink.js`
- `components/molecules/DataPair.js`
- `components/molecules/Menu.js`
- `components/molecules/ProjectCard.js`
- `components/molecules/Tag.js`
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

**Never migrate (leave as styled-components):**

- `components/atoms/GridBlock.js`
- `components/atoms/GridContainer.js`
