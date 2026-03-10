import{k as d}from"./iframe-CXCCK7zk.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-B9wm2aIu.js";import"./index-dkLY6-QY.js";import"./index-Csu4WDF2.js";import"./index-DCYn2j0l.js";import"./index-9Ntv7_XT.js";import"./index-5DMr2UEw.js";import"./index-BVlY0WJp.js";import"./index-DblM6A1j.js";import"./index-D-EKF3f0.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-s4aRcPCT.js";import"./buttonsimple.component-Du_C_gTC.js";import"./DisabledMixin-BsjtdTnc.js";import"./KeyDownHandledMixin-DSh9go4o.js";import"./index-CgrR2bZ8.js";import"./button.utils-rNW36Ji7.js";import"./index-SjxeI1HO.js";import"./index-DTrDRi1E.js";import"./if-defined-BuZDkRkv.js";import"./index-D5rCGFXe.js";import"./IconNameMixin-BZtjEIbb.js";import"./index-CLP7P2NQ.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CvEuV4BF.js";import"./linksimple.component-D5dSz51_.js";import"./DataAriaLabelMixin-CygDLXN_.js";import"./link.constants-DaS18i_2.js";import"./index-Bpgy9GCv.js";import"./popover.component-CwmNKHCh.js";import"./BackdropMixin-CHyoexZN.js";import"./popover.constants-Dv1CTtVK.js";import"./index-DO-fJN_a.js";import"./v4-CmTdKEVZ.js";import"./input.component-nwgzkD4x.js";import"./directive-Ctav8iJK.js";import"./index-B7MXLDEc.js";import"./formfieldwrapper.component-vKRQOc7l.js";import"./formfieldwrapper.constants-fLF02Z7M.js";import"./FormInternalsMixin-CWmOmTm6.js";import"./input.constants-fcsyY15b.js";import"./index-FBcNm_xp.js";import"./index-Mzt3XibD.js";import"./radio.constants-Bcb7I-UB.js";import"./index-CyadFqOl.js";import"./toggle.constants-C1JdheCZ.js";import"./ControlTypeMixin-Dw2KPkOe.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
