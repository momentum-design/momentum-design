import{i as z,k as u}from"./lit-element-CPYlYYac.js";import{R as _}from"./class-map-CXre9d5K.js";import{u as H,C as O,n as l}from"./index-BLShQaRP.js";import{t as J}from"./if-defined-4GS2c12S.js";import{F as K,V as Q}from"./index-DUhjq5I_.js";import{h as rr}from"./index-DOMSj5Ok.js";import"./index-DkNGXPrD.js";import{c as er,s as or}from"./commonArgTypes-BluK8w5L.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DQf4k71i.js";import"./create-context-89xeped_.js";const ar=H.constructTagName("badge"),e={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},I={SUCCESS_ICON_NAME:"check-circle-badge-filled",WARNING_ICON_NAME:"warning-badge-filled",ERROR_ICON_NAME:"error-legacy-badge-filled"},i={PRIMARY:"primary",SECONDARY:"secondary"},p={SUCCESS:"success",WARNING:"warning",ERROR:"error"},n={TYPE:e.DOT,MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:i.PRIMARY,ICON_SIZE:1},tr=[rr,z`
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
  `];var cr=Object.defineProperty,m=(o,r,a,s)=>{for(var t=void 0,d=o.length-1,g;d>=0;d--)(g=o[d])&&(t=g(r,a,t)||t);return t&&cr(r,a,t),t};const A=class A extends O{constructor(){super(...arguments),this.variant=n.VARIANT,this.maxCounter=n.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,a){return a===void 0||typeof a!="number"||r===0?"":a>r?`${r}+`:r>n.MAX_COUNTER_LIMIT||a>n.MAX_COUNTER_LIMIT?`${n.MAX_COUNTER_LIMIT}+`:a.toString()}getBadgeIcon(r,a,s,t){return u`
      <mdc-icon
        class="mdc-badge-icon ${_(this.getIconClasses(a,s,t))}"
        name="${J(r)}"
        size="${n.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(r){return u`<div class="mdc-badge-dot ${_({"mdc-badge-overlay":r})}"></div>`}getIconClasses(r,a,s){const t={"mdc-badge-overlay":r},d=s===e.ICON?i:p,Z={[`mdc-badge-icon__${Object.values(d).includes(a)?a:n.VARIANT}`]:!0};return{...t,...Z}}getBadgeCounterText(r,a,s){return u`
      <mdc-text
        type="${K.BODY_SMALL_MEDIUM}"
        tagname="${Q.DIV}"
        class="mdc-badge-text ${_({"mdc-badge-overlay":a})}"
      >
        ${this.getCounterText(r,s)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(i).includes(this.variant)&&(this.variant=i.PRIMARY);const{counter:r,iconName:a,maxCounter:s,overlay:t,type:d,variant:g}=this;switch(d){case e.ICON:return this.getBadgeIcon(a||"",t,g,d);case e.COUNTER:return this.getBadgeCounterText(s,t,r);case e.SUCCESS:return this.getBadgeIcon(I.SUCCESS_ICON_NAME,t,p.SUCCESS);case e.WARNING:return this.getBadgeIcon(I.WARNING_ICON_NAME,t,p.WARNING);case e.ERROR:return this.getBadgeIcon(I.ERROR_ICON_NAME,t,p.ERROR);case e.DOT:default:return this.type=e.DOT,this.getBadgeDot(t)}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};A.styles=[...O.styles,...tr];let c=A;m([l({type:String,reflect:!0})],c.prototype,"type");m([l({type:String,attribute:"icon-name"})],c.prototype,"iconName");m([l({type:String,reflect:!0})],c.prototype,"variant");m([l({type:Number})],c.prototype,"counter");m([l({type:Number,attribute:"max-counter",reflect:!0})],c.prototype,"maxCounter");m([l({type:Boolean})],c.prototype,"overlay");m([l({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel");c.register(ar);const C=[9,99,999],nr=o=>u`
<mdc-badge
  type="${o.type}"
  icon-name="${o["icon-name"]}"
  counter="${o.counter}"
  max-counter="${o["max-counter"]}"
  variant="${o.variant}"
  ?overlay=${o.overlay}
  aria-label="${o["aria-label"]}"
></mdc-badge>
`,sr=o=>u`
<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">
  <mdc-badge
    type="${o.type}"
    icon-name="${o["icon-name"]}"
    counter="${o.counter}"
    max-counter="${o["max-counter"]}"
    variant="${o.variant}"
    ?overlay=${o.overlay}
    aria-label="${o["aria-label"]}"
  ></mdc-badge>
</div>
`,Rr={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:nr,parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:Object.values(e)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:e.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:e.COUNTER},control:"select",options:C},"icon-name":{if:{arg:"type",eq:e.ICON},control:"text"},variant:{if:{arg:"type",eq:e.ICON},control:"select",options:Object.values(i)},"aria-label":{control:"text"},...er,...or}},b={args:{type:n.TYPE,"icon-name":"placeholder-bold",variant:n.VARIANT,counter:1,"max-counter":C[1],overlay:!1}},y={args:{type:e.ICON,"icon-name":"placeholder-bold",variant:i.PRIMARY,overlay:!1}},v={args:{type:e.COUNTER,counter:10,"max-counter":C[1],overlay:!1}},N={args:{type:e.SUCCESS,overlay:!1}},E={args:{type:e.WARNING,overlay:!1}},R={args:{type:e.ERROR,overlay:!1}},T={render:sr,args:{type:e.COUNTER,counter:1e3,"max-counter":C[2],overlay:!0}};var f,S,h;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(h=(S=b.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,x,M;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(M=(x=y.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var U,$,D;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(D=($=v.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var B,L,Y;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.SUCCESS,
    overlay: false
  }
}`,...(Y=(L=N.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var G,P,w;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.WARNING,
    overlay: false
  }
}`,...(w=(P=E.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var V,X,W;R.parameters={...R.parameters,docs:{...(V=R.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ERROR,
    overlay: false
  }
}`,...(W=(X=R.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var j,F,q;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(q=(F=T.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const Tr=["Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{v as Counter,b as Dot,R as Error,y as Icon,T as Overlay,N as Success,E as Warning,Tr as __namedExportsOrder,Rr as default};
