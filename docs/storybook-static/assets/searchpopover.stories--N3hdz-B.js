import{t}from"./if-defined-B0318-pP.js";import{a2 as A,u as _,k as l,R as $,n as m}from"./iframe-CoZufWyv.js";import{R as L}from"./class-map-BcQGTG2e.js";import{F}from"./input.component-lV0P1xv7.js";import{S as y}from"./searchfield.component-DA8GvL2c.js";import{P as R}from"./popover.constants-C2NeOelP.js";import{D as B}from"./formfieldwrapper.constants-DtC-mEhx.js";import{I as z,A as D,a as k}from"./input.constants-7NwKbtEf.js";import"./index-B_dI6GZ6.js";import"./index-CZnTnomU.js";import"./index-CK8zTN3p.js";import{c as W,s as M}from"./commonArgTypes-BG7EqI50.js";import{h as G}from"./utils-B5QUENNQ.js";import"./index-kC55DkhJ.js";import"./index-Bh8t74Mv.js";import"./index-CgcexRJI.js";import"./index-C5Qz_PKs.js";import"./index-Bao4LojX.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";import"./index-4zhbTyiI.js";import"./index-D198iknj.js";import"./popover.component-yjR190Q8.js";import"./BackdropMixin-92KLvOLs.js";import"./KeyDownHandledMixin-C7VmcIzg.js";import"./index-nMML2DHc.js";import"./index-Dsu7LHfy.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-c1zKieo3.js";import"./DisabledMixin-oyOWrvDE.js";import"./DataAriaLabelMixin-CZeKGBaN.js";import"./FormInternalsMixin-C3Lui7c0.js";import"./buttonsimple.component-C8evNhor.js";import"./query-assigned-elements-Bb9V_31n.js";import"./ControlTypeMixin-B4CVD2IO.js";import"./chip.component-BYn-MfOK.js";import"./IconNameMixin-DbaYQX-_.js";import"./staticchip.component-u-2f0gSF.js";import"./alertchip.constants-CldUX2It.js";import"./button.component-CcTMZWXg.js";import"./button.utils-rNW36Ji7.js";import"./index-DTrDRi1E.js";import"./list.component-DVTo65Ds.js";import"./ListNavigationMixin-BJFyfjbL.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-RV7P9Fxe.js";import"./CaptureDestroyEventForChildElement-DR5l64Pc.js";import"./listitem.component-CcZqBYlI.js";const N=A`
  :host::part(filters-container) {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.25rem;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    height: var(--mdc-input-height);
    flex-grow: 1;
  }

  :host::part(filters-container)::-webkit-scrollbar {
    display: none;
  }

  :host {
    --mdc-searchpopover-width: 100%;
    --mdc-searchpopover-popover-width: var(--mdc-searchpopover-width);
    --mdc-searchpopover-popover-height: auto;

    width: var(--mdc-searchpopover-width);
    position: relative;
  }

  /* Popover height, width & padding overrides */
  :host mdc-popover {
    --mdc-popover-max-width: var(--mdc-searchpopover-popover-width);
    --mdc-popover-max-height: var(--mdc-searchpopover-popover-height);
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    min-width: auto;
    padding: 0.75rem 0.5rem;
  }
`,U=[N],V=_.constructTagName("searchpopover"),g={TYPE:z.TEXT,DISPLAY_POPOVER:!1},x="searchpopover-container-triggerid",b="searchpopover-popoverid";var Y=Object.defineProperty,h=(e,a,i,f)=>{for(var o=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=n(a,i,o)||o);return o&&Y(a,i,o),o};const v=class v extends y{constructor(){super(...arguments),this.displayPopover=g.DISPLAY_POPOVER,this.placement=R.BOTTOM_START,this.popoverZIndex=void 0}get scrollContainer(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector('[part="filters-container"]'))??null}renderInputElement(){const a=this.hasChips?"":this.placeholder;return l`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${F(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${g.TYPE}"
      aria-expanded="${this.displayPopover?"true":"false"}"
      aria-controls="${b}"
      aria-owns="${b}"
      aria-haspopup="${$.DIALOG}"
      aria-describedby="${t(this.helpText?B.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${t(a)}
      minlength=${t(this.minlength)}
      maxlength=${t(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      dirname=${t(this.dirname)}
      pattern=${t(this.pattern)}
      list=${t(this.list)}
      size=${t(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
      role=${t($.COMBOBOX)}
    />`}render(){return l`
      ${this.renderLabelElement()}
      <div
        class="${L({"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
        id="${x}"
      >
        ${this.renderLeadingIcon()}
        <div part="filters-container" @click=${this.handleFilterContainerClick} tabindex="-1">
          <slot name="filters" @slotchange=${this.renderChips}></slot>
          ${this.renderInputElement()}
        </div>
        ${this.renderTrailingButton(this.hasChips)}
      </div>
      <mdc-popover
        triggerID="${x}"
        id="${b}"
        trigger="manual"
        interactive
        ?visible=${this.displayPopover}
        hide-on-outside-click
        hide-on-escape
        focus-back-to-trigger
        size
        placement="${this.placement}"
        aria-label="${t(this.popoverAriaLabel)}"
        disable-aria-expanded
        z-index="${t(this.popoverZIndex)}"
        exportparts="popover-content"
      >
        <slot></slot>
      </mdc-popover>
    `}};v.styles=[...y.styles,...U];let p=v;h([m({type:Boolean,reflect:!0,attribute:"display-popover"})],p.prototype,"displayPopover");h([m({type:String,reflect:!0})],p.prototype,"placement");h([m({type:Number,reflect:!0,attribute:"popover-z-index"})],p.prototype,"popoverZIndex");h([m({type:String,reflect:!0,attribute:"popover-aria-label"})],p.prototype,"popoverAriaLabel");p.register(V);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,E=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],q=e=>{const a=new Set(E.filter(i=>i.toLowerCase().includes(e.value.toLowerCase())));return l` <mdc-searchpopover
    @input="${r("oninput")}"
    @change="${r("onchange")}"
    @focus="${r("onfocus")}"
    @blur="${r("onblur")}"
    @clear="${r("onclear")}"
    @chipRemove="${r("onChipRemove")}"
    label="${e.label}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    ?disabled="${e.disabled}"
    id="${e.id}"
    data-aria-label="${t(e["data-aria-label"])}"
    clear-aria-label="${t(e["clear-aria-label"])}"
    class="${e.class}"
    style="${e.style}"
    ?readonly="${e.readonly}"
    maxlength="${t(e.maxlength)}"
    minlength="${t(e.minlength)}"
    autocapitalize="${t(e.autocapitalize)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${t(e.autocomplete)}"
    dirname="${t(e.dirname)}"
    pattern="${t(e.pattern)}"
    list="${t(e.list)}"
    size="${t(e.size)}"
    ?display-popover="${e["display-popover"]}"
    popover-aria-label="${t(e["popover-aria-label"])}"
  >
    <mdc-list> ${Array.from(a).map(i=>l`<mdc-listitem label="${i}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},Ne={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:q,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(D)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(k)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"popover-aria-label":{control:"text"},...G(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...W,...M}},w=[{label:"Tropical",items:["Mango","Pineapple","Kiwi","Banana"]},{label:"Berries",items:["Strawberry","Blueberry","Grapes"]},{label:"Citrus",items:["Orange"]},{label:"Common",items:["Apple","Watermelon"]}],K=e=>{const a=e.value??"",i=e.selectedFilters??[],f=E.filter(o=>{const s=o.toLowerCase().includes(a.toLowerCase());if(i.length===0)return s;const n=w.filter(u=>i.includes(u.label)).some(u=>u.items.includes(o));return s&&n});return l`
    <mdc-searchpopover
      @input="${r("oninput")}"
      @change="${r("onchange")}"
      @focus="${r("onfocus")}"
      @blur="${r("onblur")}"
      @clear="${r("onclear")}"
      @chipRemove="${r("onChipRemove")}"
      label="${e.label}"
      placeholder="${e.placeholder}"
      name="${e.name}"
      value="${e.value}"
      ?disabled="${e.disabled}"
      id="${e.id}"
      data-aria-label="${t(e["data-aria-label"])}"
      clear-aria-label="${t(e["clear-aria-label"])}"
      class="${e.class}"
      style="${e.style}"
      ?readonly="${e.readonly}"
      ?display-popover="${e["display-popover"]}"
      popover-aria-label="${t(e["popover-aria-label"])}"
    >
      ${w.map(o=>l`<mdc-chip slot="filters" label="${o.label}"></mdc-chip>`)}
      <mdc-list> ${f.map(o=>l`<mdc-listitem label="${o}"></mdc-listitem>`)} </mdc-list>
    </mdc-searchpopover>
  `},c={args:{"display-popover":!0,value:"Banana",label:"Fruits",placeholder:"Placeholder","popover-aria-label":"Search results",disabled:!1,"clear-aria-label":"Clear"},parameters:{docs:{description:{story:l`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> `}}}},d={render:K,args:{"display-popover":!0,value:"",label:"Fruits",placeholder:"Search fruits","popover-aria-label":"Search results",disabled:!1,"clear-aria-label":"Clear",selectedFilters:["Tropical","Berries"]},parameters:{docs:{description:{story:l`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
          The Searchpopover supports filter chips via the <code>filters</code> slot. Chip components (e.g.
          <code>mdc-filterchip</code>) placed in this slot appear inside the search input area and can be used to apply
          category filters alongside the text search. <br /><br />In this example, filter chips narrow the list of
          fruits shown in the popover. The consumer is responsible for managing the selected state of each chip and
          updating the displayed results accordingly.
        </mdc-text>`}}}};var T,P,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'display-popover': true,
    value: 'Banana',
    label: 'Fruits',
    placeholder: 'Placeholder',
    'popover-aria-label': 'Search results',
    disabled: false,
    'clear-aria-label': 'Clear'
  },
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> \`
      }
    }
  }
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var C,I,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: renderWithFilters,
  args: {
    'display-popover': true,
    value: '',
    label: 'Fruits',
    placeholder: 'Search fruits',
    'popover-aria-label': 'Search results',
    disabled: false,
    'clear-aria-label': 'Clear',
    selectedFilters: ['Tropical', 'Berries']
  },
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
          The Searchpopover supports filter chips via the <code>filters</code> slot. Chip components (e.g.
          <code>mdc-filterchip</code>) placed in this slot appear inside the search input area and can be used to apply
          category filters alongside the text search. <br /><br />In this example, filter chips narrow the list of
          fruits shown in the popover. The consumer is responsible for managing the selected state of each chip and
          updating the displayed results accordingly.
        </mdc-text>\`
      }
    }
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const Ue=["Example","WithFilters"];export{c as Example,d as WithFilters,Ue as __namedExportsOrder,Ne as default};
