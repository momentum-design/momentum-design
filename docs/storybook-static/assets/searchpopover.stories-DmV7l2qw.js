import{N as A,u as _,k as l,S as L,R as f,t,aa as F,n as h}from"./iframe-BrN8x_Z0.js";import{S as y}from"./searchfield.component-nEW4RiJF.js";import{P as R}from"./popover.constants-DWapbakJ.js";import{D as B}from"./formfieldwrapper.constants-OU-UvGf4.js";import{I as z,A as D,a as k}from"./input.constants-CjrJNpEq.js";import"./index-BDHBrWNs.js";import"./index-D5lPBL37.js";import"./index-CUDtTPD0.js";import{c as W,s as M}from"./commonArgTypes-BG7EqI50.js";import{h as N}from"./utils-B5QUENNQ.js";import"./index-BIpEv-sU.js";import"./index-B6PHG5Mc.js";import"./index-B4V-86yH.js";import"./index-BYfQpn2w.js";import"./index-SAlzpmHk.js";import"./preload-helper-C1FmrZbK.js";import"./input.component-CTSLZjub.js";import"./index-DKcGWQe-.js";import"./index-BkNlFu_U.js";import"./statusmessage.constants-DjH5p_-2.js";import"./index-Cosl45P9.js";import"./popover.component-BtH5R005.js";import"./BackdropMixin-C1JBgKdc.js";import"./KeyDownHandledMixin-lEQrVlT7.js";import"./index-CuaFIEeJ.js";import"./index-DkYf7QLt.js";import"./formfieldwrapper.component-BjWEjXnw.js";import"./DisabledMixin-DjI3Wyw_.js";import"./DataAriaLabelMixin-3qTrfG9e.js";import"./FormInternalsMixin-BeyXRvUO.js";import"./buttonsimple.component-C085WkLc.js";import"./ControlTypeMixin-CaLTWc5n.js";import"./chip.component-Jk-b33iC.js";import"./IconNameMixin-CbFovggv.js";import"./staticchip.component-vhqfRbGP.js";import"./alertchip.constants-BICOPfjm.js";import"./button.component-Duy2Fx_8.js";import"./button.utils-rNW36Ji7.js";import"./index-DTrDRi1E.js";import"./list.component-Bt4GMfBI.js";import"./ListNavigationMixin-D0wByhPR.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CI-fhSvv.js";import"./CaptureDestroyEventForChildElement-Bxc7Ugv1.js";import"./listitem.component-BoZaS87A.js";const G=A`
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
`,U=[G],V=_.constructTagName("searchpopover"),g={TYPE:z.TEXT,DISPLAY_POPOVER:!1},x="searchpopover-container-triggerid",v="searchpopover-popoverid";var Y=Object.defineProperty,m=(e,o,i,$)=>{for(var r=void 0,p=e.length-1,n;p>=0;p--)(n=e[p])&&(r=n(o,i,r)||r);return r&&Y(o,i,r),r};const b=class b extends y{constructor(){super(...arguments),this.displayPopover=g.DISPLAY_POPOVER,this.placement=R.BOTTOM_START,this.popoverZIndex=void 0}get scrollContainer(){var o;return((o=this.shadowRoot)==null?void 0:o.querySelector('[part="filters-container"]'))??null}handlePopoverHidden(){var o;(this===document.activeElement||this.contains(document.activeElement))&&((o=this.inputElement)==null||o.focus())}renderInputElement(){const o=this.hasChips?"":this.placeholder;return l`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${L(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${g.TYPE}"
      aria-expanded="${this.displayPopover?"true":"false"}"
      aria-controls="${v}"
      aria-owns="${v}"
      aria-haspopup="${f.DIALOG}"
      aria-describedby="${t(this.helpText?B.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${t(o)}
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
      role=${t(f.COMBOBOX)}
    />`}render(){return l`
      ${this.renderLabelElement()}
      <div
        class="${F({"mdc-focus-ring":this.isInputFocused})}"
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
        id="${v}"
        trigger="manual"
        interactive
        ?visible=${this.displayPopover}
        hide-on-outside-click
        hide-on-escape
        size
        @hidden=${this.handlePopoverHidden}
        placement="${this.placement}"
        aria-label="${t(this.popoverAriaLabel)}"
        disable-aria-expanded
        z-index="${t(this.popoverZIndex)}"
        exportparts="popover-content"
      >
        <slot></slot>
      </mdc-popover>
    `}};b.styles=[...y.styles,...U];let s=b;m([h({type:Boolean,reflect:!0,attribute:"display-popover"})],s.prototype,"displayPopover");m([h({type:String,reflect:!0})],s.prototype,"placement");m([h({type:Number,reflect:!0,attribute:"popover-z-index"})],s.prototype,"popoverZIndex");m([h({type:String,reflect:!0,attribute:"popover-aria-label"})],s.prototype,"popoverAriaLabel");s.register(V);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],q=e=>{const o=new Set(O.filter(i=>i.toLowerCase().includes(e.value.toLowerCase())));return l` <mdc-searchpopover
    @input="${a("oninput")}"
    @change="${a("onchange")}"
    @focus="${a("onfocus")}"
    @blur="${a("onblur")}"
    @clear="${a("onclear")}"
    @chipRemove="${a("onChipRemove")}"
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
    <mdc-list> ${Array.from(o).map(i=>l`<mdc-listitem label="${i}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},We={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:q,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(D)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(k)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"popover-aria-label":{control:"text"},...N(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...W,...M}},w=[{label:"Tropical",items:["Mango","Pineapple","Kiwi","Banana"]},{label:"Berries",items:["Strawberry","Blueberry","Grapes"]},{label:"Citrus",items:["Orange"]},{label:"Common",items:["Apple","Watermelon"]}],K=e=>{const o=e.value??"",i=e.selectedFilters??[],$=O.filter(r=>{const p=r.toLowerCase().includes(o.toLowerCase());if(i.length===0)return p;const n=w.filter(u=>i.includes(u.label)).some(u=>u.items.includes(r));return p&&n});return l`
    <mdc-searchpopover
      @input="${a("oninput")}"
      @change="${a("onchange")}"
      @focus="${a("onfocus")}"
      @blur="${a("onblur")}"
      @clear="${a("onclear")}"
      @chipRemove="${a("onChipRemove")}"
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
      ${w.map(r=>l`<mdc-chip slot="filters" label="${r.label}"></mdc-chip>`)}
      <mdc-list> ${$.map(r=>l`<mdc-listitem label="${r}"></mdc-listitem>`)} </mdc-list>
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
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var E,C,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Me=["Example","WithFilters"];export{c as Example,d as WithFilters,Me as __namedExportsOrder,We as default};
