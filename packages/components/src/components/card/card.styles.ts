import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    align-items: flex-start;
    border-radius: 0.5rem;
    border: 1px solid var(--mds-color-theme-outline-primary-normal);
  }
  :host([variant='ghost']){
    border-color: transparent;
  }
  :host([orientation="horizontal"]){
    width: 40rem;
  }

  :host([orientation="vertical"]){
    width: 20rem;
    flex-direction: column;
  }
  
  :host([orientation="vertical"])::part(image){
    height: 12.5rem;
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  
  :host([orientation="horizontal"])::part(image){
    width: 10rem;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :host::part(header){
    display: flex;
    gap: 0.5rem;
  }

  :host::part(icon){
    margin-top: 0.25rem;
  }

  :host::part(body){
    width: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  ::slotted([slot='body']){
    padding-bottom: 0.5rem;
  }
`;

export default [hostFitContentStyles, styles];
