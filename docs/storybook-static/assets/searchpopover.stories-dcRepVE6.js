import{t}from"./if-defined-D0L9-6S-.js";import{a2 as T,u as P,k as l,R as v,n as s}from"./iframe-M3ijzwy0.js";import{R as I}from"./class-map-BtHoiKvw.js";import{F as w}from"./input.component-DbR5ZNlb.js";import{S as b}from"./searchfield.component-D3dyvqi0.js";import{P as E}from"./popover.constants-53Sbideg.js";import{D as O}from"./formfieldwrapper.constants-BayEAJRs.js";import{I as S,A,a as _}from"./input.constants-CXoegrn_.js";import"./index-DWCYdM_5.js";import"./index-JPpbG9nX.js";import"./index-0zGS3K33.js";import{c as C,s as L}from"./commonArgTypes-BG7EqI50.js";import{h as D}from"./utils-B5QUENNQ.js";import"./index-CGzeWvbZ.js";import"./index-CFQLQQ7R.js";import"./index-D2zvpdtC.js";import"./index-QBmH-C14.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";import"./index-DI4lBf13.js";import"./index-C6RLDR4F.js";import"./popover.component-8kUPUpQF.js";import"./BackdropMixin-snl_Hu5n.js";import"./KeyDownHandledMixin-CnuZvsMv.js";import"./index-BbwzIs6v.js";import"./index-D1JK9EFs.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-BawKyVHf.js";import"./DisabledMixin-7EXHhexm.js";import"./DataAriaLabelMixin-By13sHn4.js";import"./FormInternalsMixin-CqOscAxO.js";import"./buttonsimple.component-DWNQU9p4.js";import"./query-assigned-elements-DJCBQZB3.js";import"./button.component-C4UfzUmj.js";import"./button.utils-rNW36Ji7.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-CwMrXxQY.js";import"./ListNavigationMixin-DltgCHy-.js";import"./listitem.component-WzphvcOv.js";import"./CaptureDestroyEventForChildElement-B9cC0Ah9.js";const z=T`
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
`,R=[z],k=P.constructTagName("searchpopover"),$={TYPE:S.TEXT,DISPLAY_POPOVER:!1},f="searchpopover-container-triggerid",m="searchpopover-popoverid";var B=Object.defineProperty,c=(e,r,a,U)=>{for(var i=void 0,d=e.length-1,u;d>=0;d--)(u=e[d])&&(i=u(r,a,i)||i);return i&&B(r,a,i),i};const h=class h extends b{constructor(){super(...arguments),this.displayPopover=$.DISPLAY_POPOVER,this.placement=E.BOTTOM_START,this.popoverZIndex=void 0}renderInputElement(){const r=this.hasInputChips?"":this.placeholder;return l`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${w(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${$.TYPE}"
      aria-expanded="${this.displayPopover?"true":"false"}"
      aria-controls="${m}"
      aria-owns="${m}"
      aria-haspopup="${v.DIALOG}"
      aria-describedby="${t(this.helpText?O.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
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
      role=${t(v.COMBOBOX)}
    />`}render(){return l`
      ${this.renderLabelElement()}
      <div
        class="${I({"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
        id="${f}"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${this.handleFilterContainerClick}
            @keydown=${this.handleFilterContainerKeyDown}
            @keyup=${this.handleFilterContainerKeyUp}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement()}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
      <mdc-popover
        triggerID="${f}"
        id="${m}"
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
    `}};h.styles=[...b.styles,...R];let o=h;c([s({type:Boolean,reflect:!0,attribute:"display-popover"})],o.prototype,"displayPopover");c([s({type:String,reflect:!0})],o.prototype,"placement");c([s({type:Number,reflect:!0,attribute:"popover-z-index"})],o.prototype,"popoverZIndex");c([s({type:String,reflect:!0,attribute:"popover-aria-label"})],o.prototype,"popoverAriaLabel");o.register(k);const{action:p}=__STORYBOOK_MODULE_ACTIONS__,F=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],M=e=>{const r=new Set(F.filter(a=>a.toLowerCase().includes(e.value.toLowerCase())));return l` <mdc-searchpopover
    @input="${p("oninput")}"
    @change="${p("onchange")}"
    @focus="${p("onfocus")}"
    @blur="${p("onblur")}"
    @clear="${p("onclear")}"
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
    <mdc-list> ${Array.from(r).map(a=>l`<mdc-listitem label="${a}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},Oe={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:M,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(A)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(_)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"popover-aria-label":{control:"text"},...D(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...C,...L}},n={args:{"display-popover":!0,value:"Banana",label:"Fruits",placeholder:"Placeholder","popover-aria-label":"Search results",disabled:!1,"clear-aria-label":"Clear"},parameters:{docs:{description:{story:l`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> `}}}};var y,x,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Se=["Example"];export{n as Example,Se as __namedExportsOrder,Oe as default};
