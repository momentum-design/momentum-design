import{k as d}from"./iframe-DmLJKHqi.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DQmw30Qt.js";import"./index-C22QLuAo.js";import"./index-D8d8CyqA.js";import"./index-Dis-FDfS.js";import"./index-CztA9UmN.js";import"./index-CvhNfV5e.js";import"./index-yna2ggMs.js";import"./index-BzWtVGZG.js";import"./index-JY_YluI7.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-ssG5iFdz.js";import"./buttonsimple.component-BCtKSU0P.js";import"./keys-hFXe221I.js";import"./DisabledMixin-HMwAwQ4p.js";import"./TabIndexMixin-jMnGaTL1.js";import"./button.utils-rNW36Ji7.js";import"./index-D2sA77vY.js";import"./index-DGGYU7tf.js";import"./index-DTrDRi1E.js";import"./if-defined-_tidrUDI.js";import"./index-B2MRBBu6.js";import"./IconNameMixin-Dd_wqDts.js";import"./index-Cm4WXwI6.js";import"./badge.constants-CjnM4k-8.js";import"./linksimple.component-CwurwLkZ.js";import"./DataAriaLabelMixin-C2j_RhRF.js";import"./link.constants-P1sO1VcP.js";import"./index-2XY1VPV0.js";import"./popover.component-BE-KEzCA.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-CeG_1hSg.js";import"./index-BDwUedGo.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bye4uaJ-.js";import"./directive-Ctav8iJK.js";import"./index-CefgEjQR.js";import"./formfieldwrapper.component-TwbAsaav.js";import"./FormInternalsMixin-DmXvef0N.js";import"./query-DXShiZ7f.js";import"./input.constants-Bxe3xOzY.js";import"./index-CAv77Gms.js";import"./index-Cfpl9WAt.js";import"./radio.constants-LjbzxZ4u.js";import"./index-XThTXGxI.js";import"./toggle.constants-C9553ady.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
