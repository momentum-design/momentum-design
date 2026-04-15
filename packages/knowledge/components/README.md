# Components

Knowledge pages for **`@momentum-design/components`**: one markdown file per component in [`packages/components/src/components`](../../components/src/components).

Each page includes:

- **Development** — CEM summary, imports, links to internal MDX guides, and pointers to Storybook / [momentum.design/en/components](https://momentum.design/en/components) for interactive docs
- **Accessibility** — project Storybook **a11y** / axe configuration and manifest hints (`aria-*`, `role`, etc.) where present
- **Design** — placeholder for product/design guidance

Storybook lives at [momentum.design/storybook-static/](https://momentum.design/storybook-static/index.html); story `title` values slug to doc paths (e.g. `Components/button` → `components-button--docs`).

## Shared docs (whole library)

- [Consumption.mdx](../../components/src/docs/Consumption.mdx) — install, CSS prerequisites, ThemeProvider / IconProvider, webpack/TS, web vs React imports
- [Styling.mdx](../../components/src/docs/Styling.mdx) — `class` / `style`, CSS variables, `::part`, slots
- [Attributes.mdx](../../components/src/docs/Attributes.mdx) — `auto-focus-on-mount`

## Component index

| File | Custom element | Notes |
|------|----------------|--------|
| [accordion.md](./accordion.md) | `mdc-accordion` | |
| [accordionbutton.md](./accordionbutton.md) | `mdc-accordionbutton` | |
| [accordiongroup.md](./accordiongroup.md) | `mdc-accordiongroup` | |
| [alertchip.md](./alertchip.md) | `mdc-alertchip` | |
| [animation.md](./animation.md) | `mdc-animation` | |
| [appheader.md](./appheader.md) | `mdc-appheader` | |
| [avatar.md](./avatar.md) | `mdc-avatar` | |
| [avatarbutton.md](./avatarbutton.md) | `mdc-avatarbutton` | |
| [badge.md](./badge.md) | `mdc-badge` | |
| [brandvisual.md](./brandvisual.md) | `mdc-brandvisual` | |
| [bullet.md](./bullet.md) | `mdc-bullet` | |
| [button.md](./button.md) | `mdc-button` | |
| [buttongroup.md](./buttongroup.md) | `mdc-buttongroup` | |
| [buttonlink.md](./buttonlink.md) | `mdc-buttonlink` | |
| [buttonsimple.md](./buttonsimple.md) | `mdc-buttonsimple` | |
| [card.md](./card.md) | `mdc-card` | |
| [cardbutton.md](./cardbutton.md) | `mdc-cardbutton` | |
| [cardcheckbox.md](./cardcheckbox.md) | `mdc-cardcheckbox` | |
| [cardradio.md](./cardradio.md) | `mdc-cardradio` | |
| [checkbox.md](./checkbox.md) | `mdc-checkbox` | |
| [chip.md](./chip.md) | `mdc-chip` | |
| [coachmark.md](./coachmark.md) | `mdc-coachmark` | |
| [combobox.md](./combobox.md) | `mdc-combobox` | |
| [dialog.md](./dialog.md) | `mdc-dialog` | |
| [divider.md](./divider.md) | `mdc-divider` | |
| [filterchip.md](./filterchip.md) | `mdc-filterchip` | |
| [formfieldgroup.md](./formfieldgroup.md) | `mdc-formfieldgroup` | |
| [formfieldwrapper.md](./formfieldwrapper.md) | `mdc-formfieldwrapper` | Internal / not for direct consumer use (see page) |
| [icon.md](./icon.md) | `mdc-icon` | |
| [iconprovider.md](./iconprovider.md) | `mdc-iconprovider` | |
| [input.md](./input.md) | `mdc-input` | |
| [inputchip.md](./inputchip.md) | `mdc-inputchip` | |
| [link.md](./link.md) | `mdc-link` | |
| [linkbutton.md](./linkbutton.md) | `mdc-linkbutton` | |
| [linksimple.md](./linksimple.md) | `mdc-linksimple` | |
| [list.md](./list.md) | `mdc-list` | |
| [listbox.md](./listbox.md) | `mdc-listbox` | |
| [listheader.md](./listheader.md) | `mdc-listheader` | |
| [listitem.md](./listitem.md) | `mdc-listitem` | |
| [marker.md](./marker.md) | `mdc-marker` | |
| [menubar.md](./menubar.md) | `mdc-menubar` | |
| [menuitem.md](./menuitem.md) | `mdc-menuitem` | |
| [menuitemcheckbox.md](./menuitemcheckbox.md) | `mdc-menuitemcheckbox` | |
| [menuitemradio.md](./menuitemradio.md) | `mdc-menuitemradio` | |
| [menupopover.md](./menupopover.md) | `mdc-menupopover` | |
| [menusection.md](./menusection.md) | `mdc-menusection` | |
| [navmenuitem.md](./navmenuitem.md) | `mdc-navmenuitem` | |
| [optgroup.md](./optgroup.md) | `mdc-optgroup` | |
| [option.md](./option.md) | `mdc-option` | |
| [password.md](./password.md) | `mdc-password` | |
| [popover.md](./popover.md) | `mdc-popover` | |
| [presence.md](./presence.md) | `mdc-presence` | |
| [progressbar.md](./progressbar.md) | `mdc-progressbar` | |
| [progressspinner.md](./progressspinner.md) | `mdc-progressspinner` | |
| [radio.md](./radio.md) | `mdc-radio` | |
| [radiogroup.md](./radiogroup.md) | `mdc-radiogroup` | |
| [screenreaderannouncer.md](./screenreaderannouncer.md) | `mdc-screenreaderannouncer` | |
| [searchfield.md](./searchfield.md) | `mdc-searchfield` | |
| [select.md](./select.md) | `mdc-select` | |
| [selectlistbox.md](./selectlistbox.md) | `mdc-selectlistbox` | |
| [sidenavigation.md](./sidenavigation.md) | `mdc-sidenavigation` | |
| [skeleton.md](./skeleton.md) | `mdc-skeleton` | |
| [slider.md](./slider.md) | `mdc-slider` | |
| [spinner.md](./spinner.md) | `mdc-spinner` | |
| [staticcheckbox.md](./staticcheckbox.md) | `mdc-staticcheckbox` | |
| [staticchip.md](./staticchip.md) | `mdc-staticchip` | |
| [staticradio.md](./staticradio.md) | `mdc-staticradio` | |
| [statictoggle.md](./statictoggle.md) | `mdc-statictoggle` | |
| [stepper.md](./stepper.md) | `mdc-stepper` | |
| [stepperconnector.md](./stepperconnector.md) | `mdc-stepperconnector` | |
| [stepperitem.md](./stepperitem.md) | `mdc-stepperitem` | |
| [tab.md](./tab.md) | `mdc-tab` | |
| [tablist.md](./tablist.md) | `mdc-tablist` | |
| [text.md](./text.md) | `mdc-text` | |
| [textarea.md](./textarea.md) | `mdc-textarea` | |
| [themeprovider.md](./themeprovider.md) | `mdc-themeprovider` | |
| [toast.md](./toast.md) | `mdc-toast` | |
| [toggle.md](./toggle.md) | `mdc-toggle` | |
| [toggletip.md](./toggletip.md) | `mdc-toggletip` | |
| [tooltip.md](./tooltip.md) | `mdc-tooltip` | |
| [typewriter.md](./typewriter.md) | `mdc-typewriter` | |
| [virtualizedlist.md](./virtualizedlist.md) | `mdc-virtualizedlist` | |

CEM in `packages/components/dist/custom-elements.json` may list additional tags (e.g. internal or experimental) that are not mirrored as folders under `src/components`; this index matches **82** implemented component folders.
