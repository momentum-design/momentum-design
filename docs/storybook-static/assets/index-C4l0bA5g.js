import"./index-Cei0A94r.js";import"./index-CaxAZD-8.js";import{T as g}from"./toggle.constants-CJ4Th5YX.js";import{T as i}from"./index-DeEenWCE.js";import"./index-DM9rY9pk.js";import{i as u,k as r,D as a}from"./lit-element-D5KKan5q.js";import{n as k}from"./property-Bj3TGwkg.js";import{R as b}from"./class-map-BcCVsMyu.js";import{R as f}from"./roles-CJI3JVG-.js";import{M as m}from"./menuitem.component--hosc4Py.js";import{D as E,I as o,T}from"./menuitemcheckbox.constants-dhHMuWzH.js";const C=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
  :host .hidden-checkmark {
    visibility: hidden;
  }
`,L=[C];var v=Object.defineProperty,p=(d,e,n,x)=>{for(var t=void 0,c=d.length-1,h;c>=0;c--)(h=d[c])&&(t=h(e,n,t)||t);return t&&v(e,n,t),t};const l=class l extends m{constructor(){super(),this.checked=!1,this.indicator=E.INDICATOR,this.addEventListener("click",this.handleMouseClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMCHECKBOX}handleMouseClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===o.CHECKBOX?r`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>
      `:a}staticToggle(){return this.indicator===o.TOGGLE?r`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          size="${g.COMPACT}"
        ></mdc-statictoggle>
      `:a}getCheckmarkIcon(){return this.indicator===o.CHECKMARK?r`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${b({"hidden-checkmark":!this.checked})}
        ></mdc-icon>
      `:a}render(){return r`
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
    `}};l.styles=[...m.styles,...L];let s=l;p([k({type:Boolean,reflect:!0})],s.prototype,"checked");p([k({type:String,reflect:!0})],s.prototype,"indicator");s.register(T);
