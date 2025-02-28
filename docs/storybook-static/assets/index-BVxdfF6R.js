import{i,k as o}from"./lit-element-CHllvULs.js";import{D as l}from"./ValueMixin-BtwaDIvZ.js";import{D as r,F as s}from"./formfieldwrapper.component-CWIPqk6J.js";import{u as d}from"./index-HW6KrQZO.js";import"./index-BGkqZMsC.js";const p=d.constructTagName("formfieldgroup"),a={RADIOGROUP:"radiogroup",GROUP:"group"},n=i`

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
`,h=[n],t=class t extends l(s){constructor(){super(),this.isRadio=!1,this.shouldRenderLabel=!1,this.id="",this.helpTextType=void 0,this.disabled=void 0}render(){return o`
      <div
        part="container"
        role="${this.isRadio?a.RADIOGROUP:a.GROUP}"
        aria-labelledby="${r.HEADING_ID}"
        aria-describedby="${r.HELPER_TEXT_ID}"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="group-header">
          ${this.renderLabel()}
          ${this.renderHelperText()}
        </div>
        <slot></slot>
      </div>
    `}};t.styles=[...s.styles,...h];let e=t;e.register(p);export{e as F};
