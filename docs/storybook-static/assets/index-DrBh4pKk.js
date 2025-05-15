import{i as u,D as b,k as h}from"./lit-element-D5KKan5q.js";import{n as a}from"./index-C9z9WAEj.js";import{t as o}from"./if-defined-D5BV9-c0.js";import{D as p}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as k}from"./FormInternalsMixin-CSixOKbK.js";import{D as f,F as m}from"./formfieldwrapper.component-5n2-mkV5.js";import{a as v}from"./index-CcXofQbA.js";import{T as x}from"./index-BYa-a-_r.js";import"./index-DKrr3WK1.js";const g=[u`
  :host {
    --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
    --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
    --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    
    flex-direction: row;
    align-items: flex-start;
  }
  .mdc-label, .input {
    cursor: pointer;
  }

  :host([disabled]) .mdc-label,
  :host([disabled]) .input {
    cursor: default;
  }

  :host(:hover) mdc-staticcheckbox{
    background: var(--mdc-checkbox-background-color-hover);
  }
  :host(:active) mdc-staticcheckbox{
    background: var(--mdc-checkbox-pressed-icon-color);
  }

  :host([checked]:hover)::part(icon-container),
  :host([indeterminate]:hover)::part(icon-container) {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]:active)::part(icon-container),
  :host([indeterminate]:active)::part(icon-container) {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }

  :host([disabled])  mdc-staticcheckbox {
    background: unset;
  }

  :host([disabled][checked])::part(icon-container),
  :host([disabled][indeterminate])::part(icon-container) {
    background-color: var(--mdc-checkbox-disabled-checked-icon-color);
  }

  .input {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
  }

  .input {
    width: 1rem;
    height: 1rem;
    border-radius: 0.125rem;
  }
 
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  

`,...v(!0)];var y=Object.defineProperty,s=(n,e,t,$)=>{for(var i=void 0,r=n.length-1,l;r>=0;r--)(l=n[r])&&(i=l(e,t,i)||i);return i&&y(e,t,i),i};const d=class d extends k(p(m)){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?h`<div class="text-container">
      ${this.renderLabel()}
      ${this.renderHelperText()}
    </div>`:b}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var t;e.key==="Enter"&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return h`
      <mdc-staticcheckbox 
      class="mdc-focus-ring"
      ?checked="${this.checked}" 
      ?indeterminate="${this.indeterminate}" 
      ?disabled="${this.disabled}">
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          ?autofocus="${this.autofocus}"
          name="${o(this.name)}"
          value="${o(this.value)}"
          ?required="${!!this.requiredLabel}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${o(this.helpText?f.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};d.styles=[...m.styles,...g];let c=d;s([a({type:Boolean,reflect:!0})],c.prototype,"checked");s([a({type:Boolean,reflect:!0})],c.prototype,"indeterminate");s([a({type:Boolean,reflect:!0})],c.prototype,"autofocus");c.register(x);
