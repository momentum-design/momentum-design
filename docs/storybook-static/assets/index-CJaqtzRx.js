import"./index-Bru5oaFW.js";import"./index-DNweNtkz.js";import"./index-B0BwlIJd.js";import{i as p,k as h,u as m}from"./iframe-B0KTrzx9.js";import{o as d}from"./query-assigned-elements-uEuc3rg8.js";import{t as u}from"./if-defined-DNHI_5dY.js";import{R as v}from"./roles-CJI3JVG-.js";import{A as l}from"./accordionbutton.component-KvSz6LXz.js";import{B as f,I as g}from"./button.constants-sbSBQcQT.js";const b=p`
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
          <div role="${v.HEADING}" aria-level="${this.dataAriaLevel}">${this.renderHeadingText()}</div>
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
            title="${u(this.headerText)}"
            prefix-icon="${this.getArrowIconName()}"
            variant="${f.TERTIARY}"
            size="${g[20]}"
          ></mdc-button>
        </div>
      </div>
    `}};s.styles=[...l.styles,...$];let i=s;c([d({slot:"leading-controls"})],i.prototype,"leadingControlsSlot");c([d({slot:"trailing-controls"})],i.prototype,"trailingControlsSlot");const _=m.constructTagName("accordion");i.register(_);export{_ as T};
