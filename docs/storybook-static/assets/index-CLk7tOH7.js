import"./index-0G_NhWFj.js";import"./index-BGBZ2JQF.js";import{T as g}from"./toggle.constants-Cs8e1d41.js";import{N as m,R as f,k as r,r as c,aa as u,T as i,n as p}from"./iframe-BhffW2JT.js";import"./index-B4_BNy4Q.js";import{M as k}from"./menuitem.component-DP06mdPk.js";import{a as T}from"./ControlTypeMixin-mHh8G7JD.js";import{D as E,I as l,T as C}from"./menuitemcheckbox.constants-BRe2JkeZ.js";const x=m`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,L=[x];var $=Object.defineProperty,b=(d,e,n,v)=>{for(var t=void 0,a=d.length-1,h;a>=0;a--)(h=d[a])&&(t=h(e,n,t)||t);return t&&$(e,n,t),t};const o=class o extends T(k){constructor(){super(),this.checked=!1,this.indicator=E.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||this.softDisabled||(this.controlType!=="controlled"&&(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}click(){this.disabled||this.softDisabled||super.click()}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===l.CHECKBOX?r`
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
          size="${g.COMPACT}"
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
    `}};o.styles=[...k.styles,...L];let s=o;b([p({type:Boolean,reflect:!0})],s.prototype,"checked");b([p({type:String,reflect:!0})],s.prototype,"indicator");s.register(C);
