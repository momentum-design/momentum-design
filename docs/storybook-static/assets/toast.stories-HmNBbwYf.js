import{u as q,I as Q,i as tt,B as w,S as et,al as ot,v as A,k as o,T as at,t as X,C as R,X as y,m as rt,n as c,L as st,V as nt,K as it,q as lt}from"./iframe-D5qwq8cl.js";import{F as ct}from"./FooterMixin-BQmhD3hQ.js";import"./index-BfDwIRea.js";import"./index-CdBP_yce.js";import"./index-BaU8vzyn.js";import"./index-LRrBqvQe.js";import{c as dt,s as ht}from"./commonArgTypes-BG7EqI50.js";import{b as mt,h as pt,a as O}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./link.constants-BZaZTMe1.js";import"./index-BqZiOeq9.js";import"./index-DTrDRi1E.js";import"./button.component-CvBqu9kP.js";import"./buttonsimple.component-Ue29ahk0.js";import"./DisabledMixin-D03aknaA.js";import"./KeyDownHandledMixin-BhPsZOr4.js";import"./button.utils-rNW36Ji7.js";import"./IconNameMixin-BlijQY6W.js";import"./index-CunRoCbR.js";const ut=q.constructTagName("toast"),m={CUSTOM:"custom",SUCCESS:"success",WARNING:"warning",ERROR:"error"},S={SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},s={HEADER_TAG_NAME:"h2",CANCEL_ICON:"cancel-bold",ARROW_UP_BOLD:"arrow-up-bold",ARROW_DOWN_BOLD:"arrow-down-bold",PREFIX_ICON_SIZE:1.5,CLOSE_ICON_SIZE:Q[20],BUTTON:tt,PRIMARY_BUTTON:w.PRIMARY,SECONDARY_BUTTON:w.SECONDARY,TERTIARY_BUTTON:w.TERTIARY,VARIANT:m.CUSTOM},gt=t=>{switch(t){case m.SUCCESS:return S.SUCCESS_ICON_NAME;case m.WARNING:return S.WARNING_ICON_NAME;case m.ERROR:return S.ERROR_ICON_NAME;default:return null}},ft=et`
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
`,xt=[ft];var bt=Object.defineProperty,n=(t,e,r,i)=>{for(var d=void 0,v=t.length-1,E;v>=0;v--)(E=t[v])&&(d=E(e,r,d)||d);return d&&bt(e,r,d),d};const N=class N extends ct(R){constructor(){super(...arguments),this.variant=s.VARIANT,this.headerTagName=s.HEADER_TAG_NAME,this.ariaLabel=null,this.isDetailVisible=!1,this.hasDetailedSlot=!1,this.hasOverflowingHeaderText=!1,this.hasFooterButtons=""}closeToast(){const e=new CustomEvent("close",{bubbles:!0,composed:!0,detail:{id:this.id}});this.dispatchEvent(e)}updateDataExpanded(){this.isDetailVisible||!this.canRenderToggleButton()?this.setAttribute("data-expanded","true"):this.removeAttribute("data-expanded")}toggleDetailVisibility(){this.isDetailVisible=!this.isDetailVisible,this.updateDataExpanded()}updateDetailedSlotPresence(){var e;this.hasDetailedSlot=((e=this.detailedElements)==null?void 0:e.some(r=>{var i;return(i=r.textContent)==null?void 0:i.trim()}))??!1}updateFooterButtonsPresence(){var e,r;this.hasFooterButtons=(((e=this.footerButtonPrimary)==null?void 0:e.length)??0)>0||(((r=this.footerButtonSecondary)==null?void 0:r.length)??0)>0||this.shouldRenderToggleButton()?"has-footer-buttons":""}async firstUpdated(e){super.firstUpdated(e),this.updateDetailedSlotPresence(),this.updateDataExpanded()}async updated(e){(e.has("showMoreText")||e.has("showLessText"))&&this.updateDataExpanded(),e.has("headerText")&&(await this.updateComplete,ot(this.headerTextElement)&&(this.hasOverflowingHeaderText=this.headerTextElement.isHeightOverflowing()))}renderIcon(e){return e?o`
      <mdc-icon name="${e}" size="${s.PREFIX_ICON_SIZE}" part="toast-prefix-icon"></mdc-icon>
    `:A}canRenderToggleButton(){return!!(this.showMoreText&&this.showLessText)}shouldRenderToggleButton(){return this.canRenderToggleButton()&&(this.hasDetailedSlot||this.hasOverflowingHeaderText)}renderToggleDetailButton(){return this.shouldRenderToggleButton()?o`
      <mdc-button
        variant="tertiary"
        part="footer-button-toggle"
        @click="${this.toggleDetailVisibility}"
        postfix-icon="${this.isDetailVisible?s.ARROW_UP_BOLD:s.ARROW_DOWN_BOLD}"
      >
        ${this.isDetailVisible?this.showLessText:this.showMoreText}
      </mdc-button>
    `:A}renderHeader(){return this.headerText?o`
          <mdc-text part="toast-header" tagname="${this.headerTagName}" type="${at.BODY_LARGE_BOLD}">
            ${this.headerText}
          </mdc-text>
        `:A}handleFooterSlot(e,r){super.handleFooterSlot(e,r),this.updateFooterButtonsPresence()}renderFooter(){return this.updateFooterButtonsPresence(),o` <slot name="footer">
      <div part="footer ${this.hasFooterButtons}">
        ${this.renderToggleDetailButton()}
        <slot
          name="footer-button-secondary"
          @slotchange=${()=>this.handleFooterSlot(s.BUTTON,s.SECONDARY_BUTTON)}
        ></slot>
        <slot
          name="footer-button-primary"
          @slotchange=${()=>this.handleFooterSlot(s.BUTTON,s.PRIMARY_BUTTON)}
        ></slot>
      </div>
    </slot>`}render(){return o`
      <div part="content-container">
        ${this.variant===s.VARIANT?o`<slot name="content-prefix"></slot>`:o`${this.renderIcon(gt(this.variant)??"")}`}
        <div part="toast-content">
          ${this.renderHeader()}
          <slot name="toast-body-normal"></slot>
          <div ?hidden="${!this.isDetailVisible}">
            <slot name="toast-body-detailed"></slot>
          </div>
        </div>
        <mdc-button
          part="toast-close-btn"
          prefix-icon="${s.CANCEL_ICON}"
          variant="${s.TERTIARY_BUTTON}"
          size="${s.CLOSE_ICON_SIZE}"
          aria-label="${X(this.closeButtonAriaLabel)}"
          @click="${this.closeToast}"
        ></mdc-button>
      </div>
      ${this.renderFooter()}
    `}};N.styles=[...R.styles,...xt];let a=N;n([rt("[part='toast-header']")],a.prototype,"headerTextElement");n([c({type:String,reflect:!0})],a.prototype,"variant");n([c({type:String,attribute:"close-button-aria-label"})],a.prototype,"closeButtonAriaLabel");n([c({type:String,reflect:!0,attribute:"header-text"})],a.prototype,"headerText");n([c({type:String,reflect:!0,attribute:"header-tag-name"})],a.prototype,"headerTagName");n([c({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");n([c({type:String,reflect:!0,attribute:"show-more-text"})],a.prototype,"showMoreText");n([c({type:String,reflect:!0,attribute:"show-less-text"})],a.prototype,"showLessText");n([y()],a.prototype,"isDetailVisible");n([y()],a.prototype,"hasDetailedSlot");n([y()],a.prototype,"hasOverflowingHeaderText");n([st({slot:"toast-body-detailed",flatten:!0})],a.prototype,"detailedElements");n([y()],a.prototype,"hasFooterButtons");a.register(ut);const{action:Tt}=__STORYBOOK_MODULE_ACTIONS__,K=t=>o`
  <mdc-toast
    variant="${X(t.variant)}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    show-more-text="${t["show-more-text"]}"
    show-less-text="${t["show-less-text"]}"
    class="${t.class}"
    style="${t.style}"
    @close=${Tt("onclose")}
  >
    ${t.children}
    ${t["prefix-icon"]?o`<mdc-icon slot="content-prefix" name="${t["prefix-icon"]}" size="1.5"></mdc-icon>`:""}
    ${t["normal-body"]?o`<mdc-text slot="toast-body-normal" tagname="span">${t["normal-body"]}</mdc-text>`:""}
    ${t["detailed-body"]?o`<mdc-text slot="toast-body-detailed" tagname="span">${t["detailed-body"]}</mdc-text>`:""}
  </mdc-toast>
