import{T as D,a as r}from"./index-aOkBX8S1.js";import"./index-CCYSE85y.js";import"./index-DRepdNWJ.js";import"./index-MpeNe79o.js";import{k as f,h as G,R as i}from"./iframe-DDdyYKcM.js";import{t as a}from"./if-defined-BbSBl4wr.js";import{h as u,r as x,a as V}from"./utils-B5QUENNQ.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-2qLehltN.js";import"./DisabledMixin-xgzT86Kg.js";import"./KeyDownHandledMixin-D_BymDsx.js";import"./index-BhcY06jc.js";import"./IconNameMixin-BMkvk5fD.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./index-SSEGGe-_.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./badge.constants-BSXwCKJE.js";import"./staticchip.component-Drampmon.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,o=e=>f`<div role="tablist">
    <mdc-tab
      @click="${t("onclick")}"
      @keydown="${t("onkeydown")}"
      @keyup="${t("onkeyup")}"
      @focus="${t("onfocus")}"
      @activechange="${t("onactivechange")}"
      ?active="${e.active}"
      aria-label="${a(e.text?G:"Label")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      icon-name="${a(e["icon-name"])}"
      size="${a(e.size)}"
      tabIndex="${a(e.tabIndex)}"
      text="${a(e.text)}"
      variant="${a(e.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    ></mdc-tab>
  </div>`,ie={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:o,argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"icon-name":{control:"text"},tabIndex:{control:"number"},size:{control:"select",options:Object.values(D),description:"Size of the tab in pixels."},text:{control:"text"},variant:{control:"select",options:Object.values(r)},"auto-focus-on-mount":{control:"boolean"},...u(["role","type",'Slot Name: ""'])}},n={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",size:D[32],tabIndex:0,text:"Label",variant:r.PILL},s={render:o,args:{...n}},c={render:o,args:{...n,variant:r.GLASS},argTypes:{...x(["variant"])}},d={render:o,args:{...n,variant:r.LINE},argTypes:{...x(["variant"])}},l={render:o,args:{...n,variant:r.PILL},argTypes:{...x(["variant"])}},m={render:o,args:{...n,text:""},argTypes:{...u(["text"])}},p={render:e=>f`<div role="tablist">
      <mdc-tab
        @click="${t("onclick")}"
        @keydown="${t("onkeydown")}"
        @keyup="${t("onkeyup")}"
        @focus="${t("onfocus")}"
        @activechange="${t("onactivechange")}"
        ?active="${e.active}"
        aria-label="${a(e.text?G:"Label")}"
        ?disabled="${e.disabled}"
        ?soft-disabled="${e["soft-disabled"]}"
        size="${a(e.size)}"
        tabIndex="${a(e.tabIndex)}"
        text="${a(e.text)}"
        variant="${a(e.variant)}"
        tab-id="tab1"
        ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      >
        <mdc-brandvisual style="width: 1rem;" slot="prefix" name="webex-symbol-common-color-gradient"></mdc-brandvisual>
      </mdc-tab>
    </div>`,args:{...n,"icon-name":void 0},argTypes:{...u(["icon-name"])}},b={render:()=>f`
    <div role="${i.MAIN}" style="display: flex; gap: 2rem; flex-direction: column;">
      <div style="display: flex; gap: 1rem;" role="${i.TABLIST}">
        <mdc-tab text="Postfix Icon">
          <mdc-icon slot="postfix" name="placeholder-bold"></mdc-icon>
        </mdc-tab>
        <mdc-tab active text="Prefix Icon">
          <mdc-icon slot="prefix" name="placeholder-bold"></mdc-icon>
        </mdc-tab>
      </div>
      <div style="display: flex; gap: 1rem;" role="${i.TABLIST}">">
        <mdc-tab text="Postfix Badge">
          <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
        </mdc-tab>
        <mdc-tab active text="Prefix Badge">
          <mdc-badge slot="prefix"></mdc-badge>
        </mdc-tab>
      </div>
      <div style="display: flex; gap: 1rem;" role="${i.TABLIST}">">
        <mdc-tab text="Postfix Chip">
          <mdc-staticchip slot="postfix" label="Alpha"></mdc-chip>
        </mdc-tab>
        <mdc-tab active text="Prefix Chip">
          <mdc-staticchip slot="prefix" label="Beta"></mdc-chip>
        </mdc-tab>
      </div>
    </div>
  `,...V()};var v,g,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var $,T,h;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.GLASS
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(h=(T=c.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var A,I,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.LINE
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,k,O;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.PILL
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var P,B,C;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var _,E,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        size="\${ifDefined(args.size)}"
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
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var w,N,z;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div role="\${ROLE.MAIN}" style="display: flex; gap: 2rem; flex-direction: column;">
      <div style="display: flex; gap: 1rem;" role="\${ROLE.TABLIST}">
        <mdc-tab text="Postfix Icon">
          <mdc-icon slot="postfix" name="placeholder-bold"></mdc-icon>
        </mdc-tab>
        <mdc-tab active text="Prefix Icon">
          <mdc-icon slot="prefix" name="placeholder-bold"></mdc-icon>
        </mdc-tab>
      </div>
      <div style="display: flex; gap: 1rem;" role="\${ROLE.TABLIST}">">
        <mdc-tab text="Postfix Badge">
          <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
        </mdc-tab>
        <mdc-tab active text="Prefix Badge">
          <mdc-badge slot="prefix"></mdc-badge>
        </mdc-tab>
      </div>
      <div style="display: flex; gap: 1rem;" role="\${ROLE.TABLIST}">">
        <mdc-tab text="Postfix Chip">
          <mdc-staticchip slot="postfix" label="Alpha"></mdc-chip>
        </mdc-tab>
        <mdc-tab active text="Prefix Chip">
          <mdc-staticchip slot="prefix" label="Beta"></mdc-chip>
        </mdc-tab>
      </div>
    </div>
  \`,
  ...hideAllControls()
}`,...(z=(N=b.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const se=["Example","GlassTab","LineTab","PillTab","IconOnlyTab","CustomPrefixSlot","TabWithSlots"];export{p as CustomPrefixSlot,s as Example,c as GlassTab,m as IconOnlyTab,d as LineTab,l as PillTab,b as TabWithSlots,se as __namedExportsOrder,ie as default};
