import"./index-CySF3PjJ.js";import"./index-Bu3GQSTz.js";import{T as u}from"./index-D_5VFEwc.js";import"./index-riA1qVWu.js";import"./index-DgfhnsNA.js";import{i as p,D as b,k as l}from"./lit-element-D5KKan5q.js";import{n as a}from"./provider.component-BaQC7CJH.js";import{t as r}from"./if-defined-D5BV9-c0.js";import{K as k}from"./keys-hFXe221I.js";import{D as f}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{F as v}from"./FormInternalsMixin-BIoSiX4k.js";import{D as x,F as m}from"./formfieldwrapper.component-C-SgLT80.js";import{a as g}from"./index-B-GnYs90.js";const y=[p`
    :host {
      --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
      --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);
      --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
      --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
      --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);

      flex-direction: row;
      align-items: flex-start;
    }
    .mdc-label,
    .input {
      cursor: pointer;
    }

    :host([disabled]) .mdc-label,
    :host([disabled]) .input {
      cursor: default;
    }

    :host(:hover) mdc-staticcheckbox {
      background: var(--mdc-checkbox-background-color-hover);
    }
    :host(:active) mdc-staticcheckbox {
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

    :host([disabled]) mdc-staticcheckbox {
      background: unset;
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container) {
      background-color: var(--mdc-checkbox-disabled-checked-icon-color);
    }

    :host mdc-staticcheckbox {
      position: relative;
    }

    .input {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
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
  `,...g(!0)];var $=Object.defineProperty,s=(n,e,t,E)=>{for(var i=void 0,o=n.length-1,h;o>=0;o--)(h=n[o])&&(i=h(e,t,i)||i);return i&&$(e,t,i),i};const d=class d extends v(f(m)){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?l`<div class="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:b}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var t;e.key===k.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return l`
      <mdc-staticcheckbox
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
      >
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          ?autofocus="${this.autofocus}"
          name="${r(this.name)}"
          value="${r(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${r(this.helpText?x.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};d.styles=[...m.styles,...y];let c=d;s([a({type:Boolean,reflect:!0})],c.prototype,"checked");s([a({type:Boolean,reflect:!0})],c.prototype,"indeterminate");s([a({type:Boolean,reflect:!0})],c.prototype,"autofocus");c.register(u);
