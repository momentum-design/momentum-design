import{i as a,k as o}from"./lit-element-D5KKan5q.js";import{t as l}from"./if-defined-D5BV9-c0.js";import{D as d}from"./FormInternalsMixin-BezuNa1f.js";import{D as r,F as s}from"./formfieldwrapper.component-DKn4fQEK.js";import{u as p}from"./index-C9z9WAEj.js";import"./index-D3DhXfcW.js";const n=p.constructTagName("formfieldgroup"),i={RADIOGROUP:"radiogroup",GROUP:"group"},h=a`

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
