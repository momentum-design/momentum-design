import{t}from"./if-defined-CSf8oUlc.js";import{S as T,u as P,k as n,W as v,n as d}from"./iframe-DhGqAUJy.js";import{R as I}from"./class-map-WKHBl-hA.js";import{F as O}from"./input.component-DL_yiT0K.js";import{S as b}from"./searchfield.component-BWtUNz5f.js";import{K as $}from"./TabIndexMixin-Bv4GD8lE.js";import{P as w,D as S}from"./popover.component-oRta-e5F.js";import{D as _}from"./formfieldwrapper.constants-ByYhGwl9.js";import{I as A,A as L,a as C}from"./input.constants-WTMvBSq4.js";import"./index-B5gs7qSX.js";import"./index-DviT2LAi.js";import"./index-gt5Bzcvv.js";import{c as D,s as z}from"./commonArgTypes-BluK8w5L.js";import{a as R}from"./utils-Dd_sfl9-.js";import"./index-m-j50HLl.js";import"./index-dvRaGtt7.js";import"./index-CVay_bXF.js";import"./index-DD5pkVLg.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";import"./index-BHehcsiy.js";import"./index-DnchMtn3.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./index-CZ0T9uoi.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-CuP5b92p.js";import"./DisabledMixin-CrYPrAlK.js";import"./DataAriaLabelMixin-V3heMmvg.js";import"./FormInternalsMixin-CimE-ZvT.js";import"./query-DXShiZ7f.js";import"./buttonsimple.component-Cs5gzG_Z.js";import"./query-assigned-elements-uEuc3rg8.js";import"./BackdropMixin-DwiTpNLe.js";import"./button.component-D63XHURa.js";import"./button.utils-rNW36Ji7.js";import"./index-DLnXiPEA.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-9Qg181rg.js";import"./ListNavigationMixin-WhHyHYTA.js";import"./listitem.component-C1MVtq8W.js";import"./CaptureDestroyEventForChildElement-BFHBQqNs.js";const k=T`
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
`,B=[k],F=P.constructTagName("searchpopover"),f={TYPE:A.TEXT,DISPLAY_POPOVER:!1},y="searchpopover-container-triggerid",c="searchpopover-popoverid";var N=Object.defineProperty,m=(e,o,r,Y)=>{for(var a=void 0,s=e.length-1,u;s>=0;s--)(u=e[s])&&(a=u(o,r,a)||a);return a&&N(o,r,a),a};const h=class h extends b{constructor(){super(...arguments),this.displayPopover=f.DISPLAY_POPOVER,this.placement=w.BOTTOM_START,this.popoverZIndex=S.Z_INDEX}renderInputElement(){const o=this.hasInputChips?"":this.placeholder;return n`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${O(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${f.TYPE}"
      aria-expanded="${this.displayPopover?"true":"false"}"
      aria-controls="${c}"
      aria-owns="${c}"
      aria-haspopup="${v.DIALOG}"
      aria-describedby="${t(this.helpText?_.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
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
      role=${t(v.COMBOBOX)}
    />`}render(){return n`
      ${this.renderLabelElement()}
      <div
        class="${I({"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
        id="${y}"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${()=>this.inputElement.focus()}
            @keydown=${o=>o.key===$.ENTER?this.inputElement.focus():null}
            @keyup=${o=>o.key===$.SPACE?this.inputElement.focus():null}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement()}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
      <mdc-popover
        triggerID="${y}"
        id="${c}"
        trigger="manual"
        interactive
        ?visible=${this.displayPopover}
        hide-on-outside-click
        hide-on-escape
        focus-back-to-trigger
        size
        placement="${this.placement}"
        disable-aria-expanded
        z-index="${t(this.popoverZIndex)}"
        exportparts="popover-content"
      >
        <slot></slot>
      </mdc-popover>
    `}};h.styles=[...b.styles,...B];let i=h;m([d({type:Boolean,reflect:!0,attribute:"display-popover"})],i.prototype,"displayPopover");m([d({type:String,reflect:!0})],i.prototype,"placement");m([d({type:Number,reflect:!0,attribute:"popover-z-index"})],i.prototype,"popoverZIndex");i.register(F);const{action:p}=__STORYBOOK_MODULE_ACTIONS__,M=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],U=e=>{const o=new Set(M.filter(r=>r.toLowerCase().includes(e.value.toLowerCase())));return n` <mdc-searchpopover
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
  >
    <mdc-list> ${Array.from(o).map(r=>n`<mdc-listitem label="${r}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},Le={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:U,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(L)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(C)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...R(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...D,...z}},l={args:{"display-popover":!0,value:"Banana",label:"Fruits",placeholder:"Placeholder",disabled:!1,"clear-aria-label":"Clear"},parameters:{docs:{description:{story:n`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> `}}}};var g,x,E;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'display-popover': true,
    value: 'Banana',
    label: 'Fruits',
    placeholder: 'Placeholder',
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
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ce=["Example"];export{l as Example,Ce as __namedExportsOrder,Le as default};
