import{i as k,k as h,D as m}from"./lit-element-CHllvULs.js";import{u as v,n as a}from"./index-HW6KrQZO.js";import{t as i}from"./if-defined-C4tJgJ33.js";import{D as p}from"./DataAriaLabelMixin-vs_lw9aw.js";import{F as x}from"./FormInternalsMixin-D4P2zbkO.js";import{D as f,F as b}from"./formfieldwrapper.component-DRjDJF0i.js";import{a as g}from"./index-BGjwsboe.js";import"./index-vfjwcob7.js";const y=v.constructTagName("checkbox"),u={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},E=[k`
  :host {
    --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-checkbox-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
    --mdc-checkbox-checked-background-color: var(--mds-color-theme-control-active-normal);
    --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
    --mdc-checkbox-disabled-background-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-checkbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    --mdc-checkbox-disabled-icon-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-checkbox-icon-background-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-checkbox-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-checkbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);

    flex-direction: row;
    align-items: flex-start;
  }
  .mdc-label, .input {
    cursor: pointer;
  }
  :host([checked]) .icon-container,
  :host([indeterminate]) .icon-container {
    background: var(--mdc-checkbox-checked-background-color);
    border: unset;
  }
  :host([checked]) .container:hover .icon-container,
  :host([indeterminate]) .container:hover .icon-container {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]) .container:active .icon-container,
  :host([indeterminate]) .container:active .icon-container {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }
  :host([disabled]) .mdc-label,
  :host([disabled]) .input {
    cursor: default;
  }
  :host([disabled]) .container:hover {
    background: unset;
  }
  :host([disabled]) .icon-container {
    border-color: var(--mdc-checkbox-disabled-border-color);
    background: var(--mdc-checkbox-disabled-background-color);
  }
  :host([disabled]) .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-disabled-icon-color);
  }
  :host([disabled][checked]) .icon-container,
  :host([disabled][indeterminate]) .icon-container {
    background: var(--mdc-checkbox-disabled-checked-icon-color);
    border: 0.0625rem solid var(--mdc-checkbox-disabled-border-color);
  }
  .input {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
  }
  .icon-container {
    display: flex;
    align-items: center;
    border: 0.0625rem solid var(--mdc-checkbox-icon-border-color);
    background: var(--mdc-checkbox-icon-background-color);
  }
  .container:hover {
    background: var(--mdc-checkbox-background-color-hover);
  }
  .container:active {
    background: var(--mdc-checkbox-pressed-icon-color);
  }
  .input, .icon-container {
    width: 1rem;
    height: 1rem;
  }
  .input,
  .icon-container,
  .container {
    border-radius: 0.125rem;
  }
  .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
  }
  .container {
    margin: 0.125rem 0;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked]) .icon-container,
    :host([indeterminate]) .icon-container {
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
    }
  }
`,...g(!0)];var $=Object.defineProperty,n=(s,e,o,T)=>{for(var c=void 0,r=s.length-1,l;r>=0;r--)(l=s[r])&&(c=l(e,o,c)||c);return c&&$(e,o,c),c};const d=class d extends x(p(b)){constructor(){super(),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.helpTextType=void 0}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var o;e.key==="Enter"&&((o=this.form)==null||o.requestSubmit())}handleChange(e){this.toggleState();const o=e.constructor;this.dispatchEvent(new o(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){const e=this.checked||this.indeterminate?h`
      <mdc-icon
        class="icon"
        name="${this.indeterminate?u.INDETERMINATE:u.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    `:m,o=this.helpText?this.renderHelperText():m;return h`
      <div class="container mdc-focus-ring">
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          ?autofocus="${this.autofocus}"
          name="${i(this.name)}"
          value="${i(this.value)}"
          ?required="${!!this.requiredLabel}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${i(this.helpText?f.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
        <div class="icon-container">${e}</div>
      </div>
      <div class="text-container">
        ${this.renderLabel()}
        ${o}
      </div>
    `}};d.styles=[...b.styles,...E];let t=d;n([a({type:Boolean,reflect:!0})],t.prototype,"checked");n([a({type:Boolean,reflect:!0})],t.prototype,"indeterminate");n([a({type:Boolean,reflect:!0})],t.prototype,"autofocus");t.register(y);
