import{t as a}from"./if-defined-D5BV9-c0.js";import{i as L,k as h}from"./lit-element-D5KKan5q.js";import{r as w}from"./state-C0WmBOuD.js";import{o as F}from"./query-assigned-elements-uEuc3rg8.js";import{R as N}from"./class-map-BcCVsMyu.js";import{I as C}from"./input.component-DgKCZJKv.js";import{K as u}from"./keys-hFXe221I.js";import{u as O}from"./provider.component-BaQC7CJH.js";import{I as U,A as M,a as V}from"./input.constants-z5HAYAGU.js";import{T as z}from"./index-CoNweFZ6.js";import"./index-ChFpzoWO.js";import"./index-DyrUVjQY.js";import"./index-DHsMOcdX.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as D,s as B}from"./commonArgTypes-BluK8w5L.js";import{a as G}from"./utils-CFOyPOhY.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-CSaGYIpL.js";import"./index-B_Bee1AR.js";import"./popover.component-CgG8O1N4.js";import"./roles-CJI3JVG-.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-Bh3Mxn5K.js";import"./DisabledMixin-DcYwkKYf.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./index-CqVtAZCJ.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./FormInternalsMixin-CvUI0OX_.js";import"./query-DXShiZ7f.js";import"./buttonsimple.component-CKyEWPbX.js";import"./TabIndexMixin-TvgH_pmh.js";import"./IconNameMixin-CRlZlTtq.js";import"./button.component-D5eG231X.js";import"./button.utils-rNW36Ji7.js";import"./iframe-B0MNxHtX.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const H=L`
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
`,K=[H],R=O.constructTagName("searchfield"),n={TYPE:U.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:z};var W=Object.defineProperty,b=(e,t,r,j)=>{for(var l=void 0,m=e.length-1,v;m>=0;m--)(v=e[m])&&(l=v(t,r,l)||l);return l&&W(t,r,l),l};const f=class f extends C{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1}handleKeyDown(t){super.handleKeyDown(t),t.key===u.ESCAPE&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(r=>{r.matches(n.INPUT_CHIP_TAG)||r.remove()})}firstUpdated(t){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1},super.firstUpdated(t)}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(r=>{r.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return h`
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
            @keydown=${t=>t.key===u.ENTER?this.inputElement.focus():null}
            @keyup=${t=>t.key===u.SPACE?this.inputElement.focus():null}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(n.TYPE,this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `}};f.styles=[...C.styles,...K];let o=f;b([F({slot:"filters"})],o.prototype,"inputChips");b([w()],o.prototype,"isInputFocused");b([w()],o.prototype,"hasInputChips");o.register(R);const Y=e=>h` <mdc-searchfield
    @input="${i("oninput")}"
    @change="${i("onchange")}"
    @focus="${i("onfocus")}"
    @blur="${i("onblur")}"
    @clear="${i("onclear")}"
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
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${a(e.autocomplete)}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
  ></mdc-searchfield>`,ze={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:Y,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(M)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(V)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...G(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...D,...B}},s={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},c={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},p={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},d={render:()=>{const e=t=>{t.target.remove()};return h`
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
    `}};var $,x,E;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var I,T,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var g,P,A;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,S,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const De=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{p as DisabledSearch,s as Example,d as WithInputChipFilters,c as WithoutLabel,De as __namedExportsOrder,ze as default};
