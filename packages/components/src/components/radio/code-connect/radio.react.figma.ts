// url=<FIGMA_RADIO_URL>
// AI-Assisted

import figma from "figma"

const label = figma.selectedInstance.getBoolean("Label", {
  true: figma.selectedInstance.findText("Label").__render__(),
  false: undefined,
})
const helpText = figma.selectedInstance.getBoolean("Helper Text", {
  true: "Helper text",
  false: undefined,
})
const toggletipText = figma.selectedInstance.getBoolean("Info Button", {
  true: "This is a toggletip text to let the info button appear.",
  false: undefined,
})
const readonly = figma.selectedInstance.getEnum("State", {
  Rest: undefined,
  Hover: undefined,
  Pressed: undefined,
  Focused: undefined,
  "Read Only": true,
  Disabled: undefined,
})
const disabled = figma.selectedInstance.getEnum("State", {
  Rest: undefined,
  Hover: undefined,
  Pressed: undefined,
  Focused: undefined,
  "Read Only": undefined,
  Disabled: true,
})

export default {
  id: "radio",
  imports: ["import { Radio } from '@momentum-design/components/dist/react';"],
  example: figma.code`<Radio${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "helpText",
    helpText,
  )}${figma.helpers.react.renderProp(
    "toggletipText",
    toggletipText,
  )}${figma.helpers.react.renderProp(
    "readonly",
    readonly,
  )}${figma.helpers.react.renderProp("disabled", disabled)}/>`,
  metadata: { nestable: true },
}
// End AI-Assisted
