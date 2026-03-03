import{k as d}from"./iframe-CSEbSeLd.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-9M4Bysc_.js";import"./index-DeG5oytA.js";import"./index-BPesxxsR.js";import"./index-D7kw3-q2.js";import"./index-sH-FK0eR.js";import"./index-Ct3HzyA7.js";import"./index-D20c2vsO.js";import"./index-C4t3EbfL.js";import"./index-DGCZRqE1.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bajyxijp.js";import"./buttonsimple.component-DsePXjWE.js";import"./DisabledMixin-BYOr4kmy.js";import"./KeyDownHandledMixin-BvrOgjpf.js";import"./index-CFX7vLLY.js";import"./button.utils-rNW36Ji7.js";import"./index-79A2f75A.js";import"./index-DTrDRi1E.js";import"./if-defined-DGbgoXGT.js";import"./index-CnuupceL.js";import"./IconNameMixin-DMoyQKHy.js";import"./index-C_UQyNUk.js";import"./badge.constants-BM33X-22.js";import"./linksimple.component-BFz_EvdY.js";import"./DataAriaLabelMixin-CAp7N-Gi.js";import"./link.constants-CYcPWEcU.js";import"./index-CypMt3w0.js";import"./popover.component-JK6CqS_M.js";import"./BackdropMixin-93y7-T8N.js";import"./popover.constants-TqoNo-Pq.js";import"./index-B6F4dYoH.js";import"./v4-CmTdKEVZ.js";import"./input.component-CcM8jnoB.js";import"./directive-Ctav8iJK.js";import"./index-CfwJsUr7.js";import"./formfieldwrapper.component-BH7CnX-F.js";import"./formfieldwrapper.constants-d11lojiF.js";import"./FormInternalsMixin-cE7VSPQ_.js";import"./input.constants-DDh1KcQY.js";import"./index-DK04vUDs.js";import"./index-C1feI1Mt.js";import"./radio.constants-WL6PD48P.js";import"./index-C3guw4VT.js";import"./toggle.constants-D4QREVTR.js";import"./ControlTypeMixin-BAFW96aR.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
