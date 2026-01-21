import{u as y,n as c,$ as I,X as z,T as s,h as p,k as h,H as v,a1 as O}from"./iframe-CUGe0MVU.js";import{t as f}from"./if-defined-BA0pvBbp.js";import{I as M}from"./IconNameMixin-WRjqlvwN.js";import{a as n}from"./index-Cq2t10nD.js";import"./index-CXoUVess.js";const C=y.constructTagName("avatar"),r={COUNTER:"counter",ICON:"icon",PHOTO:"photo",TEXT:"text"},T=99,_="user-regular",t={24:24,32:32,48:48,64:64,72:72,88:88,124:124},b={TYPE:r.PHOTO,SIZE:t[32],ICON_NAME:_};var x=Object.defineProperty,l=(a,e,i,E)=>{for(var o=void 0,d=a.length-1,m;d>=0;d--)(m=a[d])&&(o=m(e,i,o)||o);return o&&x(e,i,o),o};const P=a=>{class e extends a{constructor(){super(...arguments),this.size=b.SIZE,this.isTyping=!1}}return l([c({type:String})],e.prototype,"src"),l([c({type:String})],e.prototype,"initials"),l([c({type:String})],e.prototype,"presence"),l([c({type:Number,reflect:!0,attribute:"size"})],e.prototype,"size"),l([c({type:Number})],e.prototype,"counter"),l([c({type:Boolean,attribute:"is-typing"})],e.prototype,"isTyping"),e},N=[I,z`
    :host {
      --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
      --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatar-default-foreground-color);
      --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
    }
    :host([size='124']) {
      width: 7.75rem;
      height: 7.75rem;
    }
    :host([size='88']) {
      width: 5.5rem;
      height: 5.5rem;
    }
    :host([size='72']) {
      width: 4.5rem;
      height: 4.5rem;
    }
    :host([size='64']) {
      width: 4rem;
      height: 4rem;
    }
    :host([size='48']) {
      width: 3rem;
      height: 3rem;
    }
    :host([size='32']) {
      width: 2rem;
      height: 2rem;
    }
    :host([size='24']) {
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
    :host {
      width: 2rem;
      height: 2rem;
      background-color: var(--mdc-avatar-default-background-color);
      color: var(--mdc-avatar-default-foreground-color);
      border-radius: 100vh;
      position: relative;
      display: grid;
      place-items: center;
      flex-shrink: 0;
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

    :host([size='124'])::part(presence) {
      bottom: -0.25rem;
      right: -0.21875rem;
    }

    :host([size='88'])::part(presence),
    :host([size='72'])::part(presence),
    :host([size='64'])::part(presence) {
      bottom: -0.09375rem;
      right: -0.09375rem;
    }

    :host([size='48'])::part(presence) {
      bottom: -0.03125rem;
      right: -0.03125rem;
    }

    :host([size='32'])::part(presence) {
      bottom: -0.15625rem;
      right: -0.15625rem;
    }

    :host([size='24'])::part(presence) {
      bottom: -0.1875rem;
      right: -0.1875rem;
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
      :host {
        outline: 0.125rem solid;
      }
    }
  `],k=a=>({[t[124]]:n[124],[t[88]]:n[88],[t[72]]:n[72],[t[64]]:n[64],[t[48]]:n[48],[t[32]]:n[32],[t[24]]:n[24]})[a]||n[32],S=a=>({[t[124]]:4.75,[t[88]]:3,[t[72]]:2.5,[t[64]]:2.25,[t[48]]:1.75,[t[32]]:1.25,[t[24]]:1})[a]||1.25,A=a=>({[t[124]]:s.HEADING_XLARGE_MEDIUM,[t[88]]:s.HEADING_LARGE_MEDIUM,[t[72]]:s.HEADING_MIDSIZE_MEDIUM,[t[64]]:s.HEADING_SMALL_MEDIUM,[t[48]]:s.HEADING_SMALL_MEDIUM,[t[32]]:s.BODY_MIDSIZE_MEDIUM,[t[24]]:s.BODY_SMALL_MEDIUM})[a]||s.BODY_MIDSIZE_MEDIUM;var D=Object.defineProperty,w=(a,e,i,E)=>{for(var o=void 0,d=a.length-1,m;d>=0;d--)(m=a[d])&&(o=m(e,i,o)||o);return o&&D(e,i,o),o};const g=class g extends P(M(v)){constructor(){super(...arguments),this.isPhotoLoaded=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}getPresenceTemplateBasedOnType(e){return e===r.COUNTER&&(this.counter||this.counter===0)||this.isTyping?p:this.presence?h`
        <mdc-presence part="presence" type="${this.presence}" size="${k(this.size)}"></mdc-presence>
      `:p}handleOnLoad(){this.isPhotoLoaded=!0}handleOnError(){this.isPhotoLoaded=!1,this.onerror&&this.onerror("There was a problem while fetching the <img/>. Please check the src attribute and try again.")}photoTemplate(){return h`
      <img
        part="photo"
        src="${f(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `}iconTemplate(){const e=this.iconName||b.ICON_NAME;return h`
      <mdc-icon name="${f(e)}" length-unit="rem" size="${S(this.size)}"></mdc-icon>
    `}textTemplate(e){return h` <mdc-text type="${A(this.size)}" tagname="span"> ${e} </mdc-text> `}generateCounterText(e){return e<0?"0":e>T?`${T}+`:e.toString()}generateInitialsText(e){return e.toUpperCase().slice(0,2)}generateTextContent(e){let i="";return e===r.TEXT&&this.initials&&(i=this.generateInitialsText(this.initials)),e===r.COUNTER&&(this.counter||this.counter===0)&&(i=this.generateCounterText(this.counter)),this.textTemplate(i)}getTypeBasedOnInputs(){return this.src?r.PHOTO:this.iconName?r.ICON:this.initials?r.TEXT:this.counter||this.counter===0?r.COUNTER:r.ICON}getTemplateBasedOnType(e){switch(e){case r.PHOTO:return this.photoTemplate();case r.TEXT:case r.COUNTER:return this.generateTextContent(e);case r.ICON:default:return this.iconTemplate()}}getLoadingContent(){return this.isTyping?h`<div part="loading-wrapper"><div part="loader"></div></div>`:p}getPhotoPlaceHolderContent(e){return this.isPhotoLoaded?p:e===r.PHOTO?this.initials?this.textTemplate(this.generateInitialsText(this.initials)):this.iconTemplate():p}update(e){super.update(e),e.has("src")&&!this.src&&(this.isPhotoLoaded=!1)}render(){const e=this.getTypeBasedOnInputs();return h`
      ${this.getPhotoPlaceHolderContent(e)} ${this.getTemplateBasedOnType(e)} ${this.getLoadingContent()}
      ${this.getPresenceTemplateBasedOnType(e)}
    `}};g.styles=[...v.styles,...N];let u=g;w([O()],u.prototype,"isPhotoLoaded");u.register(C);export{t as A,b as D,P as a};
