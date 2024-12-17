import{R as K,i as ee,D as z,k as p}from"./lit-element-CHllvULs.js";import{e as te,i as re,t as ae}from"./directive-Ctav8iJK.js";import{u as oe,c as E,a as x,p as $,d as ie}from"./directive-helpers-5SvKRCBg.js";import{u as se,C as N,n as b}from"./index-HW6KrQZO.js";import{r as ne}from"./state-CWckTc1X.js";import{t as v}from"./if-defined-C4tJgJ33.js";import{S as s,T as ce}from"./index-DopGgdkJ.js";import{h as le}from"./index-CcvxQn6k.js";import{T}from"./text.constants-DJu2q-6E.js";import"./index-BnGanu3N.js";import"./index-DcQ7scWP.js";import{d as k}from"./utils-C8za8dl6.js";import{c as de,s as me}from"./commonArgTypes-BluK8w5L.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=(t,e,n)=>{const f=new Map;for(let r=e;r<=n;r++)f.set(t[r],r);return f},q=te(class extends re{constructor(t){if(super(t),t.type!==ae.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let f;n===void 0?n=e:e!==void 0&&(f=e);const r=[],c=[];let i=0;for(const h of t)r[i]=f?f(h,i):i,c[i]=n(h,i),i++;return{values:c,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,f]){const r=oe(t),{values:c,keys:i}=this.dt(e,n,f);if(!Array.isArray(r))return this.ut=i,c;const h=this.ut??(this.ut=[]),g=[];let S,D,a=0,l=r.length-1,o=0,m=c.length-1;for(;a<=l&&o<=m;)if(r[a]===null)a++;else if(r[l]===null)l--;else if(h[a]===i[o])g[o]=E(r[a],c[o]),a++,o++;else if(h[l]===i[m])g[m]=E(r[l],c[m]),l--,m--;else if(h[a]===i[m])g[m]=E(r[a],c[m]),x(t,g[m+1],r[a]),a++,m--;else if(h[l]===i[o])g[o]=E(r[l],c[o]),x(t,r[a],r[l]),l--,o++;else if(S===void 0&&(S=X(i,o,m),D=X(h,a,l)),S.has(h[a]))if(S.has(h[l])){const y=D.get(i[o]),A=y!==void 0?r[y]:null;if(A===null){const P=x(t,r[a]);E(P,c[o]),g[o]=P}else g[o]=E(A,c[o]),x(t,r[a],A),r[y]=null;o++}else $(r[l]),l--;else $(r[a]),a++;for(;o<=m;){const y=x(t,g[m+1]);E(y,c[o]),g[o++]=y}for(;a<=l;){const y=r[a++];y!==null&&$(y)}return this.ut=i,ie(t,g),K}}),pe=se.constructTagName("avatar"),d={COUNTER:"counter",ICON:"icon",PHOTO:"photo",TEXT:"text"},R=99,ue="user-regular",C={TYPE:d.PHOTO,SIZE:s.X_SMALL,ICON_NAME:ue},he=[le,ee`
  :host {
    --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
    --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
    --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatar-default-foreground-color);
    --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
  }
  :host([size="xx_large"]) .content {
    width: 7.75rem;
    height: 7.75rem;
  }
  :host([size="x_large"]) .content {
    width: 5.5rem;
    height: 5.5rem;
  }
  :host([size="large"]) .content {
    width: 4.5rem;
    height: 4.5rem;
  }
  :host([size="midsize"]) .content {
    width: 4rem;
    height: 4rem;
  }
  :host([size="small"]) .content {
    width: 3rem;
    height: 3rem;
  }
  :host([size="x_small"]) .content {
    width: 2rem;
    height: 2rem;
  }
  :host([size="xx_small"]) .content {
    width: 1.5rem;
    height: 1.5rem;
  }
  :host([size="xx_large"]) .content > .loading__wrapper > .loader {
    transform: scale(1.5);
  }
  :host([size="x_large"]) .content > .loading__wrapper > .loader {
    transform: scale(1.2);
  }
  :host([size="large"]) .content > .loading__wrapper > .loader,
  :host([size="midsize"]) .content > .loading__wrapper > .loader {
    transform: scale(0.8);
  }
  :host([size="small"]) .content > .loading__wrapper > .loader {
    transform: scale(0.6);
  }
  :host([size="x_small"]) .content > .loading__wrapper > .loader {
    transform: scale(0.4);
  }
  :host([size="xx_small"]) .content > .loading__wrapper > .loader {
    transform: scale(0.3);
  }
  .content {
    width: 2rem;
    height: 2rem;
    background-color: var(--mdc-avatar-default-background-color);
    color: var(--mdc-avatar-default-foreground-color);
    border-radius: 100vh;
    position: relative;
    display: grid;
    place-items: center;
  }
  .photo {
    border-radius: 100vh;
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  .presence {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .loading__wrapper {
    position: absolute;
    border-radius: 100vh;
    width: 100%;
    height: 100%;
    background-color: var(--mdc-avatar-loading-overlay-background-color);
    display: grid;
    place-items: center;
  }
  .loader {
    position: absolute;
    width: 1rem;
    transform: scale(0.4);
    aspect-ratio: 1;
    border-radius: 100vh;
    animation: loading-key 1s infinite linear alternate;
  }
  @keyframes loading-key {
    0%  {
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
      background: var(--mdc-avatar-loading-indicator-foreground-color);
    }
    33% {
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
      background: var(--mdc-avatar-loading-indicator-background-color);
    }
    66% {
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
      background: var(--mdc-avatar-loading-indicator-background-color);
    }
    100%{
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
      background: var(--mdc-avatar-loading-indicator-foreground-color);
    }
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    .content:not(.photo) {
      outline: 0.125rem solid;
    }
  }
`],ge=t=>({[s.XX_LARGE]:4.75,[s.X_LARGE]:3,[s.LARGE]:2.5,[s.MIDSIZE]:2.25,[s.SMALL]:1.75,[s.X_SMALL]:1.25,[s.XX_SMALL]:1})[t]||1.25,ve=t=>({[s.XX_LARGE]:T.HEADING_XLARGE_MEDIUM,[s.X_LARGE]:T.HEADING_LARGE_MEDIUM,[s.LARGE]:T.HEADING_MIDSIZE_MEDIUM,[s.MIDSIZE]:T.HEADING_SMALL_MEDIUM,[s.SMALL]:T.HEADING_SMALL_MEDIUM,[s.XX_SMALL]:T.BODY_SMALL_MEDIUM,[s.X_SMALL]:T.BODY_MIDSIZE_MEDIUM})[t]||T.BODY_MIDSIZE_MEDIUM;var fe=Object.defineProperty,_=(t,e,n,f)=>{for(var r=void 0,c=t.length-1,i;c>=0;c--)(i=t[c])&&(r=i(e,n,r)||r);return r&&fe(e,n,r),r};const w=class w extends N{constructor(){super(...arguments),this.size=C.SIZE,this.isTyping=!1,this.isPhotoLoaded=!1}getPresenceTemplateBasedOnType(e){return e===d.COUNTER&&(this.counter||this.counter===0)?z:this.presence?p`
        <mdc-presence class="presence" type="${this.presence}" size="${this.size}"></mdc-presence>
      `:z}handleOnLoad(){this.isPhotoLoaded=!0}handleOnError(){this.isPhotoLoaded=!1,this.onerror&&this.onerror("There was a problem while fetching the <img/>. Please check the src attribute and try again.")}photoTemplate(){return p`
      <img
        class="photo"
        src="${v(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `}iconTemplate(){const e=this.iconName||C.ICON_NAME;return p`
      <mdc-icon
        name="${v(e)}"
        length-unit="rem"
        size="${ge(this.size)}"
      ></mdc-icon>
    `}textTemplate(e){return p`
      <mdc-text
        type="${ve(this.size)}"
        tagname="span"
      >
        ${e}
      </mdc-text>
    `}generateCounterText(e){return e<0?"0":e>R?`${R}+`:e.toString()}generateInitialsText(e){return e.toUpperCase().slice(0,2)}generateTextContent(e){let n="";return e===d.TEXT&&this.initials&&(n=this.generateInitialsText(this.initials)),e===d.COUNTER&&(this.counter||this.counter===0)&&(n=this.generateCounterText(this.counter)),this.textTemplate(n)}getTypeBasedOnInputs(){return this.src?d.PHOTO:this.iconName?d.ICON:this.initials?d.TEXT:this.counter||this.counter===0?d.COUNTER:d.ICON}getTemplateBasedOnType(e){switch(e){case d.PHOTO:return this.photoTemplate();case d.TEXT:case d.COUNTER:return this.generateTextContent(e);case d.ICON:default:return this.iconTemplate()}}getLoadingContent(){return this.isTyping?p`<div class="loading__wrapper"><div class="loader"></div></div>`:z}getPhotoPlaceHolderContent(e){return this.isPhotoLoaded?z:e===d.PHOTO?this.initials?this.textTemplate(this.generateInitialsText(this.initials)):this.iconTemplate():z}update(e){super.update(e),e.has("src")&&!this.src&&(this.isPhotoLoaded=!1)}render(){const e=this.getTypeBasedOnInputs();return p`
      <div class="content" aria-hidden="true">
        ${this.getPhotoPlaceHolderContent(e)}
        ${this.getTemplateBasedOnType(e)}
        ${this.getLoadingContent()}
        ${this.getPresenceTemplateBasedOnType(e)}
      </div>
    `}};w.styles=[...N.styles,...he];let u=w;_([b({type:String})],u.prototype,"src");_([b({type:String})],u.prototype,"initials");_([b({type:String})],u.prototype,"presence");_([b({type:String,reflect:!0})],u.prototype,"size");_([b({type:String,attribute:"icon-name"})],u.prototype,"iconName");_([b({type:Number})],u.prototype,"counter");_([b({type:Boolean,attribute:"is-typing"})],u.prototype,"isTyping");_([ne()],u.prototype,"isPhotoLoaded");u.register(pe);const ye=t=>p`
  <mdc-avatar
    counter="${v(t.counter)}"
    icon-name="${v(t["icon-name"])}"
    initials="${v(t.initials)}"
    presence="${v(t.presence)}"
    size="${v(t.size)}"
    src="${v(t.src)}"
    ?is-typing="${t["is-typing"]}"
  ></mdc-avatar>
`,De={title:"Components/avatar",tags:["autodocs"],component:"mdc-avatar",render:ye,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(ce)},size:{control:"select",options:Object.values(s)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},...k(["--mdc-avatar-default-background-color","--mdc-avatar-default-foreground-color","--mdc-avatar-loading-indicator-background-color","--mdc-avatar-loading-indicator-foreground-color","--mdc-avatar-loading-overlay-background-color"]),...de,...me}},I={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:"x_large","icon-name":"","is-typing":""}},M={args:{size:C.SIZE}},O={render:()=>p`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    ${q(Object.values(s),t=>p`
        <mdc-avatar size="${t}"></mdc-avatar>
      `)}
    </div>
  `,argTypes:{...k(["counter","icon-name","initials","presence","size","src","is-typing"])}},L={render:t=>p`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${q(Object.values(s),e=>p`
        <mdc-avatar
          src="${v(t.src)}"
          presence="${v(t.presence)}"
          ?is-typing="${t["is-typing"]}"
          size="${e}"
        ></mdc-avatar>
      `)}
    </div>
  `,argTypes:{...k(["counter","icon-name","initials","size"])},args:{src:"https://picsum.photos/id/63/256",presence:"active","is-typing":!1}};var U,G,H;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 'x_large',
    'icon-name': '',
    'is-typing': ''
  }
}`,...(H=(G=I.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var j,Z,B;M.parameters={...M.parameters,docs:{...(j=M.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(B=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var F,Y,W;O.parameters={...O.parameters,docs:{...(F=O.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    \${repeat(Object.values(PRESENCE_SIZE), size => html\`
        <mdc-avatar size="\${size}"></mdc-avatar>
      \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'presence', 'size', 'src', 'is-typing'])
  }
}`,...(W=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var J,Q,V;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(PRESENCE_SIZE), size => html\`
        <mdc-avatar
          src="\${ifDefined(args.src)}"
          presence="\${ifDefined(args.presence)}"
          ?is-typing="\${args['is-typing']}"
          size="\${size}"
        ></mdc-avatar>
      \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'size'])
  },
  args: {
    src: 'https://picsum.photos/id/63/256',
    presence: 'active',
    'is-typing': false
  }
}`,...(V=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Pe=["Example","Fallback","Size","SizeWithPresence"];export{I as Example,M as Fallback,O as Size,L as SizeWithPresence,Pe as __namedExportsOrder,De as default};
