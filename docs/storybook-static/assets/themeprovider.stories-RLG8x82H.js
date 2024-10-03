import{R as p,k as l}from"./lit-element-CPYlYYac.js";import{e as u,i as g,t as y}from"./directive-Ctav8iJK.js";import{T as v,a as h}from"./index-CJCxIR5U.js";import{C as b}from"./index-CFYjfE6c.js";import{p as x}from"./index-BCUDnuze.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=u(class extends g{constructor(e){var s;if(super(e),e.type!==y.ATTRIBUTE||e.name!=="class"||((s=e.strings)==null?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(s=>e[s]).join(" ")+" "}update(e,[s]){var n,a;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in s)s[t]&&!((n=this.nt)!=null&&n.has(t))&&this.st.add(t);return this.render(s)}const o=e.element.classList;for(const t of this.st)t in s||(o.remove(t),this.st.delete(t));for(const t in s){const c=!!s[t];c===this.st.has(t)||(a=this.nt)!=null&&a.has(t)||(c?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return p}});class S extends b{constructor(){super(...arguments),this.themeProviderContext=x.consume({host:this,context:v.Context})}render(){var s;return l` <p>${(s=this.themeProviderContext.value)==null?void 0:s.theme}</p> `}}S.register("mdc-subcomponent");const T={class:{description:`A space-separated list of the classes of the element. 
    This is a string that can be used to add custom CSS classes to the element.`,table:{category:"Styling"}}},C={style:{description:"A string that can be used to add custom CSS styles to the element.",table:{category:"Styling"}}},k=e=>l`
  <mdc-themeprovider
    class="${f({themeWrapper:!0,[e.class]:!0})}"
    style="${e.style}"
    theme="${e.theme}"
  >
    <p>Current theme:</p>
    <mdc-subcomponent></mdc-subcomponent>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
    </div>
  </mdc-themeprovider>
`,j={title:"Work In Progress/themeprovider",tags:["autodocs"],component:"mdc-themeprovider",render:k,argTypes:{theme:{options:h,control:{type:"radio"},table:{category:"Attributes"}},themes:{table:{category:"Attributes"}},...T,...C},parameters:{controls:{exclude:["Context"]}}},r={args:{theme:h[0],class:"custom-classname",style:"margin-top: 20px;"}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    theme: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const M=["Primary"];export{r as Primary,M as __namedExportsOrder,j as default};
