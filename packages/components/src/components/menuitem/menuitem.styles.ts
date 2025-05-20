import { css } from 'lit';

const styles = css`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
      transform: rotate(180deg);
  }
`;

export default [styles];
