import"./index-e7Hr9HFt.js";import"./index-DCiSxwIL.js";import{T as f}from"./toggle.constants-AKAazT2w.js";import{T as a}from"./index-DHsMOcdX.js";import"./index-DQ1Hv4sq.js";import{i as u,k as l,D as n}from"./lit-element-D5KKan5q.js";import{n as h}from"./provider.component-BaQC7CJH.js";import{R as b}from"./class-map-BcCVsMyu.js";import{R as v}from"./roles-CJI3JVG-.js";import{M as p}from"./menuitem.component-Dws3iiL_.js";import{D as C,I as d,T as E}from"./menuitemcheckbox.constants-CWk8F82j.js";var T=Object.defineProperty,x=(i,e,s,g)=>{for(var t=void 0,r=i.length-1,c;r>=0;r--)(c=i[r])&&(t=c(e,s,t)||t);return t&&T(e,s,t),t};const _=i=>{class e extends i{}return x([h({reflect:!0,type:Boolean})],e.prototype,"controlled"),e},L=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,$=[L];var R=Object.defineProperty,k=(i,e,s,g)=>{for(var t=void 0,r=i.length-1,c;r>=0;r--)(c=i[r])&&(t=c(e,s,t)||t);return t&&R(e,s,t),t};const m=class m extends _(p){constructor(){super(),this.checked=!1,this.indicator=C.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=v.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||(this.controlled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===d.CHECKBOX?l`
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
          size="${f.COMPACT}"
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
    `}};m.styles=[...p.styles,...$];let o=m;k([h({type:Boolean,reflect:!0})],o.prototype,"checked");k([h({type:String,reflect:!0})],o.prototype,"indicator");o.register(E);
