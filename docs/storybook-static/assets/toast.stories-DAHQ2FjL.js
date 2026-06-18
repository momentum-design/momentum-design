import{u as W,I as G,h as H,B as T,a4 as j,ak as Z,z as v,k as e,T as J,t as Y,C as N,v as X,n as l,U as b,V as K}from"./iframe-CYZ064vw.js";import{o as q}from"./query-assigned-elements-D2XoKueq.js";import{F as Q}from"./FooterMixin-Wb1Q8IMF.js";import"./index-C-a6jsM_.js";import"./index-DM419G9w.js";import"./index-BnAQXDVh.js";import"./index-CfcuQ9g0.js";import{c as tt,s as et}from"./commonArgTypes-BG7EqI50.js";import{b as ot,h as rt,a as w}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./link.constants-fYMsMwCW.js";import"./index-Cm4DuzN6.js";import"./index-DTrDRi1E.js";import"./button.component-DTdegw5n.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./KeyDownHandledMixin-DGzJ0rYO.js";import"./button.utils-rNW36Ji7.js";import"./IconNameMixin-DeWqQ5kO.js";import"./index-CrTG-VGM.js";const at=W.constructTagName("toast"),m={CUSTOM:"custom",SUCCESS:"success",WARNING:"warning",ERROR:"error"},A={SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},a={HEADER_TAG_NAME:"h2",CANCEL_ICON:"cancel-bold",ARROW_UP_BOLD:"arrow-up-bold",ARROW_DOWN_BOLD:"arrow-down-bold",PREFIX_ICON_SIZE:1.5,CLOSE_ICON_SIZE:G[20],BUTTON:H,PRIMARY_BUTTON:T.PRIMARY,SECONDARY_BUTTON:T.SECONDARY,TERTIARY_BUTTON:T.TERTIARY,VARIANT:m.CUSTOM},st=t=>{switch(t){case m.SUCCESS:return A.SUCCESS_ICON_NAME;case m.WARNING:return A.WARNING_ICON_NAME;case m.ERROR:return A.ERROR_ICON_NAME;default:return null}},nt=j`
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

  [part='toast-header']::part(text) {
    display: unset;
    -webkit-box-orient: inherit;
    -webkit-line-clamp: inherit;
  }

  :host([data-expanded='true'])::part(toast-header) {
    -webkit-line-clamp: unset;
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
`,it=[nt];var lt=Object.defineProperty,s=(t,o,n,f)=>{for(var d=void 0,y=t.length-1,O;y>=0;y--)(O=t[y])&&(d=O(o,n,d)||d);return d&&lt(o,n,d),d};const S=class S extends Q(N){constructor(){super(...arguments),this.variant=a.VARIANT,this.headerTagName=a.HEADER_TAG_NAME,this.ariaLabel=null,this.isDetailVisible=!1,this.hasDetailedSlot=!1,this.hasOverflowingHeaderText=!1,this.hasFooterButtons=""}closeToast(){const o=new CustomEvent("close",{bubbles:!0,composed:!0,detail:{id:this.id}});this.dispatchEvent(o)}toggleDetailVisibility(){this.isDetailVisible=!this.isDetailVisible,this.isDetailVisible?this.setAttribute("data-expanded","true"):this.removeAttribute("data-expanded")}updateDetailedSlotPresence(){var o;this.hasDetailedSlot=((o=this.detailedElements)==null?void 0:o.some(n=>{var f;return(f=n.textContent)==null?void 0:f.trim()}))??!1}updateFooterButtonsPresence(){var o,n;this.hasFooterButtons=(((o=this.footerButtonPrimary)==null?void 0:o.length)??0)>0||(((n=this.footerButtonSecondary)==null?void 0:n.length)??0)>0||this.shouldRenderToggleButton()?"has-footer-buttons":""}async firstUpdated(o){super.firstUpdated(o),this.updateDetailedSlotPresence(),await this.updateComplete,Z(this.headerTextElement)&&(this.hasOverflowingHeaderText=this.headerTextElement.isHeightOverflowing())}renderIcon(o){return o?e`
      <mdc-icon name="${o}" size="${a.PREFIX_ICON_SIZE}" part="toast-prefix-icon"></mdc-icon>
    `:v}shouldRenderToggleButton(){return(this.hasDetailedSlot||this.hasOverflowingHeaderText)&&this.showMoreText&&this.showLessText}renderToggleDetailButton(){return this.shouldRenderToggleButton()?e`
      <mdc-button
        variant="tertiary"
        part="footer-button-toggle"
        @click="${this.toggleDetailVisibility}"
        postfix-icon="${this.isDetailVisible?a.ARROW_UP_BOLD:a.ARROW_DOWN_BOLD}"
      >
        ${this.isDetailVisible?this.showLessText:this.showMoreText}
      </mdc-button>
    `:v}renderHeader(){return this.headerText?e`
          <mdc-text part="toast-header" tagname="${this.headerTagName}" type="${J.BODY_LARGE_BOLD}">
            ${this.headerText}
          </mdc-text>
        `:v}handleFooterSlot(o,n){super.handleFooterSlot(o,n),this.updateFooterButtonsPresence()}renderFooter(){return this.updateFooterButtonsPresence(),e` <slot name="footer">
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
        ${this.variant===a.VARIANT?e`<slot name="content-prefix"></slot>`:e`${this.renderIcon(st(this.variant)??"")}`}
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
          aria-label="${Y(this.closeButtonAriaLabel)}"
          @click="${this.closeToast}"
        ></mdc-button>
      </div>
      ${this.renderFooter()}
    `}};S.styles=[...N.styles,...it];let r=S;s([X("[part='toast-header']")],r.prototype,"headerTextElement");s([l({type:String,reflect:!0})],r.prototype,"variant");s([l({type:String,attribute:"close-button-aria-label"})],r.prototype,"closeButtonAriaLabel");s([l({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText");s([l({type:String,reflect:!0,attribute:"header-tag-name"})],r.prototype,"headerTagName");s([l({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");s([l({type:String,reflect:!0,attribute:"show-more-text"})],r.prototype,"showMoreText");s([l({type:String,reflect:!0,attribute:"show-less-text"})],r.prototype,"showLessText");s([b()],r.prototype,"isDetailVisible");s([b()],r.prototype,"hasDetailedSlot");s([b()],r.prototype,"hasOverflowingHeaderText");s([q({slot:"toast-body-detailed",flatten:!0})],r.prototype,"detailedElements");s([b()],r.prototype,"hasFooterButtons");r.register(at);const{action:dt}=__STORYBOOK_MODULE_ACTIONS__,z=t=>e`
  <mdc-toast
    variant="${Y(t.variant)}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    show-more-text="${t["show-more-text"]}"
    show-less-text="${t["show-less-text"]}"
    class="${t.class}"
    style="${t.style}"
    @close=${dt("onclose")}
  >
    ${t.children}
    ${t["prefix-icon"]?e`<mdc-icon slot="content-prefix" name="${t["prefix-icon"]}" size="1.5"></mdc-icon>`:""}
    ${t["normal-body"]?e`<mdc-text slot="toast-body-normal" tagname="span">${t["normal-body"]}</mdc-text>`:""}
    ${t["detailed-body"]?e`<mdc-text slot="toast-body-detailed" tagname="span">${t["detailed-body"]}</mdc-text>`:""}
  </mdc-toast>
`,Rt={title:"Components/toast",tags:["autodocs"],component:"mdc-toast",render:z,argTypes:{variant:{control:"select",options:Object.values(m)},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(K)},"close-button-aria-label":{control:"text"},"show-more-text":{control:"text"},"show-less-text":{control:"text"},"prefix-icon":{control:"text",description:"Icon name for the content prefix (slot: content-prefix). Only for custom variant."},"normal-body":{control:"text",description:"Content for the main body of the toast (slot: toast-body-normal)"},"detailed-body":{control:"text",description:"Content for the detailed body of the toast, shown when expanded (slot: toast-body-detailed)"},...tt,...et,...ot(["content-prefix","toast-body-normal","toast-body-detailed","footer-button-primary","footer-button-secondary","footer"]),...rt(["children","isDetailVisible","hasDetailedSlot","detailedElements","hasFooterButtons"])}},i={variant:"custom","header-tag-name":"span","close-button-aria-label":"Close toast"},c=e`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`,h={args:{...i,"header-text":"Toast Title","show-more-text":"Show more","show-less-text":"Show less","prefix-icon":"placeholder-bold","normal-body":"This is a toast message.","detailed-body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",children:e`${c}`}},p={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title that should overflow and trigger the show more/less functionality","show-more-text":"Show more","show-less-text":"Show less","close-button-aria-label":"Close toast"}},u={name:"All Variants",render:()=>e`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{...i,variant:"success","header-text":"Success!",children:e`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
            ${c}`},{...i,variant:"warning","header-text":"Warning!",children:e`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
            ${c}`},{...i,variant:"error","header-text":"Error!",children:e`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
            ${c}`},{...i,"header-text":"User Message",children:e`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
            ${c}`}].map(t=>z({...i,...t}))}
    </div>
  `,...w()},x={name:"User Joined",args:{...i,"header-text":"",children:e`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `},...w()},g={name:"Connecting",args:{...i,"header-text":"Connecting",children:e` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> `},...w()};var _,E,C;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(E=h.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var R,D,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title that should overflow and trigger the show more/less functionality',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    'close-button-aria-label': 'Close toast'
  }
}`,...($=(D=p.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var I,B,U;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(B=u.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var F,L,M;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,k,P;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html\` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> \`
  },
  ...hideAllControls()
}`,...(P=(k=g.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const Dt=["Example","LongTitle","AllVariants","UserJoined","Connecting"];export{u as AllVariants,g as Connecting,h as Example,p as LongTitle,x as UserJoined,Dt as __namedExportsOrder,Rt as default};
