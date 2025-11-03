import{t as s}from"./if-defined-BtXjAhE-.js";import{W as N,A as W,D as T}from"./index-DCClBEKo.js";import{k as m}from"./iframe-CntZQSOW.js";import{c as B,s as X}from"./commonArgTypes-BluK8w5L.js";import{a as Y,d as Z}from"./utils-Dd_sfl9-.js";import{V as c}from"./formfieldwrapper.constants-CGy7PSdB.js";import{A as z}from"./input.constants-BlVycC58.js";import{P as G,S as K}from"./popover.component-cxqe1REV.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./index-D1PsfYtn.js";import"./index-SezjBQsn.js";import"./button.component-DlgSjsMc.js";import"./buttonsimple.component-8fwSlyTx.js";import"./TabIndexMixin-CqIO6ICq.js";import"./DisabledMixin-C-eXDs22.js";import"./button.utils-rNW36Ji7.js";import"./index-BJHTAjgl.js";import"./preload-helper-C1FmrZbK.js";import"./index-BIOIFKwX.js";import"./index-DTrDRi1E.js";import"./index-C7MYR-hb.js";import"./index-DkbfshO9.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-COA6bJB5.js";import"./DataAriaLabelMixin-BprRbycK.js";import"./FormInternalsMixin-CbZjhaeK.js";import"./BackdropMixin-q9EAzM6W.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,J=e=>m`<mdc-textarea
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
  ></mdc-textarea>`,Le={title:"Components/textarea",tags:["autodocs"],component:"mdc-textarea",render:J,argTypes:{...B,...X,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},wrap:{control:"select",options:Object.values(N)},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},autocapitalize:{control:"select",options:Object.values(z)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"select",options:Object.values(W)},dirname:{control:"text"},"data-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(c)},"validation-message":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(G)},"toggletip-strategy":{control:"select",options:Object.values(K)},"info-icon-aria-label":{control:"text"},"character-limit-announcement":{control:"text"},...Y(["characterLimitExceedingFired","textarea","validity","willValidate"])}},d={args:{name:"textarea",label:"Label",rows:T.ROWS,wrap:T.WRAP,required:!0,placeholder:"Placeholder",value:"","help-text":"Help text","help-text-type":c.DEFAULT,readonly:!1,disabled:!1,autocapitalize:z.OFF,autocomplete:W.OFF,"data-aria-label":""}},k={name:"textarea",label:"Label",rows:T.ROWS,wrap:T.WRAP},p={args:{...k,value:"Disabled & typed textarea",disabled:!0},parameters:{docs:{description:{story:"This story displays a disabled textarea component. The textarea will be displayed as disabledwhen the `disabled` attribute is set to true. The user will not be able to interact with the textarea."}}}},u={args:{...k,readonly:!0,value:"Readonly textarea"},parameters:{docs:{description:{story:"This story displays a readonly textarea component. The textarea will be displayed as readonlywhen the `readonly` attribute is set to true. The user will not be able to edit the content of the textarea."}}}},h={argTypes:{...Z(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>m` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(c).map(e=>m`<mdc-textarea
            help-text-type="${e}"
            label="Label"
            help-text="${e} helper text"
            placeholder="Placeholder"
            value="${e}_value"
          ></mdc-textarea>`)}
      <mdc-textarea
        label="Required Textarea"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea within character limit"
        help-text="Helper text"
        help-text-type="default"
        value="Momentum is how webex design the future of work."
        readonly
        placeholder="Placeholder"
        max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea exceeding character limit"
        readonly
        help-text="Input must not exceed 100 characters."
        help-text-type="error"
        placeholder="Placeholder"
        max-character-limit="75"
        >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
    </div>`,parameters:{docs:{description:{story:"This story displays all the variants of the textarea component.The textarea component supports all the validation types. User can set the `help-text-type` attribute to any of the validation types to displaythe help text in that style.The textarea can also be set as required by passing the `required` attribute.User can also set the `max-character-limit` attribute to display a character counter below the textarea.The textarea can also be set as readonly by passing the `readonly` attribute."}}}},x={args:{required:!0,placeholder:"Write what's on your mind","max-character-limit":75,"character-limit-announcement":"%{number-of-characters} out of %{max-character-limit} characters are typed."},render:e=>{let r="",n=c.DEFAULT;return m`
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
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{required:!0,"help-text":"","help-text-type":"default","max-character-limit":75}};var g,v,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    'data-aria-label': ''
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var A,$,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=($=p.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var D,L,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var S,I,q;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
          ></mdc-textarea>\`)}
      <mdc-textarea
        label="Required Textarea"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea within character limit"
        help-text="Helper text"
        help-text-type="default"
        value="Momentum is how webex design the future of work."
        readonly
        placeholder="Placeholder"
        max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea exceeding character limit"
        readonly
        help-text="Input must not exceed 100 characters."
        help-text-type="error"
        placeholder="Placeholder"
        max-character-limit="75"
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
}`,...(q=(I=h.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var O,R,C;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholder: \`Write what's on your mind\`,
    'max-character-limit': 75,
    'character-limit-announcement': '%{number-of-characters} out of %{max-character-limit} characters are typed.'
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
}`,...(C=(R=x.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var _,M,V;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  }
}`,...(V=(M=b.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var P,U,H;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    'max-character-limit': 75
  }
}`,...(H=(U=y.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const Fe=["Example","DisabledTextarea","ReadonlyTextarea","AllVariants","TextareaWithCharacterCounter","TextareaInsideForm","TextareaInsideFormWithHelpTextValidation"];export{h as AllVariants,p as DisabledTextarea,d as Example,u as ReadonlyTextarea,b as TextareaInsideForm,y as TextareaInsideFormWithHelpTextValidation,x as TextareaWithCharacterCounter,Fe as __namedExportsOrder,Le as default};
