import{i as z,k as u}from"./lit-element-CPYlYYac.js";import{R as A}from"./class-map-CXre9d5K.js";import{u as H,C as O,n as l}from"./index-BLShQaRP.js";import{t as J}from"./if-defined-4GS2c12S.js";import{F as K,V as Q}from"./index-DUhjq5I_.js";import{h as ee}from"./index-DOMSj5Ok.js";import"./index-C0WGh0MV.js";import{c as re,s as oe}from"./commonArgTypes-BluK8w5L.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DlI5gUhJ.js";import"./create-context-89xeped_.js";const ae=H.constructTagName("badge"),r={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},I={SUCCESS_ICON_NAME:"check-circle-badge-filled",WARNING_ICON_NAME:"warning-badge-filled",ERROR_ICON_NAME:"error-legacy-badge-filled"},i={PRIMARY:"primary",SECONDARY:"secondary"},p={SUCCESS:"success",WARNING:"warning",ERROR:"error"},c={TYPE:r.DOT,MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:i.PRIMARY,ICON_SIZE:1},te=[ee,z`
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
  `];var ce=Object.defineProperty,m=(o,e,a,s)=>{for(var t=void 0,d=o.length-1,g;d>=0;d--)(g=o[d])&&(t=g(e,a,t)||t);return t&&ce(e,a,t),t};const _=class _ extends O{constructor(){super(...arguments),this.variant=c.VARIANT,this.maxCounter=c.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(e,a){return a===void 0||typeof a!="number"||e===0?"":a>e?`${e}+`:e>c.MAX_COUNTER_LIMIT||a>c.MAX_COUNTER_LIMIT?`${c.MAX_COUNTER_LIMIT}+`:a.toString()}getBadgeIcon(e,a,s,t){return u`
      <mdc-icon
        class="mdc-badge-icon ${A(this.getIconClasses(a,s,t))}"
        name="${J(e)}"
        size="${c.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(e){return u`<div class="mdc-badge-dot ${A({"mdc-badge-overlay":e})}"></div>`}getIconClasses(e,a,s){const t={"mdc-badge-overlay":e},d=s===r.ICON?i:p,Z={[`mdc-badge-icon__${Object.values(d).includes(a)?a:c.VARIANT}`]:!0};return{...t,...Z}}getBadgeCounterText(e,a,s){return u`
      <mdc-text
        type="${K.BODY_SMALL_MEDIUM}"
        tagname="${Q.DIV}"
        class="mdc-badge-text ${A({"mdc-badge-overlay":a})}"
      >
        ${this.getCounterText(e,s)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(i).includes(this.variant)&&(this.variant=i.PRIMARY);const{counter:e,iconName:a,maxCounter:s,overlay:t,type:d,variant:g}=this;switch(d){case r.ICON:return this.getBadgeIcon(a||"",t,g,d);case r.COUNTER:return this.getBadgeCounterText(s,t,e);case r.SUCCESS:return this.getBadgeIcon(I.SUCCESS_ICON_NAME,t,p.SUCCESS);case r.WARNING:return this.getBadgeIcon(I.WARNING_ICON_NAME,t,p.WARNING);case r.ERROR:return this.getBadgeIcon(I.ERROR_ICON_NAME,t,p.ERROR);case r.DOT:default:return this.type=r.DOT,this.getBadgeDot(t)}}update(e){super.update(e),e.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};_.styles=[...O.styles,...te];let n=_;m([l({type:String,reflect:!0})],n.prototype,"type");m([l({type:String,attribute:"icon-name"})],n.prototype,"iconName");m([l({type:String,reflect:!0})],n.prototype,"variant");m([l({type:Number})],n.prototype,"counter");m([l({type:Number,attribute:"max-counter",reflect:!0})],n.prototype,"maxCounter");m([l({type:Boolean})],n.prototype,"overlay");m([l({type:String,attribute:"aria-label"})],n.prototype,"ariaLabel");n.register(ae);const C=[9,99,999],ne=o=>u`
<mdc-badge
  type="${o.type}"
  icon-name="${o["icon-name"]}"
  counter="${o.counter}"
  max-counter="${o["max-counter"]}"
  variant="${o.variant}"
  ?overlay=${o.overlay}
  aria-label="${o["aria-label"]}"
></mdc-badge>
`,se=o=>u`
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
`,Te={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:ne,parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:Object.values(r)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:r.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:r.COUNTER},control:"select",options:C},"icon-name":{if:{arg:"type",eq:r.ICON},control:"text"},variant:{if:{arg:"type",eq:r.ICON},control:"select",options:Object.values(i),table:{defaultValue:{summary:c.VARIANT}}},"aria-label":{control:"text"},...re,...oe}},b={args:{type:c.TYPE,"icon-name":"placeholder-bold",variant:c.VARIANT,counter:1,"max-counter":C[1],overlay:!1}},y={args:{type:r.ICON,"icon-name":"placeholder-bold",variant:i.PRIMARY,overlay:!1}},v={args:{type:r.COUNTER,counter:10,"max-counter":C[1],overlay:!1}},N={args:{type:r.SUCCESS,overlay:!1}},R={args:{type:r.WARNING,overlay:!1}},T={args:{type:r.ERROR,overlay:!1}},E={render:se,args:{type:r.COUNTER,counter:1e3,"max-counter":C[2],overlay:!0}};var f,S,h;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(Y=(L=N.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var G,P,w;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.WARNING,
    overlay: false
  }
}`,...(w=(P=R.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var V,X,W;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ERROR,
    overlay: false
  }
}`,...(W=(X=T.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var j,F,q;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(q=(F=E.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const Ee=["Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{v as Counter,b as Dot,T as Error,y as Icon,E as Overlay,N as Success,R as Warning,Ee as __namedExportsOrder,Te as default};
