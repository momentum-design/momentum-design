import{S as x,u as k,k as n,h as u,E as m,n as r}from"./iframe-PAxJhFDH.js";import{D as p}from"./DisabledMixin-BZQXf7FT.js";import{V as h}from"./formfieldwrapper.constants-DM_CsWFr.js";import"./index-AlUfwEUP.js";const v=[x`
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
  `],I=k.constructTagName("checkbox"),b={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},N={ERROR:h.ERROR,DEFAULT:h.DEFAULT},f=k.constructTagName("staticcheckbox");var y=Object.defineProperty,t=(s,c,i,g)=>{for(var o=void 0,d=s.length-1,l;d>=0;d--)(l=s[d])&&(o=l(c,i,o)||o);return o&&y(c,i,o),o};const a=class a extends p(m){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.readonly=!1,this.softDisabled=!1}render(){const c=this.checked||this.indeterminate?n`
            <mdc-icon
              part="checkbox-icon"
              name="${this.indeterminate?b.INDETERMINATE:b.CHECKED}"
              size="1"
              length-unit="rem"
            ></mdc-icon>
          `:u;return n`<slot></slot>
      <div part="icon-container">${c}</div>`}};a.styles=[...m.styles,...v];let e=a;t([r({type:Boolean,reflect:!0})],e.prototype,"checked");t([r({type:Boolean,reflect:!0})],e.prototype,"indeterminate");t([r({type:Boolean,reflect:!0})],e.prototype,"readonly");t([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],e.prototype,"softDisabled");e.register(f);export{N as C,I as T};
