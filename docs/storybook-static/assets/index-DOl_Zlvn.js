import"./index-DrGUfC8Z.js";import"./index-Bbl3QEBF.js";import"./index-CzN-tBj6.js";import{$ as m,X as f,a0 as b,h as y,k as u,R as v,n as k}from"./iframe-DPiEtQC6.js";import"./index-PwQcXGaF.js";import{t as c}from"./if-defined-BBKKqPaV.js";import{F as p}from"./formfieldwrapper.component-D6wHe3xF.js";import{D as g}from"./DataAriaLabelMixin-q02ETwny.js";import{F as x}from"./FormInternalsMixin-Di-erJ9l.js";import{D as A}from"./formfieldwrapper.constants-BPye36mV.js";import{A as E}from"./buttonsimple.component-DsF8ypJf.js";import{K as R,A as a}from"./KeyToActionMixin-C0pScinA.js";import{T as $}from"./radio.constants-B8JVjskX.js";const T=[m,f`
    :host {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 0.5rem;
    }

    :host::part(radio-input) {
      position: absolute;
      opacity: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 1;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      flex: 1;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
    }

    :host(:hover)::part(static-radio) {
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-radio) {
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-radio) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-control-active-hover);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-radio) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-control-active-pressed);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...b(!0)];var C=Object.defineProperty,S=(h,e,t,o)=>{for(var i=void 0,s=h.length-1,r;s>=0;s--)(r=h[s])&&(i=r(e,t,i)||i);return i&&C(e,t,i),i};const l=class l extends R(E(x(g(p)))){constructor(){super(...arguments),this.checked=!1,this.renderLabelAndHelperText=()=>this.label?u`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:y}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(t=>{t.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(t=>{this.onerror&&this.onerror(t)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(o=>{o.setComponentValidity(t)})}).catch(o=>{this.onerror&&this.onerror(o)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const t=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(t,!0);else{const o=t.some(r=>r.required),i=!!t.find(r=>r.checked),s=o&&!i;this.setGroupValidity(t,!s)}this.internals.setFormValue(e)}handleChange(){var o;if(this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(i=>{var r;const s=(r=i.shadowRoot)==null?void 0:r.querySelector("input");s&&(i.checked=!1,s.checked=!1)}),this.checked=!0;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("input");t&&(t.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,t){var o,i;(i=(o=e[t].shadowRoot)==null?void 0:o.querySelector("input"))==null||i.focus(),e[t].handleChange()}handleKeyDown(e){var r;if(this.disabled)return;const t=this.getActionForKeyEvent(e);(this.readonly||this.softDisabled)&&t===a.SPACE&&e.preventDefault();const i=this.getAllRadiosWithinSameGroup().filter(d=>!d.disabled),s=i.indexOf(this);if(t===a.DOWN||t===a.RIGHT){const d=(s+1)%i.length;this.updateRadio(i,d)}else if(t===a.UP||t===a.LEFT){const d=(s-1+i.length)%i.length;this.updateRadio(i,d)}else t===a.SPACE&&this.updateRadio(i,s);this.updateTabIndex(),t===a.ENTER&&((r=this.form)==null||r.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),t=e.find(i=>i.checked),o=e.find(i=>!i.disabled);e.forEach(i=>{var r;const s=(r=i.shadowRoot)==null?void 0:r.querySelector("input");s&&(s.tabIndex=-1,(i===t||!t&&i===o)&&(s.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return u`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
        part="static-radio"
      >
        <input
          id="${this.inputId}"
          part="radio-input"
          type="radio"
          role="${v.RADIO}"
          ?autofocus="${this.autofocus}"
          name="${c(this.name)}"
          value="${c(this.value)}"
          ?required="${this.required}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          ?checked=${this.checked}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-checked="${this.checked}"
          aria-describedby="${c(this.helpText?A.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};l.styles=[...p.styles,...T];let n=l;S([k({type:Boolean,reflect:!0})],n.prototype,"checked");n.register($);
