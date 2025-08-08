import{i as P,D as f,k as e}from"./lit-element-D5KKan5q.js";import{t as M}from"./if-defined-D5BV9-c0.js";import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as Y,C as _,n as l}from"./provider.component-BaQC7CJH.js";import{r as y}from"./state-C0WmBOuD.js";import{o as z}from"./query-assigned-elements-uEuc3rg8.js";import{F as W}from"./FooterMixin-9o7JZZe3.js";import{T as G,V as j}from"./index-riA1qVWu.js";import{I as Z,T as H,B as T}from"./button.constants-BpS-4nLb.js";import"./index-Dhb6aEYF.js";import"./index-CMXahBZ9.js";import"./index-DCqYXqMk.js";import"./index-l5lTF8yX.js";import"./index--6BtgxvU.js";import{c as J,s as X}from"./commonArgTypes-BluK8w5L.js";import{d as q,a as K,t as Q,h as v}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./link.constants-Df3Yk0mX.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./roles-DU0xbrD4.js";import"./iframe-nDJmt100.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./button.component-DvOKP7op.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./IconNameMixin-CRlZlTtq.js";import"./link.component-Ccgin3ck.js";import"./linksimple.component-D2w8QSTB.js";import"./index-B2Q1YRNx.js";const tt=Y.constructTagName("toast"),m={CUSTOM:"custom",SUCCESS:"success",WARNING:"warning",ERROR:"error"},A={SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},a={HEADER_TAG_NAME:"h2",CANCEL_ICON:"cancel-bold",ARROW_UP_BOLD:"arrow-up-bold",ARROW_DOWN_BOLD:"arrow-down-bold",PREFIX_ICON_SIZE:1.5,CLOSE_ICON_SIZE:Z[20],BUTTON:H,PRIMARY_BUTTON:T.PRIMARY,SECONDARY_BUTTON:T.SECONDARY,TERTIARY_BUTTON:T.TERTIARY,VARIANT:m.CUSTOM},et=o=>{switch(o){case m.SUCCESS:return A.SUCCESS_ICON_NAME;case m.WARNING:return A.WARNING_ICON_NAME;case m.ERROR:return A.ERROR_ICON_NAME;default:return null}},ot=P`
  :host {
    --mdc-toast-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-toast-border-color: var(--mds-color-theme-outline-primary-normal);
    --mdc-toast-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-toast-icon-color: var(--mdc-toast-header-text-color);
    --mdc-toast-elevation-3: var(--mds-elevation-3);
    --mdc-toast-width: 25rem;
    --mdc-toast-padding: 1rem;

    display: block;
    width: var(--mdc-toast-width);
    max-width: 100%;
    padding: var(--mdc-toast-padding);
    background-color: var(--mdc-toast-background-color);
    border: 0.0625rem solid var(--mdc-toast-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-toast-elevation-3);
  }

  :host::part(toast-prefix-icon) {
    color: var(--mdc-toast-icon-color);
  }

  :host([variant='success'])::part(toast-prefix-icon) {
    --mdc-toast-icon-color: var(--mds-color-theme-text-success-normal);
  }

  :host([variant='warning'])::part(toast-prefix-icon) {
    --mdc-toast-icon-color: var(--mds-color-theme-text-warning-normal);
  }

  :host([variant='error'])::part(toast-prefix-icon) {
    --mdc-toast-icon-color: var(--mds-color-theme-text-error-normal);
  }

  :host::part(content-container) {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    align-self: stretch;
  }

  :host::part(toast-content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.25rem;
    flex: 1 0 0;
    align-self: stretch;
  }

  :host::part(toast-header) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    align-self: stretch;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--mdc-toast-header-text-color);
    font-weight: 500;
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mds-font-lineheight-body-large);
  }

  :host::part(footer) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;
    align-self: stretch;
  }

  .has-footer-buttons {
    margin-top: 1rem;
  }

  :host::part(footer-button-toggle) {
    text-decoration: none;
  }

  mdc-text::part(text) {
    margin: 0;
  }
