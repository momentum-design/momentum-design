import { Checkbox, CheckboxTree } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_CHECKBOXTREE_URL>', {
  props: {},
  example: () => (
    <CheckboxTree label="Select your Avengers team" helpText="Select all that apply.">
      <Checkbox label="Avengers" />
      <CheckboxTree>
        <Checkbox label="Iron Man" />
        <Checkbox label="Captain America" />
      </CheckboxTree>
    </CheckboxTree>
  ),
});
