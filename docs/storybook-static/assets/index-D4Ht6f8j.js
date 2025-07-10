import"./index-D_ZheRMr.js";import"./index-B69xGNP2.js";import{T as k}from"./toggle.constants-CHiS92SL.js";import{T as i}from"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import{i as u,k as r,D as a}from"./lit-element-D5KKan5q.js";import{n as g}from"./index-C9z9WAEj.js";import{R as b}from"./roles-BH_hBfTz.js";import{M as p}from"./menuitem.component-BgZCFiCE.js";import{D as E,I as o,T as f}from"./menuitemcheckbox.constants-DmrkQGAP.js";const T=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,C=[T];var L=Object.defineProperty,m=(d,t,n,x)=>{for(var e=void 0,c=d.length-1,h;c>=0;c--)(h=d[c])&&(e=h(t,n,e)||e);return e&&L(t,n,e),e};const l=class l extends p{constructor(){super(),this.checked=!1,this.indicator=E.INDICATOR,this.handleMouseClick=t=>{t.stopPropagation(),!this.disabled&&(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},this.addEventListener("click",this.handleMouseClick)}connectedCallback(){super.connectedCallback(),this.role=b.MENUITEMCHECKBOX}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator===o.CHECKBOX?r`
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
          size="${k.COMPACT}"
        ></mdc-statictoggle>
      `:a}getCheckmarkIcon(){return this.checked&&this.indicator===o.CHECKMARK?r` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `:a}render(){return r`
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
    `}};l.styles=[...p.styles,...C];let s=l;m([g({type:Boolean,reflect:!0})],s.prototype,"checked");m([g({type:String,reflect:!0})],s.prototype,"indicator");s.register(f);
