import"./index-CfAVHUCC.js";import"./index-kcvCo2Ij.js";import{T as b}from"./toggle.constants-D2dV9Gh5.js";import{a2 as g,R as f,k as r,h as c,T as i,n as m}from"./iframe-Bm4Ct3z4.js";import"./index-BudxByu1.js";import{R as u}from"./class-map-m1Er3ru1.js";import{M as k}from"./menuitem.component-DWlzbXfM.js";import{a as T}from"./ControlTypeMixin-CFzcmCzA.js";import{D as E,I as l,T as C}from"./menuitemcheckbox.constants-2UD-FNSX.js";const x=g`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,L=[x];var $=Object.defineProperty,p=(d,e,n,v)=>{for(var t=void 0,a=d.length-1,h;a>=0;a--)(h=d[a])&&(t=h(e,n,t)||t);return t&&$(e,n,t),t};const o=class o extends T(k){constructor(){super(),this.checked=!1,this.indicator=E.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||this.softDisabled||(this.controlType!=="controlled"&&(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}click(){this.disabled||this.softDisabled||super.click()}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===l.CHECKBOX?r`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticcheckbox>
      `:c}staticToggle(){return this.indicator===l.TOGGLE?r`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
          size="${b.COMPACT}"
        ></mdc-statictoggle>
      `:c}getCheckmarkIcon(){return this.indicator===l.CHECKMARK?r`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${u({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:c}render(){return r`
      <slot name="content">
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
      </slot>
    `}};o.styles=[...k.styles,...L];let s=o;p([m({type:Boolean,reflect:!0})],s.prototype,"checked");p([m({type:String,reflect:!0})],s.prototype,"indicator");s.register(C);
