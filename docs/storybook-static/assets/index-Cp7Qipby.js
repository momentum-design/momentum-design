import"./index-D2sA77vY.js";import"./index-XThTXGxI.js";import{T as b}from"./toggle.constants-C9553ady.js";import{u as x,a2 as k,a3 as _,n as a,S as E,W as O,k as l,h as d,q as n}from"./iframe-DmLJKHqi.js";import"./index-Cfpl9WAt.js";import{R as $}from"./class-map-BoIg4a81.js";import{M as f}from"./menuitem.component-BoXo9gIr.js";import{p as L}from"./index-DGGYU7tf.js";import{D as A,I as h,T as R}from"./menuitemcheckbox.constants-kox2YR9i.js";const g=x.constructTagName("controltypeprovider"),v={CONTROL_TYPE:"uncontrolled"},C=["controlled","uncontrolled"],y=k(g);var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,M=(r,e,s,T)=>{for(var t=P(e,s),i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=o(e,s,t)||t);return t&&D(e,s,t),t};class p extends _{constructor(){super({context:y}),this.innerControlType=v.CONTROL_TYPE}static get Context(){return y}set controlType(e){C.includes(e)&&(this.innerControlType=e)}get controlType(){return this.innerControlType}updateContext(){this.context.value!==this.controlType&&(this.context.value=this.controlType,this.context.updateObservers())}}M([a({type:String,attribute:"control-type",reflect:!0})],p.prototype,"controlType");p.register(g);var I=Object.defineProperty,S=(r,e,s,T)=>{for(var t=void 0,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=o(e,s,t)||t);return t&&I(e,s,t),t};const G=r=>{class e extends r{constructor(){super(...arguments),this.controlTypeProviderContext=L.consume({host:this,context:p.Context})}willUpdate(){this.controlType&&C.includes(this.controlType)||(this.controlTypeProviderContext.value?this.controlType=this.controlTypeProviderContext.value:this.controlType=v.CONTROL_TYPE)}}return S([a({type:String,attribute:"control-type",reflect:!0})],e.prototype,"controlType"),e},U=E`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,N=[U];var Y=Object.defineProperty,m=(r,e,s,T)=>{for(var t=void 0,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=o(e,s,t)||t);return t&&Y(e,s,t),t};const u=class u extends G(f){constructor(){super(),this.checked=!1,this.indicator=A.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=O.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||(this.controlType!=="controlled"&&(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===h.CHECKBOX?l`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        ></mdc-staticcheckbox>
      `:d}staticToggle(){return this.indicator===h.TOGGLE?l`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
          size="${b.COMPACT}"
        ></mdc-statictoggle>
      `:d}getCheckmarkIcon(){return this.indicator===h.CHECKMARK?l`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${$({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:d}render(){return l`
      <slot name="content">
        <div part="leading">
          ${this.staticCheckbox()}
          <slot name="leading-controls"></slot>
          <div part="leading-text">
            ${this.getText("leading-text-primary-label",n.BODY_MIDSIZE_REGULAR,this.label)}
            ${this.getText("leading-text-secondary-label",n.BODY_SMALL_REGULAR,this.secondaryLabel)}
            ${this.getText("leading-text-tertiary-label",n.BODY_SMALL_REGULAR,this.tertiaryLabel)}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${this.getText("trailing-text-side-header",n.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
            ${this.getText("trailing-text-subline",n.BODY_SMALL_REGULAR,this.sublineText)}
          </div>
          <slot name="trailing-controls"></slot>
          ${this.staticToggle()} ${this.getCheckmarkIcon()}
        </div>
      </slot>
    `}};u.styles=[...f.styles,...N];let c=u;m([a({type:Boolean,reflect:!0})],c.prototype,"checked");m([a({type:String,reflect:!0})],c.prototype,"indicator");c.register(R);export{p as C};
