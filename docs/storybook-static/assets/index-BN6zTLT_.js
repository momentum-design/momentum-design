import"./index-DXK1NqDr.js";import"./index-DnNppdkN.js";import{S as u,W as f,k as c,h as l,q as s,n as k}from"./iframe-D4-7yPtR.js";import"./index-D6ohCnzh.js";import{R as A}from"./class-map-BCsX-IDI.js";import{M as h}from"./menuitem.component-BeGShzZ1.js";import{D as b,T as g,I as m,a as R}from"./menuitemradio.constants-BmdYqB5E.js";import{b as E}from"./menupopover.constants-Bi4xaKcs.js";const $=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,v=[$];var y=Object.defineProperty,p=(o,t,i,C)=>{for(var e=void 0,a=o.length-1,n;a>=0;a--)(n=o[a])&&(e=n(t,i,e)||e);return e&&y(t,i,e),e};const d=class d extends h{constructor(){super(),this.checked=!1,this.indicator=b.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const t=this.closest(`${g}, ${E}`);return!t||!this.name?[]:Array.from(t.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(i=>{i!==this&&i.removeAttribute("checked")})}handleMouseClick(){this.disabled||this.checked||(this.updateOtherRadiosCheckedState(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`,t.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===m.RADIO?c`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticradio>
      `:l}renderCheckmarkIcon(){return this.indicator===m.CHECKMARK?c`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${A({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:l}render(){return c`
      <slot name="content">
        <div part="leading">
          ${this.renderStaticRadio()}
          <slot name="leading-controls"></slot>
          <div part="leading-text">
            ${this.getText("leading-text-primary-label",s.BODY_MIDSIZE_REGULAR,this.label)}
            ${this.getText("leading-text-secondary-label",s.BODY_SMALL_REGULAR,this.secondaryLabel)}
            ${this.getText("leading-text-tertiary-label",s.BODY_SMALL_REGULAR,this.tertiaryLabel)}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${this.getText("trailing-text-side-header",s.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
            ${this.getText("trailing-text-subline",s.BODY_SMALL_REGULAR,this.sublineText)}
          </div>
          <slot name="trailing-controls"></slot>
          ${this.renderCheckmarkIcon()}
        </div>
      </slot>
    `}};d.styles=[...h.styles,...v];let r=d;p([k({type:Boolean,reflect:!0})],r.prototype,"checked");p([k({type:String,reflect:!0})],r.prototype,"indicator");r.register(R);
