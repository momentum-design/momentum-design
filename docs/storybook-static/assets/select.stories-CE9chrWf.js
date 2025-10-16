import{k as o}from"./iframe-PAxJhFDH.js";import"./index-rEJEMzhV.js";import{c as de,s as se}from"./commonArgTypes-BluK8w5L.js";import{a as re,h as r,d as me}from"./utils-Dd_sfl9-.js";import{V as O}from"./formfieldwrapper.constants-DM_CsWFr.js";import"./index-CdGqdFhJ.js";import"./index-C1RtwLSD.js";import"./index-CtU4bjMb.js";import{P as pe,S as ue}from"./popover.component-LFJFSEqI.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTJ6ngoh.js";import"./button.component-DQ7cVf0l.js";import"./buttonsimple.component-KTxWGHiY.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BZQXf7FT.js";import"./TabIndexMixin-BM_duI-h.js";import"./button.utils-rNW36Ji7.js";import"./index-AlUfwEUP.js";import"./index-B_X5E31I.js";import"./index-DTrDRi1E.js";import"./index-Bps6ERtI.js";import"./index-CD1g_q4k.js";import"./if-defined-DHysbIWl.js";import"./index-PR-m-C-D.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./CaptureDestroyEventForChildElement-Den4ecJY.js";import"./listitem.component-D9MWUkA1.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-MxRXoO7a.js";import"./FormInternalsMixin-DwYA2nO0.js";import"./ListNavigationMixin-DuNaxkxz.js";import"./formfieldwrapper.component-CVG2f0c0.js";import"./BackdropMixin-5SDE6IuW.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,L=Object.values(O).filter(e=>e!=="priority"),k=e=>o`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${e}
  </div>
