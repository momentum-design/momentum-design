import"./index-BLc_7htS.js";import{k as n}from"./iframe-DD1qd397.js";import{c as R,s as O}from"./commonArgTypes-BG7EqI50.js";import{h as E}from"./utils-D6nie9pS.js";import"./index-C1hgciep.js";import"./index-B86u1j9x.js";import{P as W,S as D}from"./popover.constants-IjUFgXmU.js";import"./index-DTSLqutf.js";import"./preload-helper-C1FmrZbK.js";import"./index-DhKlRied.js";import"./index-DTrDRi1E.js";import"./index-Ch5iYrbl.js";import"./DisabledMixin-CYN0V68G.js";import"./index-DAdE7Nj8.js";import"./popover.component-Dn23zOyI.js";import"./if-defined-Db4PuEEJ.js";import"./BackdropMixin-CQDU5Ra1.js";import"./dom-CCAb5pjN.js";import"./KeyToActionMixin-D7mKMv1X.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DSkZetFy.js";import"./formfieldwrapper.constants-ioeoQoCF.js";import"./DataAriaLabelMixin-JduQn-GI.js";import"./FormInternalsMixin-DdFBiGQs.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./buttonsimple.component-B--Mhr8g.js";import"./radio.constants-BrASfAUd.js";import"./button.component-Djz8Llbv.js";import"./button.utils-rNW36Ji7.js";import"./index-B6Xxs9ck.js";import"./index-BIxz4icf.js";import"./index-BihlCTyv.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,_=e=>n`
  <div role="main">
    <mdc-radio
      @change="${a("onchange")}"
      @keydown="${a("onkeydown")}"
      @focus="${a("onfocus")}"
      @click="${a("onclick")}"
      label="${e.label}"
      name="${e.name}"
      value="${e.value}"
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
  </div>
`,pe={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:_,argTypes:{readonly:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},checked:{control:"boolean"},label:{control:"text"},name:{control:"text"},value:{control:"text"},"help-text":{control:"text"},"data-aria-label":{control:"text"},required:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(W)},"toggletip-strategy":{control:"select",options:Object.values(D)},"info-icon-aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...E(["help-text-type","id","internals","validation-message","validity","willValidate"]),...R,...O}},o={args:{label:"Standard Plan",name:"radio",value:"option1",checked:!1,readonly:!1,disabled:!1,"soft-disabled":!1}},t={render:()=>n`
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
  `,parameters:{docs:{description:{story:"Radio buttons with the same `name` attribute are grouped together. When radio buttons share the same `name`, selecting one will automatically deselect the others in the group. The example includes various states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display radio buttons in a column."}}}},l={args:{"data-aria-label":"Radio button without label"},parameters:{docs:{description:{story:"If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria label through data-aria-label for accessibility. "}}}},d={render:()=>n` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>`,parameters:{docs:{description:{story:"To disable the radio button, use the `disabled` attribute. "}}}},r={render:()=>n` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>`,parameters:{docs:{description:{story:"To make the radio button read-only, use the `readonly` attribute. "}}}},i={args:{label:"Standard Plan","help-text":"Standard plan provides basic features",checked:!1,disabled:!1,readonly:!1},parameters:{docs:{description:{story:"To add help text to the radio button, use the `help-text` attribute. "}}}};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    name: 'radio',
    value: 'option1',
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    docs: {
      description: {
        story: 'Radio buttons with the same \`name\` attribute are grouped together. ' + 'When radio buttons share the same \`name\`, selecting one will automatically deselect the others in the ' + 'group. The example includes various states of radio buttons such as disabled, readonly, ' + 'and different labels. We can use flex layout to display radio buttons in a column.'
      }
    }
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,y,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,v,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'To disable the radio button, use the \`disabled\` attribute. '
      }
    }
  }
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,S,k;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'To make the radio button read-only, use the \`readonly\` attribute. '
      }
    }
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var $,T,w;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const ue=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly","WithHelpText"];export{d as Disabled,o as Example,r as ReadOnly,i as WithHelpText,l as WithoutLabel,ue as __namedExportsOrder,pe as default,t as withNameGroup};
