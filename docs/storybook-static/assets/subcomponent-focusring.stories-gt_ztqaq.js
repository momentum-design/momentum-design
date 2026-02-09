import{k as d}from"./iframe-lqtK641B.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-sox3K26K.js";import"./index-DCkGQvPv.js";import"./index-CAKl0bJl.js";import"./index-B2AMldNV.js";import"./index-CFOaZf5S.js";import"./index-cWPYyyJK.js";import"./index-Bxns6mpA.js";import"./index-ro9xYbIt.js";import"./index-Dtif5VB_.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C6ft3dfF.js";import"./buttonsimple.component-Bsurvu8q.js";import"./DisabledMixin-X-8L2ccJ.js";import"./KeyDownHandledMixin-U8QDj86m.js";import"./index-IC5axiHf.js";import"./button.utils-rNW36Ji7.js";import"./index-CKP4Olr3.js";import"./index-DTrDRi1E.js";import"./if-defined-B9Bf-iG8.js";import"./index-DBnUiMsy.js";import"./IconNameMixin-CWG3I-1A.js";import"./index-CG_WUKuh.js";import"./badge.constants-D3CRhKp6.js";import"./linksimple.component-C7qkiVF_.js";import"./DataAriaLabelMixin-BhR_JgjZ.js";import"./link.constants-vR0asqD1.js";import"./index-Eg1xDsR5.js";import"./popover.component-BySjo-Lv.js";import"./BackdropMixin-CT1n56ho.js";import"./popover.constants-CGmF6nv-.js";import"./index-COIi7kkV.js";import"./v4-CmTdKEVZ.js";import"./input.component-CdLuHmRo.js";import"./directive-Ctav8iJK.js";import"./index-WrqfW4WN.js";import"./formfieldwrapper.component-DSCpq0gv.js";import"./formfieldwrapper.constants-CAoyP15Q.js";import"./FormInternalsMixin-B8ryZyrx.js";import"./input.constants-BZiVhaeP.js";import"./index-D0dBJRbN.js";import"./index-Tr5aUhft.js";import"./radio.constants-BEfOjkmZ.js";import"./index-BSeCb9lg.js";import"./toggle.constants-Cb-JwSWa.js";import"./ControlTypeMixin-DGubvEde.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...p(["shape"])},render:()=>d` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>\`
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,rt as default};