`,rt=[ot];var at=Object.defineProperty,s=(o,t,n,x)=>{for(var c=void 0,b=o.length-1,S;b>=0;b--)(S=o[b])&&(c=S(t,n,c)||c);return c&&at(t,n,c),c};const N=class N extends W(_){constructor(){super(...arguments),this.variant=a.VARIANT,this.headerTagName=a.HEADER_TAG_NAME,this.ariaLabel=null,this.isDetailVisible=!1,this.hasDetailedSlot=!1,this.hasFooterButtons=""}closeToast(){const t=new CustomEvent("close",{bubbles:!0,composed:!0,detail:{id:this.id}});this.dispatchEvent(t)}toggleDetailVisibility(){this.isDetailVisible=!this.isDetailVisible}updateDetailedSlotPresence(){var t;this.hasDetailedSlot=((t=this.detailedElements)==null?void 0:t.some(n=>{var x;return(x=n.textContent)==null?void 0:x.trim()}))??!1}updateFooterButtonsPresence(){var t,n;this.hasFooterButtons=(((t=this.footerButtonPrimary)==null?void 0:t.length)??0)>0||(((n=this.footerButtonSecondary)==null?void 0:n.length)??0)>0||this.shouldRenderToggleButton()?"has-footer-buttons":""}firstUpdated(t){super.firstUpdated(t),this.updateDetailedSlotPresence()}renderIcon(t){return t?e`
      <mdc-icon
        name="${t}"
        size="${a.PREFIX_ICON_SIZE}"
        part="toast-prefix-icon"
      ></mdc-icon>
    `:f}shouldRenderToggleButton(){return this.hasDetailedSlot&&this.showMoreText&&this.showLessText}renderToggleDetailButton(){return this.shouldRenderToggleButton()?e`
      <mdc-linkbutton
        part="footer-button-toggle"
        @click="${this.toggleDetailVisibility}"
        icon-name="${this.isDetailVisible?a.ARROW_UP_BOLD:a.ARROW_DOWN_BOLD}"
      >
        ${this.isDetailVisible?this.showLessText:this.showMoreText}
      </mdc-linkbutton>
    `:f}renderHeader(){return this.headerText?e`
          <mdc-text
            part="toast-header"
            tagname="${this.headerTagName}"
            type="${G.BODY_LARGE_BOLD}"
          >
            ${this.headerText}
          </mdc-text>
        `:f}handleFooterSlot(t,n){super.handleFooterSlot(t,n),this.updateFooterButtonsPresence()}renderFooter(){return this.updateFooterButtonsPresence(),e` <slot name="footer">
      <div part="footer" class="${this.hasFooterButtons}">
        ${this.renderToggleDetailButton()}
        <slot
          name="footer-button-secondary"
          @slotchange=${()=>this.handleFooterSlot(a.BUTTON,a.SECONDARY_BUTTON)}
        ></slot>
        <slot
          name="footer-button-primary"
          @slotchange=${()=>this.handleFooterSlot(a.BUTTON,a.PRIMARY_BUTTON)}
        ></slot>
      </div>
    </slot>`}render(){return e`
      <div part="content-container">
        ${this.variant===a.VARIANT?e`<slot name="content-prefix"></slot>`:e`${this.renderIcon(et(this.variant)??"")}`}
        <div part="toast-content">
          ${this.renderHeader()}
          <slot name="toast-body-normal"></slot>
          <div ?hidden="${!this.isDetailVisible}">
            <slot name="toast-body-detailed"></slot>
          </div>
        </div>
        <mdc-button
            part="toast-close-btn"
            prefix-icon="${a.CANCEL_ICON}"
            variant="${a.TERTIARY_BUTTON}"
            size="${a.CLOSE_ICON_SIZE}"
            aria-label="${M(this.closeButtonAriaLabel)}"
            @click="${this.closeToast}"
          ></mdc-button>
      </div>
      ${this.renderFooter()}
    `}};N.styles=[..._.styles,...rt];let r=N;s([l({type:String,reflect:!0})],r.prototype,"variant");s([l({type:String,attribute:"close-button-aria-label"})],r.prototype,"closeButtonAriaLabel");s([l({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText");s([l({type:String,reflect:!0,attribute:"header-tag-name"})],r.prototype,"headerTagName");s([l({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");s([l({type:String,reflect:!0,attribute:"show-more-text"})],r.prototype,"showMoreText");s([l({type:String,reflect:!0,attribute:"show-less-text"})],r.prototype,"showLessText");s([y()],r.prototype,"isDetailVisible");s([y()],r.prototype,"hasDetailedSlot");s([z({slot:"toast-body-detailed",flatten:!0})],r.prototype,"detailedElements");s([y()],r.prototype,"hasFooterButtons");r.register(tt);const L=o=>e`
  <mdc-toast
    variant="${M(o.variant)}"
    header-text="${o["header-text"]}"
    header-tag-name="${o["header-tag-name"]}"
    close-button-aria-label="${o["close-button-aria-label"]}"
    show-more-text="${o["show-more-text"]}"
    show-less-text="${o["show-less-text"]}"
    class="${o.class}"
    style="${o.style}"
    @close=${k("onclose")}
  >
    ${o.children}
  </mdc-toast>
