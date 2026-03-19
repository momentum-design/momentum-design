import{k as t,R as ue}from"./iframe-n_pPM-AH.js";import{F as ge}from"./index-D7KMzxIy.js";import"./index-DKUdKCPs.js";import"./index-BVz_a7Cg.js";import"./index-Bt3zhVgU.js";import"./index-UNJT2p-s.js";import"./index-TG45JQW4.js";import"./index-I2X_l8LR.js";import"./index-CU9w1pWm.js";import{t as o}from"./if-defined-Ci9G1PLj.js";import{c as ye,s as fe}from"./commonArgTypes-BG7EqI50.js";import{h as Se,a as m,d as he}from"./utils-B5QUENNQ.js";import{V as i}from"./formfieldwrapper.constants-B8ILkPv5.js";import{P as T,S as O}from"./popover.constants-BG8BtsK7.js";import{V as Ae}from"./ControlTypeMixin-CXx4ka7u.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dl6Aymy1.js";import"./buttonsimple.component-BhVhD8WC.js";import"./DisabledMixin-CSX0_rm2.js";import"./KeyDownHandledMixin-DZIjQ3jq.js";import"./index-Mza85U84.js";import"./index-DPX8NBux.js";import"./index-DTrDRi1E.js";import"./index-TV_fzXSP.js";import"./index-CrDKkI09.js";import"./popover.component-BsPvCrCV.js";import"./BackdropMixin-B0-id4DG.js";import"./index-DM6ySEXD.js";import"./v4-CmTdKEVZ.js";import"./input.component-BayaHJBh.js";import"./directive-Ctav8iJK.js";import"./index-8Toh1Id-.js";import"./formfieldwrapper.component-BYJupr26.js";import"./DataAriaLabelMixin-Dt_BbD17.js";import"./FormInternalsMixin-BqXwtiBI.js";import"./input.constants-DyLSFv7t.js";import"./index-YRuU25uI.js";import"./listitem.component-CxQ4RKJ4.js";import"./query-assigned-elements-DK5RpBr_.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CHN0co3D.js";import"./CaptureDestroyEventForChildElement-kFtdQTfY.js";import"./optgroup.constants-CO9uUfow.js";import"./button.component-CRCj3cYz.js";import"./button.utils-rNW36Ji7.js";import"./dialog.component-BoD29wvq.js";import"./FooterMixin-C9VEt56W.js";import"./link.constants-DQvgOPdM.js";var D=Object.freeze,we=Object.defineProperty,Ce=(e,r)=>D(we(e,"raw",{value:D(e.slice())})),R;const{action:c}=__STORYBOOK_MODULE_ACTIONS__,s=e=>t`<div style="width: 25rem; height: 100%; display: flex; align-items: center;" role="${ue.MAIN}">
    ${e}
  </div>`,ve=e=>s(t` <mdc-combobox
      @change="${c("onchange")}"
      @input="${c("oninput")}"
      backdrop-append-to="${o(e["backdrop-append-to"])}"
      boundary="${o(e.boundary)}"
      control-type="${o(e["control-type"])}"
      data-aria-label="${o(e["data-aria-label"])}"
      ?disabled="${e.disabled}"
      filter="${o(e.filter)}"
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
    </mdc-combobox>`),fo={title:"Components/combobox",tags:["autodocs"],component:"mdc-combobox",render:ve,parameters:{badges:["stable"]},argTypes:{"auto-focus-on-mount":{control:"boolean"},"backdrop-append-to":{control:"text"},boundary:{control:"text"},"control-type":{control:"select",options:Ae},"data-aria-label":{control:"text"},disabled:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(i)},"info-icon-aria-label":{control:"text"},label:{control:"text"},name:{control:"text"},filter:{control:"select",options:Object.values(ge)},"no-result-text":{control:"text"},placeholder:{control:"text"},placement:{control:"select",options:[T.BOTTOM_START,T.TOP_START]},"popover-z-index":{control:"number"},readonly:{control:"boolean"},required:{control:"boolean"},strategy:{control:"select",options:Object.values(O)},value:{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(T)},"toggletip-strategy":{control:"select",options:Object.values(O)},"validation-message":{control:"text"},"invalid-custom-value-text":{control:"text"},...Se(["children","controlTypeProviderContext","itemsStore","soft-disabled","name","validity","value","willValidate"]),...ye,...fe}},b={args:{label:"Top Countries",name:"country","help-text":"Select a country","help-text-type":i.DEFAULT,disabled:!1,readonly:!1,"no-result-text":"No results found",placeholder:"Start typing","data-aria-label":"Select a country","info-icon-aria-label":"Required icon label",placement:T.BOTTOM_START,"invalid-custom-value-text":"Custom values are not allowed",children:t`
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
    `}},u={render:()=>t`
    <div role="${ue.MAIN}">
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${i.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${i.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="${i.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="${i.PRIORITY}"
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
  `,...m()},h={render:e=>s(t`
      <mdc-combobox
        @change="${a=>{var d;a.stopPropagation(),(d=document.querySelector("mdc-combobox"))==null||d.setAttribute("value",a.detail.value)}}"
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
    `}},v={args:{label:"Fruits and Vegetables",placeholder:"Type a fruit or vegetable","no-result-text":"No results found","data-aria-label":"Fruits and Vegetables",children:t` <mdc-selectlistbox>
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
    </mdc-selectlistbox>`}},x={args:{label:"Select a programming language",placeholder:"Type a programming language","no-result-text":"No results found","data-aria-label":"Select a programming language",children:t` <mdc-selectlistbox>
      <mdc-option value="javascript" label="JavaScript"></mdc-option>
      <mdc-option value="python" label="Python"></mdc-option>
      <mdc-option value="java" label="Java" disabled></mdc-option>
      <mdc-option value="csharp" label="C#"></mdc-option>
      <mdc-option value="ruby" label="Ruby"></mdc-option>
      <mdc-option value="golang" label="Go" disabled></mdc-option>
      <mdc-option value="c++" label="C++"></mdc-option>
      <mdc-option value="php" label="PHP"></mdc-option>
    </mdc-selectlistbox>`}},g={args:{name:"avengers-name",placeholder:"Select the avenger",label:"Who is your favorite Avenger?",value:"hulk",required:!0,"data-aria-label":"Who is your favorite Avenger?",children:t`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `}},y={render:()=>s(t`
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
    `),...m()},f={render:()=>s(t`
      <form @submit=${r=>{r.preventDefault();const a=new FormData(r.target),d=a.get("avengers-name"),n=a.get("stone-count");c("Form Submitted")({value:{selectedAvengers:d,selectedStones:n}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=${c("avengers combobox onchange")}
            @input=${c("avengers combobox oninput")}
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
            @change=${c("stones combobox onchange")}
            @input=${c("stones combobox oninput")}
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
    `),...m()},S={render:e=>{const r=n=>{const l=n.querySelector("mdc-combobox");return l.value===""?(l.setAttribute("help-text","This field is required"),l.setAttribute("help-text-type",i.ERROR),!1):l.value!=="super-strength"?(l.setAttribute("help-text","Please select the Super Strength option"),l.setAttribute("help-text-type",i.WARNING),!1):(l.setAttribute("help-text","You now have Super Strength!"),l.setAttribute("help-text-type",i.SUCCESS),!0)};return t`
      <form
        @submit=${n=>{n.preventDefault();const l=n.target;r(l)&&c("Form Submitted")({value:{selectedOption:"super-power"}})}}
        @reset=${n=>{const l=(n==null?void 0:n.target).querySelector("mdc-combobox");l.setAttribute("help-text",""),l.setAttribute("help-text-type",i.DEFAULT)}}
        novalidate
        style="width: 25rem; height: 100%; display: flex; align-items: center;"
      >
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; width: 30rem;">
          ${ve(e)}
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{name:"super-power",label:"Select your super hero power (with custom validation)",placeholder:"Type super power",required:!0,"help-text":"","help-text-type":i.DEFAULT,"data-aria-label":"Select a super power",children:t`
      <mdc-selectlistbox>
        <mdc-option value="flight" label="Flight"></mdc-option>
        <mdc-option value="mind-control" label="Mind Control"></mdc-option>
        <mdc-option value="super-strength" label="Super strength"></mdc-option>
        <mdc-option value="tactics" label="Tactics"></mdc-option>
      </mdc-selectlistbox>
    `}},A={render:()=>{const e=[{value:"arg",label:"Argentina"},{value:"aus",label:"Australia"},{value:"au",label:"Austria"},{value:"ban",label:"Bangladesh"},{value:"bel",label:"Belgium"},{value:"bra",label:"Brazil"},{value:"can",label:"Canada"},{value:"chi",label:"China"},{value:"col",label:"Colombia"},{value:"den",label:"Denmark"}];return s(t`
      <mdc-combobox
        @input="${a=>{var $,k;const d=((k=($=a.detail)==null?void 0:$.value)==null?void 0:k.toLowerCase())??"",l=a.target.querySelector("mdc-selectlistbox");if(!l)return;const xe=e.filter(p=>p.label.toLowerCase().includes(d));l.innerHTML="";for(const p of xe){const I=document.createElement("mdc-option");I.setAttribute("value",p.value),I.setAttribute("label",p.label),l.appendChild(I)}}}"
        label="Search Countries (API-filtered)"
        placeholder="Type to search (uses includes)"
        filter="none"
        no-result-text="No countries found"
        data-aria-label="Search countries"
      >
        <mdc-selectlistbox>
          ${e.map(a=>t`<mdc-option value="${a.value}" label="${a.label}"></mdc-option>`)}
        </mdc-selectlistbox>
      </mdc-combobox>
    `)},parameters:{...m(!0),...he(t`<p role="region">
        This story demonstrates the <code>filter="none"</code> attribute. When set, the combobox does not perform
        internal "starts with" filtering. Instead, the consumer handles filtering externally (e.g., via an API) and
        dynamically updates the slotted options. In this example, filtering uses "includes" logic instead of the default
        "starts with".
      </p>`,!0)}},w={render:()=>t`
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
  `,...m()},C={render:()=>t(R||(R=Ce([`
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
  `]))),parameters:{...m(!0),...he(t`<p role="region">
        This story tests the behavior of multiple popovers being open at the same time. When the "Reset Value" button is
        clicked, a warning popover appears below the combobox. The warning popover should be dismissed when any key is
        pressed while the combobox is focused, and the combobox dropdown should remain open after the warning popover is
        dismissed.
      </p> `,!0)}};var q,L,E;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(L=b.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,N,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(N=u.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var F,V,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(V=h.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var P,M,_;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(M=v.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var z,Y,U;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var j,G,K;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,oe;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(oe=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,le,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,ie,ce;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const allCountries = [{
      value: 'arg',
      label: 'Argentina'
    }, {
      value: 'aus',
      label: 'Australia'
    }, {
      value: 'au',
      label: 'Austria'
    }, {
      value: 'ban',
      label: 'Bangladesh'
    }, {
      value: 'bel',
      label: 'Belgium'
    }, {
      value: 'bra',
      label: 'Brazil'
    }, {
      value: 'can',
      label: 'Canada'
    }, {
      value: 'chi',
      label: 'China'
    }, {
      value: 'col',
      label: 'Colombia'
    }, {
      value: 'den',
      label: 'Denmark'
    }];
    const handleInput = (event: CustomEvent) => {
      const query = event.detail?.value?.toLowerCase() ?? '';
      const combobox = event.target as HTMLElement;
      const listbox = combobox.querySelector('mdc-selectlistbox');
      if (!listbox) return;
      const filtered = allCountries.filter(c => c.label.toLowerCase().includes(query));
      listbox.innerHTML = '';
      for (const item of filtered) {
        const option = document.createElement('mdc-option');
        option.setAttribute('value', item.value);
        option.setAttribute('label', item.label);
        listbox.appendChild(option);
      }
    };
    return wrapper(html\`
      <mdc-combobox
        @input="\${handleInput}"
        label="Search Countries (API-filtered)"
        placeholder="Type to search (uses includes)"
        filter="none"
        no-result-text="No countries found"
        data-aria-label="Search countries"
      >
        <mdc-selectlistbox>
          \${allCountries.map(c => html\`<mdc-option value="\${c.value}" label="\${c.label}"></mdc-option>\`)}
        </mdc-selectlistbox>
      </mdc-combobox>
    \`);
  },
  parameters: {
    ...hideAllControls(true),
    ...describeStory(html\`<p role="region">
        This story demonstrates the <code>filter="none"</code> attribute. When set, the combobox does not perform
        internal "starts with" filtering. Instead, the consumer handles filtering externally (e.g., via an API) and
        dynamically updates the slotted options. In this example, filtering uses "includes" logic instead of the default
        "starts with".
      </p>\`, true)
  }
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var re,de,me;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(me=(de=w.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var se,pe,be;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(be=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};const So=["Example","AllVariants","ComboboxWithControlled","ComboboxWithOptionGroups","ComboboxWithDisabledOptions","ComboboxWithSelectedValue","ComboboxWithLongOptionText","ComboboxWithForm","ComboboxWithHelpTextValidation","ComboboxWithNoFilter","ComboboxInsidePopover","ComboboxWithMultiplePopovers"];export{u as AllVariants,w as ComboboxInsidePopover,h as ComboboxWithControlled,x as ComboboxWithDisabledOptions,f as ComboboxWithForm,S as ComboboxWithHelpTextValidation,y as ComboboxWithLongOptionText,C as ComboboxWithMultiplePopovers,A as ComboboxWithNoFilter,v as ComboboxWithOptionGroups,g as ComboboxWithSelectedValue,b as Example,So as __namedExportsOrder,fo as default};
