import{T as I}from"./index-DxgvNVn1.js";import"./index-CkoO2pFp.js";import{k as p,h as m}from"./iframe-Bqf88308.js";import{t}from"./if-defined-C0m_AGun.js";import{a as C,r as d}from"./utils-Dd_sfl9-.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-fIOro7uk.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BwGISW2n.js";import"./TabIndexMixin-BsWEKPpY.js";import"./IconNameMixin-Djapols9.js";import"./index-DXecxXAr.js";import"./preload-helper-C1FmrZbK.js";import"./index-BJ3Sr74G.js";import"./index-DTrDRi1E.js";import"./badge.constants-Bju0k0i7.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,e=a=>p`<div role="tablist">
    <mdc-tab
      @click="${r("onclick")}"
      @keydown="${r("onkeydown")}"
      @keyup="${r("onkeyup")}"
      @focus="${r("onfocus")}"
      @activechange="${r("onactivechange")}"
      ?active="${a.active}"
      aria-label="${t(a.text?m:"Label")}"
      ?disabled="${a.disabled}"
      icon-name="${t(a["icon-name"])}"
      tabIndex="${t(a.tabIndex)}"
      text="${t(a.text)}"
      variant="${t(a.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${a["auto-focus-on-mount"]}"
      >${a.showBadge?p`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:m}</mdc-tab
    >
  </div>`,q={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:e,argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(I)},"auto-focus-on-mount":{control:"boolean"},...C(["role","size","soft-disabled","type"])}},o={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},n={render:e,args:{...o,showBadge:!0}},s={render:e,args:{...o,variant:"glass"},argTypes:{...d(["variant"])}},i={render:e,args:{...o,variant:"line"},argTypes:{...d(["variant"])}},c={render:e,args:{...o,variant:"pill"},argTypes:{...d(["variant"])}},l={render:e,args:{...o,text:""},argTypes:{...C(["text"])}};var b,u,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,T,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var f,x,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var $,O,A;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'pill'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var _,k,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const F=["Example","GlassTab","LineTab","PillTab","IconOnlyTab"];export{n as Example,s as GlassTab,l as IconOnlyTab,i as LineTab,c as PillTab,F as __namedExportsOrder,q as default};
