import"./index-BCOzYb77.js";import"./index-GNOIQj18.js";import"./index-D2VIkDCb.js";import"./index-BlfOEV8W.js";import{D as M,k as w}from"./lit-element-D5KKan5q.js";import{n as C}from"./property-Bj3TGwkg.js";import{r as j}from"./state-CmYk530Z.js";import{I as x}from"./input.component-DRPKa6bB.js";import{I as y}from"./input.constants-DsinG4H6.js";import{B as U}from"./button.constants-BBlkZKjZ.js";import{D as v,V as Y}from"./formfieldwrapper.component-BO2gGcYF.js";import{u as G}from"./provider.component-DrWB4byV.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as X,s as Z}from"./commonArgTypes-BluK8w5L.js";import{t as J,a as K}from"./utils-CFOyPOhY.js";import{a as Q}from"./popover.component-C-Xszb39.js";import"./button.component-DXfxhmBS.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./iframe-CyynYiEe.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-O5uSdDVZ.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CQkTLCs1.js";const $={HIDE_BOLD:"hide-bold",SHOW_BOLD:"show-bold"},ee=G.constructTagName("password");var te=Object.defineProperty,f=(e,o,a,d)=>{for(var t=void 0,r=e.length-1,l;r>=0;r--)(l=e[r])&&(t=l(o,a,t)||t);return t&&te(o,a,t),t};const g=class g extends x{constructor(){super(...arguments),this.showHideButtonAriaLabel="",this.helpTextType=v.VALIDATION,this.showPassword=!1}connectedCallback(){super.connectedCallback(),this.trailingButton=!0}toggleShowPassword(){this.showPassword=!this.showPassword}renderTrailingButton(o=!1){const a=o||this.value;return a?w`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${a?"":"hidden"}"
        variant=${U.TERTIARY}
        ?disabled=${this.disabled||this.readonly||!a}
        size="${v.ICON_SIZE}"
        @click=${this.toggleShowPassword}
        aria-label=${this.showHideButtonAriaLabel}
        prefix-icon=${this.showPassword?$.HIDE_BOLD:$.SHOW_BOLD}
      ></mdc-button>
    `:M}renderInputElement(o,a){const d=this.showPassword?y.TEXT:y.PASSWORD;return super.renderInputElement(d,a)}};g.styles=[...x.styles];let i=g;f([C({type:String,attribute:"show-hide-button-aria-label"})],i.prototype,"showHideButtonAriaLabel");f([C({type:String,attribute:"help-text-type"})],i.prototype,"helpTextType");f([j()],i.prototype,"showPassword");i.register(ee);const N=e=>{const o=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return w` <mdc-password
    @input="${n("oninput")}"
    @change="${n("onchange")}"
    @focus="${n("onfocus")}"
    @blur="${n("onblur")}"
    label="${e.label}"
    help-text="${e["help-text"]}"
    help-text-type="${e["help-text-type"]}"
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
    show-hide-button-aria-label="${e["show-hide-button-aria-label"]}"
  ></mdc-password>`},Me={title:"Components/password",tags:["autodocs"],component:"mdc-password",render:N,parameters:{badges:["stable"]},args:{name:"password"},argTypes:{id:{control:"text",description:"The unique id of the password field. It is used to link the password field with the label."},placeholder:{control:"text",description:"The placeholder text that is displayed when the password field is empty."},name:{control:"text",description:"The name of the password field. It is used to identify the password field in a form."},"show-hide-button-aria-label":{control:"text"},label:{control:"text",description:"The label of the password field. It is linked to the password field using the for attribute."},"help-text":{control:"text",description:"Helper text for the password"},"help-text-type":{control:"select",options:Object.values(Y)},"validation-message":{control:"text",description:"Custom validation message that will override the default message and displayed when the password is invalid."},readonly:{control:"boolean",description:"readonly attribute of the password field. If true, the password field is read-only."},disabled:{control:"boolean"},minlength:{control:"number",description:"The minimum number of characters that the password field can accept."},maxlength:{control:"number",description:"The maximum number of characters that the password field can accept."},"auto-focus-on-mount":{control:"boolean"},dirname:{control:"text"},pattern:{control:"text",description:"The pattern attribute of the password field. Specifies a regular expression that the password value must match for validation purposes."},required:{control:"boolean",description:"The required attribute to indicate that the password field is required. It is used to append a required indicator (*) to the label."},size:{control:"number",description:"The size attribute of the password field. Specifies the width of the password field."},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(Q)},"info-icon-aria-label":{control:"text"},...J(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"]),...K(["autocapitalize","clear-aria-label","showPassword","trailing-button","prefix-text","leading-icon"]),...X,...Z}},p={args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"show-hide-button-aria-label":"Show or hide password","validation-message":""}},m={render:e=>w`
      <form @submit=${a=>{a.preventDefault();const d=a.target,r=new FormData(d).get("password");n("Form Submitted")({value:r})}}>
        <fieldset>
          <legend>Form Example</legend>
          ${N(e)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"help-text":"Enter a strong password","help-text-type":"default","show-hide-button-aria-label":"Show or hide password","validation-message":"Password must be between 5 and 10 characters.",minlength:5,maxlength:10}},c={render:e=>{const o=(t,r)=>{const{value:l}=t;return l?r.minlength&&l.length<r.minlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Password must be at least ${r.minlength} characters`),!1):r.maxlength&&l.length>r.maxlength?(t.setAttribute("help-text-type","error"),t.setAttribute("help-text",`Password must be at most ${r.maxlength} characters`),!1):(t.setAttribute("help-text-type","success"),t.setAttribute("help-text","Looks good!"),!0):(t.setAttribute("help-text-type","error"),t.setAttribute("help-text","Password is required"),!1)};return w`
      <form @submit=${t=>{t.preventDefault();const r=t.target,l=r.querySelector("mdc-password");if(l&&!o(l,e))return;const W=new FormData(r).get("password");n("Form Submitted")({value:W})}} @reset=${()=>{const t=document.querySelector("mdc-password");t&&(t.setAttribute("help-text-type",e["help-text-type"]||"default"),t.setAttribute("help-text",e["help-text"]||"Please provide a valid password"))}} novalidate>
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
            show-hide-button-aria-label=${e["show-hide-button-aria-label"]}
          ></mdc-password>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{label:"Password",name:"password",placeholder:"Enter your password",required:!0,minlength:5,maxlength:10,"help-text":"Please provide a valid password","help-text-type":"default","show-hide-button-aria-label":"Show or hide password"}},u={args:{label:"Password","help-text":"Enter a strong password","help-text-type":"default",placeholder:"Enter password",value:"default_password123","show-hide-button-aria-label":"Toggle password visibility"}},h={args:{label:"Password","help-text":"Password is too weak","help-text-type":"error",placeholder:"Enter password",value:"error_password123","show-hide-button-aria-label":"Toggle password visibility"}},b={args:{label:"Password","help-text":"Strong password!","help-text-type":"success",placeholder:"Enter password",value:"success_password123","show-hide-button-aria-label":"Toggle password visibility"}};var P,S,E;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var T,A,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var I,q,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(q=c.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var _,V,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    value: 'default_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(O=(V=u.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var k,L,z;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Password is too weak',
    'help-text-type': 'error',
    placeholder: 'Enter password',
    value: 'error_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(z=(L=h.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var H,R,B;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Strong password!',
    'help-text-type': 'success',
    placeholder: 'Enter password',
    value: 'success_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(B=(R=b.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const je=["Example","FormFieldPassword","FormFieldPasswordWithHelpTextValidation","DefaultValidation","ErrorValidation","SuccessValidation"];export{u as DefaultValidation,h as ErrorValidation,p as Example,m as FormFieldPassword,c as FormFieldPasswordWithHelpTextValidation,b as SuccessValidation,je as __namedExportsOrder,Me as default};
