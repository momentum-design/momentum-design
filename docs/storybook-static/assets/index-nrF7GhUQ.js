import{i as k,k as d,D as s}from"./lit-element-CHllvULs.js";import{u as v,n as b}from"./index-HW6KrQZO.js";import{t as l}from"./if-defined-C4tJgJ33.js";import{D as p}from"./DataAriaLabelMixin-vs_lw9aw.js";import{N as x,V as g,v as f}from"./ValueMixin-B2saez_i.js";import{D as y,F as h}from"./formfieldwrapper.component-CWIPqk6J.js";import{h as E}from"./index-CEbgplXA.js";import"./index-8XRYgcxm.js";const $=v.constructTagName("checkbox"),m={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},T=[k`
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
`,...E(!0)];var D=Object.defineProperty,u=(n,e,o,N)=>{for(var c=void 0,i=n.length-1,a;i>=0;i--)(a=n[i])&&(c=a(e,o,c)||c);return c&&D(e,o,c),c};const t=class t extends x(g(p(h))){constructor(){super(),this.checked=!1,this.indeterminate=!1,this.internals=this.attachInternals(),this.helpTextType=void 0,this.id=`mdc-input-${f()}`}get form(){return this.internals.form}setFormValue(){let e=null;this.checked&&(e=this.value?this.value:"on"),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleChange(e){this.toggleState();const o=e.constructor;this.dispatchEvent(new o(e.type,e))}handleKeyDown(e){var o;e.key==="Enter"&&((o=this.form)==null||o.requestSubmit())}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){const e=this.checked||this.indeterminate?d`
      <mdc-icon
        class="icon"
        name="${this.indeterminate?m.INDETERMINATE:m.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    `:s,o=this.helpText?this.renderHelperText():s;return d`
      <div class="container mdc-focus-ring">
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          name="${l(this.name)}"
          value="${l(this.value)}"
          .checked="${this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          aria-describedby="${y.HELPER_TEXT_ID}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
        <div class="icon-container">${e}</div>
      </div>
      <div class="text-container">
        ${this.renderLabel()}
        ${o}
      </div>
    `}};t.formAssociated=!0,t.styles=[...h.styles,...T];let r=t;u([b({type:Boolean,reflect:!0})],r.prototype,"checked");u([b({type:Boolean,reflect:!0})],r.prototype,"indeterminate");r.register($);
