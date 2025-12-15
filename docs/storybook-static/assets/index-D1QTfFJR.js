import{U as x,u as k,k as n,h as u,F as m,n as t}from"./iframe-DFrHSZxm.js";import{D as p}from"./DisabledMixin-BzNLu-18.js";import{V as h}from"./formfieldwrapper.constants-CZ5U_A4c.js";import"./index-Dyqoh_OX.js";const v=[x`
    :host {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-staticcheckbox-size: 1rem;
      margin: 0.125rem 0;
      border-radius: 0.125rem;
    }

    :host::part(icon-container) {
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--mdc-staticcheckbox-border-color);
      background-color: var(--mdc-staticcheckbox-background-color);
      width: var(--mdc-staticcheckbox-size);
      height: var(--mdc-staticcheckbox-size);
      border-radius: 0.125rem;
    }

    :host::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-icon-color);
    }

    :host([checked]),
    :host([indeterminate]) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-staticcheckbox-border-color: transparent;
    }

    :host([readonly]) {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-primary-normal);
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-text-primary-disabled);
      cursor: default;
    }

    :host([disabled][checked]),
    :host([disabled][indeterminate]),
    :host([soft-disabled][checked]),
    :host([soft-disabled][indeterminate]) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-disabled);
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-primary-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked]),
      :host([indeterminate]) {
        --mdc-staticcheckbox-background-color: SelectedItem;
        --mdc-staticcheckbox-border-color: SelectedItemText;
        --mdc-staticcheckbox-icon-color: SelectedItemText;
      }
      :host([readonly]) {
        --mdc-staticcheckbox-border-color: Highlight;
        --mdc-staticcheckbox-icon-color: HighlightText;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-staticcheckbox-background-color: GrayText;
        --mdc-staticcheckbox-border-color: GrayText;
        --mdc-staticcheckbox-icon-color: GrayText;
      }
      :host([disabled][checked]),
      :host([disabled][indeterminate]),
      :host([soft-disabled][checked]),
      :host([soft-disabled][indeterminate]) {
        --mdc-staticcheckbox-border-color: GrayText;
        --mdc-staticcheckbox-icon-color: GrayText;
      }
    }
  `],I=k.constructTagName("checkbox"),b={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},N={ERROR:h.ERROR,DEFAULT:h.DEFAULT},f=k.constructTagName("staticcheckbox");var y=Object.defineProperty,r=(i,c,d,g)=>{for(var o=void 0,a=i.length-1,l;a>=0;a--)(l=i[a])&&(o=l(c,d,o)||o);return o&&y(c,d,o),o};const s=class s extends p(m){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.readonly=!1,this.softDisabled=!1}render(){const c=this.checked||this.indeterminate?n`
            <mdc-icon
              part="checkbox-icon"
              name="${this.indeterminate?b.INDETERMINATE:b.CHECKED}"
              size="1"
              length-unit="rem"
            ></mdc-icon>
          `:u;return n`<slot></slot>
      <div part="icon-container">${c}</div>`}};s.styles=[...m.styles,...v];let e=s;r([t({type:Boolean,reflect:!0})],e.prototype,"checked");r([t({type:Boolean,reflect:!0})],e.prototype,"indeterminate");r([t({type:Boolean,reflect:!0})],e.prototype,"readonly");r([t({type:Boolean,attribute:"soft-disabled",reflect:!0})],e.prototype,"softDisabled");e.register(f);export{N as C,I as T};
