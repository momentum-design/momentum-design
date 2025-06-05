import"./index-ZTNw5RZw.js";import"./index-DRwtZMx5.js";import{T as C}from"./toggle.constants-Bo3AhFSb.js";import{T as e}from"./index-D1yLszQ-.js";import"./index-DlY34wWO.js";import{i as T,D as c,k as r}from"./lit-element-D5KKan5q.js";import{n as p}from"./index-C9z9WAEj.js";import{R as A}from"./roles-DMFGbP5t.js";import{M as g}from"./menuitem.component-DXg6aWC3.js";import{D as k,I as o,T as b}from"./menuitemcheckbox.constants-Cja4JgF_.js";import{A as s}from"./menusection.constants-CectB7Mc.js";const f=T`
  :host {
    --mdc-checkmark-indicator-color: var(--mds-color-theme-control-active-normal);
  }
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: var(--mdc-checkmark-indicator-color);
  }
  :host([disabled])::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,R=[f];var u=Object.defineProperty,E=(n,d,h,L)=>{for(var t=void 0,a=n.length-1,m;a>=0;a--)(m=n[a])&&(t=m(d,h,t)||t);return t&&u(d,h,t),t};const l=class l extends g{constructor(){super(...arguments),this.ariaChecked=k.ARIA_CHECKED,this.indicator=k.INDICATOR}connectedCallback(){super.connectedCallback(),this.role=A.MENUITEMCHECKBOX}staticCheckbox(){return this.indicator!==o.CHECKBOX?c:r`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.ariaChecked===s.TRUE}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
  `}staticToggle(){return this.indicator!==o.TOGGLE?c:r`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.ariaChecked===s.TRUE}"
        ?disabled="${this.disabled}"
        size="${C.COMPACT}"
      ></mdc-statictoggle>
    `}getCheckmarkIcon(){return this.indicator!==o.CHECKMARK||this.ariaChecked===s.FALSE?c:r`
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
    `}};l.styles=[...g.styles,...R];let i=l;E([p({type:String,reflect:!0,attribute:"aria-checked"})],i.prototype,"ariaChecked");E([p({type:String,reflect:!0})],i.prototype,"indicator");i.register(b);
