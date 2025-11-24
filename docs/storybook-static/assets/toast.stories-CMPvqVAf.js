import{u as P,I as Y,g as k,B as f,S as W,h as y,k as e,q as z,E as _,n as l,$ as A,V as G}from"./iframe-C1Rm-ZyG.js";import{t as V}from"./if-defined-CQYAGgbL.js";import{o as j}from"./query-assigned-elements-uEuc3rg8.js";import{F as Z}from"./FooterMixin-fYbEW0DY.js";import"./index-CIWNyVoT.js";import"./index-CTGz_DG7.js";import"./index-D0yFm7Aq.js";import"./index-aBR_K5RL.js";import{c as H,s as J}from"./commonArgTypes-BluK8w5L.js";import{d as X,a as q,h as v}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./link.constants-CZ0SDkCF.js";import"./index-BdqHAH0n.js";import"./index-DTrDRi1E.js";import"./button.component-CGqnAPiD.js";import"./buttonsimple.component-CE6iZ7ok.js";import"./TabIndexMixin-CHWXeSIH.js";import"./DisabledMixin-CpNZKoNP.js";import"./button.utils-rNW36Ji7.js";import"./IconNameMixin-N6o8iVCE.js";import"./index-CQG1h-ty.js";const K=P.constructTagName("toast"),m={CUSTOM:"custom",SUCCESS:"success",WARNING:"warning",ERROR:"error"},T={SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},a={HEADER_TAG_NAME:"h2",CANCEL_ICON:"cancel-bold",ARROW_UP_BOLD:"arrow-up-bold",ARROW_DOWN_BOLD:"arrow-down-bold",PREFIX_ICON_SIZE:1.5,CLOSE_ICON_SIZE:Y[20],BUTTON:k,PRIMARY_BUTTON:f.PRIMARY,SECONDARY_BUTTON:f.SECONDARY,TERTIARY_BUTTON:f.TERTIARY,VARIANT:m.CUSTOM},Q=t=>{switch(t){case m.SUCCESS:return T.SUCCESS_ICON_NAME;case m.WARNING:return T.WARNING_ICON_NAME;case m.ERROR:return T.ERROR_ICON_NAME;default:return null}},tt=W`
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

  :host::part(has-footer-buttons) {
    margin-top: 1rem;
  }

  :host::part(footer-button-toggle) {
    text-decoration: none;
  }

  mdc-text::part(text) {
    margin: 0;
  }
`,et=[tt];var ot=Object.defineProperty,s=(t,o,n,g)=>{for(var d=void 0,b=t.length-1,S;b>=0;b--)(S=t[b])&&(d=S(o,n,d)||d);return d&&ot(o,n,d),d};const N=class N extends Z(_){constructor(){super(...arguments),this.variant=a.VARIANT,this.headerTagName=a.HEADER_TAG_NAME,this.ariaLabel=null,this.isDetailVisible=!1,this.hasDetailedSlot=!1,this.hasFooterButtons=""}closeToast(){const o=new CustomEvent("close",{bubbles:!0,composed:!0,detail:{id:this.id}});this.dispatchEvent(o)}toggleDetailVisibility(){this.isDetailVisible=!this.isDetailVisible}updateDetailedSlotPresence(){var o;this.hasDetailedSlot=((o=this.detailedElements)==null?void 0:o.some(n=>{var g;return(g=n.textContent)==null?void 0:g.trim()}))??!1}updateFooterButtonsPresence(){var o,n;this.hasFooterButtons=(((o=this.footerButtonPrimary)==null?void 0:o.length)??0)>0||(((n=this.footerButtonSecondary)==null?void 0:n.length)??0)>0||this.shouldRenderToggleButton()?"has-footer-buttons":""}firstUpdated(o){super.firstUpdated(o),this.updateDetailedSlotPresence()}renderIcon(o){return o?e`
      <mdc-icon name="${o}" size="${a.PREFIX_ICON_SIZE}" part="toast-prefix-icon"></mdc-icon>
    `:y}shouldRenderToggleButton(){return this.hasDetailedSlot&&this.showMoreText&&this.showLessText}renderToggleDetailButton(){return this.shouldRenderToggleButton()?e`
      <mdc-button
        variant="tertiary"
        part="footer-button-toggle"
        @click="${this.toggleDetailVisibility}"
        postfix-icon="${this.isDetailVisible?a.ARROW_UP_BOLD:a.ARROW_DOWN_BOLD}"
      >
        ${this.isDetailVisible?this.showLessText:this.showMoreText}
      </mdc-button>
    `:y}renderHeader(){return this.headerText?e`
          <mdc-text part="toast-header" tagname="${this.headerTagName}" type="${z.BODY_LARGE_BOLD}">
            ${this.headerText}
          </mdc-text>
        `:y}handleFooterSlot(o,n){super.handleFooterSlot(o,n),this.updateFooterButtonsPresence()}renderFooter(){return this.updateFooterButtonsPresence(),e` <slot name="footer">
      <div part="footer ${this.hasFooterButtons}">
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
        ${this.variant===a.VARIANT?e`<slot name="content-prefix"></slot>`:e`${this.renderIcon(Q(this.variant)??"")}`}
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
          aria-label="${V(this.closeButtonAriaLabel)}"
          @click="${this.closeToast}"
        ></mdc-button>
      </div>
      ${this.renderFooter()}
    `}};N.styles=[..._.styles,...et];let r=N;s([l({type:String,reflect:!0})],r.prototype,"variant");s([l({type:String,attribute:"close-button-aria-label"})],r.prototype,"closeButtonAriaLabel");s([l({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText");s([l({type:String,reflect:!0,attribute:"header-tag-name"})],r.prototype,"headerTagName");s([l({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");s([l({type:String,reflect:!0,attribute:"show-more-text"})],r.prototype,"showMoreText");s([l({type:String,reflect:!0,attribute:"show-less-text"})],r.prototype,"showLessText");s([A()],r.prototype,"isDetailVisible");s([A()],r.prototype,"hasDetailedSlot");s([j({slot:"toast-body-detailed",flatten:!0})],r.prototype,"detailedElements");s([A()],r.prototype,"hasFooterButtons");r.register(K);const{action:rt}=__STORYBOOK_MODULE_ACTIONS__,L=t=>e`
  <mdc-toast
    variant="${V(t.variant)}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    show-more-text="${t["show-more-text"]}"
    show-less-text="${t["show-less-text"]}"
    class="${t.class}"
    style="${t.style}"
    @close=${rt("onclose")}
  >
    ${t.children}
    ${t["prefix-icon"]?e`<mdc-icon slot="content-prefix" name="${t["prefix-icon"]}" size="1.5"></mdc-icon>`:""}
    ${t["normal-body"]?e`<mdc-text slot="toast-body-normal" tagname="span">${t["normal-body"]}</mdc-text>`:""}
    ${t["detailed-body"]?e`<mdc-text slot="toast-body-detailed" tagname="span">${t["detailed-body"]}</mdc-text>`:""}
  </mdc-toast>