`,Yt={title:"Components/toast",tags:["autodocs"],component:"mdc-toast",render:L,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(m)},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(j)},"close-button-aria-label":{control:"text"},"show-more-text":{control:"text"},"show-less-text":{control:"text"},...J,...X,...q(["children"]),...K(["isDetailVisible","hasDetailedSlot","detailedElements","hasFooterButtons"]),...Q(["--mdc-toast-background-color","--mdc-toast-border-color","--mdc-toast-header-text-color","--mdc-toast-icon-color","--mdc-toast-elevation-3","--mdc-toast-width","--mdc-toast-padding"])}},i={variant:"custom","header-tag-name":"span","close-button-aria-label":"Close toast"},d=e`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`,h={args:{...i,"header-text":"Toast Title","show-more-text":"Show more","show-less-text":"Show less",children:e`
      <mdc-icon slot="content-prefix" name="placeholder-bold" size="1.5"></mdc-icon>
      <mdc-text slot="toast-body-normal" tagname="span">This is a toast message.</mdc-text>
      <mdc-text slot="toast-body-detailed" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text>
      ${d}`}},p={name:"All Variants",render:()=>e`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{...i,variant:"success","header-text":"Success!",children:e`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
        ${d}`},{...i,variant:"warning","header-text":"Warning!",children:e`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
        ${d}`},{...i,variant:"error","header-text":"Error!",children:e`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
        ${d}`},{...i,"header-text":"User Message",children:e`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
        <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
        ${d}`}].map(o=>L({...i,...o}))}
    </div>
  `,...v()},u={name:"User Joined",args:{...i,"header-text":"",children:e`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size=24></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `},...v()},g={name:"Connecting",args:{...i,"header-text":"Connecting",children:e`
      <mdc-spinner slot="content-prefix" size="small"></mdc-spinner>
    `},...v()};var E,C,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...DefaultArgs,
    'header-text': 'Toast Title',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    children: html\`
      <mdc-icon slot="content-prefix" name="placeholder-bold" size="1.5"></mdc-icon>
      <mdc-text slot="toast-body-normal" tagname="span">This is a toast message.</mdc-text>
      <mdc-text slot="toast-body-detailed" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text>
      \${DefaultFooter}\`
  }
}`,...(O=(C=h.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,w,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      \${[{
    ...DefaultArgs,
    variant: 'success',
    'header-text': 'Success!',
    children: html\`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
        \${DefaultFooter}\`
  }, {
    ...DefaultArgs,
    variant: 'warning',
    'header-text': 'Warning!',
    children: html\`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
        \${DefaultFooter}\`
  }, {
    ...DefaultArgs,
    variant: 'error',
    'header-text': 'Error!',
    children: html\`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
        \${DefaultFooter}\`
  }, {
    ...DefaultArgs,
    'header-text': 'User Message',
    children: html\`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
        <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
        \${DefaultFooter}\`
  }].map(args => render({
    ...DefaultArgs,
    ...args
  }))}
    </div>
  \`,
  ...hideAllControls()
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var $,I,B;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'User Joined',
  args: {
    ...DefaultArgs,
    'header-text': '',
    children: html\`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size=24></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    \`
  },
  ...hideAllControls()
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var U,F,V;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html\`
      <mdc-spinner slot="content-prefix" size="small"></mdc-spinner>
    \`
  },
  ...hideAllControls()
}`,...(V=(F=g.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const zt=["Example","AllVariants","UserJoined","Connecting"];export{p as AllVariants,g as Connecting,h as Example,u as UserJoined,zt as __namedExportsOrder,Yt as default};
