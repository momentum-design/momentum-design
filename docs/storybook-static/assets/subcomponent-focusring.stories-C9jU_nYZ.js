import{k as d}from"./iframe-DdxUAY1B.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-C5XHBhP8.js";import"./index-CNSg0U4u.js";import"./index-lCyW-pIH.js";import"./index-BhiDSDTs.js";import"./index-BgOWZeSS.js";import"./index-lmgrmRTM.js";import"./index-kqv67PA_.js";import"./index-C2X_SGQd.js";import"./index-zYMJVYaH.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CbXeW251.js";import"./buttonsimple.component-CnciPr00.js";import"./DisabledMixin-6xG8HQLy.js";import"./KeyDownHandledMixin-BChvhqno.js";import"./index-CdmTrLLA.js";import"./button.utils-rNW36Ji7.js";import"./index-D1jPjw4Q.js";import"./index-DTrDRi1E.js";import"./if-defined-Dx73VnWw.js";import"./index-zhelQBxw.js";import"./IconNameMixin-CVdU3l_W.js";import"./index-BcjDbPeR.js";import"./badge.constants-BU1zRJTh.js";import"./linksimple.component-CpufjmN0.js";import"./DataAriaLabelMixin-B6s65u7G.js";import"./link.constants-DL-uaoRL.js";import"./index-CtCujbG3.js";import"./popover.component-DvcRymg8.js";import"./BackdropMixin-CxLOt4LD.js";import"./popover.constants-CxG_396l.js";import"./index-DkwgF5yz.js";import"./v4-CmTdKEVZ.js";import"./input.component-D8V8Ir82.js";import"./directive-Ctav8iJK.js";import"./index-x6O70r9L.js";import"./formfieldwrapper.component-Cn786d3I.js";import"./formfieldwrapper.constants-DIgFZEkP.js";import"./FormInternalsMixin-CuxWN4XA.js";import"./input.constants-De0qi-VI.js";import"./index-BJgUR6ws.js";import"./index-D9_PXQVh.js";import"./radio.constants-MkbypORj.js";import"./index-DpE7m4C2.js";import"./toggle.constants-CYCm9d05.js";import"./ControlTypeMixin-BvHzFNCo.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
