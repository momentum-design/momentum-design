import{i,k as o}from"./lit-element-D5KKan5q.js";import{t as l}from"./if-defined-D5BV9-c0.js";import{D as d}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{R as a}from"./roles-DCpIf2k8.js";import{D as r,F as s}from"./formfieldwrapper.component-5n2-mkV5.js";import{u as n}from"./index-C9z9WAEj.js";import"./index-D3DhXfcW.js";const p=i`

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

  :host::part(label-text){
    font-weight: bold;
  }
`,c=[p],t=class t extends d(s){constructor(){super(...arguments),this.isRadio=!1}connectedCallback(){super.connectedCallback(),this.shouldRenderLabel=!1,this.id="",this.helpTextType=void 0,this.disabled=void 0}render(){return o`
      <div
        part="container"
        role="${this.isRadio?a.RADIOGROUP:a.GROUP}"
        aria-labelledby="${r.HEADING_ID}"
        aria-describedby="${l(this.helpText?r.HELPER_TEXT_ID:"")}"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="group-header">
          ${this.renderLabel()}
          ${this.renderHelperText()}
        </div>
        <slot></slot>
      </div>
    `}};t.styles=[...s.styles,...c];let e=t;const h=n.constructTagName("formfieldgroup");e.register(h);export{e as F};
