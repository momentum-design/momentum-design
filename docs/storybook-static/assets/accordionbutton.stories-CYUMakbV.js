import{a as z}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as s}from"./lit-element-D5KKan5q.js";import{t as a}from"./if-defined-D5BV9-c0.js";import"./index-Dp5eQUYH.js";import"./index-NksyJu3_.js";import{c as V,s as R}from"./commonArgTypes-BluK8w5L.js";import{d as C,t as D,h as w}from"./utils-CFOyPOhY.js";import{S as r,V as l}from"./accordionbutton.component-6l4jYIlg.js";import"./v4-CQkTLCs1.js";import"./index-CdEYfb87.js";import"./iframe-DHkLyGiB.js";import"../sb-preview/runtime.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-CqVtAZCJ.js";import"./index-DHsMOcdX.js";import"./button.component-D5eG231X.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";const e=s`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,T=o=>s` <mdc-accordionbutton
    @shown=${z("onshown")}
    ?disabled=${o.disabled}
    ?expanded=${o.expanded}
    data-aria-level="${a(o["data-aria-level"])}"
    header-text="${a(o["header-text"])}"
    prefix-icon="${a(o["prefix-icon"])}"
    size="${a(o.size)}"
    variant="${a(o.variant)}"
  >
    ${e}
  </mdc-accordionbutton>`,ce={title:"Components/accordion/accordionbutton",tags:["autodocs"],component:"mdc-accordionbutton",render:T,parameters:{badges:["stable"]},argTypes:{...V,...R,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"text"},variant:{control:"select",options:Object.values(l)},...C(["default"]),...D(["--mdc-accordionbutton-border-color","--mdc-accordionbutton-hover-color","--mdc-accordionbutton-active-color","--mdc-accordionbutton-disabled-color"])}},t={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-bold",disabled:!1,size:r.SMALL,expanded:!0,variant:l.DEFAULT}},n={args:{variant:l.BORDERLESS,"header-text":"Heading","prefix-icon":"placeholder-bold"}},i={args:{size:r.LARGE,"header-text":"Heading","prefix-icon":"placeholder-bold"}},d={args:{size:r.SMALL,"header-text":"Heading","prefix-icon":"placeholder-bold"}},c={render:()=>s`
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
          size="${r.LARGE}"
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
  `,...w()};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const le=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{c as AllVariants,n as BorderlessVariant,t as Example,i as LargeSize,d as SmallSize,le as __namedExportsOrder,ce as default};
