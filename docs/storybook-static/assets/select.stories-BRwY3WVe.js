import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-CEmhyiKJ.js";import{c as N,s as E}from"./commonArgTypes-BluK8w5L.js";import{h as B,a as l,d as Y}from"./utils-CO8B6ZcN.js";import"./index-BKk1AD_8.js";import{V as m}from"./formfieldwrapper.component-5n2-mkV5.js";import"./index-CILQw29s.js";import"./index-D01LMnMs.js";import"./v4-CQkTLCs1.js";import"./index-DKrr3WK1.js";import"./iframe-CbenrOHq.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-CcXofQbA.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-BTZpf0x2.js";import"./popover.component-DCc9qDH7.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./index-BW3CPo0p.js";import"./button.component-DuJ_hCOI.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./query-DXShiZ7f.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-CuA-OPmH.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./v4-CmTdKEVZ.js";import"./optgroup.constants-CwoRKCZY.js";import"./listitem.component-qFhQUFkA.js";import"./roles-DMFGbP5t.js";const b=Object.values(m).filter(e=>e!=="priority"),s=e=>t`
  <div style="height: 20rem; width: 20rem;">${e}</div>
`,G=e=>s(t`
  <mdc-select
    @change="${o("onchange")}"
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @focus="${o("onfocus")}"
    label="${e.label}"
    required-label="${e["required-label"]}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    height="${e.height}"
    data-aria-label="${e["data-aria-label"]}"
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
`),Fe={title:"Components/select",tags:["autodocs"],component:"mdc-select",render:G,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},"required-label":{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${b.map(e=>`'${e}'`).join(", ")}.`,options:b},"data-aria-label":{control:"text"},height:{control:"text"},...B(["id","value","validity","validation-message","willValidate","default","label-info"]),...N,...E}},i={args:{label:"Headquarters location","required-label":"required",placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",height:"auto"}},n={render:()=>t`
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
  `,...l()},a={render:()=>s(t`
    <mdc-select placeholder="Select a color" label="Select one color">
      <mdc-option>Red</mdc-option>
      <mdc-option>Yellow</mdc-option>
      <mdc-option
        tooltip-text="White and Black are the biggest colors on the spectrum"
        tooltip-placement="bottom"
      >
        White and Black are the biggest colors on the spectrum
      </mdc-option>
      <mdc-option>Green</mdc-option>
    </mdc-select>
  `),...l()},r={render:()=>s(t`
    <mdc-select placeholder="Select an option" label="You are in a meeting">
      <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
      <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
      <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
      <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
      <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
    </mdc-select>
  `),...l()},c={render:()=>t`
  <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
    <mdc-select
      help-text-type="${m.SUCCESS}"
      help-text="The correct number of Infinity Stones has been selected."
      label="How many Infinity Stones exist?"
      required-label="required"
    >
      <mdc-option value="six" selected>Six</mdc-option>
    </mdc-select>
    <mdc-select
      help-text="Selecting this number may cause a security risk because it is not properly setup."
      help-text-type="${m.WARNING}"
      label="Select phone number"
      required-label="required"
    >
      <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
    </mdc-select>
    <mdc-select
      help-text-type="${m.ERROR}"
      help-text="You must select the total number of Infinity Stones."
      label="How many Infinity Stones exist?"
      placeholder="Select the total number of Infinity Stones"
      required-label="required"
    ></mdc-select>
    <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
    <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
  </div>
  `,...l()},d={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:e=>s(t`
    <mdc-select height="${e.height}" placeholder="${e.placeholder}" label="${e.label}">
      ${Array.from({length:1e3},(u,h)=>t`<mdc-option label="Option Label ${h+1}"></mdc-option>`)}
    </mdc-select>
  `),argTypes:{...Y(["readonly","name","data-aria-label","disabled","required-label","help-text-type","help-text"])}},p={render:()=>t`
      <form @submit=${u=>{u.preventDefault();const R=new FormData(u.target).get("stone-count");o("Form Submitted")({value:R})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem;">
          <div style="width: 20rem;">
            <mdc-select
              name="stone-count"
              placeholder="Select the count"
              label="How many Infinity Stones exist?"
              required-label="required"
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
    `,...l()};var y,x,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Headquarters location',
    'required-label': 'required',
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label',
    height: 'auto'
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,v,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var $,A,q;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-select placeholder="Select a color" label="Select one color">
      <mdc-option>Red</mdc-option>
      <mdc-option>Yellow</mdc-option>
      <mdc-option
        tooltip-text="White and Black are the biggest colors on the spectrum"
        tooltip-placement="bottom"
      >
        White and Black are the biggest colors on the spectrum
      </mdc-option>
      <mdc-option>Green</mdc-option>
    </mdc-select>
  \`),
  ...hideAllControls()
}`,...(q=(A=a.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var w,T,I;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(T=r.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,C,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
  <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
    <mdc-select
      help-text-type="\${VALIDATION.SUCCESS}"
      help-text="The correct number of Infinity Stones has been selected."
      label="How many Infinity Stones exist?"
      required-label="required"
    >
      <mdc-option value="six" selected>Six</mdc-option>
    </mdc-select>
    <mdc-select
      help-text="Selecting this number may cause a security risk because it is not properly setup."
      help-text-type="\${VALIDATION.WARNING}"
      label="Select phone number"
      required-label="required"
    >
      <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
    </mdc-select>
    <mdc-select
      help-text-type="\${VALIDATION.ERROR}"
      help-text="You must select the total number of Infinity Stones."
      label="How many Infinity Stones exist?"
      placeholder="Select the total number of Infinity Stones"
      required-label="required"
    ></mdc-select>
    <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
    <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
  </div>
  \`,
  ...hideAllControls()
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,F,L;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required-label', 'help-text-type', 'help-text'])
  }
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,H,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
              required-label="required"
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
}`,...(V=(H=p.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const Le=["Example","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithFixedHeight","SelectWithForm"];export{i as Example,d as SelectWithFixedHeight,p as SelectWithForm,n as SelectWithGroups,r as SelectWithIconOptions,a as SelectWithLongOptionText,c as SelectWithStates,Le as __namedExportsOrder,Fe as default};
