import{k as d}from"./iframe-BStS_Y8s.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-B9bVnfJn.js";import"./index-BtlyCIlH.js";import"./index-DxuSqXRO.js";import"./index-EObigpCd.js";import"./index-DOeOdd19.js";import"./index-De4I0Qdn.js";import"./index-DoD_k5xO.js";import"./index-BJ-RmjsR.js";import"./index-DjjElB2f.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DHEvsnvI.js";import"./buttonsimple.component-IlmHUmXv.js";import"./DisabledMixin-CvGoz2-R.js";import"./KeyToActionMixin-DDHGwyRi.js";import"./button.utils-rNW36Ji7.js";import"./index-DYKYj7GA.js";import"./index-DrwJXeAu.js";import"./index-DTrDRi1E.js";import"./if-defined-D6-9s3Xi.js";import"./index-DXIu9V3k.js";import"./IconNameMixin-DBwfB08P.js";import"./index-C-0UT6Mh.js";import"./badge.constants-tWFgbHFS.js";import"./linksimple.component-CrXsJepB.js";import"./DataAriaLabelMixin-D7VBosaA.js";import"./link.constants-BdrgQilB.js";import"./index-B6RPdVzl.js";import"./popover.component-CYDMN8yQ.js";import"./BackdropMixin-DRyLmDBq.js";import"./dom-BlZvhF8F.js";import"./popover.constants-CEz44EE7.js";import"./index-Ci4KnPWB.js";import"./v4-CmTdKEVZ.js";import"./input.component-vh9JijYL.js";import"./directive-Ctav8iJK.js";import"./index-5ZnO8Zth.js";import"./formfieldwrapper.component-rFM1mdJ0.js";import"./formfieldwrapper.constants-Cupy-mJC.js";import"./FormInternalsMixin-BrHZcC9T.js";import"./input.constants-CyVdWdQ-.js";import"./index-fLI_6VMQ.js";import"./index-BFjFby73.js";import"./radio.constants-9sqHGjTT.js";import"./index-FTlFMLL7.js";import"./toggle.constants-Cz2iEDOq.js";import"./ControlTypeMixin-DzuvtXq_.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
