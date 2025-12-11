import{k as d}from"./iframe-CpTqlRRA.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-CifBD6pV.js";import"./index-Bhflsjv8.js";import"./index-BWWAKKEQ.js";import"./index-CYoBWRAR.js";import"./index-B_hnt3Xo.js";import"./index-Cp4QYUw1.js";import"./index-ZvzKUI1e.js";import"./index-0KI9Oke1.js";import"./index-CnkJMePp.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C8TbnGYk.js";import"./buttonsimple.component-DovNbVDC.js";import"./TabIndexMixin-Dsqe8mbd.js";import"./DisabledMixin-ADxYaI52.js";import"./button.utils-rNW36Ji7.js";import"./index-U7uVTddP.js";import"./index-DBEBfmOO.js";import"./index-DTrDRi1E.js";import"./if-defined-D201r8_n.js";import"./index-Ct5LnCab.js";import"./IconNameMixin-C84g9-yc.js";import"./index-Dmi5NQm_.js";import"./badge.constants-DJnRFSFL.js";import"./linksimple.component-DZ9HCP8_.js";import"./DataAriaLabelMixin-RSyupb9P.js";import"./link.constants-Bw83eUXF.js";import"./index-CYWg4urq.js";import"./base-DIkkzJ-c.js";import"./popover.component-Dpj6o6-s.js";import"./BackdropMixin-DaSOPby4.js";import"./popover.constants-BXsdP22-.js";import"./index-BC47H1nk.js";import"./v4-CmTdKEVZ.js";import"./input.component-DcpxPi6D.js";import"./directive-Ctav8iJK.js";import"./index-BiAdfBSH.js";import"./formfieldwrapper.component-Du_YEKAA.js";import"./formfieldwrapper.constants-aj6mJglu.js";import"./FormInternalsMixin-BpsZmY9b.js";import"./query-BPxBhMfF.js";import"./input.constants-CzTRLv9-.js";import"./index-CnWlrZF8.js";import"./index-BctStCui.js";import"./radio.constants-8QTVNHpk.js";import"./index--htQ-kcY.js";import"./toggle.constants-DyTxxZuy.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
