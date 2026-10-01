import{a6 as O,L as u,ao as P,k as p,t as a}from"./iframe-_wQilzrq.js";import{c as M,s as F}from"./commonArgTypes-BG7EqI50.js";import{h as N,b as V}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,S=e=>p` <mdc-numberinput
    @input="${l("oninput")}"
    @change="${l("onchange")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    label="${e.label}"
    help-text="${e["help-text"]}"
    help-text-type="${e["help-text-type"]}"
    name="${e.name}"
    value="${e.value}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    placeholder="${e.placeholder}"
    validation-message="${e["validation-message"]}"
    toggletip-text="${a(e["toggletip-text"])}"
    toggletip-placement="${a(e["toggletip-placement"])}"
    toggletip-strategy="${a(e["toggletip-strategy"])}"
    info-icon-aria-label="${a(e["info-icon-aria-label"])}"
    data-aria-label="${a(e["data-aria-label"])}"
    inputmode="${a(e.inputmode)}"
    min="${a(e.min)}"
    max="${a(e.max)}"
    step="${a(e.step)}"
    clamp="${a(e.clamp)}"
    ?hide-spinner-buttons="${e["hide-spinner-buttons"]}"
    increment-aria-label="${a(e["increment-aria-label"])}"
    decrement-aria-label="${a(e["decrement-aria-label"])}"
  ></mdc-numberinput>`,B={title:"Components/numberinput",tags:["autodocs"],component:"mdc-numberinput",render:S,args:{name:"number","increment-aria-label":"Increment","decrement-aria-label":"Decrement"},argTypes:{id:{control:"text",description:"The unique id of the number field. It is used to link the number field with the label."},placeholder:{control:"text",description:"The placeholder text that is displayed when the number field is empty."},name:{control:"text",description:"The name of the number field. It is used to identify the number field in a form."},value:{control:"text"},inputmode:{control:"select",options:Object.values(O)},label:{control:"text",description:"The label of the number field. It is linked to the number field using the for attribute."},"help-text":{control:"text",description:"Helper text for the number field"},"help-text-type":{control:"select",options:Object.values(u)},"validation-message":{control:"text",description:"Custom validation message that will override the default message and displayed when the number field is invalid."},"toggletip-text":{control:"text",description:"The toggletip text that is displayed when the info icon next to the label is clicked or pressed. When set, an info icon button and toggletip are rendered next to the label."},"toggletip-placement":{control:"text",description:"The placement of the toggletip that is displayed when the info icon is clicked or pressed."},"toggletip-strategy":{control:"text",description:"The positioning strategy for the toggletip."},"info-icon-aria-label":{control:"text",description:"Aria label for the info icon that is displayed next to the label when toggletip-text is set."},readonly:{control:"boolean",description:"readonly attribute of the number field. If true, the number field is read-only."},disabled:{control:"boolean"},required:{control:"boolean",description:"The required attribute to indicate that the number field is required. It is used to append a required indicator (*) to the label."},min:{control:"number",description:"The minimum value that the number field will accept."},max:{control:"number",description:"The maximum value that the number field will accept."},step:{control:"text",description:'The amount that the value changes for each increment/decrement. Set to "any" to allow any decimal value with no step-mismatch validation.'},clamp:{control:"select",options:Object.values(P),description:'Controls whether a value typed into the field is clamped to the min/max range. The spinner buttons and arrow keys always clamp; "auto" also clamps manual keyboard entry on change, while "none" leaves it as entered.'},"hide-spinner-buttons":{control:"boolean",description:"Increment and decrement spinner buttons are shown alongside the input field by default. Set this to true to hide them."},"increment-aria-label":{control:"text"},"decrement-aria-label":{control:"text"},"data-aria-label":{control:"text"},...N(["autocapitalize","clear-aria-label","trailing-button","prefix-text","leading-icon","maxlength","minlength","max-character-limit","character-limit-announcement","pattern","dirname"]),...M,...F}},i={args:{class:"custom-classname",label:"Number",name:"number",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"help-text":"Helper text","help-text-type":"default","validation-message":"","toggletip-text":"Enter a whole number.","info-icon-aria-label":"More information"}},o={args:{class:"custom-classname",label:"Quantity",name:"quantity",value:"1",min:0,max:10,step:1,"hide-spinner-buttons":!0,"help-text":"Enter a value between 0 and 10","help-text-type":"default"}},m={args:{class:"custom-classname",label:"Price",name:"price",value:"9.99",step:"any","increment-aria-label":"Increment","decrement-aria-label":"Decrement","help-text":"Any decimal value is accepted","help-text-type":"default"}},d={argTypes:{...V(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>p` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(u).map(e=>p`<mdc-numberinput
            help-text-type="${e}"
            label="Label"
            help-text="Helper text"
            placeholder="Placeholder"
            value="${e}_value"
            increment-aria-label="Increment"
            decrement-aria-label="Decrement"
          ></mdc-numberinput>`)}
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Number is required"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        readonly
        placeholder="Placeholder"
        value="42"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        disabled
        placeholder="Placeholder"
        value="42"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        disabled
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Values step by 5"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="100"
        step="5"
        value="10"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Spinner buttons hidden"
        help-text-type="default"
        placeholder="Placeholder"
        value="5"
        hide-spinner-buttons
      ></mdc-numberinput>
    </div>`},c={render:e=>{const s=n=>{const t=n.querySelector("mdc-numberinput");t==null||t.setAttribute("help-text-type",e["help-text-type"]||u.DEFAULT),t==null||t.setAttribute("help-text",e["help-text"])},q=n=>{const{validity:t}=n;return t.valueMissing?"Enter a number":t.rangeUnderflow?`Enter a value of ${e.min} or more`:t.rangeOverflow?`Enter a value of ${e.max} or less`:t.stepMismatch?Number(e.step)===1?"Enter a whole number":`Enter a value in steps of ${e.step}`:t.badInput?"Enter a valid number":e["help-text"]};return p`
      <form
        @submit=${n=>{n.preventDefault();const t=n.target,H=new FormData(t).get("number");l("Form Submitted")({value:H})}}
        @invalid=${{handleEvent:n=>{const t=n.target;t.setAttribute("help-text-type",u.ERROR),t.setAttribute("help-text",q(t))},capture:!0}}
        @input=${n=>{const t=n.currentTarget,r=t.querySelector("mdc-numberinput");r!=null&&r.validity.valid&&s(t)}}
        @reset=${n=>s(n.currentTarget)}
      >
        <fieldset>
          <legend>Form Example</legend>
          ${S(e)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{class:"custom-classname",label:"Quantity",name:"number",value:"1",min:0,max:10,step:1,required:!0,"help-text":"Enter a value between 0 and 10","help-text-type":"default","increment-aria-label":"Increment","decrement-aria-label":"Decrement"}};var b,h,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    label: 'Number',
    name: 'number',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'help-text': 'Helper text',
    'help-text-type': 'default',
    'validation-message': '',
    'toggletip-text': 'Enter a whole number.',
    'info-icon-aria-label': 'More information'
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,v,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    label: 'Quantity',
    name: 'quantity',
    value: '1',
    min: 0,
    max: 10,
    step: 1,
    'hide-spinner-buttons': true,
    'help-text': 'Enter a value between 0 and 10',
    'help-text-type': 'default'
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,I,$;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    label: 'Price',
    name: 'price',
    value: '9.99',
    step: 'any',
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement',
    'help-text': 'Any decimal value is accepted',
    'help-text-type': 'default'
  }
}`,...($=(I=m.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var E,T,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      \${Object.values(VALIDATION).map(validation => html\`<mdc-numberinput
            help-text-type="\${validation}"
            label="Label"
            help-text="Helper text"
            placeholder="Placeholder"
            value="\${validation}_value"
            increment-aria-label="Increment"
            decrement-aria-label="Decrement"
          ></mdc-numberinput>\`)}
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Number is required"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        readonly
        placeholder="Placeholder"
        value="42"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        disabled
        placeholder="Placeholder"
        value="42"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        disabled
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Values step by 5"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="100"
        step="5"
        value="10"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Spinner buttons hidden"
        help-text-type="default"
        placeholder="Placeholder"
        value="5"
        hide-spinner-buttons
      ></mdc-numberinput>
    </div>\`
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,L,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: any) => {
    const restoreHelpText = (form: HTMLFormElement) => {
      const numberInput = form.querySelector('mdc-numberinput');
      numberInput?.setAttribute('help-text-type', args['help-text-type'] || VALIDATION.DEFAULT);
      numberInput?.setAttribute('help-text', args['help-text']);
    };

    // Map the failing validity flag to a message that explains the specific reason (range vs step vs
    // required), instead of always showing the generic helper text.
    const getValidationMessage = (numberInput: HTMLInputElement) => {
      const {
        validity
      } = numberInput;
      if (validity.valueMissing) return 'Enter a number';
      if (validity.rangeUnderflow) return \`Enter a value of \${args.min} or more\`;
      if (validity.rangeOverflow) return \`Enter a value of \${args.max} or less\`;
      if (validity.stepMismatch) {
        return Number(args.step) === 1 ? 'Enter a whole number' : \`Enter a value in steps of \${args.step}\`;
      }
      if (validity.badInput) return 'Enter a valid number';
      return args['help-text'];
    };
    const handleInvalid = (event: Event) => {
      const numberInput = event.target as HTMLInputElement;
      numberInput.setAttribute('help-text-type', VALIDATION.ERROR);
      numberInput.setAttribute('help-text', getValidationMessage(numberInput));
    };
    const handleInput = (event: Event) => {
      const form = event.currentTarget as HTMLFormElement;
      const numberInput = form.querySelector('mdc-numberinput');
      if (numberInput?.validity.valid) {
        restoreHelpText(form);
      }
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const selectedValue = formData.get('number');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    const invalidListener = {
      handleEvent: handleInvalid,
      capture: true
    };
    return html\`
      <form
        @submit=\${handleSubmit}
        @invalid=\${invalidListener}
        @input=\${handleInput}
        @reset=\${(event: Event) => restoreHelpText(event.currentTarget as HTMLFormElement)}
      >
        <fieldset>
          <legend>Form Example</legend>
          \${render(args)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    class: 'custom-classname',
    label: 'Quantity',
    name: 'number',
    value: '1',
    min: 0,
    max: 10,
    step: 1,
    required: true,
    'help-text': 'Enter a value between 0 and 10',
    'help-text-type': 'default',
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement'
  }
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const W=["Example","WithoutSpinnerButtons","AnyStep","AllVariants","FormFieldNumber"];export{d as AllVariants,m as AnyStep,i as Example,c as FormFieldNumber,o as WithoutSpinnerButtons,W as __namedExportsOrder,B as default};
