import"./index-aFSlVWhA.js";import{k as d}from"./lit-element-D5KKan5q.js";import{a as D}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $,s as E}from"./commonArgTypes-BluK8w5L.js";import{h as A,d as H}from"./utils-CO8B6ZcN.js";import"./index-BPu_-6q3.js";import"./index-C9z9WAEj.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-DWM52DiH.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DWkrE3Yi.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-MA1r3zrt.js";import"./index-C_nSTea5.js";import"./iframe-ltGo9-D6.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.component-Djhz-GfJ.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants--xhTiFYY.js";import"./button.utils-CP-c2W9c.js";const L=e=>d`
  <mdc-checkbox
    label="${e.label}"
    help-text="${e["help-text"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    ?indeterminate="${e.indeterminate}"
    data-aria-label="${e["data-aria-label"]}"
    @change="${D("onchange")}"
  ></mdc-checkbox>
`,ie={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:L,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},...A(["help-text-type","label-info","id","internals"]),...H(["--mdc-checkbox-background-color-hover","--mdc-checkbox-border-color","--mdc-checkbox-checked-background-color","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-disabled-background-color","--mdc-checkbox-disabled-border-color","--mdc-checkbox-disabled-checked-icon-color","--mdc-checkbox-disabled-icon-color","--mdc-checkbox-icon-background-color","--mdc-checkbox-icon-border-color","--mdc-checkbox-icon-color","--mdc-checkbox-pressed-icon-color"]),...$,...E}},c={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},t={args:{"data-aria-label":"This is a checkbox with no label"}},o={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},a={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},r={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>d`
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
}`,...(m=(i=c.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var b,p,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,u,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(k=(u=o.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,f,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(I=l.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const me=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField"];export{r as DisabledVariants,c as Example,l as FormField,o as HelperText,a as Indeterminate,t as WithoutLabel,me as __namedExportsOrder,ie as default};
