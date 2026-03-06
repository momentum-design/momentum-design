import{k as d}from"./iframe-BNuhQAvW.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CH2LuNfX.js";import"./index-DkKX7gmd.js";import"./index-BIajHX1q.js";import"./index-Df5ofAWG.js";import"./index-C4h6H2Ii.js";import"./index-5a5FKHfG.js";import"./index-BOwlOb7X.js";import"./index-BLO0XisU.js";import"./index-Dv5t3QGH.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Du11asli.js";import"./buttonsimple.component-DrbHQSP4.js";import"./DisabledMixin-Cz75y2XI.js";import"./KeyDownHandledMixin-BVzuX7IE.js";import"./index-D8bbfbgA.js";import"./button.utils-rNW36Ji7.js";import"./index-iIqfqlkl.js";import"./index-DTrDRi1E.js";import"./if-defined-Bt1okdpN.js";import"./index-DTNOvuam.js";import"./IconNameMixin-BDegxZ0o.js";import"./index-DuadnEDP.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-VgXtOE1F.js";import"./linksimple.component-rsbis8yY.js";import"./DataAriaLabelMixin-DwsiJRfS.js";import"./link.constants-CIzIGv3S.js";import"./index-D7xFWSWE.js";import"./popover.component-4F5xown_.js";import"./BackdropMixin-B0OYQyQK.js";import"./popover.constants-DB5lx9bc.js";import"./index-DEmRlprY.js";import"./v4-CmTdKEVZ.js";import"./input.component-mbpNmwde.js";import"./directive-Ctav8iJK.js";import"./index-SKJpWoHk.js";import"./formfieldwrapper.component-Cy9c6mqC.js";import"./formfieldwrapper.constants-b7sJde5e.js";import"./FormInternalsMixin-R8RLpIU5.js";import"./input.constants-JUbLb1eD.js";import"./index-g9IVobHn.js";import"./index-CoczH1eN.js";import"./radio.constants-_db6IIbf.js";import"./index-BfW12UVO.js";import"./toggle.constants-DhjejkCU.js";import"./ControlTypeMixin-BES1qhHy.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
