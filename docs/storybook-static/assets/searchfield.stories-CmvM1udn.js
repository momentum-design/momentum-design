import{t as a}from"./if-defined-D5BV9-c0.js";import{i as L,k as u}from"./lit-element-D5KKan5q.js";import{r as w}from"./state-CSSggq2n.js";import{o as F}from"./query-assigned-elements-uEuc3rg8.js";import{R as S}from"./class-map-BcCVsMyu.js";import{I as v}from"./input.component-DcBnqJMD.js";import{u as O}from"./index-C9z9WAEj.js";import{I as N,A as M,a as U}from"./input.constants-CQyrWSWB.js";import{T as V}from"./index-DBkmcCIJ.js";import"./index-DycZrolK.js";import"./index-BAoAwD7h.js";import"./index-BrLJ_9IK.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as z,s as D}from"./commonArgTypes-BluK8w5L.js";import{h as B}from"./utils-CF1irry3.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-C8GEmoE7.js";import"./index-Cup1xxWQ.js";import"./popover.component-Py8geaSk.js";import"./roles-BH_hBfTz.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-D6q8AeiS.js";import"./DisabledMixin-BZruwOeC.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-B-GnYs90.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./IconNameMixin-CujGSn0t.js";import"./button.component-DLvLGT3A.js";import"./buttonsimple.component-q2YakOka.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./iframe-D2CDPx-_.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const G=L`
  :host::part(filters-container) {
    display: flex;
    gap: 0.25rem;
    margin: 0.25rem 0;
  }

  .input {
    white-space: nowrap;
    min-width: 90%;
  }

  .input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  :host::part(scrollable-container) {
    display: flex;
    flex-grow: 1;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    scrollbar-width: none;
  }
`,H=[G],W=O.constructTagName("searchfield"),n={TYPE:N.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:V};var j=Object.defineProperty,h=(e,t,r,Y)=>{for(var l=void 0,m=e.length-1,f;m>=0;m--)(f=e[m])&&(l=f(t,r,l)||l);return l&&j(t,r,l),l};const b=class b extends v{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1}handleKeyDown(t){super.handleKeyDown(t),t.key==="Escape"&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(r=>{r.matches(n.INPUT_CHIP_TAG)||r.remove()})}firstUpdated(){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1}}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(r=>{r.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return u`
      ${this.renderLabelElement()}
      <div
        class="${S({"input-container":!0,"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${()=>this.inputElement.focus()}
            @keydown=${t=>t.key==="Enter"?this.inputElement.focus():null}
            @keyup=${t=>t.key===" "?this.inputElement.focus():null}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(n.TYPE,this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `}};b.styles=[...v.styles,...H];let i=b;h([F({slot:"filters"})],i.prototype,"inputChips");h([w()],i.prototype,"isInputFocused");h([w()],i.prototype,"hasInputChips");i.register(W);const R=e=>u` <mdc-searchfield
    @input="${o("oninput")}"
    @change="${o("onchange")}"
    @focus="${o("onfocus")}"
    @blur="${o("onblur")}"
    label="${e.label}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    ?disabled="${e.disabled}"
    id="${e.id}"
    data-aria-label="${a(e["data-aria-label"])}"
    clear-aria-label="${a(e["clear-aria-label"])}"
    class="${e.class}"
    style="${e.style}"
    ?readonly="${e.readonly}"
    maxlength="${a(e.maxlength)}"
    minlength="${a(e.minlength)}"
    autocapitalize="${a(e.autocapitalize)}"
    ?autofocus="${e.autofocus}"
    autocomplete="${a(e.autocomplete)}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
  ></mdc-searchfield>`,Ue={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:R,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(M)},autofocus:{control:"boolean"},autocomplete:{control:"text",options:Object.values(U)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...B(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...z,...D}},s={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},c={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},p={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},d={render:()=>{const e=t=>{t.target.remove()};return u`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    `}};var C,$,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(x=($=s.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var I,T,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var E,g,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(P=(g=p.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var _,A,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    \`;
  }
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const Ve=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{p as DisabledSearch,s as Example,d as WithInputChipFilters,c as WithoutLabel,Ve as __namedExportsOrder,Ue as default};
