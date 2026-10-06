// url=<FIGMA_BUTTON_SELECTABLE_PILL_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=Button
import figma from 'figma';

import { joinProps } from '../../../../config/code-connect/react';
import {
  readActive,
  readBadgeNoteJsx,
  readDisabled,
  readLabel,
  readLeadingIcon,
  readPillSize,
  readSelectableVariant,
  readTrailingIcon,
} from './button.figma-mappings';

const { renderProp } = figma.helpers.react;
const instance = figma.selectedInstance;

const props = joinProps([
  renderProp('variant', readSelectableVariant(instance)),
  renderProp('size', readPillSize(instance)),
  renderProp('prefixIcon', readLeadingIcon(instance)),
  renderProp('postfixIcon', readTrailingIcon(instance)),
  renderProp('active', readActive(instance)),
  renderProp('disabled', readDisabled(instance)),
]);

const badgeNote = readBadgeNoteJsx(instance);

export default {
  example: figma.code`${badgeNote.open}<Button${props}>${readLabel(instance)}</Button>${badgeNote.close}`,
  imports: ["import { Button } from '@momentum-design/components/dist/react';"],
  id: 'button-selectable-pill',
  metadata: { nestable: true },
};
