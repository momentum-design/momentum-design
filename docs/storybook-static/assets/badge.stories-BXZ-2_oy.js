import{i as Z,k as l}from"./lit-element-CPYlYYac.js";import{R}from"./class-map-CXre9d5K.js";import{u as z,C as O,n}from"./index-BLShQaRP.js";import{t as H}from"./if-defined-4GS2c12S.js";import{F as J,V as K}from"./index-DUhjq5I_.js";import{h as Q}from"./index-DOMSj5Ok.js";import"./index-DkNGXPrD.js";import{c as rr,s as er}from"./commonArgTypes-BluK8w5L.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DQf4k71i.js";import"./create-context-89xeped_.js";const or=z.constructTagName("badge"),r={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},T={SUCCESS_ICON_NAME:"check-circle-badge-filled",WARNING_ICON_NAME:"warning-badge-filled",ERROR_ICON_NAME:"error-legacy-badge-filled"},v={PRIMARY:"primary",SECONDARY:"secondary"},_={SUCCESS:"success",WARNING:"warning",ERROR:"error"},c={TYPE:r.DOT,MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:v.PRIMARY,ICON_SIZE:1},ar=[Q,Z`
    :host {
      --mdc-badge-primary-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-badge-primary-background-color: var(--mds-color-theme-background-accent-normal);

      --mdc-badge-secondary-foreground-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-badge-secondary-background-color: var(--mds-color-theme-background-alert-default-normal);

      --mdc-badge-success-foreground-color: var(--mds-color-theme-text-success-normal);
      --mdc-badge-success-background-color: var(--mds-color-theme-background-alert-success-normal);
      
      --mdc-badge-warning-foreground-color: var(--mds-color-theme-text-warning-normal);
      --mdc-badge-warning-background-color: var(--mds-color-theme-background-alert-warning-normal);
      
      --mdc-badge-error-foreground-color: var(--mds-color-theme-text-error-normal);
      --mdc-badge-error-background-color: var(--mds-color-theme-background-alert-error-normal);
      
      --mdc-badge-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);
      
      color: var(--mdc-badge-primary-foreground-color);
    }
    .mdc-badge-overlay {
      outline: 0.0625rem solid var(--mdc-badge-overlay-background-color);
    }
    .mdc-badge-text {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
      min-width: 1rem;
      display: flex;
      justify-content: center;
      background-color: var(--mdc-badge-primary-background-color);
    }
    .mdc-badge-dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: var(--mdc-badge-primary-background-color);
    }
    .mdc-badge-icon {
      padding: 2px;
      border-radius: 50%;
    }
    .mdc-badge-icon__primary {
      background-color: var(--mdc-badge-primary-background-color);
      color: var(--mdc-badge-primary-foreground-color);
    }
    .mdc-badge-icon__success {
      background-color: var(--mdc-badge-success-background-color);
      color: var(--mdc-badge-success-foreground-color);
    }
    .mdc-badge-icon__warning {
      background-color: var(--mdc-badge-warning-background-color);
      color: var(--mdc-badge-warning-foreground-color);
    }
    .mdc-badge-icon__error {
      background-color: var(--mdc-badge-error-background-color);
      color: var(--mdc-badge-error-foreground-color);
    }
    .mdc-badge-icon__secondary {
      background-color: var(--mdc-badge-secondary-background-color);
      color: var(--mdc-badge-secondary-foreground-color);
    }
  `];var tr=Object.defineProperty,s=(e,o,a,A)=>{for(var d=void 0,E=e.length-1,I;E>=0;E--)(I=e[E])&&(d=I(o,a,d)||d);return d&&tr(o,a,d),d};const C=class C extends O{constructor(){super(...arguments),this.variant=c.VARIANT,this.maxCounter=c.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(o,a){return a===void 0||typeof a!="number"||o===0?"":a>o?`${o}+`:o>c.MAX_COUNTER_LIMIT||a>c.MAX_COUNTER_LIMIT?`${c.MAX_COUNTER_LIMIT}+`:a.toString()}getBadgeIcon(o,a){return l`
      <mdc-icon
        class="mdc-badge-icon ${R({"mdc-badge-overlay":this.overlay,[`mdc-badge-icon__${a}`]:!0})}"
        name="${H(o)}"
        size="${c.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return l`<div class="mdc-badge-dot ${R({"mdc-badge-overlay":this.overlay})}"></div>`}getBadgeCounterText(){return l`
      <mdc-text
        type="${J.BODY_SMALL_MEDIUM}"
        tagname="${K.DIV}"
        class="mdc-badge-text ${R({"mdc-badge-overlay":this.overlay})}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(v).includes(this.variant)&&(this.variant=c.VARIANT);const{iconName:o,type:a,variant:A}=this;switch(a){case r.ICON:return this.getBadgeIcon(o||"",A);case r.COUNTER:return this.getBadgeCounterText();case r.SUCCESS:return this.getBadgeIcon(T.SUCCESS_ICON_NAME,_.SUCCESS);case r.WARNING:return this.getBadgeIcon(T.WARNING_ICON_NAME,_.WARNING);case r.ERROR:return this.getBadgeIcon(T.ERROR_ICON_NAME,_.ERROR);case r.DOT:default:return this.type=r.DOT,this.getBadgeDot()}}update(o){super.update(o),o.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};C.styles=[...O.styles,...ar];let t=C;s([n({type:String,reflect:!0})],t.prototype,"type");s([n({type:String,attribute:"icon-name"})],t.prototype,"iconName");s([n({type:String,reflect:!0})],t.prototype,"variant");s([n({type:Number})],t.prototype,"counter");s([n({type:Number,attribute:"max-counter",reflect:!0})],t.prototype,"maxCounter");s([n({type:Boolean})],t.prototype,"overlay");s([n({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel");t.register(or);const N=[9,99,999],cr=e=>l`
<mdc-badge
  type="${e.type}"
  icon-name="${e["icon-name"]}"
  counter="${e.counter}"
  max-counter="${e["max-counter"]}"
  variant="${e.variant}"
  ?overlay=${e.overlay}
  aria-label="${e["aria-label"]}"
></mdc-badge>
`,nr=e=>l`
<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">
  <mdc-badge
    type="${e.type}"
    icon-name="${e["icon-name"]}"
    counter="${e.counter}"
    max-counter="${e["max-counter"]}"
    variant="${e.variant}"
    ?overlay=${e.overlay}
    aria-label="${e["aria-label"]}"
  ></mdc-badge>
</div>
`,Er={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:cr,parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:Object.values(r)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:r.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:r.COUNTER},control:"select",options:N},"icon-name":{if:{arg:"type",eq:r.ICON},control:"text"},variant:{if:{arg:"type",eq:r.ICON},control:"select",options:Object.values(v)},"aria-label":{control:"text"},...rr,...er}},m={args:{type:c.TYPE,"icon-name":"placeholder-bold",variant:c.VARIANT,counter:1,"max-counter":N[1],overlay:!1}},i={args:{type:r.ICON,"icon-name":"placeholder-bold",variant:v.PRIMARY,overlay:!1}},g={args:{type:r.COUNTER,counter:10,"max-counter":N[1],overlay:!1}},u={args:{type:r.SUCCESS,overlay:!1}},p={args:{type:r.WARNING,overlay:!1}},b={args:{type:r.ERROR,overlay:!1}},y={render:nr,args:{type:r.COUNTER,counter:1e3,"max-counter":N[2],overlay:!0}};var f,S,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(h=(S=m.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,k,U;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(U=(k=i.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var M,$,D;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(D=($=g.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var B,L,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.SUCCESS,
    overlay: false
  }
}`,...(G=(L=u.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var Y,P,w;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.WARNING,
    overlay: false
  }
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var X,V,W;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ERROR,
    overlay: false
  }
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,j,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(q=(j=y.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Rr=["Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{g as Counter,m as Dot,b as Error,i as Icon,y as Overlay,u as Success,p as Warning,Rr as __namedExportsOrder,Er as default};
