import"./index-SmfaqG6U.js";import"./index-DKLnbJ4p.js";import{S as u,W as f,k as c,h as l,q as s,n as k}from"./iframe-ACfHlgAt.js";import"./index-B0oHHZPr.js";import{R as b}from"./class-map--qQ2BEgB.js";import{M as h}from"./menuitem.component-DJOLP5zr.js";import{D as A,T as g,I as m,a as R}from"./menuitemradio.constants-BC9Q2brZ.js";import{b as E}from"./menupopover.constants-BMdKdHYz.js";import{a as $}from"./ControlTypeMixin-BBWu60PZ.js";const v=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,y=[v];var T=Object.defineProperty,p=(d,t,i,C)=>{for(var e=void 0,a=d.length-1,n;a>=0;a--)(n=d[a])&&(e=n(t,i,e)||e);return e&&T(t,i,e),e};const o=class o extends $(h){constructor(){super(),this.checked=!1,this.indicator=A.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const t=this.closest(`${g}, ${E}`);return!t||!this.name?[]:Array.from(t.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(i=>{i!==this&&i.removeAttribute("checked")})}handleMouseClick(){this.disabled||this.softDisabled||this.checked||(this.controlType!=="controlled"&&(this.updateOtherRadiosCheckedState(),this.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`,t.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===m.RADIO?c`
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
          class=${b({"hidden-checkmark":!this.checked})}
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
    `}};o.styles=[...h.styles,...y];let r=o;p([k({type:Boolean,reflect:!0})],r.prototype,"checked");p([k({type:String,reflect:!0})],r.prototype,"indicator");r.register(R);
