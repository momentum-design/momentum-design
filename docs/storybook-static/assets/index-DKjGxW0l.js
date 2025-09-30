import"./index-BSPq_17-.js";import"./index-D-FiYTdm.js";import"./index-CqfQTe1K.js";import"./index-D9ZEAHOf.js";import{i,k as o,u as l}from"./iframe-DSSNydaC.js";import{t as d}from"./if-defined-Zwr4HrLo.js";import{D as n}from"./DataAriaLabelMixin-WXnwXJEb.js";import{R as r}from"./roles-CJI3JVG-.js";import{D as a,F as s}from"./formfieldwrapper.component-ac6X_6HV.js";const p=i`
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
`,c=[p],t=class t extends n(s){constructor(){super(...arguments),this.isRadio=!1}connectedCallback(){super.connectedCallback(),this.shouldRenderLabel=!1,this.disabled=void 0}render(){return o`
      <div
        part="container"
        role="${this.isRadio?r.RADIOGROUP:r.GROUP}"
        aria-labelledby="${a.HEADING_ID}"
        aria-describedby="${d(this.helpText?a.HELPER_TEXT_ID:"")}"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
        <slot></slot>
      </div>
    `}};t.styles=[...s.styles,...c];let e=t;const m=l.constructTagName("formfieldgroup");e.register(m);export{e as F};
