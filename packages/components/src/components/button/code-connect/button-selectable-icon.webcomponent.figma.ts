// url=<FIGMA_BUTTON_SELECTABLE_ICON_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=mdc-button
import figma from 'figma';

import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';

import {
  readActive,
  readBadgeNote,
  readDisabled,
  readIcon,
  readSelectableIconSize,
  readSelectableVariant,
} from './button.figma-mappings';

const instance = figma.selectedInstance;

export default {
  example: figma.code`${readBadgeNote(instance)}${element('mdc-button', [
    attribute('variant', readSelectableVariant(instance)),
    attribute('size', readSelectableIconSize(instance)),
    attribute('prefix-icon', readIcon(instance)),
    booleanAttribute('active', readActive(instance)),
    booleanAttribute('disabled', readDisabled(instance)),
  ])}`,
  imports: ["import '@momentum-design/components/components/button';"],
  id: 'button-selectable-icon',
  metadata: { nestable: true },
};
