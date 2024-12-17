import{i as g,k as _}from"./lit-element-CHllvULs.js";import{u as b,C as m,n as p}from"./index-HW6KrQZO.js";import{h}from"./index-CcvxQn6k.js";import"./index-BnGanu3N.js";const v=b.constructTagName("presence"),e={ACTIVE:"active",AWAY:"away",AWAY_CALLING:"away-calling",BUSY:"busy",DND:"dnd",MEETING:"meeting",ON_CALL:"on-call",ON_DEVICE:"on-device",ON_MOBILE:"on-mobile",PAUSE:"pause",PTO:"pto",PRESENTING:"presenting",QUIET:"quiet",SCHEDULED:"scheduled"},c={XX_SMALL:"xx_small",X_SMALL:"x_small",SMALL:"small",MIDSIZE:"midsize",LARGE:"large",X_LARGE:"x_large",XX_LARGE:"xx_large"},a={TYPE:e.ACTIVE,SIZE:c.SMALL},E=[h,g`
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

    .mdc-presence {
      border-radius: 50%;
      background-color: var(--mdc-presence-overlay-background-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mdc-presence__xx_small,
    .mdc-presence__x_small,
    .mdc-presence__small {
      width: 1.0625rem;
      height: 1.0625rem;
    }
    .mdc-presence__midsize {
      width: 1.419375rem;
      height: 1.419375rem;
    }
    .mdc-presence__large {
      width: 1.596875rem;
      height: 1.596875rem;
    }
    .mdc-presence__x_large {
      width: 1.951875rem;
      height: 1.951875rem;
    }
    .mdc-presence__xx_large {
      width: 2.75rem;
      height: 2.75rem;
    }

    .mdc-presence-icon {
      border-radius: 50%;
    }
    .mdc-presence-icon__active {
      color: var(--mdc-presence-active-background-color);
    }
    .mdc-presence-icon__away {
      color: var(--mdc-presence-away-background-color);
    }
    .mdc-presence-icon__away-calling {
      color: var(--mdc-presence-away-calling-background-color);
    }
    .mdc-presence-icon__busy {
      color: var(--mdc-presence-busy-background-color);
    }
    .mdc-presence-icon__dnd {
      color: var(--mdc-presence-dnd-background-color);
    }
    .mdc-presence-icon__meeting {
      color: var(--mdc-presence-meeting-background-color);
    }
    .mdc-presence-icon__on-call {
      color: var(--mdc-presence-on-call-background-color);
    }
    .mdc-presence-icon__on-device {
      color: var(--mdc-presence-on-device-background-color);
    }
    .mdc-presence-icon__on-mobile {
      color: var(--mdc-presence-on-mobile-background-color);
    }
    .mdc-presence-icon__pause {
      color: var(--mdc-presence-pause-background-color);
    }
    .mdc-presence-icon__pto {
      color: var(--mdc-presence-pto-background-color);
    }
    .mdc-presence-icon__presenting {
      color: var(--mdc-presence-presenting-background-color);
    }
    .mdc-presence-icon__quiet {
      color: var(--mdc-presence-quiet-background-color);
    }
    .mdc-presence-icon__scheduled {
      color: var(--mdc-presence-scheduled-background-color);
    }
  `],k=s=>{switch(s){case e.AWAY:return"recents-presence-badge-filled";case e.AWAY_CALLING:return"away-calling-presence-filled";case e.BUSY:return"busy-presence-bold";case e.DND:return"dnd-presence-badge-filled";case e.MEETING:return"camera-filled";case e.ON_CALL:return"handset-filled";case e.ON_DEVICE:return"generic-device-video-badge-filled";case e.ON_MOBILE:return"phone-badge-filled";case e.PAUSE:return"pause-badge-filled";case e.PTO:return"pto-presence-filled";case e.PRESENTING:return"share-screen-badge-filled";case e.QUIET:return"quiet-hours-presence-filled";case e.SCHEDULED:return"meetings-presence-badge-filled";case e.ACTIVE:default:return"active-presence-small-filled"}};var A=Object.defineProperty,u=(s,o,l,L)=>{for(var r=void 0,d=s.length-1,i;d>=0;d--)(i=s[d])&&(r=i(o,l,r)||r);return r&&A(o,l,r),r};const t=class t extends m{constructor(){super(...arguments),this.type=a.TYPE,this.size=a.SIZE}get iconSize(){switch(this.size){case c.MIDSIZE:return 1.16125;case c.LARGE:return 1.30625;case c.X_LARGE:return 1.596875;case c.XX_LARGE:return 2.25;case c.XX_SMALL:case c.X_SMALL:case c.SMALL:default:return this.size=a.SIZE,.875}}get icon(){const o=k(this.type);return o==="active-presence-small-filled"&&(this.type=a.TYPE),o}render(){return _`
      <div class="mdc-presence mdc-presence__${this.size}">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.type}"
          name="${this.icon}"
          size="${this.iconSize}"
        ></mdc-icon>
      </div>
    `}};t.styles=[...m.styles,...E];let n=t;u([p({type:String,reflect:!0})],n.prototype,"type");u([p({type:String,reflect:!0})],n.prototype,"size");n.register(v);export{a as D,c as S,e as T};
