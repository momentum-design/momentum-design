import{R as h,k as v}from"./lit-element-CPYlYYac.js";import{e as u,i as x,t as g}from"./directive-Ctav8iJK.js";import{T as y}from"./index-BfB9Gei2.js";import{C as b}from"./index-BLShQaRP.js";import{p as f,d as k}from"./utils-CNzqJMO0.js";import{c as B,s as C}from"./commonArgTypes-BluK8w5L.js";import"./state-I_twzcUk.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=u(class extends x{constructor(t){var o;if(super(t),t.type!==g.ATTRIBUTE||t.name!=="class"||((o=t.strings)==null?void 0:o.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(o=>t[o]).join(" ")+" "}update(t,[o]){var a,m;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in o)o[e]&&!((a=this.nt)!=null&&a.has(e))&&this.st.add(e);return this.render(o)}const s=t.element.classList;for(const e of this.st)e in o||(s.remove(e),this.st.delete(e));for(const e in o){const l=!!o[e];l===this.st.has(e)||(m=this.nt)!=null&&m.has(e)||(l?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return h}});class T extends b{constructor(){super(...arguments),this.themeProviderContext=f.consume({host:this,context:y.Context})}render(){var o;return v`
      <p>Lit Component consuming ThemeProvider Context:</p>
      <p style="border: 1px solid">${(o=this.themeProviderContext.value)==null?void 0:o.themeclass}</p>
    `}}T.register("mdc-subcomponent");const p=["mds-theme-stable-darkWebex","mds-theme-stable-lightWebex"],E=t=>v`
  <mdc-themeprovider class="${c({[t.class]:!0})}" style="${t.style}" themeclass="${t.themeclass}">
    <div class="${c({themeWrapper:!0})}">
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
    </div>
  </mdc-themeprovider>
`,W={title:"Components/themeprovider",tags:["autodocs"],component:"mdc-themeprovider",render:E,parameters:{badges:["stable"]},argTypes:{themeclass:{options:p,control:{type:"radio"}},...k(["Context","default","--mdc-themeprovider-color-default","--mdc-themeprovider-font-family","--mdc-themeprovider-font-weight","--mdc-themeprovider-letter-spacing-adjustment"]),...B,...C}},r={args:{themeclass:p[0],class:"custom-classname",style:"margin-top: 20px;"}};var d,n,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    themeclass: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;'
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const H=["Primary"];export{r as Primary,H as __namedExportsOrder,W as default};
