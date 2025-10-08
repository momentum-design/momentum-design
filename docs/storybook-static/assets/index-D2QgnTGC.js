import"./index-W2b61mwu.js";import"./index-C89dEGRO.js";import{S as h,k as p,W as u,B as m,I as v,u as g}from"./iframe-DWK8UCtP.js";import{o as d}from"./query-assigned-elements-uEuc3rg8.js";import{t as b}from"./if-defined-52D-HVLI.js";import{A as l}from"./accordionbutton.component-BYTepGZf.js";const f=h`
  :host::part(header-section) {
    display: flex;
    align-items: center;
    cursor: unset;
    justify-content: space-between;
  }
  :host::part(header-section):hover,
  :host::part(header-section):active {
    background-color: unset;
  }
  :host::part(trailing-header__button) {
    margin: 0.125rem;
  }
`,$=[f];var T=Object.defineProperty,c=(o,e,i,A)=>{for(var t=void 0,s=o.length-1,n;s>=0;s--)(n=o[s])&&(t=n(e,i,t)||t);return t&&T(e,i,t),t};const a=class a extends l{update(e){super.update(e),e.has("disabled")&&[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(i=>{this.disabled?i.setAttribute("disabled",""):i.removeAttribute("disabled")})}renderHeader(){return p`
      <div part="header-section">
        <div part="leading-header">
          ${this.renderIcon(this.prefixIcon)}
          <div role="${u.HEADING}" aria-level="${this.dataAriaLevel}">${this.renderHeadingText()}</div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          <mdc-button
            part="trailing-header__button"
            ?disabled="${this.disabled}"
            @click="${this.handleHeaderClick}"
            aria-controls="${this.bodySectionId}"
            aria-expanded="${this.expanded}"
            title="${b(this.headerText)}"
            prefix-icon="${this.getArrowIconName()}"
            variant="${m.TERTIARY}"
            size="${v[20]}"
          ></mdc-button>
        </div>
      </div>
    `}};a.styles=[...l.styles,...$];let r=a;c([d({slot:"leading-controls"})],r.prototype,"leadingControlsSlot");c([d({slot:"trailing-controls"})],r.prototype,"trailingControlsSlot");const _=g.constructTagName("accordion");r.register(_);export{_ as T};
