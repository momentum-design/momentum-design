import{S as m,k as b,E as n,n as t,u as h}from"./iframe-CZp7GZ56.js";import{D as v}from"./DisabledMixin-DHpM1y9t.js";const p=[m`
    :host {
      display: block;
      position: relative;
      width: 1rem;
      height: 1rem;
      margin: 0.125rem 0;
      border-radius: 50%;

      --mdc-staticradio-inner-circle-size: 0.375rem;
      --mdc-staticradio-text-normal-color: var(--mds-color-theme-text-primary-normal);
      --mdc-staticradio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-staticradio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-staticradio-normal-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticradio-inner-circle-normal-background: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-staticradio-inner-circle-disabled-background: var(--mds-color-theme-inverted-text-primary-disabled);
      --mdc-staticradio-control-inactive-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-staticradio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);
      --mdc-staticradio-control-active-color: var(--mds-color-theme-control-active-normal);
      --mdc-staticradio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);
    }

    .radio-icon:after {
      content: '';
      position: absolute;
      display: none;
    }

    :host([disabled])::part(radio-icon),
    :host([soft-disabled])::part(radio-icon),
    :host([disabled][readonly])::part(radio-icon),
    :host([soft-disabled][readonly])::part(radio-icon) {
      border-color: var(--mdc-staticradio-disabled-border-color);
      background-color: var(--mdc-staticradio-control-inactive-disabled-background);
    }

    :host([disabled][checked])::part(radio-icon),
    :host([soft-disabled][checked])::part(radio-icon),
    :host([disabled][readonly][checked])::part(radio-icon),
    :host([soft-disabled][readonly][checked])::part(radio-icon) {
      border: var(--mdc-staticradio-control-active-disabled-background);
      background-color: var(--mdc-staticradio-control-active-disabled-background);
    }

    :host([disabled][checked]) .radio-icon:after,
    :host([soft-disabled][checked]) .radio-icon:after,
    :host([disabled][readonly][checked]) .radio-icon:after,
    :host([soft-disabled][readonly][checked]) .radio-icon:after {
      background-color: var(--mdc-staticradio-inner-circle-disabled-background);
    }

    :host::part(radio-icon) {
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1rem;
      border: 0.0625rem solid var(--mdc-staticradio-normal-border-color);
      background-color: var(--mdc-staticradio-control-inactive-color);
      border-radius: 50%;
    }

    :host([checked])::part(radio-icon) {
      border-color: var(--mdc-staticradio-control-active-color);
      background-color: var(--mdc-staticradio-control-active-color);
    }

    :host([checked]) .radio-icon:after {
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--mdc-staticradio-inner-circle-size);
      height: var(--mdc-staticradio-inner-circle-size);
      border-radius: 50%;
      background-color: var(--mdc-staticradio-inner-circle-normal-background);
    }

    :host([readonly])::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
      background-color: unset;
    }

    :host([readonly][checked])::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
    }

    :host([readonly][checked]) .radio-icon:after {
      background-color: var(--mdc-staticradio-text-normal-color);
    }
  `];var u=Object.defineProperty,e=(c,i,s,f)=>{for(var o=void 0,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=l(i,s,o)||o);return o&&u(i,s,o),o};const d=class d extends v(n){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.softDisabled=!1}render(){return b` <slot></slot>
      <span part="radio-icon" class="radio-icon"></span>`}};d.styles=[...n.styles,...p];let r=d;e([t({type:Boolean,reflect:!0})],r.prototype,"checked");e([t({type:Boolean,reflect:!0})],r.prototype,"readonly");e([t({type:Boolean,attribute:"soft-disabled",reflect:!0})],r.prototype,"softDisabled");const k=h.constructTagName("staticradio");r.register(k);
