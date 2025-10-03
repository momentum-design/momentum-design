import"./index-BMN--PIx.js";import"./index-8oex4yMZ.js";import{T as u}from"./toggle.constants-BxCXKLBX.js";import{n as h,S as f,W as b,k as n,h as o,q as a}from"./iframe-Bmqk5ncS.js";import"./index-CZK9p1cf.js";import{R as v}from"./class-map-CovSBtMu.js";import{M as p}from"./menuitem.component-ClNtMFJw.js";import{D as C,I as d,T as E}from"./menuitemcheckbox.constants-DhulObrc.js";var x=Object.defineProperty,T=(i,e,r,m)=>{for(var t=void 0,s=i.length-1,c;s>=0;s--)(c=i[s])&&(t=c(e,r,t)||t);return t&&x(e,r,t),t};const _=i=>{class e extends i{}return T([h({reflect:!0,type:Boolean})],e.prototype,"controlled"),e},L=f`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,$=[L];var y=Object.defineProperty,g=(i,e,r,m)=>{for(var t=void 0,s=i.length-1,c;s>=0;s--)(c=i[s])&&(t=c(e,r,t)||t);return t&&y(e,r,t),t};const k=class k extends _(p){constructor(){super(),this.checked=!1,this.indicator=C.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=b.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||(this.controlled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===d.CHECKBOX?n`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>
      `:o}staticToggle(){return this.indicator===d.TOGGLE?n`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          size="${u.COMPACT}"
        ></mdc-statictoggle>
      `:o}getCheckmarkIcon(){return this.indicator===d.CHECKMARK?n`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${v({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:o}render(){return n`
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
    `}};k.styles=[...p.styles,...$];let l=k;g([h({type:Boolean,reflect:!0})],l.prototype,"checked");g([h({type:String,reflect:!0})],l.prototype,"indicator");l.register(E);
