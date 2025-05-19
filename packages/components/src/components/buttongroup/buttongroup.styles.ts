import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
:host{
  --mdc-buttongroup-border-radius: 1.25rem;
  --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
  --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);
  border-radius: var(--mdc-buttongroup-border-radius);
  border: 1px solid var(--mdc-buttongroup-border-color);
}

:host([orientation="vertical"]){
  flex-direction: column;
}

::slotted(mdc-button){
  border-radius: 0;
  border: none;
}

:host([variant='primary']){
  --mdc-buttongroup-divider-color: var(--mds-color-theme-background-solid-primary-normal);
}

:host([orientation="horizontal"]) ::slotted(mdc-button:not(:last-child)){
  border-right: 1px solid var(--mdc-buttongroup-divider-color);
}
:host([orientation="vertical"]) ::slotted(mdc-button:not(:last-child)){
  border-bottom: 1px solid var(--mdc-buttongroup-divider-color);
}

:host([orientation="vertical"]) ::slotted(mdc-button:first-child){
  border-top-left-radius: var(--mdc-buttongroup-border-radius);
  border-top-right-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="vertical"]) ::slotted(mdc-button:last-child){
  border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
}

:host([orientation="horizontal"]:dir(ltr)) ::slotted(mdc-button:first-child){
  border-top-left-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="horizontal"]:dir(rtl)) ::slotted(mdc-button:first-child){
  border-top-right-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="horizontal"]:dir(ltr)) ::slotted(mdc-button:last-child){
  border-top-right-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="horizontal"]:dir(rtl)) ::slotted(mdc-button:last-child){
  border-top-left-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
}

:host([compact][orientation="horizontal"]) ::slotted(mdc-button){
  height: 24px;
}
:host([compact][orientation="horizontal"][size="24"]) ::slotted(mdc-button){
  width: 24px;
}
:host([compact][orientation="horizontal"][size="28"]) ::slotted(mdc-button){
  width: 28px;
}
:host([compact][orientation="horizontal"][size="32"]) ::slotted(mdc-button){
  width: 32px;
}
:host([compact][orientation="horizontal"][size="40"]) ::slotted(mdc-button){
  width: 40px;
}

`;

export default [hostFitContentStyles, styles];
