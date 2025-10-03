import"./index-BMN--PIx.js";import"./index-CRnfDU32.js";import{S as u,W as A,k as c,h,q as r,n as k}from"./iframe-Bmqk5ncS.js";import"./index-CZK9p1cf.js";import{R as f}from"./class-map-CovSBtMu.js";import{M as l}from"./menuitem.component-ClNtMFJw.js";import{D as g,T as R,I as m,a as b}from"./menuitemradio.constants-BXaBOuBO.js";import{b as E}from"./menupopover.constants-CVSsG1s-.js";const v=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,$=[v];var y=Object.defineProperty,p=(n,t,i,C)=>{for(var e=void 0,a=n.length-1,o;a>=0;a--)(o=n[a])&&(e=o(t,i,e)||e);return e&&y(t,i,e),e};const d=class d extends l{constructor(){super(),this.checked=!1,this.indicator=g.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=A.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const t=this.closest(`${R}, ${E}`);return!t||!this.name?[]:Array.from(t.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(i=>{i!==this&&i.removeAttribute("checked")})}handleMouseClick(){this.disabled||this.checked||(this.updateOtherRadiosCheckedState(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`,t.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===m.RADIO?c`
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
      <slot name="content">
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
      </slot>
    `}};d.styles=[...l.styles,...$];let s=d;p([k({type:Boolean,reflect:!0})],s.prototype,"checked");p([k({type:String,reflect:!0})],s.prototype,"indicator");s.register(b);
