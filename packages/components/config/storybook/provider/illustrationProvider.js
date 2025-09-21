import { html } from 'lit';
import '../../../src/components/illustrationprovider';

export const withIllustrationProvider = story =>
  html` <mdc-illustrationprovider url="./illustrations/svg" cache-strategy="in-memory-cache" cache-name="momentum">
    ${story()}
  </mdc-illustrationprovider>`;
