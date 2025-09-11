import{T as B}from"./index-fQeCdtlE.js";import"./index-BWU-ik-x.js";import{k as b,D as m}from"./lit-element-D5KKan5q.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t}from"./if-defined-D5BV9-c0.js";import{t as S,a as I,r as s}from"./utils-CFOyPOhY.js";import"./property-Bj3TGwkg.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-Dydm3dt1.js";import"./provider.component-DrWB4byV.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./index-CqVtAZCJ.js";import"./index-D2VIkDCb.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./index-D3hZo8xY.js";import"./iframe-Bn_Nkdnf.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./badge.constants-C6WKiCnx.js";import"./v4-CQkTLCs1.js";const o=a=>b`<div role="tablist">
    <mdc-tab
      @click="${e("onclick")}"
      @keydown="${e("onkeydown")}"
      @keyup="${e("onkeyup")}"
      @focus="${e("onfocus")}"
      @activechange="${e("onactivechange")}"
      ?active="${a.active}"
      aria-label="${t(a.text?m:"Label")}"
      ?disabled="${a.disabled}"
      icon-name="${t(a["icon-name"])}"
      tabIndex="${t(a.tabIndex)}"
      text="${t(a.text)}"
      variant="${t(a.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${a["auto-focus-on-mount"]}"
      >${a.showBadge?b`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:m}</mdc-tab
    >
  </div>`,ia={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:o,parameters:{badges:["stable"]},argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(B)},"auto-focus-on-mount":{control:"boolean"},...S(["--mdc-tab-content-gap","--mdc-tab-height","--mdc-tab-glass-active-background-color-disabled","--mdc-tab-glass-active-background-color-hover","--mdc-tab-glass-active-background-color-normal","--mdc-tab-glass-active-background-color-pressed","--mdc-tab-glass-active-color","--mdc-tab-glass-active-color-disabled","--mdc-tab-glass-border-radius","--mdc-tab-glass-inactive-background-color-disabled","--mdc-tab-glass-inactive-background-color-hover","--mdc-tab-glass-inactive-background-color-normal","--mdc-tab-glass-inactive-background-color-pressed","--mdc-tab-glass-inactive-color","--mdc-tab-glass-inactive-color-disabled","--mdc-tab-line-active-background-color-disabled","--mdc-tab-line-active-background-color-hover","--mdc-tab-line-active-background-color-normal","--mdc-tab-line-active-background-color-pressed","--mdc-tab-line-active-color","--mdc-tab-line-active-color-disabled","--mdc-tab-line-active-indicator-color","--mdc-tab-line-active-indicator-color-disabled","--mdc-tab-line-active-indicator-height","--mdc-tab-line-active-indicator-width","--mdc-tab-line-border-bottom-left-radius","--mdc-tab-line-border-bottom-right-radius","--mdc-tab-line-border-top-left-radius","--mdc-tab-line-border-top-right-radius","--mdc-tab-line-inactive-background-color-disabled","--mdc-tab-line-inactive-background-color-hover","--mdc-tab-line-inactive-background-color-normal","--mdc-tab-line-inactive-background-color-pressed","--mdc-tab-line-inactive-color","--mdc-tab-line-inactive-color-disabled","--mdc-tab-padding-left","--mdc-tab-padding-right","--mdc-tab-pill-active-background-color-disabled","--mdc-tab-pill-active-background-color-hover","--mdc-tab-pill-active-background-color-normal","--mdc-tab-pill-active-background-color-pressed","--mdc-tab-pill-active-color","--mdc-tab-pill-active-color-disabled","--mdc-tab-pill-border-radius","--mdc-tab-pill-inactive-background-color-disabled","--mdc-tab-pill-inactive-background-color-hover","--mdc-tab-pill-inactive-background-color-normal","--mdc-tab-pill-inactive-background-color-pressed","--mdc-tab-pill-inactive-color","--mdc-tab-pill-inactive-color-disabled"]),...I(["role","size","soft-disabled","type"])}},r={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},c={render:o,args:{...r,showBadge:!0}},i={render:o,args:{...r,variant:"glass"},argTypes:{...s(["variant"])}},n={render:o,args:{...r,variant:"line"},argTypes:{...s(["variant"])}},d={render:o,args:{...r,variant:"pill"},argTypes:{...s(["variant"])}},l={render:o,args:{...r,text:""},argTypes:{...I(["text"])}};var p,g,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,k,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,y,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,$,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'pill'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var w,C,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const na=["Example","GlassTab","LineTab","PillTab","IconOnlyTab"];export{c as Example,i as GlassTab,l as IconOnlyTab,n as LineTab,d as PillTab,na as __namedExportsOrder,ia as default};