`,w=e=>k(o`
    <mdc-select
      @change="${l("onchange")}"
      @click="${l("onclick")}"
      @input="${l("oninput")}"
      @keydown="${l("onkeydown")}"
      @focus="${l("onfocus")}"
      label="${e.label}"
      ?required="${e.required}"
      help-text-type="${e["help-text-type"]}"
      help-text="${e["help-text"]}"
      data-aria-label="${e["data-aria-label"]}"
      toggletip-text="${e["toggletip-text"]}"
      toggletip-placement="${e["toggletip-placement"]}"
      toggletip-strategy="${e["toggletip-strategy"]}"
      info-icon-aria-label="${e["info-icon-aria-label"]}"
      placement="${e.placement}"
      name="${e.name}"
      placeholder="${e.placeholder}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      ?readonly="${e.readonly}"
      boundary="${e.boundary}"
      strategy="${e.strategy}"
      popover-z-index="${e["popover-z-index"]}"
      backdrop-append-to="${e["backdrop-append-to"]}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      ${e.children}
    </mdc-select>
  `),Ke={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:w,argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${L.map(e=>`'${e}'`).join(", ")}.`,options:L},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(pe)},"toggletip-strategy":{control:"select",options:Object.values(ue)},"auto-focus-on-mount":{control:"boolean"},placement:{control:"select",options:["bottom-start","top-start"]},"soft-disabled":{control:"boolean"},...re(["id","value","validity","validation-message","willValidate","default","itemsStore"]),...de,...se}},p={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",placement:"bottom-start",children:o`<mdc-selectlistbox>
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-selectlistbox>`}},u={args:{label:"Options and secondary labels",placeholder:"Select an option",children:o`<mdc-selectlistbox>
      <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
      <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
      <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
      <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
    </mdc-selectlistbox>`}},b={args:{label:"Options with groups",children:o`<mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="damson" label="Damsons"></mdc-option>
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
    </mdc-selectlistbox>`},render:e=>o` <div style="height: 35rem;">${w(e)}</div> `},h={args:{label:"Options with long text",placeholder:"Select one color",children:o`<mdc-selectlistbox>
      <mdc-option label="Red"></mdc-option>
      <mdc-option label="Yellow" id="trigger-option"></mdc-option>
      <mdc-option id="option-1" label="White and Black are the biggest colors on the spectrum"></mdc-option>
      <mdc-option label="Green"></mdc-option>
    </mdc-selectlistbox>`},render:e=>o`
    ${w(e)}
    <mdc-tooltip triggerid="option-1" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  `},v={args:{label:"You are in a meeting",placeholder:"Select an option",children:o`<mdc-selectlistbox>
      <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
      <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
      <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
      <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
      <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
    </mdc-selectlistbox>`}},x={render:()=>o`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${O.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="six" selected label="Six"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${O.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${O.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...r()},y={render:()=>o`
      <form @submit=${d=>{d.preventDefault();const t=new FormData(d.target),s=t.get("stone-count"),c=t.get("avengers-name");l("Form Submitted")({value:{selectedStones:s,selectedAvengers:c}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
            @change=${l("avengers select onchange")}
            @input=${l("avengers select oninput")}
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select
            name="stone-count"
            placeholder="Select the count"
            label="How many Infinity Stones exist?"
            required
            @change=${l("stones select onchange")}
            @input=${l("stones select oninput")}
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,...r()},S={render:e=>{const d=(c,n)=>{const a=c.querySelector('mdc-select[name="avengers-name"]'),i=c.querySelector('mdc-select[name="stone-count"]'),m=a.value,q=i.value;let $=!0;return n.required&&(!m||m==="")?(a.setAttribute("help-text","Please select your favorite Avenger"),a.setAttribute("help-text-type","error"),$=!1):(a.setAttribute("help-text","Looks good!"),a.setAttribute("help-text-type","success")),n.required&&(!q||q==="")?(i.setAttribute("help-text","Please select the Infinity Stone count"),i.setAttribute("help-text-type","error"),$=!1):(i.setAttribute("help-text","Looks good!"),i.setAttribute("help-text-type","success")),$};return o`
      <form @submit=${c=>{c.preventDefault();const n=c.target;if(!d(n,e))return;const a=new FormData(n),i=a.get("stone-count"),m=a.get("avengers-name");l("Form Submitted")({value:{selectedStones:i,selectedAvengers:m}})}} @reset=${c=>{const n=c.target,a=n.querySelector('mdc-select[name="avengers-name"]'),i=n.querySelector('mdc-select[name="stone-count"]');a.setAttribute("help-text",e["help-text"]||""),a.setAttribute("help-text-type",e["help-text-type"]||"default"),i.setAttribute("help-text",e["help-text"]||""),i.setAttribute("help-text-type",e["help-text-type"]||"default")}} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select
            name="stone-count"
            placeholder="Select the count"
            label="How many Infinity Stones exist?"
            required
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{required:!0,"help-text":"","help-text-type":"default"},...r()},g={render:()=>{const e=Array.from({length:10},(t,s)=>o`<mdc-option label="Option ${s+1}"></mdc-option>`);let d=null;return setTimeout(()=>{d=o`<mdc-option label="Delayed Option"></mdc-option>`;const t=document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');if(t){const s=document.createElement("mdc-option");s.setAttribute("label","Delayed Option"),t.appendChild(s)}},2e3),k(o`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${e} ${d} </mdc-selectlistbox>
      </mdc-select>
    `)},argTypes:{...me(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])},...r()},f={render:()=>k(o`
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');t&&t.querySelectorAll("mdc-option").forEach((c,n)=>{n===0&&c.removeAttribute("selected"),n===1&&c.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');t&&t.querySelectorAll("mdc-option").forEach(c=>{c.removeAttribute("selected")})}} style="margin: 8px 0;">Remove Selected</mdc-button>
      <mdc-select
        label="Select an option"
        placeholder="Select an option"
        @change="${l("onchange")}"
        @click="${l("onclick")}"
        @input="${l("oninput")}"
        @keydown="${l("onkeydown")}"
        @focus="${l("onfocus")}"
      >
        <mdc-selectlistbox>
          <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...r()},A={render:()=>o` <mdc-button @click=${()=>{const t=document.querySelector('mdc-select[label="Select"]');t&&(t.value="option3")}}>Set value to Option 3</mdc-button>
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-select[label="Select"]');t&&(t.value="invalid-option")}} style="margin: 8px 0;">Set value to invalid value</mdc-button>
      <mdc-select label="Select" value="option2" placeholder="Select an Option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" value="option1"></mdc-option>
          <mdc-option label="Option 2" selected value="option2"></mdc-option>
          <mdc-option label="Option 3" value="option3"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>`,...r()};var T,C,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Headquarters location',
    required: true,
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label',
    placement: 'bottom-start',
    children: html\`<mdc-selectlistbox>
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-selectlistbox>\`
  }
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var I,D,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Options and secondary labels',
    placeholder: 'Select an option',
    children: html\`<mdc-selectlistbox>
      <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
      <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
      <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
      <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
    </mdc-selectlistbox>\`
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,V,H;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Options with groups',
    children: html\`<mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="damson" label="Damsons"></mdc-option>
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
  },
  render: (args: Args) => html\` <div style="height: 35rem;">\${render(args)}</div> \`
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var E,M,N;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Options with long text',
    placeholder: 'Select one color',
    children: html\`<mdc-selectlistbox>
      <mdc-option label="Red"></mdc-option>
      <mdc-option label="Yellow" id="trigger-option"></mdc-option>
      <mdc-option id="option-1" label="White and Black are the biggest colors on the spectrum"></mdc-option>
      <mdc-option label="Green"></mdc-option>
    </mdc-selectlistbox>\`
  },
  render: (args: Args) => html\`
    \${render(args)}
    <mdc-tooltip triggerid="option-1" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  \`
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var B,Y,_;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'You are in a meeting',
    placeholder: 'Select an option',
    children: html\`<mdc-selectlistbox>
      <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
      <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
      <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
      <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
      <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
    </mdc-selectlistbox>\`
  }
}`,...(_=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var z,P,G;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="\${VALIDATION.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="six" selected label="Six"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="\${VALIDATION.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="\${VALIDATION.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  \`,
  ...hideAllControls()
}`,...(G=(P=x.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var j,U,K;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedStones = formData.get('stone-count');
      const selectedAvengers = formData.get('avengers-name');
      action('Form Submitted')({
        value: {
          selectedStones,
          selectedAvengers
        }
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
            @change=\${action('avengers select onchange')}
            @input=\${action('avengers select oninput')}
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select
            name="stone-count"
            placeholder="Select the count"
            label="How many Infinity Stones exist?"
            required
            @change=\${action('stones select onchange')}
            @input=\${action('stones select oninput')}
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  ...hideAllControls()
}`,...(K=(U=y.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Z,J,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const validateSelects = (form: HTMLFormElement, args: any): boolean => {
      const avengerSelect = form.querySelector('mdc-select[name="avengers-name"]') as Select;
      const stoneSelect = form.querySelector('mdc-select[name="stone-count"]') as Select;
      const avengerValue = avengerSelect.value;
      const stoneValue = stoneSelect.value;
      let valid = true;
      if (args.required && (!avengerValue || avengerValue === '')) {
        avengerSelect.setAttribute('help-text', 'Please select your favorite Avenger');
        avengerSelect.setAttribute('help-text-type', 'error');
        valid = false;
      } else {
        avengerSelect.setAttribute('help-text', 'Looks good!');
        avengerSelect.setAttribute('help-text-type', 'success');
      }
      if (args.required && (!stoneValue || stoneValue === '')) {
        stoneSelect.setAttribute('help-text', 'Please select the Infinity Stone count');
        stoneSelect.setAttribute('help-text-type', 'error');
        valid = false;
      } else {
        stoneSelect.setAttribute('help-text', 'Looks good!');
        stoneSelect.setAttribute('help-text-type', 'success');
      }
      return valid;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateSelects(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedStones = formData.get('stone-count');
      const selectedAvengers = formData.get('avengers-name');
      action('Form Submitted')({
        value: {
          selectedStones,
          selectedAvengers
        }
      });
    };
    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const avengerSelect = form.querySelector('mdc-select[name="avengers-name"]') as Select;
      const stoneSelect = form.querySelector('mdc-select[name="stone-count"]') as Select;
      avengerSelect.setAttribute('help-text', args['help-text'] || '');
      avengerSelect.setAttribute('help-text-type', args['help-text-type'] || 'default');
      stoneSelect.setAttribute('help-text', args['help-text'] || '');
      stoneSelect.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select
            name="stone-count"
            placeholder="Select the count"
            label="How many Infinity Stones exist?"
            required
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
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
    'help-text-type': 'default'
  },
  ...hideAllControls()
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,te;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 10
    }, (_, i) => html\`<mdc-option label="Option \${i + 1}"></mdc-option>\`);
    let extraOption: TemplateResult | null = null;
    setTimeout(() => {
      extraOption = html\`<mdc-option label="Delayed Option"></mdc-option>\`;
      const select = document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');
      if (select) {
        const option = document.createElement('mdc-option');
        option.setAttribute('label', 'Delayed Option');
        select.appendChild(option);
      }
    }, 2000);
    return wrapWithDiv(html\`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> \${options} \${extraOption} </mdc-selectlistbox>
      </mdc-select>
    \`);
  },
  argTypes: {
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  },
  ...hideAllControls()
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,le,ce;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const handleClick = () => {
      const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
      if (selectListbox) {
        const options = selectListbox.querySelectorAll('mdc-option');
        options.forEach((option, idx) => {
          if (idx === 0) {
            option.removeAttribute('selected');
          }
          if (idx === 1) {
            option.setAttribute('selected', '');
          }
        });
      }
    };
    const handleClickRemove = () => {
      const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
      if (selectListbox) {
        const options = selectListbox.querySelectorAll('mdc-option');
        options.forEach(option => {
          option.removeAttribute('selected');
        });
      }
    };
    return wrapWithDiv(html\`
      <mdc-button @click=\${handleClick}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=\${handleClickRemove} style="margin: 8px 0;">Remove Selected</mdc-button>
      <mdc-select
        label="Select an option"
        placeholder="Select an option"
        @change="\${action('onchange')}"
        @click="\${action('onclick')}"
        @input="\${action('oninput')}"
        @keydown="\${action('onkeydown')}"
        @focus="\${action('onfocus')}"
      >
        <mdc-selectlistbox>
          <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    \`);
  },
  ...hideAllControls()
}`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ne,ae,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const changeValidOption = () => {
      const select = document.querySelector('mdc-select[label="Select"]') as Select;
      if (select) {
        select.value = 'option3';
      }
    };
    const changeInvalidOption = () => {
      const select = document.querySelector('mdc-select[label="Select"]') as Select;
      if (select) {
        select.value = 'invalid-option';
      }
    };
    return html\` <mdc-button @click=\${changeValidOption}>Set value to Option 3</mdc-button>
      <mdc-button @click=\${changeInvalidOption} style="margin: 8px 0;">Set value to invalid value</mdc-button>
      <mdc-select label="Select" value="option2" placeholder="Select an Option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" value="option1"></mdc-option>
          <mdc-option label="Option 2" selected value="option2"></mdc-option>
          <mdc-option label="Option 3" value="option3"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>\`;
  },
  ...hideAllControls()
}`,...(ie=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ze=["Example","SelectWithSecondaryLabel","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithForm","SelectWithFormHelpTextValidation","SelectWithDynamicOptions","SelectWithChangingSelectedOption","SelectWithChangingValueAttribute"];export{p as Example,f as SelectWithChangingSelectedOption,A as SelectWithChangingValueAttribute,g as SelectWithDynamicOptions,y as SelectWithForm,S as SelectWithFormHelpTextValidation,b as SelectWithGroups,v as SelectWithIconOptions,h as SelectWithLongOptionText,u as SelectWithSecondaryLabel,x as SelectWithStates,Ze as __namedExportsOrder,Ke as default};
