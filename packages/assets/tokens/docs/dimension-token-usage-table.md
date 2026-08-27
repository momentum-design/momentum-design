# Dimension token usage — core reference

Source: [`component-token-audit.md`](./component-token-audit.md) · coded library `*.styles.ts` on `main`.

**CSV export (core only):** [`dimension-token-usage.csv`](./dimension-token-usage.csv)

**Counts** = distinct components with at least one hard-coded value mapping to that token (a component can appear under multiple tokens).

**Policy:** Core tokens only. Bind `spacing.*`, `radius.*`, `border.width.*`, and `size.*` directly in Figma. Document which core token each component property uses in the coverage matrix — no `component.*` alias layer.

---

## Naming convention

| Category | JSON path | Figma variable | CSS custom property |
|---|---|---|---|
| Spacing | `spacing.{px}` | `spacing/{px}` | `--mds-spacing-{px}` |
| Border width | `border.width.{px}` | `border/width/{px}` | `--mds-border-width-{px}` |
| Radius | `radius.{px}` | `radius/{px}` | `--mds-radius-{px}` |
| Radius (circle) | `radius.full` | `radius/full` | `--mds-radius-full` |
| Size | `size.{px}` | `size/{px}` | `--mds-size-{px}` |

Suffix `{px}` = pixel equivalent at **16px base** (`spacing.8` = 0.5rem = 8px).

---

## Radius

| Core token | Value | P0 | Used components (count) |
|---|---|:---:|---|
| `radius.0` | `0` | ✓ | *(mixed layouts — accordion/combobox use 8px on subset of corners)* |
| `radius.2` | `0.125rem` (2px) | ✓ | checkbox, datepicker, staticcheckbox, timepicker **(4)** |
| `radius.4` | `0.25rem` (4px) | ✓ | alertchip, avatarbutton, icon, inputchip, linksimple, navmenuitem, skeleton, slider, staticchip, stepperitem, tab, verticaltablist **(12)** |
| `radius.8` | `0.5rem` (8px) | ✓ | accordionbutton, accordiongroup, banner, calendar, card, combobox, datepicker, dialog, divider, input, listitem, navmenuitem, popover, select, skeleton, slider, statictoggle, stepperitem, tab, textarea, timepicker, toast **(22)** |
| `radius.20` | `1.25rem` (20px) | ✓ | button, buttongroup, navmenuitem, sidenavigation, skeleton **(5)** |
| `radius.full` | `50%` | ✓ | avatar, avatarbutton, badge, bullet, calendar, presence, skeleton, slider, staticradio, statictoggle, stepperitem, textarea **(12)** |
| `radius.12` | `0.75rem` (12px) | P1 | statictoggle **(1)** |
| `radius.14` | `0.875rem` (14px) | P1 | calendar **(1)** |
| `radius.50` | `3.125rem` (50px) | P1 | listitem **(1)** |
| `radius.100` | `6.25rem` (100px) | P1 | badge, button, datepicker, timepicker **(4)** |

---

## Spacing

| Core token | Value | P0 | Used components (count) |
|---|---|:---:|---|
| `spacing.0` | `0` | ✓ | *(audit — use for collapsed gaps)* |
| `spacing.2` | `0.125rem` (2px) | ✓ | accordion, badge, calendar, statictoggle, tab **(5)** |
| `spacing.4` | `0.25rem` (4px) | ✓ | accordionbutton, alertchip, button, calendar, card, checkbox, datepicker, dialog, formfieldgroup, input, inputchip, linkbutton, listbox, progressbar, searchfield, searchpopover, sidenavigation, staticchip, statictoggle, stepperitem, textarea, timepicker, toast, toggle **(24)** |
| `spacing.6` | `0.375rem` (6px) | ✓ | button, input, select **(3)** |
| `spacing.8` | `0.5rem` (8px) | ✓ | accordionbutton, banner, button, calendar, card, combobox, datepicker, dialog, formfieldwrapper, listheader, navmenuitem, progressbar, radio, searchfield, select, sidenavigation, slider, statusmessage, stepper, stepperitem, tab, tablist, timepicker, verticaltablist **(24)** |
| `spacing.12` | `0.75rem` (12px) | ✓ | badge, calendar, card, formfieldgroup, listitem, option, popover, sidenavigation, slider, toast, toggle **(11)** |
| `spacing.14` | `0.875rem` (14px) | P1 | navmenuitem, stepper **(2)** |
| `spacing.16` | `1rem` (16px) | ✓ | accordionbutton, appheader, card, dialog, navmenuitem, statictoggle, toast **(7)** |
| `spacing.20` | `1.25rem` (20px) | P1 | buttonsimple **(1)** |
| `spacing.24` | `1.5rem` (24px) | ✓ | accordionbutton, accordiongroup, buttonsimple, card, statictoggle **(5)** |
| `spacing.28` | `1.75rem` (28px) | P1 | buttonsimple, tab **(2)** |
| `spacing.32` | `2rem` (32px) | ✓ | announcementdialog, buttonsimple, combobox, datepicker, input, select, slider, tab, timepicker, toggletip **(10)** |
| `spacing.40` | `2.5rem` (40px) | P1 | buttonsimple **(1)** |
| `spacing.64` | `4rem` (64px) | P1 | appheader, buttonsimple **(2)** |
| `spacing.240` | `15rem` (240px) | P1 | timepicker **(1)** |

---

## Border width

| Core token | Value | P0 | Used components (count) |
|---|---|:---:|---|
| `border.width.1` | `1px` | ✓ | alertchip, banner, buttongroup, buttonlink, divider, inputchip, progressbar, staticchip, statictoggle, stepperconnector **(10)** |
| `border.width.2` | `2px` | ✓ | filterchip (selected) **(1)** |

Stroke **color** stays on existing `color.theme.outline.*`.

---

## Quick reference — highest reuse

| Token | Value | Components |
|---|---|---|
| `spacing.8` | 8px | 24 |
| `spacing.4` | 4px | 24 |
| `radius.8` | 8px | 22 |
| `radius.4` | 4px | 12 |
| `radius.full` | 50% | 12 |
| `spacing.12` | 12px | 11 |
| `spacing.32` | 32px | 10 |
| `radius.20` | 20px | 5 |
| `border.width.1` | 1px | 7 |
