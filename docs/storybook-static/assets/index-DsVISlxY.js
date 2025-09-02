import"./index-CJdkg0Un.js";import"./index-df5yzGfC.js";import"./index-CY9PwAYn.js";import"./index-D2VIkDCb.js";import"./index-DM9rY9pk.js";import{i as b,D as f,k as n}from"./lit-element-D5KKan5q.js";import{n as m}from"./property-Bj3TGwkg.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{D as v,F as h}from"./formfieldwrapper.component-BO2gGcYF.js";import{D as y}from"./DataAriaLabelMixin-DVpSBUFD.js";import{F as k}from"./FormInternalsMixin-DHE-e7AC.js";import{R as g}from"./roles-CJI3JVG-.js";import{K as u}from"./keys-hFXe221I.js";import{A as x}from"./buttonsimple.component-jROCF6tv.js";import{h as A,a as E}from"./index-B-GnYs90.js";import{T as R}from"./radio.constants-CDGvXYPm.js";const _=[A,b`
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

    :host(:hover)::part(radio-icon) {
      background-color: var(--mdc-radio-control-inactive-hover);
    }

    :host(:active)::part(radio-icon) {
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

    :host([readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
      background-color: var(--mdc-staticradio-control-inactive-color);
    }

    :host([disabled]:hover)::part(radio-icon),
    :host([disabled][readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-radio-disabled-border-color);
      background-color: var(--mdc-radio-control-inactive-disabled-background);
    }

    :host([disabled][checked]:hover)::part(radio-icon) {
      background-color: var(--mdc-radio-control-active-disabled-background);
    }

    :host([readonly]) .mdc-radio__input,
    :host([disabled]) .mdc-radio__input,
    :host([disabled]) .mdc-label,
    :host([readonly]) .mdc-label {
      cursor: default;
    }

    .mdc-label {
      cursor: pointer;
    }

    :host([disabled]) .mdc-radio__label-text,
    :host([disabled]) .mdc-radio__help-text {
      color: var(--mdc-radio-text-disabled-color);
    }

    .mdc-radio__input {
      position: absolute;
      opacity: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 2;
    }

    .mdc-radio__label-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
    }
    :host::part(required-indicator) {
      display: none;
    }
  `,...E(!0)];var $=Object.defineProperty,p=(l,e,o,r)=>{for(var t=void 0,a=l.length-1,i;a>=0;a--)(i=l[a])&&(t=i(e,o,t)||t);return t&&$(e,o,t),t};const c=class c extends x(k(y(h))){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.renderLabelAndHelperText=()=>this.label?n`<div class="mdc-radio__label-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:f}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(o=>{o.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(o=>{this.onerror&&this.onerror(o)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,o){this.updateComplete.then(()=>{e.forEach(r=>{r.setComponentValidity(o)})}).catch(r=>{this.onerror&&this.onerror(r)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const o=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(o,!0);else{const r=o.some(i=>i.required),t=!!o.find(i=>i.checked),a=r&&!t;this.setGroupValidity(o,!a)}this.internals.setFormValue(e)}handleChange(){var r;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(t=>{var i;const a=(i=t.shadowRoot)==null?void 0:i.querySelector("input");a&&(t.checked=!1,a.checked=!1)}),this.checked=!0;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");o&&(o.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,o){var r,t;(t=(r=e[o].shadowRoot)==null?void 0:r.querySelector("input"))==null||t.focus(),e[o].handleChange()}handleKeyDown(e){var a;if(this.disabled)return;const r=this.getAllRadiosWithinSameGroup().filter(i=>!i.disabled),t=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const i=(t+1)%r.length;this.updateRadio(r,i)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const i=(t-1+r.length)%r.length;this.updateRadio(r,i)}else e.key===u.SPACE&&this.updateRadio(r,t);this.updateTabIndex(),e.key===u.ENTER&&((a=this.form)==null||a.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),o=e.find(t=>t.checked),r=e.find(t=>!t.disabled);e.forEach(t=>{var i;const a=(i=t.shadowRoot)==null?void 0:i.querySelector("input");a&&(a.tabIndex=-1,(t===o||!o&&t===r)&&(a.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return n`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
      >
        <input
          id="${this.inputId}"
          type="radio"
          role="${g.RADIO}"
          ?autofocus="${this.autofocus}"
          name="${s(this.name)}"
          value="${s(this.value)}"
          ?required="${this.required}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          ?checked=${this.checked}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          class="mdc-radio__input"
          aria-checked="${this.checked}"
          aria-describedby="${s(this.helpText?v.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};c.styles=[...h.styles,..._];let d=c;p([m({type:Boolean,reflect:!0})],d.prototype,"checked");p([m({type:Boolean,reflect:!0})],d.prototype,"readonly");d.register(R);
