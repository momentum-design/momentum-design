import{t}from"./if-defined-aIZVvHMc.js";import{a2 as A,u as _,k as l,R as $,n as m}from"./iframe-D1GWnnRD.js";import{R as L}from"./class-map-DfIlEC1w.js";import{F}from"./input.component-C1dD9kWz.js";import{S as y}from"./searchfield.component-C4wDt9dp.js";import{P as B}from"./popover.constants-be-r48ud.js";import{D as R}from"./formfieldwrapper.constants-CXR0LAyb.js";import{I as z,A as D,a as k}from"./input.constants-4otKeOYk.js";import"./index-CYnU8gEL.js";import"./index-DaGRSfvX.js";import"./index-DZ8ykn4G.js";import{c as W,s as M}from"./commonArgTypes-BG7EqI50.js";import{h as G}from"./utils-B5QUENNQ.js";import"./index-BoLYET-R.js";import"./index-BMYqjvZM.js";import"./index-C19Jjdof.js";import"./index-D2qUzfn4.js";import"./index-jfec-UUo.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";import"./index-CQARs_kl.js";import"./index-BAo2fFVl.js";import"./popover.component-DnvMhLY6.js";import"./BackdropMixin-CbKajO9O.js";import"./KeyDownHandledMixin-DsG1iV1V.js";import"./index-DMltubGo.js";import"./index-d2EECLTc.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-sm2CYoQl.js";import"./DisabledMixin-BeF7ANP5.js";import"./DataAriaLabelMixin-CKlcWvK4.js";import"./FormInternalsMixin-BqUOvYrt.js";import"./buttonsimple.component-BmxeUP71.js";import"./query-assigned-elements-DUhU34vz.js";import"./chip.component-BZnPQiep.js";import"./IconNameMixin-1Otefv2W.js";import"./staticchip.component-BdzfMyHS.js";import"./alertchip.constants-BKKSa61F.js";import"./button.component-C_lZXD-J.js";import"./button.utils-rNW36Ji7.js";import"./index-DTrDRi1E.js";import"./list.component-BDY9wUMP.js";import"./ListNavigationMixin-C_Ic6O-r.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B0lv7soH.js";import"./CaptureDestroyEventForChildElement-Du23tr4O.js";import"./listitem.component-C0sDzHMS.js";const N=A`
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
`,U=[N],V=_.constructTagName("searchpopover"),g={TYPE:z.TEXT,DISPLAY_POPOVER:!1},x="searchpopover-container-triggerid",b="searchpopover-popoverid";var Y=Object.defineProperty,h=(e,r,i,f)=>{for(var o=void 0,p=e.length-1,n;p>=0;p--)(n=e[p])&&(o=n(r,i,o)||o);return o&&Y(r,i,o),o};const v=class v extends y{constructor(){super(...arguments),this.displayPopover=g.DISPLAY_POPOVER,this.placement=B.BOTTOM_START,this.popoverZIndex=void 0}get scrollContainer(){var r;return((r=this.shadowRoot)==null?void 0:r.querySelector('[part="filters-container"]'))??null}renderInputElement(){const r=this.hasChips?"":this.placeholder;return l`<input
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
      aria-describedby="${t(this.helpText?R.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${t(r)}
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
    `}};v.styles=[...y.styles,...U];let s=v;h([m({type:Boolean,reflect:!0,attribute:"display-popover"})],s.prototype,"displayPopover");h([m({type:String,reflect:!0})],s.prototype,"placement");h([m({type:Number,reflect:!0,attribute:"popover-z-index"})],s.prototype,"popoverZIndex");h([m({type:String,reflect:!0,attribute:"popover-aria-label"})],s.prototype,"popoverAriaLabel");s.register(V);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,E=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],q=e=>{const r=new Set(E.filter(i=>i.toLowerCase().includes(e.value.toLowerCase())));return l` <mdc-searchpopover
    @input="${a("oninput")}"
    @change="${a("onchange")}"
    @focus="${a("onfocus")}"
    @blur="${a("onblur")}"
    @clear="${a("onclear")}"
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
    <mdc-list> ${Array.from(r).map(i=>l`<mdc-listitem label="${i}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},Ge={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:q,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(D)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(k)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"popover-aria-label":{control:"text"},...G(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...W,...M}},w=[{label:"Tropical",items:["Mango","Pineapple","Kiwi","Banana"]},{label:"Berries",items:["Strawberry","Blueberry","Grapes"]},{label:"Citrus",items:["Orange"]},{label:"Common",items:["Apple","Watermelon"]}],K=e=>{const r=e.value??"",i=e.selectedFilters??[],f=E.filter(o=>{const p=o.toLowerCase().includes(r.toLowerCase());if(i.length===0)return p;const n=w.filter(u=>i.includes(u.label)).some(u=>u.items.includes(o));return p&&n});return l`
    <mdc-searchpopover
      @input="${a("oninput")}"
      @change="${a("onchange")}"
      @focus="${a("onfocus")}"
      @blur="${a("onblur")}"
      @clear="${a("onclear")}"
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
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var I,O,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const Ne=["Example","WithFilters"];export{c as Example,d as WithFilters,Ne as __namedExportsOrder,Ge as default};
