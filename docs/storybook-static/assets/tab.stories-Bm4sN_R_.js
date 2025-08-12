import{T as B}from"./index-5ghtnumN.js";import"./index-KJvrr_uv.js";import{k as b,D as m}from"./lit-element-D5KKan5q.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as o}from"./if-defined-D5BV9-c0.js";import{t as S,a as I,r as s}from"./utils-CFOyPOhY.js";import"./provider.component-BaQC7CJH.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./roles-DU0xbrD4.js";import"./index-B-GnYs90.js";import"./index-riA1qVWu.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-BsO32uIk.js";import"./iframe-DQqDOsy0.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./badge.constants-Cr-5n44e.js";import"./v4-CQkTLCs1.js";const e=a=>b`<div role="tablist">
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
      >${a.showBadge?b`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:m}</mdc-tab
    >
  </div>`,ca={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:e,parameters:{badges:["stable"]},argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(B)},...S(["--mdc-tab-content-gap","--mdc-tab-height","--mdc-tab-glass-active-background-color-disabled","--mdc-tab-glass-active-background-color-hover","--mdc-tab-glass-active-background-color-normal","--mdc-tab-glass-active-background-color-pressed","--mdc-tab-glass-active-color","--mdc-tab-glass-active-color-disabled","--mdc-tab-glass-border-radius","--mdc-tab-glass-inactive-background-color-disabled","--mdc-tab-glass-inactive-background-color-hover","--mdc-tab-glass-inactive-background-color-normal","--mdc-tab-glass-inactive-background-color-pressed","--mdc-tab-glass-inactive-color","--mdc-tab-glass-inactive-color-disabled","--mdc-tab-line-active-background-color-disabled","--mdc-tab-line-active-background-color-hover","--mdc-tab-line-active-background-color-normal","--mdc-tab-line-active-background-color-pressed","--mdc-tab-line-active-color","--mdc-tab-line-active-color-disabled","--mdc-tab-line-active-indicator-color","--mdc-tab-line-active-indicator-color-disabled","--mdc-tab-line-active-indicator-height","--mdc-tab-line-active-indicator-width","--mdc-tab-line-border-bottom-left-radius","--mdc-tab-line-border-bottom-right-radius","--mdc-tab-line-border-top-left-radius","--mdc-tab-line-border-top-right-radius","--mdc-tab-line-inactive-background-color-disabled","--mdc-tab-line-inactive-background-color-hover","--mdc-tab-line-inactive-background-color-normal","--mdc-tab-line-inactive-background-color-pressed","--mdc-tab-line-inactive-color","--mdc-tab-line-inactive-color-disabled","--mdc-tab-padding-left","--mdc-tab-padding-right","--mdc-tab-pill-active-background-color-disabled","--mdc-tab-pill-active-background-color-hover","--mdc-tab-pill-active-background-color-normal","--mdc-tab-pill-active-background-color-pressed","--mdc-tab-pill-active-color","--mdc-tab-pill-active-color-disabled","--mdc-tab-pill-border-radius","--mdc-tab-pill-inactive-background-color-disabled","--mdc-tab-pill-inactive-background-color-hover","--mdc-tab-pill-inactive-background-color-normal","--mdc-tab-pill-inactive-background-color-pressed","--mdc-tab-pill-inactive-color","--mdc-tab-pill-inactive-color-disabled"]),...I(["role","size","soft-disabled","type"])}},r={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},c={render:e,args:{...r,showBadge:!0}},i={render:e,args:{...r,variant:"glass"},argTypes:{...s(["variant"])}},n={render:e,args:{...r,variant:"line"},argTypes:{...s(["variant"])}},d={render:e,args:{...r,variant:"pill"},argTypes:{...s(["variant"])}},l={render:e,args:{...r,text:""},argTypes:{...I(["text"])}};var p,g,v;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var u,k,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,T,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var x,$,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const ia=["Example","GlassTab","LineTab","PillTab","IconOnlyTab"];export{c as Example,i as GlassTab,l as IconOnlyTab,n as LineTab,d as PillTab,ia as __namedExportsOrder,ca as default};
