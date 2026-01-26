import{i as R}from"./manifest-FrmGbvs6.js";import{k as s,R as z}from"./iframe-Dxl5JR04.js";import{t as n}from"./if-defined-C0_rihGE.js";import"./index-C4rT-K8R.js";import"./index-A4-hMiqu.js";import{c as V,s as O}from"./commonArgTypes-BG7EqI50.js";import{a as D}from"./utils-D6nie9pS.js";import{S as r,V as l}from"./accordionbutton.component-vuYtc2h3.js";import"./preload-helper-C1FmrZbK.js";import"./index-BW7z8kIE.js";import"./index-D7Hd0FkL.js";import"./index-DTrDRi1E.js";import"./button.component-CjD-zRkO.js";import"./buttonsimple.component-IBnNJfn4.js";import"./DisabledMixin-CidSUaWv.js";import"./KeyToActionMixin-C-lGXqvj.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,e=s`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,I=o=>s`<div role="${z.MAIN}">
    <mdc-accordionbutton
      @shown=${C("onshown")}
      ?disabled=${o.disabled}
      ?expanded=${o.expanded}
      data-aria-level="${n(o["data-aria-level"])}"
      header-text="${n(o["header-text"])}"
      prefix-icon="${n(o["prefix-icon"])}"
      size="${n(o.size)}"
      variant="${n(o.variant)}"
    >
      ${e}
    </mdc-accordionbutton>
  </div>`,Q={title:"Components/accordion/accordionbutton",tags:["autodocs"],component:"mdc-accordionbutton",render:I,argTypes:{...V,...O,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"select",options:Object.keys(R)},variant:{control:"select",options:Object.values(l)}}},a={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-bold",disabled:!1,size:r.SMALL,expanded:!0,variant:l.DEFAULT}},t={args:{...a.args,variant:l.BORDERLESS,expanded:!1}},i={args:{...a.args,size:r.LARGE,expanded:!1}},d={args:{...a.args,size:r.SMALL,expanded:!1}},c={render:()=>s`
    <div role="${z.MAIN}" style="display: flex; flex-direction: row;">
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Visibility of Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Expanded" expanded
          >${e}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded" data-aria-level="4"
          >${e}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem">
        <h2>Variant Types of Accordion</h2>
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
        <h2>Sizes of Accordion</h2>
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
        <h2>Disabled Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${e}</mdc-accordionbutton
        >
      </section>
    </div>
  `,...D()};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    expanded: false
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    expanded: false
  }
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var A,v,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    expanded: false
  }
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var y,$,L;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div role="\${ROLE.MAIN}" style="display: flex; flex-direction: row;">
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Visibility of Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Expanded" expanded
          >\${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded" data-aria-level="4"
          >\${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem">
        <h2>Variant Types of Accordion</h2>
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
        <h2>Sizes of Accordion</h2>
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
        <h2>Disabled Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >\${defaultChildren}</mdc-accordionbutton
        >
      </section>
    </div>
  \`,
  ...hideAllControls()
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const W=["Example","BorderlessVariant","LargeSize","SmallSize","AllVariants"];export{c as AllVariants,t as BorderlessVariant,a as Example,i as LargeSize,d as SmallSize,W as __namedExportsOrder,Q as default};
