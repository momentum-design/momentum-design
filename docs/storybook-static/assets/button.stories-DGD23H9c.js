import{i as $,k as g}from"./lit-element-CPYlYYac.js";import{u as D,C as O,n as i}from"./index-BLShQaRP.js";import{r as Y}from"./state-I_twzcUk.js";import{h as j,a as M}from"./index-BMNzSXOa.js";import"./index-BQxBE5pH.js";import{c as w,s as F}from"./commonArgTypes-BluK8w5L.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DQf4k71i.js";import"./create-context-89xeped_.js";const V=[j,$`
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

  :host([size="64"].mdc-icon-button), 
  :host([size="52"].mdc-icon-button), 
  :host([size="40"].mdc-icon-button), 
  :host([size="32"].mdc-icon-button),
  :host([size="28"].mdc-icon-button),
  :host([size="24"].mdc-icon-button){
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
`,M],Z=D.constructTagName("button"),n={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"},l={40:40,32:32,28:28,24:24},d={64:64,52:52,20:20,...l},m={POSITIVE:"positive",NEGATIVE:"negative",ACCENT:"accent",PROMOTIONAL:"promotional",DEFAULT:"default"},h={PILL:"pill",ICON:"icon",PILL_WITH_ICON:"pill-with-icon"},u={BUTTON:"button",SUBMIT:"submit",RESET:"reset"},a={VARIANT:n.PRIMARY,SIZE:l[32],COLOR:m.DEFAULT,TYPE_INTERNAL:h.ICON,TYPE:u.BUTTON},W=o=>{switch(o){case d[64]:return 2;case d[52]:return 1.75;case d[40]:return 1.25;default:return 1}},z=o=>{const t=o.split("-"),r=["bold","filled","regular","light"];return t.filter(c=>!r.includes(c)).join("-")};var K=Object.defineProperty,s=(o,t,r,c)=>{for(var b=void 0,I=o.length-1,x;I>=0;I--)(x=o[I])&&(b=x(t,r,b)||b);return b&&K(t,r,b),b};const T=class T extends O{constructor(){super(),this.active=!1,this.disabled=!1,this.softDisabled=!1,this.variant=a.VARIANT,this.size=a.SIZE,this.color=a.COLOR,this.tabIndex=0,this.role="button",this.type=a.TYPE,this.typeInternal=a.TYPE_INTERNAL,this.iconSize=1,this.prevTabindex=0,this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.internals=this.attachInternals()}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.setAriaPressed(this,this.active),this.modifyIconName(this.active)),t.has("size")&&this.setSize(this.size),t.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),t.has("color")&&this.setColor(this.color),t.has("typeInternal")&&(this.setSize(this.size),this.setClassBasedOnType(this.typeInternal)),(t.has("prefixIcon")||t.has("postfixIcon"))&&this.inferButtonType()}executeAction(){this.type==="submit"&&this.internals.form&&this.internals.form.requestSubmit(),this.type==="reset"&&this.internals.form&&this.internals.form.reset()}modifyIconName(t){t?(this.prefixIcon&&(this.prevPrefixIcon=this.prefixIcon,this.prefixIcon=`${z(this.prefixIcon)}-filled`),this.postfixIcon&&(this.prevPostfixIcon=this.postfixIcon,this.postfixIcon=`${z(this.postfixIcon)}-filled`)):(this.prevPrefixIcon&&(this.prefixIcon=this.prevPrefixIcon),this.prevPostfixIcon&&(this.postfixIcon=this.prevPostfixIcon))}setClassBasedOnType(t){t===h.ICON?this.classList.add("mdc-icon-button"):this.classList.remove("mdc-icon-button")}setVariant(t){this.setAttribute("variant",Object.values(n).includes(t)?t:a.VARIANT)}setSize(t){const c=this.typeInternal===h.ICON?Object.values(d).includes(t)&&!(t===d[20]&&this.variant!==n.TERTIARY):Object.values(l).includes(t);this.setAttribute("size",c?`${t}`:`${a.SIZE}`),this.iconSize=W(t)}setColor(t){!Object.values(m).includes(t)||this.variant===n.TERTIARY?this.setAttribute("color",`${a.COLOR}`):this.setAttribute("color",t)}setAriaPressed(t,r){r?t.setAttribute("aria-pressed","true"):t.removeAttribute("aria-pressed")}setSoftDisabled(t,r){r?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,r){r?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.prevTabindex,t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t),this.executeAction()}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}inferButtonType(){var r,c;const t=(c=(r=this.shadowRoot)==null?void 0:r.querySelector("slot"))==null?void 0:c.assignedNodes().length;t&&(this.prefixIcon||this.postfixIcon)?this.typeInternal=h.PILL_WITH_ICON:!t&&(this.prefixIcon||this.postfixIcon)?this.typeInternal=h.ICON:this.typeInternal=h.PILL}render(){return g`
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
    `}};T.formAssociated=!0,T.styles=[...O.styles,...V];let e=T;s([i({type:Boolean})],e.prototype,"active");s([i({type:Boolean})],e.prototype,"disabled");s([i({type:Boolean,attribute:"soft-disabled"})],e.prototype,"softDisabled");s([i({type:String,attribute:"prefix-icon"})],e.prototype,"prefixIcon");s([i({type:String,attribute:"postfix-icon"})],e.prototype,"postfixIcon");s([i({type:String})],e.prototype,"variant");s([i({type:Number})],e.prototype,"size");s([i({type:String})],e.prototype,"color");s([i({type:Number,reflect:!0})],e.prototype,"tabIndex");s([i({type:String,reflect:!0})],e.prototype,"role");s([i({reflect:!0})],e.prototype,"type");s([Y()],e.prototype,"typeInternal");s([Y()],e.prototype,"iconSize");e.register(Z);const q=o=>g`
  <mdc-button 
  ?active="${o.active}"
  ?disabled="${o.disabled}"
  ?soft-disabled="${o["soft-disabled"]}"
  variant="${o.variant}"
  size="${o.size}"
  color="${o.color}"
  prefix-icon="${o["prefix-icon"]}"
  postfix-icon="${o["postfix-icon"]}"
  type="${o.type}"
  role="${o.role}"
  tabIndex="${o.tabIndex}"
  >${o.children}</mdc-button>`,st={title:"Work In Progress/button",tags:["autodocs"],component:"mdc-button",render:q,parameters:{badges:["wip"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(l)},color:{control:"select",options:Object.values(m)},type:{control:"select",options:Object.values(u)},...w,...F}},p={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:n.PRIMARY,size:l[32],color:m.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},v={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:n.PRIMARY,size:l[32],color:m.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},y={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:n.PRIMARY,size:l[32],color:m.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},f={argTypes:{size:{options:Object.values(d)}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:n.PRIMARY,size:d[32],color:m.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}};var N,k,A;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var S,E,R;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var L,U,B;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(U=y.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var P,_,C;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    tabIndex: 0
  }
}`,...(C=(_=f.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const it=["PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton"];export{f as IconButton,p as PillButton,y as PillWithPostfixIcon,v as PillWithPrefixIcon,it as __namedExportsOrder,st as default};
