import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as Z,k as i,D as X}from"./lit-element-D5KKan5q.js";import"./index-pwfMUtoV.js";import"./index-aY6_ipLC.js";import"./index-D3DhXfcW.js";import{n as O}from"./index-C9z9WAEj.js";import{r as p}from"./state-CSSggq2n.js";import{e as J}from"./query-DXShiZ7f.js";import{o as Q}from"./query-assigned-elements-uEuc3rg8.js";import{K as r}from"./keys-CuA-OPmH.js";import{D as ee}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as te}from"./FormInternalsMixin-CSixOKbK.js";import{D as oe,F as w,V as f}from"./formfieldwrapper.component-DNKMXI01.js";import{T as ae}from"./index-DPkVAo11.js";import{A as S,T as k,a as le}from"./index-C5a3y-Ec.js";import{P as re}from"./popover.component-BXope1DD.js";import{T as ie,V as se}from"./text.constants-ZF0jM5wn.js";import{h as ne}from"./index-MA1r3zrt.js";import{c as de,s as ce}from"./commonArgTypes-BluK8w5L.js";import{h as pe,a as m,d as me}from"./utils-CO8B6ZcN.js";import"./index-BNnNUvWb.js";import"./v4-CQkTLCs1.js";import"./iframe-Bn2oiskT.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-CnZR9KoS.js";import"./buttonsimple.component-9hW3yvQZ.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-Bfip8hYE.js";import"./button.utils-rNW36Ji7.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-BL7cBJOV.js";import"./if-defined-D5BV9-c0.js";import"./listitem.component-CAQJg3uX.js";const he=Z`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-base-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-selected-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-select-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-select-disabled-background-color: var(--mds-color-theme-background-input-disabled);
    --mdc-select-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-select-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-select-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-select-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-select-background-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-select-background-active: var(--mds-color-theme-background-primary-active);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: unset;
  }
  :host::part(native-select) {
    margin: 0;
    opacity: 0.1%;
    overflow: visible;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 1px;
    z-index: -1;
  }
  :host::part(container) {
    width: 100%;
    position: relative;
  }
  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 5.5px 6px 5.5px 12px;
    border: 1px solid var(--mdc-select-icon-border-color);
    background: var(--mdc-select-background-color);
    display: flex;
    gap: 0.375rem;
  }
  :host::part(base-container):hover {
    background-color: var(--mdc-select-background-hover);
  }
  :host::part(base-container):active {
    background-color: var(--mdc-select-background-active);
  }
  :host::part(base-text) {
    height: 1.3125rem;
    width: 100%;
    color: var(--mdc-select-base-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :host::part(selected) {
    color: var(--mdc-select-selected-text-color);
  }
  :host::part(icon-container) {
    margin-left: auto;
    display: flex;
    padding: 2px;
  }
  :host([readonly])::part(icon-container) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host::part(popover-content) {
    min-width: auto;
  }
  :host([disabled])::part(base-container),
  :host([readonly])::part(base-container),
  :host([help-text-type="success"][disabled])::part(base-container),
  :host([help-text-type="error"][disabled])::part(base-container),
  :host([help-text-type="warning"][disabled])::part(base-container),
  :host([help-text-type="success"][readonly])::part(base-container),
  :host([help-text-type="error"][readonly])::part(base-container),
  :host([help-text-type="warning"][readonly])::part(base-container) {
    border-color: var(--mdc-select-disabled-border-color);
    background: var(--mdc-select-disabled-background-color);
  }
  :host([disabled]:hover)::part(base-container),
  :host([readonly]:hover)::part(base-container) {
    background-color: unset;
  }
  :host([readonly])::part(base-text) {
    color: var(--mdc-select-selected-text-color);
  }
  :host([disabled])::part(base-text) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host([help-text-type="success"])::part(base-container) {
    border-color: var(--mdc-select-success-border-color);
  }
  :host([help-text-type="error"])::part(base-container) {
    border-color: var(--mdc-select-error-border-color);
  }
  :host([help-text-type="warning"])::part(base-container) {
    border-color: var(--mdc-select-warning-border-color);
  }
`,ue=[he,...ne(!0)];var be=Object.defineProperty,n=(o,e,t,a)=>{for(var l=void 0,d=o.length-1,T;d>=0;d--)(T=o[d])&&(l=T(e,t,l)||l);return l&&be(e,t,l),l};const $=class $ extends te(ee(w)){constructor(){super(...arguments),this.readonly=!1,this.height="auto",this.baseIconName=S.ARROW_DOWN,this.selectedValue="",this.displayPopover=!1,this.activeDescendant=""}connectedCallback(){super.connectedCallback(),this.value=void 0,this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeydown)}getAllValidOptions(){var e;return((e=this.optionsList)==null?void 0:e.map(t=>t.tagName.toLowerCase()===k?t:t.tagName.toLowerCase()===ae?Array.from(t.children).filter(a=>a.tagName.toLowerCase()===k):[]).flat())||[]}handlePopoverOpen(){this.displayPopover=!0,this.baseIconName=S.ARROW_UP}handlePopoverClose(){this.displayPopover=!1,this.baseIconName=S.ARROW_DOWN}updateTabIndexForAllOptions(e){var a;let t=!1;this.getAllValidOptions().forEach(l=>{l===e?(this.setSelectedValue(l),t=!0,l.setAttribute("selected",""),l.setAttribute("tabindex","0")):(l==null||l.setAttribute("tabindex","-1"),l==null||l.removeAttribute("selected"))}),!t&&((a=this.getAllValidOptions()[0])==null||a.setAttribute("tabindex","0"))}handleOptionsClick(e){this.updateTabIndexForAllOptions(e.target)}setSelectedValue(e){this.selectedValueText=(e==null?void 0:e.getAttribute("label"))??(e==null?void 0:e.textContent)??"",this.selectedValue=(e==null?void 0:e.getAttribute("value"))??(e==null?void 0:e.textContent)??"",this.internals.setFormValue(this.selectedValue),this.manageRequired(),this.dispatchChange(this.selectedValue)}manageRequired(){!this.selectedValue&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.selectedValue="",this.selectedValueText=void 0,this.internals.setFormValue(this.selectedValue),this.updateTabIndexForAllOptions()}formStateRestoreCallback(e){this.selectedValue=e,this.selectedValueText=e}dispatchChange(e){e&&this.dispatchEvent(new CustomEvent("change",{detail:{value:e},composed:!0,bubbles:!0}))}handleKeydown(e){this.displayPopover?this.handlePopoverOnOpen(e):this.handlePopoverOnClose(e)}handlePopoverOnOpen(e){var t;switch(e.key){case r.SPACE:this.updateTabIndexForAllOptions(e.target),this.closePopover(),e.preventDefault();break;case r.ENTER:this.updateTabIndexForAllOptions(e.target),this.closePopover(),e.preventDefault(),(t=this.form)==null||t.requestSubmit();break;case r.ESCAPE:this.closePopover();break;case r.HOME:this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break;case r.ARROW_DOWN:case r.ARROW_UP:case r.PAGE_DOWN:case r.PAGE_UP:this.handleOptionsNavigation(e),this.updateActivedescendant(e.target);break}}handlePopoverOnClose(e){switch(e.key){case r.ARROW_DOWN:case r.ARROW_UP:case r.ENTER:case r.SPACE:this.openPopover(),e.preventDefault();break;case r.HOME:this.openPopover(),this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.openPopover(),this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break}}handleOptionsNavigation(e){const t=this.getAllValidOptions(),a=t.findIndex(d=>d===e.target),l=this.getNewIndexBasedOnKey(e.key,a,t.length);l!==-1&&(this.setFocusAndTabIndex(l),e.preventDefault())}getNewIndexBasedOnKey(e,t,a){return e===r.ARROW_DOWN&&t!==a-1?t+1:e===r.ARROW_UP&&t>0?t-1:e===r.PAGE_DOWN?t+10>a?a-1:t+10:e===r.PAGE_UP?t-10<0?0:t-10:-1}updateActivedescendant(e){var a;const t=this.getAllValidOptions().findIndex(l=>l===e);this.activeDescendant=((a=this.getAllValidOptions()[t])==null?void 0:a.id)??""}resetActivedescendant(){this.activeDescendant=""}setFocusAndTabIndex(e){var t;(t=this.getAllValidOptions()[e])==null||t.focus(),this.getAllValidOptions().forEach((a,l)=>{const d=e===l?"0":"-1";a==null||a.setAttribute("tabindex",d)})}openPopover(){this.displayPopover=!0,this.resetActivedescendant()}closePopover(){this.displayPopover=!1,this.resetActivedescendant()}firstUpdated(){const e=this.getAllValidOptions(),t=e.findIndex(a=>a==null?void 0:a.hasAttribute("selected"));t!==-1?(this.setSelectedValue(e[t]),this.updateTabIndexForAllOptions(e[t])):this.placeholder?this.placeholder&&this.manageRequired():(this.setSelectedValue(e[0]),this.updateTabIndexForAllOptions())}getNativeSelect(){return i`
      <select
        part="native-select"
        id="${this.id}"
        tabindex="-1"
        name="${this.name}"
        size="1"
        .value="${this.selectedValue}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled}"
        ?required="${!!this.requiredLabel}"
        @mousedown="${e=>e.preventDefault()}"
      >
        ${this.getOptionsContentFromSlot()}
      </select>
    `}getOptionsContentFromSlot(){return this.getAllValidOptions().map(e=>i`
        <option
          part="native-select"
          value="${e.getAttribute("value")??""}"
          label="${e.getAttribute("label")??""}"
          ?disabled="${!!e.hasAttribute("disabled")}"
          ?selected="${!!e.hasAttribute("selected")}"
        >
          ${e.textContent}
        </option>
    `)}getPopoverContent(){return this.disabled||this.readonly?X:i`
      <mdc-popover
        id="options-popover"
        triggerid="select-base-triggerid"
        interactive
        ?visible="${this.displayPopover}"
        hide-on-outside-click
        focus-back-to-trigger
        focus-trap
        role="listbox"
        placement="${re.BOTTOM_START}"
        @shown="${this.handlePopoverOpen}"
        @hidden="${this.handlePopoverClose}"
        style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
      >
        <slot @click="${this.handleOptionsClick}"></slot>
      </mdc-popover>
    `}updated(e){super.updated(e),(e.has("disabled")||e.has("readonly"))&&(this.closePopover(),this.handlePopoverClose())}render(){return i`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="select-base-triggerid"
          part="base-container"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="combobox"
          aria-activedescendant="${this.activeDescendant}"
          aria-haspopup="listbox"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?oe.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
        >
          <mdc-text
            part="base-text ${this.selectedValueText?"selected":""}"
            type="${ie.BODY_MIDSIZE_REGULAR}"
            tagname="${se.SPAN}"
          >
            ${this.selectedValueText??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
          </div>
        </div>
        ${this.getNativeSelect()}
        ${this.getPopoverContent()}
      </div>
      ${this.renderHelperText()}
    `}};$.styles=[...w.styles,...ue];let s=$;n([O({type:String})],s.prototype,"placeholder");n([O({type:Boolean})],s.prototype,"readonly");n([O({type:String,attribute:"height"})],s.prototype,"height");n([Q()],s.prototype,"optionsList");n([p()],s.prototype,"baseIconName");n([p()],s.prototype,"selectedValueText");n([p()],s.prototype,"selectedValue");n([p()],s.prototype,"displayPopover");n([p()],s.prototype,"activeDescendant");n([J("select")],s.prototype,"inputElement");s.register(le);const V=Object.values(f).filter(o=>o!=="priority"),A=o=>i`
  <div style="height: 20rem; width: 20rem;">${o}</div>
`,ve=o=>A(i`
  <mdc-select
    @change="${c("onchange")}"
    @click="${c("onclick")}"
    @keydown="${c("onkeydown")}"
    @focus="${c("onfocus")}"
    label="${o.label}"
    required-label="${o["required-label"]}"
    help-text-type="${o["help-text-type"]}"
    help-text="${o["help-text"]}"
    height="${o.height}"
    data-aria-label="${o["data-aria-label"]}"
    name="${o.name}"
    placeholder="${o.placeholder}" 
    ?disabled="${o.disabled}"
    ?readonly="${o.readonly}"
  >
    <mdc-option>London, UK</mdc-option>
    <mdc-option>Los Angeles, CA</mdc-option>
    <mdc-option>New York, NY</mdc-option>
    <mdc-option>Phoenix, AZ</mdc-option>
    <mdc-option>Seattle, WA</mdc-option>
  </mdc-select>
`),tt={title:"Components/select",tags:["autodocs"],component:"mdc-select",render:ve,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},label:{control:"text"},"required-label":{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${V.map(o=>`'${o}'`).join(", ")}.`,options:V},"data-aria-label":{control:"text"},height:{control:"text"},...pe(["id","value","validity","validation-message","willValidate","default","label-info"]),...de,...ce}},h={args:{label:"Headquarters location","required-label":"required",placeholder:"Select your headquarters location",disabled:!1,readonly:!1,"help-text":"Select Help Text","help-text-type":"","data-aria-label":"Select label"}},u={render:()=>i`
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
  `,...m()},b={render:()=>A(i`
    <mdc-select placeholder="Select a color" label="Select one color">
      <mdc-option>Red</mdc-option>
      <mdc-option>Yellow</mdc-option>
      <mdc-option>White and Black are the biggest colors on the spectrum</mdc-option>
      <mdc-option>Green</mdc-option>
    </mdc-select>
  `),...m()},v={render:()=>A(i`
    <mdc-select placeholder="Select an option" label="You are in a meeting">
      <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
      <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
      <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
      <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
      <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
    </mdc-select>
  `),...m()},g={render:()=>i`
  <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
    <mdc-select
      help-text-type="${f.SUCCESS}"
      help-text="The correct number of Infinity Stones has been selected."
      label="How many Infinity Stones exist?"
      required-label="required"
    >
      <mdc-option value="six" selected>Six</mdc-option>
    </mdc-select>
    <mdc-select
      help-text="Selecting this number may cause a security risk because it is not properly setup."
      help-text-type="${f.WARNING}"
      label="Select phone number"
      required-label="required"
    >
      <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
    </mdc-select>
    <mdc-select
      help-text-type="${f.ERROR}"
      help-text="You must select the total number of Infinity Stones."
      label="How many Infinity Stones exist?"
      placeholder="Select the total number of Infinity Stones"
      required-label="required"
    ></mdc-select>
    <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
    <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
  </div>
  `,...m()},x={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:o=>A(i`
    <mdc-select height="${o.height}" placeholder="${o.placeholder}" label="${o.label}">
      ${Array.from({length:1e3},(e,t)=>i`<mdc-option label="Option Label ${t+1}"></mdc-option>`)}
    </mdc-select>
  `),argTypes:{...me(["readonly","name","data-aria-label","disabled","required-label","help-text-type","help-text"])}},y={render:()=>i`
      <form @submit=${e=>{e.preventDefault();const a=new FormData(e.target).get("stone-count");c("Form Submitted")({value:a})}}>
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
    `,...m()};var C,I,D;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Headquarters location',
    'required-label': 'required',
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label'
  }
}`,...(D=(I=h.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var P,E,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,F,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-select placeholder="Select a color" label="Select one color">
      <mdc-option>Red</mdc-option>
      <mdc-option>Yellow</mdc-option>
      <mdc-option>White and Black are the biggest colors on the spectrum</mdc-option>
      <mdc-option>Green</mdc-option>
    </mdc-select>
  \`),
  ...hideAllControls()
}`,...(W=(F=b.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var q,L,_;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(L=v.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var H,M,G;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var U,B,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(B=x.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var K,z,j;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(z=y.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const ot=["Example","SelectWithGroups","SelectWithLongOptionText","SelectWithIconOptions","SelectWithStates","SelectWithFixedHeight","SelectWithForm"];export{h as Example,x as SelectWithFixedHeight,y as SelectWithForm,u as SelectWithGroups,v as SelectWithIconOptions,b as SelectWithLongOptionText,g as SelectWithStates,ot as __namedExportsOrder,tt as default};
