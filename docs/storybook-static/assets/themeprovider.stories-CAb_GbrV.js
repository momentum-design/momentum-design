import{k as a}from"./lit-element-CPYlYYac.js";import{T as c,a as n}from"./index-CJCxIR5U.js";import{C as d}from"./index-CFYjfE6c.js";import{p as i}from"./index-BCUDnuze.js";import"./create-context-89xeped_.js";class p extends d{constructor(){super(...arguments),this.themeProviderContext=i.consume({host:this,context:c.Context})}render(){var o;return a` <p>${(o=this.themeProviderContext.value)==null?void 0:o.theme}</p> `}}p.register("mdc-subcomponent");const l=r=>a`
  <mdc-themeprovider class="themeWrapper" theme="${r.theme}">
    <p>Current theme:</p>
    <mdc-subcomponent></mdc-subcomponent>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
    </div>
  </mdc-themeprovider>
`,b={title:"Work In Progress/themeprovider",tags:["autodocs"],component:"mdc-themeprovider",render:l,argTypes:{theme:{options:n,control:{type:"radio"}}}},e={args:{theme:n[0]}};var t,s,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    theme: THEMES[0]
  }
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const k=["Primary"];export{e as Primary,k as __namedExportsOrder,b as default};
