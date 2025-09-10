import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-CG1cJd2w.js";import{c as le,s as ce}from"./commonArgTypes-BluK8w5L.js";import{a as ne,t as ae,h as d,d as ie}from"./utils-CFOyPOhY.js";import"./index-BPyWq0_g.js";import{V as w}from"./formfieldwrapper.component-DfjqvCUn.js";import"./index-B2pabD1r.js";import"./index-Bk15WSP7.js";import"./index-Dp2YoXFx.js";import{a as re}from"./popover.component-BYKb63Rn.js";import"./v4-CQkTLCs1.js";import"./index-CH7FEtyX.js";import"./button.component-DPkHVNTO.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-1GEifFmP.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-CFNAAaRi.js";import"./iframe-CDyTw2Lr.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-C8T-tKQU.js";import"./index-D2VIkDCb.js";import"./index-CLWvHQGP.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./divider.constants-DXWnBz1m.js";import"./listitem.component-B3497azE.js";const q=Object.values(w).filter(e=>e!=="priority"),m=e=>n`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: flex-start;">
    ${e}
  </div>
`,de=e=>m(n`
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
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-selectlistbox>
        <mdc-option value="london" label="London, UK"></mdc-option>
        <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
        <mdc-option value="newyork" label="New York, NY"></mdc-option>
        <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
        <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
      </mdc-selectlistbox>
    </mdc-select>
  `),tt={title:"Components/select/select",tags:["autodocs"],component:"mdc-select",render:de,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${q.map(e=>`'${e}'`).join(", ")}.`,options:q},"info-icon-aria-label":{control:"text"},"data-aria-label":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(re)},"auto-focus-on-mount":{control:"boolean"},placement:{control:"select",options:["bottom-start","top-start"]},"soft-disabled":{control:"boolean"},...ne(["id","value","validity","validation-message","willValidate","default"]),...ae(["--mdc-select-background-color","--mdc-select-background-color-hover","--mdc-select-background-color-active","--mdc-select-background-color-disabled","--mdc-select-text-color","--mdc-select-text-color-selected","--mdc-select-text-color-disabled","--mdc-select-border-color","--mdc-select-border-color-disabled","--mdc-select-border-color-success","--mdc-select-border-color-warning","--mdc-select-border-color-error","--mdc-select-width","--mdc-select-listbox-height","--mdc-select-listbox-width"]),...le,...ce}},u={args:{label:"Headquarters location",required:!0,placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label",placement:"bottom-start"}},b={render:()=>m(n`
      <mdc-select label="Select an option" placeholder="Select an option">
        <mdc-selectlistbox>
          <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...d()},h={render:()=>n`
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
  `,...d()},v={render:()=>m(n`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow" id="trigger-option"></mdc-option>
          <mdc-option id="option-1" label="White and Black are the biggest colors on the spectrum"></mdc-option>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-tooltip triggerid="option-1" show-arrow>
        White and Black are the biggest colors on the spectrum
      </mdc-tooltip>
    `),...d()},x={render:()=>m(n`
      <mdc-select placeholder="Select an option" label="You are in a meeting">
        <mdc-selectlistbox>
          <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
          <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
          <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
          <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
          <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `),...d()},S={render:()=>n`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${w.SUCCESS}"
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
        help-text-type="${w.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${w.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,...d()},y={render:()=>n`
      <form @submit=${s=>{s.preventDefault();const a=new FormData(s.target),l=a.get("stone-count"),i=a.get("avengers-name");t("Form Submitted")({value:{selectedStones:l,selectedAvengers:i}})}}>
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
    `,...d()},g={render:e=>{const s=(i,c)=>{const o=i.querySelector('mdc-select[name="avengers-name"]'),r=i.querySelector('mdc-select[name="stone-count"]'),p=o.value,$=r.value;let k=!0;return c.required&&(!p||p==="")?(o.setAttribute("help-text","Please select your favorite Avenger"),o.setAttribute("help-text-type","error"),k=!1):(o.setAttribute("help-text","Looks good!"),o.setAttribute("help-text-type","success")),c.required&&(!$||$==="")?(r.setAttribute("help-text","Please select the Infinity Stone count"),r.setAttribute("help-text-type","error"),k=!1):(r.setAttribute("help-text","Looks good!"),r.setAttribute("help-text-type","success")),k};return n`
      <form @submit=${i=>{i.preventDefault();const c=i.target;if(!s(c,e))return;const o=new FormData(c),r=o.get("stone-count"),p=o.get("avengers-name");t("Form Submitted")({value:{selectedStones:r,selectedAvengers:p}})}} @reset=${i=>{const c=i.target,o=c.querySelector('mdc-select[name="avengers-name"]'),r=c.querySelector('mdc-select[name="stone-count"]');o.setAttribute("help-text",e["help-text"]||""),o.setAttribute("help-text-type",e["help-text-type"]||"default"),r.setAttribute("help-text",e["help-text"]||""),r.setAttribute("help-text-type",e["help-text-type"]||"default")}} novalidate>
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
    `},args:{required:!0,"help-text":"","help-text-type":"default"},...d()},f={render:()=>{const e=Array.from({length:10},(a,l)=>n`<mdc-option label="Option ${l+1}"></mdc-option>`);let s=null;return setTimeout(()=>{s=n`<mdc-option label="Delayed Option"></mdc-option>`;const a=document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');if(a){const l=document.createElement("mdc-option");l.setAttribute("label","Delayed Option"),a.appendChild(l)}},2e3),m(n`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${e} ${s} </mdc-selectlistbox>
      </mdc-select>
    `)},argTypes:{...ie(["readonly","name","data-aria-label","disabled","required","help-text-type","help-text"])},...d()},A={render:()=>m(n`
      <mdc-button @click=${()=>{const a=document.querySelector('mdc-select[label="Select an option"]'),l=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');l&&(l.querySelectorAll("mdc-option").forEach((c,o)=>{o===0&&c.removeAttribute("selected"),o===1&&c.setAttribute("selected","")}),a.updateState())}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const a=document.querySelector('mdc-select[label="Select an option"]'),l=document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');l&&(l.querySelectorAll("mdc-option").forEach(c=>{c.removeAttribute("selected")}),a.updateState())}}>Remove Selected</mdc-button>
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
    `),...d()};var L,T,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var C,W,D;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,F,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var R,E,V;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow" id="trigger-option"></mdc-option>
          <mdc-option id="option-1" label="White and Black are the biggest colors on the spectrum"></mdc-option>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-tooltip triggerid="option-1" show-arrow>
        White and Black are the biggest colors on the spectrum
      </mdc-tooltip>
    \`),
  ...hideAllControls()
}`,...(V=(E=v.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var M,B,N;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(B=x.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var z,P,Y;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(P=S.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var G,_,j;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(j=(_=y.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var U,K,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,oe;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(te=A.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ot=["Example","SelectWithSecondaryLabel","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithForm","SelectWithFormHelpTextValidation","SelectWithDynamicOptions","SelectWithChangingSelectedAfterMount"];export{u as Example,A as SelectWithChangingSelectedAfterMount,f as SelectWithDynamicOptions,y as SelectWithForm,g as SelectWithFormHelpTextValidation,h as SelectWithGroups,x as SelectWithIconOptions,v as SelectWithLongOptionText,b as SelectWithSecondaryLabel,S as SelectWithStates,ot as __namedExportsOrder,tt as default};
