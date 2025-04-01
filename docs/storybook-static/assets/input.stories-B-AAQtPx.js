import"./index-CLQy33tM.js";import{k as a}from"./lit-element-D5KKan5q.js";import{t}from"./if-defined-D5BV9-c0.js";import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as T,s as H}from"./commonArgTypes-BluK8w5L.js";import{V as g}from"./formfieldwrapper.component-B9qpm-pj.js";import{d as q}from"./utils-D1SE5bce.js";import{A as I}from"./input.constants-wxv6-efV.js";import"./input.component--KPSTaJD.js";import"./index-C9z9WAEj.js";import"./index-DoSuNddn.js";import"./index-DUgpj6fI.js";import"./index-B9Z4EV-P.js";import"./iframe-ymRrrG26.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-Dg5j8Yib.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-C-Wh2UEN.js";import"./buttonsimple.component-C9FYjWVA.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-BIfGRN4W.js";import"./button.utils-BQ4i2NgT.js";import"./v4-CQkTLCs1.js";const S=e=>{const r=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return a` <mdc-input
    @input="${l("oninput")}"
    @change="${l("onchange")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${r}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    required-label="${e["required-label"]}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?trailing-button="${e["trailing-button"]}"
    prefix-text="${e["prefix-text"]}"
    data-aria-label="${t(e["data-aria-label"])}"
    leading-icon="${e["leading-icon"]}"
    maxlength="${t(e.maxlength)}"
    minlength="${t(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?autofocus="${e.autofocus}"
    autocomplete="${e.autocomplete}"
    dirname="${t(e.dirname)}"
    pattern="${t(e.pattern)}"
    list="${t(e.list)}"
    size="${t(e.size)}"
    clear-aria-label="${t(e["clear-aria-label"])}"
    ></mdc-input>`},ne={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:S,parameters:{badges:["stable"]},argTypes:{...T,...H,"help-text-type":{control:"select",options:Object.values(g)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},"required-label":{control:"text"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(I)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...q(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},o={args:{name:"input",label:"Label","required-label":"required",placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},i={render:()=>a`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  `},n={argTypes:{...q(["label","help-text","required-label","placeholder","value","help-text-type"])},render:()=>a`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(g).map(e=>a`<mdc-input
      help-text-type="${e}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="${e}_value"
      ></mdc-input>`)}
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Input is required"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      readonly 
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      value="This is readonly"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      disabled placeholder="Placeholder"
      value="Text disabled"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      prefix-text="https://"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      ></mdc-input>
      </div>`},d={render:()=>a`
    <form @submit=${r=>{r.preventDefault();const L=new FormData(r.target).get("user-name");l("Form Submitted")({value:L})}}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-input
       name='user-name'
        label="First Name"
        required-label="required"
        placeholder="Enter your name"
        validation-message="Name is required"
      ></mdc-input>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'input',
    label: 'Label',
    'required-label': 'required',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    readonly: false,
    disabled: false,
    'prefix-text': '',
    'leading-icon': '',
    'trailing-button': false,
    autocapitalize: 'off',
    autofocus: false,
    'clear-aria-label': 'clear input',
    'data-aria-label': ''
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,s,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  \`
}`,...(b=(s=i.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required-label', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    \${Object.values(VALIDATION).map(validation => html\`<mdc-input
      help-text-type="\${validation}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="\${validation}_value"
      ></mdc-input>\`)}
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Input is required"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      readonly 
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      value="This is readonly"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      disabled placeholder="Placeholder"
      value="Text disabled"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      prefix-text="https://"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      ></mdc-input>
      </div>\`
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,v,$;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
    <form @submit=\${handleSubmit}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-input
       name='user-name'
        label="First Name"
        required-label="required"
        placeholder="Enter your name"
        validation-message="Name is required"
      ></mdc-input>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    \`;
  }
}`,...($=(v=d.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const de=["Example","InputInSmallContainer","AllVariants","FormFieldInput"];export{n as AllVariants,o as Example,d as FormFieldInput,i as InputInSmallContainer,de as __namedExportsOrder,ne as default};
