import"./index-COF7F5FP.js";import"./index-DLG2Bts2.js";import{S as r,R as i,k as l,u as o}from"./iframe-1qtKO-Lg.js";import"./index-BToP_IFm.js";import{F as a}from"./formfieldwrapper.component-BhUsVs1K.js";const h=r`
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
`,p=[h],s=class s extends a{constructor(){super(...arguments),this.isRadio=!1}connectedCallback(){super.connectedCallback(),this.shouldRenderLabel=!1,this.disabled=void 0,this.role=this.isRadio?i.RADIOGROUP:i.GROUP,this.ariaDescription=this.helpText??"",this.hasAttribute("aria-label")||this.setAttribute("aria-label",this.label||"")}update(t){super.update(t),t.has("label")&&!this.ariaLabel&&(this.ariaLabel=this.label||""),t.has("helpText")&&!this.ariaDescription&&(this.ariaDescription=this.helpText||"")}render(){return l`
      <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
      <slot></slot>
    `}};s.styles=[...a.styles,...p];let e=s;const d=o.constructTagName("formfieldgroup");e.register(d);export{e as F};
