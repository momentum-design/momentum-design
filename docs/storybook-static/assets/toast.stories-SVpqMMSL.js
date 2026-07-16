import{u as Z,I as J,i as X,B as v,N as K,al as q,r as w,k as o,T as Q,t as H,C as E,U as b,l as tt,n as l,H as et,V as ot}from"./iframe-0HVjsxx2.js";import{F as at}from"./FooterMixin-Cii9a9K_.js";import"./index-BjAK6fzr.js";import"./index-D1spIdNP.js";import"./index-BvFU1Pzs.js";import"./index-B_pnVr11.js";import{c as rt,s as st}from"./commonArgTypes-BG7EqI50.js";import{b as nt,h as it,a as O}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./link.constants-NYLEh7aH.js";import"./index-DEZAMiau.js";import"./index-DTrDRi1E.js";import"./button.component-m_Ls23Rv.js";import"./buttonsimple.component-D5Ep8JpP.js";import"./DisabledMixin-DmXZKRQb.js";import"./KeyDownHandledMixin-TMs2ITqw.js";import"./button.utils-rNW36Ji7.js";import"./IconNameMixin-kP1OG2_2.js";import"./index-B1gp5dMg.js";const lt=Z.constructTagName("toast"),h={CUSTOM:"custom",SUCCESS:"success",WARNING:"warning",ERROR:"error"},A={SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},r={HEADER_TAG_NAME:"h2",CANCEL_ICON:"cancel-bold",ARROW_UP_BOLD:"arrow-up-bold",ARROW_DOWN_BOLD:"arrow-down-bold",PREFIX_ICON_SIZE:1.5,CLOSE_ICON_SIZE:J[20],BUTTON:X,PRIMARY_BUTTON:v.PRIMARY,SECONDARY_BUTTON:v.SECONDARY,TERTIARY_BUTTON:v.TERTIARY,VARIANT:h.CUSTOM},dt=t=>{switch(t){case h.SUCCESS:return A.SUCCESS_ICON_NAME;case h.WARNING:return A.WARNING_ICON_NAME;case h.ERROR:return A.ERROR_ICON_NAME;default:return null}},ct=K`
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
    -webkit-line-clamp: 3;
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
    -webkit-line-clamp: 6;
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
`,ht=[ct];var mt=Object.defineProperty,s=(t,e,n,y)=>{for(var d=void 0,T=t.length-1,N;T>=0;T--)(N=t[T])&&(d=N(e,n,d)||d);return d&&mt(e,n,d),d};const S=class S extends at(E){constructor(){super(...arguments),this.variant=r.VARIANT,this.headerTagName=r.HEADER_TAG_NAME,this.ariaLabel=null,this.isDetailVisible=!1,this.hasDetailedSlot=!1,this.hasOverflowingHeaderText=!1,this.hasFooterButtons=""}closeToast(){const e=new CustomEvent("close",{bubbles:!0,composed:!0,detail:{id:this.id}});this.dispatchEvent(e)}updateDataExpanded(){this.isDetailVisible||!this.canRenderToggleButton()?this.setAttribute("data-expanded","true"):this.removeAttribute("data-expanded")}toggleDetailVisibility(){this.isDetailVisible=!this.isDetailVisible,this.updateDataExpanded()}updateDetailedSlotPresence(){var e;this.hasDetailedSlot=((e=this.detailedElements)==null?void 0:e.some(n=>{var y;return(y=n.textContent)==null?void 0:y.trim()}))??!1}updateFooterButtonsPresence(){var e,n;this.hasFooterButtons=(((e=this.footerButtonPrimary)==null?void 0:e.length)??0)>0||(((n=this.footerButtonSecondary)==null?void 0:n.length)??0)>0||this.shouldRenderToggleButton()?"has-footer-buttons":""}async firstUpdated(e){super.firstUpdated(e),this.updateDetailedSlotPresence(),this.updateDataExpanded(),await this.updateComplete,q(this.headerTextElement)&&(this.hasOverflowingHeaderText=this.headerTextElement.isHeightOverflowing())}updated(e){(e.has("showMoreText")||e.has("showLessText"))&&this.updateDataExpanded()}renderIcon(e){return e?o`
      <mdc-icon name="${e}" size="${r.PREFIX_ICON_SIZE}" part="toast-prefix-icon"></mdc-icon>
    `:w}canRenderToggleButton(){return!!(this.showMoreText&&this.showLessText)}shouldRenderToggleButton(){return this.canRenderToggleButton()&&(this.hasDetailedSlot||this.hasOverflowingHeaderText)}renderToggleDetailButton(){return this.shouldRenderToggleButton()?o`
      <mdc-button
        variant="tertiary"
        part="footer-button-toggle"
        @click="${this.toggleDetailVisibility}"
        postfix-icon="${this.isDetailVisible?r.ARROW_UP_BOLD:r.ARROW_DOWN_BOLD}"
      >
        ${this.isDetailVisible?this.showLessText:this.showMoreText}
      </mdc-button>
    `:w}renderHeader(){return this.headerText?o`
          <mdc-text part="toast-header" tagname="${this.headerTagName}" type="${Q.BODY_LARGE_BOLD}">
            ${this.headerText}
          </mdc-text>
        `:w}handleFooterSlot(e,n){super.handleFooterSlot(e,n),this.updateFooterButtonsPresence()}renderFooter(){return this.updateFooterButtonsPresence(),o` <slot name="footer">
      <div part="footer ${this.hasFooterButtons}">
        ${this.renderToggleDetailButton()}
        <slot
          name="footer-button-secondary"
          @slotchange=${()=>this.handleFooterSlot(r.BUTTON,r.SECONDARY_BUTTON)}
        ></slot>
        <slot
          name="footer-button-primary"
          @slotchange=${()=>this.handleFooterSlot(r.BUTTON,r.PRIMARY_BUTTON)}
        ></slot>
      </div>
    </slot>`}render(){return o`
      <div part="content-container">
        ${this.variant===r.VARIANT?o`<slot name="content-prefix"></slot>`:o`${this.renderIcon(dt(this.variant)??"")}`}
        <div part="toast-content">
          ${this.renderHeader()}
          <slot name="toast-body-normal"></slot>
          <div ?hidden="${!this.isDetailVisible}">
            <slot name="toast-body-detailed"></slot>
          </div>
        </div>
        <mdc-button
          part="toast-close-btn"
          prefix-icon="${r.CANCEL_ICON}"
          variant="${r.TERTIARY_BUTTON}"
          size="${r.CLOSE_ICON_SIZE}"
          aria-label="${H(this.closeButtonAriaLabel)}"
          @click="${this.closeToast}"
        ></mdc-button>
      </div>
      ${this.renderFooter()}
    `}};S.styles=[...E.styles,...ht];let a=S;s([tt("[part='toast-header']")],a.prototype,"headerTextElement");s([l({type:String,reflect:!0})],a.prototype,"variant");s([l({type:String,attribute:"close-button-aria-label"})],a.prototype,"closeButtonAriaLabel");s([l({type:String,reflect:!0,attribute:"header-text"})],a.prototype,"headerText");s([l({type:String,reflect:!0,attribute:"header-tag-name"})],a.prototype,"headerTagName");s([l({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");s([l({type:String,reflect:!0,attribute:"show-more-text"})],a.prototype,"showMoreText");s([l({type:String,reflect:!0,attribute:"show-less-text"})],a.prototype,"showLessText");s([b()],a.prototype,"isDetailVisible");s([b()],a.prototype,"hasDetailedSlot");s([b()],a.prototype,"hasOverflowingHeaderText");s([et({slot:"toast-body-detailed",flatten:!0})],a.prototype,"detailedElements");s([b()],a.prototype,"hasFooterButtons");a.register(lt);const{action:pt}=__STORYBOOK_MODULE_ACTIONS__,j=t=>o`
  <mdc-toast
    variant="${H(t.variant)}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    show-more-text="${t["show-more-text"]}"
    show-less-text="${t["show-less-text"]}"
    class="${t.class}"
    style="${t.style}"
    @close=${pt("onclose")}
  >
    ${t.children}
    ${t["prefix-icon"]?o`<mdc-icon slot="content-prefix" name="${t["prefix-icon"]}" size="1.5"></mdc-icon>`:""}
    ${t["normal-body"]?o`<mdc-text slot="toast-body-normal" tagname="span">${t["normal-body"]}</mdc-text>`:""}
    ${t["detailed-body"]?o`<mdc-text slot="toast-body-detailed" tagname="span">${t["detailed-body"]}</mdc-text>`:""}
  </mdc-toast>
