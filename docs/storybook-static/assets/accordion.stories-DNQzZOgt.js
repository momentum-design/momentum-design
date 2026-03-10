import{i as N}from"./manifest-B9CvakwT.js";import{k as s,R as z}from"./iframe-CXCCK7zk.js";import{t as o}from"./if-defined-BuZDkRkv.js";import"./index-BsPCdMYg.js";import"./index-DCYn2j0l.js";import"./index-B9wm2aIu.js";import"./index-Buk2dTBi.js";import"./index-SjxeI1HO.js";import{c as V,s as D}from"./commonArgTypes-BG7EqI50.js";import{h as G,a as _}from"./utils-B5QUENNQ.js";import{S as r,V as p,T as m}from"./accordionbutton.component-ru-S1x0_.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-D3DjPdCI.js";import"./IconNameMixin-BZtjEIbb.js";import"./badge.constants-CvEuV4BF.js";import"./button.component-s4aRcPCT.js";import"./buttonsimple.component-Du_C_gTC.js";import"./DisabledMixin-BsjtdTnc.js";import"./KeyDownHandledMixin-DSh9go4o.js";import"./index-CgrR2bZ8.js";import"./button.utils-rNW36Ji7.js";import"./chip.component-CTfHW1Bw.js";import"./staticchip.component-DtYm6Rhb.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,B=s`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,a=s`
  <mdc-chip slot="leading-controls" label="Label"></mdc-chip>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-chip slot="trailing-controls" label="Label"></mdc-chip>
  <mdc-badge slot="trailing-controls" type="counter" counter="911" max-counter="99"></mdc-badge>
  ${B}
`,M=e=>s`<div role="${z.MAIN}">
    <mdc-accordion
      @shown=${w("onshown")}
      ?disabled=${e.disabled}
      ?expanded=${e.expanded}
      data-aria-level="${o(e["data-aria-level"])}"
      header-text="${o(e["header-text"])}"
      prefix-icon="${o(e["prefix-icon"])}"
      open-button-aria-label="${o(e["open-button-aria-label"])}"
      close-button-aria-label="${o(e["close-button-aria-label"])}"
      size="${o(e.size)}"
      variant="${o(e.variant)}"
      toggle-position="${o(e["toggle-position"])}"
    >
      ${a}
    </mdc-accordion>
  </div>`,pe={title:"Components/accordion/accordion",tags:["autodocs"],component:"mdc-accordion",render:M,argTypes:{...V,...D,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"select",options:Object.keys(N)},variant:{control:"select",options:Object.values(p)},"open-button-aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"toggle-position":{control:"select",options:Object.values(m)},...G(["--mdc-accordionbutton-hover-color","--mdc-accordionbutton-active-color"])}},n={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-regular",disabled:!1,size:r.SMALL,expanded:!0,variant:p.DEFAULT,"open-button-aria-label":"Open accordion","close-button-aria-label":"Close accordion","toggle-position":m.TRAILING}},i={args:{...n.args,variant:p.BORDERLESS,expanded:!1}},c={args:{...n.args,size:r.LARGE,expanded:!1}},t={args:{...n.args,size:r.SMALL,expanded:!1}},l={args:{...n.args,"toggle-position":m.LEADING,expanded:!0}},d={render:()=>s`
    <div role="${z.MAIN}" style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Visibility of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Expanded"
          expanded
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Not expanded"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h2>Variant Types of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Default Variant"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="${p.BORDERLESS}"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Sizes of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Small Size"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="${r.LARGE}"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Disabled Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Disabled Accordion"
          disabled
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${a}</mdc-accordion
        >
      </section>
    </div>
  `,..._()};var u,b,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT,
    'open-button-aria-label': 'Open accordion',
    'close-button-aria-label': 'Close accordion',
    'toggle-position': TOGGLE_POSITION.TRAILING
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,f,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    expanded: false
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,A,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    expanded: false
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var E,L,$;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    expanded: false
  }
}`,...($=(L=t.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var y,C,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'toggle-position': TOGGLE_POSITION.LEADING,
    expanded: true
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var I,T,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <div role="\${ROLE.MAIN}" style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Visibility of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Expanded"
          expanded
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Not expanded"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h2>Variant Types of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Default Variant"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="\${VARIANT.BORDERLESS}"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Sizes of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Small Size"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="\${SIZE.LARGE}"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Disabled Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Disabled Accordion"
          disabled
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >\${defaultChildren}</mdc-accordion
        >
      </section>
    </div>
  \`,
  ...hideAllControls()
}`,...(R=(T=d.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const me=["Example","BorderlessVariant","LargeSize","SmallSize","LeadingToggle","AllVariants"];export{d as AllVariants,i as BorderlessVariant,n as Example,c as LargeSize,l as LeadingToggle,t as SmallSize,me as __namedExportsOrder,pe as default};
