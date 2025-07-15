import"./index-BhzInYPc.js";import"./index-Cdz8MLaY.js";import{T as r}from"./index-BrLJ_9IK.js";import"./index-DPX8nO8h.js";import{i as k,k as c,D as h}from"./lit-element-D5KKan5q.js";import{u as A,n as p}from"./index-C9z9WAEj.js";import{R as f}from"./roles-BH_hBfTz.js";import{M as m}from"./menuitem.component-BMelh1qR.js";import{T as R}from"./menusection.constants-BCYXL6dH.js";import{T as g}from"./menupopover.constants-9M2YGSKC.js";const E=A.constructTagName("menuitemradio"),o={NONE:"none",RADIO:"radio",CHECKMARK:"checkmark"},T={INDICATOR:o.RADIO},b=k`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,C=[b];var O=Object.defineProperty,u=(d,t,i,v)=>{for(var e=void 0,a=d.length-1,l;a>=0;a--)(l=d[a])&&(e=l(t,i,e)||e);return e&&O(t,i,e),e};const n=class n extends m{constructor(){super(),this.checked=!1,this.indicator=T.INDICATOR,this.handleMouseClick=t=>{t.stopPropagation(),!(this.disabled||this.checked)&&(this.updateOtherRadiosCheckedState(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},this.addEventListener("click",this.handleMouseClick)}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const t=this.closest(`${R}, ${g}`);return!t||!this.name?[]:Array.from(t.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(i=>{i!==this&&i.removeAttribute("checked")})}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`,t.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===o.RADIO?c`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      `:h}renderCheckmarkIcon(){return this.checked&&this.indicator===o.CHECKMARK?c` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `:h}render(){return c`
      <div part="leading">
        ${this.renderStaticRadio()}
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",r.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",r.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",r.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",r.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",r.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
        ${this.renderCheckmarkIcon()}
      </div>
    `}};n.styles=[...m.styles,...C];let s=n;u([p({type:Boolean,reflect:!0})],s.prototype,"checked");u([p({type:String,reflect:!0})],s.prototype,"indicator");s.register(E);export{o as I};
