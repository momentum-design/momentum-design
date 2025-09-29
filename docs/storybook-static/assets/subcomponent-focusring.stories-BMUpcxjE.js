import{k as p}from"./iframe-BgXhOCYx.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-C0KrAoLy.js";import"./index-BEcyc1YL.js";import"./index-CRouJDaV.js";import"./index-jgNKsFqa.js";import"./index-BfP4ZiD0.js";import"./index-DgzVTQLV.js";import"./index-uvSQNlb8.js";import"./index-D85NxYx9.js";import"./index-Suz-AH2e.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DefmZVP5.js";import"./button.constants-hMMZmVGK.js";import"./buttonsimple.constants-BjH6K2pT.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CADM0FGX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BDXdUxg1.js";import"./TabIndexMixin-EyLf0pQl.js";import"./index-uHxtwAkA.js";import"./button.utils-rNW36Ji7.js";import"./index-E1qV_feV.js";import"./index-9JJigqjn.js";import"./index-DTrDRi1E.js";import"./if-defined-mvpmADf_.js";import"./index-DqNmnyv0.js";import"./IconNameMixin-CKjOVmG1.js";import"./index-CTQatads.js";import"./index-NYcDueAX.js";import"./badge.constants-D6oqi3zz.js";import"./linksimple.component-DqBZtV1i.js";import"./DataAriaLabelMixin-A4QadQyW.js";import"./link.constants-DYV4W_yz.js";import"./index-BJC30QYR.js";import"./popover.component-Hk0yan1B.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-B2YdueVl.js";import"./index-GJ9WH_41.js";import"./v4-CmTdKEVZ.js";import"./input.component-DNQucJ1L.js";import"./directive-Ctav8iJK.js";import"./index-BKMmBIQ0.js";import"./formfieldwrapper.component-ahLliUnq.js";import"./FormInternalsMixin-B3zQgd0J.js";import"./query-DXShiZ7f.js";import"./input.constants-BzGhzJEp.js";import"./index-D_yUOFCh.js";import"./index-CndF8m7m.js";import"./radio.constants-BmmqHmjY.js";import"./index-CwBgRqWq.js";import"./toggle.constants-BlIBsb4n.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const dt=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,dt as __namedExportsOrder,pt as default};
