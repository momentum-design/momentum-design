import"./index-mTcDoloB.js";import"./index-h9_tRwXI.js";import{T as k}from"./toggle.constants-Bix3Z15e.js";import{T as i}from"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import{i as u,D as a,k as r}from"./lit-element-D5KKan5q.js";import{n as p}from"./index-C9z9WAEj.js";import{R as b}from"./roles-BH_hBfTz.js";import{M as m}from"./menuitem.component-C82Go1iM.js";import{D as E,I as o,T as f}from"./menuitemcheckbox.constants-DmrkQGAP.js";const T=u`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,x=[T];var C=Object.defineProperty,g=(n,t,d,L)=>{for(var e=void 0,c=n.length-1,h;c>=0;c--)(h=n[c])&&(e=h(t,d,e)||e);return e&&C(t,d,e),e};const l=class l extends m{constructor(){super(),this.checked=!1,this.indicator=E.INDICATOR,this.menuitemcheckboxHandleClick=t=>{t.stopPropagation(),!this.disabled&&(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},this.addEventListener("click",this.menuitemcheckboxHandleClick)}connectedCallback(){super.connectedCallback(),this.role=b.MENUITEMCHECKBOX}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=`${this.checked}`)}staticCheckbox(){return this.indicator!==o.CHECKBOX?a:r`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
    `}staticToggle(){return this.indicator!==o.TOGGLE?a:r`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        size="${k.COMPACT}"
      ></mdc-statictoggle>
    `}getCheckmarkIcon(){return this.checked&&this.indicator===o.CHECKMARK?r` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `:a}render(){return r`
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
    `}};l.styles=[...m.styles,...x];let s=l;g([p({type:Boolean,reflect:!0})],s.prototype,"checked");g([p({type:String,reflect:!0})],s.prototype,"indicator");s.register(f);
