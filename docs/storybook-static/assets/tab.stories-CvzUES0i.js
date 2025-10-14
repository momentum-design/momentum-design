import{T as D}from"./index-C6YYSV7J.js";import"./index-CKY1SYJs.js";import"./index-DYsZRcsr.js";import{k as m,h as b}from"./iframe-8kqUpADA.js";import{t}from"./if-defined-BsU8Vqar.js";import{a as u,r as p}from"./utils-Dd_sfl9-.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-CXxcIbAO.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CF3InGaq.js";import"./TabIndexMixin-B0wX-7IC.js";import"./IconNameMixin-D9gDNF1X.js";import"./index-DDoXQLKD.js";import"./preload-helper-C1FmrZbK.js";import"./index-CelDXb3G.js";import"./index-DTrDRi1E.js";import"./badge.constants-CtRS-9Sz.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,o=e=>m`<div role="tablist">
    <mdc-tab
      @click="${a("onclick")}"
      @keydown="${a("onkeydown")}"
      @keyup="${a("onkeyup")}"
      @focus="${a("onfocus")}"
      @activechange="${a("onactivechange")}"
      ?active="${e.active}"
      aria-label="${t(e.text?b:"Label")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      icon-name="${t(e["icon-name"])}"
      tabIndex="${t(e.tabIndex)}"
      text="${t(e.text)}"
      variant="${t(e.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      >${e.showBadge?m`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:b}</mdc-tab
    >
  </div>`,W={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:o,argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(D)},"auto-focus-on-mount":{control:"boolean"},...u(["role","size","type"])}},n={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},r={render:o,args:{...n,showBadge:!0}},s={render:o,args:{...n,variant:"glass"},argTypes:{...p(["variant"])}},i={render:o,args:{...n,variant:"line"},argTypes:{...p(["variant"])}},c={render:o,args:{...n,variant:"pill"},argTypes:{...p(["variant"])}},d={render:o,args:{...n,text:""},argTypes:{...u(["text"])}},l={render:e=>m`<div role="tablist">
      <mdc-tab
        @click="${a("onclick")}"
        @keydown="${a("onkeydown")}"
        @keyup="${a("onkeyup")}"
        @focus="${a("onfocus")}"
        @activechange="${a("onactivechange")}"
        ?active="${e.active}"
        aria-label="${t(e.text?b:"Label")}"
        ?disabled="${e.disabled}"
        ?soft-disabled="${e["soft-disabled"]}"
        tabIndex="${t(e.tabIndex)}"
        text="${t(e.text)}"
        variant="${t(e.variant)}"
        tab-id="tab1"
        ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      >
        <mdc-brandvisual style="width: 1rem;" slot="prefix" name="webex-symbol-common-color-gradient"></mdc-brandvisual>
      </mdc-tab>
    </div>`,args:{...n,"icon-name":void 0},argTypes:{...u(["icon-name"])}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var $,y,x;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,h,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,A,O;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'pill'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var I,C,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,B,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: Args) => html\`<div role="tablist">
      <mdc-tab
        @click="\${action('onclick')}"
        @keydown="\${action('onkeydown')}"
        @keyup="\${action('onkeyup')}"
        @focus="\${action('onfocus')}"
        @activechange="\${action('onactivechange')}"
        ?active="\${args.active}"
        aria-label="\${ifDefined(args.text ? nothing : 'Label')}"
        ?disabled="\${args.disabled}"
        ?soft-disabled="\${args['soft-disabled']}"
        tabIndex="\${ifDefined(args.tabIndex)}"
        text="\${ifDefined(args.text)}"
        variant="\${ifDefined(args.variant)}"
        tab-id="tab1"
        ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
      >
        <mdc-brandvisual style="width: 1rem;" slot="prefix" name="webex-symbol-common-color-gradient"></mdc-brandvisual>
      </mdc-tab>
    </div>\`,
  args: {
    ...defaultArgs,
    'icon-name': undefined // Remove default icon-name since we're using custom slot
  },
  argTypes: {
    ...hideControls(['icon-name'])
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const X=["Example","GlassTab","LineTab","PillTab","IconOnlyTab","CustomPrefixSlot"];export{l as CustomPrefixSlot,r as Example,s as GlassTab,d as IconOnlyTab,i as LineTab,c as PillTab,X as __namedExportsOrder,W as default};
