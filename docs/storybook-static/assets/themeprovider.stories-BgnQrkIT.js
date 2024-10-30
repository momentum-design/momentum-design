import{k as l}from"./lit-element-CPYlYYac.js";import{R as r}from"./class-map-CXre9d5K.js";import{T as d}from"./index-DZhShGSj.js";import{C as n}from"./index-BLShQaRP.js";import{p as i}from"./index-BGH6lGYG.js";import{c as v,s as p}from"./commonArgTypes-BluK8w5L.js";import{d as x}from"./utils-DCJ3yZC1.js";import"./state-I_twzcUk.js";import"./create-context-89xeped_.js";class h extends n{constructor(){super(...arguments),this.themeProviderContext=i.consume({host:this,context:d.Context})}render(){var t;return l`
      <p>Lit Component consuming ThemeProvider Context:</p>
      <p style="border: 1px solid">${(t=this.themeProviderContext.value)==null?void 0:t.themeclass}</p>
    `}}h.register("mdc-subcomponent");const c=["mds-theme-stable-darkWebex","mds-theme-stable-lightWebex"],u=e=>l`
  <mdc-themeprovider class="${r({[e.class]:!0})}" style="${e.style}" themeclass="${e.themeclass}">
    <div class="${r({themeWrapper:!0})}">
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
`,E={title:"Components/themeprovider",tags:["autodocs"],component:"mdc-themeprovider",render:u,parameters:{badges:["stable"]},argTypes:{themeclass:{options:c,control:{type:"radio"}},...x(["Context","--mdc-themeprovider-color-default","--mdc-themeprovider-font-family","--mdc-themeprovider-font-weight","--mdc-themeprovider-letter-spacing-adjustment"]),...v,...p}},o={args:{themeclass:c[0],class:"custom-classname",style:"margin-top: 20px;"}};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    themeclass: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;'
  }
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const $=["Primary"];export{o as Primary,$ as __namedExportsOrder,E as default};
