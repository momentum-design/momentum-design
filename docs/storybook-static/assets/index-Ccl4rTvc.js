import"./index-Dnx6etS4.js";import"./index-DXK1NqDr.js";import{S as i,k as o,W as a,u as l}from"./iframe-D4-7yPtR.js";import"./index-B9oFsK2L.js";import{t as d}from"./if-defined-ClFTYvOP.js";import{D as n}from"./DataAriaLabelMixin-DyyI_9zZ.js";import{F as r}from"./formfieldwrapper.component-KLDuKJS3.js";import{D as s}from"./formfieldwrapper.constants-DE35OIE7.js";const p=i`
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
