import{A as T}from"./index-Dm0MhOfP.js";import{k as a}from"./lit-element-CHllvULs.js";import{t}from"./if-defined-C4tJgJ33.js";import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as H,s as I}from"./commonArgTypes-BluK8w5L.js";import{V as $}from"./formfieldwrapper.component-63e8oEkZ.js";import{d as q}from"./utils-D1SE5bce.js";import"./index-HW6KrQZO.js";import"./index-BGjwsboe.js";import"./index-C127c9l8.js";import"./index-Sajzukyr.js";import"./iframe-BIBLP4lW.js";import"../sb-preview/runtime.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./index-BGkqZMsC.js";import"./text.constants-DJu2q-6E.js";import"./button.constants-LoIgXAGe.js";import"./buttonsimple.component-B2cvzQes.js";import"./DisabledMixin-DBt9didn.js";import"./FormInternalsMixin-D4P2zbkO.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./index-CKL_0Jad.js";import"./button.utils-HT68lj2B.js";import"./v4-CQkTLCs1.js";const S=e=>{const r=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return a` <mdc-input
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
    ></mdc-input>`},le={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:S,parameters:{badges:["stable"]},argTypes:{...H,...I,"help-text-type":{control:"select",options:Object.values($)},name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},"required-label":{control:"text"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(T)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...q(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},o={args:{name:"input",label:"Label","required-label":"required",placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},n={render:()=>a`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  `},i={argTypes:{...q(["label","help-text","required-label","placeholder","value","help-text-type"])},render:()=>a`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values($).map(e=>a`<mdc-input
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
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,s,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  \`
}`,...(b=(s=n.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var h,x,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,v,g;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(v=d.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const ae=["Example","InputInSmallContainer","AllVariants","FormFieldInput"];export{i as AllVariants,o as Example,d as FormFieldInput,n as InputInSmallContainer,ae as __namedExportsOrder,le as default};
