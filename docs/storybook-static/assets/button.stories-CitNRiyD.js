import{i as V,k as g}from"./lit-element-CHllvULs.js";import{n as m}from"./index-HW6KrQZO.js";import{r as F}from"./state-CWckTc1X.js";import{I as c,D as i,B as e,a as p,P as b,b as d,T as Z}from"./button.constants-C4PVPP-B.js";import{B as N}from"./buttonsimple.component-Di038Q01.js";import"./index-BOBIh5Rr.js";import{a as h}from"./chunk-D5ZWXAHU-Cy56BkwE.js";import{c as w,s as W}from"./commonArgTypes-BluK8w5L.js";import{B as u}from"./buttonsimple.constants-Biy6Bznc.js";import"./index-BNZgxKMr.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const q=V`
  :host {
    background-color: transparent;
    border-radius: 1.25rem;
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    outline: none;

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
  :host([size="40"]){
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-40);
    padding: 0 1rem;
    gap: 0.5rem;
  }
  :host([size="32"]){
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-32);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size="28"]){
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mdc-button-line-height-size-28);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size="24"]){
    font-size: var(--mds-font-size-body-small);
    line-height: var(--mdc-button-line-height-size-24);
    padding: 0 0.625rem;
    gap: 0.25rem;
  }
  :host([size="20"]){
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
`,G=[q],H=t=>{switch(t){case c[64]:return 2;case c[52]:return 1.75;case c[40]:return 1.25;default:return 1}},z=t=>{const o=t.split("-"),a=["bold","filled","regular","light"];return o.filter(s=>!a.includes(s)).join("-")};var J=Object.defineProperty,n=(t,o,a,s)=>{for(var l=void 0,x=t.length-1,k;x>=0;x--)(k=t[x])&&(l=k(o,a,l)||l);return l&&J(o,a,l),l};const O=class O extends N{constructor(){super(...arguments),this.variant=i.VARIANT,this.size=i.SIZE,this.color=i.COLOR,this.role="button",this.typeInternal=i.TYPE_INTERNAL,this.iconSize=1}update(o){super.update(o),o.has("active")&&this.modifyIconName(this.active),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}modifyIconName(o){o?(this.prefixIcon&&(this.prevPrefixIcon=this.prefixIcon,this.prefixIcon=`${z(this.prefixIcon)}-filled`),this.postfixIcon&&(this.prevPostfixIcon=this.postfixIcon,this.postfixIcon=`${z(this.postfixIcon)}-filled`)):(this.prevPrefixIcon&&(this.prefixIcon=this.prevPrefixIcon),this.prevPostfixIcon&&(this.postfixIcon=this.prevPostfixIcon))}setVariant(o){this.setAttribute("variant",Object.values(e).includes(o)?o:i.VARIANT)}setSize(o){const s=this.typeInternal===p.ICON?Object.values(c).includes(o)&&!(o===c[20]&&this.variant!==e.TERTIARY):Object.values(b).includes(o);this.setAttribute("size",s?`${o}`:`${i.SIZE}`),this.iconSize=H(o)}setColor(o){!Object.values(d).includes(o)||this.variant===e.TERTIARY?this.setAttribute("color",`${i.COLOR}`):this.setAttribute("color",o)}inferButtonType(){var a,s;const o=(s=(a=this.shadowRoot)==null?void 0:a.querySelector("slot"))==null?void 0:s.assignedNodes().length;o&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=p.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!o&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=p.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=p.PILL,this.setAttribute("data-btn-type","pill"))}render(){return g`
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
    `}};O.styles=[...N.styles,...G];let r=O;n([m({type:String,attribute:"prefix-icon",reflect:!0})],r.prototype,"prefixIcon");n([m({type:String,attribute:"postfix-icon",reflect:!0})],r.prototype,"postfixIcon");n([m({type:String})],r.prototype,"variant");n([m({type:Number})],r.prototype,"size");n([m({type:String})],r.prototype,"color");n([m({type:String,reflect:!0})],r.prototype,"role");n([F()],r.prototype,"typeInternal");n([F()],r.prototype,"iconSize");r.register(Z);const K=t=>g`
  <mdc-button 
  @click="${h("onclick")}"
  @keydown="${h("onkeydown")}"
  @keyup="${h("onkeyup")}"
  @focus="${h("onfocus")}"
  ?active="${t.active}"
  ?disabled="${t.disabled}"
  ?soft-disabled="${t["soft-disabled"]}"
  variant="${t.variant}"
  size="${t.size}"
  color="${t.color}"
  prefix-icon="${t["prefix-icon"]}"
  postfix-icon="${t["postfix-icon"]}"
  type="${t.type}"
  role="${t.role}"
  tabIndex="${t.tabIndex}"
  aria-label="${t["aria-label"]}"
  >${t.children}</mdc-button>`,uo={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:K,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(e)},size:{control:"select",options:Object.values(b)},color:{control:"select",options:Object.values(d)},type:{control:"select",options:Object.values(u)},...w,...W}},y={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:e.PRIMARY,size:b[32],color:d.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},v={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:e.PRIMARY,size:b[32],color:d.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},f={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:e.PRIMARY,size:b[32],color:d.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},T={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:e.PRIMARY,size:b[32],color:d.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0}},I={argTypes:{size:{options:Object.values(c)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:e.PRIMARY,size:c[32],color:d.DEFAULT,type:u.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}};var A,S,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(S=y.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var R,B,_;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(B=v.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var P,E,L;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(E=f.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var $,C,Y;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Y=(C=T.parameters)==null?void 0:C.docs)==null?void 0:Y.source}}};var j,M,D;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    },
    'aria-label': {
      description: 'Aria label for the icon button. Required for accessibility.'
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
}`,...(D=(M=I.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const po=["Example","PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton"];export{y as Example,I as IconButton,v as PillButton,T as PillWithPostfixIcon,f as PillWithPrefixIcon,po as __namedExportsOrder,uo as default};
