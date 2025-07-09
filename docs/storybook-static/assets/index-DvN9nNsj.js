import"./index-CcH9QAPT.js";import"./index-Cdz8MLaY.js";import{T as a,V as _}from"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import{i as k,k as d,D as p}from"./lit-element-D5KKan5q.js";import{n,C as u}from"./index-C9z9WAEj.js";import{R as g}from"./roles-BH_hBfTz.js";import{M as b}from"./menuitem.component-BgZCFiCE.js";import{T}from"./menusection.constants-BCYXL6dH.js";import{T as $}from"./menupopover.constants-Df21F9dQ.js";import{D as y,I as f,T as v}from"./menuitemradio.constants-CPWIpsqE.js";const R=k`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,E=[R];var C=Object.defineProperty,A=(s,e,r,L)=>{for(var t=void 0,i=s.length-1,l;i>=0;i--)(l=s[i])&&(t=l(e,r,t)||t);return t&&C(e,r,t),t};const h=class h extends b{constructor(){super(),this.checked=!1,this.indicator=y.INDICATOR,this.handleMouseClick=e=>{e.stopPropagation(),!(this.disabled||this.checked)&&(this.updateOtherRadiosCheckedState(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},this.addEventListener("click",this.handleMouseClick)}connectedCallback(){super.connectedCallback(),this.role=g.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const e=this.closest(`${T}, ${$}`);return!e||!this.name?[]:Array.from(e.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(r=>{r!==this&&r.removeAttribute("checked")})}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`,e.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===f.RADIO?d`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      `:p}renderCheckmarkIcon(){return this.checked&&this.indicator===f.CHECKMARK?d` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `:p}render(){return d`
      <div part="leading">
        ${this.renderStaticRadio()}
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",a.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",a.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",a.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",a.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",a.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
        ${this.renderCheckmarkIcon()}
      </div>
    `}};h.styles=[...b.styles,...E];let c=h;A([n({type:Boolean,reflect:!0})],c.prototype,"checked");A([n({type:String,reflect:!0})],c.prototype,"indicator");c.register(v);const D=k`
  :host > .mdc-menusection__label {
    padding: 0.5rem 0.75rem;
  }

  ::slotted(mdc-divider) {
    margin-block: 0.25rem;
  }
`,O=[D];var I=Object.defineProperty,x=(s,e,r,L)=>{for(var t=void 0,i=s.length-1,l;i>=0;i--)(l=s[i])&&(t=l(e,r,t)||t);return t&&I(e,r,t),t};const m=class m extends u{constructor(){super(...arguments),this.ariaLabel=null,this.headerText=null}connectedCallback(){super.connectedCallback(),this.setAttribute("role",g.GROUP)}update(e){super.update(e),(e.has("ariaLabel")||e.has("headerText"))&&(!this.ariaLabel||this.ariaLabel===e.get("headerText"))&&(this.ariaLabel=this.headerText||"")}renderLabel(){return this.headerText?d`<mdc-text part="header-text" type=${a.BODY_MIDSIZE_BOLD} tagname=${_.DIV}>
        ${this.headerText}
      </mdc-text> `:null}render(){return d`${this.renderLabel()}<slot></slot>`}};m.styles=[...u.styles,...O];let o=m;x([n({type:String,reflect:!0,attribute:"aria-label"})],o.prototype,"ariaLabel");x([n({type:String,reflect:!0,attribute:"header-text"})],o.prototype,"headerText");o.register(T);