`,It={title:"Components/toast",tags:["autodocs"],component:"mdc-toast",render:j,argTypes:{variant:{control:"select",options:Object.values(h)},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(ot)},"close-button-aria-label":{control:"text"},"show-more-text":{control:"text"},"show-less-text":{control:"text"},"prefix-icon":{control:"text",description:"Icon name for the content prefix (slot: content-prefix). Only for custom variant."},"normal-body":{control:"text",description:"Content for the main body of the toast (slot: toast-body-normal)"},"detailed-body":{control:"text",description:"Content for the detailed body of the toast, shown when expanded (slot: toast-body-detailed)"},...rt,...st,...nt(["content-prefix","toast-body-normal","toast-body-detailed","footer-button-primary","footer-button-secondary","footer"]),...it(["children","isDetailVisible","hasDetailedSlot","detailedElements","hasFooterButtons"])}},i={variant:"custom","header-tag-name":"span","close-button-aria-label":"Close toast"},c=o`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`,m={args:{...i,"header-text":"Toast Title","show-more-text":"Show more","show-less-text":"Show less","prefix-icon":"placeholder-bold","normal-body":"This is a toast message.","detailed-body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",children:o`${c}`}},p={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.","show-more-text":"Show more","show-less-text":"Show less","close-button-aria-label":"Close toast"}},u={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title of more than 6 lines that should overflow without the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.","close-button-aria-label":"Close toast"}},g={name:"All Variants",render:()=>o`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{...i,variant:"success","header-text":"Success!",children:o`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
            ${c}`},{...i,variant:"warning","header-text":"Warning!",children:o`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
            ${c}`},{...i,variant:"error","header-text":"Error!",children:o`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
            ${c}`},{...i,"header-text":"User Message",children:o`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
            ${c}`}].map(t=>j({...i,...t}))}
    </div>
  `,...O()},x={name:"User Joined",args:{...i,"header-text":"",children:o`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `},...O()},f={name:"Connecting",args:{...i,"header-text":"Connecting",children:o` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> `},...O()};var _,C,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,$,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    'close-button-aria-label': 'Close toast'
  }
}`,...(I=($=p.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var B,U,L;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title of more than 6 lines that should overflow without the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.',
    'close-button-aria-label': 'Close toast'
  }
}`,...(L=(U=u.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var F,M,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(M=g.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var k,P,W;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(P=x.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var Y,z,G;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html\` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> \`
  },
  ...hideAllControls()
}`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const Bt=["Example","LongTitle","LongTitleWithoutToggle","AllVariants","UserJoined","Connecting"];export{g as AllVariants,f as Connecting,m as Example,p as LongTitle,u as LongTitleWithoutToggle,x as UserJoined,Bt as __namedExportsOrder,It as default};
