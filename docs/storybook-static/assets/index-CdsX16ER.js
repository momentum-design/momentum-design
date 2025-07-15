import"./index-BhzInYPc.js";import"./index-CwOUlZsc.js";import{T as p}from"./toggle.constants-lVWoo80n.js";import{T as i}from"./index-BrLJ_9IK.js";import"./index-DPX8nO8h.js";import{i as u,k as c,D as o}from"./lit-element-D5KKan5q.js";import{u as E,n as k}from"./index-C9z9WAEj.js";import{R as C}from"./roles-BH_hBfTz.js";import{M as g}from"./menuitem.component-BMelh1qR.js";const b=E.constructTagName("menuitemcheckbox"),r={NONE:"none",CHECKBOX:"checkbox",CHECKMARK:"checkmark",TOGGLE:"toggle"},T={INDICATOR:r.CHECKBOX},f=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,x=[f];var L=Object.defineProperty,m=(n,t,d,O)=>{for(var e=void 0,a=n.length-1,h;a>=0;a--)(h=n[a])&&(e=h(t,d,e)||e);return e&&L(t,d,e),e};const l=class l extends g{constructor(){super(),this.checked=!1,this.indicator=T.INDICATOR,this.handleMouseClick=t=>{t.stopPropagation(),!this.disabled&&(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},this.addEventListener("click",this.handleMouseClick)}connectedCallback(){super.connectedCallback(),this.role=C.MENUITEMCHECKBOX}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===r.CHECKBOX?c`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>
      `:o}staticToggle(){return this.indicator===r.TOGGLE?c`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          size="${p.COMPACT}"
        ></mdc-statictoggle>
      `:o}getCheckmarkIcon(){return this.checked&&this.indicator===r.CHECKMARK?c` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `:o}render(){return c`
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
    `}};l.styles=[...g.styles,...x];let s=l;m([k({type:Boolean,reflect:!0})],s.prototype,"checked");m([k({type:String,reflect:!0})],s.prototype,"indicator");s.register(b);export{r as I};
