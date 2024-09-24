import { html } from 'lit';

export const withIconProvider = (story) =>
  html`<mdc-iconprovider
        url="./icons/svg"
      >
        ${story()}
      </mdc-iconprovider>`;
