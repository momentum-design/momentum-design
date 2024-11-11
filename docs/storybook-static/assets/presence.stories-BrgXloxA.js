import{i as y,k as g}from"./lit-element-CPYlYYac.js";import{u as k,C as i,n as _}from"./index-BLShQaRP.js";import{h as E}from"./index-DOMSj5Ok.js";import"./index-C0WGh0MV.js";import{d as f}from"./utils-DCJ3yZC1.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DlI5gUhJ.js";import"./create-context-89xeped_.js";const S=k.constructTagName("presence"),b={ACTIVE:"active",AWAY:"away",AWAY_CALLING:"away-calling",BUSY:"busy",DND:"dnd",MEETING:"meeting",ON_CALL:"on-call",ON_DEVICE:"on-device",ON_MOBILE:"on-mobile",PAUSE:"pause",PTO:"pto",PRESENTING:"presenting",QUIET:"quiet",SCHEDULED:"scheduled"},h={XX_SMALL:"xx_small",X_SMALL:"x_small",SMALL:"small",MIDSIZE:"midsize",LARGE:"large",X_LARGE:"x_large",XX_LARGE:"xx_large"},c={TYPE:b.ACTIVE,SIZE:h.SMALL},x=[E,y`
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
  `];var A=Object.defineProperty,v=(r,d,t,w)=>{for(var e=void 0,s=r.length-1,l;s>=0;s--)(l=r[s])&&(e=l(d,t,e)||e);return e&&A(d,t,e),e};const a=class a extends i{constructor(){super(...arguments),this.type=c.TYPE,this.size=c.SIZE}get iconSize(){switch(this.size){case"midsize":return 1.16125;case"large":return 1.30625;case"x_large":return 1.596875;case"xx_large":return 2.25;case"xx_small":case"x_small":case"small":default:return this.size=c.SIZE,.875}}get icon(){switch(this.type){case"away":return"recents-presence-badge-filled";case"away-calling":return"away-calling-presence-filled";case"busy":return"busy-presence-bold";case"dnd":return"dnd-presence-badge-filled";case"meeting":return"camera-filled";case"on-call":return"handset-filled";case"on-device":return"generic-device-video-badge-filled";case"on-mobile":return"phone-badge-filled";case"pause":return"pause-badge-filled";case"pto":return"pto-presence-filled";case"presenting":return"share-screen-badge-filled";case"quiet":return"quiet-hours-presence-filled";case"scheduled":return"meetings-presence-badge-filled";case"active":default:return this.type=c.TYPE,"active-presence-small-filled"}}render(){return g`
      <div class="mdc-presence mdc-presence__${this.size}">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.type}"
          name="${this.icon}"
          size="${this.iconSize}"
        ></mdc-icon>
      </div>
    `}};a.styles=[...i.styles,...x];let o=a;v([_({type:String,reflect:!0})],o.prototype,"type");v([_({type:String,reflect:!0})],o.prototype,"size");o.register(S);const L=r=>g`
  <mdc-presence type="${r.type}" size="${r.size}"></mdc-presence>
`,M={title:"Work In Progress/presence",tags:["autodocs"],component:"mdc-presence",render:L,parameters:{badges:["wip"]},argTypes:{type:{options:Object.values(b),control:{type:"select"}},size:{options:Object.values(h),control:{type:"select"}},...f(["iconSize","icon"])}},n={args:{type:c.TYPE,size:c.SIZE}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const G=["Primary"];export{n as Primary,G as __namedExportsOrder,M as default};
