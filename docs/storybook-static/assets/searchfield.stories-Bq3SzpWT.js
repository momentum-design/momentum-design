import{t as a}from"./if-defined-nrQrlDVv.js";import{i as k,u as w,k as h,z as L}from"./iframe-CjQ7Po3D.js";import{o as F}from"./query-assigned-elements-uEuc3rg8.js";import{R as N}from"./class-map-CRW4Txq6.js";import{I as C}from"./input.component-836X9-e-.js";import{K as m}from"./keys-hFXe221I.js";import{I as U,A as M,a as z}from"./input.constants-BOH-h8Ak.js";import{T as V}from"./index-CjPhSsUj.js";import"./index-Bw1IfTEA.js";import"./index-B_ibqgwr.js";import"./index-Bl9rWpTe.js";import{c as D,s as B}from"./commonArgTypes-BluK8w5L.js";import{a as K}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./index-DctLzBgJ.js";import"./index-DeWLkwz2.js";import"./popover.component-CER3cVht.js";import"./BackdropMixin-C-zwi_2t.js";import"./roles-CJI3JVG-.js";import"./index-BXjLymTv.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DPfA9KHN.js";import"./DisabledMixin-C9Z8HYNo.js";import"./button.constants-BFmXBtee.js";import"./buttonsimple.constants-BFJZbNAy.js";import"./index-DD4vGOEX.js";import"./DataAriaLabelMixin-ClVLmbfi.js";import"./FormInternalsMixin-CAPsdovu.js";import"./query-DXShiZ7f.js";import"./buttonsimple.component-zxBeWk1U.js";import"./TabIndexMixin-CF3kEJc5.js";import"./IconNameMixin-CTkF2V4Z.js";import"./button.component-5CwjGCoO.js";import"./button.utils-rNW36Ji7.js";import"./index-BUV9ka-C.js";import"./index-DTrDRi1E.js";const R=k`
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
`,Y=[R],G=w.constructTagName("searchfield"),n={TYPE:U.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:V};var H=Object.defineProperty,b=(e,t,l,j)=>{for(var r=void 0,u=e.length-1,v;u>=0;u--)(v=e[u])&&(r=v(t,l,r)||r);return r&&H(t,l,r),r};const f=class f extends C{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1}handleKeyDown(t){super.handleKeyDown(t),t.key===m.ESCAPE&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(l=>{l.matches(n.INPUT_CHIP_TAG)||l.remove()})}firstUpdated(t){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1},super.firstUpdated(t)}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(l=>{l.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return h`
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
            @keydown=${t=>t.key===m.ENTER?this.inputElement.focus():null}
            @keyup=${t=>t.key===m.SPACE?this.inputElement.focus():null}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(n.TYPE,this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `}};f.styles=[...C.styles,...Y];let o=f;b([F({slot:"filters"})],o.prototype,"inputChips");b([L()],o.prototype,"isInputFocused");b([L()],o.prototype,"hasInputChips");o.register(G);const{action:i}=__STORYBOOK_MODULE_ACTIONS__,W=e=>h` <mdc-searchfield
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
  ></mdc-searchfield>`,we={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:W,argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(M)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(z)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...K(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...D,...B}},s={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},c={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},p={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},d={render:()=>{const e=t=>{t.target.remove()};return h`
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
    `}};var $,T,x;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var E,I,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var g,P,_;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var A,S,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(S=d.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const Fe=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{p as DisabledSearch,s as Example,d as WithInputChipFilters,c as WithoutLabel,Fe as __namedExportsOrder,we as default};
