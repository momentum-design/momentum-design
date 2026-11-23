import{L as R,a8 as j,a9 as U,J as K,K as Y,k as n,t as a}from"./iframe-ByEIys5m.js";import{c as B,s as G}from"./commonArgTypes-BG7EqI50.js";import{b as J}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,Z=e=>{const o=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return n`<mdc-input
    @input="${i("oninput")}"
    @change="${i("onchange")}"
    @focus="${i("onfocus")}"
    @blur="${i("onblur")}"
    @clear="${i("onclear")}"
    @limitexceeded="${i("onlimitexceeded")}"
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
    value="${o}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?trailing-button="${e["trailing-button"]}"
    prefix-text="${e["prefix-text"]}"
    data-aria-label="${a(e["data-aria-label"])}"
    leading-icon="${e["leading-icon"]}"
    maxlength="${a(e.maxlength)}"
    minlength="${a(e.minlength)}"
    max-character-limit="${a(e["max-character-limit"])}"
    character-limit-announcement="${a(e["character-limit-announcement"])}"
    autocapitalize="${e.autocapitalize}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${a(e.autocomplete)}"
    inputmode="${a(e.inputmode)}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
    clear-aria-label="${a(e["clear-aria-label"])}"
    data-aria-describedby="${a(e["data-aria-describedby"])}"
  ></mdc-input>`},le={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:Z,argTypes:{...B,...G,"help-text-type":{control:"select",options:Object.values(R)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},"character-limit-announcement":{control:"text"},autocapitalize:{control:"select",options:Object.values(j)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text"},inputmode:{control:"select",options:Object.values(U)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"data-aria-describedby":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(K)},"toggletip-strategy":{control:"select",options:Object.values(Y)},"validation-message":{control:"text"},"info-icon-aria-label":{control:"text"}}},m={args:{name:"input",label:"Label",required:!0,placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off","clear-aria-label":"clear input","data-aria-label":"","data-aria-describedby":""}},p={render:()=>n`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  `},s={argTypes:{...J(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>n` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(R).map(e=>n`<mdc-input
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
    </div>`},u={render:e=>{const o=(t,r)=>{const{value:c}=t;return c?r.minlength&&c.length<r.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at least ${r.minlength} characters`),!1):r.maxlength&&c.length>r.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at most ${r.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Name is required"),!1)};return n`
      <form @submit=${t=>{t.preventDefault();const r=t.target,c=r.querySelector("mdc-input");if(c&&!o(c,e))return;const W=new FormData(r).get("user-name");i("Form Submitted")({value:W})}} @reset=${()=>{const t=document.querySelector("mdc-input");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid name"))}} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-input
            placeholder=${e.placeholder}
            label=${e.label}
            name=${e.name}
            ?required=${e.required}
            minlength=${a(e.minlength)}
            maxlength=${a(e.maxlength)}
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
      <form @submit=${l=>{l.preventDefault();const t=new FormData(l.target).get("user-name");i("Form Submitted")({value:t})}}>
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
            @input=${l=>{const d=l.target;d.validity.valueMissing&&d.setAttribute("validation-message","Please enter a name"),d.validity.tooShort&&d.setAttribute("validation-message","Please enter a name with at least 5 characters")}}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},b={render:()=>n`
      <mdc-input
        label="Label"
        required
        placeholder="Placeholder"
        help-text="Helper text"
        max-character-limit="75"
        character-limit-announcement="%{number-of-characters} out of %{max-character-limit} characters are typed."
        @limitexceeded="${o=>{const l=o.target,{currentCharacterCount:d,maxCharacterLimit:t}=o.detail;i("onlimitexceeded")(o.detail),d>t?(l.setAttribute("help-text-type","error"),l.setAttribute("help-text",`Character limit exceeded. Maximum ${t} characters allowed.`)):(l.setAttribute("help-text-type","default"),l.setAttribute("help-text","Helper text"))}}"
      ></mdc-input>
    `},x={render:()=>n`
    <mdc-input>
      <input slot="input" type="tel" aria-label="Phone number" value="+1 202-555-0147" />
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
          ></mdc-banner> `}},controls:{disable:!0}}},f={name:"Autofill contacts (Safari)",render:()=>n`
    <style>
      .autofill-sandbox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 22rem;
      }

      .autofill-sandbox input.native {
        height: 2rem;
        box-sizing: border-box;
      }
    </style>
    <form class="autofill-sandbox">
      <mdc-input label="First name" name="given-name" autocomplete="given-name"></mdc-input>
      <mdc-input label="Email" name="email" autocomplete="email"></mdc-input>
      <mdc-input
        label="Email (extended)"
        name="email-extra"
        placeholder="Placeholder"
        autocomplete="email"
        trailing-button
        required
        help-text="Trailing button, placeholder, required, help text"
      ></mdc-input>
      <br />
      <br />
      <label>
        Email (native, for comparison)
        <input class="native" type="email" name="email-native" autocomplete="email" />
      </label>
      <label>
        Email (native, color-scheme: dark)
        <input class="native" type="email" name="email-native-dark" autocomplete="email" style="color-scheme: dark;" />
      </label>
    </form>
  `,parameters:{controls:{disable:!0},docs:{description:{story:"Sandbox for the Safari AutoFill contacts icon, includes a native input to compare against. Open this story in Safari."}}}};var g,y,v;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(y=m.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var $,A,S;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var E,L,I;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var q,P,T;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var F,C,w;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(C=h.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var H,D,O;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const handleLimitExceeded = (event: CustomEvent) => {
      const input = event.target as HTMLElement;
      const {
        currentCharacterCount,
        maxCharacterLimit
      } = event.detail;
      action('onlimitexceeded')(event.detail);
      if (currentCharacterCount > maxCharacterLimit) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', \`Character limit exceeded. Maximum \${maxCharacterLimit} characters allowed.\`);
      } else {
        input.setAttribute('help-text-type', 'default');
        input.setAttribute('help-text', 'Helper text');
      }
    };
    return html\`
      <mdc-input
        label="Label"
        required
        placeholder="Placeholder"
        help-text="Helper text"
        max-character-limit="75"
        character-limit-announcement="%{number-of-characters} out of %{max-character-limit} characters are typed."
        @limitexceeded="\${handleLimitExceeded}"
      ></mdc-input>
    \`;
  }
}`,...(O=(D=b.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var z,N,V;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-input>
      <input slot="input" type="tel" aria-label="Phone number" value="+1 202-555-0147" />
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
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var M,_,k;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Autofill contacts (Safari)',
  render: () => html\`
    <style>
      .autofill-sandbox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 22rem;
      }

      .autofill-sandbox input.native {
        height: 2rem;
        box-sizing: border-box;
      }
    </style>
    <form class="autofill-sandbox">
      <mdc-input label="First name" name="given-name" autocomplete="given-name"></mdc-input>
      <mdc-input label="Email" name="email" autocomplete="email"></mdc-input>
      <mdc-input
        label="Email (extended)"
        name="email-extra"
        placeholder="Placeholder"
        autocomplete="email"
        trailing-button
        required
        help-text="Trailing button, placeholder, required, help text"
      ></mdc-input>
      <br />
      <br />
      <label>
        Email (native, for comparison)
        <input class="native" type="email" name="email-native" autocomplete="email" />
      </label>
      <label>
        Email (native, color-scheme: dark)
        <input class="native" type="email" name="email-native-dark" autocomplete="email" style="color-scheme: dark;" />
      </label>
    </form>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Sandbox for the Safari AutoFill contacts icon, includes a native input to compare against. Open this story in Safari.'
      }
    }
  }
}`,...(k=(_=f.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ne=["Example","InputInSmallContainer","AllVariants","FormFieldInputWithHelpTextValidation","FormFieldInputWithCustomValidationMessage","InputWithCharacterCounter","SlottedInputElement","AutofillContactsSafari"];export{s as AllVariants,f as AutofillContactsSafari,m as Example,h as FormFieldInputWithCustomValidationMessage,u as FormFieldInputWithHelpTextValidation,p as InputInSmallContainer,b as InputWithCharacterCounter,x as SlottedInputElement,ne as __namedExportsOrder,le as default};
