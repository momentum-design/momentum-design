// url=<FIGMA_BUTTON_ICON_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=mdc-button
import figma from 'figma';

import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';
import {
  readBadgeNote,
  readColor,
  readDisabled,
  readIcon,
  readIconSize,
  readInverted,
  readVariant,
} from './button.figma-mappings';

const instance = figma.selectedInstance;

export default {
  example: figma.code`${readBadgeNote(instance)}${element('mdc-button', [
    attribute('variant', readVariant(instance)),
    attribute('size', readIconSize(instance)),
    attribute('color', readColor(instance)),
    attribute('prefix-icon', readIcon(instance)),
    booleanAttribute('inverted', readInverted(instance)),
    booleanAttribute('disabled', readDisabled(instance)),
  ])}`,
  imports: ["import '@momentum-design/components/components/button';"],
  id: 'button-icon',
  metadata: { nestable: true },
};
