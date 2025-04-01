import{t as a}from"./if-defined-D5BV9-c0.js";import{i as A,k as m}from"./lit-element-D5KKan5q.js";import{r as O}from"./state-CSSggq2n.js";import{o as _}from"./query-assigned-elements-uEuc3rg8.js";import{R as w}from"./class-map-BcCVsMyu.js";import{I as f}from"./input.component--KPSTaJD.js";import{u as k}from"./index-C9z9WAEj.js";import{I as N,A as V,a as z}from"./input.constants-wxv6-efV.js";import"./index-C-Wh2UEN.js";import"./index-B9Z4EV-P.js";import"./index-D3DhXfcW.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as M,s as U}from"./commonArgTypes-BluK8w5L.js";import{h as B}from"./utils-D1SE5bce.js";import"./index-ClrxlJ4-.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./index-DoSuNddn.js";import"./index-DUgpj6fI.js";import"./formfieldwrapper.component-B9qpm-pj.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-Dg5j8Yib.js";import"./v4-CmTdKEVZ.js";import"./button.constants-BIfGRN4W.js";import"./buttonsimple.component-C9FYjWVA.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-BQ4i2NgT.js";import"./iframe-ymRrrG26.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";const W=A`

:host::part(filters-container){
  display: flex;
  gap: 0.25rem;
  margin: 0.25rem;
}

.input {
  white-space: nowrap;
  min-width: 50%;
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

`,j=[W],D=k.constructTagName("searchfield"),d={TYPE:N.SEARCH,ICON:"search-bold",CLOSE_BTN:!0};var R=Object.defineProperty,S=(e,t,h,q)=>{for(var r=void 0,p=e.length-1,b;p>=0;p--)(b=e[p])&&(r=b(t,h,r)||r);return r&&R(t,h,r),r};const u=class u extends f{constructor(){super(...arguments),this.isInputFocused=!1}connectedCallback(){super.connectedCallback(),this.leadingIcon=d.ICON,this.trailingButton=d.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.requiredLabel=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){this.inputChips&&this.inputChips.forEach(t=>{t.matches("mdc-inputchip")||t.remove()})}firstUpdated(){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1}}render(){return m`
    ${this.renderLabelElement()}
    <div class="${w({"input-container":!0,"mdc-focus-ring":this.isInputFocused})}" part="input-container">
    ${this.renderLeadingIcon()}
      <div part='scrollable-container'>
      <div part="filters-container"><slot name="filters" @slotchange=${this.renderInputChips}></slot></div>
      ${this.renderInputElement(d.TYPE)}
      </div>
      ${this.renderTrailingButton()}
    </div>
  `}};u.styles=[...f.styles,...j];let l=u;S([_({slot:"filters"})],l.prototype,"inputChips");S([O()],l.prototype,"isInputFocused");l.register(D);const Y=e=>m`
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
  ></mdc-searchfield>`,Se={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:Y,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(V)},autofocus:{control:"boolean"},autocomplete:{control:"text",options:Object.values(z)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...B(["prefix-text","help-text","help-text-type","required-label","validation-message","validity","willValidate","inputChips"]),...M,...U}},i={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},n={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},s={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},c={render:()=>{const e=t=>{t.target.remove()};return m`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-inputchip clear-aria-label="Clear"
       label="Query: value" slot="filters" @remove="${e}"></mdc-inputchip>
      <mdc-inputchip clear-aria-label="Clear"
       label="In: Marketing" slot="filters" @remove="${e}"></mdc-inputchip>
      <mdc-chip label="This does not render" slot="filters" ></mdc-chip>
    </mdc-searchfield>
    `}};var v,$,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(C=($=i.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var x,T,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var g,I,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var P,L,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(L=c.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const Ae=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{s as DisabledSearch,i as Example,c as WithInputChipFilters,n as WithoutLabel,Ae as __namedExportsOrder,Se as default};
