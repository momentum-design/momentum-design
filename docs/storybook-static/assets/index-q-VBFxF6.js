import{i as y,D as p,k as d}from"./lit-element-D5KKan5q.js";import{r as I}from"./state-CmYk530Z.js";import{t as v}from"./if-defined-D5BV9-c0.js";import{u as z,C as f}from"./provider.component-DrWB4byV.js";import{n as h}from"./property-Bj3TGwkg.js";import{I as O}from"./IconNameMixin-Bk-Z_FTS.js";import{h as M}from"./index-CqVtAZCJ.js";import{a as n}from"./index-B-takkez.js";import{T as s}from"./index-D2VIkDCb.js";import"./index-XT4ftmUQ.js";const C=z.constructTagName("avatar"),r={COUNTER:"counter",ICON:"icon",PHOTO:"photo",TEXT:"text"},T=99,_="user-regular",e={24:24,32:32,48:48,64:64,72:72,88:88,124:124},b={TYPE:r.PHOTO,SIZE:e[32],ICON_NAME:_};var P=Object.defineProperty,l=(o,t,i,E)=>{for(var a=void 0,c=o.length-1,m;c>=0;c--)(m=o[c])&&(a=m(t,i,a)||a);return a&&P(t,i,a),a};const x=o=>{class t extends o{constructor(){super(...arguments),this.size=b.SIZE,this.isTyping=!1}}return l([h({type:String})],t.prototype,"src"),l([h({type:String})],t.prototype,"initials"),l([h({type:String})],t.prototype,"presence"),l([h({type:Number,reflect:!0,attribute:"size"})],t.prototype,"size"),l([h({type:Number})],t.prototype,"counter"),l([h({type:Boolean,attribute:"is-typing"})],t.prototype,"isTyping"),t},N=[M,y`
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
  `],S=o=>({[e[124]]:n[124],[e[88]]:n[88],[e[72]]:n[72],[e[64]]:n[64],[e[48]]:n[48],[e[32]]:n[32],[e[24]]:n[24]})[o]||n[32],A=o=>({[e[124]]:4.75,[e[88]]:3,[e[72]]:2.5,[e[64]]:2.25,[e[48]]:1.75,[e[32]]:1.25,[e[24]]:1})[o]||1.25,k=o=>({[e[124]]:s.HEADING_XLARGE_MEDIUM,[e[88]]:s.HEADING_LARGE_MEDIUM,[e[72]]:s.HEADING_MIDSIZE_MEDIUM,[e[64]]:s.HEADING_SMALL_MEDIUM,[e[48]]:s.HEADING_SMALL_MEDIUM,[e[32]]:s.BODY_MIDSIZE_MEDIUM,[e[24]]:s.BODY_SMALL_MEDIUM})[o]||s.BODY_MIDSIZE_MEDIUM;var D=Object.defineProperty,w=(o,t,i,E)=>{for(var a=void 0,c=o.length-1,m;c>=0;c--)(m=o[c])&&(a=m(t,i,a)||a);return a&&D(t,i,a),a};const g=class g extends x(O(f)){constructor(){super(...arguments),this.isPhotoLoaded=!1}getPresenceTemplateBasedOnType(t){return t===r.COUNTER&&(this.counter||this.counter===0)||this.isTyping?p:this.presence?d`
        <mdc-presence part="presence" type="${this.presence}" size="${S(this.size)}"></mdc-presence>
      `:p}handleOnLoad(){this.isPhotoLoaded=!0}handleOnError(){this.isPhotoLoaded=!1,this.onerror&&this.onerror("There was a problem while fetching the <img/>. Please check the src attribute and try again.")}photoTemplate(){return d`
      <img
        part="photo"
        src="${v(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `}iconTemplate(){const t=this.iconName||b.ICON_NAME;return d`
      <mdc-icon name="${v(t)}" length-unit="rem" size="${A(this.size)}"></mdc-icon>
    `}textTemplate(t){return d` <mdc-text type="${k(this.size)}" tagname="span"> ${t} </mdc-text> `}generateCounterText(t){return t<0?"0":t>T?`${T}+`:t.toString()}generateInitialsText(t){return t.toUpperCase().slice(0,2)}generateTextContent(t){let i="";return t===r.TEXT&&this.initials&&(i=this.generateInitialsText(this.initials)),t===r.COUNTER&&(this.counter||this.counter===0)&&(i=this.generateCounterText(this.counter)),this.textTemplate(i)}getTypeBasedOnInputs(){return this.src?r.PHOTO:this.iconName?r.ICON:this.initials?r.TEXT:this.counter||this.counter===0?r.COUNTER:r.ICON}getTemplateBasedOnType(t){switch(t){case r.PHOTO:return this.photoTemplate();case r.TEXT:case r.COUNTER:return this.generateTextContent(t);case r.ICON:default:return this.iconTemplate()}}getLoadingContent(){return this.isTyping?d`<div part="loading-wrapper"><div part="loader"></div></div>`:p}getPhotoPlaceHolderContent(t){return this.isPhotoLoaded?p:t===r.PHOTO?this.initials?this.textTemplate(this.generateInitialsText(this.initials)):this.iconTemplate():p}update(t){super.update(t),t.has("src")&&!this.src&&(this.isPhotoLoaded=!1)}render(){const t=this.getTypeBasedOnInputs();return d`
      <div part="content" aria-hidden="true">
        ${this.getPhotoPlaceHolderContent(t)} ${this.getTemplateBasedOnType(t)} ${this.getLoadingContent()}
        ${this.getPresenceTemplateBasedOnType(t)}
      </div>
    `}};g.styles=[...f.styles,...N];let u=g;w([I()],u.prototype,"isPhotoLoaded");u.register(C);export{e as A,b as D,x as a};
