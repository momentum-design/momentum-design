import"./index-De5w36hO.js";import{k as n}from"./iframe-BCanoCRe.js";import{c as R,s as O}from"./commonArgTypes-BluK8w5L.js";import{a as E}from"./utils-Dd_sfl9-.js";import"./index-Cm2lzNsz.js";import"./index-BikIp1Gm.js";import{P as W,S as D}from"./popover.component-DoM1jhNA.js";import"./index-jw-wyglp.js";import"./preload-helper-C1FmrZbK.js";import"./index-CMEhrORJ.js";import"./index-DTrDRi1E.js";import"./index-Du-hrVag.js";import"./DisabledMixin-BApzXNWy.js";import"./index-SsYqHSOv.js";import"./v4-CmTdKEVZ.js";import"./if-defined-BKKfBTgX.js";import"./formfieldwrapper.component-DIxVLrIR.js";import"./formfieldwrapper.constants-CQWGpnDo.js";import"./DataAriaLabelMixin-BX3YsaxT.js";import"./FormInternalsMixin-BozvY87n.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Dq2oczWO.js";import"./buttonsimple.component-DA2CTyD3.js";import"./radio.constants-75RoCGNh.js";import"./button.component-BPw-r-Mr.js";import"./button.utils-rNW36Ji7.js";import"./index-DgCnCeFP.js";import"./index-ao5-DYXH.js";import"./index-C4Oxf6-h.js";import"./BackdropMixin-irboKES9.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,_=e=>n`
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
    ?soft-disabled=${e["soft-disabled"]}
    ?required="${e.required}"
    data-aria-label="${e["data-aria-label"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
  ></mdc-radio>
`,ce={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:_,argTypes:{readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},"soft-disabled":{control:{type:"boolean"}},checked:{control:{type:"boolean"}},label:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:{type:"text"}},required:{control:{type:"boolean"}},"toggletip-text":{control:{type:"text"}},"toggletip-placement":{control:{type:"select"},options:Object.values(W)},"toggletip-strategy":{control:{type:"select"},options:Object.values(D)},"info-icon-aria-label":{control:{type:"text"}},"auto-focus-on-mount":{control:"boolean"},...E(["help-text-type"]),...R,...O}},o={args:{label:"Standard Plan",checked:!1,readonly:!1,disabled:!1,"soft-disabled":!1}},t={render:()=>n`
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
  `,parameters:{docs:{description:{story:"Radio buttons with the same `name` attribute are grouped together. When radio buttons share the same `name`, selecting one will automatically deselect the others in the group. The example includes various states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display radio buttons in a column."}}}},l={args:{"data-aria-label":"Radio button without label"},parameters:{docs:{description:{story:"If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria label through data-aria-label for accessibility. "}}}},r={render:()=>n` <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To disable the radio button, use the `disabled` attribute. "}}}},d={render:()=>n` <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To make the radio button read-only, use the `readonly` attribute. "}}}},i={args:{label:"Standard Plan","help-text":"Standard plan provides basic features",checked:!1,disabled:!1,readonly:!1},parameters:{docs:{description:{story:"To add help text to the radio button, use the `help-text` attribute. "}}}};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
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
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with the same \`name\` attribute are grouped together. ' + 'When radio buttons share the same \`name\`, selecting one will automatically deselect the others in the ' + 'group. The example includes various states of radio buttons such as disabled, readonly, ' + 'and different labels. We can use flex layout to display radio buttons in a column.'
      }
    }
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,h,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'Radio button without label'
  },
  parameters: {
    docs: {
      description: {
        story: "If we don't want to display a label, we can omit the 'label' attribute, " + 'but it is recommended to pass an aria label through data-aria-label for accessibility. '
      }
    }
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; flex-direction: column;">
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
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,S,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; flex-direction: column;">
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
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var T,$,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=($=i.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const me=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly","WithHelpText"];export{r as Disabled,o as Example,d as ReadOnly,i as WithHelpText,l as WithoutLabel,me as __namedExportsOrder,ce as default,t as withNameGroup};
