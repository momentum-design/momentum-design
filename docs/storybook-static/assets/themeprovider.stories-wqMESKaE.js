import{E as d,a4 as n,k as m}from"./iframe-DJQ9QsE0.js";import{R as r}from"./class-map-CL_ridQu.js";import{p as i}from"./index-n_2mx66T.js";import{c as v,s as p}from"./commonArgTypes-BluK8w5L.js";import{d as x}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";class h extends d{constructor(){super(...arguments),this.themeProviderContext=i.consume({host:this,context:n.Context})}render(){var t;return m`
      <p>Lit Component consuming ThemeProvider Context:</p>
      <p style="border: 1px solid">${(t=this.themeProviderContext.value)==null?void 0:t.themeclass}</p>
    `}}h.register("mdc-subcomponent");const c=["mds-theme-stable-darkWebex","mds-theme-stable-lightWebex"],u=e=>m`
  <mdc-themeprovider class="${r({[e.class]:!0})}" style="${e.style}" themeclass="${e.themeclass}">
    <div class="${r({themeWrapper:!0})}">
      <mdc-subcomponent></mdc-subcomponent>
      <p>Color examples:</p>
      <div style="height: 250px; overflow: scroll">
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
`,T={title:"Components/themeprovider",tags:["autodocs"],component:"mdc-themeprovider",render:u,argTypes:{themeclass:{options:c,control:{type:"radio"}},...x(["Context"]),...v,...p}},o={args:{themeclass:c[0],class:"custom-classname",style:"margin-top: 20px;"}};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    themeclass: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;'
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const f=["Example"];export{o as Example,f as __namedExportsOrder,T as default};
