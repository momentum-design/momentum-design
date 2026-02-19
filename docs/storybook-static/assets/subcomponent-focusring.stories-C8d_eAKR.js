import{k as d}from"./iframe-CeDQ4RI4.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BrJf4FKR.js";import"./index-H0GkuNl1.js";import"./index-DYesc5mW.js";import"./index-x3hspM_l.js";import"./index-D0n7mm5n.js";import"./index-DdW5BV-Q.js";import"./index-BST83VEa.js";import"./index-BJ2ciRYu.js";import"./index-BHSgLKYQ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BJALHUsi.js";import"./buttonsimple.component-CSCnxgg2.js";import"./DisabledMixin-DHC8T_R7.js";import"./KeyDownHandledMixin-XYXz5-oV.js";import"./index-rYQn3BpT.js";import"./button.utils-rNW36Ji7.js";import"./index-CaAfbe5R.js";import"./index-DTrDRi1E.js";import"./if-defined-Cl8xk6N7.js";import"./index-C88Tk3nD.js";import"./IconNameMixin-C_pvxNQh.js";import"./index-DCry0o7w.js";import"./badge.constants-BDNPVvdX.js";import"./linksimple.component-BtrnGdjg.js";import"./DataAriaLabelMixin-BI4bZWqY.js";import"./link.constants-CG1tN51n.js";import"./index-C3-xOBvg.js";import"./popover.component-CVUHmWtI.js";import"./BackdropMixin-CnBW4YxJ.js";import"./popover.constants-m8BpQDhm.js";import"./index-BwpYHw_c.js";import"./v4-CmTdKEVZ.js";import"./input.component-BMDV6qIL.js";import"./directive-Ctav8iJK.js";import"./index-BzAR9vUw.js";import"./formfieldwrapper.component-CIwErNpd.js";import"./formfieldwrapper.constants-CZTnpG8k.js";import"./FormInternalsMixin-DqEewETH.js";import"./input.constants-u4ULq5N6.js";import"./index-DyihAncK.js";import"./index-CqCo3uby.js";import"./radio.constants-DlbrQtAZ.js";import"./index-WPT5k6dq.js";import"./toggle.constants-lkLjW1j8.js";import"./ControlTypeMixin-LU7mgXbE.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
