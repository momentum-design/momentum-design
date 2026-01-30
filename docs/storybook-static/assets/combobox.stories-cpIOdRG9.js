import{k as l,R as K}from"./iframe-C2GM4z_-.js";import"./index-CefHQo0B.js";import"./index-C6CVqyJi.js";import"./index-CV0GKtrl.js";import"./index-Gx9SinnE.js";import"./index-DcSprkOU.js";import"./index-CQyrZXrJ.js";import{t as o}from"./if-defined-zqg5dXF4.js";import{c as X,s as Z}from"./commonArgTypes-BG7EqI50.js";import{h as ee,a as y}from"./utils-D6nie9pS.js";import{V as a}from"./formfieldwrapper.constants-CNozHpaY.js";import{P as g,S as A}from"./popover.constants-4CPcFDrY.js";import{V as oe}from"./ControlTypeMixin-BsOEy-PX.js";import"./preload-helper-C1FmrZbK.js";import"./index-BX5gF9z0.js";import"./buttonsimple.component-DNa7wBY6.js";import"./DisabledMixin-CaMNUysA.js";import"./KeyToActionMixin-CWAxPGPA.js";import"./index-EiWAZQ2W.js";import"./index-OPhLQNUs.js";import"./index-DTrDRi1E.js";import"./index-DEwqE26s.js";import"./index-9X0eSCAd.js";import"./popover.component-DIw5MWM4.js";import"./BackdropMixin-w4WbXy0U.js";import"./dom-BlZvhF8F.js";import"./index-DdtxLpio.js";import"./v4-CmTdKEVZ.js";import"./input.component-BF7ZwuSE.js";import"./directive-Ctav8iJK.js";import"./index-BMPxqp1z.js";import"./formfieldwrapper.component-C1QS8g1J.js";import"./DataAriaLabelMixin-Dzuwkg0N.js";import"./FormInternalsMixin-C4uquTc5.js";import"./input.constants-bVTWAk0P.js";import"./index-Bg1cOzF4.js";import"./listitem.component-CwmMzCTx.js";import"./query-assigned-elements-Dsr8tkmE.js";import"./index-CN7y8NST.js";import"./CaptureDestroyEventForChildElement-DZXxh2aA.js";import"./optgroup.constants-CBFuHr4Y.js";import"./button.component-dWt_NMIt.js";import"./button.utils-rNW36Ji7.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,S=e=>l`<div style="width: 25rem; height: 100%; display: flex; align-items: center;" role="${K.MAIN}">
    ${e}
  </div>`,Q=e=>S(l` <mdc-combobox
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
    </mdc-combobox>`),Ye={title:"Components/combobox",tags:["autodocs"],component:"mdc-combobox",render:Q,parameters:{badges:["stable"]},argTypes:{"auto-focus-on-mount":{control:"boolean"},"backdrop-append-to":{control:"text"},boundary:{control:"text"},"control-type":{control:"select",options:oe},"data-aria-label":{control:"text"},disabled:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(a)},"info-icon-aria-label":{control:"text"},label:{control:"text"},name:{control:"text"},"no-result-text":{control:"text"},placeholder:{control:"text"},placement:{control:"select",options:[g.BOTTOM_START,g.TOP_START]},"popover-z-index":{control:"number"},readonly:{control:"boolean"},required:{control:"boolean"},strategy:{control:"select",options:Object.values(A)},value:{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(g)},"toggletip-strategy":{control:"select",options:Object.values(A)},"validation-message":{control:"text"},"invalid-custom-value-text":{control:"text"},...ee(["children","controlTypeProviderContext","itemsStore","soft-disabled","name","validity","value","willValidate"]),...X,...Z}},m={args:{label:"Top Countries",name:"country","help-text":"Select a country","help-text-type":a.DEFAULT,disabled:!1,readonly:!1,"no-result-text":"No results found",placeholder:"Start typing","data-aria-label":"Select a country","info-icon-aria-label":"Required icon label",placement:g.BOTTOM_START,"invalid-custom-value-text":"Custom values are not allowed",children:l`
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
    `}},d={render:()=>l`
    <div role="${K.MAIN}">
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
  `,...y()},p={render:e=>l`
      <mdc-combobox
        @change="${c=>{c.stopPropagation(),document.querySelector("mdc-combobox").value=c.detail.value}}"
        placeholder="${e.placeholder}"
        label="${e.label}"
        value="${e.value}"
        control-type="${e["control-type"]}"
      >
        ${e.children}
      </mdc-combobox>
    `,args:{label:"Top Countries","control-type":"controlled",value:"den",placeholder:"Start typing",children:l`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    `}},s={args:{label:"Fruits and Vegetables",placeholder:"Type a fruit or vegetable","no-result-text":"No results found","data-aria-label":"Fruits and Vegetables",children:l` <mdc-selectlistbox>
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
    </mdc-selectlistbox>`}},b={args:{label:"Select a programming language",placeholder:"Type a programming language","no-result-text":"No results found","data-aria-label":"Select a programming language",children:l` <mdc-selectlistbox>
      <mdc-option value="javascript" label="JavaScript"></mdc-option>
      <mdc-option value="python" label="Python"></mdc-option>
      <mdc-option value="java" label="Java" disabled></mdc-option>
      <mdc-option value="csharp" label="C#"></mdc-option>
      <mdc-option value="ruby" label="Ruby"></mdc-option>
      <mdc-option value="golang" label="Go" disabled></mdc-option>
      <mdc-option value="c++" label="C++"></mdc-option>
      <mdc-option value="php" label="PHP"></mdc-option>
    </mdc-selectlistbox>`}},u={args:{name:"avengers-name",placeholder:"Select the avenger",label:"Who is your favorite Avenger?",value:"hulk",required:!0,"data-aria-label":"Who is your favorite Avenger?",children:l`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `}},h={render:()=>S(l`
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
    `),...y()},x={render:()=>S(l`
      <form @submit=${r=>{r.preventDefault();const c=new FormData(r.target),f=c.get("avengers-name"),n=c.get("stone-count");i("Form Submitted")({value:{selectedAvengers:f,selectedStones:n}})}}>
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
    `),...y()},v={render:e=>{const r=n=>{const t=n.querySelector("mdc-combobox");return t.value===""?(t.setAttribute("help-text","This field is required"),t.setAttribute("help-text-type",a.ERROR),!1):t.value!=="super-strength"?(t.setAttribute("help-text","Please select the Super Strength option"),t.setAttribute("help-text-type",a.WARNING),!1):(t.setAttribute("help-text","You now have Super Strength!"),t.setAttribute("help-text-type",a.SUCCESS),!0)};return l`
      <form
        @submit=${n=>{n.preventDefault();const t=n.target;r(t)&&i("Form Submitted")({value:{selectedOption:"super-power"}})}}
        @reset=${n=>{const t=(n==null?void 0:n.target).querySelector("mdc-combobox");t.setAttribute("help-text",""),t.setAttribute("help-text-type",a.DEFAULT)}}
        novalidate
        style="width: 25rem; height: 100%; display: flex; align-items: center;"
      >
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; width: 30rem;">
          ${Q(e)}
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{name:"super-power",label:"Select your super hero power (with custom validation)",placeholder:"Type super power",required:!0,"help-text":"","help-text-type":a.DEFAULT,"data-aria-label":"Select a super power",children:l`
      <mdc-selectlistbox>
        <mdc-option value="flight" label="Flight"></mdc-option>
        <mdc-option value="mind-control" label="Mind Control"></mdc-option>
        <mdc-option value="super-strength" label="Super strength"></mdc-option>
        <mdc-option value="tactics" label="Tactics"></mdc-option>
      </mdc-selectlistbox>
    `}};var T,C,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(C=m.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var $,I,O;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,k,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: Args) => {
    const handleInput = (event: CustomEvent) => {
      event.stopPropagation();
      document.querySelector('mdc-combobox')!.value = event.detail.value;
    };
    return html\`
      <mdc-combobox
        @change="\${handleInput}"
        placeholder="\${args.placeholder}"
        label="\${args.label}"
        value="\${args.value}"
        control-type="\${args['control-type']}"
      >
        \${args.children}
      </mdc-combobox>
    \`;
  },
  args: {
    label: 'Top Countries',
    'control-type': 'controlled',
    value: 'den',
    placeholder: 'Start typing',
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
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,L,F;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(L=s.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,N,V;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(N=b.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,H,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var P,M,z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(M=h.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var _,Y,U;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var G,j,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(j=v.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const Ue=["Example","AllVariants","ComboboxWithControlled","ComboboxWithOptionGroups","ComboboxWithDisabledOptions","ComboboxWithSelectedValue","ComboboxWithLongOptionText","ComboboxWithForm","ComboboxWithHelpTextValidation"];export{d as AllVariants,p as ComboboxWithControlled,b as ComboboxWithDisabledOptions,x as ComboboxWithForm,v as ComboboxWithHelpTextValidation,h as ComboboxWithLongOptionText,s as ComboboxWithOptionGroups,u as ComboboxWithSelectedValue,m as Example,Ue as __namedExportsOrder,Ye as default};
