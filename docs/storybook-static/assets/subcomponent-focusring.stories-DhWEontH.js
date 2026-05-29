import{k as p}from"./iframe-DpwhjFqY.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Dhn9iRdu.js";import"./index-qkloZe8M.js";import"./index-C1Ej_Fhe.js";import"./index-BaqPESSW.js";import"./index-DGXaZKOc.js";import"./index-B6Ttdx1Z.js";import"./index-D98vs0Y_.js";import"./index-ivx2FGAX.js";import"./index-DB0POhBY.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D2JqB8nA.js";import"./buttonsimple.component-BQvW6QXI.js";import"./DisabledMixin-C-fL9D7b.js";import"./KeyDownHandledMixin-DCRA-ssO.js";import"./index-DQ83mzGH.js";import"./button.utils-rNW36Ji7.js";import"./index-CUATo73S.js";import"./index-DTrDRi1E.js";import"./if-defined-DNNAtBik.js";import"./index-BYIXTyh3.js";import"./IconNameMixin-C-BnaWm3.js";import"./index-BogHdeph.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BZwPvdLR.js";import"./linksimple.component-BZAPnEIm.js";import"./DataAriaLabelMixin-BSw8NNrL.js";import"./link.constants-Dkp9VDgB.js";import"./index-DFAHpsN5.js";import"./v4-CmTdKEVZ.js";import"./index-DO7Sc4mQ.js";import"./popover.component-S4vw0V62.js";import"./BackdropMixin-DDQzKzNE.js";import"./popover.constants-Cqub46jY.js";import"./input.component-D59_e1qb.js";import"./directive-Ctav8iJK.js";import"./index-BCZNkb_E.js";import"./formfieldwrapper.component-CSj1syZY.js";import"./formfieldwrapper.constants-ieU2GwY3.js";import"./FormInternalsMixin-CUTdqCqW.js";import"./input.constants-BAg88pc0.js";import"./index-1FC00Iuq.js";import"./index-DV0UMDJS.js";import"./radio.constants-DIx7W6OZ.js";import"./index-KiRMbGb4.js";import"./toggle.constants-QUoNp2bR.js";import"./ControlTypeMixin-C9B-jp-p.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
