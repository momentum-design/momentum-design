import{k as d}from"./iframe-C9zBfpfZ.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-aC5r5DBS.js";import"./index-BxgAlxlo.js";import"./index-CfXO8tvQ.js";import"./index-A3SSTHhh.js";import"./index-RQLaBtXf.js";import"./index-DBAIxAGN.js";import"./index-BuF13Kjd.js";import"./index-NTPsIo5u.js";import"./index-CeT9mEnH.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D8sp4KLM.js";import"./buttonsimple.component-E9KKvIDw.js";import"./TabIndexMixin-D7RnmEw2.js";import"./DisabledMixin-5uIk7xY-.js";import"./button.utils-rNW36Ji7.js";import"./index-D5LOnZrI.js";import"./index-x4X1EYSm.js";import"./index-DTrDRi1E.js";import"./if-defined-Cp73i_az.js";import"./index-B7Q9PmsH.js";import"./IconNameMixin-BVlrRYvw.js";import"./index-CnOY2tLp.js";import"./badge.constants-DhmsKb3D.js";import"./linksimple.component-BZu5yR2M.js";import"./DataAriaLabelMixin-Dy-wPdti.js";import"./link.constants-BwoNogHw.js";import"./index-CUVRa-jk.js";import"./base-DIkkzJ-c.js";import"./popover.component-CbSBswom.js";import"./BackdropMixin-Yj8-oC9G.js";import"./popover.constants-DDO32NNp.js";import"./index-pJCWj_wx.js";import"./v4-CmTdKEVZ.js";import"./input.component-Cy4f9vhJ.js";import"./directive-Ctav8iJK.js";import"./index-BxGUIQ-j.js";import"./formfieldwrapper.component-D5XYmqyf.js";import"./formfieldwrapper.constants-CjQ631D2.js";import"./FormInternalsMixin-BAyTonBN.js";import"./query-BPxBhMfF.js";import"./input.constants-1Etpgpj2.js";import"./index-nlX54-W4.js";import"./index-CvY0x5fh.js";import"./radio.constants-BcxP_PkJ.js";import"./index-DjeScPHl.js";import"./toggle.constants-BIU7yV23.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
