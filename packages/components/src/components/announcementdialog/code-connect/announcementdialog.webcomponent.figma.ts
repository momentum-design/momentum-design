// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_ANNOUNCEMENTDIALOG_URL>', {
  props: {},
  example: () => html`<mdc-announcementdialog></mdc-announcementdialog>`,
  imports: ["import '@momentum-design/components/components/announcementdialog';"],
});
