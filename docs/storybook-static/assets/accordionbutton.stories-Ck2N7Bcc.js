import{i as V}from"./manifest-B9CvakwT.js";import{k as p,R as N}from"./iframe-Di3vHc7R.js";import{t as n}from"./if-defined-D6Gfkqrm.js";import"./index-CFEGaW2O.js";import"./index-BIIJaanJ.js";import{c as D,s as G}from"./commonArgTypes-BG7EqI50.js";import{a as C}from"./utils-B5QUENNQ.js";import{S as t,V as s,T as m}from"./accordionbutton.component-CTs8mDoz.js";import"./preload-helper-C1FmrZbK.js";import"./index-DHTL7P3T.js";import"./index-DudBOMz-.js";import"./index-DTrDRi1E.js";import"./button.component-Cfdl9v6p.js";import"./buttonsimple.component-D1rOXtv-.js";import"./DisabledMixin-B5PHc1QR.js";import"./KeyDownHandledMixin-y4wmVPeu.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,o=p`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,_=e=>p`<div role="${N.MAIN}">
    <mdc-accordionbutton
      @shown=${w("onshown")}
      ?disabled=${e.disabled}
      ?expanded=${e.expanded}
      data-aria-level="${n(e["data-aria-level"])}"
      header-text="${n(e["header-text"])}"
      prefix-icon="${n(e["prefix-icon"])}"
      size="${n(e.size)}"
      variant="${n(e.variant)}"
      toggle-position="${n(e["toggle-position"])}"
    >
      ${o}
    </mdc-accordionbutton>
  </div>`,ae={title:"Components/accordion/accordionbutton",tags:["autodocs"],component:"mdc-accordionbutton",render:_,argTypes:{...D,...G,"data-aria-level":{control:"number"},size:{control:"select",options:Object.values(t)},disabled:{control:"boolean"},expanded:{control:"boolean"},"header-text":{control:"text"},"prefix-icon":{control:"select",options:Object.keys(V)},variant:{control:"select",options:Object.values(s)},"toggle-position":{control:"select",options:Object.values(m)}}},a={args:{"data-aria-level":3,"header-text":"Heading","prefix-icon":"placeholder-bold",disabled:!1,size:t.SMALL,expanded:!0,variant:s.DEFAULT,"toggle-position":m.TRAILING}},r={args:{...a.args,variant:s.BORDERLESS,expanded:!1}},i={args:{...a.args,size:t.LARGE,expanded:!1}},d={args:{...a.args,size:t.SMALL,expanded:!1}},c={args:{...a.args,"toggle-position":m.LEADING,expanded:!0}},l={render:()=>p`
    <div role="${N.MAIN}" style="display: flex; flex-direction: row;">
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Visibility of Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Expanded" expanded
          >${o}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded" data-aria-level="4"
          >${o}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem">
        <h2>Variant Types of Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Default Variant"
          >${o}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="${s.BORDERLESS}"
          data-aria-level="4"
          >${o}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Sizes of Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Small Size"
          >${o}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="${t.LARGE}"
          data-aria-level="4"
          >${o}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h2>Disabled Accordion</h2>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${o}</mdc-accordionbutton
        >
      </section>
    </div>
  `,...C()};var u,x,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT,
    'toggle-position': TOGGLE_POSITION.TRAILING
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,h,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    expanded: false
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,A,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    expanded: false
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,v,$;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    expanded: false
  }
}`,...($=(v=d.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var y,I,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'toggle-position': TOGGLE_POSITION.LEADING,
    expanded: true
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,R,z;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ne=["Example","BorderlessVariant","LargeSize","SmallSize","LeadingToggle","AllVariants"];export{l as AllVariants,r as BorderlessVariant,a as Example,i as LargeSize,c as LeadingToggle,d as SmallSize,ne as __namedExportsOrder,ae as default};
