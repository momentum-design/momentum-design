import"./index-IZi5m_ui.js";import{k as a}from"./iframe-BZP6WX1W.js";import{c as $,s as T}from"./commonArgTypes-BG7EqI50.js";import{h as N,d as n,a as k}from"./utils-B5QUENNQ.js";import"./index-yihpdQft.js";import"./index-BEJuDnk5.js";import"./index-BVHEHSJG.js";import"./preload-helper-C1FmrZbK.js";import"./index-G4UkceUF.js";import"./index-DTrDRi1E.js";import"./index-BYP4Ze0N.js";import"./DisabledMixin-BJwARYIU.js";import"./index-Ct2kOdRt.js";import"./popover.component-K86JqyjF.js";import"./if-defined-5PTGeIjh.js";import"./BackdropMixin-D9hVbecZ.js";import"./KeyDownHandledMixin-DzRyYMsy.js";import"./popover.constants-BYlCbcKi.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-Crsudd7H.js";import"./formfieldwrapper.constants-Lhx4J_yp.js";import"./FormInternalsMixin-Mor8BiHy.js";import"./buttonsimple.component-BK054w_c.js";import"./radio.constants-j4KSuzNd.js";import"./button.component-CrURP83W.js";import"./button.utils-rNW36Ji7.js";import"./index-Dvei3EKe.js";import"./index-D492wUL5.js";import"./index-CI31g2NK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,O=e=>a`
  <div role="main">
    <mdc-radio
      @change="${o("onchange")}"
      @keydown="${o("onkeydown")}"
      @focus="${o("onfocus")}"
      @click="${o("onclick")}"
      label="${e.label}"
      name="${e.name}"
      value="${e.value}"
      help-text="${e["help-text"]}"
      ?checked=${e.checked}
      ?disabled=${e.disabled}
      ?readonly=${e.readonly}
      ?soft-disabled=${e["soft-disabled"]}
      ?required="${e.required}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    ></mdc-radio>
  </div>
`,re={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:O,argTypes:{readonly:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},checked:{control:"boolean"},label:{control:"text"},name:{control:"text"},value:{control:"text"},"help-text":{control:"text"},required:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...N(["help-text-type","id","internals","validation-message","validity","willValidate","toggletip-placement","toggletip-strategy","toggletip-text","info-icon-aria-label","help-text","--mdc-help-text-color","--mdc-help-text-font-size","--mdc-help-text-font-weight","--mdc-help-text-line-height",'Shadow Part Name: "help-text"','Shadow Part Name: "help-text-container"','Shadow Part Name: "helper-icon"','Shadow Part Name: "info-icon-btn"','Slot Name: "help-icon"','Slot Name: "help-text"','Slot Name: "toggletip"']),...$,...T}},l={args:{label:"Standard Plan",name:"radio",value:"option1",checked:!1,readonly:!1,disabled:!1,"soft-disabled":!1}},r={render:()=>a`
    <div role="main">
      <mdc-radiogroup label="Radio Group for selecting plans">
        <mdc-radio name="plan" value="option1" label="Standard Plan"></mdc-radio>
        <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
        <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
        <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
        <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
        <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
      </mdc-radiogroup>
      <mdc-radiogroup label="Radio Group for selecting billing cycle" style="margin-top: 2rem;">
        <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
        <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
        <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
        <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
      </mdc-radiogroup>
    </div>
  `,parameters:{...n(a`
        <p role="region">
          Radio buttons with the same <b>name</b> attribute are grouped together. When radio buttons share the same
          <b>name</b>, selecting one will automatically deselect the others in the group. The example includes various
          states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display
          radio buttons in a column.
        </p>
      `,!0),...k(!0)}},d={render:()=>a`<div role="main"><mdc-radio aria-label="Option 1 without label"></mdc-radio></div> `,parameters:{...n(a`<p role="region">
        If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria
        label for accessibility.
      </p>`,!0),...k(!0)}},i={render:()=>a` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>`,...n(a`<p role="region">To disable the radio button, use the <b>disabled</b> attribute.</p>`)},t={render:()=>a` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>`,...n(a`<p role="region">To make the radio button read-only, use the <b>readonly</b> attribute.</p>`)};var m,c,s;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    name: 'radio',
    value: 'option1',
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false
  }
}`,...(s=(c=l.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var p,b,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div role="main">
      <mdc-radiogroup label="Radio Group for selecting plans">
        <mdc-radio name="plan" value="option1" label="Standard Plan"></mdc-radio>
        <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
        <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
        <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
        <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
        <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
      </mdc-radiogroup>
      <mdc-radiogroup label="Radio Group for selecting billing cycle" style="margin-top: 2rem;">
        <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
        <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
        <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
        <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
      </mdc-radiogroup>
    </div>
  \`,
  parameters: {
    ...describeStory(html\`
        <p role="region">
          Radio buttons with the same <b>name</b> attribute are grouped together. When radio buttons share the same
          <b>name</b>, selecting one will automatically deselect the others in the group. The example includes various
          states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display
          radio buttons in a column.
        </p>
      \`, true),
    ...hideAllControls(true)
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,y,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`<div role="main"><mdc-radio aria-label="Option 1 without label"></mdc-radio></div> \`,
  parameters: {
    ...describeStory(html\`<p role="region">
        If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria
        label for accessibility.
      </p>\`, true),
    ...hideAllControls(true)
  }
}`,...(g=(y=d.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,f,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>\`,
  ...describeStory(html\`<p role="region">To disable the radio button, use the <b>disabled</b> attribute.</p>\`)
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,P,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>\`,
  ...describeStory(html\`<p role="region">To make the radio button read-only, use the <b>readonly</b> attribute.</p>\`)
}`,...(w=(P=t.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const de=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly"];export{i as Disabled,l as Example,t as ReadOnly,d as WithoutLabel,de as __namedExportsOrder,re as default,r as withNameGroup};
