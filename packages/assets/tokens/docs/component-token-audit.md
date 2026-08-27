# Component hard-coded value audit

Source: [`packages/components/src/components`](https://github.com/momentum-design/momentum-design/tree/main/packages/components/src/components) (`*.styles.ts`, `main` branch).
Semantic colors via `var(--mds-color-theme-*)` excluded.

## Summary

- **96** components scanned
- **73** with candidates
- **23** clean
- **488** candidate rows

- Color: 7
- Spacing: 179
- Sizing: 81
- Typography: 6
- Shape: 81
- Elevation: 0
- Other: 134

### Clean components

`animation`, `brandvisual`, `cardbutton`, `cardcheckbox`, `cardradio`, `coachmark`, `controltypeprovider`, `focustrap`, `iconprovider`, `illustration`, `illustrationprovider`, `menubar`, `menuitemcheckbox`, `menuitemradio`, `password`, `radiogroup`, `responsivesettingsprovider`, `screenreaderannouncer`, `selectlistbox`, `spatialnavigationprovider`, `text`, `themeprovider`, `typewriter`

## Color

| Component | Property | Hard-coded value | Token coverage |
|-----------|----------|------------------|----------------|
| staticcheckbox | `--mdc-staticcheckbox-border-color` | `GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticcheckbox | `--mdc-staticcheckbox-icon-color` | `HighlightText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticcheckbox | `--mdc-staticcheckbox-icon-color` | `GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticradio | `--mdc-staticradio-inner-circle-background-color` | `GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticradio | `--mdc-staticradio-outer-circle-background-color` | `ButtonFace` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticradio | `--mdc-staticradio-outer-circle-background-color` | `GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticradio | `--mdc-staticradio-outer-circle-border-color` | `Highlight` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |

## Spacing

| Component | Property | Hard-coded value | Token coverage |
|-----------|----------|------------------|----------------|
| accordion | `margin` | `0.125rem` | No — **needs new token** |
| accordionbutton | `gap` | `0.5rem` | No — **needs new token** |
| accordionbutton | `padding` | `1rem` | No — **needs new token** |
| accordionbutton | `padding` | `1.5rem` | No — **needs new token** |
| accordionbutton | `padding` | `0.25rem` | No — **needs new token** |
| accordiongroup | `row-gap` | `1.5rem` | No — **needs new token** |
| alertchip | `gap` | `0.25rem` | No — **needs new token** |
| alertchip | `padding` | `0 0.5rem` | No — **needs new token** |
| announcementdialog | `padding-top` | `2rem !important` | No — **needs new token** |
| appheader | `--mdc-appheader-height` | `4rem` | No — **needs new token** |
| appheader | `padding` | `1rem` | No — **needs new token** |
| avatar | `bottom` | `-0.25rem` | No — **needs new token** |
| avatar | `bottom` | `-0.09375rem` | No — **needs new token** |
| avatar | `bottom` | `-0.03125rem` | No — **needs new token** |
| avatar | `bottom` | `-0.15625rem` | No — **needs new token** |
| avatar | `bottom` | `-0.1875rem` | No — **needs new token** |
| avatar | `right` | `-0.21875rem` | No — **needs new token** |
| avatar | `right` | `-0.09375rem` | No — **needs new token** |
| avatar | `right` | `-0.03125rem` | No — **needs new token** |
| avatar | `right` | `-0.15625rem` | No — **needs new token** |
| avatar | `right` | `-0.1875rem` | No — **needs new token** |
| badge | `--mdc-badge-dot-height` | `0.75rem` | No — **needs new token** |
| badge | `padding` | `0 0.25rem` | No — **needs new token** |
| badge | `padding` | `2px` | No — **needs new token** |
| banner | `--mdc-banner-gap` | `0.5rem` | No — **needs new token** |
| button | `gap` | `0.5rem` | No — **needs new token** |
| button | `gap` | `0.375rem` | No — **needs new token** |
| button | `gap` | `0.25rem` | No — **needs new token** |
| button | `padding` | `0 1rem` | No — **needs new token** |
| button | `padding` | `0 0.75rem` | No — **needs new token** |
| button | `padding` | `0 0.625rem` | No — **needs new token** |
| button | `padding` | `0.0625rem` | No — **needs new token** |
| buttongroup | `gap` | `1px` | No — **needs new token** |
| buttonlink | `padding` | `0 0.625rem` | No — **needs new token** |
| buttonlink | `padding` | `0 0.75rem` | No — **needs new token** |
| buttonlink | `padding` | `0 1rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `7.75rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `5.5rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `4.5rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `4rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `3.25rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `2.5rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `2rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `1.75rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `1.5rem` | No — **needs new token** |
| buttonsimple | `--mdc-button-height` | `1.25rem` | No — **needs new token** |
| calendar | `gap` | `0.25rem` | No — **needs new token** |
| calendar | `margin-bottom` | `0.5rem` | No — **needs new token** |
| calendar | `margin-top` | `0.5rem` | No — **needs new token** |
| calendar | `padding` | `0.75rem` | No — **needs new token** |
| calendar | `padding` | `0.25rem 0` | No — **needs new token** |
| calendar | `row-gap` | `0.125rem` | No — **needs new token** |
| card | `gap` | `0.5rem` | No — **needs new token** |
| card | `gap` | `1rem` | No — **needs new token** |
| card | `margin-bottom` | `0.5rem` | No — **needs new token** |
| card | `margin-top` | `0.25rem` | No — **needs new token** |
| card | `margin-top` | `0.75rem` | No — **needs new token** |
| card | `margin-top` | `1rem` | No — **needs new token** |
| card | `padding` | `1.5rem` | No — **needs new token** |
| card | `padding-bottom` | `0.5rem` | No — **needs new token** |
| checkbox | `gap` | `0.25rem` | No — **needs new token** |
| combobox | `--mdc-combobox-height` | `2rem` | No — **needs new token** |
| combobox | `padding` | `0.5rem` | No — **needs new token** |
| combobox | `row-gap` | `0.5rem` | No — **needs new token** |
| datepicker | `--mdc-datepicker-height` | `2rem` | No — **needs new token** |
| datepicker | `gap` | `0.25rem` | No — **needs new token** |
| datepicker | `padding` | `0.34375rem 0.375rem 0.34375rem 0.75rem` | No — **needs new token** |
| datepicker | `padding` | `0 0.0625rem` | No — **needs new token** |
| datepicker | `row-gap` | `0.5rem` | No — **needs new token** |
| dialog | `bottom` | `50%` | No — **needs new token** |
| dialog | `gap` | `0.5rem` | No — **needs new token** |
| dialog | `gap` | `0.25rem` | No — **needs new token** |
| dialog | `margin-top` | `1rem` | No — **needs new token** |
| dialog | `padding-top` | `1rem` | No — **needs new token** |
| dialog | `right` | `50%` | No — **needs new token** |
| formfieldgroup | `gap` | `0.75rem` | No — **needs new token** |
| formfieldgroup | `gap` | `0.25rem` | No — **needs new token** |
| formfieldwrapper | `--mdc-statusmessage-gap` | `0.5rem` | No — **needs new token** |
| formfieldwrapper | `gap` | `0.5rem` | No — **needs new token** |
| input | `--mdc-input-height` | `2rem` | No — **needs new token** |
| input | `gap` | `0.375rem` | No — **needs new token** |
| input | `gap` | `0.25rem` | No — **needs new token** |
| input | `padding` | `0.34375rem 0.375rem 0.34375rem 0.75rem` | No — **needs new token** |
| inputchip | `gap` | `0.25rem` | No — **needs new token** |
| inputchip | `padding` | `0 0.25rem 0 0.5rem` | No — **needs new token** |
| linkbutton | `gap` | `0.25rem` | No — **needs new token** |
| list | `gap` | `0rem` | No — **needs new token** |
| listbox | `padding` | `0.25rem` | No — **needs new token** |
| listheader | `--mdc-listheader-gap` | `0.5rem` | No — **needs new token** |
| listitem | `--mdc-listitem-column-gap` | `0.75rem` | No — **needs new token** |
| menupopover | `padding` | `0.75rem 0.5rem` | No — **needs new token** |
| menusection | `--mdc-menusection-gap` | `0rem` | No — **needs new token** |
| navmenuitem | `--mdc-badge-dot-height` | `1rem` | No — **needs new token** |
| navmenuitem | `gap` | `0.5rem` | No — **needs new token** |
| navmenuitem | `left` | `-0.375rem` | No — **needs new token** |
| navmenuitem | `padding` | `0.5rem` | No — **needs new token** |
| navmenuitem | `padding` | `1rem` | No — **needs new token** |
| navmenuitem | `right` | `-0.375rem` | No — **needs new token** |
| navmenuitem | `top` | `-0.375rem` | No — **needs new token** |
| navmenuitem | `top` | `0.875rem` | No — **needs new token** |
| optgroup | `padding` | `0.5rem 0.75rem` | No — **needs new token** |
| option | `--mdc-listitem-column-gap` | `0.75rem` | No — **needs new token** |
| popover | `left` | `0.75rem` | No — **needs new token** |
| popover | `padding` | `0.75rem` | No — **needs new token** |
| popover | `right` | `0.75rem` | No — **needs new token** |
| popover | `top` | `0.75rem` | No — **needs new token** |
| progressbar | `--mdc-progressbar-height` | `0.25rem` | No — **needs new token** |
| progressbar | `gap` | `0.5rem` | No — **needs new token** |
| progressbar | `gap` | `0.25rem` | No — **needs new token** |
| radio | `gap` | `0.5rem` | No — **needs new token** |
| searchfield | `gap` | `0.5rem` | No — **needs new token** |
| searchfield | `gap` | `0.25rem` | No — **needs new token** |
| searchfield | `margin-left` | `0.25rem` | No — **needs new token** |
| searchpopover | `gap` | `0.25rem` | No — **needs new token** |
| searchpopover | `padding` | `0.75rem 0.5rem` | No — **needs new token** |
| select | `--mdc-select-height` | `2rem` | No — **needs new token** |
| select | `gap` | `0.375rem` | No — **needs new token** |
| select | `padding` | `5.5px 6px 5.5px 12px` | No — **needs new token** |
| select | `padding` | `0.5rem` | No — **needs new token** |
| select | `padding` | `0.75rem 0.5rem` | No — **needs new token** |
| select | `row-gap` | `0.5rem` | No — **needs new token** |
| sidenavigation | `--mdc-menusection-gap` | `0.25rem` | No — **needs new token** |
| sidenavigation | `gap` | `0.5rem` | No — **needs new token** |
| sidenavigation | `margin-bottom` | `0.25rem` | No — **needs new token** |
| sidenavigation | `margin-bottom` | `0.75rem` | No — **needs new token** |
| skeleton | `--mdc-skeleton-height` | `100%` | No — **needs new token** |
| slider | `--mdc-slider-track-height` | `2rem` | No — **needs new token** |
| slider | `bottom` | `120%` | No — **needs new token** |
| slider | `bottom` | `7%` | No — **needs new token** |
| slider | `gap` | `0.75rem` | No — **needs new token** |
| slider | `margin-bottom` | `0.5rem` | No — **needs new token** |
| slider | `padding` | `0.5rem` | No — **needs new token** |
| slider | `top` | `50%` | No — **needs new token** |
| staticcheckbox | `margin` | `0.125rem 0` | No — **needs new token** |
| staticchip | `gap` | `0.25rem` | No — **needs new token** |
| staticchip | `padding` | `0 0.5rem` | No — **needs new token** |
| staticradio | `left` | `50%` | No — **needs new token** |
| staticradio | `margin` | `0.125rem 0` | No — **needs new token** |
| staticradio | `top` | `50%` | No — **needs new token** |
| statictoggle | `--mdc-statictoggle-height` | `1.5rem` | No — **needs new token** |
| statictoggle | `--mdc-statictoggle-height` | `1rem` | No — **needs new token** |
| statictoggle | `padding` | `calc(0.125rem - 1px)` | No — **needs new token** |
| statictoggle | `padding` | `0.25rem` | No — **needs new token** |
| statictoggle | `padding` | `0.125rem` | No — **needs new token** |
| statusmessage | `--mdc-statusmessage-gap` | `0.5rem` | No — **needs new token** |
| stepper | `gap` | `0.5rem` | No — **needs new token** |
| stepper | `margin` | `0 -3rem` | No — **needs new token** |
| stepper | `padding-left` | `0.875rem` | No — **needs new token** |
| stepper | `padding-top` | `0.9375rem` | No — **needs new token** |
| stepperitem | `gap` | `0.5rem` | No — **needs new token** |
| stepperitem | `gap` | `0.25rem` | No — **needs new token** |
| stepperitem | `padding` | `0.25rem 0.5rem` | No — **needs new token** |
| tab | `--mdc-tab-content-gap` | `0.5rem` | No — **needs new token** |
| tab | `--mdc-tab-height` | `2rem` | No — **needs new token** |
| tab | `--mdc-tab-height` | `1.75rem` | No — **needs new token** |
| tab | `--mdc-tab-line-active-indicator-height` | `0.125rem` | No — **needs new token** |
| tablist | `--mdc-tablist-gap` | `0.5rem` | No — **needs new token** |
| textarea | `bottom` | `0.25rem` | No — **needs new token** |
| textarea | `padding` | `0.375rem 0.25rem 0.25rem 0.75rem` | No — **needs new token** |
| textarea | `padding` | `0.375rem 0.75rem 0.25rem 0.25rem` | No — **needs new token** |
| timepicker | `--mdc-timepicker-height` | `2rem` | No — **needs new token** |
| timepicker | `--mdc-timepicker-listbox-height` | `15rem` | No — **needs new token** |
| timepicker | `gap` | `0.25rem` | No — **needs new token** |
| timepicker | `margin` | `0 0 0 0.25rem` | No — **needs new token** |
| timepicker | `padding` | `0.34375rem 0.375rem 0.34375rem 0.75rem` | No — **needs new token** |
| timepicker | `padding` | `0 0.0625rem` | No — **needs new token** |
| timepicker | `padding` | `0.75rem 0.5rem` | No — **needs new token** |
| timepicker | `row-gap` | `0.5rem` | No — **needs new token** |
| toast | `gap` | `0.75rem` | No — **needs new token** |
| toast | `gap` | `0.25rem` | No — **needs new token** |
| toast | `margin-top` | `1rem` | No — **needs new token** |
| toggle | `gap` | `0.75rem` | No — **needs new token** |
| toggle | `gap` | `0.25rem` | No — **needs new token** |
| toggle | `margin` | `0.125rem 0` | No — **needs new token** |
| toggletip | `margin-left` | `2rem` | No — **needs new token** |
| toggletip | `margin-right` | `2rem` | No — **needs new token** |
| verticaltablist | `--mdc-tab-line-active-indicator-height` | `100%` | No — **needs new token** |
| verticaltablist | `gap` | `0.5rem` | No — **needs new token** |
| virtualizedlist | `padding` | `0 0.25rem` | No — **needs new token** |

## Sizing

| Component | Property | Hard-coded value | Token coverage |
|-----------|----------|------------------|----------------|
| alertchip | `height` | `1.5rem` | No — **needs new token** |
| announcementdialog | `max-height` | `100vh` | No — **needs new token** |
| avatar | `height` | `7.75rem` | No — **needs new token** |
| avatar | `height` | `5.5rem` | No — **needs new token** |
| avatar | `height` | `4.5rem` | No — **needs new token** |
| avatar | `height` | `4rem` | No — **needs new token** |
| avatar | `height` | `3rem` | No — **needs new token** |
| avatar | `height` | `2rem` | No — **needs new token** |
| avatar | `height` | `1.5rem` | No — **needs new token** |
| avatar | `width` | `7.75rem` | No — **needs new token** |
| avatar | `width` | `5.5rem` | No — **needs new token** |
| avatar | `width` | `4.5rem` | No — **needs new token** |
| avatar | `width` | `4rem` | No — **needs new token** |
| avatar | `width` | `3rem` | No — **needs new token** |
| avatar | `width` | `2rem` | No — **needs new token** |
| avatar | `width` | `1.5rem` | No — **needs new token** |
| avatar | `width` | `1rem` | No — **needs new token** |
| badge | `min-width` | `1rem` | No — **needs new token** |
| buttongroup | `height` | `1.5rem` | No — **needs new token** |
| buttongroup | `width` | `1.5rem` | No — **needs new token** |
| buttongroup | `width` | `1.75rem` | No — **needs new token** |
| buttongroup | `width` | `2rem` | No — **needs new token** |
| buttongroup | `width` | `2.5rem` | No — **needs new token** |
| calendar | `height` | `1.75rem` | No — **needs new token** |
| calendar | `width` | `17.5rem` | No — **needs new token** |
| calendar | `width` | `1.75rem` | No — **needs new token** |
| card | `height` | `12.5rem` | No — **needs new token** |
| card | `min-width` | `40rem` | No — **needs new token** |
| card | `min-width` | `20rem` | No — **needs new token** |
| card | `width` | `10rem` | No — **needs new token** |
| chip | `height` | `1.5rem` | No — **needs new token** |
| combobox | `width` | `calc(100% - 2rem)` | No — **needs new token** |
| datepicker | `min-width` | `1.5rem` | No — **needs new token** |
| datepicker | `min-width` | `2.5rem` | No — **needs new token** |
| datepicker | `width` | `1.5rem` | No — **needs new token** |
| datepicker | `width` | `2.5rem` | No — **needs new token** |
| dialog | `max-height` | `100vh` | No — **needs new token** |
| dialog | `max-height` | `calc(100vh - 2rem)` | No — **needs new token** |
| dialog | `width` | `calc(100% - 2rem)` | No — **needs new token** |
| divider | `height` | `2.5rem` | No — **needs new token** |
| divider | `height` | `1.25rem` | No — **needs new token** |
| divider | `width` | `1.25rem` | No — **needs new token** |
| divider | `width` | `2.5rem` | No — **needs new token** |
| input | `min-width` | `3.25rem` | No — **needs new token** |
| inputchip | `height` | `1.5rem` | No — **needs new token** |
| inputchip | `height` | `1.25rem` | No — **needs new token** |
| inputchip | `width` | `1.25rem` | No — **needs new token** |
| navmenuitem | `height` | `2.5rem` | No — **needs new token** |
| navmenuitem | `height` | `1rem` | No — **needs new token** |
| navmenuitem | `width` | `0.25rem` | No — **needs new token** |
| optgroup | `height` | `2.25rem` | No — **needs new token** |
| popover | `height` | `1rem` | No — **needs new token** |
| popover | `width` | `1rem` | No — **needs new token** |
| presence | `height` | `1.125rem` | No — **needs new token** |
| presence | `height` | `1.5625rem` | No — **needs new token** |
| presence | `height` | `1.75rem` | No — **needs new token** |
| presence | `height` | `2.125rem` | No — **needs new token** |
| presence | `height` | `2.75rem` | No — **needs new token** |
| presence | `width` | `1.125rem` | No — **needs new token** |
| presence | `width` | `1.5625rem` | No — **needs new token** |
| presence | `width` | `1.75rem` | No — **needs new token** |
| presence | `width` | `2.125rem` | No — **needs new token** |
| presence | `width` | `2.75rem` | No — **needs new token** |
| searchfield | `min-width` | `4rem` | No — **needs new token** |
| select | `width` | `calc(100% - 2rem)` | No — **needs new token** |
| sidenavigation | `height` | `1.5rem` | No — **needs new token** |
| sidenavigation | `width` | `1.5rem` | No — **needs new token** |
| staticchip | `height` | `1.5rem` | No — **needs new token** |
| staticchip | `height` | `1.25rem` | No — **needs new token** |
| staticchip | `width` | `1.25rem` | No — **needs new token** |
| staticradio | `height` | `1rem` | No — **needs new token** |
| staticradio | `width` | `1rem` | No — **needs new token** |
| stepperconnector | `height` | `0.0625rem` | No — **needs new token** |
| stepperconnector | `width` | `0.0625rem` | No — **needs new token** |
| stepperitem | `width` | `1.75rem` | No — **needs new token** |
| stepperitem | `width` | `8.75rem` | No — **needs new token** |
| textarea | `min-height` | `6.25rem` | No — **needs new token** |
| timepicker | `min-width` | `1.25rem` | No — **needs new token** |
| timepicker | `min-width` | `1.5rem` | No — **needs new token** |
| timepicker | `width` | `1.25rem` | No — **needs new token** |
| timepicker | `width` | `1.5rem` | No — **needs new token** |

## Typography

| Component | Property | Hard-coded value | Token coverage |
|-----------|----------|------------------|----------------|
| calendar | `font-size` | `0.75rem` | Partial — use existing `font.apps.*` composite → **needs new token** or refactor to `mdc-text` |
| calendar | `font-size` | `0.875rem` | Partial — use existing `font.apps.*` composite → **needs new token** or refactor to `mdc-text` |
| calendar | `line-height` | `1rem` | Partial — use existing `font.apps.*` composite → **needs new token** or refactor to `mdc-text` |
| calendar | `line-height` | `0.75rem` | Partial — use existing `font.apps.*` composite → **needs new token** or refactor to `mdc-text` |
| timepicker | `font-size` | `0.875rem` | Partial — use existing `font.apps.*` composite → **needs new token** or refactor to `mdc-text` |
| timepicker | `line-height` | `1.25rem` | Partial — use existing `font.apps.*` composite → **needs new token** or refactor to `mdc-text` |

## Shape

| Component | Property | Hard-coded value | Token coverage |
|-----------|----------|------------------|----------------|
| accordionbutton | `border-radius` | `0.5rem 0.5rem 0 0` | No — **needs new token** |
| accordionbutton | `border-radius` | `0.5rem` | No — **needs new token** |
| accordiongroup | `border-radius` | `0.5rem` | No — **needs new token** |
| accordiongroup | `border-radius` | `0.5rem 0.5rem 0 0` | No — **needs new token** |
| accordiongroup | `border-radius` | `0 0 0.5rem 0.5rem` | No — **needs new token** |
| alertchip | `border-radius` | `0.25rem` | No — **needs new token** |
| avatar | `border-radius` | `100vh` | No — **needs new token** |
| avatarbutton | `border-radius` | `0.25rem` | No — **needs new token** |
| avatarbutton | `border-radius` | `100vh` | No — **needs new token** |
| badge | `border-radius` | `6.25rem` | No — **needs new token** |
| badge | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| banner | `border-radius` | `0.5rem` | No — **needs new token** |
| bullet | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| button | `border-radius` | `1.25rem` | No — **needs new token** |
| button | `border-radius` | `6.25rem` | No — **needs new token** |
| buttongroup | `--mdc-buttongroup-border-radius` | `1.25rem` | No — **needs new token** |
| calendar | `border-end-end-radius` | `0.875rem` | No — **needs new token** |
| calendar | `border-end-start-radius` | `0.875rem` | No — **needs new token** |
| calendar | `border-radius` | `0.5rem` | No — **needs new token** |
| calendar | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| calendar | `border-start-end-radius` | `0.875rem` | No — **needs new token** |
| calendar | `border-start-start-radius` | `0.875rem` | No — **needs new token** |
| card | `border-bottom-left-radius` | `0.5rem` | No — **needs new token** |
| card | `border-radius` | `0.5rem` | No — **needs new token** |
| card | `border-top-left-radius` | `0.5rem` | No — **needs new token** |
| card | `border-top-right-radius` | `0.5rem` | No — **needs new token** |
| checkbox | `border-radius` | `0.125rem` | No — **needs new token** |
| combobox | `border-radius` | `0.5rem` | No — **needs new token** |
| combobox | `border-radius` | `0 0.5rem 0.5rem 0` | No — **needs new token** |
| combobox | `border-radius` | `0.5rem 0 0 0.5rem` | No — **needs new token** |
| datepicker | `border-radius` | `0.5rem` | No — **needs new token** |
| datepicker | `border-radius` | `0.125rem` | No — **needs new token** |
| datepicker | `border-radius` | `100px` | No — **needs new token** |
| dialog | `border-radius` | `0.5rem` | No — **needs new token** |
| divider | `--mdc-divider-grabber-button-border-radius` | `0.5rem` | No — **needs new token** |
| icon | `--mdc-icon-border-radius` | `0.25rem` | No — **needs new token** |
| input | `border-radius` | `0.5rem` | No — **needs new token** |
| inputchip | `border-radius` | `0.25rem` | No — **needs new token** |
| linksimple | `--mdc-link-border-radius` | `0.25rem` | No — **needs new token** |
| listitem | `border-radius` | `0.5rem` | No — **needs new token** |
| listitem | `border-radius` | `3.125rem` | No — **needs new token** |
| navmenuitem | `border-radius` | `0.5rem` | No — **needs new token** |
| navmenuitem | `border-radius` | `1.25rem` | No — **needs new token** |
| navmenuitem | `border-radius` | `0 0.25rem 0.25rem 0` | No — **needs new token** |
| navmenuitem | `border-radius` | `0.25rem 0 0 0.25rem` | No — **needs new token** |
| popover | `--mdc-popover-arrow-border-radius` | `0.1875rem` | No — **needs new token** |
| popover | `border-bottom-left-radius` | `100%` | No — **needs new token** |
| popover | `border-bottom-right-radius` | `100%` | No — **needs new token** |
| popover | `border-radius` | `0.5rem` | No — **needs new token** |
| popover | `border-top-left-radius` | `100%` | No — **needs new token** |
| popover | `border-top-right-radius` | `100%` | No — **needs new token** |
| presence | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| select | `border-radius` | `0.5rem` | No — **needs new token** |
| sidenavigation | `border-radius` | `1.25rem` | No — **needs new token** |
| skeleton | `border-radius` | `0.25rem` | No — **needs new token** |
| skeleton | `border-radius` | `0.5rem` | No — **needs new token** |
| skeleton | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| skeleton | `border-radius` | `1.25rem` | No — **needs new token** |
| slider | `border-radius` | `0.25rem` | No — **needs new token** |
| slider | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| slider | `border-radius` | `0.5rem` | No — **needs new token** |
| staticcheckbox | `border-radius` | `0.125rem` | No — **needs new token** |
| staticchip | `border-radius` | `0.25rem` | No — **needs new token** |
| staticradio | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| statictoggle | `--mdc-statictoggle-border-radius` | `0.75rem` | No — **needs new token** |
| statictoggle | `--mdc-statictoggle-border-radius` | `0.5rem` | No — **needs new token** |
| statictoggle | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| stepperitem | `border-radius` | `0.25rem` | No — **needs new token** |
| stepperitem | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| stepperitem | `border-radius` | `0.5rem` | No — **needs new token** |
| tab | `--mdc-tab-border-radius` | `0.5rem` | No — **needs new token** |
| tab | `--mdc-tab-line-border-top-left-radius` | `0.25rem` | No — **needs new token** |
| tab | `--mdc-tab-line-border-top-right-radius` | `0.25rem` | No — **needs new token** |
| textarea | `border-radius` | `0.5rem` | No — **needs new token** |
| textarea | `border-radius` | `50%` | No — **needs new token** (`radius.full`) |
| timepicker | `border-radius` | `0.5rem` | No — **needs new token** |
| timepicker | `border-radius` | `0.125rem` | No — **needs new token** |
| timepicker | `border-radius` | `100px` | No — **needs new token** |
| toast | `border-radius` | `0.5rem` | No — **needs new token** |
| verticaltablist | `border-bottom-right-radius` | `0.25rem` | No — **needs new token** |
| verticaltablist | `border-top-right-radius` | `0.25rem` | No — **needs new token** |

## Other

| Component | Property | Hard-coded value | Token coverage |
|-----------|----------|------------------|----------------|
| alertchip | `border` | `1px solid` | No — **needs new token** (`border.width.1`) |
| announcementdialog | `background-size` | `50% 100%` | No — **needs new token** |
| announcementdialog | `grid-template-columns` | `repeat(auto-fit, minmax(0px, 1fr))` | No — **needs new token** |
| announcementdialog | `margin-inline-end` | `2rem` | No — **needs new token** |
| announcementdialog | `margin-inline-end` | `1rem` | No — **needs new token** |
| announcementdialog | `margin-inline-start` | `1rem` | No — **needs new token** |
| announcementdialog | `margin-inline-start` | `2rem` | No — **needs new token** |
| badge | `--mdc-badge-dot-width` | `0.75rem` | No — **needs new token** |
| badge | `}` | `host::part(badge-dot) {
        background-color: ButtonText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| banner | `--mdc-banner-border-width` | `1px` | No — **needs new token** (`border.width.1`) |
| bullet | `--mdc-bullet-size` | `0.25rem` | No — **needs new token** |
| bullet | `--mdc-bullet-size` | `0.5rem` | No — **needs new token** |
| bullet | `--mdc-bullet-size` | `1rem` | No — **needs new token** |
| button | `--mdc-button-postfix-icon-size` | `1rem` | No — **needs new token** |
| button | `--mdc-button-postfix-icon-size` | `2rem` | No — **needs new token** |
| button | `--mdc-button-postfix-icon-size` | `1.75rem` | No — **needs new token** |
| button | `--mdc-button-postfix-icon-size` | `1.25rem` | No — **needs new token** |
| button | `--mdc-button-prefix-icon-size` | `1rem` | No — **needs new token** |
| button | `--mdc-button-prefix-icon-size` | `2rem` | No — **needs new token** |
| button | `--mdc-button-prefix-icon-size` | `1.75rem` | No — **needs new token** |
| button | `--mdc-button-prefix-icon-size` | `1.25rem` | No — **needs new token** |
| buttongroup | `--mdc-buttongroup-border-width` | `1px` | No — **needs new token** (`border.width.1`) |
| buttongroup | `inset-block-end` | `0%` | No — **needs new token** |
| buttongroup | `inset-inline-start` | `100%` | No — **needs new token** |
| buttonlink | `border` | `1px solid transparent` | No — **needs new token** (`border.width.1`) |
| calendar | `grid-auto-rows` | `1.75rem` | No — **needs new token** |
| calendar | `inset-inline-end` | `calc(50% - 0.875rem)` | No — **needs new token** |
| calendar | `inset-inline-start` | `calc(50% - 0.875rem)` | No — **needs new token** |
| calendar | `padding-block` | `0.5rem` | No — **needs new token** |
| calendar | `padding-inline-start` | `0.75rem` | No — **needs new token** |
| card | `--mdc-card-width` | `20rem` | No — **needs new token** |
| card | `--mdc-card-width` | `40rem` | No — **needs new token** |
| checkbox | `opacity` | `0.1%` | No — **needs new token** |
| combobox | `--mdc-combobox-width` | `100%` | No — **needs new token** |
| combobox | `opacity` | `0.1%` | No — **needs new token** |
| datepicker | `opacity` | `0.1%` | No — **needs new token** |
| dialog | `--mdc-dialog-padding` | `1.5rem` | No — **needs new token** |
| dialog | `--mdc-dialog-width` | `27rem` | No — **needs new token** |
| dialog | `--mdc-dialog-width` | `41rem` | No — **needs new token** |
| dialog | `--mdc-dialog-width` | `62rem` | No — **needs new token** |
| dialog | `--mdc-dialog-width` | `90%` | No — **needs new token** |
| dialog | `--mdc-dialog-width` | `100%` | No — **needs new token** |
| dialog | `transform` | `translateX(50%) translateY(50%)` | No — **needs new token** |
| divider | `--mdc-divider-text-margin` | `1.5rem` | No — **needs new token** |
| divider | `--mdc-divider-width` | `0.0625rem` | No — **needs new token** |
| filterchip | `border` | `2px solid` | No — **needs new token** (`border.width.2`) |
| inputchip | `border` | `1px solid` | No — **needs new token** (`border.width.1`) |
| link | `margin-inline-end` | `0.25rem` | No — **needs new token** |
| link | `vertical-align` | `-0.125rem` | No — **needs new token** |
| link | `vertical-align` | `-0.1rem` | No — **needs new token** |
| list | `scroll-padding-bottom` | `0.25rem` | No — **needs new token** |
| list | `scroll-padding-left` | `0.25rem` | No — **needs new token** |
| list | `scroll-padding-right` | `0.25rem` | No — **needs new token** |
| list | `scroll-padding-top` | `0.25rem` | No — **needs new token** |
| listheader | `--mdc-listheader-padding` | `0.5rem 0.75rem` | No — **needs new token** |
| listitem | `--mdc-listitem-padding-left-right` | `0.75rem` | No — **needs new token** |
| listitem | `--mdc-listitem-padding-top-bottom` | `0.5rem` | No — **needs new token** |
| listitem | `--mdc-listitem-width` | `100%` | No — **needs new token** |
| marker | `--mdc-marker-width` | `0.25rem` | No — **needs new token** |
| menuitem | `--mdc-icon-size` | `1rem` | No — **needs new token** |
| menupopover | `margin-block` | `0.25rem` | No — **needs new token** |
| menupopover | `scroll-padding-block` | `0.25rem` | No — **needs new token** |
| menusection | `--mdc-menusection-divider-margin-block` | `0.25rem` | No — **needs new token** |
| menusection | `--mdc-menusection-divider-width` | `100%` | No — **needs new token** |
| menusection | `--mdc-menusection-header-padding` | `0.5rem 1.75rem` | No — **needs new token** |
| navmenuitem | `--mdc-badge-dot-width` | `1rem` | No — **needs new token** |
| navmenuitem | `--mdc-icon-size` | `0.75rem` | No — **needs new token** |
| navmenuitem | `inset-inline-end` | `-0.125rem` | No — **needs new token** |
| option | `--mdc-option-icon-width` | `1rem` | No — **needs new token** |
| popover | `transform` | `translateX(-50%)` | No — **needs new token** |
| progressbar | `--mdc-progressbar-border` | `0.5px solid transparent` | No — **needs new token** |
| progressspinner | `--mdc-spinner-size` | `3rem` | No — **needs new token** |
| searchpopover | `--mdc-searchpopover-width` | `100%` | No — **needs new token** |
| select | `--mdc-select-width` | `100%` | No — **needs new token** |
| select | `inset-inline-end` | `0%` | No — **needs new token** |
| select | `opacity` | `0.1%` | No — **needs new token** |
| sidenavigation | `--mdc-menusection-divider-margin-block` | `0.5rem 0.75rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-bottom-padding` | `1rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-collapsed-left-padding` | `1rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-collapsed-right-padding` | `1rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-collapsed-width` | `4.5rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-expanded-left-padding` | `1rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-expanded-right-padding` | `1rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-expanded-width` | `14.5rem` | No — **needs new token** |
| sidenavigation | `--mdc-sidenavigation-top-padding` | `1rem` | No — **needs new token** |
| skeleton | `--mdc-skeleton-width` | `100%` | No — **needs new token** |
| skeleton | `0% {
      background-position` | `200% 0` | No — **needs new token** |
| skeleton | `background-position` | `50% 0` | No — **needs new token** |
| skeleton | `background-size` | `200% 100%` | No — **needs new token** |
| skeleton | `}

    100% {
      background-position` | `-200% 0` | No — **needs new token** |
| slider | `--mdc-slider-input-size` | `0.5rem` | No — **needs new token** |
| slider | `--mdc-slider-thumb-size` | `1.5rem` | No — **needs new token** |
| slider | `--mdc-slider-tick-size` | `0.25rem` | No — **needs new token** |
| slider | `transform` | `translateX(-50%)` | No — **needs new token** |
| spinner | `--mdc-spinner-size` | `100%` | No — **needs new token** |
| spinner | `--mdc-spinner-size` | `6rem` | No — **needs new token** |
| spinner | `--mdc-spinner-size` | `3rem` | No — **needs new token** |
| spinner | `--mdc-spinner-size` | `1.5rem` | No — **needs new token** |
| spinner | `stroke-width` | `8%` | No — **needs new token** |
| staticcheckbox | `--mdc-staticcheckbox-size` | `1rem` | No — **needs new token** |
| staticcheckbox | `}` | `host([readonly]) {
        --mdc-staticcheckbox-border-color: Highlight` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticcheckbox | `}` | `host([disabled]),
      :host([soft-disabled]) {
        --mdc-staticcheckbox-background-color: GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticcheckbox | `}` | `host([disabled][checked]),
      :host([disabled][indeterminate]),
      :host([soft-disabled][checked]),
      :host([soft-disabled][indeterminate]) {
        --mdc-staticcheckbox-border-color: GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticchip | `border` | `1px solid` | No — **needs new token** (`border.width.1`) |
| staticradio | `--mdc-staticradio-inner-circle-size` | `0.375rem` | No — **needs new token** |
| staticradio | `--mdc-staticradio-outer-circle-size` | `1rem` | No — **needs new token** |
| staticradio | `transform` | `translate(-50%, -50%)` | No — **needs new token** |
| staticradio | `}` | `host([readonly]),
      :host([readonly][checked]) {
        --mdc-staticradio-inner-circle-background-color: Highlight` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticradio | `}` | `host([disabled]),
      :host([soft-disabled]) {
        --mdc-staticradio-outer-circle-border-color: GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| staticradio | `}` | `host([disabled][checked]),
      :host([soft-disabled][checked]) {
        --mdc-staticradio-outer-circle-border-color: GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| statictoggle | `--mdc-statictoggle-width` | `3rem` | No — **needs new token** |
| statictoggle | `--mdc-statictoggle-width` | `2rem` | No — **needs new token** |
| statictoggle | `border` | `1px solid GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| statictoggle | `}` | `host([disabled])::part(toggle-icon),
      :host([soft-disabled])::part(toggle-icon) {
        --mdc-statictoggle-icon-color: GrayText` | Partial — HC system keyword → **needs new token** / map to `color.theme.*` HC |
| statusmessage | `--mdc-statusmessage-icon-size` | `1rem` | No — **needs new token** |
| statusmessage | `margin-block-start` | `0.125rem` | No — **needs new token** |
| tab | `--mdc-tab-line-active-indicator-width` | `100%` | No — **needs new token** |
| tab | `--mdc-tab-padding-left` | `0.75rem` | No — **needs new token** |
| tab | `--mdc-tab-padding-right` | `0.75rem` | No — **needs new token** |
| tablist | `--mdc-tablist-arrow-button-margin` | `0.75rem` | No — **needs new token** |
| tablist | `--mdc-tablist-width` | `100%` | No — **needs new token** |
| textarea | `inset-inline-end` | `0.25rem` | No — **needs new token** |
| timepicker | `--mdc-timepicker-listbox-width` | `100%` | No — **needs new token** |
| timepicker | `--mdc-timepicker-option-scroll-margin` | `0.25rem` | No — **needs new token** |
| timepicker | `opacity` | `0.1%` | No — **needs new token** |
| toast | `--mdc-toast-padding` | `1rem` | No — **needs new token** |
| toast | `--mdc-toast-width` | `25rem` | No — **needs new token** |
| toggle | `opacity` | `0.1%` | No — **needs new token** |
| toggletip | `--mdc-toggletip-max-width` | `400px` | No — **needs new token** |
| tooltip | `--mdc-tooltip-max-width` | `400px` | No — **needs new token** |
| tooltip | `--mdc-tooltip-padding` | `0.75rem` | No — **needs new token** |
| verticaltablist | `--mdc-tab-line-active-indicator-width` | `0.125rem` | No — **needs new token** |
| verticaltablist | `--mdc-verticaltablist-width` | `100%` | No — **needs new token** |
| virtualizedlist | `scroll-padding` | `0.25rem 0` | No — **needs new token** |

## By component (index)

| Component | Candidates | Categories |
|-----------|------------|------------|
| accordion | 1 | spacing |
| accordionbutton | 6 | shape, spacing |
| accordiongroup | 4 | shape, spacing |
| alertchip | 5 | other, shape, sizing, spacing |
| animation | 0 | — |
| announcementdialog | 8 | other, sizing, spacing |
| appheader | 2 | spacing |
| avatar | 26 | shape, sizing, spacing |
| avatarbutton | 2 | shape |
| badge | 8 | other, shape, sizing, spacing |
| banner | 3 | other, shape, spacing |
| brandvisual | 0 | — |
| bullet | 4 | other, shape |
| button | 17 | other, shape, spacing |
| buttongroup | 10 | other, shape, sizing, spacing |
| buttonlink | 4 | other, spacing |
| buttonsimple | 10 | spacing |
| calendar | 24 | other, shape, sizing, spacing, typography |
| card | 18 | other, shape, sizing, spacing |
| cardbutton | 0 | — |
| cardcheckbox | 0 | — |
| cardradio | 0 | — |
| checkbox | 3 | other, shape, spacing |
| chip | 1 | sizing |
| coachmark | 0 | — |
| combobox | 9 | other, shape, sizing, spacing |
| controltypeprovider | 0 | — |
| datepicker | 13 | other, shape, sizing, spacing |
| dialog | 17 | other, shape, sizing, spacing |
| divider | 7 | other, shape, sizing |
| filterchip | 1 | other |
| focustrap | 0 | — |
| formfieldgroup | 2 | spacing |
| formfieldwrapper | 2 | spacing |
| icon | 1 | shape |
| iconprovider | 0 | — |
| illustration | 0 | — |
| illustrationprovider | 0 | — |
| input | 6 | shape, sizing, spacing |
| inputchip | 7 | other, shape, sizing, spacing |
| link | 3 | other |
| linkbutton | 1 | spacing |
| linksimple | 1 | shape |
| list | 5 | other, spacing |
| listbox | 1 | spacing |
| listheader | 2 | other, spacing |
| listitem | 6 | other, shape, spacing |
| marker | 1 | other |
| menubar | 0 | — |
| menuitem | 1 | other |
| menuitemcheckbox | 0 | — |
| menuitemradio | 0 | — |
| menupopover | 3 | other, spacing |
| menusection | 4 | other, spacing |
| navmenuitem | 18 | other, shape, sizing, spacing |
| optgroup | 2 | sizing, spacing |
| option | 2 | other, spacing |
| password | 0 | — |
| popover | 13 | other, shape, sizing, spacing |
| presence | 11 | shape, sizing |
| progressbar | 4 | other, spacing |
| progressspinner | 1 | other |
| radio | 1 | spacing |
| radiogroup | 0 | — |
| responsivesettingsprovider | 0 | — |
| screenreaderannouncer | 0 | — |
| searchfield | 4 | sizing, spacing |
| searchpopover | 3 | other, spacing |
| select | 11 | other, shape, sizing, spacing |
| selectlistbox | 0 | — |
| sidenavigation | 16 | other, shape, sizing, spacing |
| skeleton | 10 | other, shape, spacing |
| slider | 14 | other, shape, spacing |
| spatialnavigationprovider | 0 | — |
| spinner | 5 | other |
| staticcheckbox | 9 | color, other, shape, spacing |
| staticchip | 7 | other, shape, sizing, spacing |
| staticradio | 16 | color, other, shape, sizing, spacing |
| statictoggle | 12 | other, shape, spacing |
| statusmessage | 3 | other, spacing |
| stepper | 4 | spacing |
| stepperconnector | 2 | sizing |
| stepperitem | 8 | shape, sizing, spacing |
| tab | 10 | other, shape, spacing |
| tablist | 3 | other, spacing |
| text | 0 | — |
| textarea | 7 | other, shape, sizing, spacing |
| themeprovider | 0 | — |
| timepicker | 20 | other, shape, sizing, spacing, typography |
| toast | 6 | other, shape, spacing |
| toggle | 4 | other, spacing |
| toggletip | 3 | other, spacing |
| tooltip | 2 | other |
| typewriter | 0 | — |
| verticaltablist | 6 | other, shape, spacing |
| virtualizedlist | 2 | other, spacing |