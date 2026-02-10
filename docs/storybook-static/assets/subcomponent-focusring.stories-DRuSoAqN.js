import{k as d}from"./iframe-Cgnjs7Wo.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-4iQF_n--.js";import"./index-DBLUAyNq.js";import"./index-D8L6x65L.js";import"./index-J2de25md.js";import"./index-q_SrX1wG.js";import"./index-DojHgSCI.js";import"./index-CpVovCon.js";import"./index-BnzlEyQ6.js";import"./index-CSedc7Um.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CIkT8gDw.js";import"./buttonsimple.component-CNbbx4w4.js";import"./DisabledMixin-BLgOOnKX.js";import"./KeyDownHandledMixin-yqNFonEr.js";import"./index-B4M2EJx2.js";import"./button.utils-rNW36Ji7.js";import"./index-CzFY6ATS.js";import"./index-DTrDRi1E.js";import"./if-defined-f131Qllb.js";import"./index-C4CB87NL.js";import"./IconNameMixin-C0s00Bd8.js";import"./index-BdzeegDc.js";import"./badge.constants-DprEzDNn.js";import"./linksimple.component-Dt1et6ym.js";import"./DataAriaLabelMixin-CH4HEyMV.js";import"./link.constants-BZVGFMT5.js";import"./index-DCBH5QGT.js";import"./popover.component-BEDzYT9p.js";import"./BackdropMixin-Ifzym4Gk.js";import"./popover.constants-XNfCQcX_.js";import"./index-DBhOHi9B.js";import"./v4-CmTdKEVZ.js";import"./input.component-B0TUsccI.js";import"./directive-Ctav8iJK.js";import"./index-B5mXyJOx.js";import"./formfieldwrapper.component-DR2ll2Ve.js";import"./formfieldwrapper.constants-DymGAlLV.js";import"./FormInternalsMixin-1QnMRgEp.js";import"./input.constants-eVMnluz8.js";import"./index-l_ix1-XE.js";import"./index-DB_wB5kS.js";import"./radio.constants-4pnphgel.js";import"./index-DGUTxu7E.js";import"./toggle.constants-CxwNgK5x.js";import"./ControlTypeMixin-BuUhy9QJ.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
