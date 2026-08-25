import{W as R,J as k,K as I,k as h,t as s}from"./iframe-DKmoi846.js";import{c as L,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as W}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,z=e=>{const l=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return h` <mdc-password
    @input="${o("oninput")}"
    @change="${o("onchange")}"
    @focus="${o("onfocus")}"
    @blur="${o("onblur")}"
    label="${e.label}"
    help-text="${e["help-text"]}"
    help-text-type="${e["help-text-type"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    name="${e.name}"
    value="${l}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    placeholder="${e.placeholder}"
    validation-message="${e["validation-message"]}"
    data-aria-label="${s(e["data-aria-label"])}"
    maxlength="${s(e.maxlength)}"
    minlength="${s(e.minlength)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${s(e.autocomplete)}"
    dirname="${s(e.dirname)}"
    pattern="${s(e.pattern)}"
    list="${s(e.list)}"
    size="${s(e.size)}"
    show-button-aria-label="${e["show-button-aria-label"]}"
    hide-button-aria-label="${e["hide-button-aria-label"]}"
  ></mdc-password>`},B={title:"Components/password",tags:["autodocs"],component:"mdc-password",render:z,args:{name:"password"},argTypes:{id:{control:"text",description:"The unique id of the password field. It is used to link the password field with the label."},placeholder:{control:"text",description:"The placeholder text that is displayed when the password field is empty."},name:{control:"text",description:"The name of the password field. It is used to identify the password field in a form."},"show-button-aria-label":{control:"text"},"hide-button-aria-label":{control:"text"},label:{control:"text",description:"The label of the password field. It is linked to the password field using the for attribute."},"help-text":{control:"text",description:"Helper text for the password"},"help-text-type":{control:"select",options:Object.values(R)},"validation-message":{control:"text",description:"Custom validation message that will override the default message and displayed when the password is invalid."},readonly:{control:"boolean",description:"readonly attribute of the password field. If true, the password field is read-only."},disabled:{control:"boolean"},minlength:{control:"number",description:"The minimum number of characters that the password field can accept."},maxlength:{control:"number",description:"The maximum number of characters that the password field can accept."},"auto-focus-on-mount":{control:"boolean"},dirname:{control:"text"},pattern:{control:"text",description:"The pattern attribute of the password field. Specifies a regular expression that the password value must match for validation purposes."},required:{control:"boolean",description:"The required attribute to indicate that the password field is required. It is used to append a required indicator (*) to the label."},size:{control:"number",description:"The size attribute of the password field. Specifies the width of the password field."},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(k)},"toggletip-strategy":{control:"select",options:Object.values(I)},"info-icon-aria-label":{control:"text"},...W(["autocapitalize","clear-aria-label","showPassword","trailing-button","prefix-text","leading-icon"]),...L,...C}},n={args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"show-button-aria-label":"Show password","hide-button-aria-label":"Hide password","validation-message":""}},d={render:e=>h`
      <form @submit=${m=>{m.preventDefault();const b=m.target,a=new FormData(b).get("password");o("Form Submitted")({value:a})}}>
        <fieldset>
          <legend>Form Example</legend>
          ${z(e)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"help-text":"Enter a strong password","help-text-type":"default","show-button-aria-label":"Show password","hide-button-aria-label":"Hide password","validation-message":"Password must be between 5 and 10 characters.",minlength:5,maxlength:10}},i={render:e=>{const l=(t,a)=>{const{value:r}=t;return r?a.minlength&&r.length<a.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Password must be at least ${a.minlength} characters`),!1):a.maxlength&&r.length>a.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Password must be at most ${a.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Password is required"),!1)};return h`
      <form @submit=${t=>{t.preventDefault();const a=t.target,r=a.querySelector("mdc-password");if(r&&!l(r,e))return;const O=new FormData(a).get("password");o("Form Submitted")({value:O})}} @reset=${()=>{const t=document.querySelector("mdc-password");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid password"))}} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-password
            placeholder=${e.placeholder}
            label=${e.label}
            name=${e.name}
            ?required=${e.required}
            minlength=${s(e.minlength)}
            maxlength=${s(e.maxlength)}
            help-text=${e["help-text"]}
            help-text-type=${e["help-text-type"]}
            show-button-aria-label=${e["show-button-aria-label"]}
            hide-button-aria-label=${e["hide-button-aria-label"]}
          ></mdc-password>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{label:"Password",name:"password",placeholder:"Enter your password",required:!0,minlength:5,maxlength:10,"help-text":"Please provide a valid password","help-text-type":"default","show-button-aria-label":"Show password","hide-button-aria-label":"Hide password"}},p={args:{label:"Password","help-text":"Enter a strong password","help-text-type":"default",placeholder:"Enter password",value:"default_password123","show-button-aria-label":"Show password","hide-button-aria-label":"Hide password"}},u={args:{label:"Password","help-text":"Password is too weak","help-text-type":"error",placeholder:"Enter password",value:"error_password123","show-button-aria-label":"Show password","hide-button-aria-label":"Hide password"}},c={args:{label:"Password","help-text":"Strong password!","help-text-type":"success",placeholder:"Enter password",value:"success_password123","show-button-aria-label":"Show password","hide-button-aria-label":"Hide password"}};var w,f,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    label: 'Password',
    name: 'password',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'show-button-aria-label': 'Show password',
    'hide-button-aria-label': 'Hide password',
    'validation-message': ''
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,y,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const selectedValue = formData.get('password');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
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
    label: 'Password',
    name: 'password',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    'show-button-aria-label': 'Show password',
    'hide-button-aria-label': 'Hide password',
    'validation-message': 'Password must be between 5 and 10 characters.',
    minlength: 5,
    maxlength: 10
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var $,S,P;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const validatePassword = (passwordEl: Password, args: any): boolean => {
      const {
        value
      } = passwordEl;
      if (!value) {
        passwordEl.setAttribute('help-text-type', 'error');
        passwordEl.setAttribute('help-text', 'Password is required');
        return false;
      }
      if (args.minlength && value.length < args.minlength) {
        passwordEl.setAttribute('help-text-type', 'error');
        passwordEl.setAttribute('help-text', \`Password must be at least \${args.minlength} characters\`);
        return false;
      }
      if (args.maxlength && value.length > args.maxlength) {
        passwordEl.setAttribute('help-text-type', 'error');
        passwordEl.setAttribute('help-text', \`Password must be at most \${args.maxlength} characters\`);
        return false;
      }
      passwordEl.setAttribute('help-text-type', 'success');
      passwordEl.setAttribute('help-text', 'Looks good!');
      return true;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const passwordEl = form.querySelector('mdc-password') as Password;
      if (passwordEl && !validatePassword(passwordEl, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValue = formData.get('password');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    const handleReset = () => {
      const passwordEl = document.querySelector('mdc-password');
      if (passwordEl) {
        passwordEl.setAttribute('help-text-type', args['help-text-type'] || 'default');
        passwordEl.setAttribute('help-text', args['help-text'] || 'Please provide a valid password');
      }
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-password
            placeholder=\${args.placeholder}
            label=\${args.label}
            name=\${args.name}
            ?required=\${args.required}
            minlength=\${ifDefined(args.minlength)}
            maxlength=\${ifDefined(args.maxlength)}
            help-text=\${args['help-text']}
            help-text-type=\${args['help-text-type']}
            show-button-aria-label=\${args['show-button-aria-label']}
            hide-button-aria-label=\${args['hide-button-aria-label']}
          ></mdc-password>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password',
    required: true,
    minlength: 5,
    maxlength: 10,
    'help-text': 'Please provide a valid password',
    'help-text-type': 'default',
    'show-button-aria-label': 'Show password',
    'hide-button-aria-label': 'Hide password'
  }
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var E,A,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    value: 'default_password123',
    'show-button-aria-label': 'Show password',
    'hide-button-aria-label': 'Hide password'
  }
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,q,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Password is too weak',
    'help-text-type': 'error',
    placeholder: 'Enter password',
    value: 'error_password123',
    'show-button-aria-label': 'Show password',
    'hide-button-aria-label': 'Hide password'
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,V,_;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Strong password!',
    'help-text-type': 'success',
    placeholder: 'Enter password',
    value: 'success_password123',
    'show-button-aria-label': 'Show password',
    'hide-button-aria-label': 'Hide password'
  }
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const G=["Example","FormFieldPassword","FormFieldPasswordWithHelpTextValidation","DefaultValidation","ErrorValidation","SuccessValidation"];export{p as DefaultValidation,u as ErrorValidation,n as Example,d as FormFieldPassword,i as FormFieldPasswordWithHelpTextValidation,c as SuccessValidation,G as __namedExportsOrder,B as default};
