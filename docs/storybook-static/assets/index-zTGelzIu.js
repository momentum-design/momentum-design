import"./index-BbKtROZO.js";import"./index-BYN-6AzR.js";import"./index-BGvpGGuM.js";import{U as p,S as m,X as b,h as f,k as h,W as v,n as y}from"./iframe-Ckq14th5.js";import"./index-Dy0O2_kC.js";import{t as d}from"./if-defined-C2yKogSI.js";import{D as k,F as u}from"./formfieldwrapper.component-xC5JGhos.js";import{D as g}from"./DataAriaLabelMixin-RBz0EvxW.js";import{F as x}from"./FormInternalsMixin-C-UkDWxp.js";import{K as l}from"./keys-hFXe221I.js";import{A}from"./buttonsimple.component-DsGx8Kzo.js";import{T as E}from"./radio.constants-KnhR35Pd.js";const R=[p,m`
    /* Base styles and CSS custom properties */
    :host {
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 0.5rem;

      --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-radio-control-inactive-hover: var(--mds-color-theme-control-inactive-hover);
      --mdc-radio-control-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
      --mdc-radio-control-active-hover-color: var(--mds-color-theme-control-active-hover);
      --mdc-radio-control-active-pressed-color: var(--mds-color-theme-control-active-pressed);
      --mdc-radio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);
      --mdc-radio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);
      --mdc-radio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    }

    /* Component structure and layout */
    :host::part(radio-input) {
      position: absolute;
      opacity: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 2;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      flex: 1;
    }

    :host::part(required-indicator) {
      display: none;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    /* Default interactive states */
    :host(:hover) mdc-staticradio {
      background-color: var(--mdc-radio-control-inactive-hover);
    }

    :host(:active) mdc-staticradio {
      background-color: var(--mdc-radio-control-inactive-pressed-color);
    }

    :host([checked]:hover)::part(radio-icon) {
      border-color: var(--mdc-radio-control-active-hover-color);
      background-color: var(--mdc-radio-control-active-hover-color);
    }

    :host([checked]:active)::part(radio-icon) {
      border-color: var(--mdc-radio-control-active-pressed-color);
      background-color: var(--mdc-radio-control-active-pressed-color);
    }

    /* Readonly state - disables pointer events but allows specific hover behavior */
    :host([readonly]) {
      pointer-events: none;
    }

    :host([readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
      background-color: var(--mdc-staticradio-control-inactive-color);
    }

    :host([soft-disabled]) {
      pointer-events: none;
    }

    /* Disabled states override interactive styles */
    :host([disabled])::part(radio-input),
    :host([soft-disabled])::part(radio-input),
    :host([readonly])::part(radio-input),
    :host([disabled])::part(label),
    :host([soft-disabled])::part(label),
    :host([readonly])::part(label) {
      cursor: default;
    }

    :host([disabled]:hover) mdc-staticradio,
    :host([disabled]:active) mdc-staticradio,
    :host([soft-disabled]:hover) mdc-staticradio,
    :host([soft-disabled]:active) mdc-staticradio {
      background-color: unset;
    }

    :host([disabled]:hover)::part(radio-icon),
    :host([soft-disabled]:hover)::part(radio-icon),
    :host([disabled][readonly]:hover)::part(radio-icon),
    :host([soft-disabled][readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-radio-disabled-border-color);
      background-color: var(--mdc-radio-control-inactive-disabled-background);
    }

    :host([disabled][checked]:hover)::part(radio-icon),
    :host([soft-disabled][checked]:hover)::part(radio-icon) {
      background-color: var(--mdc-radio-control-active-disabled-background);
    }

    :host([disabled])::part(label-text),
    :host([disabled])::part(help-text),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(label-text),
    :host([soft-disabled])::part(help-text) {
      color: var(--mdc-radio-text-disabled-color);
    }
  `,...b(!0)];var S=Object.defineProperty,$=(n,e,o,r)=>{for(var t=void 0,a=n.length-1,i;a>=0;a--)(i=n[a])&&(t=i(e,o,t)||t);return t&&S(e,o,t),t};const c=class c extends A(x(g(u))){constructor(){super(...arguments),this.checked=!1,this.renderLabelAndHelperText=()=>this.label?h`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:f}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(o=>{o.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(o=>{this.onerror&&this.onerror(o)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,o){this.updateComplete.then(()=>{e.forEach(r=>{r.setComponentValidity(o)})}).catch(r=>{this.onerror&&this.onerror(r)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const o=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(o,!0);else{const r=o.some(i=>i.required),t=!!o.find(i=>i.checked),a=r&&!t;this.setGroupValidity(o,!a)}this.internals.setFormValue(e)}handleChange(){var r;if(this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(t=>{var i;const a=(i=t.shadowRoot)==null?void 0:i.querySelector("input");a&&(t.checked=!1,a.checked=!1)}),this.checked=!0;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");o&&(o.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,o){var r,t;(t=(r=e[o].shadowRoot)==null?void 0:r.querySelector("input"))==null||t.focus(),e[o].handleChange()}handleKeyDown(e){var a;if(this.disabled)return;(this.readonly||this.softDisabled)&&e.key===l.SPACE&&e.preventDefault();const r=this.getAllRadiosWithinSameGroup().filter(i=>!i.disabled),t=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const i=(t+1)%r.length;this.updateRadio(r,i)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const i=(t-1+r.length)%r.length;this.updateRadio(r,i)}else e.key===l.SPACE&&this.updateRadio(r,t);this.updateTabIndex(),e.key===l.ENTER&&((a=this.form)==null||a.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),o=e.find(t=>t.checked),r=e.find(t=>!t.disabled);e.forEach(t=>{var i;const a=(i=t.shadowRoot)==null?void 0:i.querySelector("input");a&&(a.tabIndex=-1,(t===o||!o&&t===r)&&(a.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return h`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
      >
        <input
          id="${this.inputId}"
          part="radio-input"
          type="radio"
          role="${v.RADIO}"
          ?autofocus="${this.autofocus}"
          name="${d(this.name)}"
          value="${d(this.value)}"
          ?required="${this.required}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          ?checked=${this.checked}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-checked="${this.checked}"
          aria-describedby="${d(this.helpText?k.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};c.styles=[...u.styles,...R];let s=c;$([y({type:Boolean,reflect:!0})],s.prototype,"checked");s.register(E);