`,Ot={title:"Components/toast",tags:["autodocs"],component:"mdc-toast",render:L,argTypes:{variant:{control:"select",options:Object.values(m)},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(G)},"close-button-aria-label":{control:"text"},"show-more-text":{control:"text"},"show-less-text":{control:"text"},"prefix-icon":{control:"text",description:"Icon name for the content prefix (slot: content-prefix). Only for custom variant."},"normal-body":{control:"text",description:"Content for the main body of the toast (slot: toast-body-normal)"},"detailed-body":{control:"text",description:"Content for the detailed body of the toast, shown when expanded (slot: toast-body-detailed)"},...H,...J,...X(["content-prefix","toast-body-normal","toast-body-detailed","footer-button-primary","footer-button-secondary","footer"]),...q(["children","isDetailVisible","hasDetailedSlot","detailedElements","hasFooterButtons"])}},i={variant:"custom","header-tag-name":"span","close-button-aria-label":"Close toast"},c=e`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`,h={args:{...i,"header-text":"Toast Title","show-more-text":"Show more","show-less-text":"Show less","prefix-icon":"placeholder-bold","normal-body":"This is a toast message.","detailed-body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",children:e`${c}`}},p={name:"All Variants",render:()=>e`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{...i,variant:"success","header-text":"Success!",children:e`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
            ${c}`},{...i,variant:"warning","header-text":"Warning!",children:e`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
            ${c}`},{...i,variant:"error","header-text":"Error!",children:e`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
            ${c}`},{...i,"header-text":"User Message",children:e`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
            ${c}`}].map(t=>L({...i,...t}))}
    </div>
  `,...v()},u={name:"User Joined",args:{...i,"header-text":"",children:e`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `},...v()},x={name:"Connecting",args:{...i,"header-text":"Connecting",children:e` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> `},...v()};var O,E,C;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...DefaultArgs,
    'header-text': 'Toast Title',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    'prefix-icon': 'placeholder-bold',
    'normal-body': 'This is a toast message.',
    'detailed-body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    children: html\`\${DefaultFooter}\`
  }
}`,...(C=(E=h.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var R,w,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(w=p.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var D,I,B;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'User Joined',
  args: {
    ...DefaultArgs,
    'header-text': '',
    children: html\`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    \`
  },
  ...hideAllControls()
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var U,F,M;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html\` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> \`
  },
  ...hideAllControls()
}`,...(M=(F=x.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const Et=["Example","AllVariants","UserJoined","Connecting"];export{p as AllVariants,x as Connecting,h as Example,u as UserJoined,Et as __namedExportsOrder,Ot as default};
