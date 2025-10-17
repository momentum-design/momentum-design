import{u as l,S as m,U as p,E as b,k as h,n as d}from"./iframe-CCrWkKwY.js";import{o as v}from"./query-assigned-elements-uEuc3rg8.js";const g=l.constructTagName("buttongroup"),y={40:40,32:32,28:28,24:24},f={HORIZONTAL:"horizontal",VERTICAL:"vertical"},z={PRIMARY:"primary",SECONDARY:"secondary"},a={SIZE:y[28],VARIANT:z.PRIMARY,ORIENTATION:f.HORIZONTAL},T=m`
  :host {
    --mdc-buttongroup-border-radius: 1.25rem;
    --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-buttongroup-border-width: 1px;
  }

  :host::part(container) {
    display: flex;
    border-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([variant='primary'])::part(container) {
    gap: 1px;
    border: none;
    background-color: var(--mds-color-theme-outline-primary-normal);
  }

  ::slotted(mdc-button) {
    width: inherit;
    border-radius: 0;
    border: none;
    box-sizing: border-box;
    position: relative;
  }
  :host([orientation='horizontal'][variant='secondary']) ::slotted(mdc-button) {
    border-block-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
    border-block-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='horizontal'][variant='secondary']) ::slotted(mdc-button:first-of-type) {
    border-inline-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='horizontal'][variant='secondary']) ::slotted(mdc-button:last-of-type) {
    border-inline-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }

  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button) {
    border-inline-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
    border-inline-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button:first-of-type) {
    border-block-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button:last-of-type) {
    border-block-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }

  :host([orientation='vertical'])::part(container) {
    flex-direction: column;
  }

  :host([variant='secondary'][orientation='horizontal']) ::slotted(mdc-button:not(:last-of-type))::after {
    content: '';
    position: absolute;
    height: 100%;
    border-inline-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-divider-color);
    inset-inline-end: calc(var(--mdc-buttongroup-border-width) / 2);
  }
  :host([variant='secondary'][orientation='vertical']) ::slotted(mdc-button:not(:last-of-type))::after {
    content: '';
    position: absolute;
    width: 100%;
    border-block-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-divider-color);
    inset-block-end: calc(var(--mdc-buttongroup-border-width) / 2);
  }

  :host([orientation='vertical']) ::slotted(mdc-button:first-of-type) {
    border-start-start-radius: var(--mdc-buttongroup-border-radius);
    border-start-end-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='vertical']) ::slotted(mdc-button:last-of-type) {
    border-end-start-radius: var(--mdc-buttongroup-border-radius);
    border-end-end-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([orientation='horizontal']) ::slotted(mdc-button:first-of-type) {
    border-start-start-radius: var(--mdc-buttongroup-border-radius);
    border-end-start-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']) ::slotted(mdc-button:last-of-type) {
    border-start-end-radius: var(--mdc-buttongroup-border-radius);
    border-end-end-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([compact][orientation='horizontal']) ::slotted(mdc-button) {
    height: 1.5rem;
  }
  :host([compact][orientation='horizontal'][size='24']) ::slotted(mdc-button) {
    width: 1.5rem;
  }
  :host([compact][orientation='horizontal'][size='28']) ::slotted(mdc-button) {
    width: 1.75rem;
  }
  :host([compact][orientation='horizontal'][size='32']) ::slotted(mdc-button) {
    width: 2rem;
  }
  :host([compact][orientation='horizontal'][size='40']) ::slotted(mdc-button) {
    width: 2.5rem;
  }
`,A=[p,T];var w=Object.defineProperty,e=(s,t,c,N)=>{for(var r=void 0,n=s.length-1,u;n>=0;n--)(u=s[n])&&(r=u(t,c,r)||r);return r&&w(t,c,r),r};const i=class i extends b{constructor(){super(...arguments),this.orientation=a.ORIENTATION,this.variant=a.VARIANT,this.size=a.SIZE,this.compact=!1}handleSlotChange(){this.buttons.forEach(t=>{t.setAttribute("size",this.size.toString()),t.setAttribute("variant",this.variant)})}updated(t){super.updated(t),(t.has("size")||t.has("variant"))&&this.handleSlotChange()}render(){return h`<div part="container"><slot @slotchange=${this.handleSlotChange}></slot></div>`}};i.styles=[...b.styles,...A];let o=i;e([d({type:String,reflect:!0})],o.prototype,"orientation");e([d({type:String,reflect:!0})],o.prototype,"variant");e([d({type:Number,reflect:!0})],o.prototype,"size");e([d({type:Boolean,reflect:!0})],o.prototype,"compact");e([v({selector:"mdc-button"})],o.prototype,"buttons");o.register(g);export{z as B,f as a,y as b};
