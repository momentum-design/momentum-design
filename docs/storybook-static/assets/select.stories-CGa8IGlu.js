import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-wWhuAYN7.js";import{c as E,s as N}from"./commonArgTypes-BluK8w5L.js";import{h as B,a as l,d as Y}from"./utils-CO8B6ZcN.js";import"./index-BmHe-T6f.js";import{V as m}from"./formfieldwrapper.component-Bto_JnzL.js";import"./index-BOgvC6Hl.js";import"./index-Bka4ZclQ.js";import{P as G}from"./popover.component-D_fkT_SB.js";import"./v4-CQkTLCs1.js";import"./index-BDqKeC-3.js";import"./button.component-Cx4by9Nb.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-Cx7wvr8C.js";import"./button.utils-rNW36Ji7.js";import"./index-iIyc18AY.js";import"./iframe-ChHTGUyf.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-DWVZv5-U.js";import"./index-BrLJ_9IK.js";import"./index-ifxuJaG_.js";import"./if-defined-D5BV9-c0.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./listitem.component-18vOGq9d.js";import"./roles-BH_hBfTz.js";import"./index-5cASsYq0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./optgroup.constants-CwoRKCZY.js";import"./divider.constants-DyEGqhgz.js";const b=Object.values(m).filter(e=>e!=="priority"),s=e=>t`
  <div style="height: 20rem; width: 20rem;">${e}</div>
`,M=e=>s(t`
    <mdc-select
      @change="${o("onchange")}"
      @click="${o("onclick")}"
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
      name="${e.name}"
      placeholder="${e.placeholder}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
    >
      <mdc-option>London, UK</mdc-option>
      <mdc-option>Los Angeles, CA</mdc-option>
      <mdc-option>New York, NY</mdc-option>
      <mdc-option>Phoenix, AZ</mdc-option>
      <mdc-option>Seattle, WA</mdc-option>
    </mdc-select>
  `),Oe={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:M,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${b.map(e=>`'${e}'`).join(", ")}.`,options:b},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(G)},height:{control:"text"},...B(["id","value","validity","validation-message","willValidate","default"]),...E,...N}},n={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",height:"auto"}},i={render:()=>t`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
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
      </mdc-select>
    </div>
  `,...l()},c={render:()=>s(t`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-option>Red</mdc-option>
        <mdc-option>Yellow</mdc-option>
        <mdc-option
          toggletip-text="White and Black are the biggest colors on the spectrum"
          toggletip-placement="bottom"
        >
          White and Black are the biggest colors on the spectrum
        </mdc-option>
        <mdc-option>Green</mdc-option>
      </mdc-select>
    `),...l()},a={render:()=>s(t`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
        <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
        <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
        <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
        <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
      </mdc-select>
    `),...l()},r={render:()=>t`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${m.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-option value="six" selected>Six</mdc-option>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${m.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
      </mdc-select>
      <mdc-select
        help-text-type="${m.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...l()},d={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:e=>s(t`
      <mdc-select height="${e.height}" placeholder="${e.placeholder}" label="${e.label}">
        ${Array.from({length:1e3},(h,u)=>t`<mdc-option label="Option Label ${u+1}"></mdc-option>`)}
      </mdc-select>
    `),argTypes:{...Y(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])}},p={render:()=>t`
      <form @submit=${h=>{h.preventDefault();const R=new FormData(h.target).get("stone-count");o("Form Submitted")({value:R})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem;">
          <div style="width: 20rem;">
            <mdc-select
              name="stone-count"
              placeholder="Select the count"
              label="How many Infinity Stones exist?"
              required
            >
              <mdc-option value="two">Two</mdc-option>
              <mdc-option value="three">Three</mdc-option>
              <mdc-option value="four">Four</mdc-option>
              <mdc-option value="five">Five</mdc-option>
              <mdc-option value="six">Six</mdc-option>
            </mdc-select>
            <div style="display: flex; gap: 3rem; margin-top: 1rem;">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </div>
        </fieldset>
      </form>
    `,...l()};var g,x,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Headquarters location',
    required: true,
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label',
    height: 'auto'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,f,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
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
      </mdc-select>
    </div>
  \`,
  ...hideAllControls()
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var $,A,T;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-option>Red</mdc-option>
        <mdc-option>Yellow</mdc-option>
        <mdc-option
          toggletip-text="White and Black are the biggest colors on the spectrum"
          toggletip-placement="bottom"
        >
          White and Black are the biggest colors on the spectrum
        </mdc-option>
        <mdc-option>Green</mdc-option>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var w,I,W;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
        <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
        <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
        <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
        <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
      </mdc-select>
    \`),
  ...hideAllControls()
}`,...(W=(I=a.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var C,q,D;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="\${VALIDATION.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-option value="six" selected>Six</mdc-option>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="\${VALIDATION.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
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
}`,...(D=(q=r.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,k,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-select height="\${args.height}" placeholder="\${args.placeholder}" label="\${args.label}">
        \${Array.from({
    length: 1000
  }, (_, i) => html\`<mdc-option label="Option Label \${i + 1}"></mdc-option>\`)}
      </mdc-select>
    \`),
  argTypes: {
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  }
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var O,V,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
              <mdc-option value="two">Two</mdc-option>
              <mdc-option value="three">Three</mdc-option>
              <mdc-option value="four">Four</mdc-option>
              <mdc-option value="five">Five</mdc-option>
              <mdc-option value="six">Six</mdc-option>
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
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const Ve=["Example","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithFixedHeight","SelectWithForm"];export{n as Example,d as SelectWithFixedHeight,p as SelectWithForm,i as SelectWithGroups,a as SelectWithIconOptions,c as SelectWithLongOptionText,r as SelectWithStates,Ve as __namedExportsOrder,Oe as default};
