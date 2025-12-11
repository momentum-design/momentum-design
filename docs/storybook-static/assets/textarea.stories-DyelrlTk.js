import{t as s}from"./if-defined-1FKA9-0t.js";import{W as N,A as H,D as T}from"./index-BGDkg56E.js";import{k as m}from"./iframe-DqI8R0T6.js";import{c as B,s as X}from"./commonArgTypes-BG7EqI50.js";import{h as Y,d as Z}from"./utils-D6nie9pS.js";import{V as c}from"./formfieldwrapper.constants-CEGUuN8v.js";import{A as W}from"./input.constants-BTN9cnfQ.js";import{P as G,S as K}from"./popover.constants-D4yggTO2.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./index-CyJ7x0yO.js";import"./index-D6ttOyno.js";import"./button.component-DNAuirvW.js";import"./buttonsimple.component-Dx5XsFID.js";import"./TabIndexMixin-eZI_-HVg.js";import"./DisabledMixin-DFXWJxZV.js";import"./button.utils-rNW36Ji7.js";import"./index-ByoG7FEj.js";import"./preload-helper-C1FmrZbK.js";import"./index-DJBXnCCu.js";import"./index-DTrDRi1E.js";import"./index-CSF4IDSN.js";import"./popover.component-DjSQM3rI.js";import"./BackdropMixin-BplkIKcn.js";import"./index-u7le3bOL.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-CmV8Sb6L.js";import"./DataAriaLabelMixin-BPTWCNDN.js";import"./FormInternalsMixin-D3QOTzSb.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,J=e=>m`<mdc-textarea
    @input="${i("oninput")}"
    @change="${i("onchange")}"
    @focus="${i("onfocus")}"
    @blur="${i("onblur")}"
    @limitexceeded="${i("limitexceeded")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    rows="${e.rows}"
    cols="${e.cols}"
    wrap="${e.wrap}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?resizable="${e.resizable}"
    data-aria-label="${s(e["data-aria-label"])}"
    maxlength="${s(e.maxlength)}"
    minlength="${s(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${e.autocomplete}"
    dirname="${s(e.dirname)}"
    validation-message="${e["validation-message"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    max-character-limit="${s(e["max-character-limit"])}"
    character-limit-announcement="${s(e["character-limit-announcement"])}"
    resize-button-aria-label="${s(e["resize-button-aria-label"])}"
  ></mdc-textarea>`,De={title:"Components/textarea",tags:["autodocs"],component:"mdc-textarea",render:J,argTypes:{...B,...X,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},resizable:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},wrap:{control:"select",options:Object.values(N)},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},autocapitalize:{control:"select",options:Object.values(W)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"select",options:Object.values(H)},dirname:{control:"text"},"data-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(c)},"validation-message":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(G)},"toggletip-strategy":{control:"select",options:Object.values(K)},"info-icon-aria-label":{control:"text"},"character-limit-announcement":{control:"text"},"resize-button-aria-label":{control:"text"},...Y(["characterLimitExceedingFired","textarea","validity","willValidate"])}},d={args:{name:"textarea",label:"Label",rows:T.ROWS,wrap:T.WRAP,required:!0,placeholder:"Placeholder",value:"","help-text":"Help text","help-text-type":c.DEFAULT,readonly:!1,disabled:!1,resizable:!0,autocapitalize:W.OFF,autocomplete:H.OFF,"data-aria-label":"","resize-button-aria-label":"Resize textarea"}},k={name:"textarea",label:"Label",rows:T.ROWS,wrap:T.WRAP,resizable:!0},u={args:{...k,value:"Disabled & typed textarea",disabled:!0},parameters:{docs:{description:{story:"This story displays a disabled textarea component. The textarea will be displayed as disabledwhen the `disabled` attribute is set to true. The user will not be able to interact with the textarea."}}}},p={args:{...k,readonly:!0,value:"Readonly textarea"},parameters:{docs:{description:{story:"This story displays a readonly textarea component. The textarea will be displayed as readonlywhen the `readonly` attribute is set to true. The user will not be able to edit the content of the textarea."}}}},h={argTypes:{...Z(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>m` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(c).map(e=>m`<mdc-textarea
            help-text-type="${e}"
            label="Label"
            help-text="${e} helper text"
            placeholder="Placeholder"
            value="${e}_value"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>`)}
      <mdc-textarea
        label="Required Textarea"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Textarea is required"
        resizable
        resize-button-aria-label="Resize textarea"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea within character limit"
        help-text="Helper text"
        help-text-type="default"
        value="Momentum is how webex design the future of work."
        readonly
        placeholder="Placeholder"
        max-character-limit="75"
        resizable
        resize-button-aria-label="Resize textarea"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea exceeding character limit"
        readonly
        help-text="Input must not exceed 100 characters."
        help-text-type="error"
        placeholder="Placeholder"
        max-character-limit="75"
        resizable
        resize-button-aria-label="Resize textarea"
        >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
    </div>`,parameters:{docs:{description:{story:"This story displays all the variants of the textarea component.The textarea component supports all the validation types. User can set the `help-text-type` attribute to any of the validation types to displaythe help text in that style.The textarea can also be set as required by passing the `required` attribute.User can also set the `max-character-limit` attribute to display a character counter below the textarea.The textarea can also be set as readonly by passing the `readonly` attribute."}}}},x={args:{required:!0,placeholder:"Write what's on your mind","max-character-limit":75,"character-limit-announcement":"%{number-of-characters} out of %{max-character-limit} characters are typed.",resizable:!0},render:e=>{let r="",n=c.DEFAULT;return m`
      <form @submit=${a=>{a.preventDefault();const t=new FormData(a.target).get("tweet");i("Form Submitted")({value:t})}}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            @limitexceeded=${a=>{var t,o;i("limitexceeded")(a);const{detail:l}=a;l.currentCharacterCount>l.maxCharacterLimit?(r=`Input must not exceed ${l.maxCharacterLimit} characters.`,n=c.ERROR):(r="",n=c.DEFAULT),(t=document.getElementById("textarea"))==null||t.setAttribute("help-text",r),(o=document.getElementById("textarea"))==null||o.setAttribute("help-text-type",n)}}
            help-text="${r}"
            help-text-type="${n}"
            ?required="${e.required}"
            max-character-limit="${e["max-character-limit"]}"
            placeholder="${e.placeholder}"
            character-limit-announcement="${e["character-limit-announcement"]}"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},parameters:{docs:{description:{story:"To add a character counter to the textarea, use the `max-character-limit` attribute. The character counter will be displayed below the textarea with the max character limit. User needs to listen to the `limitexceeded` event to handle the character limit check. The event will contain the current character count, the max character limit & current value of the textarea. Based on which the user can update the help text and help text type dynamically."}}}},b={render:()=>m`
      <form @submit=${r=>{r.preventDefault();const f=new FormData(r.target).get("tweet");i("Form Submitted")({value:f})}}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            validation-message="Tweet is required"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},y={render:e=>{const r=e["max-character-limit"],n=(a,l)=>{const t=a.querySelector('mdc-textarea[name="tweet"]'),{value:o}=t;return l.required&&(!o||o.trim()==="")?(t.setAttribute("help-text","Please enter your tweet"),t.setAttribute("help-text-type","error"),!1):o&&o.length>r?(t.setAttribute("help-text",`Input must not exceed ${r} characters.`),t.setAttribute("help-text-type","error"),!1):(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0)};return m`
      <form @submit=${a=>{a.preventDefault();const l=a.target;if(!n(l,e))return;const o=new FormData(l).get("tweet");i("Form Submitted")({value:o})}} @reset=${a=>{const t=a.target.querySelector('mdc-textarea[name="tweet"]');t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default")}} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-textarea
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            max-character-limit="${r}"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{required:!0,"help-text":"","help-text-type":"default","max-character-limit":75,resizable:!0}};var g,v,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'textarea',
    label: 'Label',
    rows: DEFAULTS.ROWS,
    wrap: DEFAULTS.WRAP,
    required: true,
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Help text',
    'help-text-type': VALIDATION.DEFAULT,
    readonly: false,
    disabled: false,
    resizable: true,
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    'data-aria-label': '',
    'resize-button-aria-label': 'Resize textarea'
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,A,$;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: 'Disabled & typed textarea',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a disabled textarea component. The textarea will be displayed as disabled' + 'when the \`disabled\` attribute is set to true. The user will not be able to interact with the textarea.'
      }
    }
  }
}`,...($=(A=u.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var E,R,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readonly: true,
    value: 'Readonly textarea'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a readonly textarea component. The textarea will be displayed as readonly' + 'when the \`readonly\` attribute is set to true. The user will not be able to edit the content' + ' of the textarea.'
      }
    }
  }
}`,...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,F,S;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      \${Object.values(VALIDATION).map(validation => html\`<mdc-textarea
            help-text-type="\${validation}"
            label="Label"
            help-text="\${validation} helper text"
            placeholder="Placeholder"
            value="\${validation}_value"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>\`)}
      <mdc-textarea
        label="Required Textarea"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Textarea is required"
        resizable
        resize-button-aria-label="Resize textarea"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea within character limit"
        help-text="Helper text"
        help-text-type="default"
        value="Momentum is how webex design the future of work."
        readonly
        placeholder="Placeholder"
        max-character-limit="75"
        resizable
        resize-button-aria-label="Resize textarea"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea exceeding character limit"
        readonly
        help-text="Input must not exceed 100 characters."
        help-text-type="error"
        placeholder="Placeholder"
        max-character-limit="75"
        resizable
        resize-button-aria-label="Resize textarea"
        >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'This story displays all the variants of the textarea component.' + 'The textarea component supports all the validation types. ' + 'User can set the \`help-text-type\` attribute to any of the validation types to display' + 'the help text in that style.' + 'The textarea can also be set as required by passing the \`required\` attribute.' + 'User can also set the \`max-character-limit\` attribute to display a character counter below the textarea.' + 'The textarea can also be set as readonly by passing the \`readonly\` attribute.'
      }
    }
  }
}`,...(S=(F=h.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var I,q,O;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholder: \`Write what's on your mind\`,
    'max-character-limit': 75,
    'character-limit-announcement': '%{number-of-characters} out of %{max-character-limit} characters are typed.',
    resizable: true
  },
  render: (args: Args) => {
    let helpText = '';
    let helpTextType: ValidationType = VALIDATION.DEFAULT;
    const handleCharacterLimitCheck = (event: CustomEvent) => {
      action('limitexceeded')(event);
      const {
        detail
      } = event;
      if (detail.currentCharacterCount > detail.maxCharacterLimit) {
        helpText = \`Input must not exceed \${detail.maxCharacterLimit} characters.\`;
        helpTextType = VALIDATION.ERROR;
      } else {
        helpText = '';
        helpTextType = VALIDATION.DEFAULT;
      }

      // Update the storybook UI dynamically
      document.getElementById('textarea')?.setAttribute('help-text', helpText);
      document.getElementById('textarea')?.setAttribute('help-text-type', helpTextType);
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            @limitexceeded=\${handleCharacterLimitCheck}
            help-text="\${helpText}"
            help-text-type="\${helpTextType}"
            ?required="\${args.required}"
            max-character-limit="\${args['max-character-limit']}"
            placeholder="\${args.placeholder}"
            character-limit-announcement="\${args['character-limit-announcement']}"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'To add a character counter to the textarea, use the \`max-character-limit\` attribute. ' + 'The character counter will be displayed below the textarea with the max character limit. ' + 'User needs to listen to the \`limitexceeded\` event to handle the character limit check. ' + 'The event will contain the current character count, the max character limit & current value of the textarea. ' + 'Based on which the user can update the help text and help text type dynamically.'
      }
    }
  }
}`,...(O=(q=x.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var C,_,M;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            validation-message="Tweet is required"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  }
}`,...(M=(_=b.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var V,P,U;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const MAX_CHAR_LIMIT = args['max-character-limit'];
    const validateTextarea = (form: HTMLFormElement, args: any): boolean => {
      const textareaEl = form.querySelector('mdc-textarea[name="tweet"]') as Textarea;
      const {
        value
      } = textareaEl;
      if (args.required && (!value || value.trim() === '')) {
        textareaEl.setAttribute('help-text', 'Please enter your tweet');
        textareaEl.setAttribute('help-text-type', 'error');
        return false;
      }
      if (value && value.length > MAX_CHAR_LIMIT) {
        textareaEl.setAttribute('help-text', \`Input must not exceed \${MAX_CHAR_LIMIT} characters.\`);
        textareaEl.setAttribute('help-text-type', 'error');
        return false;
      }
      textareaEl.setAttribute('help-text', 'Looks good!');
      textareaEl.setAttribute('help-text-type', 'success');
      return true;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateTextarea(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const textareaEl = form.querySelector('mdc-textarea[name="tweet"]') as Textarea;
      textareaEl.setAttribute('help-text', args['help-text'] || '');
      textareaEl.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-textarea
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            max-character-limit="\${MAX_CHAR_LIMIT}"
            resizable
            resize-button-aria-label="Resize textarea"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    required: true,
    'help-text': '',
    'help-text-type': 'default',
    'max-character-limit': 75,
    resizable: true
  }
}`,...(U=(P=y.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const Le=["Example","DisabledTextarea","ReadonlyTextarea","AllVariants","TextareaWithCharacterCounter","TextareaInsideForm","TextareaInsideFormWithHelpTextValidation"];export{h as AllVariants,u as DisabledTextarea,d as Example,p as ReadonlyTextarea,b as TextareaInsideForm,y as TextareaInsideFormWithHelpTextValidation,x as TextareaWithCharacterCounter,Le as __namedExportsOrder,De as default};
