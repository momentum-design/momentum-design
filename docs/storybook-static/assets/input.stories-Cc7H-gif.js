import"./index-hS8WFumR.js";import{k as i}from"./lit-element-D5KKan5q.js";import{t as l}from"./if-defined-D5BV9-c0.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as H,s as w}from"./commonArgTypes-BluK8w5L.js";import{V as D}from"./formfieldwrapper.component-DfjqvCUn.js";import{t as z,d as V}from"./utils-CFOyPOhY.js";import{a as N}from"./popover.component-BYKb63Rn.js";import{A as O}from"./input.constants-Bk1h_X3A.js";import"./index-D-lRBB8U.js";import"./button.component-DPkHVNTO.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-1GEifFmP.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-DWEaZGUU.js";import"./iframe-DIkLrqgf.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-D2VIkDCb.js";import"./index-PpRX4uh5.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./input.component-BkCd4lbN.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-CuhqYGga.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CQkTLCs1.js";const C=e=>{const d=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return i`<mdc-input
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
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
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
  ></mdc-input>`},Le={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:C,parameters:{badges:["stable"]},argTypes:{...H,...w,"help-text-type":{control:"select",options:Object.values(D)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(O)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(N)},"validation-message":{control:"text"},"info-icon-aria-label":{control:"text"},...z(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},m={args:{name:"input",label:"Label",required:!0,placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off","clear-aria-label":"clear input","data-aria-label":""}},u={render:()=>i`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  `},s={argTypes:{...V(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>i` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(D).map(e=>i`<mdc-input
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
    </div>`},c={render:e=>{const d=(t,a)=>{const{value:o}=t;return o?a.minlength&&o.length<a.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at least ${a.minlength} characters`),!1):a.maxlength&&o.length>a.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Name must be at most ${a.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Name is required"),!1)};return i`
      <form @submit=${t=>{t.preventDefault();const a=t.target,o=a.querySelector("mdc-input");if(o&&!d(o,e))return;const E=new FormData(a).get("user-name");n("Form Submitted")({value:E})}} @reset=${()=>{const t=document.querySelector("mdc-input");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid name"))}} novalidate>
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
    `},args:{label:"First Name",name:"user-name",placeholder:"Enter your name",required:!0,minlength:5,maxlength:10,"help-text":"Please provide a valid name","help-text-type":"default"}},h={render:()=>i`
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
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var q,F,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,L,T;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(L=h.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const Te=["Example","InputInSmallContainer","AllVariants","FormFieldInputWithHelpTextValidation","FormFieldInputWithCustomValidationMessage"];export{s as AllVariants,m as Example,h as FormFieldInputWithCustomValidationMessage,c as FormFieldInputWithHelpTextValidation,u as InputInSmallContainer,Te as __namedExportsOrder,Le as default};
