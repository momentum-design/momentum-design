import{S as m,k as u,E as n,n as c,u as h}from"./iframe-R3L7UhRQ.js";import{D as b}from"./DisabledMixin-8iYeFgf6.js";const p=[m`
    :host {
      --mdc-radio-inner-circle-size: 0.375rem;
      --mdc-radio-outer-circle-size: 1rem;
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-inactive-normal);

      display: block;
      position: relative;
      width: 1rem;
      height: 1rem;
      margin: 0.125rem 0;
      border-radius: 50%;
    }

    :host::part(radio-icon) {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--mdc-radio-outer-circle-size);
      height: var(--mdc-radio-outer-circle-size);
      border: 0.0625rem solid var(--mdc-radio-outer-circle-border-color);
      background-color: var(--mdc-radio-outer-circle-background-color);
      border-radius: 50%;
    }

    .radio-icon:after {
      content: '';
      position: absolute;
      display: none;
    }

    :host([checked]) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-control-active-normal);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-active-normal);
    }

    :host([checked]) .radio-icon:after {
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--mdc-radio-inner-circle-size);
      height: var(--mdc-radio-inner-circle-size);
      border-radius: 50%;
      background-color: var(--mdc-radio-inner-circle-background-color);
    }

    :host([readonly]) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-outer-circle-background-color: transparent;
    }

    :host([readonly][checked]) {
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-text-primary-normal);
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-outer-circle-background-color: transparent;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled][checked]),
    :host([soft-disabled][checked]) {
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-disabled);
      --mdc-radio-outer-circle-border-color: transparent;
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    @media (forced-colors: active) {
      :host([checked]) {
        --mdc-radio-outer-circle-border-color: SelectedItem;
        --mdc-radio-outer-circle-background-color: SelectedItem;
      }
      :host([readonly]),
      :host([readonly][checked]) {
        --mdc-radio-inner-circle-background-color: Highlight;
        --mdc-radio-outer-circle-border-color: Highlight;
        --mdc-radio-outer-circle-background-color: ButtonFace;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-radio-outer-circle-border-color: GrayText;
        --mdc-radio-outer-circle-background-color: GrayText;
        --mdc-radio-inner-circle-background-color: GrayText;
      }

      :host([disabled][checked]),
      :host([soft-disabled][checked]) {
        --mdc-radio-outer-circle-border-color: GrayText;
        --mdc-radio-outer-circle-background-color: GrayText;
      }
    }
  `];var k=Object.defineProperty,d=(i,a,l,g)=>{for(var r=void 0,e=i.length-1,s;e>=0;e--)(s=i[e])&&(r=s(a,l,r)||r);return r&&k(a,l,r),r};const t=class t extends b(n){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.softDisabled=!1}render(){return u` <slot></slot>
      <span part="radio-icon" class="radio-icon"></span>`}};t.styles=[...n.styles,...p];let o=t;d([c({type:Boolean,reflect:!0})],o.prototype,"checked");d([c({type:Boolean,reflect:!0})],o.prototype,"readonly");d([c({type:Boolean,attribute:"soft-disabled",reflect:!0})],o.prototype,"softDisabled");const v=h.constructTagName("staticradio");o.register(v);
