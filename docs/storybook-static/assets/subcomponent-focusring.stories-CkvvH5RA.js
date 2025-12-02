import{k as d}from"./iframe-CWfhylcR.js";import{h as p}from"./utils-CO8B6ZcN.js";import"./index-BdaHM0wF.js";import"./index-C3jHGe8c.js";import"./index-DoJ9ujh7.js";import"./index-C9uEi19y.js";import"./index-CMA_yifj.js";import"./index-cuyOgifY.js";import"./index-DXtd-e4y.js";import"./index-DEhVRkoz.js";import"./index-C-UxuyYC.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-wr3Qi_fv.js";import"./buttonsimple.component-DltY9huG.js";import"./TabIndexMixin-Dj0rbIIo.js";import"./DisabledMixin-lt5dcxac.js";import"./button.utils-rNW36Ji7.js";import"./index-Dpum241T.js";import"./index-R6jtTSLX.js";import"./index-DTrDRi1E.js";import"./if-defined-CtiHmB4N.js";import"./index-zl17Rk8W.js";import"./IconNameMixin-D8cA1TGu.js";import"./index-Dw8BIkKV.js";import"./badge.constants-BzhdpIE9.js";import"./linksimple.component-DtZ088Q8.js";import"./DataAriaLabelMixin-Cr9xs3ah.js";import"./link.constants-n-1rEgFd.js";import"./index-COYcWv3y.js";import"./base-DIkkzJ-c.js";import"./popover.component-DFabeQYv.js";import"./BackdropMixin-D9-wk_GO.js";import"./index-DX4-MVbE.js";import"./v4-CmTdKEVZ.js";import"./input.component-DnPKccuL.js";import"./directive-Ctav8iJK.js";import"./index-CsTRcZEN.js";import"./formfieldwrapper.component-DgghKzda.js";import"./formfieldwrapper.constants-DFdchhma.js";import"./FormInternalsMixin-B0kitIfG.js";import"./query-BPxBhMfF.js";import"./input.constants-Bjs7YoRi.js";import"./index-CkwubYoa.js";import"./index-vE6tEVSn.js";import"./radio.constants-CqfviB2R.js";import"./index-Tu67fQMY.js";import"./toggle.constants-CJbgDVtk.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
