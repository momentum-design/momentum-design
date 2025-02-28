import"./index-DkV-wGhx.js";import{k as o}from"./lit-element-CHllvULs.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as B,s as I}from"./commonArgTypes-BluK8w5L.js";import{h as C,d as H}from"./utils-D1SE5bce.js";import"./index-HW6KrQZO.js";import"./if-defined-C4tJgJ33.js";import"./ValueMixin-B2saez_i.js";import"./index-CEbgplXA.js";import"./formfieldwrapper.component-CWIPqk6J.js";import"./DisabledMixin-DBt9didn.js";import"./text.constants-DJu2q-6E.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./v4-CQkTLCs1.js";const L=e=>o`
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
    data-aria-label="${e["data-aria-label"]}"
  ></mdc-radio>
`,Z={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:L,parameters:{badges:["stable"]},argTypes:{...B,...I,readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},label:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:{type:"text"}},...C(["help-text-type"]),...H(["--mdc-radio-inner-circle-size","--mdc-radio-text-disabled-color","--mdc-radio-disabled-border-color","--mdc-radio-normal-border-color","--mdc-radio-inner-circle-normal-background","--mdc-radio-inner-circle-disabled-background","--mdc-radio-control-inactive-color","--mdc-radio-control-inactive-hover","--mdc-radio-control-inactive-pressed-color","--mdc-radio-control-inactive-disabled-background","--mdc-radio-control-active-color","--mdc-radio-control-active-hover-color","--mdc-radio-control-active-pressed-color","--mdc-radio-control-active-disabled-background"])}},r={args:{label:"Standard Plan",checked:!1,readonly:!1,disabled:!1}},l={render:()=>o`
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
    `,parameters:{docs:{description:{story:"Radio buttons with the same `name` attribute are grouped together. When radio buttons share the same `name`, selecting one will automatically deselect the others in the group. The example includes various states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display radio buttons in a column."}}}},d={args:{"data-aria-label":"Radio button without label"},parameters:{docs:{description:{story:"If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria label through data-aria-label for accessibility. "}}}},t={render:()=>o`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To disable the radio button, use the `disabled` attribute. "}}}},n={render:()=>o`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To make the radio button read-only, use the `readonly` attribute. "}}}},i={args:{label:"Standard Plan","help-text":"Standard plan provides basic features",checked:!1,disabled:!1,readonly:!1},parameters:{docs:{description:{story:"To add help text to the radio button, use the `help-text` attribute. "}}}},c=()=>o`
    <form @submit=${s=>{s.preventDefault();const G=new FormData(s.target).get("course-plan");a("Form Submitted")({value:G})}}>
      <mdc-radio name="course-plan" value="standard" data-aria-label="Standard Plan" label="Standard Plan">
      </mdc-radio>
      <mdc-radio name="course-plan" value="premium" data-aria-label="Premium Plan" label="Premium Plan">
      </mdc-radio>
      <mdc-radio
        name="course-plan"
        value="enterprise"
        checked
        data-aria-label="Enterprise Plan"
        label="Enterprise Plan">
      </mdc-radio>
      <br />
      <button type="submit">Submit</button>
    </form>
  `;var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    checked: false,
    readonly: false,
    disabled: false
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,y,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,f,g;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,P,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var k,w,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,R,$;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(R=i.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var E,W,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
      <mdc-radio name="course-plan" value="standard" data-aria-label="Standard Plan" label="Standard Plan">
      </mdc-radio>
      <mdc-radio name="course-plan" value="premium" data-aria-label="Premium Plan" label="Premium Plan">
      </mdc-radio>
      <mdc-radio
        name="course-plan"
        value="enterprise"
        checked
        data-aria-label="Enterprise Plan"
        label="Enterprise Plan">
      </mdc-radio>
      <br />
      <button type="submit">Submit</button>
    </form>
  \`;
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const ee=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly","WithHelpText","RadioInForm"];export{t as Disabled,r as Example,c as RadioInForm,n as ReadOnly,i as WithHelpText,d as WithoutLabel,ee as __namedExportsOrder,Z as default,l as withNameGroup};
