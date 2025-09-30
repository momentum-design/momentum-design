import"./index-IIsCSytv.js";import{u as m,i as h,k as p,C as s,n}from"./iframe-D-08lnMy.js";import{D as v}from"./DisabledMixin-DXbj9uc5.js";const b=m.constructTagName("statictoggle"),u={DEFAULT:"default",COMPACT:"compact"},l={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},E={compact:.75,default:1.25},f={SIZE:u.DEFAULT},k=[h`
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

    :host::part(toggle-icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-normal);
      background-color: var(--mdc-statictoggle-icon-background-color-normal);
      border-radius: 50%;
    }

    :host([disabled])::part(toggle-icon) {
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-disabled);
      background-color: var(--mdc-statictoggle-icon-background-color-disabled);
    }

    :host([size='compact'])::part(toggle-icon) {
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
      :host::part(toggle-icon) {
        border: var(--mdc-statictoggle-border);
      }
      :host::part(toggle-icon) {
        --mdc-icon-fill-color: CanvasText;
      }
    }
  `];var C=Object.defineProperty,g=(r,a,i,y)=>{for(var t=void 0,c=r.length-1,d;c>=0;c--)(d=r[c])&&(t=d(a,i,t)||t);return t&&C(a,i,t),t};const e=class e extends v(s){constructor(){super(...arguments),this.checked=!1,this.size=f.SIZE}render(){return p`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked?l.CHECKED:l.UNCHECKED}"
          part="toggle-icon"
          length-unit="rem"
          size="${E[this.size]}"
        ></mdc-icon>
      </div>
    `}};e.styles=[...s.styles,...k];let o=e;g([n({type:Boolean,reflect:!0})],o.prototype,"checked");g([n({type:String,reflect:!0})],o.prototype,"size");o.register(b);const _=m.constructTagName("toggle"),A={DEFAULT:"default",COMPACT:"compact"},I={SIZE:A.DEFAULT,VALIDATION_MESSAGE:"Please toggle this switch if you want to proceed."};export{I as D,A as T,_ as a};
