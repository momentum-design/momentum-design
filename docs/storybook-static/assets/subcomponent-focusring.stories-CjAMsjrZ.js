import{k as d}from"./iframe-C93ychXb.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-DUmxh51I.js";import"./index-CLj8CKut.js";import"./index-DskGhvxn.js";import"./index-Be2OJv_s.js";import"./index-BUfSgImA.js";import"./index-DLcv66c_.js";import"./index-CPdfXf18.js";import"./index-BzsGbeVl.js";import"./index-DGPlGXZN.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CnBjEV1_.js";import"./buttonsimple.component-X2HTReun.js";import"./TabIndexMixin-B6h01s2W.js";import"./DisabledMixin-BVCCD_zI.js";import"./button.utils-rNW36Ji7.js";import"./index-B7qECx3P.js";import"./index-bgO36agF.js";import"./index-DTrDRi1E.js";import"./if-defined-CnyXlyTe.js";import"./index-BHMp62aL.js";import"./IconNameMixin-DS7O60Bi.js";import"./index-C34hOA_R.js";import"./badge.constants-DpbVvViU.js";import"./linksimple.component-B2Sq36jz.js";import"./DataAriaLabelMixin-rJTBAIkI.js";import"./link.constants-BmtTf-56.js";import"./index-uhIHmwRL.js";import"./base-DIkkzJ-c.js";import"./popover.component-SNyoClXb.js";import"./BackdropMixin-BBVMbF3b.js";import"./popover.constants-Dzrzzlst.js";import"./index-tNbq4o_O.js";import"./v4-CmTdKEVZ.js";import"./input.component-Cuy1l6Kb.js";import"./directive-Ctav8iJK.js";import"./index-B-OZwfEI.js";import"./formfieldwrapper.component-DQvRDTYt.js";import"./formfieldwrapper.constants-Ct7UVwkh.js";import"./FormInternalsMixin-BYochhPs.js";import"./query-BPxBhMfF.js";import"./input.constants-BCMw3YID.js";import"./index-DpoYkrLS.js";import"./index-xg1gX4hi.js";import"./radio.constants-C2YHQ8dG.js";import"./index-DpSNCVgb.js";import"./toggle.constants-CnLTftl5.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
