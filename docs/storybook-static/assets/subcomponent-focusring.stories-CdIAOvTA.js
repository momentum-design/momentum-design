import{k as d}from"./iframe-5GhuLSNT.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DpKNC7b1.js";import"./index-DSJeKT6w.js";import"./index-yVHrU4Nz.js";import"./index-B86vLXVn.js";import"./index-DEP7IMkx.js";import"./index-BeBg6vuL.js";import"./index-Dlv9mbXO.js";import"./index-BrT2tBMw.js";import"./index-B0095evs.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Cgrg7kv0.js";import"./buttonsimple.component-Lr2LsVPI.js";import"./TabIndexMixin-ChM3fVPx.js";import"./DisabledMixin-b5vgUwe2.js";import"./button.utils-rNW36Ji7.js";import"./index-CZmWnR20.js";import"./index-Ck3XcN8V.js";import"./index-DTrDRi1E.js";import"./if-defined-Brvanskx.js";import"./index-DxlLh2JL.js";import"./IconNameMixin-i8ZdKhNl.js";import"./index-CGvFpSJI.js";import"./badge.constants-Bl_tFb7U.js";import"./linksimple.component-BiCyKuTN.js";import"./DataAriaLabelMixin-BMsKWw_k.js";import"./link.constants-D2XzOEfK.js";import"./index-CGKgMaJk.js";import"./base-DIkkzJ-c.js";import"./popover.component-CLHl6xNb.js";import"./BackdropMixin-0VXsQ3AK.js";import"./index-BqqZxVGc.js";import"./v4-CmTdKEVZ.js";import"./input.component-CevbKSz7.js";import"./directive-Ctav8iJK.js";import"./index-BmmVHsWS.js";import"./formfieldwrapper.component-CDeMqzKe.js";import"./formfieldwrapper.constants-DmA4-VpO.js";import"./FormInternalsMixin-CFkD-wFC.js";import"./query-BPxBhMfF.js";import"./input.constants-B_qbAwDz.js";import"./index-C5Wl6Ib9.js";import"./index-CdyUoQXr.js";import"./radio.constants-Dj33-xa6.js";import"./index-2-UE6ijd.js";import"./toggle.constants-DfgZ5I-V.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
