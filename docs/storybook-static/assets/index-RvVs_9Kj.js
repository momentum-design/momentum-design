import{i as k,D as m,k as i}from"./lit-element-D5KKan5q.js";import{u as v,n as a}from"./index-C9z9WAEj.js";import{t as n}from"./if-defined-D5BV9-c0.js";import{D as p}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as f}from"./FormInternalsMixin-CSixOKbK.js";import{D as x,F as b}from"./formfieldwrapper.component-DNKMXI01.js";import{h as g}from"./index-MA1r3zrt.js";import"./index-CZwpp7wD.js";const y=v.constructTagName("checkbox"),u={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},E=[k`
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
  :host([disabled][indeterminate]) .icon-container,
  :host([disabled][checked]) .container:hover .icon-container,
  :host([disabled][indeterminate]) .container:hover .icon-container {
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
`,...g(!0)];var $=Object.defineProperty,d=(l,e,o,C)=>{for(var c=void 0,t=l.length-1,h;t>=0;t--)(h=l[t])&&(c=h(e,o,c)||c);return c&&$(e,o,c),c};const s=class s extends f(p(b)){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?i`<div class="text-container">
      ${this.renderLabel()}
      ${this.renderHelperText()}
    </div>`:m}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var o;e.key==="Enter"&&((o=this.form)==null||o.requestSubmit())}handleChange(e){this.toggleState();const o=e.constructor;this.dispatchEvent(new o(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){const e=this.checked||this.indeterminate?i`
      <mdc-icon
        class="icon"
        name="${this.indeterminate?u.INDETERMINATE:u.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    `:m;return i`
      <div class="container mdc-focus-ring">
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          ?autofocus="${this.autofocus}"
          name="${n(this.name)}"
          value="${n(this.value)}"
          ?required="${!!this.requiredLabel}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${n(this.helpText?x.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
        <div class="icon-container">${e}</div>
      </div>
      ${this.renderLabelAndHelperText()}
    `}};s.styles=[...b.styles,...E];let r=s;d([a({type:Boolean,reflect:!0})],r.prototype,"checked");d([a({type:Boolean,reflect:!0})],r.prototype,"indeterminate");d([a({type:Boolean,reflect:!0})],r.prototype,"autofocus");r.register(y);
