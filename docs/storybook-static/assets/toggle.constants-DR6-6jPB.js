import"./index-tOnQ0SVm.js";import{i as h,k as v}from"./lit-element-D5KKan5q.js";import{n as m}from"./property-Bj3TGwkg.js";import{u as n,C as s}from"./provider.component-DrWB4byV.js";import{D as p}from"./DisabledMixin-B-Cnza7-.js";const b=n.constructTagName("statictoggle"),u={DEFAULT:"default",COMPACT:"compact"},l={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},E={compact:.75,default:1.25},f={SIZE:u.DEFAULT},k=[h`
    :host {
      --mdc-statictoggle-width: 3rem;
      --mdc-statictoggle-height: 1.5rem;
      --mdc-statictoggle-width-compact: 2rem;
      --mdc-statictoggle-height-compact: 1rem;
      --mdc-statictoggle-border-radius: 0.75rem;
      --mdc-statictoggle-border-radius-compact: 0.5rem;
      --mdc-statictoggle-border: 1px solid var(--mds-color-theme-outline-input-normal);

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
      background: var(--mdc-statictoggle-inactive-rest-color);
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

    .icon {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-normal);
      background-color: var(--mdc-statictoggle-icon-background-color-normal);
      border-radius: 50%;
    }

    :host([disabled]) .icon {
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-disabled);
      background-color: var(--mdc-statictoggle-icon-background-color-disabled);
    }

    :host([size='compact']) .icon {
      padding: 0.125rem;
    }

    :host([disabled])::part(slider) {
      background-color: var(--mdc-statictoggle-inactive-disabled-color);
    }

    :host([disabled][checked])::part(slider) {
      background-color: var(--mdc-statictoggle-active-disabled-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked])::part(slider),
      .icon {
        border: var(--mdc-statictoggle-border);
      }
    }
  `];var C=Object.defineProperty,g=(r,a,i,y)=>{for(var t=void 0,c=r.length-1,d;c>=0;c--)(d=r[c])&&(t=d(a,i,t)||t);return t&&C(a,i,t),t};const e=class e extends p(s){constructor(){super(...arguments),this.checked=!1,this.size=f.SIZE}render(){return v`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked?l.CHECKED:l.UNCHECKED}"
          class="icon"
          length-unit="rem"
          size="${E[this.size]}"
        ></mdc-icon>
      </div>
    `}};e.styles=[...s.styles,...k];let o=e;g([m({type:Boolean,reflect:!0})],o.prototype,"checked");g([m({type:String,reflect:!0})],o.prototype,"size");o.register(b);const N=n.constructTagName("toggle"),A={DEFAULT:"default",COMPACT:"compact"},L={SIZE:A.DEFAULT,VALIDATION_MESSAGE:"Please toggle this switch if you want to proceed."};export{L as D,A as T,N as a};
