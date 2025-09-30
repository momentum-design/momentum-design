import"./index-D-FiYTdm.js";import"./index-D9aIBAYM.js";import{T as u}from"./toggle.constants-CIE4cyjH.js";import{T as a}from"./index-CqfQTe1K.js";import"./index-COpAa2i6.js";import{n as h,i as f,k as l,D as n}from"./iframe-DSSNydaC.js";import{R as b}from"./class-map-DbwHE3Ui.js";import{R as v}from"./roles-CJI3JVG-.js";import{M as m}from"./menuitem.component-BNWD4JE4.js";import{D as C,I as d,T as E}from"./menuitemcheckbox.constants-K0cNgWKx.js";var T=Object.defineProperty,x=(i,e,r,g)=>{for(var t=void 0,s=i.length-1,c;s>=0;s--)(c=i[s])&&(t=c(e,r,t)||t);return t&&T(e,r,t),t};const _=i=>{class e extends i{}return x([h({reflect:!0,type:Boolean})],e.prototype,"controlled"),e},L=f`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,$=[L];var R=Object.defineProperty,k=(i,e,r,g)=>{for(var t=void 0,s=i.length-1,c;s>=0;s--)(c=i[s])&&(t=c(e,r,t)||t);return t&&R(e,r,t),t};const p=class p extends _(m){constructor(){super(),this.checked=!1,this.indicator=C.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=v.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||(this.controlled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===d.CHECKBOX?l`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>
      `:n}staticToggle(){return this.indicator===d.TOGGLE?l`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          size="${u.COMPACT}"
        ></mdc-statictoggle>
      `:n}getCheckmarkIcon(){return this.indicator===d.CHECKMARK?l`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${b({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:n}render(){return l`
      <slot name="content">
        <div part="leading">
          ${this.staticCheckbox()}
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
          ${this.staticToggle()} ${this.getCheckmarkIcon()}
        </div>
      </slot>
    `}};p.styles=[...m.styles,...$];let o=p;k([h({type:Boolean,reflect:!0})],o.prototype,"checked");k([h({type:String,reflect:!0})],o.prototype,"indicator");o.register(E);
