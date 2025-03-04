import"./index-CrjK5Fr5.js";import{k as d}from"./lit-element-CHllvULs.js";import{a as D}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $,s as E}from"./commonArgTypes-BluK8w5L.js";import{h as A,d as H}from"./utils-D1SE5bce.js";import"./index-D1-zc-jK.js";import"./index-HW6KrQZO.js";import"./if-defined-C4tJgJ33.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./FormInternalsMixin-D4P2zbkO.js";import"./formfieldwrapper.component-CWIPqk6J.js";import"./DisabledMixin-DBt9didn.js";import"./text.constants-DJu2q-6E.js";import"./index-CEbgplXA.js";import"./index-DMq3cM1d.js";import"./iframe-DAETmKA4.js";import"../sb-preview/runtime.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.component-CXHzGrZ-.js";import"./button.constants-D0rdLcnn.js";import"./button.utils-CC-feA6A.js";const L=e=>d`
  <mdc-checkbox
    label="${e.label}"
    help-text="${e["help-text"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    ?indeterminate="${e.indeterminate}"
    data-aria-label="${e["data-aria-label"]}"
    @change="${D("onchange")}"
  ></mdc-checkbox>
`,le={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:L,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},...A(["help-text-type","label-info","id","internals"]),...H(["--mdc-checkbox-background-color-hover","--mdc-checkbox-border-color","--mdc-checkbox-checked-background-color","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-disabled-background-color","--mdc-checkbox-disabled-border-color","--mdc-checkbox-disabled-checked-icon-color","--mdc-checkbox-disabled-icon-color","--mdc-checkbox-icon-background-color","--mdc-checkbox-icon-border-color","--mdc-checkbox-icon-color","--mdc-checkbox-pressed-icon-color"]),...$,...E}},c={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},t={args:{"data-aria-label":"This is a checkbox with no label"}},a={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},o={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},r={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>d`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},l={render:()=>d`
      <form @submit=${s=>{s.preventDefault();const C=new FormData(s.target).getAll("super-power");D("Form Submitted")({value:C})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"
          required-label='required' validation-message='This selection is necessary'></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style='display: flex; gap: 0.25rem;'>
            <mdc-button type="submit" size='24'>Submit</mdc-button>
            <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `};var n,i,m;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions'
  }
}`,...(m=(i=c.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var b,h,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var x,u,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,I,F;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"
          required-label='required' validation-message='This selection is necessary'></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style='display: flex; gap: 0.25rem;'>
            <mdc-button type="submit" size='24'>Submit</mdc-button>
            <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  }
}`,...(F=(I=l.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const de=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField"];export{r as DisabledVariants,c as Example,l as FormField,a as HelperText,o as Indeterminate,t as WithoutLabel,de as __namedExportsOrder,le as default};
