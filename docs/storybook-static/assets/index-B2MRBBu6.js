import{u as y,n as d,U as I,S as z,q as n,h as m,k as h,E as v,$ as O}from"./iframe-DmLJKHqi.js";import{t as f}from"./if-defined-_tidrUDI.js";import{I as M}from"./IconNameMixin-Dd_wqDts.js";import{a as s}from"./index-Cm4WXwI6.js";import"./index-D2sA77vY.js";const _=y.constructTagName("avatar"),r={COUNTER:"counter",ICON:"icon",PHOTO:"photo",TEXT:"text"},T=99,C="user-regular",e={24:24,32:32,48:48,64:64,72:72,88:88,124:124},E={TYPE:r.PHOTO,SIZE:e[32],ICON_NAME:C};var P=Object.defineProperty,l=(a,t,i,b)=>{for(var o=void 0,c=a.length-1,p;c>=0;c--)(p=a[c])&&(o=p(t,i,o)||o);return o&&P(t,i,o),o};const x=a=>{class t extends a{constructor(){super(...arguments),this.size=E.SIZE,this.isTyping=!1}}return l([d({type:String})],t.prototype,"src"),l([d({type:String})],t.prototype,"initials"),l([d({type:String})],t.prototype,"presence"),l([d({type:Number,reflect:!0,attribute:"size"})],t.prototype,"size"),l([d({type:Number})],t.prototype,"counter"),l([d({type:Boolean,attribute:"is-typing"})],t.prototype,"isTyping"),t},N=[I,z`
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
      :host::part(content) {
        outline: 0.125rem solid;
      }
    }
  `],S=a=>({[e[124]]:s[124],[e[88]]:s[88],[e[72]]:s[72],[e[64]]:s[64],[e[48]]:s[48],[e[32]]:s[32],[e[24]]:s[24]})[a]||s[32],A=a=>({[e[124]]:4.75,[e[88]]:3,[e[72]]:2.5,[e[64]]:2.25,[e[48]]:1.75,[e[32]]:1.25,[e[24]]:1})[a]||1.25,k=a=>({[e[124]]:n.HEADING_XLARGE_MEDIUM,[e[88]]:n.HEADING_LARGE_MEDIUM,[e[72]]:n.HEADING_MIDSIZE_MEDIUM,[e[64]]:n.HEADING_SMALL_MEDIUM,[e[48]]:n.HEADING_SMALL_MEDIUM,[e[32]]:n.BODY_MIDSIZE_MEDIUM,[e[24]]:n.BODY_SMALL_MEDIUM})[a]||n.BODY_MIDSIZE_MEDIUM;var D=Object.defineProperty,w=(a,t,i,b)=>{for(var o=void 0,c=a.length-1,p;c>=0;c--)(p=a[c])&&(o=p(t,i,o)||o);return o&&D(t,i,o),o};const g=class g extends x(M(v)){constructor(){super(...arguments),this.isPhotoLoaded=!1}getPresenceTemplateBasedOnType(t){return t===r.COUNTER&&(this.counter||this.counter===0)||this.isTyping?m:this.presence?h`
        <mdc-presence part="presence" type="${this.presence}" size="${S(this.size)}"></mdc-presence>
      `:m}handleOnLoad(){this.isPhotoLoaded=!0}handleOnError(){this.isPhotoLoaded=!1,this.onerror&&this.onerror("There was a problem while fetching the <img/>. Please check the src attribute and try again.")}photoTemplate(){return h`
      <img
        part="photo"
        src="${f(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `}iconTemplate(){const t=this.iconName||E.ICON_NAME;return h`
      <mdc-icon name="${f(t)}" length-unit="rem" size="${A(this.size)}"></mdc-icon>
    `}textTemplate(t){return h` <mdc-text type="${k(this.size)}" tagname="span"> ${t} </mdc-text> `}generateCounterText(t){return t<0?"0":t>T?`${T}+`:t.toString()}generateInitialsText(t){return t.toUpperCase().slice(0,2)}generateTextContent(t){let i="";return t===r.TEXT&&this.initials&&(i=this.generateInitialsText(this.initials)),t===r.COUNTER&&(this.counter||this.counter===0)&&(i=this.generateCounterText(this.counter)),this.textTemplate(i)}getTypeBasedOnInputs(){return this.src?r.PHOTO:this.iconName?r.ICON:this.initials?r.TEXT:this.counter||this.counter===0?r.COUNTER:r.ICON}getTemplateBasedOnType(t){switch(t){case r.PHOTO:return this.photoTemplate();case r.TEXT:case r.COUNTER:return this.generateTextContent(t);case r.ICON:default:return this.iconTemplate()}}getLoadingContent(){return this.isTyping?h`<div part="loading-wrapper"><div part="loader"></div></div>`:m}getPhotoPlaceHolderContent(t){return this.isPhotoLoaded?m:t===r.PHOTO?this.initials?this.textTemplate(this.generateInitialsText(this.initials)):this.iconTemplate():m}update(t){super.update(t),t.has("src")&&!this.src&&(this.isPhotoLoaded=!1)}render(){const t=this.getTypeBasedOnInputs();return h`
      <div part="content" aria-hidden="true">
        ${this.getPhotoPlaceHolderContent(t)} ${this.getTemplateBasedOnType(t)} ${this.getLoadingContent()}
        ${this.getPresenceTemplateBasedOnType(t)}
      </div>
    `}};g.styles=[...v.styles,...N];let u=g;w([O()],u.prototype,"isPhotoLoaded");u.register(_);export{e as A,E as D,x as a};
