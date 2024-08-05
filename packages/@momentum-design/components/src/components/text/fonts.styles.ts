import { css } from 'lit';

// todo: change definition to tokens once available

export const fontsStyles = css`
  :host([type="heading-1"]) {
    font-size: 7.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 9.375rem */
    text-transform: capitalize;
  }

  :host([type="heading-2"]) {
    font-size: 6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 7.5rem */
    text-transform: capitalize;
  }

  :host([type="heading-3"]) {
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 3.75rem */
  }

  :host([type="heading-4"]) {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 3.125rem */
  }

  :host([type="heading-5"]) {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 2.5rem */
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  :host([type="heading-6"]) {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 171.429% */
  }

  :host([type="heading-7"]) {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
  }

  :host([type="body-large"]) {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 3rem */
    margin-block-end: 1.875em; /* paragraph spacing, 30px */
  }

  :host([type="body-regular"]) {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 2.25rem */
    margin-block-end: 1.5em; /* paragraph spacing, 24px */
  }

  :host([type="body-small"]) {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.875rem */
    margin-block-end: 0.125rem; /* paragraph spacing, 2px */
  }

  :host([type="image-title"]) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
  }

  :host([type="label"]) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.02rem;
  }
`;
