import{i as v}from"./manifest-DRrdiy54.js";import{k as d,R as L}from"./iframe-BceO9xBA.js";import{t as a}from"./if-defined-DJvvsfJY.js";import"./index-DiE3PyAS.js";import"./index-DQxkxH8m.js";import"./index-DqcwKQda.js";import"./index-zD8FU3Mo.js";import"./index-C-PBsjQe.js";import{c as z,s as R}from"./commonArgTypes-BG7EqI50.js";import{h as V,a as D}from"./utils-D6nie9pS.js";import{S as r,V as s}from"./accordionbutton.component-DcjV-Mul.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./IconNameMixin-CqmVk_pA.js";import"./badge.constants-DKYhnHS8.js";import"./button.component-CfRI-83W.js";import"./buttonsimple.component-CAmLtJMK.js";import"./TabIndexMixin-CLzlMbCP.js";import"./DisabledMixin-CJ7Qsp83.js";import"./button.utils-rNW36Ji7.js";import"./chip.component-CJH-pzpy.js";import"./staticchip.component-YfHu1viX.js";import"./index-ByQ9qkf1.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,T=d`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,o=d`
  <mdc-chip slot="leading-controls" label="Label"></mdc-chip>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-chip slot="trailing-controls" label="Label"></mdc-chip>
  <mdc-badge slot="trailing-controls" type="counter" counter="911" max-counter="99"></mdc-badge>
  ${T}
`,w=e=>d`<div role="${L.MAIN}">
    <mdc-accordion
      @shown=${I("onshown")}
      ?disabled=${e.disabled}
      ?expanded=${e.expanded}
      data-aria-level="${a(e["data-aria-level"])}"
      header-text="${a(e["header-text"])}"
      prefix-icon="${a(e["prefix-icon"])}"
      open-button-aria-label="${a(e["open-button-aria-label"])}"
      close-button-aria-label="${a(e["close-button-aria-label"])}"
      size="${a(e.size)}"
      variant="${a(e.variant)}"
    >
      ${o}
    </mdc-accordion>
  </div>`,le={title:"Components/accordion/accordion",tags:["autodocs"],component:"mdc-accordion",render:w,argTypes:{...z,...R,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"select",options:Object.keys(v)},variant:{control:"select",options:Object.values(s)},"open-button-aria-label":{control:"text"},"close-button-aria-label":{control:"text"},...V(["--mdc-accordionbutton-hover-color","--mdc-accordionbutton-active-color"])}},n={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-regular",disabled:!1,size:r.SMALL,expanded:!0,variant:s.DEFAULT,"open-button-aria-label":"Open accordion","close-button-aria-label":"Close accordion"}},i={args:{...n.args,variant:s.BORDERLESS,expanded:!1}},c={args:{...n.args,size:r.LARGE,expanded:!1}},l={args:{...n.args,size:r.SMALL,expanded:!1}},t={render:()=>d`
    <div role="${L.MAIN}" style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Visibility of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Expanded"
          expanded
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${o}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Not expanded"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${o}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h2>Variant Types of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Default Variant"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${o}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="${s.BORDERLESS}"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${o}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Sizes of Accordion</h2>
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Small Size"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${o}</mdc-accordion
        >
        <mdc-accordion
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="${r.LARGE}"
          open-button-aria-label="Open accordion"
          close-button-aria-label="Close accordion"
          >${o}</mdc-accordion
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
          >${o}</mdc-accordion
        >
      </section>
    </div>
  `,...D()};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT,
    'open-button-aria-label': 'Open accordion',
    'close-button-aria-label': 'Close accordion'
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    expanded: false
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,g,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    expanded: false
  }
}`,...(S=(g=c.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var A,$,y;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    expanded: false
  }
}`,...(y=($=l.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var C,E,O;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(E=t.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const te=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{t as AllVariants,i as BorderlessVariant,n as Example,c as LargeSize,l as SmallSize,te as __namedExportsOrder,le as default};
