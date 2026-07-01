import"./index-D5lPBL37.js";import"./index-Ctao0Veh.js";import{N as u,R as f,k as c,r as n,aa as b,T as s,n as m}from"./iframe-BrN8x_Z0.js";import"./index-Cv5QeTSf.js";import{M as h}from"./menuitem.component-BGjv92S_.js";import{D as A,T as g,I as k,a as R}from"./menuitemradio.constants-CM2Zmxvb.js";import{b as E}from"./menupopover.constants-BgIrvh8P.js";import{a as T}from"./ControlTypeMixin-CaLTWc5n.js";const $=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,v=[$];var y=Object.defineProperty,p=(o,t,i,C)=>{for(var e=void 0,a=o.length-1,l;a>=0;a--)(l=o[a])&&(e=l(t,i,e)||e);return e&&y(t,i,e),e};const d=class d extends T(h){constructor(){super(),this.checked=!1,this.indicator=A.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const t=this.closest(`${g}, ${E}`);return!t||!this.name?[]:Array.from(t.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(i=>{i!==this&&i.removeAttribute("checked")})}handleMouseClick(){this.disabled||this.softDisabled||this.checked||(this.controlType!=="controlled"&&(this.updateOtherRadiosCheckedState(),this.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}click(){this.disabled||this.softDisabled||super.click()}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`,t.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===k.RADIO?c`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticradio>
      `:n}renderCheckmarkIcon(){return this.indicator===k.CHECKMARK?c`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${b({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:n}render(){return c`
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
    `}};d.styles=[...h.styles,...v];let r=d;p([m({type:Boolean,reflect:!0})],r.prototype,"checked");p([m({type:String,reflect:!0})],r.prototype,"indicator");r.register(R);
