import{k as p}from"./iframe-0lXzRINF.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BDDPjJ4Q.js";import"./index-DjGr48XK.js";import"./index-BYrxzyoG.js";import"./index-CbJ800-d.js";import"./index-B-WSvZAb.js";import"./index-CkGKIbst.js";import"./index-DbZL0InA.js";import"./index-BZ8Sy-uO.js";import"./index-C2DdSSkT.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CxCUnL7n.js";import"./buttonsimple.component-DIHUg9EK.js";import"./DisabledMixin-B5XUkeWw.js";import"./KeyDownHandledMixin-D4J-TALk.js";import"./index-inqbNEkQ.js";import"./button.utils-rNW36Ji7.js";import"./index-Bdg8H97s.js";import"./index-DTrDRi1E.js";import"./if-defined-D28hcRQK.js";import"./index-CkX6UQy-.js";import"./IconNameMixin-BqIjUBWR.js";import"./index-BZCrga1b.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C1axXPMl.js";import"./linksimple.component-I7QHqhX7.js";import"./DataAriaLabelMixin-Cb16sLph.js";import"./link.constants-QAQ3aKmt.js";import"./index-CK3BO7B7.js";import"./v4-CmTdKEVZ.js";import"./index-CFBelCFm.js";import"./popover.component-CJ9MYAtF.js";import"./BackdropMixin-BDcW5oAX.js";import"./popover.constants-C01Uw_AO.js";import"./input.component-UTkvFARn.js";import"./directive-Ctav8iJK.js";import"./index-CEfSAinR.js";import"./formfieldwrapper.component-8y3LPcFF.js";import"./formfieldwrapper.constants-WtX-P_ep.js";import"./FormInternalsMixin-CrlDbyGV.js";import"./input.constants-BlmHrXrm.js";import"./index-DIxefSfL.js";import"./index-LBxzW87U.js";import"./radio.constants-CRQrivB_.js";import"./index-CN3mNflq.js";import"./toggle.constants-BA3YCXMV.js";import"./ControlTypeMixin-BtR_Zjqa.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
