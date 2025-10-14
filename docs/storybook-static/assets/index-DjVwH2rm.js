import{S as k,u as b,k as n,h as x,E as m,n as r}from"./iframe-8kqUpADA.js";import{D as u}from"./DisabledMixin-CF3InGaq.js";import"./index-DDoXQLKD.js";const p=[k`
    :host {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-checkbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-checkbox-size: 1rem;
      margin: 0.125rem 0;
      border-radius: 0.125rem;
    }

    :host::part(icon-container) {
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
      background-color: var(--mdc-checkbox-background-color);
      width: var(--mdc-checkbox-size);
      height: var(--mdc-checkbox-size);
      border-radius: 0.125rem;
    }

    :host::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
    }

    :host([checked]),
    :host([indeterminate]) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-checkbox-border-color: transparent;
    }

    :host([readonly]) {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-primary-normal);
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-checkbox-icon-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-checkbox-icon-color: var(--mds-color-theme-text-primary-disabled);
      cursor: default;
    }

    :host([disabled][checked]),
    :host([disabled][indeterminate]),
    :host([soft-disabled][checked]),
    :host([soft-disabled][indeterminate]) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-disabled);
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-primary-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked]),
      :host([indeterminate]) {
        --mdc-checkbox-background-color: SelectedItem;
        --mdc-checkbox-border-color: SelectedItemText;
        --mdc-checkbox-icon-color: SelectedItemText;
      }
      :host([readonly]) {
        --mdc-checkbox-border-color: Highlight;
        --mdc-checkbox-icon-color: HighlightText;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-checkbox-background-color: GrayText;
        --mdc-checkbox-border-color: GrayText;
        --mdc-checkbox-icon-color: GrayText;
      }
      :host([disabled][checked]),
      :host([disabled][indeterminate]),
      :host([soft-disabled][checked]),
      :host([soft-disabled][indeterminate]) {
        --mdc-checkbox-border-color: GrayText;
        --mdc-checkbox-icon-color: GrayText;
      }
    }
  `],N=b.constructTagName("checkbox"),h={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},v=b.constructTagName("staticcheckbox");var f=Object.defineProperty,t=(i,c,s,y)=>{for(var o=void 0,d=i.length-1,l;d>=0;d--)(l=i[d])&&(o=l(c,s,o)||o);return o&&f(c,s,o),o};const a=class a extends u(m){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.readonly=!1,this.softDisabled=!1}render(){const c=this.checked||this.indeterminate?n`
            <mdc-icon
              part="checkbox-icon"
              name="${this.indeterminate?h.INDETERMINATE:h.CHECKED}"
              size="1"
              length-unit="rem"
            ></mdc-icon>
          `:x;return n`<slot></slot>
      <div part="icon-container">${c}</div>`}};a.styles=[...m.styles,...p];let e=a;t([r({type:Boolean,reflect:!0})],e.prototype,"checked");t([r({type:Boolean,reflect:!0})],e.prototype,"indeterminate");t([r({type:Boolean,reflect:!0})],e.prototype,"readonly");t([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],e.prototype,"softDisabled");e.register(v);export{N as T};
