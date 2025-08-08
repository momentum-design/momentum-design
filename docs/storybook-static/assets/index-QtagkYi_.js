import"./index-BGF5-tDE.js";import"./index-CeWuhPGb.js";import{T as r}from"./index-riA1qVWu.js";import"./index-DYRxW7oy.js";import{i as u,k as c,D as h}from"./lit-element-D5KKan5q.js";import{n as k}from"./provider.component-BaQC7CJH.js";import{R as f}from"./class-map-BcCVsMyu.js";import{R as A}from"./roles-DU0xbrD4.js";import{M as l}from"./menuitem.component-CtCANyEv.js";import{D as R,T as g,I as m,a as b}from"./menuitemradio.constants-HxwjPhBY.js";import{T as E}from"./menupopover.constants-MVr-WLVc.js";const v=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,T=[v];var $=Object.defineProperty,p=(o,t,i,y)=>{for(var e=void 0,a=o.length-1,n;a>=0;a--)(n=o[a])&&(e=n(t,i,e)||e);return e&&$(t,i,e),e};const d=class d extends l{constructor(){super(),this.checked=!1,this.indicator=R.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=A.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const t=this.closest(`${g}, ${E}`);return!t||!this.name?[]:Array.from(t.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(i=>{i!==this&&i.removeAttribute("checked")})}handleMouseClick(){this.disabled||this.checked||(this.updateOtherRadiosCheckedState(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`,t.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===m.RADIO?c`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      `:h}renderCheckmarkIcon(){return this.indicator===m.CHECKMARK?c`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${f({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:h}render(){return c`
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
    `}};d.styles=[...l.styles,...T];let s=d;p([k({type:Boolean,reflect:!0})],s.prototype,"checked");p([k({type:String,reflect:!0})],s.prototype,"indicator");s.register(b);
