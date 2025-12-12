import{k as d}from"./iframe-Dihsx-NL.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-CPsnPSUU.js";import"./index-0NwsxF51.js";import"./index-0-PKjGEA.js";import"./index-vsoyOVpU.js";import"./index-ICZ_kpDA.js";import"./index-D5HZeq08.js";import"./index-xN1GvEjr.js";import"./index-D67pNdt2.js";import"./index-BeWVOgUe.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DOxkaYeg.js";import"./buttonsimple.component-D3KCa39w.js";import"./TabIndexMixin-B9Csws3O.js";import"./DisabledMixin-BvD2odSx.js";import"./button.utils-rNW36Ji7.js";import"./index-DAxnXaXz.js";import"./index-CGtjRWZl.js";import"./index-DTrDRi1E.js";import"./if-defined-D-bzpMf3.js";import"./index-BMcR5bOI.js";import"./IconNameMixin-lWfER01s.js";import"./index-CUPlVhdy.js";import"./badge.constants-CbKWigRi.js";import"./linksimple.component-B8o6mcUY.js";import"./DataAriaLabelMixin-FB18SW9h.js";import"./link.constants-BhDM0gaw.js";import"./index-CkCjnthJ.js";import"./base-DIkkzJ-c.js";import"./popover.component-Wqop1Uto.js";import"./BackdropMixin-B6FOHqSR.js";import"./popover.constants-BshN2TV6.js";import"./index-CL8OOVY3.js";import"./v4-CmTdKEVZ.js";import"./input.component-vlDinmUW.js";import"./directive-Ctav8iJK.js";import"./index-65bQ09-A.js";import"./formfieldwrapper.component-BrhdlKlX.js";import"./formfieldwrapper.constants-DrAaXlJS.js";import"./FormInternalsMixin-DNnHoqMW.js";import"./query-BPxBhMfF.js";import"./input.constants-D5JeDUc-.js";import"./index-DH_bMXhE.js";import"./index-C0_1C_qP.js";import"./radio.constants-B9PQMz7a.js";import"./index-Tp3sJ5iN.js";import"./toggle.constants-DtH5dqaN.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