`,Mt={title:"Components/toast",tags:["autodocs"],component:"mdc-toast",render:K,argTypes:{variant:{control:"select",options:Object.values(m)},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(nt)},"close-button-aria-label":{control:"text"},"show-more-text":{control:"text"},"show-less-text":{control:"text"},"prefix-icon":{control:"text",description:"Icon name for the content prefix (slot: content-prefix). Only for custom variant."},"normal-body":{control:"text",description:"Content for the main body of the toast (slot: toast-body-normal)"},"detailed-body":{control:"text",description:"Content for the detailed body of the toast, shown when expanded (slot: toast-body-detailed)"},...dt,...ht,...mt(["content-prefix","toast-body-normal","toast-body-detailed","footer-button-primary","footer-button-secondary","footer"]),...pt(["children","isDetailVisible","hasDetailedSlot","detailedElements","hasFooterButtons"])}},l={variant:"custom","header-tag-name":"span","close-button-aria-label":"Close toast"},h=o`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`,p={args:{...l,"header-text":"Toast Title","show-more-text":"Show more","show-less-text":"Show less","prefix-icon":"placeholder-bold","normal-body":"This is a toast message.","detailed-body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",children:o`${h}`}},u={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.","show-more-text":"Show more","show-less-text":"Show less","close-button-aria-label":"Close toast"}},g={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title of more than 6 lines that should overflow without the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.","close-button-aria-label":"Close toast"}},f={name:"Dynamic Short/Long Title",render:()=>{const t="This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.",e="Short Title",r=lt();return o`
      <mdc-toast
        ${it(r)}
        variant="success"
        header-tag-name="span"
        header-text=${t}
        show-more-text="Show more"
        show-less-text="Show less"
        close-button-aria-label="Close toast"
      >
      </mdc-toast>
      <mdc-button
        @click=${()=>{var i;(i=r.value)==null||i.setAttribute("header-text",e)}}
        >Short Title</mdc-button
      >
      <mdc-button
        @click=${()=>{var i;(i=r.value)==null||i.setAttribute("header-text",t)}}
        >Long Title</mdc-button
      >
    `}},x={name:"All Variants",render:()=>o`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{...l,variant:"success","header-text":"Success!",children:o`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
            ${h}`},{...l,variant:"warning","header-text":"Warning!",children:o`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
            ${h}`},{...l,variant:"error","header-text":"Error!",children:o`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
            ${h}`},{...l,"header-text":"User Message",children:o`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
            ${h}`}].map(t=>K({...l,...t}))}
    </div>
  `,...O()},b={name:"User Joined",args:{...l,"header-text":"",children:o`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `},...O()},T={name:"Connecting",args:{...l,"header-text":"Connecting",children:o` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> `},...O()};var _,C,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var $,I,B;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    'close-button-aria-label': 'Close toast'
  }
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var L,U,k;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title of more than 6 lines that should overflow without the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.',
    'close-button-aria-label': 'Close toast'
  }
}`,...(k=(U=g.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var F,M,V;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Dynamic Short/Long Title',
  render: () => {
    const longTitle = 'This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.';
    const shortTitle = 'Short Title';
    const toastRef = createRef<Toast>();
    return html\`
      <mdc-toast
        \${ref(toastRef)}
        variant="success"
        header-tag-name="span"
        header-text=\${longTitle}
        show-more-text="Show more"
        show-less-text="Show less"
        close-button-aria-label="Close toast"
      >
      </mdc-toast>
      <mdc-button
        @click=\${() => {
      toastRef.value?.setAttribute('header-text', shortTitle);
    }}
        >Short Title</mdc-button
      >
      <mdc-button
        @click=\${() => {
      toastRef.value?.setAttribute('header-text', longTitle);
    }}
        >Long Title</mdc-button
      >
    \`;
  }
}`,...(V=(M=f.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var P,W,Y;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(W=x.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var z,G,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var j,Z,J;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html\` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> \`
  },
  ...hideAllControls()
}`,...(J=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};const Vt=["Example","LongTitle","LongTitleWithoutToggle","DynamicShortLongTitle","AllVariants","UserJoined","Connecting"];export{x as AllVariants,T as Connecting,f as DynamicShortLongTitle,p as Example,u as LongTitle,g as LongTitleWithoutToggle,b as UserJoined,Vt as __namedExportsOrder,Mt as default};
