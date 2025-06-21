import { html } from 'lit';
import '../../../src/components/iconprovider';

export const withIconProvider = story =>
  html` <mdc-iconprovider url="./icons/svg" cache-strategy="in-memory-cache" cache-name="momentum">
    ${story()}
  </mdc-iconprovider>`;
