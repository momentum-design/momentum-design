import{i as p,k as u}from"./lit-element-CHllvULs.js";import{u as y,n as l,C as b}from"./index-HW6KrQZO.js";import{t as d}from"./if-defined-C4tJgJ33.js";import{h as f}from"./index-BGjwsboe.js";import{D as h}from"./DataAriaLabelMixin-vs_lw9aw.js";const A=[f,p`
    :host {
      --mdc-modalcontainer-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
      --mdc-modalcontainer-border-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-modalcontainer-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
      --mdc-modalcontainer-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
      --mdc-modalcontainer-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-modalcontainer-elevation-1: var(--mds-elevation-1);
      --mdc-modalcontainer-elevation-2: var(--mds-elevation-2);
      --mdc-modalcontainer-elevation-3: var(--mds-elevation-3);
      --mdc-modalcontainer-elevation-4: var(--mds-elevation-4);
    }

    :host::part(container) {
      padding: 0.75rem;
      background-color: var(--mdc-modalcontainer-primary-background-color);
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-modalcontainer-border-color);
    }

    :host([color='contrast'])::part(container) {
      background-color: var(--mdc-modalcontainer-inverted-background-color);
      border: 0.0625rem solid var(--mdc-modalcontainer-inverted-border-color);
      color: var(--mdc-modalcontainer-inverted-text-color);
    }

    :host([elevation='1'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-1);
    }
    :host([elevation='2'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-2);
    }
    :host([elevation='3'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-3);
    }
    :host([elevation='4'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-4);
    }
  `],L=y.constructTagName("modalcontainer"),g={TONAL:"tonal",CONTRAST:"contrast"},O={0:0,1:1,2:2,3:3,4:4},c={COLOR:g.TONAL,ELEVATION:O[0],ROLE:"dialog",ARIA_MODAL:!1,CHILDREN:"Lorem ipsum dolor sit amet"};var C=Object.defineProperty,_=(a,e,o,v)=>{for(var r=void 0,t=a.length-1,n;t>=0;t--)(n=a[t])&&(r=n(e,o,r)||r);return r&&C(e,o,r),r};const D=a=>{class e extends a{constructor(){super(...arguments),this.dataAriaDescribedby=null}}return _([l({type:String,reflect:!0,attribute:"data-aria-describedby"})],e.prototype,"dataAriaDescribedby"),e};var x=Object.defineProperty,E=(a,e,o,v)=>{for(var r=void 0,t=a.length-1,n;t>=0;t--)(n=a[t])&&(r=n(e,o,r)||r);return r&&x(e,o,r),r};const R=a=>{class e extends a{constructor(){super(...arguments),this.dataAriaLabelledby=null}}return E([l({type:String,reflect:!0,attribute:"data-aria-labelledby"})],e.prototype,"dataAriaLabelledby"),e};var k=Object.defineProperty,s=(a,e,o,v)=>{for(var r=void 0,t=a.length-1,n;t>=0;t--)(n=a[t])&&(r=n(e,o,r)||r);return r&&k(e,o,r),r};const m=class m extends h(R(D(b))){constructor(){super(...arguments),this.color=c.COLOR,this.elevation=c.ELEVATION,this.dataRole=c.ROLE,this.dataAriaModal=c.ARIA_MODAL}render(){return u`
      <div
        role="${d(this.dataRole)}"
        aria-modal=${d(this.dataAriaModal===!0?"true":void 0)}
        aria-label="${d(this.dataAriaLabel)}"
        aria-labelledby="${d(this.dataAriaLabelledby)}"
        aria-describedby="${d(this.dataAriaDescribedby)}"
        part="container"
      >
        <slot></slot>
      </div>
    `}};m.styles=[...b.styles,...A];let i=m;s([l({type:String,reflect:!0})],i.prototype,"color");s([l({type:Number,reflect:!0})],i.prototype,"elevation");s([l({type:String,reflect:!0,attribute:"data-role"})],i.prototype,"dataRole");s([l({type:Boolean,reflect:!0,attribute:"data-aria-modal"})],i.prototype,"dataAriaModal");i.register(L);export{g as C,c as D,O as E,R as a,D as b};
