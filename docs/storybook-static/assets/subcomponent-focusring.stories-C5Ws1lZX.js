import{k as d}from"./iframe-Dz4a6dNK.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BbENJ0D3.js";import"./index-BQFDMxfn.js";import"./index-Ci75XeLx.js";import"./index-DwnkMqiG.js";import"./index-CqnYI3me.js";import"./index-B58ZLEIM.js";import"./index-LqoG0qcD.js";import"./index-kbg4U8su.js";import"./index-BZAO_hE8.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-izz1zwbo.js";import"./buttonsimple.component-AOUY064x.js";import"./DisabledMixin-BAirPdsU.js";import"./KeyDownHandledMixin-DeHZMei3.js";import"./index-Dg9Q50zk.js";import"./button.utils-rNW36Ji7.js";import"./index-CBPJrR0v.js";import"./index-DTrDRi1E.js";import"./if-defined-BIfV3Rdr.js";import"./index-5eImhW0b.js";import"./IconNameMixin-kScTDfoi.js";import"./index-B6k-xyYE.js";import"./badge.constants-DJQ6-eWk.js";import"./linksimple.component-Ck2gsaUz.js";import"./DataAriaLabelMixin-D3FahrV3.js";import"./link.constants-YBzyrqKE.js";import"./index-CxRHfFyY.js";import"./popover.component-DKGGAHtc.js";import"./BackdropMixin-DViOP0B2.js";import"./popover.constants-DNsvfv_d.js";import"./index-BFKeocVu.js";import"./v4-CmTdKEVZ.js";import"./input.component-CNKOuSYP.js";import"./directive-Ctav8iJK.js";import"./index-CVboDXJG.js";import"./formfieldwrapper.component-8GmfFGUI.js";import"./formfieldwrapper.constants-sDZb5JwL.js";import"./FormInternalsMixin-CFz3fEUa.js";import"./input.constants-RrHczn2N.js";import"./index-IKsRSnJo.js";import"./index-B7sSv7Sk.js";import"./radio.constants-DURsIuj2.js";import"./index-MX4V-mL_.js";import"./toggle.constants-DRRUbaot.js";import"./ControlTypeMixin-_uqJGGnb.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
