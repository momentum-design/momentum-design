import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as o}from"./lit-element-D5KKan5q.js";import"./index-C0lQzu-d.js";import{c as ee,s as te}from"./commonArgTypes-BluK8w5L.js";import{a as oe,h as n,d as X}from"./utils-CFOyPOhY.js";import"./index-BWIpxT1l.js";import{V as g}from"./formfieldwrapper.component-C-SgLT80.js";import"./index-oD85tVyW.js";import"./index-CkcrWLOl.js";import{a as le}from"./popover.component-BeJYT0F1.js";import"./v4-CQkTLCs1.js";import"./index-OoZ5KnDV.js";import"./button.component-DvOKP7op.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./roles-DU0xbrD4.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-D38jSS5Q.js";import"./iframe-ie6jbfXq.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-BZuoC9MH.js";import"./index-riA1qVWu.js";import"./index-CfZlUfVJ.js";import"./if-defined-D5BV9-c0.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./FormInternalsMixin-BIoSiX4k.js";import"./divider.constants-DBMTjDho.js";import"./index-DYRxW7oy.js";import"./listitem.component-CqDx-T5W.js";const $=Object.values(g).filter(e=>e!=="priority"),i=e=>o`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${e}
  </div>
`,ce=e=>i(o`
    <mdc-select
      @change="${t("onchange")}"
      @click="${t("onclick")}"
      @input="${t("oninput")}"
      @keydown="${t("onkeydown")}"
      @focus="${t("onfocus")}"
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
  `),Ke={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:ce,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${$.map(e=>`'${e}'`).join(", ")}.`,options:$},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(le)},height:{control:"text"},placement:{control:"select",options:["bottom-start","top-start"]},"soft-disabled":{control:"boolean"},...oe(["id","value","validity","validation-message","willValidate","default"]),...ee,...te}},r={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",height:"auto",placement:"bottom-start"}},s={render:()=>i(o`
      <mdc-select label="Select an option" placeholder="Select an option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},p={render:()=>o`
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
  `,...n()},m={render:()=>i(o`
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
    `),...n()},b={render:()=>i(o`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
          <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
          <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
          <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
          <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},u={render:()=>o`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${g.SUCCESS}"
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
        help-text-type="${g.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${g.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...n()},h={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:e=>i(o`
      <mdc-select height="${e.height}" placeholder="${e.placeholder}" label="${e.label}">
        <mdc-selectlistbox>
          ${Array.from({length:1e3},(a,l)=>o`<mdc-option label="Option Label ${l+1}"></mdc-option>`)}
        </mdc-selectlistbox>
      </mdc-select>
    `),argTypes:{...X(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])}},x={render:()=>o`
      <form @submit=${a=>{a.preventDefault();const l=new FormData(a.target),c=l.get("stone-count"),v=l.get("avengers-name");t("Form Submitted")({value:{selectedStones:c,selectedAvengers:v}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
            @change=${t("avengers select onchange")}
            @input=${t("avengers select oninput")}
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
            @change=${t("stones select onchange")}
            @input=${t("stones select oninput")}
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
    `,...n()},y={render:()=>{const e=Array.from({length:10},(l,c)=>o`<mdc-option label="Option ${c+1}"></mdc-option>`);let a=null;return setTimeout(()=>{a=o`<mdc-option label="Delayed Option"></mdc-option>`;const l=document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');if(l){const c=document.createElement("mdc-option");c.setAttribute("label","Delayed Option"),l.appendChild(c)}},2e3),i(o`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${e} ${a} </mdc-selectlistbox>
      </mdc-select>
    `)},argTypes:{...X(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])},...n()},S={render:()=>i(o`
      <mdc-button @click=${()=>{const l=document.querySelector('mdc-select[label="Select an option"]'),c=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');c&&(c.querySelectorAll("mdc-option").forEach((d,f)=>{f===0&&d.removeAttribute("selected"),f===1&&d.setAttribute("selected","")}),l.updateState())}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const l=document.querySelector('mdc-select[label="Select an option"]'),c=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');c&&(c.querySelectorAll("mdc-option").forEach(d=>{d.removeAttribute("selected")}),l.updateState())}}>Remove Selected</mdc-button>
      <mdc-select
        label="Select an option"
        placeholder="Select an option"
        @change="${t("onchange")}"
        @click="${t("onclick")}"
        @input="${t("oninput")}"
        @keydown="${t("onkeydown")}"
        @focus="${t("onfocus")}"
      >
        <mdc-selectlistbox>
          <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()};var A,k,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var O,L,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(L=s.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var q,T,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var D,I,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,F,H;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,V,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(V=u.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var M,Y,_;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var G,j,z;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(j=x.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,U,K;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(U=y.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Z,J,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const handleClick = () => {
      const select = document.querySelector('mdc-select[label="Select an option"]') as Select;
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
        select.updateState();
      }
    };
    const handleClickRemove = () => {
      const select = document.querySelector('mdc-select[label="Select an option"]') as Select;
      const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
      if (selectListbox) {
        const options = selectListbox.querySelectorAll('mdc-option');
        options.forEach(option => {
          option.removeAttribute('selected');
        });
        select.updateState();
      }
    };
    return wrapWithDiv(html\`
      <mdc-button @click=\${handleClick}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=\${handleClickRemove}>Remove Selected</mdc-button>
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ze=["Example","SelectWithSecondaryLabel","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithFixedHeight","SelectWithForm","SelectWithDynamicOptions","SelectWithChangingSelectedAfterMount"];export{r as Example,S as SelectWithChangingSelectedAfterMount,y as SelectWithDynamicOptions,h as SelectWithFixedHeight,x as SelectWithForm,p as SelectWithGroups,b as SelectWithIconOptions,m as SelectWithLongOptionText,s as SelectWithSecondaryLabel,u as SelectWithStates,Ze as __namedExportsOrder,Ke as default};
