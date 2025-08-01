import{i as b,k as m}from"./lit-element-D5KKan5q.js";import{u as h,C as c,n as i}from"./provider.component-BaQC7CJH.js";import{o as p}from"./query-assigned-elements-uEuc3rg8.js";import{h as v}from"./index-B-GnYs90.js";const g=h.constructTagName("buttongroup"),f={40:40,32:32,28:28,24:24},y={HORIZONTAL:"horizontal",VERTICAL:"vertical"},z={PRIMARY:"primary",SECONDARY:"secondary"},a={SIZE:f[28],VARIANT:z.PRIMARY,ORIENTATION:y.HORIZONTAL},T=b`
  :host {
    --mdc-buttongroup-border-radius: 1.25rem;
    --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);

    border-radius: var(--mdc-buttongroup-border-radius);
    border: 1px solid var(--mdc-buttongroup-border-color);
  }

  :host([variant='primary']) {
    border: none;
    background-color: var(--mds-color-theme-outline-primary-normal);
    gap: 1px;
  }

  ::slotted(mdc-button) {
    border-radius: 0;
    border: none;
    box-sizing: content-box;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  :host([orientation='horizontal'][variant='secondary']:dir(ltr)) ::slotted(mdc-button:not(:last-child)) {
    border-right: 1px solid var(--mdc-buttongroup-divider-color);
  }
  :host([orientation='horizontal'][variant='secondary']:dir(rtl)) ::slotted(mdc-button:not(:last-child)) {
    border-left: 1px solid var(--mdc-buttongroup-divider-color);
  }
  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button:not(:last-child)) {
    border-bottom: 1px solid var(--mdc-buttongroup-divider-color);
  }

  :host([orientation='vertical']) ::slotted(mdc-button:first-child) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='vertical']) ::slotted(mdc-button:last-child) {
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([orientation='horizontal']:dir(ltr)) ::slotted(mdc-button:first-child) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(rtl)) ::slotted(mdc-button:first-child) {
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(ltr)) ::slotted(mdc-button:last-child) {
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(rtl)) ::slotted(mdc-button:last-child) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
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
`,A=[v,T];var N=Object.defineProperty,e=(s,t,l,O)=>{for(var r=void 0,d=s.length-1,u;d>=0;d--)(u=s[d])&&(r=u(t,l,r)||r);return r&&N(t,l,r),r};const n=class n extends c{constructor(){super(...arguments),this.orientation=a.ORIENTATION,this.variant=a.VARIANT,this.size=a.SIZE,this.compact=!1}handleSlotChange(){this.buttons.forEach(t=>{t.setAttribute("size",this.size.toString()),t.setAttribute("variant",this.variant)})}updated(t){super.updated(t),(t.has("size")||t.has("variant"))&&this.handleSlotChange()}render(){return m`<slot @slotchange=${this.handleSlotChange}></slot>`}};n.styles=[...c.styles,...A];let o=n;e([i({type:String,reflect:!0})],o.prototype,"orientation");e([i({type:String,reflect:!0})],o.prototype,"variant");e([i({type:Number,reflect:!0})],o.prototype,"size");e([i({type:Boolean,reflect:!0})],o.prototype,"compact");e([p({selector:"mdc-button"})],o.prototype,"buttons");o.register(g);export{z as B,y as a,f as b};
