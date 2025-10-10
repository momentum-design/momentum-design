import{T as I}from"./index-DFo83mge.js";import"./index-CNZ-zq_g.js";import{k as p,h as m}from"./iframe-J50dDciQ.js";import{t}from"./if-defined-CcIPL9Pv.js";import{a as C,r as d}from"./utils-Dd_sfl9-.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-CbJPQNAt.js";import"./keys-hFXe221I.js";import"./DisabledMixin-H98zMGT5.js";import"./TabIndexMixin-BQNgw7Ub.js";import"./IconNameMixin-BgLv-JeQ.js";import"./index-tkVe0nKe.js";import"./preload-helper-C1FmrZbK.js";import"./index-DDdGDe2b.js";import"./index-DTrDRi1E.js";import"./badge.constants-BU7N5fjS.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,a=e=>p`<div role="tablist">
    <mdc-tab
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      @activechange="${o("onactivechange")}"
      ?active="${e.active}"
      aria-label="${t(e.text?m:"Label")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      icon-name="${t(e["icon-name"])}"
      tabIndex="${t(e.tabIndex)}"
      text="${t(e.text)}"
      variant="${t(e.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      >${e.showBadge?p`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:m}</mdc-tab
    >
  </div>`,q={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:a,argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(I)},"auto-focus-on-mount":{control:"boolean"},...C(["role","size","type"])}},r={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},n={render:a,args:{...r,showBadge:!0}},s={render:a,args:{...r,variant:"glass"},argTypes:{...d(["variant"])}},i={render:a,args:{...r,variant:"line"},argTypes:{...d(["variant"])}},c={render:a,args:{...r,variant:"pill"},argTypes:{...d(["variant"])}},l={render:a,args:{...r,text:""},argTypes:{...C(["text"])}};var b,u,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,T,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var y,x,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
