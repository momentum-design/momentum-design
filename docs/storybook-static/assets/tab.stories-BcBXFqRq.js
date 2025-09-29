import{T as I}from"./index-DyaYI6b-.js";import"./index-D4o3cWJ9.js";import{k as b,D as m}from"./iframe-QSDyrAdE.js";import{t as o}from"./if-defined-ClteKkfF.js";import{t as S,a as _,r as s}from"./utils-CFOyPOhY.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-_HsIFC4Q.js";import"./keys-hFXe221I.js";import"./DisabledMixin-D6enQAXq.js";import"./TabIndexMixin-BVjLDI6m.js";import"./buttonsimple.constants-DOebIZq9.js";import"./roles-CJI3JVG-.js";import"./index-EVhd65vU.js";import"./index-COmTsnFb.js";import"./IconNameMixin-CSqyg41M.js";import"./index-fgDsCE7Q.js";import"./preload-helper-C1FmrZbK.js";import"./index-B0QaVnKo.js";import"./index-DTrDRi1E.js";import"./badge.constants-Btxp5gds.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,e=a=>b`<div role="tablist">
    <mdc-tab
      @click="${t("onclick")}"
      @keydown="${t("onkeydown")}"
      @keyup="${t("onkeyup")}"
      @focus="${t("onfocus")}"
      @activechange="${t("onactivechange")}"
      ?active="${a.active}"
      aria-label="${o(a.text?m:"Label")}"
      ?disabled="${a.disabled}"
      icon-name="${o(a["icon-name"])}"
      tabIndex="${o(a.tabIndex)}"
      text="${o(a.text)}"
      variant="${o(a.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${a["auto-focus-on-mount"]}"
      >${a.showBadge?b`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:m}</mdc-tab
    >
  </div>`,W={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:e,argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(I)},"auto-focus-on-mount":{control:"boolean"},...S(["--mdc-tab-content-gap","--mdc-tab-height","--mdc-tab-glass-active-background-color-disabled","--mdc-tab-glass-active-background-color-hover","--mdc-tab-glass-active-background-color-normal","--mdc-tab-glass-active-background-color-pressed","--mdc-tab-glass-active-color","--mdc-tab-glass-active-color-disabled","--mdc-tab-glass-border-radius","--mdc-tab-glass-inactive-background-color-disabled","--mdc-tab-glass-inactive-background-color-hover","--mdc-tab-glass-inactive-background-color-normal","--mdc-tab-glass-inactive-background-color-pressed","--mdc-tab-glass-inactive-color","--mdc-tab-glass-inactive-color-disabled","--mdc-tab-line-active-background-color-disabled","--mdc-tab-line-active-background-color-hover","--mdc-tab-line-active-background-color-normal","--mdc-tab-line-active-background-color-pressed","--mdc-tab-line-active-color","--mdc-tab-line-active-color-disabled","--mdc-tab-line-active-indicator-color","--mdc-tab-line-active-indicator-color-disabled","--mdc-tab-line-active-indicator-height","--mdc-tab-line-active-indicator-width","--mdc-tab-line-border-bottom-left-radius","--mdc-tab-line-border-bottom-right-radius","--mdc-tab-line-border-top-left-radius","--mdc-tab-line-border-top-right-radius","--mdc-tab-line-inactive-background-color-disabled","--mdc-tab-line-inactive-background-color-hover","--mdc-tab-line-inactive-background-color-normal","--mdc-tab-line-inactive-background-color-pressed","--mdc-tab-line-inactive-color","--mdc-tab-line-inactive-color-disabled","--mdc-tab-padding-left","--mdc-tab-padding-right","--mdc-tab-pill-active-background-color-disabled","--mdc-tab-pill-active-background-color-hover","--mdc-tab-pill-active-background-color-normal","--mdc-tab-pill-active-background-color-pressed","--mdc-tab-pill-active-color","--mdc-tab-pill-active-color-disabled","--mdc-tab-pill-border-radius","--mdc-tab-pill-inactive-background-color-disabled","--mdc-tab-pill-inactive-background-color-hover","--mdc-tab-pill-inactive-background-color-normal","--mdc-tab-pill-inactive-background-color-pressed","--mdc-tab-pill-inactive-color","--mdc-tab-pill-inactive-color-disabled"]),..._(["role","size","soft-disabled","type"])}},r={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},c={render:e,args:{...r,showBadge:!0}},n={render:e,args:{...r,variant:"glass"},argTypes:{...s(["variant"])}},i={render:e,args:{...r,variant:"line"},argTypes:{...s(["variant"])}},d={render:e,args:{...r,variant:"pill"},argTypes:{...s(["variant"])}},l={render:e,args:{...r,text:""},argTypes:{..._(["text"])}};var p,g,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,k,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(h=(k=n.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var T,f,y;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,$,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'pill'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var A,w,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const X=["Example","GlassTab","LineTab","PillTab","IconOnlyTab"];export{c as Example,n as GlassTab,l as IconOnlyTab,i as LineTab,d as PillTab,X as __namedExportsOrder,W as default};
