import"./index-CvI8uLgO.js";import"./index-Cdz8MLaY.js";import{T as l}from"./index-BrLJ_9IK.js";import"./index-C1oDvCyf.js";import{i as x,k as d,D as m}from"./lit-element-D5KKan5q.js";import{n,C as f}from"./index-C9z9WAEj.js";import{R as g}from"./roles-BH_hBfTz.js";import{M as k}from"./menuitem.component-D7F5qKBY.js";import{T as y}from"./menusection.constants-BCYXL6dH.js";import{T as $}from"./menupopover.constants-CVQbBb-g.js";import{D as v,I as b,T as R}from"./menuitemradio.constants-CPWIpsqE.js";import{t as L}from"./if-defined-D5BV9-c0.js";import"./index-DhZg2np4.js";const C=x`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,E=[C];var _=Object.defineProperty,A=(s,e,r,T)=>{for(var t=void 0,i=s.length-1,o;i>=0;i--)(o=s[i])&&(t=o(e,r,t)||t);return t&&_(e,r,t),t};const p=class p extends k{constructor(){super(),this.checked=!1,this.indicator=v.INDICATOR,this.handleMouseClick=e=>{e.stopPropagation(),!(this.disabled||this.checked)&&(this.updateOtherRadiosCheckedState(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},this.addEventListener("click",this.handleMouseClick)}connectedCallback(){super.connectedCallback(),this.role=g.MENUITEMRADIO}getAllRadiosWithinSameGroup(){const e=this.closest(`${y}, ${$}`);return!e||!this.name?[]:Array.from(e.querySelectorAll(`${this.tagName}[name="${this.name}"]`))}updateOtherRadiosCheckedState(){this.getAllRadiosWithinSameGroup().forEach(r=>{r!==this&&r.removeAttribute("checked")})}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`,e.get("checked")===!1&&this.checked&&this.updateOtherRadiosCheckedState())}renderStaticRadio(){return this.indicator===b.RADIO?d`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      `:m}renderCheckmarkIcon(){return this.checked&&this.indicator===b.CHECKMARK?d` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `:m}render(){return d`
      <div part="leading">
        ${this.renderStaticRadio()}
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",l.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",l.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",l.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",l.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",l.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
        ${this.renderCheckmarkIcon()}
      </div>
    `}};p.styles=[...k.styles,...E];let c=p;A([n({type:Boolean,reflect:!0})],c.prototype,"checked");A([n({type:String,reflect:!0})],c.prototype,"indicator");c.register(R);const O=x`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  ::slotted(mdc-divider) {
    margin-block: 0.25rem;
  }
`,S=[O];var I=Object.defineProperty,h=(s,e,r,T)=>{for(var t=void 0,i=s.length-1,o;i>=0;i--)(o=s[i])&&(t=o(e,r,t)||t);return t&&I(e,r,t),t};const u=class u extends f{constructor(){super(...arguments),this.ariaLabel=null,this.headerText=null}connectedCallback(){super.connectedCallback(),this.setAttribute("role",g.GROUP)}update(e){super.update(e),(e.has("ariaLabel")||e.has("headerText"))&&(!this.ariaLabel||this.ariaLabel===e.get("headerText"))&&(this.ariaLabel=this.headerText||"")}renderHeader(){return this.headerText?d` <mdc-listheader
        part="header"
        header-text="${this.headerText}"
        prefix-icon="${L(this.prefixIcon)}"
      >
      </mdc-listheader>`:null}render(){return d`${this.renderHeader()}<slot></slot>`}};u.styles=[...f.styles,...S];let a=u;h([n({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");h([n({type:String,reflect:!0,attribute:"header-text"})],a.prototype,"headerText");h([n({type:String,attribute:"prefix-icon"})],a.prototype,"prefixIcon");a.register(y);
