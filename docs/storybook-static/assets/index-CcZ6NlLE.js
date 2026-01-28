import"./index-BukzXrpm.js";import"./index-8eILrhn8.js";import{X as h,k as u,R as b,B as g,I as v,n as p,u as m}from"./iframe-CM5v7A9W.js";import{o as c}from"./query-assigned-elements-CpgEA_Ma.js";import{t as f}from"./if-defined-DgC6xmGR.js";import{A as d}from"./accordionbutton.component-D4GelflP.js";const A=h`
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
`,$=[A];var y=Object.defineProperty,i=(n,t,r,T)=>{for(var a=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(a=l(t,r,a)||a);return a&&y(t,r,a),a};const s=class s extends d{handleHeaderShownEvent(t){t.stopPropagation()}update(t){super.update(t),t.has("disabled")&&[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(r=>{this.disabled?r.setAttribute("disabled",""):r.removeAttribute("disabled")})}renderHeader(){return u`
      <div part="header-section" @shown="${this.handleHeaderShownEvent}">
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
            size="${v[20]}"
          ></mdc-button>
        </div>
      </div>
    `}};s.styles=[...d.styles,...$];let e=s;i([c({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");i([c({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");i([p({type:String,attribute:"open-button-aria-label",reflect:!0})],e.prototype,"openButtonAriaLabel");i([p({type:String,attribute:"close-button-aria-label",reflect:!0})],e.prototype,"closeButtonAriaLabel");const S=m.constructTagName("accordion");e.register(S);export{S as T};
