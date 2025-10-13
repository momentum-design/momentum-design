import"./index-ClGudl5J.js";import"./index-BcUHjabB.js";import{u as M,h as Y,k as w,B as j,n as N,$ as U}from"./iframe-5_Zofx-s.js";import"./index-C0M1JJLc.js";import{I as x}from"./input.component-DMkMtRpy.js";import{I as y}from"./input.constants-GwvmFIkn.js";import{D as v,V as G}from"./formfieldwrapper.component-DupRscxy.js";import{t as o}from"./if-defined-COqBqGKO.js";import{c as K,s as X}from"./commonArgTypes-BluK8w5L.js";import{a as Z}from"./utils-Dd_sfl9-.js";import{P as J,S as Q}from"./popover.component-Czy4ctab.js";import"./button.component-B1YgcC8N.js";import"./buttonsimple.component-Bo2li7IW.js";import"./keys-hFXe221I.js";import"./DisabledMixin-ix_5w-H5.js";import"./TabIndexMixin-BOFxZ9yP.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-CtvQTQMC.js";import"./index-DTrDRi1E.js";import"./index-B8wGOemS.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./index-mPqbbQtN.js";import"./DataAriaLabelMixin-Doxi_5D_.js";import"./FormInternalsMixin-BKOErRQw.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DkHMciZi.js";const $={HIDE_BOLD:"hide-bold",SHOW_BOLD:"show-bold"},ee=M.constructTagName("password");var te=Object.defineProperty,f=(e,r,s,d)=>{for(var t=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(t=l(r,s,t)||t);return t&&te(r,s,t),t};const g=class g extends x{constructor(){super(...arguments),this.showHideButtonAriaLabel="",this.helpTextType=v.VALIDATION,this.showPassword=!1}connectedCallback(){super.connectedCallback(),this.trailingButton=!0}toggleShowPassword(){this.showPassword=!this.showPassword}renderTrailingButton(r=!1){const s=r||this.value;return s?w`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${s?"":"hidden"}"
        variant=${j.TERTIARY}
        ?disabled=${this.disabled||this.readonly||!s}
        size="${v.ICON_SIZE}"
        @click=${this.toggleShowPassword}
        aria-label=${this.showHideButtonAriaLabel}
        prefix-icon=${this.showPassword?$.HIDE_BOLD:$.SHOW_BOLD}
      ></mdc-button>
    `:Y}renderInputElement(r,s){const d=this.showPassword?y.TEXT:y.PASSWORD;return super.renderInputElement(d,s)}};g.styles=[...x.styles];let i=g;f([N({type:String,attribute:"show-hide-button-aria-label"})],i.prototype,"showHideButtonAriaLabel");f([N({type:String,attribute:"help-text-type"})],i.prototype,"helpTextType");f([U()],i.prototype,"showPassword");i.register(ee);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>{const r=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return w` <mdc-password
    @input="${n("oninput")}"
    @change="${n("onchange")}"
    @focus="${n("onfocus")}"
    @blur="${n("onblur")}"
    label="${e.label}"
    help-text="${e["help-text"]}"
    help-text-type="${e["help-text-type"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    name="${e.name}"
    value="${r}"
    id="${e.id}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    placeholder="${e.placeholder}"
    validation-message="${e["validation-message"]}"
    data-aria-label="${o(e["data-aria-label"])}"
    maxlength="${o(e.maxlength)}"
    minlength="${o(e.minlength)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${o(e.autocomplete)}"
    dirname="${o(e.dirname)}"
    pattern="${o(e.pattern)}"
    list="${o(e.list)}"
    size="${o(e.size)}"
    show-hide-button-aria-label="${e["show-hide-button-aria-label"]}"
  ></mdc-password>`},qe={title:"Components/password",tags:["autodocs"],component:"mdc-password",render:C,args:{name:"password"},argTypes:{id:{control:"text",description:"The unique id of the password field. It is used to link the password field with the label."},placeholder:{control:"text",description:"The placeholder text that is displayed when the password field is empty."},name:{control:"text",description:"The name of the password field. It is used to identify the password field in a form."},"show-hide-button-aria-label":{control:"text"},label:{control:"text",description:"The label of the password field. It is linked to the password field using the for attribute."},"help-text":{control:"text",description:"Helper text for the password"},"help-text-type":{control:"select",options:Object.values(G)},"validation-message":{control:"text",description:"Custom validation message that will override the default message and displayed when the password is invalid."},readonly:{control:"boolean",description:"readonly attribute of the password field. If true, the password field is read-only."},disabled:{control:"boolean"},minlength:{control:"number",description:"The minimum number of characters that the password field can accept."},maxlength:{control:"number",description:"The maximum number of characters that the password field can accept."},"auto-focus-on-mount":{control:"boolean"},dirname:{control:"text"},pattern:{control:"text",description:"The pattern attribute of the password field. Specifies a regular expression that the password value must match for validation purposes."},required:{control:"boolean",description:"The required attribute to indicate that the password field is required. It is used to append a required indicator (*) to the label."},size:{control:"number",description:"The size attribute of the password field. Specifies the width of the password field."},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(J)},"toggletip-strategy":{control:"select",options:Object.values(Q)},"info-icon-aria-label":{control:"text"},...Z(["autocapitalize","clear-aria-label","showPassword","trailing-button","prefix-text","leading-icon"]),...K,...X}},p={args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"show-hide-button-aria-label":"Show or hide password","validation-message":""}},m={render:e=>w`
      <form @submit=${s=>{s.preventDefault();const d=s.target,a=new FormData(d).get("password");n("Form Submitted")({value:a})}}>
        <fieldset>
          <legend>Form Example</legend>
          ${C(e)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"help-text":"Enter a strong password","help-text-type":"default","show-hide-button-aria-label":"Show or hide password","validation-message":"Password must be between 5 and 10 characters.",minlength:5,maxlength:10}},c={render:e=>{const r=(t,a)=>{const{value:l}=t;return l?a.minlength&&l.length<a.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Password must be at least ${a.minlength} characters`),!1):a.maxlength&&l.length>a.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Password must be at most ${a.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Password is required"),!1)};return w`
      <form @submit=${t=>{t.preventDefault();const a=t.target,l=a.querySelector("mdc-password");if(l&&!r(l,e))return;const W=new FormData(a).get("password");n("Form Submitted")({value:W})}} @reset=${()=>{const t=document.querySelector("mdc-password");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid password"))}} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-password
            placeholder=${e.placeholder}
            label=${e.label}
            name=${e.name}
            ?required=${e.required}
            minlength=${o(e.minlength)}
            maxlength=${o(e.maxlength)}
            help-text=${e["help-text"]}
            help-text-type=${e["help-text-type"]}
            show-hide-button-aria-label=${e["show-hide-button-aria-label"]}
          ></mdc-password>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{label:"Password",name:"password",placeholder:"Enter your password",required:!0,minlength:5,maxlength:10,"help-text":"Please provide a valid password","help-text-type":"default","show-hide-button-aria-label":"Show or hide password"}},u={args:{label:"Password","help-text":"Enter a strong password","help-text-type":"default",placeholder:"Enter password",value:"default_password123","show-hide-button-aria-label":"Toggle password visibility"}},h={args:{label:"Password","help-text":"Password is too weak","help-text-type":"error",placeholder:"Enter password",value:"error_password123","show-hide-button-aria-label":"Toggle password visibility"}},b={args:{label:"Password","help-text":"Strong password!","help-text-type":"success",placeholder:"Enter password",value:"success_password123","show-hide-button-aria-label":"Toggle password visibility"}};var S,P,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    label: 'Password',
    name: 'password',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'show-hide-button-aria-label': 'Show or hide password',
    'validation-message': ''
  }
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var T,A,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    'show-hide-button-aria-label': 'Show or hide password',
    'validation-message': 'Password must be between 5 and 10 characters.',
    minlength: 5,
    maxlength: 10
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,I,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            show-hide-button-aria-label=\${args['show-hide-button-aria-label']}
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
    'show-hide-button-aria-label': 'Show or hide password'
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var q,F,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    value: 'default_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var L,R,z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Password is too weak',
    'help-text-type': 'error',
    placeholder: 'Enter password',
    value: 'error_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var B,H,k;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Strong password!',
    'help-text-type': 'success',
    placeholder: 'Enter password',
    value: 'success_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(k=(H=b.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const Fe=["Example","FormFieldPassword","FormFieldPasswordWithHelpTextValidation","DefaultValidation","ErrorValidation","SuccessValidation"];export{u as DefaultValidation,h as ErrorValidation,p as Example,m as FormFieldPassword,c as FormFieldPasswordWithHelpTextValidation,b as SuccessValidation,Fe as __namedExportsOrder,qe as default};
