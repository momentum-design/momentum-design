import{i as a,k as o}from"./lit-element-CHllvULs.js";import{t as l}from"./if-defined-C4tJgJ33.js";import{D as d}from"./DataAriaLabelMixin-vs_lw9aw.js";import{D as r,F as s}from"./formfieldwrapper.component-63e8oEkZ.js";import{u as p}from"./index-HW6KrQZO.js";import"./index-BGkqZMsC.js";const n=p.constructTagName("formfieldgroup"),i={RADIOGROUP:"radiogroup",GROUP:"group"},h=a`

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
`,c=[h],e=class e extends d(s){constructor(){super(),this.isRadio=!1,this.shouldRenderLabel=!1,this.id="",this.helpTextType=void 0,this.disabled=void 0}render(){return o`
      <div
        part="container"
        role="${this.isRadio?i.RADIOGROUP:i.GROUP}"
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
    `}};e.styles=[...s.styles,...c];let t=e;t.register(n);export{t as F};
