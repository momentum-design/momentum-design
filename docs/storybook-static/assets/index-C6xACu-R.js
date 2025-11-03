import"./index-BBHZwm3b.js";import"./index-C6Jxcuu6.js";import{S as i,k as o,W as a,u as l}from"./iframe-DHn6Ee_A.js";import"./index-DytdwZVt.js";import{t as d}from"./if-defined-CS8lg2EF.js";import{D as n}from"./DataAriaLabelMixin-BGnkVoDG.js";import{F as r}from"./formfieldwrapper.component-4juMZ_yV.js";import{D as s}from"./formfieldwrapper.constants-K_L7bLIy.js";const p=i`
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
