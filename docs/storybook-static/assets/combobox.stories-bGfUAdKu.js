import{k as t,R as ie}from"./iframe-CXCCK7zk.js";import"./index-g_epIavy.js";import"./index-B9wm2aIu.js";import"./index-CGpDqPRM.js";import"./index-B-OwDEBx.js";import"./index-m9a-Midq.js";import"./index-DzWT-1pj.js";import"./index-ZPsGjmJB.js";import"./index-Mzt3XibD.js";import{t as o}from"./if-defined-BuZDkRkv.js";import{c as re,s as de}from"./commonArgTypes-BG7EqI50.js";import{h as me,a as m,d as pe}from"./utils-B5QUENNQ.js";import{V as a}from"./formfieldwrapper.constants-fLF02Z7M.js";import{P as w,S as C}from"./popover.constants-Dv1CTtVK.js";import{V as se}from"./ControlTypeMixin-Dw2KPkOe.js";import"./preload-helper-C1FmrZbK.js";import"./index-CPar1l5B.js";import"./buttonsimple.component-Du_C_gTC.js";import"./DisabledMixin-BsjtdTnc.js";import"./KeyDownHandledMixin-DSh9go4o.js";import"./index-CgrR2bZ8.js";import"./index-SjxeI1HO.js";import"./index-DTrDRi1E.js";import"./index-5DMr2UEw.js";import"./index-Bpgy9GCv.js";import"./popover.component-CwmNKHCh.js";import"./BackdropMixin-CHyoexZN.js";import"./index-DO-fJN_a.js";import"./v4-CmTdKEVZ.js";import"./input.component-nwgzkD4x.js";import"./directive-Ctav8iJK.js";import"./index-B7MXLDEc.js";import"./formfieldwrapper.component-vKRQOc7l.js";import"./DataAriaLabelMixin-CygDLXN_.js";import"./FormInternalsMixin-CWmOmTm6.js";import"./input.constants-fcsyY15b.js";import"./index-CvssXVEr.js";import"./listitem.component-CJgnljlo.js";import"./query-assigned-elements-D3DjPdCI.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DWIo6e-w.js";import"./CaptureDestroyEventForChildElement-DSYwAMSU.js";import"./optgroup.constants-CS0ySBwI.js";import"./button.component-s4aRcPCT.js";import"./button.utils-rNW36Ji7.js";import"./dialog.component-1kURi762.js";import"./FooterMixin-KsqqkyBh.js";import"./link.constants-DaS18i_2.js";var T=Object.freeze,be=Object.defineProperty,ue=(e,c)=>T(be(e,"raw",{value:T(e.slice())})),k;const{action:i}=__STORYBOOK_MODULE_ACTIONS__,A=e=>t`<div style="width: 25rem; height: 100%; display: flex; align-items: center;" role="${ie.MAIN}">
    ${e}
  </div>`,ce=e=>A(t` <mdc-combobox
      @change="${i("onchange")}"
      @input="${i("oninput")}"
      backdrop-append-to="${o(e["backdrop-append-to"])}"
      boundary="${o(e.boundary)}"
      control-type="${o(e["control-type"])}"
      data-aria-label="${o(e["data-aria-label"])}"
      ?disabled="${e.disabled}"
      help-text="${o(e["help-text"])}"
      help-text-type="${o(e["help-text-type"])}"
      info-icon-aria-label="${o(e["info-icon-aria-label"])}"
      label="${o(e.label)}"
      name="${o(e.name)}"
      no-result-text="${o(e["no-result-text"])}"
      placeholder="${o(e.placeholder)}"
      placement="${o(e.placement)}"
      popover-z-index="${o(e["popover-z-index"])}"
      ?required="${e.required}"
      ?readonly="${e.readonly}"
      strategy="${o(e.strategy)}"
      value="${o(e.value)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      toggletip-text="${o(e["toggletip-text"])}"
      toggletip-placement="${o(e["toggletip-placement"])}"
      toggletip-strategy="${o(e["toggletip-strategy"])}"
      validation-message="${o(e["validation-message"])}"
      invalid-custom-value-text="${o(e["invalid-custom-value-text"])}"
    >
      ${e.children}
    </mdc-combobox>`),mo={title:"Components/combobox",tags:["autodocs"],component:"mdc-combobox",render:ce,parameters:{badges:["stable"]},argTypes:{"auto-focus-on-mount":{control:"boolean"},"backdrop-append-to":{control:"text"},boundary:{control:"text"},"control-type":{control:"select",options:se},"data-aria-label":{control:"text"},disabled:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(a)},"info-icon-aria-label":{control:"text"},label:{control:"text"},name:{control:"text"},"no-result-text":{control:"text"},placeholder:{control:"text"},placement:{control:"select",options:[w.BOTTOM_START,w.TOP_START]},"popover-z-index":{control:"number"},readonly:{control:"boolean"},required:{control:"boolean"},strategy:{control:"select",options:Object.values(C)},value:{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(w)},"toggletip-strategy":{control:"select",options:Object.values(C)},"validation-message":{control:"text"},"invalid-custom-value-text":{control:"text"},...me(["children","controlTypeProviderContext","itemsStore","soft-disabled","name","validity","value","willValidate"]),...re,...de}},p={args:{label:"Top Countries",name:"country","help-text":"Select a country","help-text-type":a.DEFAULT,disabled:!1,readonly:!1,"no-result-text":"No results found",placeholder:"Start typing","data-aria-label":"Select a country","info-icon-aria-label":"Required icon label",placement:w.BOTTOM_START,"invalid-custom-value-text":"Custom values are not allowed",children:t`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="aus" label="Australia"></mdc-option>
        <mdc-option value="au" label="Austria"></mdc-option>
        <mdc-option value="ban" label="Bangladesh"></mdc-option>
        <mdc-option value="bel" label="Belgium"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    `}},s={render:()=>t`
    <div role="${ie.MAIN}">
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${a.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${a.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="${a.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="${a.PRIORITY}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text="This is a disabled text."
        label="Label"
        data-aria-label="This is a disabled text."
        placeholder="Disabled text"
        disabled
      >
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="This is a readonly text."
        label="Label"
        data-aria-label="This is a readonly text."
        placeholder="Readonly text"
        readonly
      >
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  `,...m()},b={render:e=>A(t`
      <mdc-combobox
        @change="${r=>{var d;r.stopPropagation(),(d=document.querySelector("mdc-combobox"))==null||d.setAttribute("value",r.detail.value)}}"
        placeholder="${e.placeholder}"
        label="${e.label}"
        value="${e.value}"
        control-type="${e["control-type"]}"
        data-aria-label="${e["data-aria-label"]}"
        required="${e.required}"
      >
        ${e.children}
      </mdc-combobox>
    `),args:{label:"Top Countries","control-type":"controlled",value:"den",placeholder:"Start typing","data-aria-label":"Select a country",children:t`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    `}},u={args:{label:"Fruits and Vegetables",placeholder:"Type a fruit or vegetable","no-result-text":"No results found","data-aria-label":"Fruits and Vegetables",children:t` <mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="tomato" label="Tomato"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Vegetables">
        <mdc-option value="artichoke" label="Artichokes"></mdc-option>
        <mdc-option value="broccoli" label="Broccoli"></mdc-option>
        <mdc-option value="cabbage" label="Cabbages"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna" label="Tuna"></mdc-option>
        <mdc-option value="salmon" label="Salmon"></mdc-option>
      </mdc-optgroup>
    </mdc-selectlistbox>`}},h={args:{label:"Select a programming language",placeholder:"Type a programming language","no-result-text":"No results found","data-aria-label":"Select a programming language",children:t` <mdc-selectlistbox>
      <mdc-option value="javascript" label="JavaScript"></mdc-option>
      <mdc-option value="python" label="Python"></mdc-option>
      <mdc-option value="java" label="Java" disabled></mdc-option>
      <mdc-option value="csharp" label="C#"></mdc-option>
      <mdc-option value="ruby" label="Ruby"></mdc-option>
      <mdc-option value="golang" label="Go" disabled></mdc-option>
      <mdc-option value="c++" label="C++"></mdc-option>
      <mdc-option value="php" label="PHP"></mdc-option>
    </mdc-selectlistbox>`}},v={args:{name:"avengers-name",placeholder:"Select the avenger",label:"Who is your favorite Avenger?",value:"hulk",required:!0,"data-aria-label":"Who is your favorite Avenger?",children:t`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `}},g={render:()=>A(t`
      <mdc-combobox
        placeholder="Type a color"
        label="Select one color"
        data-aria-label="Select one color"
        style="width: 300px;"
      >
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow" id="trigger-option"></mdc-option>
          <mdc-option id="option-3" label="White and Black are the biggest colors on the spectrum"></mdc-option>
          <mdc-tooltip triggerid="option-3" show-arrow strategy="fixed">
            White and Black are the biggest colors on the spectrum
          </mdc-tooltip>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    `),...m()},x={render:()=>A(t`
      <form @submit=${c=>{c.preventDefault();const r=new FormData(c.target),d=r.get("avengers-name"),n=r.get("stone-count");i("Form Submitted")({value:{selectedAvengers:d,selectedStones:n}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=${i("avengers combobox onchange")}
            @input=${i("avengers combobox oninput")}
            data-aria-label="Select the avenger"
            validation-message="You must select an Avenger"
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox
            name="stone-count"
            placeholder="Type the count"
            label="How many Infinity Stones exist?"
            required
            @change=${i("stones combobox onchange")}
            @input=${i("stones combobox oninput")}
            data-aria-label="How many Infinity Stones exist?"
            invalid-custom-value-text="Custom values are not allowed."
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `),...m()},y={render:e=>{const c=n=>{const l=n.querySelector("mdc-combobox");return l.value===""?(l.setAttribute("help-text","This field is required"),l.setAttribute("help-text-type",a.ERROR),!1):l.value!=="super-strength"?(l.setAttribute("help-text","Please select the Super Strength option"),l.setAttribute("help-text-type",a.WARNING),!1):(l.setAttribute("help-text","You now have Super Strength!"),l.setAttribute("help-text-type",a.SUCCESS),!0)};return t`
      <form
        @submit=${n=>{n.preventDefault();const l=n.target;c(l)&&i("Form Submitted")({value:{selectedOption:"super-power"}})}}
        @reset=${n=>{const l=(n==null?void 0:n.target).querySelector("mdc-combobox");l.setAttribute("help-text",""),l.setAttribute("help-text-type",a.DEFAULT)}}
        novalidate
        style="width: 25rem; height: 100%; display: flex; align-items: center;"
      >
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; width: 30rem;">
          ${ce(e)}
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{name:"super-power",label:"Select your super hero power (with custom validation)",placeholder:"Type super power",required:!0,"help-text":"","help-text-type":a.DEFAULT,"data-aria-label":"Select a super power",children:t`
      <mdc-selectlistbox>
        <mdc-option value="flight" label="Flight"></mdc-option>
        <mdc-option value="mind-control" label="Mind Control"></mdc-option>
        <mdc-option value="super-strength" label="Super strength"></mdc-option>
        <mdc-option value="tactics" label="Tactics"></mdc-option>
      </mdc-selectlistbox>
    `}},S={render:()=>t`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="combobox-trigger-button">Click me!</mdc-button>
      <mdc-popover
        triggerID="combobox-trigger-button"
        interactive
        hide-on-escape
        hide-on-outside-click
        focus-trap
        focus-back-to-trigger
      >
        <div style="width: 15rem;">
          <mdc-combobox placeholder="select one">
            <mdc-selectlistbox>
              <mdc-option label="Option 1" value="option-1"></mdc-option>
              <mdc-option label="Option 2" value="option-2"></mdc-option>
              <mdc-option label="Option 3" value="option-3"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox placeholder="select one">
            <mdc-selectlistbox>
              <mdc-option label="Option 4" value="option-4"></mdc-option>
              <mdc-option label="Option 5" value="option-5"></mdc-option>
              <mdc-option label="Option 6" value="option-6"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox placeholder="select one">
            <mdc-selectlistbox>
              <mdc-option label="Option 7" value="option-7"></mdc-option>
              <mdc-option label="Option 8" value="option-8"></mdc-option>
              <mdc-option label="Option 9" value="option-9"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
        </div>
      </mdc-popover>
    </div>
  `,...m()},f={render:()=>t(k||(k=ue([`
    <script>
      const popover = document.querySelector('mdc-popover[id="popover-23"]');
      const combobox = document.querySelector('mdc-combobox[id="combo-23"]');
      const handleClick = () => {
        combobox?.setAttribute('value', '');
        popover?.setAttribute('visible', '');
      };
      const handleKeydown = event => {
        popover?.removeAttribute('visible');
      };
      const toggleDialogClick = () => {
        const dialog = document.querySelector('mdc-dialog[id="dialog-23"]');
        dialog?.toggleAttribute('visible');
      };
      document.querySelector('mdc-combobox[id="combo-23"]')?.addEventListener('keydown', handleKeydown);
      document.querySelector('mdc-button[id="reset-button"]')?.addEventListener('click', handleClick);
      document.querySelector('mdc-button[id="dialog-trigger"]')?.addEventListener('click', toggleDialogClick);
    <\/script>
    <mdc-dialog
      id="dialog-23"
      style="width: 40rem; height: 40rem;"
      aria-label="dialog"
      close-button-aria-label="close dialog"
      triggerID="dialog-trigger"
    >
      <div slot="dialog-body">
        <mdc-combobox
          no-result-text="No results found"
          style="width: 15rem;"
          label="Select a country"
          data-aria-label="Select a country"
          placeholder="Start typing"
          value="den"
          id="combo-23"
        >
          <mdc-selectlistbox>
            <mdc-option value="arg" label="Argentina"></mdc-option>
            <mdc-option value="aus" label="Australia"></mdc-option>
            <mdc-option value="au" label="Austria"></mdc-option>
            <mdc-option value="ban" label="Bangladesh"></mdc-option>
            <mdc-option value="bel" label="Belgium"></mdc-option>
            <mdc-option value="bra" label="Brazil"></mdc-option>
            <mdc-option value="can" label="Canada"></mdc-option>
            <mdc-option value="chi" label="China"></mdc-option>
            <mdc-option value="col" label="Colombia"></mdc-option>
            <mdc-option value="den" label="Denmark"></mdc-option>
          </mdc-selectlistbox>
        </mdc-combobox>
        <br />
        <mdc-button id="reset-button">Reset Value!</mdc-button>
        <mdc-popover
          stack-group-name="warning-overlay"
          id="popover-23"
          show-arrow
          placement="bottom"
          triggerID="combo-23"
          trigger="manual"
          style="width: 18rem;"
        >
          This is a warning popover. It will appear when the button is clicked and disappear when a key is pressed on
          the combobox.
        </mdc-popover>
      </div>
    </mdc-dialog>
    <mdc-button id="dialog-trigger">Open the dialog!</mdc-button>
  `]))),parameters:{...m(!0),...pe(t`<p role="region">
        This story tests the behavior of multiple popovers being open at the same time. When the "Reset Value" button is
        clicked, a warning popover appears below the combobox. The warning popover should be dismissed when any key is
        pressed while the combobox is focused, and the combobox dropdown should remain open after the warning popover is
        dismissed.
      </p> `,!0)}};var $,O,I;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Top Countries',
    name: 'country',
    'help-text': 'Select a country',
    'help-text-type': VALIDATION.DEFAULT,
    disabled: false,
    readonly: false,
    'no-result-text': 'No results found',
    placeholder: 'Start typing',
    'data-aria-label': 'Select a country',
    'info-icon-aria-label': 'Required icon label',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    'invalid-custom-value-text': 'Custom values are not allowed',
    children: html\`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="aus" label="Australia"></mdc-option>
        <mdc-option value="au" label="Austria"></mdc-option>
        <mdc-option value="ban" label="Bangladesh"></mdc-option>
        <mdc-option value="bel" label="Belgium"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    \`
  }
}`,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var D,R,q;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div role="\${ROLE.MAIN}">
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="\${VALIDATION.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="\${VALIDATION.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="\${VALIDATION.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="\${VALIDATION.PRIORITY}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text="This is a disabled text."
        label="Label"
        data-aria-label="This is a disabled text."
        placeholder="Disabled text"
        disabled
      >
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="This is a readonly text."
        label="Label"
        data-aria-label="This is a readonly text."
        placeholder="Readonly text"
        readonly
      >
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  \`,
  ...hideAllControls()
}`,...(q=(R=s.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var E,L,W;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => {
    const handleChange = (event: CustomEvent) => {
      event.stopPropagation();
      document.querySelector('mdc-combobox')?.setAttribute('value', event.detail.value);
    };
    return wrapper(html\`
      <mdc-combobox
        @change="\${handleChange}"
        placeholder="\${args.placeholder}"
        label="\${args.label}"
        value="\${args.value}"
        control-type="\${args['control-type']}"
        data-aria-label="\${args['data-aria-label']}"
        required="\${args.required}"
      >
        \${args.children}
      </mdc-combobox>
    \`);
  },
  args: {
    label: 'Top Countries',
    'control-type': 'controlled',
    value: 'den',
    placeholder: 'Start typing',
    'data-aria-label': 'Select a country',
    children: html\`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    \`
  }
}`,...(W=(L=b.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var V,N,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Fruits and Vegetables',
    placeholder: 'Type a fruit or vegetable',
    'no-result-text': 'No results found',
    'data-aria-label': 'Fruits and Vegetables',
    children: html\` <mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="tomato" label="Tomato"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Vegetables">
        <mdc-option value="artichoke" label="Artichokes"></mdc-option>
        <mdc-option value="broccoli" label="Broccoli"></mdc-option>
        <mdc-option value="cabbage" label="Cabbages"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna" label="Tuna"></mdc-option>
        <mdc-option value="salmon" label="Salmon"></mdc-option>
      </mdc-optgroup>
    </mdc-selectlistbox>\`
  }
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var B,H,P;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Select a programming language',
    placeholder: 'Type a programming language',
    'no-result-text': 'No results found',
    'data-aria-label': 'Select a programming language',
    children: html\` <mdc-selectlistbox>
      <mdc-option value="javascript" label="JavaScript"></mdc-option>
      <mdc-option value="python" label="Python"></mdc-option>
      <mdc-option value="java" label="Java" disabled></mdc-option>
      <mdc-option value="csharp" label="C#"></mdc-option>
      <mdc-option value="ruby" label="Ruby"></mdc-option>
      <mdc-option value="golang" label="Go" disabled></mdc-option>
      <mdc-option value="c++" label="C++"></mdc-option>
      <mdc-option value="php" label="PHP"></mdc-option>
    </mdc-selectlistbox>\`
  }
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var _,M,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'avengers-name',
    placeholder: 'Select the avenger',
    label: 'Who is your favorite Avenger?',
    value: 'hulk',
    required: true,
    'data-aria-label': 'Who is your favorite Avenger?',
    children: html\`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    \`
  }
}`,...(z=(M=v.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var Y,U,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => wrapper(html\`
      <mdc-combobox
        placeholder="Type a color"
        label="Select one color"
        data-aria-label="Select one color"
        style="width: 300px;"
      >
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow" id="trigger-option"></mdc-option>
          <mdc-option id="option-3" label="White and Black are the biggest colors on the spectrum"></mdc-option>
          <mdc-tooltip triggerid="option-3" show-arrow strategy="fixed">
            White and Black are the biggest colors on the spectrum
          </mdc-tooltip>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    \`),
  ...hideAllControls()
}`,...(G=(U=g.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var j,K,J;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedAvengers = formData.get('avengers-name');
      const selectedStones = formData.get('stone-count');
      action('Form Submitted')({
        value: {
          selectedAvengers,
          selectedStones
        }
      });
    };
    return wrapper(html\`
      <form @submit=\${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=\${action('avengers combobox onchange')}
            @input=\${action('avengers combobox oninput')}
            data-aria-label="Select the avenger"
            validation-message="You must select an Avenger"
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox
            name="stone-count"
            placeholder="Type the count"
            label="How many Infinity Stones exist?"
            required
            @change=\${action('stones combobox onchange')}
            @input=\${action('stones combobox oninput')}
            data-aria-label="How many Infinity Stones exist?"
            invalid-custom-value-text="Custom values are not allowed."
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`);
  },
  ...hideAllControls()
}`,...(J=(K=x.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: (args: Args) => {
    const validateCombobox = (formData: HTMLFormElement): boolean => {
      const combobox = formData.querySelector('mdc-combobox') as Combobox;
      if (combobox.value === '') {
        combobox.setAttribute('help-text', 'This field is required');
        combobox.setAttribute('help-text-type', VALIDATION.ERROR);
        return false;
      }
      if (combobox.value !== 'super-strength') {
        combobox.setAttribute('help-text', 'Please select the Super Strength option');
        combobox.setAttribute('help-text-type', VALIDATION.WARNING);
        return false;
      }
      combobox.setAttribute('help-text', 'You now have Super Strength!');
      combobox.setAttribute('help-text-type', VALIDATION.SUCCESS);
      return true;
    };
    const handleReset = (event: Event) => {
      const combobox = (event?.target as HTMLFormElement).querySelector('mdc-combobox') as Combobox;
      combobox.setAttribute('help-text', '');
      combobox.setAttribute('help-text-type', VALIDATION.DEFAULT);
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = event.target as HTMLFormElement;
      if (!validateCombobox(formData)) return;
      action('Form Submitted')({
        value: {
          selectedOption: 'super-power'
        }
      });
    };
    return html\`
      <form
        @submit=\${handleSubmit}
        @reset=\${handleReset}
        novalidate
        style="width: 25rem; height: 100%; display: flex; align-items: center;"
      >
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; width: 30rem;">
          \${render(args)}
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    name: 'super-power',
    label: 'Select your super hero power (with custom validation)',
    placeholder: 'Type super power',
    required: true,
    'help-text': '',
    'help-text-type': VALIDATION.DEFAULT,
    'data-aria-label': 'Select a super power',
    children: html\`
      <mdc-selectlistbox>
        <mdc-option value="flight" label="Flight"></mdc-option>
        <mdc-option value="mind-control" label="Mind Control"></mdc-option>
        <mdc-option value="super-strength" label="Super strength"></mdc-option>
        <mdc-option value="tactics" label="Tactics"></mdc-option>
      </mdc-selectlistbox>
    \`
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,oe,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="combobox-trigger-button">Click me!</mdc-button>
      <mdc-popover
        triggerID="combobox-trigger-button"
        interactive
        hide-on-escape
        hide-on-outside-click
        focus-trap
        focus-back-to-trigger
      >
        <div style="width: 15rem;">
          <mdc-combobox placeholder="select one">
            <mdc-selectlistbox>
              <mdc-option label="Option 1" value="option-1"></mdc-option>
              <mdc-option label="Option 2" value="option-2"></mdc-option>
              <mdc-option label="Option 3" value="option-3"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox placeholder="select one">
            <mdc-selectlistbox>
              <mdc-option label="Option 4" value="option-4"></mdc-option>
              <mdc-option label="Option 5" value="option-5"></mdc-option>
              <mdc-option label="Option 6" value="option-6"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox placeholder="select one">
            <mdc-selectlistbox>
              <mdc-option label="Option 7" value="option-7"></mdc-option>
              <mdc-option label="Option 8" value="option-8"></mdc-option>
              <mdc-option label="Option 9" value="option-9"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
        </div>
      </mdc-popover>
    </div>
  \`,
  ...hideAllControls()
}`,...(te=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var le,ae,ne;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      const popover = document.querySelector('mdc-popover[id="popover-23"]');
      const combobox = document.querySelector('mdc-combobox[id="combo-23"]');
      const handleClick = () => {
        combobox?.setAttribute('value', '');
        popover?.setAttribute('visible', '');
      };
      const handleKeydown = event => {
        popover?.removeAttribute('visible');
      };
      const toggleDialogClick = () => {
        const dialog = document.querySelector('mdc-dialog[id="dialog-23"]');
        dialog?.toggleAttribute('visible');
      };
      document.querySelector('mdc-combobox[id="combo-23"]')?.addEventListener('keydown', handleKeydown);
      document.querySelector('mdc-button[id="reset-button"]')?.addEventListener('click', handleClick);
      document.querySelector('mdc-button[id="dialog-trigger"]')?.addEventListener('click', toggleDialogClick);
    <\/script>
    <mdc-dialog
      id="dialog-23"
      style="width: 40rem; height: 40rem;"
      aria-label="dialog"
      close-button-aria-label="close dialog"
      triggerID="dialog-trigger"
    >
      <div slot="dialog-body">
        <mdc-combobox
          no-result-text="No results found"
          style="width: 15rem;"
          label="Select a country"
          data-aria-label="Select a country"
          placeholder="Start typing"
          value="den"
          id="combo-23"
        >
          <mdc-selectlistbox>
            <mdc-option value="arg" label="Argentina"></mdc-option>
            <mdc-option value="aus" label="Australia"></mdc-option>
            <mdc-option value="au" label="Austria"></mdc-option>
            <mdc-option value="ban" label="Bangladesh"></mdc-option>
            <mdc-option value="bel" label="Belgium"></mdc-option>
            <mdc-option value="bra" label="Brazil"></mdc-option>
            <mdc-option value="can" label="Canada"></mdc-option>
            <mdc-option value="chi" label="China"></mdc-option>
            <mdc-option value="col" label="Colombia"></mdc-option>
            <mdc-option value="den" label="Denmark"></mdc-option>
          </mdc-selectlistbox>
        </mdc-combobox>
        <br />
        <mdc-button id="reset-button">Reset Value!</mdc-button>
        <mdc-popover
          stack-group-name="warning-overlay"
          id="popover-23"
          show-arrow
          placement="bottom"
          triggerID="combo-23"
          trigger="manual"
          style="width: 18rem;"
        >
          This is a warning popover. It will appear when the button is clicked and disappear when a key is pressed on
          the combobox.
        </mdc-popover>
      </div>
    </mdc-dialog>
    <mdc-button id="dialog-trigger">Open the dialog!</mdc-button>
  \`,
  parameters: {
    ...hideAllControls(true),
    ...describeStory(html\`<p role="region">
        This story tests the behavior of multiple popovers being open at the same time. When the "Reset Value" button is
        clicked, a warning popover appears below the combobox. The warning popover should be dismissed when any key is
        pressed while the combobox is focused, and the combobox dropdown should remain open after the warning popover is
        dismissed.
      </p> \`, true)
  }
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const po=["Example","AllVariants","ComboboxWithControlled","ComboboxWithOptionGroups","ComboboxWithDisabledOptions","ComboboxWithSelectedValue","ComboboxWithLongOptionText","ComboboxWithForm","ComboboxWithHelpTextValidation","ComboboxInsidePopover","ComboboxWithMultiplePopovers"];export{s as AllVariants,S as ComboboxInsidePopover,b as ComboboxWithControlled,h as ComboboxWithDisabledOptions,x as ComboboxWithForm,y as ComboboxWithHelpTextValidation,g as ComboboxWithLongOptionText,f as ComboboxWithMultiplePopovers,u as ComboboxWithOptionGroups,v as ComboboxWithSelectedValue,p as Example,po as __namedExportsOrder,mo as default};
