import{i as E,k as b}from"./lit-element-CPYlYYac.js";import{u as k,C as p,n as h}from"./index-BLShQaRP.js";import{h as y}from"./index-BMNzSXOa.js";import"./index-CVK1BOY5.js";import{d as A}from"./utils-DCJ3yZC1.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DQf4k71i.js";import"./create-context-89xeped_.js";const L=k.constructTagName("presence"),e={ACTIVE:"active",AWAY:"away",AWAY_CALLING:"away-calling",BUSY:"busy",DND:"dnd",MEETING:"meeting",ON_CALL:"on-call",ON_DEVICE:"on-device",ON_MOBILE:"on-mobile",PAUSE:"pause",PTO:"pto",PRESENTING:"presenting",QUIET:"quiet",SCHEDULED:"scheduled"},c={XX_SMALL:"xx_small",X_SMALL:"x_small",SMALL:"small",MIDSIZE:"midsize",LARGE:"large",X_LARGE:"x_large",XX_LARGE:"xx_large"},n={TYPE:e.ACTIVE,SIZE:c.SMALL},S=[y,E`
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
  `],f=r=>{switch(r){case e.AWAY:return"recents-presence-badge-filled";case e.AWAY_CALLING:return"away-calling-presence-filled";case e.BUSY:return"busy-presence-bold";case e.DND:return"dnd-presence-badge-filled";case e.MEETING:return"camera-filled";case e.ON_CALL:return"handset-filled";case e.ON_DEVICE:return"generic-device-video-badge-filled";case e.ON_MOBILE:return"phone-badge-filled";case e.PAUSE:return"pause-badge-filled";case e.PTO:return"pto-presence-filled";case e.PRESENTING:return"share-screen-badge-filled";case e.QUIET:return"quiet-hours-presence-filled";case e.SCHEDULED:return"meetings-presence-badge-filled";case e.ACTIVE:default:return"active-presence-small-filled"}};var I=Object.defineProperty,v=(r,s,i,N)=>{for(var o=void 0,d=r.length-1,m;d>=0;d--)(m=r[d])&&(o=m(s,i,o)||o);return o&&I(s,i,o),o};const l=class l extends p{constructor(){super(...arguments),this.type=n.TYPE,this.size=n.SIZE}get iconSize(){switch(this.size){case c.MIDSIZE:return 1.16125;case c.LARGE:return 1.30625;case c.X_LARGE:return 1.596875;case c.XX_LARGE:return 2.25;case c.XX_SMALL:case c.X_SMALL:case c.SMALL:default:return this.size=n.SIZE,.875}}get icon(){const s=f(this.type);return s==="active-presence-small-filled"&&(this.type=n.TYPE),s}render(){return b`
      <div class="mdc-presence mdc-presence__${this.size}">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.type}"
          name="${this.icon}"
          size="${this.iconSize}"
        ></mdc-icon>
      </div>
    `}};l.styles=[...p.styles,...S];let a=l;v([h({type:String,reflect:!0})],a.prototype,"type");v([h({type:String,reflect:!0})],a.prototype,"size");a.register(L);const T=r=>b`
  <mdc-presence type="${r.type}" size="${r.size}"></mdc-presence>
`,X={title:"Components/presence",tags:["autodocs"],component:"mdc-presence",render:T,parameters:{badges:["stable"]},argTypes:{type:{options:Object.values(e),control:{type:"select"}},size:{options:Object.values(c),control:{type:"select"}},...A(["iconSize","icon"])}},t={args:{type:n.TYPE,size:n.SIZE}};var u,g,_;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE
  }
}`,...(_=(g=t.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const Y=["Example"];export{t as Example,Y as __namedExportsOrder,X as default};
