import{k as d}from"./iframe-CN8BX08X.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-2MQNPC-y.js";import"./index-X8Pb12gl.js";import"./index-DMkGPlxr.js";import"./index-DF52DCgv.js";import"./index-DHo7csNy.js";import"./index-B4ZEZoyl.js";import"./index-bYt3bzVA.js";import"./index-HXZV33-0.js";import"./index-9TxI5wHJ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C48ZlGBW.js";import"./buttonsimple.component-CbH_NBPh.js";import"./TabIndexMixin-D9j366gx.js";import"./DisabledMixin-DwuxRxno.js";import"./button.utils-rNW36Ji7.js";import"./index-DYSq58IO.js";import"./index-Db8AwVSm.js";import"./index-DTrDRi1E.js";import"./if-defined-ELOi9WTw.js";import"./index-DjnOK3aY.js";import"./IconNameMixin-Bb1vhxbl.js";import"./index-BQom22Hu.js";import"./badge.constants-D06b0kp1.js";import"./linksimple.component-WSq_0P7q.js";import"./DataAriaLabelMixin-2Zo7EJP9.js";import"./link.constants-Dc02V0b-.js";import"./index-pLfVG4nc.js";import"./base-DIkkzJ-c.js";import"./popover.component-uWfkbMYp.js";import"./BackdropMixin-QTfFZEFW.js";import"./index-DadQjmgu.js";import"./v4-CmTdKEVZ.js";import"./input.component-BkobVnPW.js";import"./directive-Ctav8iJK.js";import"./index-Kq1wLt4r.js";import"./formfieldwrapper.component-CEbJ2u5Z.js";import"./formfieldwrapper.constants-Dm1Kauvo.js";import"./FormInternalsMixin-COuFwbG6.js";import"./query-BPxBhMfF.js";import"./input.constants-CuJHbmlM.js";import"./index-jgnqgL4s.js";import"./index-Cvit-woL.js";import"./radio.constants-BBXmhXW0.js";import"./index-Dqe-Kbq6.js";import"./toggle.constants-DStXSHdB.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
