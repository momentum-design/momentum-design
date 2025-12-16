import{k as d}from"./iframe-FsJupGEy.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-kMdpFzRt.js";import"./index-BnNG7dhj.js";import"./index-SRqPgCOP.js";import"./index-QESXO6ce.js";import"./index-CY3uCJhh.js";import"./index-B5UayxwH.js";import"./index-CuVYlqco.js";import"./index-DkDvLmFp.js";import"./index-CzrxIcWG.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CmX6GPpK.js";import"./buttonsimple.component-o79rdvBy.js";import"./TabIndexMixin-MW2uPrRO.js";import"./DisabledMixin-BNs-mtYk.js";import"./button.utils-rNW36Ji7.js";import"./index-CRXnygKO.js";import"./index-C-g8TVkJ.js";import"./index-DTrDRi1E.js";import"./if-defined-DVUNjen0.js";import"./index-Z-3WFJoO.js";import"./IconNameMixin-ByZoFnFr.js";import"./index-DLWa_JnU.js";import"./badge.constants-wbQk2-Mt.js";import"./linksimple.component-Cy_kj96v.js";import"./DataAriaLabelMixin-Bep5TxVc.js";import"./link.constants-CoQUkL57.js";import"./index-vmB8hJWg.js";import"./base-DIkkzJ-c.js";import"./popover.component-yeqLc9oI.js";import"./BackdropMixin-BMHPRKnH.js";import"./popover.constants-BND77qzb.js";import"./index-Cgpp6K1N.js";import"./v4-CmTdKEVZ.js";import"./input.component-CtBpvYvq.js";import"./directive-Ctav8iJK.js";import"./index-BV17IyL7.js";import"./formfieldwrapper.component-DEMWSMmN.js";import"./formfieldwrapper.constants-DH_qqGnt.js";import"./FormInternalsMixin-CYxG01hp.js";import"./query-BPxBhMfF.js";import"./input.constants-CcjQkL8A.js";import"./index-DBF8pNoh.js";import"./index-B2YwQZMv.js";import"./radio.constants-BpQnHn7G.js";import"./index-DdPyM5pK.js";import"./toggle.constants-DHT2-kJ3.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
