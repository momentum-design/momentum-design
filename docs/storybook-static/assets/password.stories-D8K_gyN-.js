import"./index-Cv92uigD.js";import"./index-CCrTdjIm.js";import"./index-DeEenWCE.js";import"./index-orP1W3nw.js";import{D as C,k as h}from"./lit-element-D5KKan5q.js";import{n as q}from"./property-Bj3TGwkg.js";import{r as N}from"./state-CmYk530Z.js";import{I as g}from"./input.component-BY4M5Eip.js";import{I as x}from"./input.constants-BNI4baFt.js";import{B as H}from"./button.constants-BBlkZKjZ.js";import{D as y,V as R}from"./formfieldwrapper.component-BfkD1w96.js";import{u as W}from"./provider.component-DrWB4byV.js";import{t as a}from"./if-defined-D5BV9-c0.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as j,s as M}from"./commonArgTypes-BluK8w5L.js";import{t as U,a as Y}from"./utils-CFOyPOhY.js";import{a as G}from"./popover.component-CWSuSUni.js";import"./button.component-B08yfJ7f.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-DgtnjMrJ.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./iframe-CzXTwD53.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-BSQRiSuk.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CQkTLCs1.js";const v={HIDE_BOLD:"hide-bold",SHOW_BOLD:"show-bold"},X=W.constructTagName("password");var Z=Object.defineProperty,b=(e,o,t,n)=>{for(var r=void 0,l=e.length-1,f;l>=0;l--)(f=e[l])&&(r=f(o,t,r)||r);return r&&Z(o,t,r),r};const w=class w extends g{constructor(){super(...arguments),this.showHideButtonAriaLabel="",this.helpTextType=y.VALIDATION,this.showPassword=!1}connectedCallback(){super.connectedCallback(),this.trailingButton=!0}toggleShowPassword(){this.showPassword=!this.showPassword}renderTrailingButton(o=!1){const t=o||this.value;return t?h`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${t?"":"hidden"}"
        variant=${H.TERTIARY}
        ?disabled=${this.disabled||this.readonly||!t}
        size="${y.ICON_SIZE}"
        @click=${this.toggleShowPassword}
        aria-label=${this.showHideButtonAriaLabel}
        prefix-icon=${this.showPassword?v.HIDE_BOLD:v.SHOW_BOLD}
      ></mdc-button>
    `:C}renderInputElement(o,t){const n=this.showPassword?x.TEXT:x.PASSWORD;return super.renderInputElement(n,t)}};w.styles=[...g.styles];let s=w;b([q({type:String,attribute:"show-hide-button-aria-label"})],s.prototype,"showHideButtonAriaLabel");b([q({type:String,attribute:"help-text-type"})],s.prototype,"helpTextType");b([N()],s.prototype,"showPassword");s.register(X);const z=e=>{const o=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return h` <mdc-password
    @input="${i("oninput")}"
    @change="${i("onchange")}"
    @focus="${i("onfocus")}"
    @blur="${i("onblur")}"
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
    data-aria-label="${a(e["data-aria-label"])}"
    maxlength="${a(e.maxlength)}"
    minlength="${a(e.minlength)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${a(e.autocomplete)}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
    show-hide-button-aria-label="${e["show-hide-button-aria-label"]}"
  ></mdc-password>`},ze={title:"Components/password",tags:["autodocs"],component:"mdc-password",render:z,parameters:{badges:["stable"]},args:{name:"password"},argTypes:{id:{control:"text",description:"The unique id of the password field. It is used to link the password field with the label."},placeholder:{control:"text",description:"The placeholder text that is displayed when the password field is empty."},name:{control:"text",description:"The name of the password field. It is used to identify the password field in a form."},"show-hide-button-aria-label":{control:"text"},label:{control:"text",description:"The label of the password field. It is linked to the password field using the for attribute."},"help-text":{control:"text",description:"Helper text for the password"},"help-text-type":{control:"select",options:Object.values(R)},"validation-message":{control:"text",description:"Custom validation message that will override the default message and displayed when the password is invalid."},readonly:{control:"boolean",description:"readonly attribute of the password field. If true, the password field is read-only."},disabled:{control:"boolean"},minlength:{control:"number",description:"The minimum number of characters that the password field can accept."},maxlength:{control:"number",description:"The maximum number of characters that the password field can accept."},"auto-focus-on-mount":{control:"boolean"},dirname:{control:"text"},pattern:{control:"text",description:"The pattern attribute of the password field. Specifies a regular expression that the password value must match for validation purposes."},required:{control:"boolean",description:"The required attribute to indicate that the password field is required. It is used to append a required indicator (*) to the label."},size:{control:"number",description:"The size attribute of the password field. Specifies the width of the password field."},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(G)},"info-icon-aria-label":{control:"text"},...U(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"]),...Y(["autocapitalize","clear-aria-label","showPassword","trailing-button","prefix-text","leading-icon"]),...j,...M}},d={args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"show-hide-button-aria-label":"Show or hide password","validation-message":""}},p={render:e=>h`
      <form @submit=${t=>{t.preventDefault();const n=t.target,l=new FormData(n).get("password");i("Form Submitted")({value:l})}}>
        <fieldset>
          <legend>Form Example</legend>
          ${z(e)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,args:{class:"custom-classname",label:"Password",name:"password",placeholder:"Placeholder",readonly:!1,disabled:!1,required:!0,"help-text":"Enter a strong password","help-text-type":"default","show-hide-button-aria-label":"Show or hide password","validation-message":"Password must be between 5 and 10 characters.",minlength:5,maxlength:10}},c={args:{label:"Password","help-text":"Enter a strong password","help-text-type":"default",placeholder:"Enter password",value:"default_password123","show-hide-button-aria-label":"Toggle password visibility"}},m={args:{label:"Password","help-text":"Password is too weak","help-text-type":"error",placeholder:"Enter password",value:"error_password123","show-hide-button-aria-label":"Toggle password visibility"}},u={args:{label:"Password","help-text":"Strong password!","help-text-type":"success",placeholder:"Enter password",value:"success_password123","show-hide-button-aria-label":"Toggle password visibility"}};var T,$,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=($=d.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var P,E,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var D,_,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    value: 'default_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var A,V,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Password is too weak',
    'help-text-type': 'error',
    placeholder: 'Enter password',
    value: 'error_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var B,L,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Strong password!',
    'help-text-type': 'success',
    placeholder: 'Enter password',
    value: 'success_password123',
    'show-hide-button-aria-label': 'Toggle password visibility'
  }
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const Ce=["Example","FormFieldPassword","DefaultValidation","ErrorValidation","SuccessValidation"];export{c as DefaultValidation,m as ErrorValidation,d as Example,p as FormFieldPassword,u as SuccessValidation,Ce as __namedExportsOrder,ze as default};
