# Core dimension tokens — spacing, border, radius

Proposal for new **core-only** dimension tokens in `@momentum-design/tokens`. Aligned with the [Token Expansion PRD](./token-expansion-prd.md) and [component audit](./component-token-audit.md).

**Scope:** Core primitives only — no theme spacing layer, no AAOS overrides, **no `component.*` alias tokens** (bind core directly on MWL; document mappings in component descriptions / coverage matrix).

**Governance:** Spacing, border width, and radius are **theme-agnostic** (same in light, dark, classic, bronze/jade). Border **color** continues to use existing `color.theme.outline.*`.

---

## Naming convention

Numeric suffix = **pixel equivalent at 16px base** (4px grid), matching `font.size.base` (16px).

| Category | JSON path | Figma variable | CSS custom property | Type |
|----------|-----------|----------------|---------------------|------|
| Spacing | `spacing.{px}` | `spacing/{px}` | `--mds-spacing-{px}` | `dimension` |
| Border width | `border.width.{px}` | `border/width/{px}` | `--mds-border-width-{px}` | `dimension` |
| Radius | `radius.{px}` | `radius/{px}` | `--mds-radius-{px}` | `dimension` |
| Radius (circle) | `radius.full` | `radius/full` | `--mds-radius-full` | `dimension` |

**Delimiter:** dot in JSON · slash in Figma · dash in CSS.

**Do not use:** `border.radius.*` (keep `radius.*` flat, parallel to `spacing.*`), semantic names like `radius-sm` / `gap-medium`.

**Consumption:** Bind **core tokens only** on MWL — gap, padding, radius, stroke, and fixed W/H use `spacing.*`, `radius.*`, `border.width.*`, and `size.*` directly. Do not introduce a `component.*` alias layer. Reserve `spacing.theme.*` naming for a future layer if a theme needs different layout density.

---

## File layout

| File | Token set (`$metadata.json`) | Contents |
|------|------------------------------|----------|
| `core/spacing.json` | `core/spacing` | `spacing.*` scale |
| `core/border.json` | `core/border` | `border.width.*` |
| `core/radius.json` | `core/radius` | `radius.*` |

Register after `core/effect` and before `theme/stable/*` in `$metadata.json`. All themes inherit these sets with **no per-theme overrides**.

---

## Spacing tokens

For **padding, gap, margin** — not fixed control height/width (see `size.*` in a future spec).

### P0 — Sprint 16

| Token | rem | px | CSS var | Audit uses |
|-------|-----|----|---------|------------|
| `spacing.0` | 0 | 0 | `--mds-spacing-0` | 4 |
| `spacing.2` | 0.125rem | 2 | `--mds-spacing-2` | 8 |
| `spacing.4` | 0.25rem | 4 | `--mds-spacing-4` | 29 |
| `spacing.6` | 0.375rem | 6 | `--mds-spacing-6` | 8 |
| `spacing.8` | 0.5rem | 8 | `--mds-spacing-8` | **33** |
| `spacing.12` | 0.75rem | 12 | `--mds-spacing-12` | 18 |
| `spacing.16` | 1rem | 16 | `--mds-spacing-16` | 10 |
| `spacing.24` | 1.5rem | 24 | `--mds-spacing-24` | 5 |
| `spacing.32` | 2rem | 32 | `--mds-spacing-32` | 11 |

### P1 — add when binding those components

| Token | rem | px | CSS var | Notes |
|-------|-----|----|---------|-------|
| `spacing.14` | 0.875rem | 14 | `--mds-spacing-14` | Calendar padding |
| `spacing.20` | 1.25rem | 20 | `--mds-spacing-20` | Button height tier |
| `spacing.28` | 1.75rem | 28 | `--mds-spacing-28` | Tab, calendar cell |
| `spacing.40` | 2.5rem | 40 | `--mds-spacing-40` | Nav item |
| `spacing.64` | 4rem | 64 | `--mds-spacing-64` | App header |
| `spacing.240` | 15rem | 240 | `--mds-spacing-240` | Timepicker listbox |

**Exceptions (not in core):** negative offsets (avatar badge), odd values (`0.3125rem`, `0.9375rem`), buttongroup 1px gap (bind `spacing.2` or leave hardcoded).

---

## Border width tokens

Stroke **weight** only. Pair with `color.theme.outline.*` for color and `solid` for style in CSS.

### P0 — Sprint 16

| Token | Value | CSS var | Audit uses | Components |
|-------|-------|---------|------------|------------|
| `border.width.1` | `1px` | `--mds-border-width-1` | **9** | alertchip, banner, buttongroup, buttonlink, divider, inputchip, progressbar, staticchip, statictoggle, stepperconnector |
| `border.width.2` | `2px` | `--mds-border-width-2` | 1 | filterchip (selected) |

