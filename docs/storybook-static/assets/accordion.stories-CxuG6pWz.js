import{k as t}from"./iframe-DhGqAUJy.js";import"./index-eb5msoc6.js";import"./index-CxRW8l52.js";import"./index-B5gs7qSX.js";import"./index-5yRKEueP.js";import"./index-DviT2LAi.js";import{c as v,s as z}from"./commonArgTypes-BluK8w5L.js";import{d as R,h as V}from"./utils-Dd_sfl9-.js";import{S as r,V as l}from"./accordionbutton.component-Bu8ZyNxy.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./if-defined-CSf8oUlc.js";import"./IconNameMixin-9Qg181rg.js";import"./badge.constants-DAXDv6_9.js";import"./button.component-D63XHURa.js";import"./buttonsimple.component-Cs5gzG_Z.js";import"./TabIndexMixin-Bv4GD8lE.js";import"./DisabledMixin-CrYPrAlK.js";import"./button.utils-rNW36Ji7.js";import"./chip.component-DlSQSMrV.js";import"./staticchip.component-CS-J7A13.js";import"./index-DLnXiPEA.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,D=t`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,o=t`
  <mdc-chip slot="leading-controls" label="Label"></mdc-chip>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-chip slot="trailing-controls" label="Label"></mdc-chip>
  <mdc-badge slot="trailing-controls" type="counter" counter="911" max-counter="99"></mdc-badge>
  ${D}
`,T=e=>t` <mdc-accordion
    @shown=${C("onshown")}
    ?disabled=${e.disabled}
    ?expanded=${e.expanded}
    data-aria-level="${e["data-aria-level"]}"
    header-text="${e["header-text"]}"
    prefix-icon="${e["prefix-icon"]}"
    open-button-aria-label="${e.openButtonAriaLabel}"
    close-button-aria-label="${e.closeButtonAriaLabel}"
    size="${e.size}"
    variant="${e.variant}"
  >
    ${o}
  </mdc-accordion>`,ae={title:"Components/accordion/accordion",tags:["autodocs"],component:"mdc-accordion",render:T,argTypes:{...v,...z,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"text"},variant:{control:"select",options:Object.values(l)},"open-button-aria-label":{control:"text"},"close-button-aria-label":{control:"text"},...R(["leading-controls","trailing-controls","default"])}},a={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-regular",disabled:!1,size:r.SMALL,expanded:!0,variant:l.DEFAULT}},i={args:{variant:l.BORDERLESS,"header-text":"Heading","prefix-icon":"placeholder-regular"}},n={args:{size:r.LARGE,"header-text":"Heading","prefix-icon":"placeholder-regular"}},d={args:{size:r.SMALL,"header-text":"Heading","prefix-icon":"placeholder-regular"}},c={render:()=>t`
    <div style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Expanded" expanded>${o}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Not expanded">${o}</mdc-accordion>
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Default Variant">${o}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Borderless Variant" variant="${l.BORDERLESS}"
          >${o}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Small Size">${o}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Large Size" size="${r.LARGE}"
          >${o}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${o}</mdc-accordion
        >
      </section>
    </div>
  `,...V()};var s,p,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.BORDERLESS,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular'
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,g,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: SIZE.LARGE,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular'
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,A,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular'
  }
}`,...(y=(A=d.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var $,L,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Expanded" expanded>\${defaultChildren}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Not expanded">\${defaultChildren}</mdc-accordion>
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Default Variant">\${defaultChildren}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Borderless Variant" variant="\${VARIANT.BORDERLESS}"
          >\${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Small Size">\${defaultChildren}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Large Size" size="\${SIZE.LARGE}"
          >\${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >\${defaultChildren}</mdc-accordion
        >
      </section>
    </div>
  \`,
  ...hideAllControls()
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const ie=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{c as AllVariants,i as BorderlessVariant,a as Example,n as LargeSize,d as SmallSize,ie as __namedExportsOrder,ae as default};
