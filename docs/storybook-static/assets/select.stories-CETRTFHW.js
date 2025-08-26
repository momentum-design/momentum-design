import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as l}from"./lit-element-D5KKan5q.js";import"./index-C6IEQELv.js";import{c as K,s as Z}from"./commonArgTypes-BluK8w5L.js";import{a as J,t as Q,h as n,d as X}from"./utils-CFOyPOhY.js";import"./index-gmOmAGHl.js";import{V as S}from"./formfieldwrapper.component-BfkD1w96.js";import"./index-DXYAP74P.js";import"./index-BhV_5_AP.js";import{a as ee}from"./popover.component-CWSuSUni.js";import"./v4-CQkTLCs1.js";import"./index-Digwd7Sx.js";import"./button.component-AY6DUPps.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-B6i80K-M.js";import"./iframe-C41mgFyj.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-D7Wskvdp.js";import"./index-DeEenWCE.js";import"./index-D0Kfa_EE.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./divider.constants-DXWnBz1m.js";import"./index-DM9rY9pk.js";import"./listitem.component-moTyXfIR.js";const f=Object.values(S).filter(e=>e!=="priority"),i=e=>l`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${e}
  </div>
`,te=e=>i(l`
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
      boundary="${e.boundary}"
      strategy="${e.strategy}"
      popover-z-index="${e["popover-z-index"]}"
      backdrop-append-to="${e["backdrop-append-to"]}"
    >
      <mdc-selectlistbox>
        <mdc-option value="london" label="London, UK"></mdc-option>
        <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
        <mdc-option value="newyork" label="New York, NY"></mdc-option>
        <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
        <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
      </mdc-selectlistbox>
    </mdc-select>
  `),Pe={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:te,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${f.map(e=>`'${e}'`).join(", ")}.`,options:f},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(ee)},placement:{control:"select",options:["bottom-start","top-start"]},"soft-disabled":{control:"boolean"},...J(["id","value","validity","validation-message","willValidate","default"]),...Q(["--mdc-select-background-color","--mdc-select-background-color-hover","--mdc-select-background-color-active","--mdc-select-background-color-disabled","--mdc-select-text-color","--mdc-select-text-color-selected","--mdc-select-text-color-disabled","--mdc-select-border-color","--mdc-select-border-color-disabled","--mdc-select-border-color-success","--mdc-select-border-color-warning","--mdc-select-border-color-error","--mdc-select-width","--mdc-select-listbox-height","--mdc-select-listbox-width"]),...K,...Z}},r={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",placement:"bottom-start"}},s={render:()=>i(l`
      <mdc-select label="Select an option" placeholder="Select an option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},m={render:()=>l`
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
  `,...n()},p={render:()=>i(l`
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
    `),...n()},b={render:()=>i(l`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
          <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
          <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
          <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
          <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...n()},u={render:()=>l`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${S.SUCCESS}"
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
        help-text-type="${S.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${S.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...n()},h={render:()=>l`
      <form @submit=${a=>{a.preventDefault();const c=new FormData(a.target),o=c.get("stone-count"),v=c.get("avengers-name");t("Form Submitted")({value:{selectedStones:o,selectedAvengers:v}})}}>
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
    `,...n()},x={render:()=>{const e=Array.from({length:10},(c,o)=>l`<mdc-option label="Option ${o+1}"></mdc-option>`);let a=null;return setTimeout(()=>{a=l`<mdc-option label="Delayed Option"></mdc-option>`;const c=document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');if(c){const o=document.createElement("mdc-option");o.setAttribute("label","Delayed Option"),c.appendChild(o)}},2e3),i(l`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${e} ${a} </mdc-selectlistbox>
      </mdc-select>
    `)},argTypes:{...X(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])},...n()},y={render:()=>i(l`
      <mdc-button @click=${()=>{const c=document.querySelector('mdc-select[label="Select an option"]'),o=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');o&&(o.querySelectorAll("mdc-option").forEach((d,g)=>{g===0&&d.removeAttribute("selected"),g===1&&d.setAttribute("selected","")}),c.updateState())}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const c=document.querySelector('mdc-select[label="Select an option"]'),o=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');o&&(o.querySelectorAll("mdc-option").forEach(d=>{d.removeAttribute("selected")}),c.updateState())}}>Remove Selected</mdc-button>
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
    `),...n()};var $,k,A;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Headquarters location',
    required: true,
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label',
    placement: 'bottom-start'
  }
}`,...(A=(k=r.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var w,O,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(O=s.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var C,q,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(q=m.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var W,I,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var R,E,F;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var H,N,V;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var z,G,_;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(G=x.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var j,P,U;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(P=y.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const Ue=["Example","SelectWithSecondaryLabel","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithForm","SelectWithDynamicOptions","SelectWithChangingSelectedAfterMount"];export{r as Example,y as SelectWithChangingSelectedAfterMount,x as SelectWithDynamicOptions,h as SelectWithForm,m as SelectWithGroups,b as SelectWithIconOptions,p as SelectWithLongOptionText,s as SelectWithSecondaryLabel,u as SelectWithStates,Ue as __namedExportsOrder,Pe as default};
