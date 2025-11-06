import"./index-CNeEpBSh.js";import"./index-7YDlve5C.js";import{k as n}from"./iframe-DR_X9QNR.js";import{t as l}from"./if-defined-DVoAFy12.js";import{c as V,s as N}from"./commonArgTypes-BluK8w5L.js";import{V as O}from"./formfieldwrapper.constants-BQArzYgl.js";import{d as C}from"./utils-Dd_sfl9-.js";import{P as _,S as R}from"./popover.component-DnVWinqG.js";import{A as M}from"./input.constants-DGDgDBJV.js";import"./index-Cch12CXn.js";import"./button.component-Cvg7bd9X.js";import"./buttonsimple.component-BT3z0_-c.js";import"./TabIndexMixin-Sc5Qb2oZ.js";import"./DisabledMixin-BHp9XfKA.js";import"./button.utils-rNW36Ji7.js";import"./index-CSktb0jT.js";import"./preload-helper-C1FmrZbK.js";import"./index-B-Ww-zDV.js";import"./index-DTrDRi1E.js";import"./index-6jB2hmfw.js";import"./base-DIkkzJ-c.js";import"./index-D10DKtwx.js";import"./v4-CmTdKEVZ.js";import"./input.component-D4F__YOb.js";import"./directive-Ctav8iJK.js";import"./index-BUTwWPXD.js";import"./formfieldwrapper.component-5RF3ABQK.js";import"./DataAriaLabelMixin-Bxn-ps7Z.js";import"./FormInternalsMixin-DRa3F_by.js";import"./query-BPxBhMfF.js";import"./BackdropMixin-DTp3s_o2.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,W=e=>{const d=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return n`<mdc-input
    @input="${r("oninput")}"
    @change="${r("onchange")}"
    @focus="${r("onfocus")}"
    @blur="${r("onblur")}"
    @clear="${r("onclear")}"
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
    data-aria-describedby="${l(e["data-aria-describedby"])}"
  ></mdc-input>`},$e={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:W,argTypes:{...V,...N,"help-text-type":{control:"select",options:Object.values(O)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(M)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"data-aria-describedby":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(_)},"toggletip-strategy":{control:"select",options:Object.values(R)},"validation-message":{control:"text"},"info-icon-aria-label":{control:"text"}}},s={args:{name:"input",label:"Label",required:!0,placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off","clear-aria-label":"clear input","data-aria-label":"","data-aria-describedby":""}},m={render:()=>n`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  `},u={argTypes:{...C(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>n` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(O).map(e=>n`<mdc-input
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
    </div>`},c={render:e=>{const d=(t,a)=>{const{value:o}=t;return o?a.minlength&&o.length<a.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at least ${a.minlength} characters`),!1):a.maxlength&&o.length>a.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at most ${a.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Name is required"),!1)};return n`
      <form @submit=${t=>{t.preventDefault();const a=t.target,o=a.querySelector("mdc-input");if(o&&!d(o,e))return;const z=new FormData(a).get("user-name");r("Form Submitted")({value:z})}} @reset=${()=>{const t=document.querySelector("mdc-input");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid name"))}} novalidate>
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
    `},args:{label:"First Name",name:"user-name",placeholder:"Enter your name",required:!0,minlength:5,maxlength:10,"help-text":"Please provide a valid name","help-text-type":"default"}},h={render:()=>n`
      <form @submit=${p=>{p.preventDefault();const t=new FormData(p.target).get("user-name");r("Form Submitted")({value:t})}}>
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
            @input=${p=>{const i=p.target;i.validity.valueMissing&&i.setAttribute("validation-message","Please enter a name"),i.validity.tooShort&&i.setAttribute("validation-message","Please enter a name with at least 5 characters")}}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},b={render:()=>n`
    <mdc-input>
      <input slot="input" type="number" aria-label="Custom aria-label on slotted input element" value="42" />
    </mdc-input>
  `,parameters:{docs:{description:{story:n`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            In the example below a native input element is slotted into the mdc-input component (see code preview).<br />
            This allows for more control over the input element itself, such as setting a different type or adding
            custom attributes directly to the input.<br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using a slotted input, certain features of mdc-input (like validation messages, a11y) 
          may need to be handled manually."
          ></mdc-banner> `}},controls:{disable:!0}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    'data-aria-label': '',
    'data-aria-describedby': ''
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,v,$;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...($=(v=m.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var A,S,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,q,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var F,E,w;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(E=h.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var L,D,H;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-input>
      <input slot="input" type="number" aria-label="Custom aria-label on slotted input element" value="42" />
    </mdc-input>
  \`,
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            In the example below a native input element is slotted into the mdc-input component (see code preview).<br />
            This allows for more control over the input element itself, such as setting a different type or adding
            custom attributes directly to the input.<br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using a slotted input, certain features of mdc-input (like validation messages, a11y) 
          may need to be handled manually."
          ></mdc-banner> \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(H=(D=b.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const Ae=["Example","InputInSmallContainer","AllVariants","FormFieldInputWithHelpTextValidation","FormFieldInputWithCustomValidationMessage","SlottedInputElement"];export{u as AllVariants,s as Example,h as FormFieldInputWithCustomValidationMessage,c as FormFieldInputWithHelpTextValidation,m as InputInSmallContainer,b as SlottedInputElement,Ae as __namedExportsOrder,$e as default};
