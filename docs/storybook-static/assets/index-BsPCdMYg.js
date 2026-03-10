import"./index-B9wm2aIu.js";import"./index-SjxeI1HO.js";import{a2 as g,k as d,B as b,I as v,h,R as m,n as c,u as f}from"./iframe-CXCCK7zk.js";import{o as u}from"./query-assigned-elements-D3DjPdCI.js";import{t as T}from"./if-defined-BuZDkRkv.js";import{A as p,T as $}from"./accordionbutton.component-ru-S1x0_.js";const A=g`
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
  :host::part(toggle-button) {
    margin: 0.125rem;
  }
`,y=[A];var I=Object.defineProperty,a=(n,t,r,B)=>{for(var o=void 0,i=n.length-1,l;i>=0;i--)(l=n[i])&&(o=l(t,r,o)||o);return o&&I(t,r,o),o};const s=class s extends p{handleHeaderShownEvent(t){t.stopPropagation()}update(t){super.update(t),t.has("disabled")&&[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(r=>{this.disabled?r.setAttribute("disabled",""):r.removeAttribute("disabled")})}renderToggleButton(){return d`
      <mdc-button
        part="toggle-button"
        ?disabled="${this.disabled}"
        @click="${this.handleHeaderClick}"
        aria-controls="${this.bodySectionId}"
        aria-expanded="${this.expanded}"
        aria-label="${T(this.expanded?this.closeButtonAriaLabel:this.openButtonAriaLabel)}"
        prefix-icon="${this.getArrowIconName()}"
        variant="${b.TERTIARY}"
        size="${v[20]}"
      ></mdc-button>
    `}renderHeader(){const t=this.togglePosition===$.LEADING;return d`
      <div part="header-section" @shown="${this.handleHeaderShownEvent}">
        <div part="leading-header">
          ${t?this.renderToggleButton():h} ${this.renderIcon(this.prefixIcon)}
          <div role="${m.HEADING}" aria-level="${this.dataAriaLevel}">
            <slot name="leading-header-text">${this.renderHeadingText()}</slot>
          </div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          ${t?h:this.renderToggleButton()}
        </div>
      </div>
    `}};s.styles=[...p.styles,...y];let e=s;a([u({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");a([u({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");a([c({type:String,attribute:"open-button-aria-label",reflect:!0})],e.prototype,"openButtonAriaLabel");a([c({type:String,attribute:"close-button-aria-label",reflect:!0})],e.prototype,"closeButtonAriaLabel");const S=f.constructTagName("accordion");e.register(S);export{S as T};
