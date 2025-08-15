import{i as y,D as p,k as c}from"./lit-element-D5KKan5q.js";import{r as M}from"./state-C0WmBOuD.js";import{t as v}from"./if-defined-D5BV9-c0.js";import{u as b,n as h,C as f}from"./provider.component-BaQC7CJH.js";import{I as O}from"./IconNameMixin-CRlZlTtq.js";import{h as _}from"./index-B-GnYs90.js";import{S as n}from"./index-CbfQ-V8s.js";import{T as s}from"./index-riA1qVWu.js";import"./index-8wZU13aH.js";const z=b.constructTagName("avatar"),r={COUNTER:"counter",ICON:"icon",PHOTO:"photo",TEXT:"text"},T=99,A="user-regular",e={24:24,32:32,48:48,64:64,72:72,88:88,124:124},E={TYPE:r.PHOTO,SIZE:e[32],ICON_NAME:A};var L=Object.defineProperty,l=(a,t,i,I)=>{for(var o=void 0,d=a.length-1,m;d>=0;d--)(m=a[d])&&(o=m(t,i,o)||o);return o&&L(t,i,o),o};const S=a=>{class t extends a{constructor(){super(...arguments),this.size=E.SIZE,this.isTyping=!1}}return l([h({type:String})],t.prototype,"src"),l([h({type:String})],t.prototype,"initials"),l([h({type:String})],t.prototype,"presence"),l([h({type:Number,reflect:!0,attribute:"size"})],t.prototype,"size"),l([h({type:Number})],t.prototype,"counter"),l([h({type:Boolean,attribute:"is-typing"})],t.prototype,"isTyping"),t},C=[_,y`
    :host {
      --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
      --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatar-default-foreground-color);
      --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
    }
    :host([size='124'])::part(content) {
      width: 7.75rem;
      height: 7.75rem;
    }
    :host([size='88'])::part(content) {
      width: 5.5rem;
      height: 5.5rem;
    }
    :host([size='72'])::part(content) {
      width: 4.5rem;
      height: 4.5rem;
    }
    :host([size='64'])::part(content) {
      width: 4rem;
      height: 4rem;
    }
    :host([size='48'])::part(content) {
      width: 3rem;
      height: 3rem;
    }
    :host([size='32'])::part(content) {
      width: 2rem;
      height: 2rem;
    }
    :host([size='24'])::part(content) {
      width: 1.5rem;
      height: 1.5rem;
    }
    :host([size='124'])::part(loader) {
      transform: scale(1.5);
    }
    :host([size='88'])::part(loader) {
      transform: scale(1.2);
    }
    :host([size='72'])::part(loader),
    :host([size='64'])::part(loader) {
      transform: scale(0.8);
    }
    :host([size='48'])::part(loader) {
      transform: scale(0.6);
    }
    :host([size='32'])::part(loader) {
      transform: scale(0.4);
    }
    :host([size='24'])::part(loader) {
      transform: scale(0.3);
    }
    :host::part(content) {
      width: 2rem;
      height: 2rem;
      background-color: var(--mdc-avatar-default-background-color);
      color: var(--mdc-avatar-default-foreground-color);
      border-radius: 100vh;
      position: relative;
      display: grid;
      place-items: center;
    }
    :host::part(photo) {
      border-radius: 100vh;
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    :host::part(presence) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    :host::part(loading-wrapper) {
      position: absolute;
      border-radius: 100vh;
      width: 100%;
      height: 100%;
      background-color: var(--mdc-avatar-loading-overlay-background-color);
      display: grid;
      place-items: center;
    }
    :host::part(loader) {
      position: absolute;
      width: 1rem;
      transform: scale(0.4);
      aspect-ratio: 1;
      border-radius: 100vh;
      animation: loading-key 1s infinite linear alternate;
    }
    @keyframes loading-key {
      0% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
        background: var(--mdc-avatar-loading-indicator-foreground-color);
      }
      33% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
        background: var(--mdc-avatar-loading-indicator-background-color);
      }
      66% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
        background: var(--mdc-avatar-loading-indicator-background-color);
      }
      100% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
        background: var(--mdc-avatar-loading-indicator-foreground-color);
      }
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(content) {
        outline: 0.125rem solid;
      }
    }
  `],x=a=>({[e[124]]:n.XX_LARGE,[e[88]]:n.X_LARGE,[e[72]]:n.LARGE,[e[64]]:n.MIDSIZE,[e[48]]:n.SMALL,[e[32]]:n.X_SMALL,[e[24]]:n.XX_SMALL})[a]||n.X_SMALL,P=a=>({[e[124]]:4.75,[e[88]]:3,[e[72]]:2.5,[e[64]]:2.25,[e[48]]:1.75,[e[32]]:1.25,[e[24]]:1})[a]||1.25,N=a=>({[e[124]]:s.HEADING_XLARGE_MEDIUM,[e[88]]:s.HEADING_LARGE_MEDIUM,[e[72]]:s.HEADING_MIDSIZE_MEDIUM,[e[64]]:s.HEADING_SMALL_MEDIUM,[e[48]]:s.HEADING_SMALL_MEDIUM,[e[32]]:s.BODY_MIDSIZE_MEDIUM,[e[24]]:s.BODY_SMALL_MEDIUM})[a]||s.BODY_MIDSIZE_MEDIUM;var k=Object.defineProperty,D=(a,t,i,I)=>{for(var o=void 0,d=a.length-1,m;d>=0;d--)(m=a[d])&&(o=m(t,i,o)||o);return o&&k(t,i,o),o};const g=class g extends S(O(f)){constructor(){super(...arguments),this.isPhotoLoaded=!1}getPresenceTemplateBasedOnType(t){return t===r.COUNTER&&(this.counter||this.counter===0)||this.isTyping?p:this.presence?c`
        <mdc-presence part="presence" type="${this.presence}" size="${x(this.size)}"></mdc-presence>
      `:p}handleOnLoad(){this.isPhotoLoaded=!0}handleOnError(){this.isPhotoLoaded=!1,this.onerror&&this.onerror("There was a problem while fetching the <img/>. Please check the src attribute and try again.")}photoTemplate(){return c`
      <img
        part="photo"
        src="${v(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `}iconTemplate(){const t=this.iconName||E.ICON_NAME;return c`
      <mdc-icon name="${v(t)}" length-unit="rem" size="${P(this.size)}"></mdc-icon>
    `}textTemplate(t){return c` <mdc-text type="${N(this.size)}" tagname="span"> ${t} </mdc-text> `}generateCounterText(t){return t<0?"0":t>T?`${T}+`:t.toString()}generateInitialsText(t){return t.toUpperCase().slice(0,2)}generateTextContent(t){let i="";return t===r.TEXT&&this.initials&&(i=this.generateInitialsText(this.initials)),t===r.COUNTER&&(this.counter||this.counter===0)&&(i=this.generateCounterText(this.counter)),this.textTemplate(i)}getTypeBasedOnInputs(){return this.src?r.PHOTO:this.iconName?r.ICON:this.initials?r.TEXT:this.counter||this.counter===0?r.COUNTER:r.ICON}getTemplateBasedOnType(t){switch(t){case r.PHOTO:return this.photoTemplate();case r.TEXT:case r.COUNTER:return this.generateTextContent(t);case r.ICON:default:return this.iconTemplate()}}getLoadingContent(){return this.isTyping?c`<div part="loading-wrapper"><div part="loader"></div></div>`:p}getPhotoPlaceHolderContent(t){return this.isPhotoLoaded?p:t===r.PHOTO?this.initials?this.textTemplate(this.generateInitialsText(this.initials)):this.iconTemplate():p}update(t){super.update(t),t.has("src")&&!this.src&&(this.isPhotoLoaded=!1)}render(){const t=this.getTypeBasedOnInputs();return c`
      <div part="content" aria-hidden="true">
        ${this.getPhotoPlaceHolderContent(t)} ${this.getTemplateBasedOnType(t)} ${this.getLoadingContent()}
        ${this.getPresenceTemplateBasedOnType(t)}
      </div>
    `}};g.styles=[...f.styles,...C];let u=g;D([M()],u.prototype,"isPhotoLoaded");u.register(z);export{e as A,E as D,S as a};
