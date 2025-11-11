import"./index-C2aLJ8Az.js";import"./index-Dpk1082Q.js";import{S as h,k as u,W as b,B as g,I as m,n as p,u as v}from"./iframe-CuUJoUXQ.js";import{o as c}from"./query-assigned-elements-uEuc3rg8.js";import{t as f}from"./if-defined-DatWz75s.js";import{A as d}from"./accordionbutton.component-DHFeX8eX.js";const A=h`
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
`,y=[A];var $=Object.defineProperty,i=(n,r,a,T)=>{for(var e=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(e=l(r,a,e)||e);return e&&$(r,a,e),e};const s=class s extends d{update(r){super.update(r),r.has("disabled")&&[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(a=>{this.disabled?a.setAttribute("disabled",""):a.removeAttribute("disabled")})}renderHeader(){return u`
      <div part="header-section">
        <div part="leading-header">
          ${this.renderIcon(this.prefixIcon)}
          <div role="${b.HEADING}" aria-level="${this.dataAriaLevel}">${this.renderHeadingText()}</div>
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
            aria-label="${f(this.expanded?this.closeButtonAriaLabel:this.openButtonAriaLabel)}"
            prefix-icon="${this.getArrowIconName()}"
            variant="${g.TERTIARY}"
            size="${m[20]}"
          ></mdc-button>
        </div>
      </div>
    `}};s.styles=[...d.styles,...y];let t=s;i([c({slot:"leading-controls"})],t.prototype,"leadingControlsSlot");i([c({slot:"trailing-controls"})],t.prototype,"trailingControlsSlot");i([p({type:String,attribute:"open-button-aria-label",reflect:!0})],t.prototype,"openButtonAriaLabel");i([p({type:String,attribute:"close-button-aria-label",reflect:!0})],t.prototype,"closeButtonAriaLabel");const S=v.constructTagName("accordion");t.register(S);export{S as T};
