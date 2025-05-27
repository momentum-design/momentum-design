import"./index-Btw0xR_d.js";import{k as n}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as R,s as W}from"./commonArgTypes-BluK8w5L.js";import{h as D,d as G}from"./utils-CO8B6ZcN.js";import"./index-BJQrBVcE.js";import"./index-C9z9WAEj.js";import"./if-defined-D5BV9-c0.js";import"./index-CcXofQbA.js";import"./formfieldwrapper.component-DGQBm8Ze.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./radio.constants-DXoIHWZL.js";import"./index-BQHpR8ua.js";import"./v4-CQkTLCs1.js";import"./button.component-DP9lGkCN.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-B8CMH2Hx.js";import"./iframe-GQ_QQU_5.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const E=e=>n`
  <mdc-radio
    @change="${a("onchange")}"
    @keydown="${a("onkeydown")}"
    @focus="${a("onfocus")}"
    @click="${a("onclick")}"
    label="${e.label}"
    name="radio"
    value="option1"
    help-text="${e["help-text"]}"
    ?checked=${e.checked}
    ?disabled=${e.disabled}
    ?readonly=${e.readonly}
    ?required="${e.required}"
    data-aria-label="${e["data-aria-label"]}"
  ></mdc-radio>
`,me={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:E,parameters:{badges:["stable"]},argTypes:{...R,...W,readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},label:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:{type:"text"}},required:{control:{type:"boolean"}},...D(["help-text-type"]),...G(["--mdc-radio-text-disabled-color","--mdc-radio-control-inactive-hover","--mdc-radio-control-inactive-pressed-color","--mdc-radio-control-active-hover-color","--mdc-radio-control-active-pressed-color","--mdc-radio-control-active-disabled-background","--mdc-radio-control-inactive-disabled-background","--mdc-radio-disabled-border-color"])}},o={args:{label:"Standard Plan",checked:!1,readonly:!1,disabled:!1}},l={render:()=>n`
    <div style="display: flex; flex-direction: column;">
      Radio Group for selecting plans
      <mdc-radio name="plan" value="option1" label="Standard Plan" ></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
      <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
      <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
    </div>
    <div style="display: flex; flex-direction: column; margin-top: 10px">
      Radio Group for selecting billing cycle
      <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
      <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
    </div>
    `,parameters:{docs:{description:{story:"Radio buttons with the same `name` attribute are grouped together. When radio buttons share the same `name`, selecting one will automatically deselect the others in the group. The example includes various states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display radio buttons in a column."}}}},d={args:{"data-aria-label":"Radio button without label"},parameters:{docs:{description:{story:"If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria label through data-aria-label for accessibility. "}}}},t={render:()=>n`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To disable the radio button, use the `disabled` attribute. "}}}},r={render:()=>n`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To make the radio button read-only, use the `readonly` attribute. "}}}},i={args:{label:"Standard Plan","help-text":"Standard plan provides basic features",checked:!1,disabled:!1,readonly:!1},parameters:{docs:{description:{story:"To add help text to the radio button, use the `help-text` attribute. "}}}};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    checked: false,
    readonly: false,
    disabled: false
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,b,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      Radio Group for selecting plans
      <mdc-radio name="plan" value="option1" label="Standard Plan" ></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
      <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
      <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
    </div>
    <div style="display: flex; flex-direction: column; margin-top: 10px">
      Radio Group for selecting billing cycle
      <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
      <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
    </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with the same \`name\` attribute are grouped together. ' + 'When radio buttons share the same \`name\`, selecting one will automatically deselect the others in the ' + 'group. The example includes various states of radio buttons such as disabled, readonly, ' + 'and different labels. We can use flex layout to display radio buttons in a column.'
      }
    }
  }
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,h,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'Radio button without label'
  },
  parameters: {
    docs: {
      description: {
        story: 'If we don\\'t want to display a label, we can omit the \\'label\\' attribute, ' + 'but it is recommended to pass an aria label through data-aria-label for accessibility. '
      }
    }
  }
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'To disable the radio button, use the \`disabled\` attribute. '
      }
    }
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var P,k,S;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'To make the radio button read-only, use the \`readonly\` attribute. '
      }
    }
  }
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,T,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    'help-text': 'Standard plan provides basic features',
    checked: false,
    disabled: false,
    readonly: false
  },
  parameters: {
    docs: {
      description: {
        story: 'To add help text to the radio button, use the \`help-text\` attribute. '
      }
    }
  }
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const pe=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly","WithHelpText"];export{t as Disabled,o as Example,r as ReadOnly,i as WithHelpText,d as WithoutLabel,pe as __namedExportsOrder,me as default,l as withNameGroup};
