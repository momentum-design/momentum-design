import"./index-YCvhlFMa.js";import"./index-ZSNJZ3qa.js";import{S as i,k as o,W as a,u as l}from"./iframe-BV5DWP9v.js";import"./index-DZmtHulG.js";import{t as d}from"./if-defined-D2_Zq9Ec.js";import{D as n}from"./DataAriaLabelMixin-9T8QQ5GU.js";import{F as r}from"./formfieldwrapper.component-DodX1ff3.js";import{D as s}from"./formfieldwrapper.constants-DWC10nYc.js";const p=i`
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
