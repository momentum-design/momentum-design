import{u as b,T as u,V as g,S as v,a6 as k,k as r,v as s,C as i,n as h}from"./iframe-Ckh9e4At.js";import{I as T}from"./IconNameMixin-BhKPZr7y.js";const y=b.constructTagName("staticchip"),f={DEFAULT:"default",COBALT:"cobalt",GOLD:"gold",LIME:"lime",MINT:"mint",ORANGE:"orange",PINK:"pink",PURPLE:"purple",SLATE:"slate",VIOLET:"violet"},c={COLOR:f.DEFAULT,TEXT_TYPE:u.BODY_MIDSIZE_REGULAR,TAG_NAME:g.SPAN},E=v`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    white-space: nowrap;

    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-chip-color);
    border-color: var(--mdc-chip-border-color);
    background-color: var(--mdc-chip-background-color);
  }

  :host::part(icon) {
    flex-shrink: 0;
  }

  ::slotted([slot='prefix']) {
    flex-shrink: 0;
  }

  ::slotted(mdc-avatar[slot='prefix']) {
    width: 1.25rem;
    height: 1.25rem;
    overflow: hidden;
  }

  :host::part(label) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  :host([color='cobalt']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-normal);
  }

  :host([color='gold']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-gold);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-normal);
  }

  :host([color='lime']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-lime);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-normal);
  }

  :host([color='mint']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-mint);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-normal);
  }

  :host([color='pink']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-pink);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-normal);
  }

  :host([color='purple']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-purple);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-normal);
  }

  :host([color='orange']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-orange);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-normal);
  }

  :host([color='slate']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-slate);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-normal);
  }

  :host([color='violet']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-violet);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-normal);
  }
`,A=[k,E];var x=Object.defineProperty,p=(a,m,d,L)=>{for(var o=void 0,l=a.length-1,n;l>=0;l--)(n=a[l])&&(o=n(m,d,o)||o);return o&&x(m,d,o),o};const t=class t extends T(i){constructor(){super(...arguments),this.color=c.COLOR}renderPrefix(){return r`
      <slot name="prefix">
        ${this.iconName?r`<mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon>`:s}
      </slot>
    `}render(){return r`
      ${this.renderPrefix()}
      ${this.label?r`<mdc-text part="label" type="${c.TEXT_TYPE}" tagname="${c.TAG_NAME}"
            >${this.label}</mdc-text
          >`:s}
    `}};t.styles=[...i.styles,...A];let e=t;p([h({type:String,reflect:!0})],e.prototype,"color");p([h({type:String})],e.prototype,"label");export{f as C,e as S,y as T};
