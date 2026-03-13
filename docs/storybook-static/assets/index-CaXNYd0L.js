import"./index-CNu0t0ga.js";import"./index-DeK8fIda.js";import{a2 as r,R as a,k as l,u as o}from"./iframe-D1ZM_2ni.js";import"./index-qrf18hzi.js";import{F as i}from"./formfieldwrapper.component-DPWesvFE.js";const d=r`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  :host::part(group-header) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`,p=[d],s=class s extends i{constructor(){super(...arguments),this.isRadio=!1}connectedCallback(){super.connectedCallback(),this.shouldRenderLabel=!1,this.disabled=void 0,this.role=this.isRadio?a.RADIOGROUP:a.GROUP,this.ariaDescription=this.helpText??"",this.ariaLabel=this.label||""}update(t){super.update(t),t.has("label")&&!this.ariaLabel&&(this.ariaLabel=this.label||"")}render(){return l`
      <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
      <slot></slot>
    `}};s.styles=[...i.styles,...p];let e=s;const h=o.constructTagName("formfieldgroup");e.register(h);export{e as F};
