import{k as p}from"./iframe-CM38_vAi.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Bnx-kmNM.js";import"./index-Cwo3lSVJ.js";import"./index-Bi7u014R.js";import"./index-CZespjgn.js";import"./index-HqcTxq13.js";import"./index-xkQvRJbh.js";import"./index-Cv3YVtMm.js";import"./index-CynwaAwx.js";import"./index-CV6GwiWQ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-ZhUWhZmW.js";import"./buttonsimple.component-CnK5vfaN.js";import"./DisabledMixin-C3ErfRAG.js";import"./KeyDownHandledMixin-D4YzfRFo.js";import"./index-B8GminDG.js";import"./button.utils-rNW36Ji7.js";import"./index-CrMiPWwO.js";import"./index-DTrDRi1E.js";import"./if-defined-Bd66tGz9.js";import"./index-DZBb-KaY.js";import"./IconNameMixin-EgOf7gFt.js";import"./index-Dl0DyD3e.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CsHVB8zA.js";import"./linksimple.component-D8mnjeqH.js";import"./DataAriaLabelMixin-D0VB9XhP.js";import"./link.constants-BWAQxkMY.js";import"./index-jmU1WQh3.js";import"./v4-CmTdKEVZ.js";import"./index-BEuXITM6.js";import"./popover.component-jeeMFtcq.js";import"./BackdropMixin-CV6c4MwB.js";import"./popover.constants-C0xuq14y.js";import"./input.component-C1NbLcYF.js";import"./directive-Ctav8iJK.js";import"./index-DGhBhOpA.js";import"./formfieldwrapper.component-BCsr_mMy.js";import"./formfieldwrapper.constants-gVv_zQQp.js";import"./FormInternalsMixin-DlHSiyYX.js";import"./input.constants-yzHqGNos.js";import"./index-D0MUxYW-.js";import"./index-DePTnaGc.js";import"./radio.constants-BglNm5ck.js";import"./index-DBIQYFYd.js";import"./toggle.constants-Chi-xcri.js";import"./ControlTypeMixin-B83TbPOK.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
