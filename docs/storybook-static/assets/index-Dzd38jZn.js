import{i as g,k as _}from"./lit-element-CHllvULs.js";import{u as h,C as p,n as u}from"./index-HW6KrQZO.js";import{r as b}from"./state-CWckTc1X.js";import{h as v}from"./index-BNZgxKMr.js";import"./index-BOBIh5Rr.js";const E=h.constructTagName("presence"),e={ACTIVE:"active",AWAY:"away",AWAY_CALLING:"away-calling",BUSY:"busy",DND:"dnd",MEETING:"meeting",ON_CALL:"on-call",ON_DEVICE:"on-device",ON_MOBILE:"on-mobile",PAUSE:"pause",PTO:"pto",PRESENTING:"presenting",QUIET:"quiet",SCHEDULED:"scheduled"},c={XX_SMALL:"xx_small",X_SMALL:"x_small",SMALL:"small",MIDSIZE:"midsize",LARGE:"large",X_LARGE:"x_large",XX_LARGE:"xx_large"},s={TYPE:e.ACTIVE,SIZE:c.SMALL},k=[v,g`
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
  `],y=a=>{switch(a){case e.AWAY:return"recents-presence-badge-filled";case e.AWAY_CALLING:return"away-calling-presence-filled";case e.BUSY:return"busy-presence-bold";case e.DND:return"dnd-presence-badge-filled";case e.MEETING:return"camera-filled";case e.ON_CALL:return"handset-filled";case e.ON_DEVICE:return"generic-device-video-badge-filled";case e.ON_MOBILE:return"phone-badge-filled";case e.PAUSE:return"pause-badge-filled";case e.PTO:return"pto-presence-filled";case e.PRESENTING:return"share-screen-badge-filled";case e.QUIET:return"quiet-hours-presence-filled";case e.SCHEDULED:return"meetings-presence-badge-filled";case e.ACTIVE:default:return"active-presence-small-filled"}};var L=Object.defineProperty,t=(a,n,i,A)=>{for(var r=void 0,d=a.length-1,m;d>=0;d--)(m=a[d])&&(r=m(n,i,r)||r);return r&&L(n,i,r),r};const l=class l extends p{constructor(){super(...arguments),this.type=s.TYPE,this.size=s.SIZE,this.currentIconType=s.TYPE}get iconSize(){switch(this.size){case c.MIDSIZE:return 1.16125;case c.LARGE:return 1.30625;case c.X_LARGE:return 1.596875;case c.XX_LARGE:return 2.25;case c.XX_SMALL:case c.X_SMALL:case c.SMALL:default:return this.size=s.SIZE,.875}}get icon(){const n=y(this.type);return n==="active-presence-small-filled"&&(this.type=s.TYPE),n}handleOnLoad(){this.currentIconType=this.type}handleOnError(){this.onerror&&this.onerror("There was a problem while fetching the icon. Please check the icon name and try again.")}render(){return _`
      <div class="mdc-presence mdc-presence__${this.size}">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.currentIconType}"
          name="${this.icon}"
          size="${this.iconSize}"
          @load="${this.handleOnLoad}"
          @error="${this.handleOnError}"
        ></mdc-icon>
      </div>
    `}};l.styles=[...p.styles,...k];let o=l;t([u({type:String,reflect:!0})],o.prototype,"type");t([u({type:String,reflect:!0})],o.prototype,"size");t([b()],o.prototype,"currentIconType");o.register(E);export{s as D,c as S,e as T};
