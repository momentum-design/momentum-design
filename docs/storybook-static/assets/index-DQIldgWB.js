import"./index-CAqEkK81.js";import"./index-IctbibX3.js";import"./index-DeEenWCE.js";import{i as p,k as h}from"./lit-element-D5KKan5q.js";import{o as d}from"./query-assigned-elements-uEuc3rg8.js";import{t as m}from"./if-defined-D5BV9-c0.js";import{R as u}from"./roles-CJI3JVG-.js";import{A as l}from"./accordionbutton.component-qkklNgCj.js";import{B as f,I as v}from"./button.constants-BBlkZKjZ.js";import{u as g}from"./provider.component-DrWB4byV.js";const b=p`
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
`,$=[b];var T=Object.defineProperty,c=(a,e,r,A)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(e,r,t)||t);return t&&T(e,r,t),t};const s=class s extends l{update(e){super.update(e),e.has("disabled")&&[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(r=>{this.disabled?r.setAttribute("disabled",""):r.removeAttribute("disabled")})}renderHeader(){return h`
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
            title="${m(this.headerText)}"
            prefix-icon="${this.getArrowIconName()}"
            variant="${f.TERTIARY}"
            size="${v[20]}"
          ></mdc-button>
        </div>
      </div>
    `}};s.styles=[...l.styles,...$];let i=s;c([d({slot:"leading-controls"})],i.prototype,"leadingControlsSlot");c([d({slot:"trailing-controls"})],i.prototype,"trailingControlsSlot");const _=g.constructTagName("accordion");i.register(_);export{_ as T};
