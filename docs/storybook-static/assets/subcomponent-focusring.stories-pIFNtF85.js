import{k as d}from"./iframe-Zf8S4XXr.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-BxtG-J7_.js";import"./index-BaXkrvNQ.js";import"./index-DnsG-Ttq.js";import"./index-DXUyQbHz.js";import"./index-dN6ip1gR.js";import"./index-B-Sj3xhS.js";import"./index-Byq0WE7d.js";import"./index-BwxIamRk.js";import"./index-BsQSLKPa.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-6W7LCGkA.js";import"./buttonsimple.component-Wudc5woz.js";import"./TabIndexMixin-D7wC9CdO.js";import"./DisabledMixin-DSsu06eJ.js";import"./button.utils-rNW36Ji7.js";import"./index-D7qh9X_j.js";import"./index-9WskqfxG.js";import"./index-DTrDRi1E.js";import"./if-defined-BQWJj0RV.js";import"./index-DCp6Sd9n.js";import"./IconNameMixin-UQitPDRg.js";import"./index-BsguFLsy.js";import"./badge.constants-CObrFRbm.js";import"./linksimple.component-UYH-I8pB.js";import"./DataAriaLabelMixin-DveGvTLx.js";import"./link.constants-oFKUBecz.js";import"./index-CHUmLE_A.js";import"./base-DIkkzJ-c.js";import"./popover.component-Cl6vr77l.js";import"./BackdropMixin-BQuBw2vV.js";import"./popover.constants-Bap0emLb.js";import"./index-79rZJpH7.js";import"./v4-CmTdKEVZ.js";import"./input.component-C2ACSbTz.js";import"./directive-Ctav8iJK.js";import"./index-DNNFT9no.js";import"./formfieldwrapper.component-DGftBtLy.js";import"./formfieldwrapper.constants-2ozCuejz.js";import"./FormInternalsMixin-oD5aignM.js";import"./query-BPxBhMfF.js";import"./input.constants-C5swL4Rj.js";import"./index-CmIOvFkX.js";import"./index-DB1TdzTj.js";import"./radio.constants-BFGY3cFK.js";import"./index-D2redggu.js";import"./toggle.constants-DxC146JN.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
