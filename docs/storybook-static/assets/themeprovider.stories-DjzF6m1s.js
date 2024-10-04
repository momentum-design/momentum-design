import{R as v,k as i}from"./lit-element-CPYlYYac.js";import{e as p,i as u,t as x}from"./directive-Ctav8iJK.js";import{T as g}from"./index-9ZRMM_85.js";import{C as y}from"./index-CFYjfE6c.js";import{p as b}from"./index-BCUDnuze.js";import"./state-CxB-wGrk.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=p(class extends u{constructor(e){var t;if(super(e),e.type!==x.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var a,l;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((a=this.nt)!=null&&a.has(o))&&this.st.add(o);return this.render(t)}const s=e.element.classList;for(const o of this.st)o in t||(s.remove(o),this.st.delete(o));for(const o in t){const c=!!t[o];c===this.st.has(o)||(l=this.nt)!=null&&l.has(o)||(c?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return v}});class k extends y{constructor(){super(...arguments),this.themeProviderContext=b.consume({host:this,context:g.Context})}render(){var t;return i`
      <p>Lit Component consuming ThemeProvider Context:</p>
      <p style="border: 1px solid">${(t=this.themeProviderContext.value)==null?void 0:t.themeclass}</p>
    `}}k.register("mdc-subcomponent");const B={class:{description:`A space-separated list of the classes of the element. 
    This is a string that can be used to add custom CSS classes to the element.`,table:{category:"Styling"}}},C={style:{description:"A string that can be used to add custom CSS styles to the element.",table:{category:"Styling"}}},T=e=>{const t={};return e.forEach(s=>{t[s]={control:!1}}),t},h=["mds-theme-stable-darkWebex","mds-theme-stable-lightWebex"],S=e=>i`
  <mdc-themeprovider
    class="${f({themeWrapper:!0,[e.class]:!0})}"
    style="${e.style}"
    themeclass="${e.themeclass}"
  >
    <mdc-subcomponent></mdc-subcomponent>
    <p>Color examples:</p>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-primary-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-error-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-success-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-cobalt-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-cyan-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-mint-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-lime-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-gold-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-orange-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-pink-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-purple-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-violet-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-slate-normal);"></div>
    </div>
  </mdc-themeprovider>
`,$={title:"Work In Progress/themeprovider",tags:["autodocs"],component:"mdc-themeprovider",render:S,parameters:{badges:["wip"]},argTypes:{themeclass:{options:h,control:{type:"radio"}},...T(["Context","default","--mdc-themeprovider-font-family","--mdc-themeprovider-color-default"]),...B,...C}},r={args:{themeclass:h[0],class:"custom-classname",style:"margin-top: 20px;"}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    themeclass: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const M=["Primary"];export{r as Primary,M as __namedExportsOrder,$ as default};
