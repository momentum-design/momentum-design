import"./index-CAuYugeL.js";import"./index-BsapJqGO.js";import"./index-D2VIkDCb.js";import"./index-D33P82gZ.js";import{i,k as o}from"./lit-element-D5KKan5q.js";import{t as l}from"./if-defined-D5BV9-c0.js";import{D as d}from"./DataAriaLabelMixin-DVpSBUFD.js";import{R as r}from"./roles-CJI3JVG-.js";import{D as a,F as s}from"./formfieldwrapper.component-DfjqvCUn.js";import{u as p}from"./provider.component-DrWB4byV.js";const n=i`
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

  :host::part(label-text) {
    font-weight: bold;
  }
`,c=[n],e=class e extends d(s){constructor(){super(...arguments),this.isRadio=!1}connectedCallback(){super.connectedCallback(),this.shouldRenderLabel=!1,this.disabled=void 0}render(){return o`
      <div
        part="container"
        role="${this.isRadio?r.RADIOGROUP:r.GROUP}"
        aria-labelledby="${a.HEADING_ID}"
        aria-describedby="${l(this.helpText?a.HELPER_TEXT_ID:"")}"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
        <slot></slot>
      </div>
    `}};e.styles=[...s.styles,...c];let t=e;const m=p.constructTagName("formfieldgroup");t.register(m);export{t as F};
