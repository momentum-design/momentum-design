import"./index-DM419G9w.js";import"./index-C-a6jsM_.js";import{a4 as g,k as d,t as b,B as v,I as m,z as h,R as f,n as c,u as T}from"./iframe-CYZ064vw.js";import{o as u}from"./query-assigned-elements-D2XoKueq.js";import{A as p,T as $}from"./accordionbutton.component-DR9UIN-n.js";const A=g`
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
`,y=[A];var I=Object.defineProperty,r=(n,t,a,B)=>{for(var o=void 0,i=n.length-1,l;i>=0;i--)(l=n[i])&&(o=l(t,a,o)||o);return o&&I(t,a,o),o};const s=class s extends p{handleHeaderShownEvent(t){t.stopPropagation()}update(t){super.update(t),t.has("disabled")&&[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(a=>{this.disabled?a.setAttribute("disabled",""):a.removeAttribute("disabled")})}renderToggleButton(){return d`
      <mdc-button
        part="toggle-button"
        ?disabled="${this.disabled}"
        @click="${this.handleHeaderClick}"
        aria-controls="${this.bodySectionId}"
        aria-expanded="${this.expanded}"
        aria-label="${b(this.expanded?this.closeButtonAriaLabel:this.openButtonAriaLabel)}"
        prefix-icon="${this.getArrowIconName()}"
        variant="${v.TERTIARY}"
        size="${m[20]}"
      ></mdc-button>
    `}renderHeader(){const t=this.togglePosition===$.LEADING;return d`
      <div part="header-section" @shown="${this.handleHeaderShownEvent}">
        <div part="leading-header">
          ${t?this.renderToggleButton():h} ${this.renderIcon(this.prefixIcon)}
          <div role="${f.HEADING}" aria-level="${this.dataAriaLevel}">
            <slot name="leading-header-text">${this.renderHeadingText()}</slot>
          </div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          ${t?h:this.renderToggleButton()}
        </div>
      </div>
    `}};s.styles=[...p.styles,...y];let e=s;r([u({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");r([u({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");r([c({type:String,attribute:"open-button-aria-label",reflect:!0})],e.prototype,"openButtonAriaLabel");r([c({type:String,attribute:"close-button-aria-label",reflect:!0})],e.prototype,"closeButtonAriaLabel");const S=T.constructTagName("accordion");e.register(S);export{S as T};
