import"./index-k8oNqj63.js";import"./index-D0t9CQJ_.js";import{T as f}from"./toggle.constants-PeEgg6A2.js";import{n as h,S as b,W as u,k as o,h as n,q as c}from"./iframe-CUghFjdA.js";import"./index-DgAG9eSD.js";import{R as v}from"./class-map-vE50TEmV.js";import{M as p}from"./menuitem.component-BPoyRvlK.js";import{D as C,I as d,T as E}from"./menuitemcheckbox.constants-AmCzujqC.js";var x=Object.defineProperty,T=(i,e,r,m)=>{for(var t=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(t=a(e,r,t)||t);return t&&x(e,r,t),t};const $=i=>{class e extends i{}return T([h({reflect:!0,type:Boolean})],e.prototype,"controlled"),e},_=b`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,L=[_];var y=Object.defineProperty,g=(i,e,r,m)=>{for(var t=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(t=a(e,r,t)||t);return t&&y(e,r,t),t};const k=class k extends $(p){constructor(){super(),this.checked=!1,this.indicator=C.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=u.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||(this.controlled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===d.CHECKBOX?o`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticcheckbox>
      `:n}staticToggle(){return this.indicator===d.TOGGLE?o`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
          size="${f.COMPACT}"
        ></mdc-statictoggle>
      `:n}getCheckmarkIcon(){return this.indicator===d.CHECKMARK?o`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${v({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:n}render(){return o`
      <slot name="content">
        <div part="leading">
          ${this.staticCheckbox()}
          <slot name="leading-controls"></slot>
          <div part="leading-text">
            ${this.getText("leading-text-primary-label",c.BODY_MIDSIZE_REGULAR,this.label)}
            ${this.getText("leading-text-secondary-label",c.BODY_SMALL_REGULAR,this.secondaryLabel)}
            ${this.getText("leading-text-tertiary-label",c.BODY_SMALL_REGULAR,this.tertiaryLabel)}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${this.getText("trailing-text-side-header",c.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
            ${this.getText("trailing-text-subline",c.BODY_SMALL_REGULAR,this.sublineText)}
          </div>
          <slot name="trailing-controls"></slot>
          ${this.staticToggle()} ${this.getCheckmarkIcon()}
        </div>
      </slot>
    `}};k.styles=[...p.styles,...L];let l=k;g([h({type:Boolean,reflect:!0})],l.prototype,"checked");g([h({type:String,reflect:!0})],l.prototype,"indicator");l.register(E);
