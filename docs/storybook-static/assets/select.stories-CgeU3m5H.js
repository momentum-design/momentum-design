import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-ZLT-cokX.js";import{c as G,s as M}from"./commonArgTypes-BluK8w5L.js";import{h as P,a as c,d as _}from"./utils-CF1irry3.js";import"./index-C4TNBl9D.js";import{V as x}from"./formfieldwrapper.component-Bto_JnzL.js";import"./index-BOgvC6Hl.js";import"./index-CopjEffM.js";import{P as j}from"./popover.component-q7gOo8Yi.js";import"./v4-CQkTLCs1.js";import"./index-Ca0dCGZ7.js";import"./button.component-Cx4by9Nb.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-Cx7wvr8C.js";import"./button.utils-rNW36Ji7.js";import"./index-BE-lPGGb.js";import"./iframe-Blkudr0T.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-BNzWzLzB.js";import"./index-BrLJ_9IK.js";import"./index-BzzPYPpO.js";import"./if-defined-D5BV9-c0.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./live-Cwq7YsO4.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./listitem.component-CBHzYYeL.js";import"./roles-BH_hBfTz.js";import"./index-D2NeUKIj.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./optgroup.constants-CwoRKCZY.js";import"./divider.constants-DyEGqhgz.js";const y=Object.values(x).filter(e=>e!=="priority"),a=e=>t`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${e}
  </div>
