import"./index-CTptDYgk.js";import{D as n,T as g,a as p}from"./toggle.constants-B1L8k1sa.js";import{i as u,k as v}from"./lit-element-D5KKan5q.js";import{n as l}from"./index-C9z9WAEj.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{D as b}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as f}from"./FormInternalsMixin-CSixOKbK.js";import"./index-3g4ju84f.js";import{D as k,F as m}from"./formfieldwrapper.component-DNKMXI01.js";import{a as y,h as x}from"./index-MA1r3zrt.js";const $=[y,u`
  :host {
    --mdc-toggle-width: 3rem;
    --mdc-toggle-height: 1.5rem;
    --mdc-toggle-width-compact: 2rem;
    --mdc-toggle-height-compact: 1rem;

    --mdc-toggle-label-lineheight: var(--mds-font-lineheight-body-midsize);
    --mdc-toggle-label-fontsize: var(--mds-font-size-body-midsize);
    --mdc-toggle-label-fontweight: 400;
    --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);

    --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
    --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
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

  :host::part(toggle-input) {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
  }

  .mdc-label-text, .mdc-help-text {
    font-size: var(--mdc-toggle-label-fontsize);
    font-weight: var(--mdc-toggle-label-fontweight);
    line-height: var(--mdc-toggle-label-lineheight);
    grid-column: 2;
  }

  .mdc-label, :host::part(toggle-input) {
    cursor: pointer;
  }

  :host([disabled]) .mdc-label,
  :host([disabled])::part(toggle-input) {
    cursor: default;
  }

  .mdc-help-text {
    color: var(--mdc-toggle-help-text-color);
  }

  :host(:hover:not([disabled]))::part(container) {
    background-color: var(--mdc-toggle-inactive-hover-color);
  }

  :host(:active:not([disabled]))::part(container) {
    background-color: var(--mdc-toggle-inactive-pressed-color);
  }

  :host(:hover:not([disabled])[checked])::part(container) {
    background-color: var(--mdc-toggle-active-hover-color);
  }

  :host(:active:not([disabled])[checked])::part(container) {
    background-color: var(--mdc-toggle-active-pressed-color);
  }

  :host([disabled]) .mdc-label-text, :host([disabled]) .mdc-help-text {
    color: var(--mdc-toggle-label-color-disabled);
  }
`,...x(!0)];var w=Object.defineProperty,r=(d,e,t,z)=>{for(var o=void 0,a=d.length-1,h;a>=0;a--)(h=d[a])&&(o=h(e,t,o)||o);return o&&w(e,t,o),o};const c=class c extends f(b(m)){constructor(){super(...arguments),this.checked=!1,this.size=n.SIZE,this.autofocus=!1}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleKeyDown(e){var t;e.key==="Enter"&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(g).includes(e)?e:n.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return v`
        <mdc-statictoggle
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          size="${this.size}"
          class="mdc-focus-ring"
          part="container"
        >
          <input
            id="${this.id}"
            type="checkbox"
            part="toggle-input"
            role="switch"
            ?autofocus="${this.autofocus}"
            ?required="${!!this.requiredLabel}"
            name="${s(this.name)}"
            value="${s(this.value)}"
            .checked="${this.checked}"
            aria-checked="${this.checked}"
            .disabled="${this.disabled}"
            aria-describedby="${s(this.helpText?k.HELPER_TEXT_ID:"")}"
            aria-label="${this.dataAriaLabel??""}"
            tabindex="${this.disabled?-1:0}"
            @change="${this.handleChange}"
            @keydown="${this.handleKeyDown}"
          />
        </mdc-statictoggle>
        ${this.renderLabel()}
        ${this.renderHelperText()}
    `}};c.styles=[...m.styles,...$];let i=c;r([l({type:Boolean,reflect:!0})],i.prototype,"checked");r([l({type:String,reflect:!0})],i.prototype,"size");r([l({type:Boolean,reflect:!0})],i.prototype,"autofocus");i.register(p);
