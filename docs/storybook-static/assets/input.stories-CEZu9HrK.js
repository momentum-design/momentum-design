import"./index-voZ271xq.js";import{k as o}from"./iframe-DgAYNH_H.js";import{t as l}from"./if-defined-BTodBEDH.js";import{c as H,s as O}from"./commonArgTypes-BluK8w5L.js";import{V as D}from"./formfieldwrapper.component-DPx1UzeY.js";import{d as w}from"./utils-Dd_sfl9-.js";import{P as z,S as V}from"./popover.component-xDX88cvH.js";import{A as N}from"./input.constants-DdprW7Hg.js";import"./index-BL8ntjSc.js";import"./button.component-uD1VDEQ4.js";import"./buttonsimple.component-CSzenvJx.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BD5X2mNA.js";import"./TabIndexMixin-CUWuhQpq.js";import"./button.utils-rNW36Ji7.js";import"./index-C_10niB2.js";import"./preload-helper-C1FmrZbK.js";import"./index-B67k6wQg.js";import"./index-DTrDRi1E.js";import"./index-BD8V6fTg.js";import"./index-f-ClGrh5.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bpp9krM9.js";import"./directive-Ctav8iJK.js";import"./index-bW7kTY-e.js";import"./DataAriaLabelMixin-B234y6ay.js";import"./FormInternalsMixin-lLmnIMb3.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DbM-rXKf.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,_=e=>{const d=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return o`<mdc-input
    @input="${n("oninput")}"
    @change="${n("onchange")}"
    @focus="${n("onfocus")}"
    @blur="${n("onblur")}"
    @clear="${n("onclear")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    validation-message="${e["validation-message"]}"
    placeholder="${e.placeholder}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    name="${e.name}"
    value="${d}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?trailing-button="${e["trailing-button"]}"
    prefix-text="${e["prefix-text"]}"
    data-aria-label="${l(e["data-aria-label"])}"
    leading-icon="${e["leading-icon"]}"
    maxlength="${l(e.maxlength)}"
    minlength="${l(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${l(e.autocomplete)}"
    dirname="${l(e.dirname)}"
    pattern="${l(e.pattern)}"
    list="${l(e.list)}"
    size="${l(e.size)}"
    clear-aria-label="${l(e["clear-aria-label"])}"
  ></mdc-input>`},xe={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:_,argTypes:{...H,...O,"help-text-type":{control:"select",options:Object.values(D)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(N)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(z)},"toggletip-strategy":{control:"select",options:Object.values(V)},"validation-message":{control:"text"},"info-icon-aria-label":{control:"text"}}},m={args:{name:"input",label:"Label",required:!0,placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off","clear-aria-label":"clear input","data-aria-label":""}},u={render:()=>o`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  `},s={argTypes:{...w(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>o` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(D).map(e=>o`<mdc-input
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
        disabled
        placeholder="Placeholder"
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
    </div>`},c={render:e=>{const d=(t,a)=>{const{value:i}=t;return i?a.minlength&&i.length<a.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at least ${a.minlength} characters`),!1):a.maxlength&&i.length>a.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at most ${a.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Name is required"),!1)};return o`
      <form @submit=${t=>{t.preventDefault();const a=t.target,i=a.querySelector("mdc-input");if(i&&!d(i,e))return;const E=new FormData(a).get("user-name");n("Form Submitted")({value:E})}} @reset=${()=>{const t=document.querySelector("mdc-input");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid name"))}} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-input
            placeholder=${e.placeholder}
            label=${e.label}
            name=${e.name}
            ?required=${e.required}
            minlength=${l(e.minlength)}
            maxlength=${l(e.maxlength)}
            help-text=${e["help-text"]}
            help-text-type=${e["help-text-type"]}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{label:"First Name",name:"user-name",placeholder:"Enter your name",required:!0,minlength:5,maxlength:10,"help-text":"Please provide a valid name","help-text-type":"default"}},h={render:()=>o`
      <form @submit=${p=>{p.preventDefault();const t=new FormData(p.target).get("user-name");n("Form Submitted")({value:t})}}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-input
            placeholder="Enter your name"
            label="First Name"
            name="user-name"
            required
            minlength="5"
            maxlength="10"
            show-hide-button-aria-label="Show or hide password"
            validation-message="Please enter a valid name"
            @input=${p=>{const r=p.target;r.validity.valueMissing&&r.setAttribute("validation-message","Please enter a name"),r.validity.tooShort&&r.setAttribute("validation-message","Please enter a name with at least 5 characters")}}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `};var b,x,f;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    'clear-aria-label': 'clear input',
    'data-aria-label': ''
  }
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,v,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  \`
}`,...(y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var $,A,S;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
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
        disabled
        placeholder="Placeholder"
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
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var q,I,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const validateInput = (input: Input, args: any): boolean => {
      const {
        value
      } = input;
      if (!value) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', 'Name is required');
        return false;
      }
      if (args.minlength && value.length < args.minlength) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', \`Name must be at least \${args.minlength} characters\`);
        return false;
      }
      if (args.maxlength && value.length > args.maxlength) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', \`Name must be at most \${args.maxlength} characters\`);
        return false;
      }
      input.setAttribute('help-text-type', 'success');
      input.setAttribute('help-text', 'Looks good!');
      return true;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const input = form.querySelector('mdc-input') as Input;
      if (input && !validateInput(input, args)) {
        return; // prevent submit if invalid
      }
      const formData = new FormData(form);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    const handleReset = () => {
      const input = document.querySelector('mdc-input');
      if (input) {
        input.setAttribute('help-text-type', args['help-text-type'] || 'default');
        input.setAttribute('help-text', args['help-text'] || 'Please provide a valid name');
      }
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-input
            placeholder=\${args.placeholder}
            label=\${args.label}
            name=\${args.name}
            ?required=\${args.required}
            minlength=\${ifDefined(args.minlength)}
            maxlength=\${ifDefined(args.maxlength)}
            help-text=\${args['help-text']}
            help-text-type=\${args['help-text-type']}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    label: 'First Name',
    name: 'user-name',
    placeholder: 'Enter your name',
    required: true,
    minlength: 5,
    maxlength: 10,
    'help-text': 'Please provide a valid name',
    'help-text-type': 'default'
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var T,F,L;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.validity.valueMissing) {
        input.setAttribute('validation-message', 'Please enter a name');
      }
      if (input.validity.tooShort) {
        input.setAttribute('validation-message', 'Please enter a name with at least 5 characters');
      }
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-input
            placeholder="Enter your name"
            label="First Name"
            name="user-name"
            required
            minlength="5"
            maxlength="10"
            show-hide-button-aria-label="Show or hide password"
            validation-message="Please enter a valid name"
            @input=\${handleInput}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  }
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const fe=["Example","InputInSmallContainer","AllVariants","FormFieldInputWithHelpTextValidation","FormFieldInputWithCustomValidationMessage"];export{s as AllVariants,m as Example,h as FormFieldInputWithCustomValidationMessage,c as FormFieldInputWithHelpTextValidation,u as InputInSmallContainer,fe as __namedExportsOrder,xe as default};
