// url=<FIGMA_BUTTON_ICON_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=Button
import figma from 'figma';

import { joinProps } from '../../../../config/code-connect/react';

import {
  readBadgeNoteJsx,
  readColor,
  readDisabled,
  readIcon,
  readIconSize,
  readInverted,
  readVariant,
} from './button.figma-mappings';

const { renderProp } = figma.helpers.react;
const instance = figma.selectedInstance;

const props = joinProps([
  renderProp('variant', readVariant(instance)),
  renderProp('size', readIconSize(instance)),
  renderProp('color', readColor(instance)),
  renderProp('prefixIcon', readIcon(instance)),
  renderProp('inverted', readInverted(instance)),
  renderProp('disabled', readDisabled(instance)),
]);

const badgeNote = readBadgeNoteJsx(instance);

export default {
  example: figma.code`${badgeNote.open}<Button${props} />${badgeNote.close}`,
  imports: ["import { Button } from '@momentum-design/components/dist/react';"],
  id: 'button-icon',
  metadata: { nestable: true },
};
