import{k as s}from"./iframe-Jn7RecH3.js";import{t as a}from"./if-defined-DcDceuTE.js";import"./index-DzyfQq83.js";import"./index-Ct9ahQwI.js";import{c as z,s as R}from"./commonArgTypes-BluK8w5L.js";import{d as V,h as C}from"./utils-Dd_sfl9-.js";import{S as n,V as l}from"./accordionbutton.component-D9R-n2j3.js";import"./preload-helper-C1FmrZbK.js";import"./index-r0xkQCBZ.js";import"./index-CE7S_vkO.js";import"./index-DTrDRi1E.js";import"./button.component-CV58RRI2.js";import"./buttonsimple.component-F0YeC2Jz.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CGJfw_7W.js";import"./TabIndexMixin-Y1wIO-IA.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,e=s`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,T=o=>s` <mdc-accordionbutton
    @shown=${D("onshown")}
    ?disabled=${o.disabled}
    ?expanded=${o.expanded}
    data-aria-level="${a(o["data-aria-level"])}"
    header-text="${a(o["header-text"])}"
    prefix-icon="${a(o["prefix-icon"])}"
    size="${a(o.size)}"
    variant="${a(o.variant)}"
  >
    ${e}
  </mdc-accordionbutton>`,P={title:"Components/accordion/accordionbutton",tags:["autodocs"],component:"mdc-accordionbutton",render:T,argTypes:{...z,...R,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(n)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"text"},variant:{control:"select",options:Object.values(l)},...V(["default"])}},r={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-bold",disabled:!1,size:n.SMALL,expanded:!0,variant:l.DEFAULT}},t={args:{variant:l.BORDERLESS,"header-text":"Heading","prefix-icon":"placeholder-bold"}},i={args:{size:n.LARGE,"header-text":"Heading","prefix-icon":"placeholder-bold"}},d={args:{size:n.SMALL,"header-text":"Heading","prefix-icon":"placeholder-bold"}},c={render:()=>s`
    <div style="display: flex; flex-direction: row;">
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Expanded" expanded
          >${e}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded" data-aria-level="4"
          >${e}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Default Variant"
          >${e}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="${l.BORDERLESS}"
          data-aria-level="4"
          >${e}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Small Size"
          >${e}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="${n.LARGE}"
          data-aria-level="4"
          >${e}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${e}</mdc-accordionbutton
        >
      </section>
    </div>
  `,...C()};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.BORDERLESS,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: SIZE.LARGE,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var A,v,y;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var $,E,L;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: row;">
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Expanded" expanded
          >\${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded" data-aria-level="4"
          >\${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Default Variant"
          >\${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="\${VARIANT.BORDERLESS}"
          data-aria-level="4"
          >\${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Small Size"
          >\${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="\${SIZE.LARGE}"
          data-aria-level="4"
          >\${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >\${defaultChildren}</mdc-accordionbutton
        >
      </section>
    </div>
  \`,
  ...hideAllControls()
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Q=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{c as AllVariants,t as BorderlessVariant,r as Example,i as LargeSize,d as SmallSize,Q as __namedExportsOrder,P as default};
