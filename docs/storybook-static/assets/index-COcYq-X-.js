import"./index-Dx-dfjAZ.js";import"./index-BVSZdchm.js";import{T as g}from"./toggle.constants-D1v9Njxk.js";import{S as b,W as f,k as r,h as c,q as i,n as m}from"./iframe-BsXEur3E.js";import"./index-DDxWKM8V.js";import{R as u}from"./class-map-sCk-uBxI.js";import{M as k}from"./menuitem.component-zsBSZs4K.js";import{a as E}from"./ControlTypeMixin-DG6x5TYE.js";import{D as T,I as o,T as C}from"./menuitemcheckbox.constants-D0pkfYjb.js";const x=b`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,L=[x];var $=Object.defineProperty,p=(d,e,n,v)=>{for(var t=void 0,a=d.length-1,h;a>=0;a--)(h=d[a])&&(t=h(e,n,t)||t);return t&&$(e,n,t),t};const l=class l extends E(k){constructor(){super(),this.checked=!1,this.indicator=T.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||this.softDisabled||(this.controlType!=="controlled"&&(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===o.CHECKBOX?r`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticcheckbox>
      `:c}staticToggle(){return this.indicator===o.TOGGLE?r`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
          size="${g.COMPACT}"
        ></mdc-statictoggle>
      `:c}getCheckmarkIcon(){return this.indicator===o.CHECKMARK?r`
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
    `}};l.styles=[...k.styles,...L];let s=l;p([m({type:Boolean,reflect:!0})],s.prototype,"checked");p([m({type:String,reflect:!0})],s.prototype,"indicator");s.register(C);
