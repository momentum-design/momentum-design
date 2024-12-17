import{i as w,k as T}from"./lit-element-CHllvULs.js";import{C as O,n as a}from"./index-HW6KrQZO.js";import{r as M}from"./state-CWckTc1X.js";import{h as F,a as V}from"./index-CcvxQn6k.js";import{I as d,D as n,B as i,a as u,P as b,b as l,T as Z,c as h}from"./button.constants-C9hyZ9Xb.js";import"./index-BnGanu3N.js";import{c as W,s as K}from"./commonArgTypes-BluK8w5L.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";const q=[F,w`
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
`,V],G=e=>{switch(e){case d[64]:return 2;case d[52]:return 1.75;case d[40]:return 1.25;default:return 1}},k=e=>{const t=e.split("-"),r=["bold","filled","regular","light"];return t.filter(c=>!r.includes(c)).join("-")};var H=Object.defineProperty,s=(e,t,r,c)=>{for(var m=void 0,x=e.length-1,z;x>=0;x--)(z=e[x])&&(m=z(t,r,m)||m);return m&&H(t,r,m),m};const I=class I extends O{constructor(){super(),this.active=!1,this.disabled=!1,this.softDisabled=!1,this.variant=n.VARIANT,this.size=n.SIZE,this.color=n.COLOR,this.tabIndex=0,this.role="button",this.type=n.TYPE,this.typeInternal=n.TYPE_INTERNAL,this.iconSize=1,this.prevTabindex=0,this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.internals=this.attachInternals()}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.setAriaPressed(this,this.active),this.modifyIconName(this.active)),t.has("size")&&this.setSize(this.size),t.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),t.has("color")&&this.setColor(this.color),t.has("typeInternal")&&this.setSize(this.size),(t.has("prefixIcon")||t.has("postfixIcon"))&&this.inferButtonType()}executeAction(){this.type==="submit"&&this.internals.form&&this.internals.form.requestSubmit(),this.type==="reset"&&this.internals.form&&this.internals.form.reset()}modifyIconName(t){t?(this.prefixIcon&&(this.prevPrefixIcon=this.prefixIcon,this.prefixIcon=`${k(this.prefixIcon)}-filled`),this.postfixIcon&&(this.prevPostfixIcon=this.postfixIcon,this.postfixIcon=`${k(this.postfixIcon)}-filled`)):(this.prevPrefixIcon&&(this.prefixIcon=this.prevPrefixIcon),this.prevPostfixIcon&&(this.postfixIcon=this.prevPostfixIcon))}setVariant(t){this.setAttribute("variant",Object.values(i).includes(t)?t:n.VARIANT)}setSize(t){const c=this.typeInternal===u.ICON?Object.values(d).includes(t)&&!(t===d[20]&&this.variant!==i.TERTIARY):Object.values(b).includes(t);this.setAttribute("size",c?`${t}`:`${n.SIZE}`),this.iconSize=G(t)}setColor(t){!Object.values(l).includes(t)||this.variant===i.TERTIARY?this.setAttribute("color",`${n.COLOR}`):this.setAttribute("color",t)}setAriaPressed(t,r){r?t.setAttribute("aria-pressed","true"):t.setAttribute("aria-pressed","false")}setSoftDisabled(t,r){r?t.setAttribute("aria-disabled","true"):t.setAttribute("aria-disabled","false")}setDisabled(t,r){r?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.prevTabindex,t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t),this.executeAction()}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}inferButtonType(){var r,c;const t=(c=(r=this.shadowRoot)==null?void 0:r.querySelector("slot"))==null?void 0:c.assignedNodes().length;t&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=u.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!t&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=u.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=u.PILL,this.setAttribute("data-btn-type","pill"))}render(){return T`
      ${this.prefixIcon?T`
        <mdc-icon
          name="${this.prefixIcon}" 
          part="prefix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>`:""}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon?T`
        <mdc-icon
          name="${this.postfixIcon}" 
          part="postfix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>`:""}
    `}};I.formAssociated=!0,I.styles=[...O.styles,...q];let o=I;s([a({type:Boolean})],o.prototype,"active");s([a({type:Boolean})],o.prototype,"disabled");s([a({type:Boolean,attribute:"soft-disabled"})],o.prototype,"softDisabled");s([a({type:String,attribute:"prefix-icon",reflect:!0})],o.prototype,"prefixIcon");s([a({type:String,attribute:"postfix-icon",reflect:!0})],o.prototype,"postfixIcon");s([a({type:String})],o.prototype,"variant");s([a({type:Number})],o.prototype,"size");s([a({type:String})],o.prototype,"color");s([a({type:Number,reflect:!0})],o.prototype,"tabIndex");s([a({type:String,reflect:!0})],o.prototype,"role");s([a({reflect:!0})],o.prototype,"type");s([M()],o.prototype,"typeInternal");s([M()],o.prototype,"iconSize");o.register(Z);const J=e=>T`
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
  >${e.children}</mdc-button>`,ct={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:J,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(i)},size:{control:"select",options:Object.values(b)},color:{control:"select",options:Object.values(l)},type:{control:"select",options:Object.values(h)},...W,...K}},p={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:i.PRIMARY,size:b[32],color:l.DEFAULT,type:h.BUTTON,role:"button",tabIndex:0}},v={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:i.PRIMARY,size:b[32],color:l.DEFAULT,type:h.BUTTON,role:"button",tabIndex:0}},y={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:i.PRIMARY,size:b[32],color:l.DEFAULT,type:h.BUTTON,role:"button",tabIndex:0}},f={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:i.PRIMARY,size:b[32],color:l.DEFAULT,type:h.BUTTON,role:"button",tabIndex:0}},g={argTypes:{size:{options:Object.values(d)}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:i.PRIMARY,size:d[32],color:l.DEFAULT,type:h.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}};var A,N,S;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var E,U,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(U=v.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var B,_,L;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(_=y.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var P,C,$;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(C=f.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var D,Y,j;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};const dt=["Example","PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton"];export{p as Example,g as IconButton,v as PillButton,f as PillWithPostfixIcon,y as PillWithPrefixIcon,dt as __namedExportsOrder,ct as default};
