// url=<FIGMA_BUTTON_SELECTABLE_PILL_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=mdc-button
import figma from 'figma';

import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';

import {
  readActive,
  readBadgeNote,
  readDisabled,
  readLabel,
  readLeadingIcon,
  readPillSize,
  readSelectableVariant,
  readTrailingIcon,
} from './button.figma-mappings';

const instance = figma.selectedInstance;

export default {
  example: figma.code`${readBadgeNote(instance)}${element(
    'mdc-button',
    [
      attribute('variant', readSelectableVariant(instance)),
      attribute('size', readPillSize(instance)),
      attribute('prefix-icon', readLeadingIcon(instance)),
      attribute('postfix-icon', readTrailingIcon(instance)),
      booleanAttribute('active', readActive(instance)),
      booleanAttribute('disabled', readDisabled(instance)),
    ],
    readLabel(instance),
  )}`,
  imports: ["import '@momentum-design/components/components/button';"],
  id: 'button-selectable-pill',
  metadata: { nestable: true },
};
