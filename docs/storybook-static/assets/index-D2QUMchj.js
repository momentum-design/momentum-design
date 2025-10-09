import{S as k,u as h,k as l,h as p,E as b,n as r}from"./iframe-B0XJYlue.js";import{D as x}from"./DisabledMixin-CGwTkMmF.js";import"./index-_Nv-YJw_.js";const u=[k`
    :host {
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
      --mdc-staticcheckbox-readonly-border-color: var(--mds-color-theme-outline-primary-normal);
      --mdc-staticcheckbox-text-normal-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([checked])::part(icon-container),
    :host([indeterminate])::part(icon-container) {
      background-color: var(--mdc-staticcheckbox-checked-background-color);
      border-color: transparent;
    }

    :host([disabled])::part(icon-container),
    :host([soft-disabled])::part(icon-container),
    :host([disabled][readonly])::part(icon-container),
    :host([soft-disabled][readonly])::part(icon-container) {
      border-color: var(--mdc-staticcheckbox-disabled-border-color);
      background-color: var(--mdc-staticcheckbox-disabled-background-color);
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container),
    :host([soft-disabled][checked])::part(icon-container),
    :host([soft-disabled][indeterminate])::part(icon-container),
    :host([disabled][readonly][checked])::part(icon-container),
    :host([disabled][readonly][indeterminate])::part(icon-container),
    :host([soft-disabled][readonly][checked])::part(icon-container),
    :host([soft-disabled][readonly][indeterminate])::part(icon-container) {
      background-color: var(--mdc-staticcheckbox-disabled-checked-icon-color);
      border: 0.0625rem solid var(--mdc-staticcheckbox-disabled-border-color);
    }

    :host::part(icon-container) {
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--mdc-staticcheckbox-icon-border-color);
      background-color: var(--mdc-staticcheckbox-icon-background-color);
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
    }

    :host([readonly])::part(icon-container) {
      border-color: var(--mdc-staticcheckbox-readonly-border-color);
      background-color: unset;
    }

    :host::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-icon-color);
    }

    :host([disabled])::part(checkbox-icon),
    :host([soft-disabled])::part(checkbox-icon),
    :host([disabled][readonly])::part(checkbox-icon),
    :host([soft-disabled][readonly])::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-disabled-icon-color);
    }

    :host([readonly])::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-text-normal-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked])::part(icon-container),
      :host([indeterminate])::part(icon-container) {
        border: 0.0625rem solid var(--mdc-staticcheckbox-border-color);
      }
    }
  `],D=h.constructTagName("checkbox"),m={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},v=h.constructTagName("staticcheckbox");var f=Object.defineProperty,t=(d,e,n,y)=>{for(var c=void 0,a=d.length-1,s;a>=0;a--)(s=d[a])&&(c=s(e,n,c)||c);return c&&f(e,n,c),c};const i=class i extends x(b){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.readonly=!1,this.softDisabled=!1}render(){const e=this.checked||this.indeterminate?l`
            <mdc-icon
              part="checkbox-icon"
              name="${this.indeterminate?m.INDETERMINATE:m.CHECKED}"
              size="1"
              length-unit="rem"
            ></mdc-icon>
          `:p;return l`<slot></slot>
      <div part="icon-container">${e}</div>`}};i.styles=[...b.styles,...u];let o=i;t([r({type:Boolean,reflect:!0})],o.prototype,"checked");t([r({type:Boolean,reflect:!0})],o.prototype,"indeterminate");t([r({type:Boolean,reflect:!0})],o.prototype,"readonly");t([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],o.prototype,"softDisabled");o.register(v);export{D as T};
