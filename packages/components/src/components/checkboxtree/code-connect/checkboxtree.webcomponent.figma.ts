// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_CHECKBOXTREE_URL>', {
  props: {},
  example: () => html`
    <mdc-checkboxtree label="Select your Avengers team" help-text="Select all that apply.">
      <mdc-checkbox label="Avengers"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="Iron Man"></mdc-checkbox>
        <mdc-checkbox label="Captain America"></mdc-checkbox>
      </mdc-checkboxtree>
    </mdc-checkboxtree>
  `,
  imports: ["import '@momentum-design/components/components/checkboxtree';"],
});
