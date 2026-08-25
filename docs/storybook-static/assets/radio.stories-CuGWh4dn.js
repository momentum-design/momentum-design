import{k as a}from"./iframe-DKmoi846.js";import{c as $,s as T}from"./commonArgTypes-BG7EqI50.js";import{h as N,d as t,a as k}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,O=e=>a`
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
`,A={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:O,argTypes:{readonly:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},checked:{control:"boolean"},label:{control:"text"},name:{control:"text"},value:{control:"text"},"help-text":{control:"text"},required:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...N(["help-text-type","id","internals","validation-message","validity","willValidate","toggletip-placement","toggletip-strategy","toggletip-text","info-icon-aria-label","help-text","--mdc-help-text-color","--mdc-help-text-font-size","--mdc-help-text-font-weight","--mdc-help-text-line-height",'Shadow Part Name: "help-text"','Shadow Part Name: "help-text-container"','Shadow Part Name: "helper-icon"','Shadow Part Name: "info-icon-btn"','Slot Name: "help-icon"','Slot Name: "help-text"','Slot Name: "toggletip"']),...$,...T}},l={args:{label:"Standard Plan",name:"radio",value:"option1",checked:!1,readonly:!1,disabled:!1,"soft-disabled":!1}},d={render:()=>a`
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
  `,parameters:{...t(a`
        <p role="region">
          Radio buttons with the same <b>name</b> attribute are grouped together. When radio buttons share the same
          <b>name</b>, selecting one will automatically deselect the others in the group. The example includes various
          states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display
          radio buttons in a column.
        </p>
      `,!0),...k(!0)}},r={render:()=>a`<div role="main"><mdc-radio aria-label="Option 1 without label"></mdc-radio></div> `,parameters:{...t(a`<p role="region">
        If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria
        label for accessibility.
      </p>`,!0),...k(!0)}},n={render:()=>a` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>`,...t(a`<p role="region">To disable the radio button, use the <b>disabled</b> attribute.</p>`)},i={render:()=>a` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>`,...t(a`<p role="region">To make the radio button read-only, use the <b>readonly</b> attribute.</p>`)};var c,m,s;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    name: 'radio',
    value: 'option1',
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false
  }
}`,...(s=(m=l.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var p,b,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,y,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`<div role="main"><mdc-radio aria-label="Option 1 without label"></mdc-radio></div> \`,
  parameters: {
    ...describeStory(html\`<p role="region">
        If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria
        label for accessibility.
      </p>\`, true),
    ...hideAllControls(true)
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,f,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>\`,
  ...describeStory(html\`<p role="region">To disable the radio button, use the <b>disabled</b> attribute.</p>\`)
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,P,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>\`,
  ...describeStory(html\`<p role="region">To make the radio button read-only, use the <b>readonly</b> attribute.</p>\`)
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const C=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly"];export{n as Disabled,l as Example,i as ReadOnly,r as WithoutLabel,C as __namedExportsOrder,A as default,d as withNameGroup};
