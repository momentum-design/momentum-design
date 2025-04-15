import{i as u,k as b}from"./lit-element-D5KKan5q.js";import{u as p,n as i}from"./index-C9z9WAEj.js";import{t as l}from"./if-defined-D5BV9-c0.js";import{a as _,h as f}from"./index-MA1r3zrt.js";import"./index-BlB90ogi.js";import{D as k,F as m}from"./formfieldwrapper.component-DNKMXI01.js";import{D as y}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as E}from"./FormInternalsMixin-CSixOKbK.js";import"./index-KFAscD-t.js";const x=[_,u`
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
  }

  :host([label]), :host([help-text]){
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    column-gap: 0.75rem;
    row-gap: 0.25rem;
  }

  :host([help-text='']) {
    grid-template-rows: auto;
    row-gap: 0rem;
  }

  .mdc-toggle__container {
    position: relative;
    border-radius: var(--mdc-toggle-border-radius);
  }

  .mdc-toggle__input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    margin: 0;
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
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
  :host([size='compact']) .mdc-toggle__input {
    width: var(--mdc-toggle-width-compact);
    height: var(--mdc-toggle-height-compact);
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
`,...f(!0)],w=p.constructTagName("toggle"),v={DEFAULT:"default",COMPACT:"compact"},n={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},C={compact:.75,default:1.25},h={SIZE:v.DEFAULT,VALIDATION_MESSAGE:"Please toggle this switch if you want to proceed."};var S=Object.defineProperty,d=(s,e,t,$)=>{for(var o=void 0,r=s.length-1,g;r>=0;r--)(g=s[r])&&(o=g(e,t,o)||o);return o&&S(e,t,o),o};const a=class a extends E(y(m)){constructor(){super(...arguments),this.checked=!1,this.size=h.SIZE,this.autofocus=!1}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleKeyDown(e){var t;e.key==="Enter"&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(v).includes(e)?e:h.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return b`
        <div class="mdc-toggle__container mdc-focus-ring">
          <input
            id="${this.id}"
            type="checkbox"
            class="mdc-toggle__input"
            role="switch"
            ?autofocus="${this.autofocus}"
            ?required="${!!this.requiredLabel}"
            name="${l(this.name)}"
            value="${l(this.value)}"
            .checked="${this.checked}"
            aria-checked="${this.checked}"
            .disabled="${this.disabled}"
            aria-describedby="${l(this.helpText?k.HELPER_TEXT_ID:"")}"
            aria-label="${this.dataAriaLabel??""}"
            tabindex="${this.disabled?-1:0}"
            @change="${this.handleChange}"
            @keydown="${this.handleKeyDown}"
          />
          <div class="mdc-toggle__slider">
            <mdc-icon
              name="${this.checked?n.CHECKED:n.UNCHECKED}"
              class="mdc-toggle__icon"
              length-unit="rem"
              size="${C[this.size]}"
            ></mdc-icon>
          </div>
        </div>
        ${this.renderLabel()}
        ${this.renderHelperText()}
    `}};a.styles=[...m.styles,...x];let c=a;d([i({type:Boolean,reflect:!0})],c.prototype,"checked");d([i({type:String,reflect:!0})],c.prototype,"size");d([i({type:Boolean,reflect:!0})],c.prototype,"autofocus");c.register(w);export{h as D,v as T};
