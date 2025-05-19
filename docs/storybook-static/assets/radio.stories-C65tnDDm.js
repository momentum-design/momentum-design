import"./index-Bbw3D4cn.js";import{k as t}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as G,s as z}from"./commonArgTypes-BluK8w5L.js";import{h as B,d as I}from"./utils-CO8B6ZcN.js";import"./index-DkMqU2EV.js";import"./index-C9z9WAEj.js";import"./if-defined-D5BV9-c0.js";import"./index-CcXofQbA.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./radio.constants-DXoIHWZL.js";import"./index-BQHpR8ua.js";import"./v4-CQkTLCs1.js";import"./button.component-DuJ_hCOI.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-BP9stmcA.js";import"./iframe-CdDtCPZ3.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const C=e=>t`
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
    required-label="${e["required-label"]}"
    data-aria-label="${e["data-aria-label"]}"
  ></mdc-radio>
`,fe={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:C,parameters:{badges:["stable"]},argTypes:{...G,...z,readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},label:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:{type:"text"}},"required-label":{control:{type:"text"}},...B(["help-text-type"]),...I(["--mdc-radio-text-disabled-color","--mdc-radio-control-inactive-hover","--mdc-radio-control-inactive-pressed-color","--mdc-radio-control-active-hover-color","--mdc-radio-control-active-pressed-color","--mdc-radio-control-active-disabled-background","--mdc-radio-control-inactive-disabled-background","--mdc-radio-disabled-border-color"])}},o={args:{label:"Standard Plan",checked:!1,readonly:!1,disabled:!1}},r={render:()=>t`
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
    `,parameters:{docs:{description:{story:"Radio buttons with the same `name` attribute are grouped together. When radio buttons share the same `name`, selecting one will automatically deselect the others in the group. The example includes various states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display radio buttons in a column."}}}},l={args:{"data-aria-label":"Radio button without label"},parameters:{docs:{description:{story:"If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria label through data-aria-label for accessibility. "}}}},d={render:()=>t`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To disable the radio button, use the `disabled` attribute. "}}}},i={render:()=>t`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To make the radio button read-only, use the `readonly` attribute. "}}}},n={args:{label:"Standard Plan","help-text":"Standard plan provides basic features",checked:!1,disabled:!1,readonly:!1},parameters:{docs:{description:{story:"To add help text to the radio button, use the `help-text` attribute. "}}}},s=()=>t`
    <form @submit=${c=>{c.preventDefault();const q=new FormData(c.target).get("course-plan");a("Form Submitted")({value:q})}}>
      <fieldset>
        <legend>Form Example</legend>
      <mdc-radio name="course-plan" value="standard" data-aria-label="Standard Plan" label="Standard Plan">
      </mdc-radio>
      <mdc-radio name="course-plan" value="premium" data-aria-label="Premium Plan" label="Premium Plan" >
      </mdc-radio>
      <mdc-radio
        name="course-plan"
        value="enterprise"
        required-label="required"
        data-aria-label="Enterprise Plan"
        label="Enterprise Plan"
        validation-message="Select a plan to continue">
      </mdc-radio>
      <br />
      <div style='display: flex; gap: 0.25rem;'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
  `;var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    checked: false,
    readonly: false,
    disabled: false
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,y,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,f,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,P,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var k,w,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var R,T,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var $,W,F;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const selectedValue = formData.get('course-plan');
    action('Form Submitted')({
      value: selectedValue
    });
  };
  return html\`
    <form @submit=\${handleSubmit}>
      <fieldset>
        <legend>Form Example</legend>
      <mdc-radio name="course-plan" value="standard" data-aria-label="Standard Plan" label="Standard Plan">
      </mdc-radio>
      <mdc-radio name="course-plan" value="premium" data-aria-label="Premium Plan" label="Premium Plan" >
      </mdc-radio>
      <mdc-radio
        name="course-plan"
        value="enterprise"
        required-label="required"
        data-aria-label="Enterprise Plan"
        label="Enterprise Plan"
        validation-message="Select a plan to continue">
      </mdc-radio>
      <br />
      <div style='display: flex; gap: 0.25rem;'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
  \`;
}`,...(F=(W=s.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const ge=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly","WithHelpText","RadioInForm"];export{d as Disabled,o as Example,s as RadioInForm,i as ReadOnly,n as WithHelpText,l as WithoutLabel,ge as __namedExportsOrder,fe as default,r as withNameGroup};
