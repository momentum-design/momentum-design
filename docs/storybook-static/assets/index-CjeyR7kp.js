import"./index-BJ-ySa09.js";import"./index-BWe-z68y.js";import{T as p}from"./toggle.constants-DFBD4E1o.js";import{T as e}from"./index-D1yLszQ-.js";import"./index-S9dvOHgJ.js";import{i as T,D as s,k as r}from"./lit-element-D5KKan5q.js";import{u as A,n as E}from"./index-C9z9WAEj.js";import{R as b}from"./roles-BH_hBfTz.js";import{M as g}from"./menuitem.component-oeHNYYfw.js";import{A as a}from"./menusection.constants-CectB7Mc.js";const u=A.constructTagName("menuitemcheckbox"),c={CHECKBOX:"checkbox",CHECKMARK:"checkmark",TOGGLE:"toggle"},C={ARIA_CHECKED:a.FALSE,INDICATOR:c.CHECKBOX},R=T`
  :host {
    --mdc-checkmark-indicator-color: var(--mds-color-theme-control-active-normal);
  }
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: var(--mdc-checkmark-indicator-color);
  }
  :host([disabled])::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,x=[R];var L=Object.defineProperty,k=(n,d,h,f)=>{for(var t=void 0,o=n.length-1,m;o>=0;o--)(m=n[o])&&(t=m(d,h,t)||t);return t&&L(d,h,t),t};const l=class l extends g{constructor(){super(...arguments),this.ariaChecked=C.ARIA_CHECKED,this.indicator=C.INDICATOR}connectedCallback(){super.connectedCallback(),this.role=b.MENUITEMCHECKBOX}staticCheckbox(){return this.indicator!==c.CHECKBOX?s:r`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.ariaChecked===a.TRUE}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
  `}staticToggle(){return this.indicator!==c.TOGGLE?s:r`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.ariaChecked===a.TRUE}"
        ?disabled="${this.disabled}"
        size="${p.COMPACT}"
      ></mdc-statictoggle>
    `}getCheckmarkIcon(){return this.indicator!==c.CHECKMARK||this.ariaChecked===a.FALSE?s:r`
      <mdc-icon
        slot="trailing-controls"
        name="check-bold"
        part="checkmark-icon"
      ></mdc-icon>
    `}render(){return r`
      <div part="leading">
        ${this.staticCheckbox()}
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",e.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",e.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",e.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",e.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",e.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
        ${this.staticToggle()}
        ${this.getCheckmarkIcon()}
      </div>
    `}};l.styles=[...g.styles,...x];let i=l;k([E({type:String,reflect:!0,attribute:"aria-checked"})],i.prototype,"ariaChecked");k([E({type:String,reflect:!0})],i.prototype,"indicator");i.register(u);export{c as I,u as T};
