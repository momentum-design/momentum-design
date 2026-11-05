import { css } from 'lit';

const styles = css`
  :host {
    --mdc-emptystate-max-width: 19.75rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  [part='content'] {
    --mdc-emptystate-align-items: center;
    --mdc-emptystate-illustration-size: 5.5rem;
    --mdc-emptystate-text-align: center;

    display: flex;
    flex-direction: column;
    align-items: var(--mdc-emptystate-align-items);
    gap: var(--mds-spacing-theme-gap-xl);
    max-width: var(--mdc-emptystate-max-width);
  }

  :host([layout='horizontal']) [part='content'] {
    flex-direction: row;
    --mdc-emptystate-align-items: flex-start;
    --mdc-emptystate-text-align: start;
  }

  :host([size='large']) [part='content'] {
    --mdc-emptystate-max-width: 31rem;
    --mdc-emptystate-illustration-size: 12rem;
  }

  ::slotted(mdc-illustration[slot='illustration']) {
    --mdc-illustration-size: var(--mdc-emptystate-illustration-size);
  }

  [part='text-and-actions'] {
    display: flex;
    flex-direction: column;
    align-items: var(--mdc-emptystate-align-items);
    gap: var(--mds-spacing-theme-gap-xl);
  }

  [part='text'] {
    display: flex;
    flex-direction: column;
    align-items: var(--mdc-emptystate-align-items);
    gap: var(--mds-spacing-theme-gap-xs);
    text-align: var(--mdc-emptystate-text-align);
  }

  slot[name='heading'] {
    display: contents;
  }

  [part='text'] mdc-text[type='body-small-regular'] {
    color: var(--mds-color-theme-text-secondary-normal);
  }

  mdc-text::part(text) {
    margin: 0;
  }

  slot[name='actions'] {
    display: flex;
    flex-direction: column;
    align-items: var(--mdc-emptystate-align-items);
    gap: var(--mds-spacing-theme-gap-sm);
  }

  slot[name='actions'][hidden] {
    display: none;
  }
`;

export default [styles];
