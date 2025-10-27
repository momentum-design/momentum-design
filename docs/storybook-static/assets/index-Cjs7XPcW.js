import"./index-CFdwf5JV.js";import"./index-D2p99Z6C.js";import"./index-Cc2dnZsq.js";import{U as p,S as m,X as f,h as b,k as h,W as y,n as k}from"./iframe-BpeRZ387.js";import"./index-B3J96Cqh.js";import{t as d}from"./if-defined-Vjdh4VZl.js";import{F as u}from"./formfieldwrapper.component-nGq94CXi.js";import{D as v}from"./DataAriaLabelMixin-CEFjQrVY.js";import{F as g}from"./FormInternalsMixin-Dgso51mY.js";import{D as x}from"./formfieldwrapper.constants-DWzvJcLF.js";import{K as n}from"./TabIndexMixin-BjPEs3lV.js";import{A}from"./buttonsimple.component-7vZKM0mw.js";import{T as E}from"./radio.constants-BsCy2Kdp.js";const R=[p,m`
    :host {
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

    :host::part(required-indicator) {
      display: none;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host(:hover)::part(static-radio) {
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-radio) {
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-radio) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-control-active-hover);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-radio) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-control-active-pressed);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...f(!0)];var $=Object.defineProperty,w=(c,e,i,r)=>{for(var t=void 0,s=c.length-1,o;s>=0;s--)(o=c[s])&&(t=o(e,i,t)||t);return t&&$(e,i,t),t};const l=class l extends A(g(v(u))){constructor(){super(...arguments),this.checked=!1,this.renderLabelAndHelperText=()=>this.label?h`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:b}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(i=>{i.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(i=>{this.onerror&&this.onerror(i)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,i){this.updateComplete.then(()=>{e.forEach(r=>{r.setComponentValidity(i)})}).catch(r=>{this.onerror&&this.onerror(r)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const i=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(i,!0);else{const r=i.some(o=>o.required),t=!!i.find(o=>o.checked),s=r&&!t;this.setGroupValidity(i,!s)}this.internals.setFormValue(e)}handleChange(){var r;if(this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(t=>{var o;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("input");s&&(t.checked=!1,s.checked=!1)}),this.checked=!0;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input");i&&(i.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,i){var r,t;(t=(r=e[i].shadowRoot)==null?void 0:r.querySelector("input"))==null||t.focus(),e[i].handleChange()}handleKeyDown(e){var s;if(this.disabled)return;(this.readonly||this.softDisabled)&&e.key===n.SPACE&&e.preventDefault();const r=this.getAllRadiosWithinSameGroup().filter(o=>!o.disabled),t=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const o=(t+1)%r.length;this.updateRadio(r,o)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const o=(t-1+r.length)%r.length;this.updateRadio(r,o)}else e.key===n.SPACE&&this.updateRadio(r,t);this.updateTabIndex(),e.key===n.ENTER&&((s=this.form)==null||s.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),i=e.find(t=>t.checked),r=e.find(t=>!t.disabled);e.forEach(t=>{var o;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("input");s&&(s.tabIndex=-1,(t===i||!i&&t===r)&&(s.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return h`
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
          role="${y.RADIO}"
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
          aria-describedby="${d(this.helpText?x.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};l.styles=[...u.styles,...R];let a=l;w([k({type:Boolean,reflect:!0})],a.prototype,"checked");a.register(E);
