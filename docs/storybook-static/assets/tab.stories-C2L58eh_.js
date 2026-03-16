import{T as r}from"./index-BP5Pyddk.js";import"./index-E_j6MZvu.js";import"./index-nqoea7d5.js";import"./index-B1JfsQkF.js";import{k as f,h as G,R as i}from"./iframe-Di3vHc7R.js";import{t}from"./if-defined-D6Gfkqrm.js";import{h as u,r as x,a as V}from"./utils-B5QUENNQ.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-D1rOXtv-.js";import"./DisabledMixin-B5PHc1QR.js";import"./KeyDownHandledMixin-y4wmVPeu.js";import"./index-DudBOMz-.js";import"./IconNameMixin-BzZPWEtg.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./index-DHTL7P3T.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./badge.constants-BGxh_Srn.js";import"./staticchip.component-DnJmFEuU.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,o=e=>f`<div role="tablist">
    <mdc-tab
      @click="${a("onclick")}"
      @keydown="${a("onkeydown")}"
      @keyup="${a("onkeyup")}"
      @focus="${a("onfocus")}"
      @activechange="${a("onactivechange")}"
      ?active="${e.active}"
      aria-label="${t(e.text?G:"Label")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      icon-name="${t(e["icon-name"])}"
      tabIndex="${t(e.tabIndex)}"
      text="${t(e.text)}"
      variant="${t(e.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    ></mdc-tab>
  </div>`,re={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:o,argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"icon-name":{control:"text"},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(r)},"auto-focus-on-mount":{control:"boolean"},...u(["role","size","type",'Slot Name: ""'])}},n={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",tabIndex:0,text:"Label",variant:r.PILL},c={render:o,args:{...n}},s={render:o,args:{...n,variant:r.GLASS},argTypes:{...x(["variant"])}},d={render:o,args:{...n,variant:r.LINE},argTypes:{...x(["variant"])}},l={render:o,args:{...n,variant:r.PILL},argTypes:{...x(["variant"])}},m={render:o,args:{...n,text:""},argTypes:{...u(["text"])}},p={render:e=>f`<div role="tablist">
      <mdc-tab
        @click="${a("onclick")}"
        @keydown="${a("onkeydown")}"
        @keyup="${a("onkeyup")}"
        @focus="${a("onfocus")}"
        @activechange="${a("onactivechange")}"
        ?active="${e.active}"
        aria-label="${t(e.text?G:"Label")}"
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
  `,...V()};var v,g,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var $,T,h;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.GLASS
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var A,I,L;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.LINE
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var S,k,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.PILL
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var O,B,C;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var R,_,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var E,N,D;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(N=b.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const ie=["Example","GlassTab","LineTab","PillTab","IconOnlyTab","CustomPrefixSlot","TabWithSlots"];export{p as CustomPrefixSlot,c as Example,s as GlassTab,m as IconOnlyTab,d as LineTab,l as PillTab,b as TabWithSlots,ie as __namedExportsOrder,re as default};
