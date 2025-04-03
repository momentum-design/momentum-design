import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid var(--mds-color-theme-outline-primary-normal);
  }
  :host([variant='ghost']){
    border-color: transparent;
  }
  :host([orientation="horizontal"]){
    width: 640px;
  }

  :host([orientation="vertical"]){
    width: 320px;
    flex-direction: column;
  }
  
  :host([orientation="vertical"])::part(image){
    height: 200px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  :host([orientation="horizontal"])::part(image){
    width: 160px;
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  :host::part(header){
    display: flex;
    gap: 8px;
  }

  :host::part(icon){
    margin-top: 4px;
  }

  :host::part(body){
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  ::slotted([slot='body']){
    padding-bottom: 8px;
  }
`;

export default [hostFitContentStyles, styles];
