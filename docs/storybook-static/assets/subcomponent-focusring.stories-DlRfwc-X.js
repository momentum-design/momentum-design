import{k as d}from"./iframe-CFjFFVnQ.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BJqVUcLP.js";import"./index-hfqxUD0Q.js";import"./index-BnaH24T7.js";import"./index-B7pnX_pA.js";import"./index-C6M_akDA.js";import"./index-CZeLOyN5.js";import"./index-D1kVSxr2.js";import"./index-F2EqWcfy.js";import"./index-COTnVe9w.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bw1nWzgl.js";import"./buttonsimple.component-CyIOp7rz.js";import"./DisabledMixin-DiYMPzxP.js";import"./KeyDownHandledMixin-DQLFGsB6.js";import"./index-htg2JOVe.js";import"./button.utils-rNW36Ji7.js";import"./index-CvbYr9a5.js";import"./index-DTrDRi1E.js";import"./if-defined-CoqXY0pa.js";import"./index-CH8CMsn9.js";import"./IconNameMixin-DCG8wsPg.js";import"./index-CNg9j_or.js";import"./badge.constants-DbVP3PHu.js";import"./linksimple.component-BZVtJ3PN.js";import"./DataAriaLabelMixin-DTDEFTLN.js";import"./link.constants-CyjmX5uO.js";import"./index-owN5zlgI.js";import"./popover.component-PsT5ok-8.js";import"./BackdropMixin-BjbBLkaY.js";import"./popover.constants-Bspv9wmU.js";import"./index-CJjGqMz2.js";import"./v4-CmTdKEVZ.js";import"./input.component-CTBI2kRt.js";import"./directive-Ctav8iJK.js";import"./index-BvrexYr6.js";import"./formfieldwrapper.component-BKFO2aCo.js";import"./formfieldwrapper.constants-D_3VP715.js";import"./FormInternalsMixin-DkjBdnjW.js";import"./input.constants-C4IxdViY.js";import"./index-CizEBdqk.js";import"./index-CBSFYXpI.js";import"./radio.constants-Bv9KgRzy.js";import"./index-BenWLest.js";import"./toggle.constants-DjmMFntk.js";import"./ControlTypeMixin-DO3DSBUQ.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
