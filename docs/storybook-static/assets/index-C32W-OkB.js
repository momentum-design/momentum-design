import"./index-BfDwIRea.js";import"./index-DkpPdBRj.js";import{T as g}from"./toggle.constants-C3dGJVF9.js";import{S as m,R as f,k as c,v as a,ac as u,T as i,n as p}from"./iframe-D5qwq8cl.js";import"./index-BeiOiDoq.js";import{M as k}from"./menuitem.component-Bh5ZKuuc.js";import{a as T}from"./ControlTypeMixin-CZet9tp6.js";import{D as E,I as l,T as C}from"./menuitemcheckbox.constants-D8uLtDnP.js";const v=m`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,x=[v];var L=Object.defineProperty,b=(d,e,n,$)=>{for(var t=void 0,r=d.length-1,h;r>=0;r--)(h=d[r])&&(t=h(e,n,t)||t);return t&&L(e,n,t),t};const o=class o extends T(k){constructor(){super(),this.checked=!1,this.indicator=E.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||this.softDisabled||(this.controlType!=="controlled"&&(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}click(){this.disabled||this.softDisabled||super.click()}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===l.CHECKBOX?c`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticcheckbox>
      `:a}staticToggle(){return this.indicator===l.TOGGLE?c`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
          size="${g.COMPACT}"
        ></mdc-statictoggle>
      `:a}getCheckmarkIcon(){return this.indicator===l.CHECKMARK?c`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${u({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:a}render(){return c`
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
    `}};o.styles=[...k.styles,...x];let s=o;b([p({type:Boolean,reflect:!0})],s.prototype,"checked");b([p({type:String,reflect:!0})],s.prototype,"indicator");s.register(C);
