import"./index-D5kxIDdh.js";import{k as d}from"./lit-element-CHllvULs.js";import{a as D}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $,s as E}from"./commonArgTypes-BluK8w5L.js";import{h as A,d as H}from"./utils-D1SE5bce.js";import"./index-CEJJ7ODp.js";import"./index-HW6KrQZO.js";import"./if-defined-C4tJgJ33.js";import"./ValueMixin-DFWGhyGn.js";import"./formfieldwrapper.component-Dae6IeB3.js";import"./index-MYSkQ1zX.js";import"./text.constants-DJu2q-6E.js";import"./DisabledMixin-DBt9didn.js";import"./index-BnIP7Wfy.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BFc9mT2k.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.component-DVyOksUm.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./button.constants-CjxsrM-Y.js";import"./button.utils-DSouLKFM.js";const L=e=>d`
  <mdc-checkbox
    label="${e.label}"
    help-text="${e["help-text"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    ?indeterminate="${e.indeterminate}"
    data-aria-label="${e["data-aria-label"]}"
    @change="${D("onchange")}"
  ></mdc-checkbox>
`,ae={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:L,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},...A(["help-text-type","label-info","id","internals"]),...H(["--mdc-checkbox-background-color-hover","--mdc-checkbox-border-color","--mdc-checkbox-checked-background-color","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-disabled-background-color","--mdc-checkbox-disabled-border-color","--mdc-checkbox-disabled-checked-icon-color","--mdc-checkbox-disabled-icon-color","--mdc-checkbox-icon-background-color","--mdc-checkbox-icon-border-color","--mdc-checkbox-icon-color","--mdc-checkbox-pressed-icon-color"]),...$,...E}},c={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},t={args:{"data-aria-label":"This is a checkbox with no label"}},o={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},a={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},r={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>d`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},l={render:()=>d`
      <form @submit=${n=>{n.preventDefault();const C=new FormData(n.target).getAll("super-power");D("Form Submitted")({value:C})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <mdc-button type="submit">Submit</mdc-button>
        </fieldset>
      </form>
    `};var s,m,i;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions'
  }
}`,...(i=(m=c.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var b,h,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var x,k,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(u=(k=o.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,f,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,y,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      element: 'mdc-checkbox'
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>\`
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var w,I,F;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <mdc-button type="submit">Submit</mdc-button>
        </fieldset>
      </form>
    \`;
  }
}`,...(F=(I=l.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const re=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField"];export{r as DisabledVariants,c as Example,l as FormField,o as HelperText,a as Indeterminate,t as WithoutLabel,re as __namedExportsOrder,ae as default};