**Also maps to `border.width.1`:** divider `--mdc-divider-width` (`0.0625rem` = 1px); progressbar 0.5px stroke rounds to 1px at bind time.

---

## Radius tokens

For **border-radius** on corners.

### P0 — Sprint 16

| Token | rem | px | CSS var | Audit uses | Typical use |
|-------|-----|----|---------|------------|-------------|
| `radius.0` | 0 | 0 | `--mds-radius-0` | — | Square corners; mixed-radius (accordion, combobox, nav) |
| `radius.2` | 0.125rem | 2 | `--mds-radius-2` | 4 | Checkbox, datepicker sm, timepicker sm |
| `radius.4` | 0.25rem | 4 | `--mds-radius-4` | 15 | Chip, icon, inputchip, skeleton sm |
| `radius.8` | 0.5rem | 8 | `--mds-radius-8` | **30** | Card, input, dialog, list, accordion |
| `radius.20` | 1.25rem | 20 | `--mds-radius-20` | 5 | Button pill, nav, sidenav |
| `radius.full` | `50%` | — | `--mds-radius-full` | **16** | Avatar, bullet, radio, slider thumb, presence |

### P1 — add with those components

| Token | rem | px | CSS var | Audit uses | Notes |
|-------|-----|----|---------|------------|-------|
| `radius.12` | 0.75rem | 12 | `--mds-radius-12` | 1 | statictoggle |
| `radius.14` | 0.875rem | 14 | `--mds-radius-14` | 4 | Calendar corner cells |
| `radius.100` | 6.25rem | 100 | `--mds-radius-100` | 4 | Badge pill, button capsule (`100px` = same) |
| `radius.50` | 3.125rem | 50 | `--mds-radius-50` | 1 | listitem (large pill) |

**Exceptions (not in core):** popover arrow 3px radius (bind `radius.2` or leave hardcoded); `100vh` on avatar → use `radius.full`.

---

## Sprint 16 minimum bundle

| Category | P0 count | Tokens |
|----------|---------:|--------|
| Spacing | 9 | `0, 2, 4, 6, 8, 12, 16, 24, 32` |
| Border width | 2 | `border.width.1`, `border.width.2` |
| Radius | 6 | `0, 2, 4, 8, 20, full` |
| **Total** | **17** | |

---

## JSON files

Core dimension tokens live in [`src/core/`](../src/core/):

| File | Path |
|------|------|
| Spacing | [`src/core/spacing.json`](../src/core/spacing.json) |
| Border | [`src/core/border.json`](../src/core/border.json) |
| Radius | [`src/core/radius.json`](../src/core/radius.json) |
| Size | [`src/core/size.json`](../src/core/size.json) |
| Metadata hint | [`docs/metadata.snippet.json`](./metadata.snippet.json) |

Sprint 16 P0-only subset: use the P0 rows from the tables above; P1 tokens in JSON are marked in `description`.

---

## Pilot component mapping

| Component | Property | Token |
|-----------|----------|-------|
| alertchip | gap | `spacing.4` |
| alertchip | padding horizontal | `spacing.8` |
| alertchip | height | `size.24` *(future spec)* |
| alertchip | border-radius | `radius.4` |
| alertchip | border-width | `border.width.1` |
| accordionbutton | gap | `spacing.8` |
| accordionbutton | padding lg | `spacing.24` |
| accordionbutton | border-radius | `radius.8` |
| input / card / dialog | border-radius | `radius.8` |
| button (pill) | border-radius | `radius.20` or `radius.100` |
| badge (capsule) | border-radius | `radius.100` |
| avatar / staticradio | border-radius | `radius.full` |
| checkbox | border-radius | `radius.2` |
| filterchip (selected) | border-width | `border.width.2` |

### CSS example — alertchip

```css
gap: var(--mds-spacing-4);
padding: 0 var(--mds-spacing-8);
border-radius: var(--mds-radius-4);
border-width: var(--mds-border-width-1);
border-color: var(--mds-color-theme-outline-button-normal);
```

---

## Figma Variables implementation

### Two paths

| Path | Best for |
|------|----------|
| **A. Token Studio → Figma** | Production — matches JSON-first governance |
| **B. Manual Figma Variables** | Quick pilot on 2–3 components |

Recommended flow:

```
JSON (GitHub) → Token Studio pull → Export Figma Variables → Bind MWL → Publish library
```

### Path A — Token Studio (production)

1. **Edit JSON in repo** — update [`src/core/*.json`](../src/core/) and register sets in `$metadata.json`.
2. **Register sets** — add to `$metadata.json` after `core/effect`:

   ```json
   "core/spacing",
   "core/border",
   "core/radius"
   ```

