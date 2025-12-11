import"./index-D5LOnZrI.js";import{u as g,U as h,k as b,F as m,n as e}from"./iframe-C9zBfpfZ.js";import{D as p}from"./DisabledMixin-5uIk7xY-.js";const u=g.constructTagName("statictoggle"),v={DEFAULT:"default",COMPACT:"compact"},n={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},f={compact:.75,default:1.25},y={SIZE:v.DEFAULT},E=[h`
    :host {
      --mdc-statictoggle-width: 3rem;
      --mdc-statictoggle-height: 1.5rem;
      --mdc-statictoggle-border-radius: 0.75rem;
      --mdc-statictoggle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-statictoggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-statictoggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);

      border-radius: var(--mdc-statictoggle-border-radius);
    }

    :host::part(slider) {
      width: var(--mdc-statictoggle-width);
      height: var(--mdc-statictoggle-height);
      background-color: var(--mdc-statictoggle-background-color);
      border: 1px solid var(--mdc-statictoggle-border-color);
      border-radius: var(--mdc-statictoggle-border-radius);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: background-color 0.3s ease;
      outline: none;
      padding: 1px;
    }

    :host::part(toggle-icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color);
      background-color: var(--mdc-statictoggle-icon-background-color);
      border-radius: 50%;
    }

    :host([size='compact'])::part(slider) {
      --mdc-statictoggle-width: 2rem;
      --mdc-statictoggle-height: 1rem;
      --mdc-statictoggle-border-radius: 0.5rem;
    }

    :host([size='compact'])::part(toggle-icon) {
      padding: 0.125rem;
    }

    :host([checked]) {
      --mdc-statictoggle-border-color: transparent;
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-active-normal);
    }
    :host([checked])::part(slider) {
      justify-content: flex-end;
    }

    :host([readonly]) {
      --mdc-statictoggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-statictoggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-statictoggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-statictoggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-statictoggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-disabled);
      cursor: default;
    }

    :host([checked][disabled]),
    :host([checked][soft-disabled]) {
      --mdc-statictoggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-statictoggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-statictoggle-border-color: transparent;
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(toggle-icon) {
        --mdc-statictoggle-icon-color: CanvasText;
        border: 1px solid var(--mdc-statictoggle-border-color);
      }

      :host([checked]) {
        --mdc-statictoggle-icon-color: SelectedItemText;
        --mdc-statictoggle-border-color: SelectedItem;
        --mdc-statictoggle-background-color: SelectedItem;
      }

      :host([disabled])::part(toggle-icon),
      :host([soft-disabled])::part(toggle-icon) {
        --mdc-statictoggle-icon-color: GrayText;
        border: 1px solid GrayText;
      }
    }
  `];var k=Object.defineProperty,r=(d,s,l,C)=>{for(var o=void 0,c=d.length-1,i;c>=0;c--)(i=d[c])&&(o=i(s,l,o)||o);return o&&k(s,l,o),o};const a=class a extends p(m){constructor(){super(...arguments),this.checked=!1,this.size=y.SIZE,this.readonly=!1,this.softDisabled=!1}render(){return b`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked?n.CHECKED:n.UNCHECKED}"
          part="toggle-icon"
          length-unit="rem"
          size="${f[this.size]}"
        ></mdc-icon>
      </div>
    `}};a.styles=[...m.styles,...E];let t=a;r([e({type:Boolean,reflect:!0})],t.prototype,"checked");r([e({type:String,reflect:!0})],t.prototype,"size");r([e({type:Boolean,reflect:!0})],t.prototype,"readonly");r([e({type:Boolean,attribute:"soft-disabled",reflect:!0})],t.prototype,"softDisabled");t.register(u);const I=g.constructTagName("toggle"),x={DEFAULT:"default",COMPACT:"compact"},S={SIZE:x.DEFAULT,VALIDATION_MESSAGE:"Please toggle this switch if you want to proceed."};export{S as D,x as T,I as a};
