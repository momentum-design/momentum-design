import"./index-BiLr1pon.js";import{k as a}from"./lit-element-D5KKan5q.js";import{t}from"./if-defined-D5BV9-c0.js";import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as P,s as T}from"./commonArgTypes-BluK8w5L.js";import{V as $}from"./formfieldwrapper.component-B1RGcmSz.js";import{d as L}from"./utils-CO8B6ZcN.js";import{A as H}from"./input.constants-DOAqpgue.js";import{P as I}from"./popover.component-B9J0JIz9.js";import"./index-CCYvm2ed.js";import"./button.component-CETyLHgp.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-B8RjYjG0.js";import"./iframe-DQZODXwl.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D1yLszQ-.js";import"./index-Ctrc4mrd.js";import"./index-CWUJHaLg.js";import"./v4-CmTdKEVZ.js";import"./input.component-BcHDcdIS.js";import"./index-B4Fj1fVp.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CQkTLCs1.js";import"./FocusTrapMixin-CjzCjsSm.js";const S=e=>{const o=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return a` <mdc-input
    @input="${l("oninput")}"
    @change="${l("onchange")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    placeholder="${e.placeholder}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    name="${e.name}"
    value="${o}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
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
    ></mdc-input>`},be={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:S,parameters:{badges:["stable"]},argTypes:{...P,...T,"help-text-type":{control:"select",options:Object.values($)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(H)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(I)},"info-icon-aria-label":{control:"text"},...L(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},r={args:{name:"input",label:"Label",required:!0,placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},i={render:()=>a`
  <div style='width: 200px;'>
    <mdc-input 
    label='This is a large label text which is truncated into an ellipsis'
    required 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  `},n={argTypes:{...L(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>a`
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
      required
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
      </div>`},p={render:()=>a`
    <form @submit=${o=>{o.preventDefault();const q=new FormData(o.target).get("user-name");l("Form Submitted")({value:q})}}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-input
       name='user-name'
        label="First Name"
        required
        placeholder="Enter your name"
        validation-message="Name is required"
      ></mdc-input>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'input',
    label: 'Label',
    required: true,
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,s,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
  <div style='width: 200px;'>
    <mdc-input 
    label='This is a large label text which is truncated into an ellipsis'
    required 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  \`
}`,...(b=(s=i.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
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
      required
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
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,v,g;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        required
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
}`,...(g=(v=p.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const he=["Example","InputInSmallContainer","AllVariants","FormFieldInput"];export{n as AllVariants,r as Example,p as FormFieldInput,i as InputInSmallContainer,he as __namedExportsOrder,be as default};