`,z=e=>a(t`
    <mdc-select
      @change="${n("onchange")}"
      @click="${n("onclick")}"
      @input="${n("oninput")}"
      @keydown="${n("onkeydown")}"
      @focus="${n("onfocus")}"
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
        <mdc-option selected value="london">London, UK</mdc-option>
        <mdc-option value="losangeles">Los Angeles, CA</mdc-option>
        <mdc-option value="newyork">New York, NY</mdc-option>
        <mdc-option value="phoenix">Phoenix, AZ</mdc-option>
        <mdc-option value="seattle">Seattle, WA</mdc-option>
      </mdc-selectlistbox>
    </mdc-select>
  `),Ye={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:z,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${y.map(e=>`'${e}'`).join(", ")}.`,options:y},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(j)},height:{control:"text"},placement:{control:"select",options:["bottom-start","top-start"]},"soft-disabled":{control:"boolean"},...P(["id","value","validity","validation-message","willValidate","default"]),...G,...M}},r={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",height:"auto",placement:"bottom-start"}},d={render:()=>t`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-selectlistbox>
          <mdc-optgroup label="Fruit">
            <mdc-option value="apple">Apples</mdc-option>
            <mdc-option value="banana">Bananas</mdc-option>
            <mdc-option value="cherry">Cherries</mdc-option>
            <mdc-option value="damson">Damsons</mdc-option>
          </mdc-optgroup>
          <mdc-divider></mdc-divider>
          <mdc-optgroup label="Vegetables">
            <mdc-option value="artichoke">Artichokes</mdc-option>
            <mdc-option value="broccoli">Broccoli</mdc-option>
            <mdc-option value="cabbage">Cabbages</mdc-option>
          </mdc-optgroup>
          <mdc-divider></mdc-divider>
          <mdc-optgroup label="Fish">
            <mdc-option value="tuna">Tuna</mdc-option>
            <mdc-option value="salmon">Salmon</mdc-option>
          </mdc-optgroup>
        </mdc-selectlistbox>
      </mdc-select>
    </div>
  `,...c()},s={render:()=>a(t`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option>Red</mdc-option>
          <mdc-option>Yellow</mdc-option>
          <mdc-option
            toggletip-text="White and Black are the biggest colors on the spectrum"
            toggletip-placement="bottom"
          >
            White and Black are the biggest colors on the spectrum
          </mdc-option>
          <mdc-option>Green</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...c()},p={render:()=>a(t`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
          <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
          <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
          <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
          <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...c()},m={render:()=>t`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${x.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="six" selected>Six</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${x.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${x.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...c()},u={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:e=>a(t`
      <mdc-select height="${e.height}" placeholder="${e.placeholder}" label="${e.label}">
        <mdc-selectlistbox>
          ${Array.from({length:1e3},(o,l)=>t`<mdc-option label="Option Label ${l+1}"></mdc-option>`)}
        </mdc-selectlistbox>
      </mdc-select>
    `),argTypes:{..._(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])}},b={render:()=>t`
      <form @submit=${o=>{o.preventDefault();const i=new FormData(o.target).get("stone-count");n("Form Submitted")({value:i})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem;">
          <div style="width: 20rem;">
            <mdc-select
              name="stone-count"
              placeholder="Select the count"
              label="How many Infinity Stones exist?"
              required
            >
              <mdc-selectlistbox>
                <mdc-option value="two">Two</mdc-option>
                <mdc-option value="three">Three</mdc-option>
                <mdc-option value="four">Four</mdc-option>
                <mdc-option value="five">Five</mdc-option>
                <mdc-option value="six">Six</mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <div style="display: flex; gap: 3rem; margin-top: 1rem;">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </div>
        </fieldset>
      </form>
    `,...c()},h={render:()=>{const e=Array.from({length:10},(l,i)=>t`<mdc-option label="Option ${i+1}"></mdc-option>`);let o=null;return setTimeout(()=>{o=t`<mdc-option label="Delayed Option"></mdc-option>`;const l=document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');if(l){const i=document.createElement("mdc-option");i.setAttribute("label","Delayed Option"),l.appendChild(i)}},2e3),a(t`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${e} ${o} </mdc-selectlistbox>
      </mdc-select>
    `)},argTypes:{..._(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])},...c()};var g,S,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,$,A;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-selectlistbox>
          <mdc-optgroup label="Fruit">
            <mdc-option value="apple">Apples</mdc-option>
            <mdc-option value="banana">Bananas</mdc-option>
            <mdc-option value="cherry">Cherries</mdc-option>
            <mdc-option value="damson">Damsons</mdc-option>
          </mdc-optgroup>
          <mdc-divider></mdc-divider>
          <mdc-optgroup label="Vegetables">
            <mdc-option value="artichoke">Artichokes</mdc-option>
            <mdc-option value="broccoli">Broccoli</mdc-option>
            <mdc-option value="cabbage">Cabbages</mdc-option>
          </mdc-optgroup>
          <mdc-divider></mdc-divider>
          <mdc-optgroup label="Fish">
            <mdc-option value="tuna">Tuna</mdc-option>
            <mdc-option value="salmon">Salmon</mdc-option>
          </mdc-optgroup>
        </mdc-selectlistbox>
      </mdc-select>
    </div>
  \`,
  ...hideAllControls()
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var T,w,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option>Red</mdc-option>
          <mdc-option>Yellow</mdc-option>
          <mdc-option
            toggletip-text="White and Black are the biggest colors on the spectrum"
            toggletip-placement="bottom"
          >
            White and Black are the biggest colors on the spectrum
          </mdc-option>
          <mdc-option>Green</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(O=(w=s.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var W,D,I;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
          <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
          <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
          <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
          <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,q,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="\${VALIDATION.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="six" selected>Six</mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="\${VALIDATION.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
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
}`,...(k=(q=m.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var L,F,E;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var R,V,H;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('stone-count');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem;">
          <div style="width: 20rem;">
            <mdc-select
              name="stone-count"
              placeholder="Select the count"
              label="How many Infinity Stones exist?"
              required
            >
              <mdc-selectlistbox>
                <mdc-option value="two">Two</mdc-option>
                <mdc-option value="three">Three</mdc-option>
                <mdc-option value="four">Four</mdc-option>
                <mdc-option value="five">Five</mdc-option>
                <mdc-option value="six">Six</mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <div style="display: flex; gap: 3rem; margin-top: 1rem;">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </div>
        </fieldset>
      </form>
    \`;
  },
  ...hideAllControls()
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var N,B,Y;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Y=(B=h.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};const _e=["Example","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithFixedHeight","SelectWithForm","SelectWithDynamicOptions"];export{r as Example,h as SelectWithDynamicOptions,u as SelectWithFixedHeight,b as SelectWithForm,d as SelectWithGroups,p as SelectWithIconOptions,s as SelectWithLongOptionText,m as SelectWithStates,_e as __namedExportsOrder,Ye as default};
