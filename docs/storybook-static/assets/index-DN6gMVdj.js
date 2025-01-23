import{i as y,D as p,k as h}from"./lit-element-CHllvULs.js";import{r as b}from"./state-CWckTc1X.js";import{t as v}from"./if-defined-C4tJgJ33.js";import{u as I,n as d,C as f}from"./index-HW6KrQZO.js";import{h as M}from"./index-BNZgxKMr.js";import{S as i}from"./index-Dzd38jZn.js";import{T as s}from"./text.constants-DJu2q-6E.js";import"./index-BOBIh5Rr.js";import"./index-BGkqZMsC.js";const O=I.constructTagName("avatar"),r={COUNTER:"counter",ICON:"icon",PHOTO:"photo",TEXT:"text"},T=99,S="user-regular",e={24:24,32:32,48:48,64:64,72:72,88:88,124:124},_={TYPE:r.PHOTO,SIZE:e[32],ICON_NAME:S};var z=Object.defineProperty,l=(o,t,n,E)=>{for(var a=void 0,c=o.length-1,m;c>=0;c--)(m=o[c])&&(a=m(t,n,a)||a);return a&&z(t,n,a),a};const A=o=>{class t extends o{constructor(){super(...arguments),this.size=_.SIZE,this.isTyping=!1}}return l([d({type:String})],t.prototype,"src"),l([d({type:String})],t.prototype,"initials"),l([d({type:String})],t.prototype,"presence"),l([d({type:Number,reflect:!0,attribute:"size"})],t.prototype,"size"),l([d({type:String,attribute:"icon-name"})],t.prototype,"iconName"),l([d({type:Number})],t.prototype,"counter"),l([d({type:Boolean,attribute:"is-typing"})],t.prototype,"isTyping"),t},L=[M,y`
  :host {
    --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
    --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
    --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatar-default-foreground-color);
    --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
  }
  :host([size="124"]) .content {
    width: 7.75rem;
    height: 7.75rem;
  }
  :host([size="88"]) .content {
    width: 5.5rem;
    height: 5.5rem;
  }
  :host([size="72"]) .content {
    width: 4.5rem;
    height: 4.5rem;
  }
  :host([size="64"]) .content {
    width: 4rem;
    height: 4rem;
  }
  :host([size="48"]) .content {
    width: 3rem;
    height: 3rem;
  }
  :host([size="32"]) .content {
    width: 2rem;
    height: 2rem;
  }
  :host([size="24"]) .content {
    width: 1.5rem;
    height: 1.5rem;
  }
  :host([size="124"]) .content > .loading__wrapper > .loader {
    transform: scale(1.5);
  }
  :host([size="88"]) .content > .loading__wrapper > .loader {
    transform: scale(1.2);
  }
  :host([size="72"]) .content > .loading__wrapper > .loader,
  :host([size="64"]) .content > .loading__wrapper > .loader {
    transform: scale(0.8);
  }
  :host([size="48"]) .content > .loading__wrapper > .loader {
    transform: scale(0.6);
  }
  :host([size="32"]) .content > .loading__wrapper > .loader {
    transform: scale(0.4);
  }
  :host([size="24"]) .content > .loading__wrapper > .loader {
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
`],C=o=>({[e[124]]:i.XX_LARGE,[e[88]]:i.X_LARGE,[e[72]]:i.LARGE,[e[64]]:i.MIDSIZE,[e[48]]:i.SMALL,[e[32]]:i.X_SMALL,[e[24]]:i.XX_SMALL})[o]||i.X_SMALL,w=o=>({[e[124]]:4.75,[e[88]]:3,[e[72]]:2.5,[e[64]]:2.25,[e[48]]:1.75,[e[32]]:1.25,[e[24]]:1})[o]||1.25,P=o=>({[e[124]]:s.HEADING_XLARGE_MEDIUM,[e[88]]:s.HEADING_LARGE_MEDIUM,[e[72]]:s.HEADING_MIDSIZE_MEDIUM,[e[64]]:s.HEADING_SMALL_MEDIUM,[e[48]]:s.HEADING_SMALL_MEDIUM,[e[32]]:s.BODY_MIDSIZE_MEDIUM,[e[24]]:s.BODY_SMALL_MEDIUM})[o]||s.BODY_MIDSIZE_MEDIUM;var x=Object.defineProperty,N=(o,t,n,E)=>{for(var a=void 0,c=o.length-1,m;c>=0;c--)(m=o[c])&&(a=m(t,n,a)||a);return a&&x(t,n,a),a};const g=class g extends A(f){constructor(){super(...arguments),this.isPhotoLoaded=!1}getPresenceTemplateBasedOnType(t){return t===r.COUNTER&&(this.counter||this.counter===0)?p:this.presence?h`
        <mdc-presence class="presence" type="${this.presence}" size="${C(this.size)}"></mdc-presence>
      `:p}handleOnLoad(){this.isPhotoLoaded=!0}handleOnError(){this.isPhotoLoaded=!1,this.onerror&&this.onerror("There was a problem while fetching the <img/>. Please check the src attribute and try again.")}photoTemplate(){return h`
      <img
        class="photo"
        src="${v(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `}iconTemplate(){const t=this.iconName||_.ICON_NAME;return h`
      <mdc-icon
        name="${v(t)}"
        length-unit="rem"
        size="${w(this.size)}"
      ></mdc-icon>
    `}textTemplate(t){return h`
      <mdc-text
        type="${P(this.size)}"
        tagname="span"
      >
        ${t}
      </mdc-text>
    `}generateCounterText(t){return t<0?"0":t>T?`${T}+`:t.toString()}generateInitialsText(t){return t.toUpperCase().slice(0,2)}generateTextContent(t){let n="";return t===r.TEXT&&this.initials&&(n=this.generateInitialsText(this.initials)),t===r.COUNTER&&(this.counter||this.counter===0)&&(n=this.generateCounterText(this.counter)),this.textTemplate(n)}getTypeBasedOnInputs(){return this.src?r.PHOTO:this.iconName?r.ICON:this.initials?r.TEXT:this.counter||this.counter===0?r.COUNTER:r.ICON}getTemplateBasedOnType(t){switch(t){case r.PHOTO:return this.photoTemplate();case r.TEXT:case r.COUNTER:return this.generateTextContent(t);case r.ICON:default:return this.iconTemplate()}}getLoadingContent(){return this.isTyping?h`<div class="loading__wrapper"><div class="loader"></div></div>`:p}getPhotoPlaceHolderContent(t){return this.isPhotoLoaded?p:t===r.PHOTO?this.initials?this.textTemplate(this.generateInitialsText(this.initials)):this.iconTemplate():p}update(t){super.update(t),t.has("src")&&!this.src&&(this.isPhotoLoaded=!1)}render(){const t=this.getTypeBasedOnInputs();return h`
      <div class="content" aria-hidden="true">
        ${this.getPhotoPlaceHolderContent(t)}
        ${this.getTemplateBasedOnType(t)}
        ${this.getLoadingContent()}
        ${this.getPresenceTemplateBasedOnType(t)}
      </div>
    `}};g.styles=[...f.styles,...L];let u=g;N([b()],u.prototype,"isPhotoLoaded");u.register(O);export{e as A,_ as D,A as a};
