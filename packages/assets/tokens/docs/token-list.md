# Dimension token list

**Core tokens only** — bind directly in Figma and JSON. No `component.*` alias layer.

Token name · Value · Priority · Used components

**CSV:** [`token-list.csv`](./token-list.csv) · Source: [`component-token-audit.md`](./component-token-audit.md)

Values from `packages/assets/tokens/src/core/*.json` at 16px base (`0.5rem` = 8px). Component descriptions and the coverage matrix document which core token each property uses.

`—` = no audit match or deferred.

## Spacing

| Token name | Value | Priority | Used components |
|---|---|---|---|
| `spacing.0` | 0 (0px) | P0 | — |
| `spacing.2` | 0.125rem (2px) | P0 | accordion; calendar; statictoggle; tab |
| `spacing.4` | 0.25rem (4px) | P0 | accordionbutton; alertchip; button; calendar; card; checkbox; datepicker; dialog; formfieldgroup; input; inputchip; linkbutton; listbox; progressbar; searchfield; searchpopover; sidenavigation; staticchip; statictoggle; stepperitem; textarea; timepicker; toast; toggle |
| `spacing.6` | 0.375rem (6px) | P0 | button; input; select |
| `spacing.8` | 0.5rem (8px) | P0 | accordionbutton; banner; button; calendar; card; combobox; datepicker; dialog; formfieldwrapper; listheader; navmenuitem; progressbar; radio; searchfield; select; sidenavigation; slider; statusmessage; stepper; stepperitem; tab; tablist; timepicker; verticaltablist |
| `spacing.12` | 0.75rem (12px) | P0 | badge; calendar; card; formfieldgroup; listitem; option; popover; sidenavigation; slider; toast; toggle |
| `spacing.14` | 0.875rem (14px) | P1 | navmenuitem; stepper |
| `spacing.16` | 1rem (16px) | P0 | accordionbutton; appheader; card; dialog; navmenuitem; statictoggle; toast |
| `spacing.20` | 1.25rem (20px) | P1 | buttonsimple |
| `spacing.24` | 1.5rem (24px) | P0 | accordionbutton; accordiongroup; buttonsimple; card; statictoggle |
| `spacing.28` | 1.75rem (28px) | P1 | buttonsimple; tab |
| `spacing.32` | 2rem (32px) | P0 | announcementdialog; buttonsimple; combobox; datepicker; input; select; slider; tab; timepicker; toggletip |
| `spacing.40` | 2.5rem (40px) | P1 | buttonsimple |
| `spacing.64` | 4rem (64px) | P1 | appheader; buttonsimple |
| `spacing.240` | 15rem (240px) | P1 | timepicker |

## Radius

| Token name | Value | Priority | Used components |
|---|---|---|---|
| `radius.0` | 0 (0px) | P0 | — |
| `radius.2` | 0.125rem (2px) | P0 | checkbox; datepicker; staticcheckbox; timepicker |
| `radius.4` | 0.25rem (4px) | P0 | alertchip; avatarbutton; icon; inputchip; linksimple; navmenuitem; skeleton; slider; staticchip; stepperitem; tab; verticaltablist |
| `radius.8` | 0.5rem (8px) | P0 | accordionbutton; accordiongroup; banner; calendar; card; combobox; datepicker; dialog; divider; input; listitem; navmenuitem; popover; select; skeleton; slider; statictoggle; stepperitem; tab; textarea; timepicker; toast |
| `radius.12` | 0.75rem (12px) | P1 | statictoggle |
| `radius.14` | 0.875rem (14px) | P1 | calendar |
| `radius.20` | 1.25rem (20px) | P0 | button; buttongroup; navmenuitem; sidenavigation; skeleton |
| `radius.50` | 3.125rem (50px) | P1 | listitem |
| `radius.100` | 6.25rem (100px) | P1 | badge; button; datepicker; timepicker |
| `radius.full` | 50% | P0 | avatar; avatarbutton; badge; bullet; calendar; presence; skeleton; slider; staticradio; statictoggle; stepperitem; textarea |

## Border

| Token name | Value | Priority | Used components |
|---|---|---|---|
| `border.width.1` | 1px | P0 | alertchip; banner; buttongroup; buttonlink; divider; inputchip; progressbar; staticchip; statictoggle; stepperconnector |
| `border.width.2` | 2px | P0 | filterchip |

## Size

| Token name | Value | Priority | Used components |
|---|---|---|---|
| `size.4` | 0.25rem (4px) | P2 | navmenuitem |
| `size.16` | 1.0rem (16px) | P2 | avatar; badge; navmenuitem; popover; staticradio |
| `size.20` | 1.25rem (20px) | P2 | divider; inputchip; staticchip; timepicker |
| `size.24` | 1.5rem (24px) | P1 | alertchip; avatar; buttongroup; chip; datepicker; inputchip; sidenavigation; staticchip; timepicker |
| `size.28` | 1.75rem (28px) | P2 | buttongroup; calendar; presence; stepperitem |
| `size.32` | 2.0rem (32px) | P0 | avatar; buttonsimple; combobox; datepicker; input; select; slider; tab; timepicker; buttongroup |
| `size.40` | 2.5rem (40px) | P1 | buttongroup; datepicker; divider; navmenuitem |
| `size.52` | 3.25rem (52px) | P1 | input |
| `size.64` | 4.0rem (64px) | P1 | avatar; searchfield |
| `size.72` | 4.5rem (72px) | P1 | avatar |
| `size.88` | 5.5rem (88px) | P1 | avatar |
| `size.100` | 6.25rem (100px) | P2 | textarea |
| `size.124` | 7.75rem (124px) | P2 | avatar |

## Other

| Token name | Value | Priority | Used components |
|---|---|---|---|
| `focus.ring.width.1` | 1px | P2 | — |
| `focus.ring.width.2` | 2px | P2 | — |
| `opacity.state.disabled` | 0.1% | P2 | checkbox; select; toggle (0.1% in audit) |
| `spacing.theme.*` | — | P2 | — |

**Not in core (bind nearest or hardcode):** buttongroup 1px gap → `spacing.2`; popover arrow 3px radius → `radius.2`.

