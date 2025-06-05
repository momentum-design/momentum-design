import{i as n,k as d,D as h}from"./lit-element-D5KKan5q.js";import{C as p,n as c}from"./index-C9z9WAEj.js";import{o as f}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{D as u}from"./DisabledMixin-BZruwOeC.js";import{T as A,V as v}from"./index-D1yLszQ-.js";import{H as m,T as x}from"./optgroup.constants-CwoRKCZY.js";const y=n`
  :host {
    --mdc-optgroup-disabled-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
    height: 2.25rem;
  }
  :host([disabled]),
  :host([disabled])::part(header-text) {
    color: var(--mdc-optgroup-disabled-color);
    cursor: default;
  }
`,_=[y];var T=Object.defineProperty,b=(o,t,i,$)=>{for(var e=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(e=l(t,i,e)||e);return e&&T(t,i,e),e};const a=class a extends D(u(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?d`
      <mdc-text
        id="${m}"
        part="header-text"
        type="${A.BODY_MIDSIZE_BOLD}"
        tagname="${v.SPAN}"
      >${this.label}</mdc-text>
    `:h;return d`
      <div
        role="group"
        aria-labelledby="${this.label?m:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="presentation"></slot>
      </div>
    `}};a.styles=[...p.styles,..._];let r=a;b([c({type:String,reflect:!0})],r.prototype,"label");b([f({selector:"mdc-option"})],r.prototype,"options");r.register(x);
