import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-BTjn2Fn2.js";import{c as U,s as K}from"./commonArgTypes-BluK8w5L.js";import{h as Z,a as n,d as j}from"./utils-CF1irry3.js";import"./index-CKEKUQ7R.js";import{V as y}from"./formfieldwrapper.component-D6q8AeiS.js";import"./index-DuNd2fvu.js";import"./index-B0noCIMe.js";import{P as J}from"./popover.component-C7-8N8j7.js";import"./v4-CQkTLCs1.js";import"./index-cUhONiaL.js";import"./button.component-DLvLGT3A.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-q2YakOka.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-DzZmPdpp.js";import"./iframe-BCE2ya5E.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-CsFuADSG.js";import"./index-BrLJ_9IK.js";import"./index-BCXcxsay.js";import"./if-defined-D5BV9-c0.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./listitem.component-B4xe0EG5.js";import"./roles-BH_hBfTz.js";import"./index-DtB-8-Xs.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./divider.constants-DyEGqhgz.js";const g=Object.values(y).filter(e=>e!=="priority"),i=e=>t`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${e}
  </div>
`,Q=e=>i(t`
    <mdc-select
      @change="${o("onchange")}"
      @click="${o("onclick")}"
      @input="${o("oninput")}"
      @keydown="${o("onkeydown")}"
      @focus="${o("onfocus")}"
      label="${e.label}"
      ?required="${e.required}"
      help-text-type="${e["help-text-type"]}"
      help-text="${e["help-text"]}"
      height="${e.height}"
      data-aria-label="${e["data-aria-label"]}"
      toggletip-text="${e["toggletip-text"]}"
      toggletip-placement="${e["toggletip-placement"]}"
      info-icon-aria-label="${e["info-icon-aria-label"]}"
      placement="${e.placement}"
      name="${e.name}"
      placeholder="${e.placeholder}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      ?readonly="${e.readonly}"
    >
      <mdc-selectlistbox>
        <mdc-option value="london" label="London, UK"></mdc-option>
        <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
        <mdc-option value="newyork" label="New York, NY"></mdc-option>
        <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
        <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
      </mdc-selectlistbox>
    </mdc-select>
  `),Ye={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:Q,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${g.map(e=>`'${e}'`).join(", ")}.`,options:g},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(J)},height:{control:"text"},placement:{control:"select",options:["bottom-start","top-start"]},"soft-disabled":{control:"boolean"},...Z(["id","value","validity","validation-message","willValidate","default"]),...U,...K}},d={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",height:"auto",placement:"bottom-start"}},r={render:()=>i(t`
      <mdc-select label="Select an option" placeholder="Select an option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},s={render:()=>t`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-selectlistbox>
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
        </mdc-selectlistbox>
      </mdc-select>
    </div>
  `,...n()},p={render:()=>i(t`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow"></mdc-option>
          <mdc-option
            label="White and Black are the biggest colors on the spectrum"
            tooltip-text="White and Black are the biggest colors on the spectrum"
            tooltip-placement="bottom"
          ></mdc-option>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},m={render:()=>i(t`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
          <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
          <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
          <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
          <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},b={render:()=>t`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${y.SUCCESS}"
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
        help-text-type="${y.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${y.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...n()},u={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:e=>i(t`
      <mdc-select height="${e.height}" placeholder="${e.placeholder}" label="${e.label}">
        <mdc-selectlistbox>
          ${Array.from({length:1e3},(c,l)=>t`<mdc-option label="Option Label ${l+1}"></mdc-option>`)}
        </mdc-selectlistbox>
      </mdc-select>
    `),argTypes:{...j(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])}},h={render:()=>t`
      <form @submit=${c=>{c.preventDefault();const l=new FormData(c.target),a=l.get("stone-count"),z=l.get("avengers-name");o("Form Submitted")({value:{selectedStones:a,selectedAvengers:z}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
            @change=${o("avengers select onchange")}
            @input=${o("avengers select oninput")}
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
            @change=${o("stones select onchange")}
            @input=${o("stones select oninput")}
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
    `,...n()},x={render:()=>{const e=Array.from({length:10},(l,a)=>t`<mdc-option label="Option ${a+1}"></mdc-option>`);let c=null;return setTimeout(()=>{c=t`<mdc-option label="Delayed Option"></mdc-option>`;const l=document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');if(l){const a=document.createElement("mdc-option");a.setAttribute("label","Delayed Option"),l.appendChild(a)}},2e3),i(t`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${e} ${c} </mdc-selectlistbox>
      </mdc-select>
    `)},argTypes:{...j(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])},...n()};var S,v,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Headquarters location',
    required: true,
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label',
    height: 'auto',
    placement: 'bottom-start'
  }
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var $,A,w;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select label="Select an option" placeholder="Select an option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(w=(A=r.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var O,T,W;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-selectlistbox>
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
        </mdc-selectlistbox>
      </mdc-select>
    </div>
  \`,
  ...hideAllControls()
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var k,L,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow"></mdc-option>
          <mdc-option
            label="White and Black are the biggest colors on the spectrum"
            tooltip-text="White and Black are the biggest colors on the spectrum"
            tooltip-placement="bottom"
          ></mdc-option>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var I,D,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
          <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
          <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
          <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
          <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var F,H,E;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(H=b.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var R,N,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-select height="\${args.height}" placeholder="\${args.placeholder}" label="\${args.label}">
        <mdc-selectlistbox>
          \${Array.from({
    length: 1000
  }, (_, i) => html\`<mdc-option label="Option Label \${i + 1}"></mdc-option>\`)}
        </mdc-selectlistbox>
      </mdc-select>
    \`),
  argTypes: {
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  }
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var B,M,Y;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Y=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var _,G,P;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const _e=["Example","SelectWithSecondaryLabel","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithFixedHeight","SelectWithForm","SelectWithDynamicOptions"];export{d as Example,x as SelectWithDynamicOptions,u as SelectWithFixedHeight,h as SelectWithForm,s as SelectWithGroups,m as SelectWithIconOptions,p as SelectWithLongOptionText,r as SelectWithSecondaryLabel,b as SelectWithStates,_e as __namedExportsOrder,Ye as default};
