import{i as b,k as u}from"./lit-element-CHllvULs.js";import{u as p,n}from"./index-HW6KrQZO.js";import{t as a}from"./if-defined-C4tJgJ33.js";import{a as _,h as f}from"./index-CEbgplXA.js";import"./index-D10qisB1.js";import{N as k,V as x,D as y}from"./ValueMixin-DFWGhyGn.js";import{D as E,F as s}from"./formfieldwrapper.component-BuhNSbbS.js";import"./index-DUaaHH_4.js";const C=[_,b`
  :host {
    --mdc-toggle-width: 3rem;
    --mdc-toggle-height: 1.5rem;
    --mdc-toggle-width-compact: 2rem;
    --mdc-toggle-height-compact: 1rem;
    --mdc-toggle-border-radius: 0.75rem;
    --mdc-toggle-border-radius-compact: 0.5rem;
    --mdc-toggle-border: 0.0625rem solid var(--mds-color-theme-outline-input-normal);

    --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
    --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-toggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-normal);
    --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-toggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

    --mdc-toggle-label-lineheight: var(--mds-font-lineheight-body-midsize);
    --mdc-toggle-label-fontsize: var(--mds-font-size-body-midsize);
    --mdc-toggle-label-fontweight: 400;
    --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);

    --mdc-toggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
    --mdc-toggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
    --mdc-toggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
    --mdc-toggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    column-gap: 0.75rem;
    row-gap: 0.25rem;
  }

  :host([help-text='']) {
    row-gap: 0rem;
  }

  .mdc-toggle__container {
    position: relative;
    border-radius: var(--mdc-toggle-border-radius);
  }

  .mdc-toggle__input {
    opacity: 0;
    position: absolute;
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
    cursor: pointer;
  }

  .mdc-toggle__slider {
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
    background: var(--mdc-toggle-inactive-rest-color);
    border-radius: var(--mdc-toggle-border-radius);
    border: var(--mdc-toggle-border);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: background-color 0.3s ease;
    outline: none;
    padding: 0.0625rem;
  }

  :host([checked]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-rest-color);
    justify-content: flex-end;
    border-color: transparent;
  }

  :host([size='compact']) .mdc-toggle__slider {
    width: var(--mdc-toggle-width-compact);
    height: var(--mdc-toggle-height-compact);
    border-radius: var(--mdc-toggle-border-radius-compact);
  }
  
  .mdc-toggle__icon {
    padding: 0.25rem;
   --mdc-icon-fill-color: var(--mdc-toggle-icon-color-normal);
   background-color: var(--mdc-toggle-icon-background-color-normal);
   border-radius: 50%;
  }

  :host([disabled]) .mdc-toggle__icon {
    --mdc-icon-fill-color: var(--mdc-toggle-icon-color-disabled);
  }

  :host([size='compact']) .mdc-toggle__icon {
    padding: 0.125rem;
  }

  :host(:not([disabled])) .mdc-toggle__container:hover .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-hover-color);
  }

  :host(:not([disabled])) .mdc-toggle__container:active .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-pressed-color);
  }

  :host(:not([disabled])[checked]) .mdc-toggle__container:hover .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-hover-color);
  }

  :host(:not([disabled])[checked]) .mdc-toggle__container:active .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-pressed-color);
  }

  :host([disabled]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-disabled-color);
  }

  :host([disabled][checked]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-disabled-color);
  }

  :host([disabled]) .mdc-toggle__icon {
    background-color: var(--mdc-toggle-icon-background-color-disabled);
  }

  .mdc-label-text, .mdc-help-text {
    font-size: var(--mdc-toggle-label-fontsize);
    font-weight: var(--mdc-toggle-label-fontweight);
    line-height: var(--mdc-toggle-label-lineheight);
    grid-column: 2;
  }

  .mdc-help-text {
    color: var(--mdc-toggle-help-text-color);
  }

  :host([disabled]) .mdc-label-text, :host([disabled]) .mdc-help-text {
    color: var(--mdc-toggle-label-color-disabled);
  }

   /* High Contrast Mode */
   @media (forced-colors: active) {
    :host([checked]) .mdc-toggle__slider, .mdc-toggle__icon {
      border: var(--mdc-toggle-border);
    }
  }
`,...f(!0)],w=p.constructTagName("toggle"),h={DEFAULT:"default",COMPACT:"compact"},g={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},z={compact:.75,default:1.25},m={SIZE:h.DEFAULT};var S=Object.defineProperty,v=(d,e,r,$)=>{for(var o=void 0,l=d.length-1,i;l>=0;l--)(i=d[l])&&(o=i(e,r,o)||o);return o&&S(e,r,o),o};const c=class c extends k(x(y(s))){constructor(){super(),this.checked=!1,this.size=m.SIZE,this.internals=this.attachInternals(),this.helpTextType=void 0}get form(){return this.internals.form}setFormValue(){let e=null;this.checked&&(e=this.value?this.value:"isActive"),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleChange(e){this.toggleState();const r=e.constructor;this.dispatchEvent(new r(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(h).includes(e)?e:m.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return u`
        <div class="mdc-toggle__container mdc-focus-ring">
          <input
            id="${this.id}"
            type="checkbox"
            class="mdc-toggle__input"
            role="switch"
            name="${a(this.name)}"
            value="${a(this.value)}"
            .checked="${this.checked}"
            .disabled="${this.disabled}"
            aria-describedby="${E.HELPER_TEXT_ID}"
            aria-label="${this.dataAriaLabel??""}"
            tabindex="${this.disabled?-1:0}"
            @change="${this.handleChange}"
          />
          <div class="mdc-toggle__slider">
            <mdc-icon
              name="${this.checked?g.CHECKED:g.UNCHECKED}"
              class="mdc-toggle__icon"
              length-unit="rem"
              size="${z[this.size]}"
            ></mdc-icon>
          </div>
        </div>
        ${this.renderLabel()}
        ${this.renderHelperText()}
    `}};c.formAssociated=!0,c.styles=[...s.styles,...C];let t=c;v([n({type:Boolean,reflect:!0})],t.prototype,"checked");v([n({type:String,reflect:!0})],t.prototype,"size");t.register(w);export{m as D,h as T};
