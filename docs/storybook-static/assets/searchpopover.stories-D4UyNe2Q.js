import{t}from"./if-defined-Cx4K7iaJ.js";import{U as T,u as P,k as l,R as v,n as s}from"./iframe-Ci39ks_7.js";import{R as I}from"./class-map-zM4MEWDH.js";import{F as O}from"./input.component-mgrfJDwK.js";import{S as b}from"./searchfield.component-CtJ5JkFd.js";import{K as $}from"./TabIndexMixin-QFZDRRE1.js";import{P as w,D as S}from"./popover.constants-B0rTLfOw.js";import{D as A}from"./formfieldwrapper.constants-DICTCUoR.js";import{I as _,A as L,a as C}from"./input.constants-CqyOepOj.js";import"./index-DQHUYheE.js";import"./index-BJmBoyrR.js";import"./index-XgQ6WQql.js";import{c as D,s as R}from"./commonArgTypes-BG7EqI50.js";import{h as z}from"./utils-D6nie9pS.js";import"./index-CYQ4IISX.js";import"./index-MJ4r6g4c.js";import"./index-B_iXSaRU.js";import"./index-Cs7mT1jF.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";import"./index-CnMv4jPr.js";import"./index-ScV7KWA5.js";import"./base-DIkkzJ-c.js";import"./popover.component-BZdth0Na.js";import"./BackdropMixin-BWMMZldR.js";import"./index-BBP-kzvG.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DytQHSOK.js";import"./DisabledMixin-BnT5U332.js";import"./DataAriaLabelMixin-C4a3RZbM.js";import"./FormInternalsMixin-Dgs_4wdQ.js";import"./query-BPxBhMfF.js";import"./buttonsimple.component-oQttXH7Q.js";import"./query-assigned-elements-uEuc3rg8.js";import"./button.component-BCzMX59_.js";import"./button.utils-rNW36Ji7.js";import"./index-BYcvpXnX.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-CIq-5Zsu.js";import"./ListNavigationMixin-DoC0OSo8.js";import"./listitem.component-DR502wQW.js";import"./CaptureDestroyEventForChildElement-sVKiMB3B.js";const k=T`
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
`,B=[k],F=P.constructTagName("searchpopover"),f={TYPE:_.TEXT,DISPLAY_POPOVER:!1},y="searchpopover-container-triggerid",m="searchpopover-popoverid";var N=Object.defineProperty,c=(e,o,a,Y)=>{for(var i=void 0,d=e.length-1,u;d>=0;d--)(u=e[d])&&(i=u(o,a,i)||i);return i&&N(o,a,i),i};const h=class h extends b{constructor(){super(...arguments),this.displayPopover=f.DISPLAY_POPOVER,this.placement=w.BOTTOM_START,this.popoverZIndex=S.Z_INDEX}renderInputElement(){const o=this.hasInputChips?"":this.placeholder;return l`<input
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
      aria-controls="${m}"
      aria-owns="${m}"
      aria-haspopup="${v.DIALOG}"
      aria-describedby="${t(this.helpText?A.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
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
    />`}render(){return l`
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
    `}};h.styles=[...b.styles,...B];let r=h;c([s({type:Boolean,reflect:!0,attribute:"display-popover"})],r.prototype,"displayPopover");c([s({type:String,reflect:!0})],r.prototype,"placement");c([s({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");c([s({type:String,reflect:!0,attribute:"popover-aria-label"})],r.prototype,"popoverAriaLabel");r.register(F);const{action:p}=__STORYBOOK_MODULE_ACTIONS__,U=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],M=e=>{const o=new Set(U.filter(a=>a.toLowerCase().includes(e.value.toLowerCase())));return l` <mdc-searchpopover
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
    <mdc-list> ${Array.from(o).map(a=>l`<mdc-listitem label="${a}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},Le={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:M,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(L)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(C)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"popover-aria-label":{control:"text"},...z(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...D,...R}},n={args:{"display-popover":!0,value:"Banana",label:"Fruits",placeholder:"Placeholder","popover-aria-label":"Search results",disabled:!1,"clear-aria-label":"Clear"},parameters:{docs:{description:{story:l`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> `}}}};var x,g,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const Ce=["Example"];export{n as Example,Ce as __namedExportsOrder,Le as default};
