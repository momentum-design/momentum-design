import{t as a}from"./if-defined-D5BV9-c0.js";import{i as S,k as u}from"./lit-element-D5KKan5q.js";import{r as L}from"./state-CSSggq2n.js";import{o as F}from"./query-assigned-elements-uEuc3rg8.js";import{R as N}from"./class-map-BcCVsMyu.js";import{I as v}from"./input.component-BVVpqx1n.js";import{K as C}from"./keys-Hz01Ianf.js";import{u as O}from"./index-C9z9WAEj.js";import{I as M,A as U,a as V}from"./input.constants-CQyrWSWB.js";import{T as z}from"./index-r4Vk4N6H.js";import"./index-BqO6H5Ws.js";import"./index-BgDfQLR0.js";import"./index-BrLJ_9IK.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as D,s as B}from"./commonArgTypes-BluK8w5L.js";import{h as G}from"./utils-CF1irry3.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-DtlMLFTm.js";import"./index-CtSCwKSa.js";import"./popover.component-b3MZdLOz.js";import"./roles-BH_hBfTz.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-D6q8AeiS.js";import"./DisabledMixin-BZruwOeC.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-B-GnYs90.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./IconNameMixin-CujGSn0t.js";import"./button.component-Ur69Vykv.js";import"./buttonsimple.component-CZkXXCPs.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./iframe-CzUOIaLC.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const H=S`
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
`,K=[H],R=O.constructTagName("searchfield"),n={TYPE:M.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:z};var W=Object.defineProperty,h=(e,t,r,j)=>{for(var l=void 0,m=e.length-1,f;m>=0;m--)(f=e[m])&&(l=f(t,r,l)||l);return l&&W(t,r,l),l};const b=class b extends v{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1}handleKeyDown(t){super.handleKeyDown(t),t.key==="Escape"&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(r=>{r.matches(n.INPUT_CHIP_TAG)||r.remove()})}firstUpdated(){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1}}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(r=>{r.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return u`
      ${this.renderLabelElement()}
      <div
        class="${N({"input-container":!0,"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${()=>this.inputElement.focus()}
            @keydown=${t=>t.key===C.ENTER?this.inputElement.focus():null}
            @keyup=${t=>t.key===C.SPACE?this.inputElement.focus():null}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(n.TYPE,this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `}};b.styles=[...v.styles,...K];let i=b;h([F({slot:"filters"})],i.prototype,"inputChips");h([L()],i.prototype,"isInputFocused");h([L()],i.prototype,"hasInputChips");i.register(R);const Y=e=>u` <mdc-searchfield
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
  ></mdc-searchfield>`,ze={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:Y,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(U)},autofocus:{control:"boolean"},autocomplete:{control:"text",options:Object.values(V)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...G(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...D,...B}},s={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},c={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},p={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},d={render:()=>{const e=t=>{t.target.remove()};return u`
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
    `}};var $,x,I;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var T,E,y;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(y=(E=c.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var g,P,A;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,k,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const De=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{p as DisabledSearch,s as Example,d as WithInputChipFilters,c as WithoutLabel,De as __namedExportsOrder,ze as default};
