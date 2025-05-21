import{i as k,k as n,D as v}from"./lit-element-D5KKan5q.js";import{u as m,C as s,n as b}from"./index-C9z9WAEj.js";import{D as u}from"./DisabledMixin-BZruwOeC.js";import"./index-CvC6sVfQ.js";const p=[k`
  :host{
    margin: 0.125rem 0;
    border-radius: 0.125rem;
    --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-staticcheckbox-checked-background-color: var(--mds-color-theme-control-active-normal);
    --mdc-staticcheckbox-disabled-background-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-staticcheckbox-disabled-icon-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-staticcheckbox-icon-background-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-staticcheckbox-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-staticcheckbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-staticcheckbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-staticcheckbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
  }

  :host([checked])::part(icon-container),
  :host([indeterminate])::part(icon-container) {
    background: var(--mdc-staticcheckbox-checked-background-color);
    border-color: transparent;
  }

  :host([disabled])::part(icon-container) {
    border-color: var(--mdc-staticcheckbox-disabled-border-color);
    background: var(--mdc-staticcheckbox-disabled-background-color);
  }

  :host([disabled][checked])::part(icon-container),
  :host([disabled][indeterminate])::part(icon-container) {
    background: var(--mdc-staticcheckbox-disabled-checked-icon-color);
    border: 0.0625rem solid var(--mdc-staticcheckbox-disabled-border-color);
  }
  
  :host::part(icon-container) {
    display: flex;
    align-items: center;
    border: 0.0625rem solid var(--mdc-staticcheckbox-icon-border-color);
    background: var(--mdc-staticcheckbox-icon-background-color);
    width: 1rem;
    height: 1rem;
    border-radius: 0.125rem;
  }

  .icon {
    --mdc-icon-fill-color: var(--mdc-staticcheckbox-icon-color);
  }

  :host([disabled]) .icon {
    --mdc-icon-fill-color: var(--mdc-staticcheckbox-disabled-icon-color);
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked])::part(icon-container)
    :host([indeterminate])::part(icon-container) {
      border: 0.0625rem solid var(--mdc-staticcheckbox-border-color);
    }
  }
`],C=m.constructTagName("checkbox"),l={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},x=m.constructTagName("staticcheckbox");var g=Object.defineProperty,h=(i,e,a,f)=>{for(var o=void 0,r=i.length-1,d;r>=0;r--)(d=i[r])&&(o=d(e,a,o)||o);return o&&g(e,a,o),o};const t=class t extends u(s){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1}render(){const e=this.checked||this.indeterminate?n`
      <mdc-icon
        class="icon"
        name="${this.indeterminate?l.INDETERMINATE:l.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    `:v;return n`<slot></slot>
      <div part="icon-container">${e}</div>`}};t.styles=[...s.styles,...p];let c=t;h([b({type:Boolean,reflect:!0})],c.prototype,"checked");h([b({type:Boolean,reflect:!0})],c.prototype,"indeterminate");c.register(x);export{C as T};
