import"./index-Ct2p2VFv.js";import{u as m,S as h,k as p,E as n,n as e}from"./iframe-D1RECH4Q.js";import{D as b}from"./DisabledMixin-RRbrXdWt.js";const v=m.constructTagName("statictoggle"),u={DEFAULT:"default",COMPACT:"compact"},g={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},f={compact:.75,default:1.25},y={SIZE:u.DEFAULT},E=[h`
    :host {
      --mdc-statictoggle-width: 3rem;
      --mdc-statictoggle-height: 1.5rem;
      --mdc-statictoggle-width-compact: 2rem;
      --mdc-statictoggle-height-compact: 1rem;
      --mdc-statictoggle-border-radius: 0.75rem;
      --mdc-statictoggle-border-radius-compact: 0.5rem;
      --mdc-statictoggle-border: 1px solid var(--mds-color-theme-outline-input-normal);
      --mdc-statictoggle-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);

      --mdc-statictoggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-statictoggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-statictoggle-active-rest-color: var(--mds-color-theme-control-active-normal);
      --mdc-statictoggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

      --mdc-statictoggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-statictoggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-statictoggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
      --mdc-statictoggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);

      border-radius: var(--mdc-statictoggle-border-radius);
    }

    :host::part(slider) {
      width: var(--mdc-statictoggle-width);
      height: var(--mdc-statictoggle-height);
      background-color: var(--mdc-statictoggle-inactive-rest-color);
      border-radius: var(--mdc-statictoggle-border-radius);
      border: var(--mdc-statictoggle-border);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: background-color 0.3s ease;
      outline: none;
      padding: 1px;
    }

    :host([checked])::part(slider) {
      background-color: var(--mdc-statictoggle-active-rest-color);
      justify-content: flex-end;
      border-color: transparent;
    }

    :host([size='compact'])::part(slider) {
      width: var(--mdc-statictoggle-width-compact);
      height: var(--mdc-statictoggle-height-compact);
      border-radius: var(--mdc-statictoggle-border-radius-compact);
    }

    :host::part(toggle-icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-normal);
      background-color: var(--mdc-statictoggle-icon-background-color-normal);
      border-radius: 50%;
    }

    :host([disabled])::part(toggle-icon),
    :host([soft-disabled])::part(toggle-icon),
    :host([disabled][readonly])::part(toggle-icon),
    :host([soft-disabled][readonly])::part(toggle-icon) {
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-disabled);
      background-color: var(--mdc-statictoggle-icon-background-color-disabled);
    }

    :host([size='compact'])::part(toggle-icon) {
      padding: 0.125rem;
    }

    :host([disabled])::part(slider),
    :host([soft-disabled])::part(slider),
    :host([readonly])::part(slider) {
      background-color: var(--mdc-statictoggle-inactive-disabled-color);
      border-color: var(--mdc-statictoggle-disabled-border-color);
    }

    :host([disabled][checked])::part(slider),
    :host([soft-disabled][checked])::part(slider),
    :host([disabled][readonly][checked])::part(slider),
    :host([soft-disabled][readonly][checked])::part(slider) {
      background-color: var(--mdc-statictoggle-active-disabled-color);
      border-color: transparent;
    }

    :host([readonly])::part(toggle-icon) {
      background-color: var(--mdc-statictoggle-icon-background-color-normal);
    }

    :host([disabled][readonly])::part(slider),
    :host([soft-disabled][readonly])::part(slider) {
      background-color: var(--mdc-statictoggle-inactive-disabled-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked])::part(slider),
      :host::part(toggle-icon) {
        border: var(--mdc-statictoggle-border);
      }
      :host::part(toggle-icon) {
        --mdc-icon-fill-color: CanvasText;
      }
    }
  `];var k=Object.defineProperty,r=(d,s,i,A)=>{for(var o=void 0,c=d.length-1,l;c>=0;c--)(l=d[c])&&(o=l(s,i,o)||o);return o&&k(s,i,o),o};const a=class a extends b(n){constructor(){super(...arguments),this.checked=!1,this.size=y.SIZE,this.readonly=!1,this.softDisabled=!1}render(){return p`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked?g.CHECKED:g.UNCHECKED}"
          part="toggle-icon"
          length-unit="rem"
          size="${f[this.size]}"
        ></mdc-icon>
      </div>
    `}};a.styles=[...n.styles,...E];let t=a;r([e({type:Boolean,reflect:!0})],t.prototype,"checked");r([e({type:String,reflect:!0})],t.prototype,"size");r([e({type:Boolean,reflect:!0})],t.prototype,"readonly");r([e({type:Boolean,attribute:"soft-disabled",reflect:!0})],t.prototype,"softDisabled");t.register(v);const _=m.constructTagName("toggle"),C={DEFAULT:"default",COMPACT:"compact"},I={SIZE:C.DEFAULT,VALIDATION_MESSAGE:"Please toggle this switch if you want to proceed."};export{I as D,C as T,_ as a};
