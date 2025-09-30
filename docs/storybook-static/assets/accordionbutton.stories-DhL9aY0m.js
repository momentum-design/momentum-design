import{k as s}from"./iframe-Bxc2R5W_.js";import{t as a}from"./if-defined-DVfQj5LO.js";import"./index-Ciumiv4s.js";import"./index-nDJW9jSw.js";import{c as z,s as R}from"./commonArgTypes-BluK8w5L.js";import{d as V,t as C,h as D}from"./utils-CFOyPOhY.js";import{S as t,V as l}from"./accordionbutton.component-VlB8LP37.js";import"./preload-helper-C1FmrZbK.js";import"./index-DG364haw.js";import"./index-5AgTE8RP.js";import"./index-D1dgoSI_.js";import"./index-DTrDRi1E.js";import"./index-CRnj0VF_.js";import"./button.component-DsxhPiTd.js";import"./button.constants-Cm7ClJ2o.js";import"./buttonsimple.constants-CXkLv1x2.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-BrgqCizE.js";import"./keys-hFXe221I.js";import"./DisabledMixin-EWLkxMJG.js";import"./TabIndexMixin-DviywP-V.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,e=s`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,w=o=>s` <mdc-accordionbutton
    @shown=${T("onshown")}
    ?disabled=${o.disabled}
    ?expanded=${o.expanded}
    data-aria-level="${a(o["data-aria-level"])}"
    header-text="${a(o["header-text"])}"
    prefix-icon="${a(o["prefix-icon"])}"
    size="${a(o.size)}"
    variant="${a(o.variant)}"
  >
    ${e}
  </mdc-accordionbutton>`,ae={title:"Components/accordion/accordionbutton",tags:["autodocs"],component:"mdc-accordionbutton",render:w,argTypes:{...z,...R,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(t)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"text"},variant:{control:"select",options:Object.values(l)},...V(["default"]),...C(["--mdc-accordionbutton-border-color","--mdc-accordionbutton-hover-color","--mdc-accordionbutton-active-color","--mdc-accordionbutton-disabled-color"])}},r={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-bold",disabled:!1,size:t.SMALL,expanded:!0,variant:l.DEFAULT}},n={args:{variant:l.BORDERLESS,"header-text":"Heading","prefix-icon":"placeholder-bold"}},i={args:{size:t.LARGE,"header-text":"Heading","prefix-icon":"placeholder-bold"}},d={args:{size:t.SMALL,"header-text":"Heading","prefix-icon":"placeholder-bold"}},c={render:()=>s`
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
          size="${t.LARGE}"
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
  `,...D()};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.BORDERLESS,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const te=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{c as AllVariants,n as BorderlessVariant,r as Example,i as LargeSize,d as SmallSize,te as __namedExportsOrder,ae as default};
