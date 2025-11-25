import { css } from 'lit';

export default css`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  *::-webkit-scrollbar {
    width: 0.7rem;
  }
  *::-webkit-scrollbar-track {
    background: var(--mdc-themeprovider-scrollbar-track-color);

    border-radius: 0.5rem;
    padding: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background: var(--mdc-themeprovider-scrollbar-thumb-color);
    border-radius: 0.5rem;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`;
