import{t as a}from"./if-defined-D5BV9-c0.js";import{i as w,k as m}from"./lit-element-D5KKan5q.js";import{r as k}from"./state-CSSggq2n.js";import{o as F}from"./query-assigned-elements-uEuc3rg8.js";import{R as S}from"./class-map-BcCVsMyu.js";import{I as v}from"./input.component-D-B6gNJ-.js";import{u as O}from"./index-C9z9WAEj.js";import{I as N,A as M,a as U}from"./input.constants-Rr-Sz3Xd.js";import{T as V}from"./index-DeJUIsSf.js";import"./index--2Wjv6Dg.js";import"./index-DFXJl2oW.js";import"./index-D3DhXfcW.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as z,s as D}from"./commonArgTypes-BluK8w5L.js";import{h as B}from"./utils-CO8B6ZcN.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./index-MA1r3zrt.js";import"./index-nm2_EHRX.js";import"./formfieldwrapper.component-DNKMXI01.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./v4-CmTdKEVZ.js";import"./button.constants-BVKjykrp.js";import"./buttonsimple.component-w9K_m-nk.js";import"./TabIndexMixin-CsrHswKP.js";import"./IconNameMixin-CujGSn0t.js";import"./button.utils-rNW36Ji7.js";import"./iframe-CdrsIVpP.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const G=w`

:host::part(filters-container){
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

  :host::part(scrollable-container){
    display: flex;
    flex-grow: 1;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    scrollbar-width: none;
  }

`,H=[G],W=O.constructTagName("searchfield"),n={TYPE:N.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:V};var j=Object.defineProperty,h=(e,t,l,Y)=>{for(var r=void 0,u=e.length-1,f;u>=0;u--)(f=e[u])&&(r=f(t,l,r)||r);return r&&j(t,l,r),r};const b=class b extends v{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1}handleKeyDown(t){super.handleKeyDown(t),t.key==="Escape"&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.requiredLabel=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(l=>{l.matches(n.INPUT_CHIP_TAG)||l.remove()})}firstUpdated(){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1}}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(l=>{l.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return m`
    ${this.renderLabelElement()}
    <div class="${S({"input-container":!0,"mdc-focus-ring":this.isInputFocused})}" part="input-container">
    ${this.renderLeadingIcon()}
      <div part='scrollable-container' tabindex='-1'>
      <div part="filters-container" 
      @click=${()=>this.inputElement.focus()} 
      @keydown=${t=>t.key==="Enter"?this.inputElement.focus():null} 
      @keyup=${t=>t.key===" "?this.inputElement.focus():null}>
        <slot name="filters" @slotchange=${this.renderInputChips}></slot></div>
      ${this.renderInputElement(n.TYPE,this.hasInputChips)}
      </div>
      ${this.renderTrailingButton(this.hasInputChips)}
    </div>
  `}};b.styles=[...v.styles,...H];let i=b;h([F({slot:"filters"})],i.prototype,"inputChips");h([k()],i.prototype,"isInputFocused");h([k()],i.prototype,"hasInputChips");i.register(W);const R=e=>m`
  <mdc-searchfield 
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
  ></mdc-searchfield>`,we={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:R,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(M)},autofocus:{control:"boolean"},autocomplete:{control:"text",options:Object.values(U)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...B(["prefix-text","help-text","help-text-type","required-label","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...z,...D}},s={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},c={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},p={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},d={render:()=>{const e=t=>{t.target.remove()};return m`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-inputchip clear-aria-label="Clear"
       label="Query: value" slot="filters" @remove="${e}"></mdc-inputchip>
      <mdc-inputchip clear-aria-label="Clear"
       label="In: Marketing" slot="filters" @remove="${e}"></mdc-inputchip>
      <mdc-chip label="This does not render" slot="filters" ></mdc-chip>
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
}`,...(P=(g=p.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var _,A,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-inputchip clear-aria-label="Clear"
       label="Query: value" slot="filters" @remove="\${clearFilter}"></mdc-inputchip>
      <mdc-inputchip clear-aria-label="Clear"
       label="In: Marketing" slot="filters" @remove="\${clearFilter}"></mdc-inputchip>
      <mdc-chip label="This does not render" slot="filters" ></mdc-chip>
    </mdc-searchfield>
    \`;
  }
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const Fe=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{p as DisabledSearch,s as Example,d as WithInputChipFilters,c as WithoutLabel,Fe as __namedExportsOrder,we as default};
