import{k as d}from"./iframe-CDUGfpod.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-D96M2OSV.js";import"./index-B976C3y4.js";import"./index-CvS4oiRp.js";import"./index-BxlaZGTm.js";import"./index-DcRDyvHl.js";import"./index-CWu3btcq.js";import"./index-CxJ85y9V.js";import"./index-CRCVkJLH.js";import"./index-Ceg1fBgp.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B45-_3ao.js";import"./buttonsimple.component-DX6DqyQO.js";import"./DisabledMixin-BD7V_ocS.js";import"./KeyToActionMixin-Bw1bZoEt.js";import"./button.utils-rNW36Ji7.js";import"./index-DKlCMvXJ.js";import"./index-CwpeCgfw.js";import"./index-DTrDRi1E.js";import"./if-defined-4tR0mpEg.js";import"./index-Cp0QNLJu.js";import"./IconNameMixin-cy8isjlW.js";import"./index-MCVkG4Ys.js";import"./badge.constants-BKWLU3Us.js";import"./linksimple.component-cJjBPf6z.js";import"./DataAriaLabelMixin-DDDlamya.js";import"./link.constants-H4QhrUrH.js";import"./index-DhjlQlJ3.js";import"./popover.component-Dcc9CLiV.js";import"./BackdropMixin-DKkkte49.js";import"./dom-BlZvhF8F.js";import"./popover.constants-D3dXLwXr.js";import"./index-2NC3VI0d.js";import"./v4-CmTdKEVZ.js";import"./input.component-DjWtTCVv.js";import"./directive-Ctav8iJK.js";import"./index-B8IE5gW2.js";import"./formfieldwrapper.component-UuWZSIjo.js";import"./formfieldwrapper.constants-BU2emjgk.js";import"./FormInternalsMixin-BjK8hZJV.js";import"./input.constants-BecOJBgl.js";import"./index-cP2SRUym.js";import"./index-DCNeCPCa.js";import"./radio.constants-D0hNF0sf.js";import"./index-TsqJI7Fs.js";import"./toggle.constants-DCQEfncn.js";import"./ControlTypeMixin-BomUtsjC.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
