import"./index-DTicpPWm.js";import{u as g,S as h,k as b,E as m,n as r}from"./iframe-CbEfFyyc.js";import{D as p}from"./DisabledMixin-Jpb1cGqz.js";const u=g.constructTagName("statictoggle"),v={DEFAULT:"default",COMPACT:"compact"},n={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},f={compact:.75,default:1.25},y={SIZE:v.DEFAULT},E=[h`
    :host {
      --mdc-toggle-width: 3rem;
      --mdc-toggle-height: 1.5rem;
      --mdc-toggle-border-radius: 0.75rem;
      --mdc-toggle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-toggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);

      border-radius: var(--mdc-toggle-border-radius);
    }

    :host::part(slider) {
      width: var(--mdc-toggle-width);
      height: var(--mdc-toggle-height);
      background-color: var(--mdc-toggle-background-color);
      border: 1px solid var(--mdc-toggle-border-color);
      border-radius: var(--mdc-toggle-border-radius);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: background-color 0.3s ease;
      outline: none;
      padding: 1px;
    }

    :host::part(toggle-icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-toggle-icon-color);
      background-color: var(--mdc-toggle-icon-background-color);
      border-radius: 50%;
    }

    :host([size='compact'])::part(slider) {
      --mdc-toggle-width: 2rem;
      --mdc-toggle-height: 1rem;
      --mdc-toggle-border-radius: 0.5rem;
    }

    :host([size='compact'])::part(toggle-icon) {
      padding: 0.125rem;
    }

    :host([checked]) {
      --mdc-toggle-border-color: transparent;
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-normal);
    }
    :host([checked])::part(slider) {
      justify-content: flex-end;
    }

    :host([readonly]) {
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-toggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-toggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-toggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-disabled);
      cursor: default;
    }

    :host([checked][disabled]),
    :host([checked][soft-disabled]) {
      --mdc-toggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-toggle-border-color: transparent;
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(toggle-icon) {
        --mdc-toggle-icon-color: CanvasText;
        border: 1px solid var(--mdc-toggle-border-color);
      }

      :host([checked]) {
        --mdc-toggle-icon-color: SelectedItemText;
        --mdc-toggle-border-color: SelectedItem;
        --mdc-toggle-background-color: SelectedItem;
      }

      :host([disabled])::part(toggle-icon),
      :host([soft-disabled])::part(toggle-icon) {
        --mdc-toggle-icon-color: GrayText;
        border: 1px solid GrayText;
      }
    }
  `];var k=Object.defineProperty,t=(l,a,s,C)=>{for(var e=void 0,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=i(a,s,e)||e);return e&&k(a,s,e),e};const d=class d extends p(m){constructor(){super(...arguments),this.checked=!1,this.size=y.SIZE,this.readonly=!1,this.softDisabled=!1}render(){return b`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked?n.CHECKED:n.UNCHECKED}"
          part="toggle-icon"
          length-unit="rem"
          size="${f[this.size]}"
        ></mdc-icon>
      </div>
    `}};d.styles=[...m.styles,...E];let o=d;t([r({type:Boolean,reflect:!0})],o.prototype,"checked");t([r({type:String,reflect:!0})],o.prototype,"size");t([r({type:Boolean,reflect:!0})],o.prototype,"readonly");t([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],o.prototype,"softDisabled");o.register(u);const I=g.constructTagName("toggle"),x={DEFAULT:"default",COMPACT:"compact"},S={SIZE:x.DEFAULT,VALIDATION_MESSAGE:"Please toggle this switch if you want to proceed."};export{S as D,x as T,I as a};