3. **Build tokens** — `yarn build` in `packages/assets/tokens`.
4. **Token Studio in Figma** — Settings → Sync → GitHub → pull branch.
5. **Export variables** — select `core/spacing`, `core/border`, `core/radius` → Export to Figma Variables.
6. **Publish** Momentum Web Library.

Token Studio maps paths automatically:

| JSON | Figma variable |
|------|----------------|
| `spacing.8` | `spacing/8` |
| `border.width.1` | `border/width/1` |
| `radius.full` | `radius/full` |

### Path B — Manual variables (pilot)

#### 1. Create collections (no modes)

Dimension tokens are **theme-agnostic** — do not add Light/Dark modes.

| Collection | Purpose |
|------------|---------|
| `Core / Spacing` | gap, padding, margin |
| `Core / Border` | stroke weight |
| `Core / Radius` | corner radius |

#### 2. Create variables

Figma layout uses **px numbers** (matches token suffix at 16px base).

**Core / Spacing** — type **Number**:

| Variable | Value |
|----------|------:|
| `spacing/0` | 0 |
| `spacing/2` | 2 |
| `spacing/4` | 4 |
| `spacing/6` | 6 |
| `spacing/8` | 8 |
| `spacing/12` | 12 |
| `spacing/16` | 16 |
| `spacing/24` | 24 |
| `spacing/32` | 32 |

**Core / Border** — type **Number**:

| Variable | Value |
|----------|------:|
| `border/width/1` | 1 |
| `border/width/2` | 2 |

**Core / Radius**:

| Variable | Type | Value |
|----------|------|------:|
| `radius/0` | Number | 0 |
| `radius/2` | Number | 2 |
| `radius/4` | Number | 4 |
| `radius/8` | Number | 8 |
| `radius/20` | Number | 20 |
| `radius/full` | String | `50%` |

#### 3. Set variable scopes

| Collection | Enable scopes |
|------------|---------------|
| Spacing | Gap, Padding |
| Border | Stroke weight |
| Radius | Corner radius |

Limits which properties each variable can bind to.

#### 4. Bind on components

Open MWL component → select frame → click **⊞ Apply variable** on each property:

| Figma property | Variable |
|----------------|----------|
| Auto-layout → Item spacing | `spacing/{px}` |
| Auto-layout → Padding | `spacing/{px}` |
| Corner radius | `radius/{px}` or `radius/full` |
| Stroke → Weight | `border/width/{px}` |
| Stroke → Color | existing `color/theme/outline/...` |

**Pilot order:** alertchip → accordionbutton → input.

#### 5. Swap test

Change `spacing/8` from 8 → 10 in Local variables. All bound components should update together.

### Figma ↔ JSON ↔ CSS

| JSON | Figma | CSS (after build) |
|------|-------|-------------------|
| `spacing.8` | `spacing/8` = 8 | `--mds-spacing-8: 0.5rem` |
| `border.width.1` | `border/width/1` = 1 | `--mds-border-width-1: 1px` |
| `radius.8` | `radius/8` = 8 | `--mds-radius-8: 0.5rem` |
| `radius.full` | `radius/full` = 50% | `--mds-radius-full: 50%` |

### Common gotchas

| Issue | Fix |
|-------|-----|
| Variable not offered on property | Check variable **scope** |
| Values differ from code | Figma = px; CSS = rem — same at 16px base |
| Spacing in Light/Dark collections | Wrong — single mode only |
| `radius/full` as Number | Use String `50%` or max radius on square frame |
| Figma discovery not in JSON | Back-sync to GitHub before marking component done |

### Component done checklist

- [ ] Spacing, radius, stroke weight use variables (not raw numbers)
- [ ] Stroke color still uses `color/theme/*`
- [ ] All variants/states bound
- [ ] Swap test passes
- [ ] JSON and Figma in sync
- [ ] Library published

---

## Out of scope (separate specs)

| Category | Pattern | Notes |
|----------|---------|-------|
| Size | `size.{px}` | Fixed width/height (input height, avatar) |
| Theme spacing | `spacing.theme.*` | Only if a theme changes layout density |
| Component semantic | `component.*` | **Out of scope** — use core tokens + coverage matrix |
| High contrast | `color.theme.highcontrast.*` | Color only |
| Border color | `color.theme.outline.*` | Already exists |

---

## Naming cheat sheet

| Value | Token | Not |
|-------|-------|-----|
| 4px gap | `spacing.4` | `gap-sm`, `spacing-xs` |
| 8px corner | `radius.8` | `border-radius-medium` |
| Circle | `radius.full` | `radius.9999` |
| 1px stroke | `border.width.1` | `border.1` |
| 8px padding | `spacing.8` | `padding-medium` |

**Rule:** `{category}.{px}` everywhere; `{category}.full` for circles only.
