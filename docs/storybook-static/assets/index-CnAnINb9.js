import{S as m,k as b,G as l,n as s,u as v}from"./iframe-Dqi1znBL.js";import{D as h}from"./DisabledMixin-BBBcOPXh.js";const p=[m`
    :host {
      display: block;
      position: relative;
      width: 1rem;
      height: 1rem;
      margin: 0.125rem 0;
      border-radius: 50%;

      --mdc-staticradio-inner-circle-size: 0.375rem;
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
    :host([disabled][readonly])::part(radio-icon) {
      border-color: var(--mdc-staticradio-disabled-border-color);
      background: var(--mdc-staticradio-control-inactive-disabled-background);
    }

    :host([disabled][checked])::part(radio-icon),
    :host([disabled][readonly][checked])::part(radio-icon) {
      border: var(--mdc-staticradio-control-active-disabled-background);
      background: var(--mdc-staticradio-control-active-disabled-background);
    }

    :host([disabled][checked]) .radio-icon:after,
    :host([disabled][readonly][checked]) .radio-icon:after {
      background: var(--mdc-staticradio-inner-circle-disabled-background);
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
      background: var(--mdc-staticradio-inner-circle-normal-background);
    }

    :host([readonly])::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
      background-color: var(--mdc-staticradio-control-inactive-color);
    }

    :host([readonly][checked])::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
    }

    :host([readonly][checked]) .radio-icon:after {
      background-color: var(--mdc-staticradio-text-disabled-color);
    }
  `];var u=Object.defineProperty,n=(t,d,e,g)=>{for(var r=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(r=i(d,e,r)||r);return r&&u(d,e,r),r};const c=class c extends h(l){constructor(){super(...arguments),this.checked=!1,this.readonly=!1}render(){return b` <slot></slot>
      <span part="radio-icon" class="radio-icon"></span>`}};c.styles=[...l.styles,...p];let o=c;n([s({type:Boolean,reflect:!0})],o.prototype,"checked");n([s({type:Boolean,reflect:!0})],o.prototype,"readonly");const k=v.constructTagName("staticradio");o.register(k);
