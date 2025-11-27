import{u as h,U as g,S as b,E as m,k as v,$ as E,n as u}from"./iframe-DHOQtyml.js";import"./index-CTR5va3i.js";const _=h.constructTagName("presence"),e={ACTIVE:"active",AWAY:"away",AWAY_CALLING:"away-calling",BUSY:"busy",DND:"dnd",MEETING:"meeting",ON_CALL:"on-call",ON_DEVICE:"on-device",ON_MOBILE:"on-mobile",PAUSE:"pause",PTO:"pto",PRESENTING:"presenting",QUIET:"quiet",SCHEDULED:"scheduled"},c={24:24,32:32,48:48,64:64,72:72,88:88,124:124},s={TYPE:e.ACTIVE,SIZE:c[32]},k=[g,b`
    :host {
      --mdc-presence-active-background-color: var(--mds-color-theme-indicator-stable);
      --mdc-presence-away-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-away-calling-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-busy-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-dnd-background-color: var(--mds-color-theme-indicator-attention);
      --mdc-presence-meeting-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-on-call-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-on-device-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-on-mobile-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-pause-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-pto-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-presenting-background-color: var(--mds-color-theme-indicator-attention);
      --mdc-presence-quiet-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-scheduled-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);
    }

    :host::part(presence-content) {
      border-radius: 50%;
      background-color: var(--mdc-presence-overlay-background-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :host([size='24'])::part(presence-content),
    :host([size='32'])::part(presence-content),
    :host([size='48'])::part(presence-content) {
      width: 1.125rem;
      height: 1.125rem;
    }
    :host([size='64'])::part(presence-content) {
      width: 1.5625rem;
      height: 1.5625rem;
    }
    :host([size='72'])::part(presence-content) {
      width: 1.75rem;
      height: 1.75rem;
    }
    :host([size='88'])::part(presence-content) {
      width: 2.125rem;
      height: 2.125rem;
    }
    :host([size='124'])::part(presence-content) {
      width: 2.75rem;
      height: 2.75rem;
    }

    :host::part(mdc-presence-icon) {
      border-radius: 50%;
    }
    :host::part(mdc-presence-icon__active) {
      color: var(--mdc-presence-active-background-color);
    }
    :host::part(mdc-presence-icon__away) {
      color: var(--mdc-presence-away-background-color);
    }
    :host::part(mdc-presence-icon__away-calling) {
      color: var(--mdc-presence-away-calling-background-color);
    }
    :host::part(mdc-presence-icon__busy) {
      color: var(--mdc-presence-busy-background-color);
    }
    :host::part(mdc-presence-icon__dnd) {
      color: var(--mdc-presence-dnd-background-color);
    }
    :host::part(mdc-presence-icon__meeting) {
      color: var(--mdc-presence-meeting-background-color);
    }
    :host::part(mdc-presence-icon__on-call) {
      color: var(--mdc-presence-on-call-background-color);
    }
    :host::part(mdc-presence-icon__on-device) {
      color: var(--mdc-presence-on-device-background-color);
    }
    :host::part(mdc-presence-icon__on-mobile) {
      color: var(--mdc-presence-on-mobile-background-color);
    }
    :host::part(mdc-presence-icon__pause) {
      color: var(--mdc-presence-pause-background-color);
    }
    :host::part(mdc-presence-icon__pto) {
      color: var(--mdc-presence-pto-background-color);
    }
    :host::part(mdc-presence-icon__presenting) {
      color: var(--mdc-presence-presenting-background-color);
    }
    :host::part(mdc-presence-icon__quiet) {
      color: var(--mdc-presence-quiet-background-color);
    }
    :host::part(mdc-presence-icon__scheduled) {
      color: var(--mdc-presence-scheduled-background-color);
    }
  `],y=o=>{switch(o){case e.AWAY:return"recents-presence-badge-filled";case e.AWAY_CALLING:return"away-calling-presence-filled";case e.BUSY:return"busy-presence-bold";case e.DND:return"dnd-presence-badge-filled";case e.MEETING:return"camera-filled";case e.ON_CALL:return"handset-filled";case e.ON_DEVICE:return"generic-device-video-badge-filled";case e.ON_MOBILE:return"phone-badge-filled";case e.PAUSE:return"pause-badge-filled";case e.PTO:return"pto-presence-filled";case e.PRESENTING:return"share-screen-badge-filled";case e.QUIET:return"quiet-hours-presence-filled";case e.SCHEDULED:return"meetings-presence-badge-filled";case e.ACTIVE:default:return"active-presence-small-filled"}},f=o=>({[c[124]]:2.25,[c[88]]:1.625,[c[72]]:1.3125,[c[64]]:1.1875,[c[48]]:.875,[c[32]]:.875,[c[24]]:.875})[o]||.875;var I=Object.defineProperty,d=(o,r,l,S)=>{for(var n=void 0,a=o.length-1,p;a>=0;a--)(p=o[a])&&(n=p(r,l,n)||n);return n&&I(r,l,n),n};const i=class i extends m{constructor(){super(...arguments),this.type=s.TYPE,this.size=s.SIZE,this.currentIconType=s.TYPE}update(r){super.update(r),r.has("size")&&this.setSize(this.size)}setSize(r){this.setAttribute("size",Object.values(c).includes(r)?`${r}`:s.SIZE.toString())}get icon(){const r=y(this.type);return r==="active-presence-small-filled"&&(this.type=s.TYPE),r}handleOnLoad(){this.currentIconType=this.type}handleOnError(){this.onerror&&this.onerror("There was a problem while fetching the icon. Please check the icon name and try again.")}render(){return v`
      <div part="presence-content">
        <mdc-icon
          part="mdc-presence-icon mdc-presence-icon__${this.currentIconType}"
          name="${this.icon}"
          size="${f(this.size)}"
          @load="${this.handleOnLoad}"
          @error="${this.handleOnError}"
        ></mdc-icon>
      </div>
    `}};i.styles=[...m.styles,...k];let t=i;d([u({type:String,reflect:!0})],t.prototype,"type");d([u({type:Number,reflect:!0})],t.prototype,"size");d([E()],t.prototype,"currentIconType");t.register(_);export{s as D,e as P,c as a};
