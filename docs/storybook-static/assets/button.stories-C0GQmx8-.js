import{i as w,k as g}from"./lit-element-CHllvULs.js";import{u as F,C as z,n as i}from"./index-HW6KrQZO.js";import{r as j}from"./state-CWckTc1X.js";import{h as V,a as Z}from"./index-CcvxQn6k.js";import"./index-BnGanu3N.js";import{c as W,s as K}from"./commonArgTypes-BluK8w5L.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";const q=[V,w`
  :host {
    cursor: pointer;
    border-radius: 1.25rem;
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    outline: none;
    border: 0.0625rem solid transparent;

    --mdc-button-primary-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-primary-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-primary-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-primary-pressed);
    --mdc-button-primary-disabled-background-color: var(--mds-color-theme-button-primary-disabled);
    --mdc-button-primary-disabled-color: var(--mds-color-theme-text-primary-disabled);
    
    --mdc-button-secondary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-button-secondary-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-button-secondary-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-button-secondary-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);

    --mdc-button-tertiary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-tertiary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-tertiary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-button-tertiary-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-button-tertiary-disabled-color: var(--mds-color-theme-text-primary-disabled);

    --mdc-button-height-size-64: 4rem;
    --mdc-button-height-size-52: 3.25rem;
    --mdc-button-height-size-40: 2.5rem;
    --mdc-button-height-size-32: 2rem;
    --mdc-button-height-size-28: 1.75rem;
    --mdc-button-height-size-24: 1.5rem;
    --mdc-button-height-size-20: 1.25rem;

    --mdc-button-line-height-size-40: var(--mds-font-lineheight-body-large);
    --mdc-button-line-height-size-32: var(--mds-font-lineheight-body-large);
    --mdc-button-line-height-size-28: var(--mds-font-lineheight-body-midsize);
    --mdc-button-line-height-size-24: var(--mds-font-lineheight-body-small);
  }

  :host([active]){
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
  }

  :host([variant="primary"]){
    background: var(--mdc-button-primary-background-color);
    color: var(--mdc-button-primary-color);
  }
  :host([variant="primary"]:hover){
    background: var(--mdc-button-primary-hover-background-color);
  }
  :host([variant="primary"]:active), :host([variant="primary"].pressed){
    background: var(--mdc-button-primary-pressed-background-color);
  }
  :host([variant="primary"][disabled]), :host([variant="primary"][soft-disabled]){
    background: var(--mdc-button-primary-disabled-background-color);
    color: var(--mdc-button-primary-disabled-color);
    cursor: auto;
  }

  :host([variant="secondary"]){
    color: var(--mdc-button-secondary-color);
    border-color: var(--mdc-button-secondary-border-color);
  }
  :host([variant="secondary"]:hover){
    background: var(--mdc-button-secondary-hover-background-color);
  }
  :host([variant="secondary"]:active), :host([variant="secondary"].pressed){
    background: var(--mdc-button-secondary-pressed-background-color);
  }
  :host([variant="secondary"][disabled]),
   :host([variant="secondary"][soft-disabled]){
    color: var(--mdc-button-primary-disabled-color);
    border-color: var(--mdc-button-secondary-disabled-border-color);
    background: var(--mdc-button-secondary-disabled-background-color);
    cursor: auto;
  }

  :host([variant="tertiary"]){
    border-color: transparent;
    color: var(--mdc-button-tertiary-color);
  }
  :host([variant="tertiary"]:hover){
    background: var(--mdc-button-tertiary-hover-background-color);
  }
  :host([variant="tertiary"]:active), :host([variant="tertiary"].pressed){
    background: var(--mdc-button-tertiary-pressed-background-color);
  }
  :host([variant="tertiary"][disabled]), 
  :host([variant="tertiary"][soft-disabled]){
    color: var(--mdc-button-tertiary-disabled-color);
    background: var(--mdc-button-tertiary-disabled-background-color);
    cursor: auto;
  }

  :host([size="64"][data-btn-type='icon']), 
  :host([size="52"][data-btn-type='icon']), 
  :host([size="40"][data-btn-type='icon']), 
  :host([size="32"][data-btn-type='icon']),
  :host([size="28"][data-btn-type='icon']),
  :host([size="24"][data-btn-type='icon']){
    border-radius: 6.25rem;
    aspect-ratio: 1;
    padding: unset;
  }
  :host([size="64"]){
    height: var(--mdc-button-height-size-64);
  }
  :host([size="52"]){
    height: var(--mdc-button-height-size-52);
  }
  :host([size="40"]){
    height: var(--mdc-button-height-size-40);
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-40);
    padding: 0 1rem;
    gap: 0.5rem;
  }
  :host([size="32"]){
    height: var(--mdc-button-height-size-32);
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-32);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size="28"]){
    height: var(--mdc-button-height-size-28);
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mdc-button-line-height-size-28);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size="24"]){
    height: var(--mdc-button-height-size-24);
    font-size: var(--mds-font-size-body-small);
    line-height: var(--mdc-button-line-height-size-24);
    padding: 0 0.625rem;
    gap: 0.25rem;
  }
  :host([size="20"]){
    height: var(--mdc-button-height-size-20);
    padding: 0.0625rem;
  }

  :host([color="accent"]){
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-accent-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-accent-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-accent-pressed);

    --mdc-button-secondary-color: var(--mds-color-theme-text-accent-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
  :host([color="positive"]){
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-join-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-join-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-join-pressed);

    --mdc-button-secondary-color: var(--mds-color-theme-text-success-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-join-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
  :host([color="negative"]){
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-cancel-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-cancel-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-cancel-pressed);

    --mdc-button-secondary-color: var(--mds-color-theme-text-error-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
  :host([color="promotional"]){
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-common-button-promotion-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-common-button-promotion-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-common-button-promotion-active);

    --mdc-button-secondary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-promotion-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
`,Z],G=F.constructTagName("button"),a={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"},c={40:40,32:32,28:28,24:24},m={64:64,52:52,20:20,...c},d={POSITIVE:"positive",NEGATIVE:"negative",ACCENT:"accent",PROMOTIONAL:"promotional",DEFAULT:"default"},u={PILL:"pill",ICON:"icon",PILL_WITH_ICON:"pill-with-icon"},b={BUTTON:"button",SUBMIT:"submit",RESET:"reset"},n={VARIANT:a.PRIMARY,SIZE:c[32],COLOR:d.DEFAULT,TYPE_INTERNAL:u.ICON,TYPE:b.BUTTON},H=e=>{switch(e){case m[64]:return 2;case m[52]:return 1.75;case m[40]:return 1.25;default:return 1}},A=e=>{const t=e.split("-"),r=["bold","filled","regular","light"];return t.filter(l=>!r.includes(l)).join("-")};var J=Object.defineProperty,s=(e,t,r,l)=>{for(var h=void 0,x=e.length-1,O;x>=0;x--)(O=e[x])&&(h=O(t,r,h)||h);return h&&J(t,r,h),h};const I=class I extends z{constructor(){super(),this.active=!1,this.disabled=!1,this.softDisabled=!1,this.variant=n.VARIANT,this.size=n.SIZE,this.color=n.COLOR,this.tabIndex=0,this.role="button",this.type=n.TYPE,this.typeInternal=n.TYPE_INTERNAL,this.iconSize=1,this.prevTabindex=0,this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.internals=this.attachInternals()}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.setAriaPressed(this,this.active),this.modifyIconName(this.active)),t.has("size")&&this.setSize(this.size),t.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),t.has("color")&&this.setColor(this.color),t.has("typeInternal")&&this.setSize(this.size),(t.has("prefixIcon")||t.has("postfixIcon"))&&this.inferButtonType()}executeAction(){this.type==="submit"&&this.internals.form&&this.internals.form.requestSubmit(),this.type==="reset"&&this.internals.form&&this.internals.form.reset()}modifyIconName(t){t?(this.prefixIcon&&(this.prevPrefixIcon=this.prefixIcon,this.prefixIcon=`${A(this.prefixIcon)}-filled`),this.postfixIcon&&(this.prevPostfixIcon=this.postfixIcon,this.postfixIcon=`${A(this.postfixIcon)}-filled`)):(this.prevPrefixIcon&&(this.prefixIcon=this.prevPrefixIcon),this.prevPostfixIcon&&(this.postfixIcon=this.prevPostfixIcon))}setVariant(t){this.setAttribute("variant",Object.values(a).includes(t)?t:n.VARIANT)}setSize(t){const l=this.typeInternal===u.ICON?Object.values(m).includes(t)&&!(t===m[20]&&this.variant!==a.TERTIARY):Object.values(c).includes(t);this.setAttribute("size",l?`${t}`:`${n.SIZE}`),this.iconSize=H(t)}setColor(t){!Object.values(d).includes(t)||this.variant===a.TERTIARY?this.setAttribute("color",`${n.COLOR}`):this.setAttribute("color",t)}setAriaPressed(t,r){r?t.setAttribute("aria-pressed","true"):t.setAttribute("aria-pressed","false")}setSoftDisabled(t,r){r?t.setAttribute("aria-disabled","true"):t.setAttribute("aria-disabled","false")}setDisabled(t,r){r?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.prevTabindex,t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t),this.executeAction()}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}inferButtonType(){var r,l;const t=(l=(r=this.shadowRoot)==null?void 0:r.querySelector("slot"))==null?void 0:l.assignedNodes().length;t&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=u.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!t&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=u.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=u.PILL,this.setAttribute("data-btn-type","pill"))}render(){return g`
      ${this.prefixIcon?g`
        <mdc-icon
          name="${this.prefixIcon}" 
          part="prefix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>`:""}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon?g`
        <mdc-icon
          name="${this.postfixIcon}" 
          part="postfix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>`:""}
    `}};I.formAssociated=!0,I.styles=[...z.styles,...q];let o=I;s([i({type:Boolean})],o.prototype,"active");s([i({type:Boolean})],o.prototype,"disabled");s([i({type:Boolean,attribute:"soft-disabled"})],o.prototype,"softDisabled");s([i({type:String,attribute:"prefix-icon",reflect:!0})],o.prototype,"prefixIcon");s([i({type:String,attribute:"postfix-icon",reflect:!0})],o.prototype,"postfixIcon");s([i({type:String})],o.prototype,"variant");s([i({type:Number})],o.prototype,"size");s([i({type:String})],o.prototype,"color");s([i({type:Number,reflect:!0})],o.prototype,"tabIndex");s([i({type:String,reflect:!0})],o.prototype,"role");s([i({reflect:!0})],o.prototype,"type");s([j()],o.prototype,"typeInternal");s([j()],o.prototype,"iconSize");o.register(G);const Q=e=>g`
  <mdc-button 
  ?active="${e.active}"
  ?disabled="${e.disabled}"
  ?soft-disabled="${e["soft-disabled"]}"
  variant="${e.variant}"
  size="${e.size}"
  color="${e.color}"
  prefix-icon="${e["prefix-icon"]}"
  postfix-icon="${e["postfix-icon"]}"
  type="${e.type}"
  role="${e.role}"
  tabIndex="${e.tabIndex}"
  aria-label="${e["aria-label"]}"
  >${e.children}</mdc-button>`,ct={title:"Work In Progress/button",tags:["autodocs"],component:"mdc-button",render:Q,parameters:{badges:["wip"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(a)},size:{control:"select",options:Object.values(c)},color:{control:"select",options:Object.values(d)},type:{control:"select",options:Object.values(b)},...W,...K}},p={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:a.PRIMARY,size:c[32],color:d.DEFAULT,type:b.BUTTON,role:"button",tabIndex:0}},v={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:a.PRIMARY,size:c[32],color:d.DEFAULT,type:b.BUTTON,role:"button",tabIndex:0}},y={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:a.PRIMARY,size:c[32],color:d.DEFAULT,type:b.BUTTON,role:"button",tabIndex:0}},f={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:a.PRIMARY,size:c[32],color:d.DEFAULT,type:b.BUTTON,role:"button",tabIndex:0}},T={argTypes:{size:{options:Object.values(m)}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:a.PRIMARY,size:m[32],color:d.DEFAULT,type:b.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}};var N,k,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,R,U;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var L,B,P;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(P=(B=y.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var _,C,Y;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(Y=(C=f.parameters)==null?void 0:C.docs)==null?void 0:Y.source}}};var $,D,M;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    }
  },
  args: {
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
    'aria-label': 'icon button'
  }
}`,...(M=(D=T.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const dt=["Example","PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton"];export{p as Example,T as IconButton,v as PillButton,f as PillWithPostfixIcon,y as PillWithPrefixIcon,dt as __namedExportsOrder,ct as default};
