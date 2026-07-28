import{k as p}from"./iframe-vPjlp732.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CDO80zAY.js";import"./index-C4goL5EP.js";import"./index-B0TopEp2.js";import"./index-CHJjWbE8.js";import"./index-BiB9JE_q.js";import"./index-CKFsSVGz.js";import"./index-Bfqt5mpC.js";import"./index-BtlVxqR-.js";import"./index-DiH3EXfS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-yKSyrkq4.js";import"./buttonsimple.component-D8zgMRFg.js";import"./DisabledMixin-1gpg0PKK.js";import"./KeyDownHandledMixin-Cmshr58x.js";import"./index-vK631QPL.js";import"./button.utils-rNW36Ji7.js";import"./index-BtoRk3J9.js";import"./index-DTrDRi1E.js";import"./index-COdcs0sL.js";import"./IconNameMixin-bLXjtifv.js";import"./index-Bhh2x7ws.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CPv2o5uE.js";import"./linksimple.component-CieCOYlw.js";import"./DataAriaLabelMixin-Dee02IIX.js";import"./link.constants-CYSGRVpm.js";import"./index-Cp2-ThDp.js";import"./index-CPcuBUlq.js";import"./popover.component-C2BXMS9u.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-B3LhPCnc.js";import"./popover.constants-taYJJbjc.js";import"./input.component-CNSaoc2G.js";import"./index-DkYv8mPy.js";import"./index-DYFiZHED.js";import"./statusmessage.constants-t6C0g16X.js";import"./formfieldwrapper.component-B7SujBbR.js";import"./formfieldwrapper.constants-CJ4Iwgfe.js";import"./FormInternalsMixin-BbzmdGJj.js";import"./input.constants-Dn5nGn5z.js";import"./index-H8MVj_pe.js";import"./index-CPEv-NRz.js";import"./radio.constants-B0bsdul-.js";import"./index-B5Z023LE.js";import"./toggle.constants-B1eiomGd.js";import"./ControlTypeMixin-tJWi1sM8.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
