import"./index-DQHUYheE.js";import"./index-BJmBoyrR.js";import"./index-C0n3Kb6r.js";import{W as p,U as m,X as f,h as b,k as h,R as y,n as k}from"./iframe-Ci39ks_7.js";import"./index-0f6dGCRd.js";import{t as d}from"./if-defined-Cx4K7iaJ.js";import{F as u}from"./formfieldwrapper.component-DytQHSOK.js";import{D as v}from"./DataAriaLabelMixin-C4a3RZbM.js";import{F as g}from"./FormInternalsMixin-Dgs_4wdQ.js";import{D as x}from"./formfieldwrapper.constants-DICTCUoR.js";import{K as n}from"./TabIndexMixin-QFZDRRE1.js";import{A}from"./buttonsimple.component-oQttXH7Q.js";import{T as E}from"./radio.constants-C6Rr7Utr.js";const R=[p,m`
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
  `,...f(!0)];var $=Object.defineProperty,w=(l,e,i,s)=>{for(var t=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(t=r(e,i,t)||t);return t&&$(e,i,t),t};const c=class c extends A(g(v(u))){constructor(){super(...arguments),this.checked=!1,this.renderLabelAndHelperText=()=>this.label?h`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:b}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(i=>{i.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(i=>{this.onerror&&this.onerror(i)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,i){this.updateComplete.then(()=>{e.forEach(s=>{s.setComponentValidity(i)})}).catch(s=>{this.onerror&&this.onerror(s)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const i=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(i,!0);else{const s=i.some(r=>r.required),t=!!i.find(r=>r.checked),o=s&&!t;this.setGroupValidity(i,!o)}this.internals.setFormValue(e)}handleChange(){var s;if(this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(t=>{var r;const o=(r=t.shadowRoot)==null?void 0:r.querySelector("input");o&&(t.checked=!1,o.checked=!1)}),this.checked=!0;const i=(s=this.shadowRoot)==null?void 0:s.querySelector("input");i&&(i.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,i){var s,t;(t=(s=e[i].shadowRoot)==null?void 0:s.querySelector("input"))==null||t.focus(),e[i].handleChange()}handleKeyDown(e){var o;if(this.disabled)return;(this.readonly||this.softDisabled)&&e.key===n.SPACE&&e.preventDefault();const s=this.getAllRadiosWithinSameGroup().filter(r=>!r.disabled),t=s.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const r=(t+1)%s.length;this.updateRadio(s,r)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const r=(t-1+s.length)%s.length;this.updateRadio(s,r)}else e.key===n.SPACE&&this.updateRadio(s,t);this.updateTabIndex(),e.key===n.ENTER&&((o=this.form)==null||o.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),i=e.find(t=>t.checked),s=e.find(t=>!t.disabled);e.forEach(t=>{var r;const o=(r=t.shadowRoot)==null?void 0:r.querySelector("input");o&&(o.tabIndex=-1,(t===i||!i&&t===s)&&(o.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return h`
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
    `}};c.styles=[...u.styles,...R];let a=c;w([k({type:Boolean,reflect:!0})],a.prototype,"checked");a.register(E);
