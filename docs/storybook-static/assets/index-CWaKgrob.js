import"./index-BxtG-J7_.js";import"./index-D7qh9X_j.js";import{U as i,k as o,R as a,u as l}from"./iframe-Zf8S4XXr.js";import"./index-CHUmLE_A.js";import{t as d}from"./if-defined-BQWJj0RV.js";import{D as n}from"./DataAriaLabelMixin-DveGvTLx.js";import{F as r}from"./formfieldwrapper.component-DGftBtLy.js";import{D as s}from"./formfieldwrapper.constants-2ozCuejz.js";const p=i`
  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  :host::part(group-header) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`,c=[p],t=class t extends n(r){constructor(){super(...arguments),this.isRadio=!1}connectedCallback(){super.connectedCallback(),this.shouldRenderLabel=!1,this.disabled=void 0}render(){return o`
      <div
        part="container"
        role="${this.isRadio?a.RADIOGROUP:a.GROUP}"
        aria-labelledby="${s.HEADING_ID}"
        aria-describedby="${d(this.helpText?s.HELPER_TEXT_ID:"")}"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
        <slot></slot>
      </div>
    `}};t.styles=[...r.styles,...c];let e=t;const m=l.constructTagName("formfieldgroup");e.register(m);export{e as F};
