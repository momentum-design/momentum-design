import{i as h,k as d,D as c}from"./lit-element-D5KKan5q.js";import{n as f}from"./property-Bj3TGwkg.js";import{o as u}from"./query-assigned-elements-uEuc3rg8.js";import{u as A,C as p}from"./provider.component-DrWB4byV.js";import{D}from"./DataAriaLabelMixin-DVpSBUFD.js";import{D as v}from"./DisabledMixin-B-Cnza7-.js";import{R as m}from"./roles-CJI3JVG-.js";import{T as x,V as y}from"./index-DeEenWCE.js";const E=A.constructTagName("optgroup"),b="header-id",T=h`
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
`,$=[T];var _=Object.defineProperty,n=(o,t,i,g)=>{for(var e=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(e=l(t,i,e)||e);return e&&_(t,i,e),e};const a=class a extends D(v(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?d`
          <mdc-text
            id="${b}"
            part="header-text"
            type="${x.BODY_MIDSIZE_BOLD}"
            tagname="${y.SPAN}"
            >${this.label}</mdc-text
          >
        `:c;return d`
      <div
        role="${m.GROUP}"
        aria-labelledby="${this.label?b:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${m.PRESENTATION}"></slot>
      </div>
    `}};a.styles=[...p.styles,...$];let r=a;n([f({type:String,reflect:!0})],r.prototype,"label");n([u({selector:"mdc-option"})],r.prototype,"options");r.register(E);
