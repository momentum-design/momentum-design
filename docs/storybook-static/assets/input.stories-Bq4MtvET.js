import"./index-BbNjTEsg.js";import{k as o}from"./lit-element-D5KKan5q.js";import{t}from"./if-defined-D5BV9-c0.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as D,s as q}from"./commonArgTypes-BluK8w5L.js";import{V as L}from"./formfieldwrapper.component-BeqiOSNt.js";import{t as A,d as H}from"./utils-CFOyPOhY.js";import{a as z}from"./popover.component-CWSuSUni.js";import{A as V}from"./input.constants-Ds8TJq2q.js";import"./index-jqsjuHo7.js";import"./button.component-AY6DUPps.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-S3PNIDkg.js";import"./iframe-BzlnvPy7.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-DeEenWCE.js";import"./index-C8X24_bA.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./input.component-6GuGe1Q-.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-BW_0fcem.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DR-5bOLb.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CQkTLCs1.js";const T=e=>{const c=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return o`<mdc-input
    @input="${a("oninput")}"
    @change="${a("onchange")}"
    @focus="${a("onfocus")}"
    @blur="${a("onblur")}"
    @clear="${a("onclear")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    validation-message="${e["validation-message"]}"
    placeholder="${e.placeholder}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    name="${e.name}"
    value="${c}"
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
    autocomplete="${t(e.autocomplete)}"
    dirname="${t(e.dirname)}"
    pattern="${t(e.pattern)}"
    list="${t(e.list)}"
    size="${t(e.size)}"
    clear-aria-label="${t(e["clear-aria-label"])}"
  ></mdc-input>`},Pe={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:T,parameters:{badges:["stable"]},argTypes:{...D,...q,"help-text-type":{control:"select",options:Object.values(L)},name:{control:"text"},id:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(V)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(z)},"validation-message":{control:"text"},"info-icon-aria-label":{control:"text"},...A(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},n={args:{name:"input",label:"Label",required:!0,placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},i={render:()=>o`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  `},d={argTypes:{...H(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>o` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(L).map(e=>o`<mdc-input
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
    </div>`},p={render:e=>o`
      <form @submit=${l=>{l.preventDefault();const s=new FormData(l.target).get("user-name");a("Form Submitted")({value:s})}}>
        <fieldset>
          <legend>Form Example</legend>
          ${T(e)}
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,args:{class:"custom-classname",label:"First Name",name:"user-name",placeholder:"Enter your name",readonly:!1,disabled:!1,required:!0,"help-text":"Please provide a valid name","help-text-type":"default","prefix-text":"","leading-icon":"","show-hide-button-aria-label":"Show or hide password",minlength:5,maxlength:10}},m={render:()=>o`
      <form @submit=${l=>{l.preventDefault();const s=new FormData(l.target).get("user-name");a("Form Submitted")({value:s})}}>
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
            @input=${l=>{const r=l.target;r.validity.valueMissing&&r.setAttribute("validation-message","Please enter a name"),r.validity.tooShort&&r.setAttribute("validation-message","Please enter a name with at least 5 characters")}}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `};var u,b,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,f,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,$;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...($=(y=d.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var S,F,P;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
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
          \${render(args)}
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    class: 'custom-classname',
    label: 'First Name',
    name: 'user-name',
    placeholder: 'Enter your name',
    readonly: false,
    disabled: false,
    required: true,
    'help-text': 'Please provide a valid name',
    'help-text-type': 'default',
    'prefix-text': '',
    'leading-icon': '',
    'show-hide-button-aria-label': 'Show or hide password',
    minlength: 5,
    maxlength: 10
  }
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var w,E,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const we=["Example","InputInSmallContainer","AllVariants","FormFieldInput","FormFieldInputWithCustomValidationMessage"];export{d as AllVariants,n as Example,p as FormFieldInput,m as FormFieldInputWithCustomValidationMessage,i as InputInSmallContainer,we as __namedExportsOrder,Pe as default};
