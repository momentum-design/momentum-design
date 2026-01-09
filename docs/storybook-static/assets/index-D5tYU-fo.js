import"./index-toVq1Tkh.js";import"./index-DWz9H2Ut.js";import{U as i,k as o,R as a,u as l}from"./iframe-Cj4hrJdq.js";import"./index-BUqO2U5m.js";import{t as d}from"./if-defined-BxiUPb8k.js";import{D as n}from"./DataAriaLabelMixin-Zm4r-97w.js";import{F as r}from"./formfieldwrapper.component-BaZr4A-g.js";import{D as s}from"./formfieldwrapper.constants-BMN7tRZT.js";const p=i`
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
