import{k as n}from"./iframe-CfitjWUE.js";import"./index-Blq3aC3u.js";import"./index-B0gnaOC9.js";import"./index-DYvnbjzB.js";import"./index-DLamZbG-.js";import"./index-Cd0LFQli.js";import"./index-1kG1CCc-.js";import{c as B,s as M}from"./commonArgTypes-BG7EqI50.js";import{h as P,a as Y}from"./utils-D6nie9pS.js";import{V as o}from"./formfieldwrapper.constants-BgypaDPT.js";import{P as u,S as v}from"./popover.constants-BfURR8Av.js";import"./preload-helper-C1FmrZbK.js";import"./index-BQPE_SGk.js";import"./buttonsimple.component-CHF3jYvP.js";import"./DisabledMixin-W25vj83_.js";import"./KeyToActionMixin-CroOPhbe.js";import"./index-Cs_OuWm2.js";import"./index-C9SFOIud.js";import"./index-DTrDRi1E.js";import"./index-O3mqq0YK.js";import"./index-B7S1CVJR.js";import"./if-defined-B92OEDYj.js";import"./popover.component-5fveDtIW.js";import"./BackdropMixin-CoG9kfZL.js";import"./dom-BlZvhF8F.js";import"./index-BWgaNW8z.js";import"./v4-CmTdKEVZ.js";import"./input.component-CvE5tQ4i.js";import"./directive-Ctav8iJK.js";import"./index-BsJzmGgQ.js";import"./formfieldwrapper.component-Chq4h6Pf.js";import"./DataAriaLabelMixin-C0eirZqS.js";import"./FormInternalsMixin-BkwtBCb3.js";import"./input.constants-J2NnI_5u.js";import"./index-BlCY6O7Q.js";import"./listitem.component-BxEI-N4E.js";import"./query-assigned-elements-DYg43Ijs.js";import"./index-BJskGwBL.js";import"./CaptureDestroyEventForChildElement-DoEv-33W.js";import"./optgroup.constants-CgXv6s8y.js";import"./button.component-wQ-F7Mht.js";import"./button.utils-rNW36Ji7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,_=e=>n`<div style="width: 25rem; height: 100%; display: flex; align-items: center;">${e}</div>`,N=e=>n` <mdc-combobox
    @change="${l("onchange")}"
    @click="${l("onclick")}"
    @input="${l("oninput")}"
    @keydown="${l("onkeydown")}"
    @focus="${l("onfocus")}"
    backdrop-append-to="${e["backdrop-append-to"]}"
    boundary="${e.boundary}"
    data-aria-label="${e["data-aria-label"]}"
    ?disabled="${e.disabled}"
    help-text="${e["help-text"]}"
    help-text-type="${e["help-text-type"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    label="${e.label}"
    name="${e.name}"
    no-result-text="${e["no-result-text"]}"
    placeholder="${e.placeholder}"
    placement="${e.placement}"
    popover-z-index="${e["popover-z-index"]}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    strategy="${e.strategy}"
    value="${e.value}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    validation-message="${e["validation-message"]}"
    invalid-custom-value-text="${e["invalid-custom-value-text"]}"
  >
    ${e.children}
  </mdc-combobox>`,Fe={title:"Components/combobox",tags:["autodocs"],component:"mdc-combobox",render:N,parameters:{badges:["stable"]},argTypes:{"auto-focus-on-mount":{control:"boolean"},"backdrop-append-to":{control:"text"},boundary:{control:"text"},"data-aria-label":{control:"text"},disabled:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(o)},"info-icon-aria-label":{control:"text"},label:{control:"text"},name:{control:"text"},"no-result-text":{control:"text"},placeholder:{control:"text"},placement:{control:"select",options:[u.BOTTOM_START,u.TOP_START]},"popover-z-index":{control:"number"},readonly:{control:"boolean"},required:{control:"boolean"},strategy:{control:"select",options:Object.values(v)},value:{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(u)},"toggletip-strategy":{control:"select",options:Object.values(v)},"validation-message":{control:"text"},"invalid-custom-value-text":{control:"text"},...P(["id","value","validity","willValidate","default","itemsStore","handleUpdateError"]),...B,...M}},c={args:{value:"",label:"Top Countries",name:"country","help-text":"Select a country","help-text-type":o.DEFAULT,disabled:!1,readonly:!1,"no-result-text":"",placeholder:"Start typing","data-aria-label":"Select a country","info-icon-aria-label":"Required icon label",placement:u.BOTTOM_START,"invalid-custom-value-text":"Custom values are not allowed",children:n`
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
    `},render:e=>_(N(e))},r={render:()=>n`
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${o.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${o.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="${o.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="${o.PRIORITY}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox help-text="This is a disabled text." label="Label" data-aria-label="This is a disabled text." placeholder="Disabled text" disabled>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox help-text="This is a readonly text." label="Label" data-aria-label="This is a readonly text." placeholder="Readonly text" readonly>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  `},m={args:{label:"Fruits and Vegetables",placeholder:"Type a fruit or vegetable","no-result-text":"No results found","data-aria-label":"Fruits and Vegetables",children:n` <mdc-selectlistbox>
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
    </mdc-selectlistbox>`}},d={args:{name:"avengers-name",placeholder:"Select the avenger",label:"Who is your favorite Avenger?",value:"hulk",required:!0,"data-aria-label":"Who is your favorite Avenger?",children:n`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `}},p={render:()=>n`
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
        <mdc-option label="Green"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
    <mdc-tooltip triggerid="option-3" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  `},s={render:()=>n`
      <form @submit=${i=>{i.preventDefault();const x=new FormData(i.target),h=x.get("avengers-name"),a=x.get("stone-count");l("Form Submitted")({value:{selectedAvengers:h,selectedStones:a}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=${l("avengers combobox onchange")}
            @input=${l("avengers combobox oninput")}
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
            @change=${l("stones combobox onchange")}
            @input=${l("stones combobox oninput")}
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
    `,...Y()},b={render:e=>{const i=a=>{const t=a.querySelector("mdc-combobox");return t.value===""?(t.setAttribute("help-text","This field is required"),t.setAttribute("help-text-type",o.ERROR),!1):t.value!=="super-strength"?(t.setAttribute("help-text","Please select the Super Strength option"),t.setAttribute("help-text-type",o.WARNING),!1):(t.setAttribute("help-text","You now have Super Strength!"),t.setAttribute("help-text-type",o.SUCCESS),!0)};return n`
      <form @submit=${a=>{a.preventDefault();const t=a.target;i(t)&&l("Form Submitted")({value:{selectedOption:"super-power"}})}} @reset=${a=>{const t=(a==null?void 0:a.target).querySelector("mdc-combobox");t.setAttribute("help-text",""),t.setAttribute("help-text-type",o.DEFAULT)}} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with custom validation)</legend>
          <mdc-combobox
            name="${e.name}"
            label="${e.label}"
            placeholder="${e.placeholder}"
            data-aria-label="${e["data-aria-label"]}"
            ?required=${e.required}
            help-text="${e["help-text"]}"
            help-text-type="${e["help-text-type"]}"
          >
            <mdc-selectlistbox>
              <mdc-option value="flight" label="Flight"></mdc-option>
              <mdc-option value="mind-control" label="Mind Control"></mdc-option>
              <mdc-option value="super-strength" label="Super strength"></mdc-option>
              <mdc-option value="tactics" label="Tactics"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{name:"super-power",label:"Super Power",placeholder:"Type super power",required:!0,"help-text":"","help-text-type":o.DEFAULT,"data-aria-label":"Select a super power"}};var g,y,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Top Countries',
    name: 'country',
    'help-text': 'Select a country',
    'help-text-type': VALIDATION.DEFAULT,
    disabled: false,
    readonly: false,
    'no-result-text': '',
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
  },
  render: args => wrapper(render(args))
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,A,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
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
      <mdc-combobox help-text="This is a disabled text." label="Label" data-aria-label="This is a disabled text." placeholder="Disabled text" disabled>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox help-text="This is a readonly text." label="Label" data-aria-label="This is a readonly text." placeholder="Readonly text" readonly>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  \`
}`,...(T=(A=r.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var w,$,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=($=m.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var C,k,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var R,D,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => html\`
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
        <mdc-option label="Green"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
    <mdc-tooltip triggerid="option-3" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  \`
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,q,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    return html\`
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
    \`;
  },
  ...hideAllControls()
}`,...(L=(q=s.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var W,V,H;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with custom validation)</legend>
          <mdc-combobox
            name="\${args.name}"
            label="\${args.label}"
            placeholder="\${args.placeholder}"
            data-aria-label="\${args['data-aria-label']}"
            ?required=\${args.required}
            help-text="\${args['help-text']}"
            help-text-type="\${args['help-text-type']}"
          >
            <mdc-selectlistbox>
              <mdc-option value="flight" label="Flight"></mdc-option>
              <mdc-option value="mind-control" label="Mind Control"></mdc-option>
              <mdc-option value="super-strength" label="Super strength"></mdc-option>
              <mdc-option value="tactics" label="Tactics"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
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
    label: 'Super Power',
    placeholder: 'Type super power',
    required: true,
    'help-text': '',
    'help-text-type': VALIDATION.DEFAULT,
    'data-aria-label': 'Select a super power'
  }
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const qe=["Example","AllVariants","ComboboxWithOptionGroups","ComboboxWithSelectedValue","ComboboxWithLongOptionText","ComboboxWithForm","ComboboxWithHelpTextValidation"];export{r as AllVariants,s as ComboboxWithForm,b as ComboboxWithHelpTextValidation,p as ComboboxWithLongOptionText,m as ComboboxWithOptionGroups,d as ComboboxWithSelectedValue,c as Example,qe as __namedExportsOrder,Fe as default};
