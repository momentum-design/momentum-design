import{k as d}from"./iframe-UcjUCg8u.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DnZMMvV0.js";import"./index-L50WIcj-.js";import"./index-CliS8B4j.js";import"./index-Cjs1j05l.js";import"./index-CN8L2YLr.js";import"./index-BxgY7fUe.js";import"./index-B6ChVSzL.js";import"./index-D8pRllv9.js";import"./index-DtDHdypC.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DypvB72_.js";import"./buttonsimple.component-CtMQev1j.js";import"./TabIndexMixin-CtH_Eu6i.js";import"./DisabledMixin-2bH6HotN.js";import"./button.utils-rNW36Ji7.js";import"./index-VXLksRWJ.js";import"./index-DrBQT6Ba.js";import"./index-DTrDRi1E.js";import"./if-defined-B9sygMTp.js";import"./index-DVSCZM07.js";import"./IconNameMixin-BsqVGy-w.js";import"./index-On_QYkxx.js";import"./badge.constants-CrXJ1yIH.js";import"./linksimple.component-BNZykEL1.js";import"./DataAriaLabelMixin-DxYHqlu8.js";import"./link.constants-mGuz6k53.js";import"./index-BPNqhLId.js";import"./base-DIkkzJ-c.js";import"./popover.component-X5urVUlD.js";import"./BackdropMixin-DNP66hoT.js";import"./index-rxvDyOyv.js";import"./v4-CmTdKEVZ.js";import"./input.component-CdiZinzM.js";import"./directive-Ctav8iJK.js";import"./index-C-U_Pzxv.js";import"./formfieldwrapper.component-yEyzEc7f.js";import"./formfieldwrapper.constants-Dv1l1uuK.js";import"./FormInternalsMixin-quQeDnRh.js";import"./query-BPxBhMfF.js";import"./input.constants-H2KIVxQe.js";import"./index-ChHcwnba.js";import"./index-gZU-9nk8.js";import"./radio.constants-DRd4-KmN.js";import"./index-C2s-qnal.js";import"./toggle.constants-C8Jfj4lm.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
