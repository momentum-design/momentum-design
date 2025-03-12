import { css } from 'lit';
import { fontsStyles } from './fonts.styles';

const styles = [
  css`
    :host {
      --mdc-text-font-family: var(--mdc-themeprovider-font-family);
      --mdc-text-multiline-truncation-line-clamp: unset;

      display: block;
      font-family: var(--mdc-text-font-family);
    }
  `,
  // type specific font styles:
  fontsStyles,
];

export default styles;
