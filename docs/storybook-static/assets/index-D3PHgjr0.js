import"./index-Bn9xAGOB.js";import"./index-BrnCmfJy.js";import{T as C}from"./toggle.constants-CSVbGN-C.js";import{T as i}from"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import{i as T,D as o,k as c}from"./lit-element-D5KKan5q.js";import{n as E}from"./index-C9z9WAEj.js";import{R as b}from"./roles-BH_hBfTz.js";import{M as k}from"./menuitem.component-BoKm6qLY.js";import{A as e}from"./menusection.constants-CectB7Mc.js";import{D as g,I as l,T as A}from"./menuitemcheckbox.constants-Cja4JgF_.js";const f=T`
  :host {
    --mdc-checkmark-indicator-color: var(--mds-color-theme-control-active-normal);
  }
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: var(--mdc-checkmark-indicator-color);
  }
  :host([disabled])::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,R=[f];var u=Object.defineProperty,p=(d,a,h,L)=>{for(var t=void 0,s=d.length-1,m;s>=0;s--)(m=d[s])&&(t=m(a,h,t)||t);return t&&u(a,h,t),t};const n=class n extends k{constructor(){super(),this.ariaChecked=g.ARIA_CHECKED,this.indicator=g.INDICATOR,this.menuitemcheckboxHandleClick=()=>{if(this.disabled)return;const a=this.ariaChecked===e.TRUE;this.ariaChecked=a?e.FALSE:e.TRUE},this.addEventListener("click",this.menuitemcheckboxHandleClick)}connectedCallback(){super.connectedCallback(),this.role=b.MENUITEMCHECKBOX}staticCheckbox(){return this.indicator!==l.CHECKBOX?o:c`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.ariaChecked===e.TRUE}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
    `}staticToggle(){return this.indicator!==l.TOGGLE?o:c`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.ariaChecked===e.TRUE}"
        ?disabled="${this.disabled}"
        size="${C.COMPACT}"
      ></mdc-statictoggle>
    `}getCheckmarkIcon(){return this.indicator!==l.CHECKMARK||this.ariaChecked===e.FALSE?o:c` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `}render(){return c`
      <div part="leading">
        ${this.staticCheckbox()}
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",i.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",i.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",i.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",i.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",i.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
        ${this.staticToggle()} ${this.getCheckmarkIcon()}
      </div>
    `}};n.styles=[...k.styles,...R];let r=n;p([E({type:String,reflect:!0,attribute:"aria-checked"})],r.prototype,"ariaChecked");p([E({type:String,reflect:!0})],r.prototype,"indicator");r.register(A);
