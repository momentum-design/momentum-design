import{k as t}from"./iframe-CjQ7Po3D.js";import"./index-CGch3sQO.js";import"./index-5L_Io860.js";import"./index-Bw1IfTEA.js";import"./index-BJ90W63L.js";import"./index-B_ibqgwr.js";import{c as v,s as z}from"./commonArgTypes-BluK8w5L.js";import{d as R,t as V,h as C}from"./utils-CFOyPOhY.js";import{S as r,V as l}from"./accordionbutton.component-CMFILiCI.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bl9rWpTe.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./if-defined-nrQrlDVv.js";import"./roles-CJI3JVG-.js";import"./button.constants-BFmXBtee.js";import"./buttonsimple.constants-BFJZbNAy.js";import"./IconNameMixin-CTkF2V4Z.js";import"./badge.constants-DjZ9Xi3h.js";import"./index-DD4vGOEX.js";import"./button.component-5CwjGCoO.js";import"./buttonsimple.component-zxBeWk1U.js";import"./keys-hFXe221I.js";import"./DisabledMixin-C9Z8HYNo.js";import"./TabIndexMixin-CF3kEJc5.js";import"./button.utils-rNW36Ji7.js";import"./chip.component-DoEON6Zh.js";import"./staticchip.component-BZZ_5neM.js";import"./index-BUV9ka-C.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,T=t`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,e=t`
  <mdc-chip slot="leading-controls" label="Label"></mdc-chip>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-chip slot="trailing-controls" label="Label"></mdc-chip>
  <mdc-badge slot="trailing-controls" type="counter" counter="911" max-counter="99"></mdc-badge>
  ${T}
`,O=o=>t` <mdc-accordion
    @shown=${D("onshown")}
    ?disabled=${o.disabled}
    ?expanded=${o.expanded}
    data-aria-level="${o["data-aria-level"]}"
    header-text="${o["header-text"]}"
    prefix-icon="${o["prefix-icon"]}"
    size="${o.size}"
    variant="${o.variant}"
  >
    ${e}
  </mdc-accordion>`,se={title:"Components/accordion/accordion",tags:["autodocs"],component:"mdc-accordion",render:O,argTypes:{...v,...z,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"text"},variant:{control:"select",options:Object.values(l)},...R(["leading-controls","trailing-controls","default"]),...V(["--mdc-accordionbutton-border-color","--mdc-accordionbutton-hover-color","--mdc-accordionbutton-active-color","--mdc-accordionbutton-disabled-color"])}},i={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-regular",disabled:!1,size:r.SMALL,expanded:!0,variant:l.DEFAULT}},a={args:{variant:l.BORDERLESS,"header-text":"Heading","prefix-icon":"placeholder-regular"}},d={args:{size:r.LARGE,"header-text":"Heading","prefix-icon":"placeholder-regular"}},n={args:{size:r.SMALL,"header-text":"Heading","prefix-icon":"placeholder-regular"}},c={render:()=>t`
    <div style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Expanded" expanded>${e}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Not expanded">${e}</mdc-accordion>
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Default Variant">${e}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Borderless Variant" variant="${l.BORDERLESS}"
          >${e}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Small Size">${e}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Large Size" size="${r.LARGE}"
          >${e}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${e}</mdc-accordion
        >
      </section>
    </div>
  `,...C()};var s,m,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,x,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.BORDERLESS,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular'
  }
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var f,g,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: SIZE.LARGE,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular'
  }
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,A,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular'
  }
}`,...(y=(A=n.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var $,E,L;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const me=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{c as AllVariants,a as BorderlessVariant,i as Example,d as LargeSize,n as SmallSize,me as __namedExportsOrder,se as default};
