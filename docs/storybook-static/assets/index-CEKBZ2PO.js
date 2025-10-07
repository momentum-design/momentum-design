import"./index-3vnqsi31.js";import"./index-CqFh5GF_.js";import{T as b}from"./index-B3wmhCDb.js";import{S as u,X as f,h as k,k as h,n as r}from"./iframe-YytTiSpJ.js";import"./index-DatT1WNs.js";import{t as a}from"./if-defined-B7MbqA45.js";import{K as p}from"./keys-hFXe221I.js";import{A as v}from"./buttonsimple.component-BVakejB1.js";import{D as x}from"./DataAriaLabelMixin-BTdwV6Zu.js";import{F as y}from"./FormInternalsMixin-Cr6DhtiY.js";import{D as g,F as m}from"./formfieldwrapper.component-DLuLx3Vb.js";const $=[u`
    /* Base styles and CSS custom properties */
    :host {
      --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
      --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);
      --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
      --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
      --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
      --mdc-checkbox-disabled-text-color: var(--mds-color-theme-text-primary-disabled);

      flex-direction: row;
      align-items: flex-start;
    }

    /* Component structure and layout */
    :host mdc-staticcheckbox {
      position: relative;
    }

    :host::part(checkbox-input) {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    :host::part(label) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      word-break: break-word;
      white-space: normal;
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host(:hover) mdc-staticcheckbox {
      background-color: var(--mdc-checkbox-background-color-hover);
    }

    :host(:active) mdc-staticcheckbox {
      background-color: var(--mdc-checkbox-pressed-icon-color);
    }

    :host([checked]:hover)::part(icon-container),
    :host([indeterminate]:hover)::part(icon-container) {
      background-color: var(--mdc-checkbox-checked-background-color-hover);
    }

    :host([checked]:active)::part(icon-container),
    :host([indeterminate]:active)::part(icon-container) {
      background-color: var(--mdc-checkbox-checked-pressed-icon-color);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    /* Disabled states override interactive styles */
    :host([disabled])::part(label),
    :host([disabled])::part(checkbox-input),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(checkbox-input) {
      cursor: default;
    }

    :host([disabled]) mdc-staticcheckbox,
    :host([soft-disabled]) mdc-staticcheckbox {
      background-color: unset;
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container),
    :host([soft-disabled][checked])::part(icon-container),
    :host([soft-disabled][indeterminate])::part(icon-container) {
      background-color: var(--mdc-checkbox-disabled-checked-icon-color);
    }

    :host([disabled])::part(label),
    :host([disabled])::part(help-text),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(label-text),
    :host([soft-disabled])::part(help-text) {
      color: var(--mdc-checkbox-disabled-text-color);
    }
  `,...f(!0)];var E=Object.defineProperty,c=(n,e,t,D)=>{for(var o=void 0,s=n.length-1,l;s>=0;s--)(l=n[s])&&(o=l(e,t,o)||o);return o&&E(e,t,o),o};const d=class d extends v(y(x(m))){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?h`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:k}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var t;(this.readonly||this.softDisabled)&&e.key===p.SPACE&&e.preventDefault(),e.key===p.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return h`
      <mdc-staticcheckbox
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="checkbox-input"
          name="${a(this.name)}"
          value="${a(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${a(this.helpText?g.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};d.styles=[...m.styles,...$];let i=d;c([r({type:Boolean,reflect:!0})],i.prototype,"checked");c([r({type:Boolean,reflect:!0})],i.prototype,"indeterminate");c([r({type:Boolean,reflect:!0})],i.prototype,"autofocus");i.register(b);
