import"./index-9jv0kyio.js";import"./index-BMN--PIx.js";import"./index-CRnfDU32.js";import{U as f,S as b,X as v,h as y,k as l,W as k,n as p}from"./iframe-Bmqk5ncS.js";import"./index-CZK9p1cf.js";import{t as s}from"./if-defined-CEMHl27f.js";import{D as g,F as h}from"./formfieldwrapper.component-DgTSXZHj.js";import{D as x}from"./DataAriaLabelMixin-C9ZcLuvp.js";import{F as A}from"./FormInternalsMixin-GQemRFrQ.js";import{K as u}from"./keys-hFXe221I.js";import{A as E}from"./buttonsimple.component-DJ5naDiX.js";import{T as R}from"./radio.constants-BafNvAFI.js";const $=[f,b`
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

    :host([readonly])::part(radio-input) :host([disabled])::part(radio-input) :host([disabled])::part(label),
    :host([readonly])::part(label) {
      cursor: default;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

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
  `,...v(!0)];var w=Object.defineProperty,m=(n,e,o,r)=>{for(var t=void 0,a=n.length-1,i;a>=0;a--)(i=n[a])&&(t=i(e,o,t)||t);return t&&w(e,o,t),t};const c=class c extends E(A(x(h))){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.renderLabelAndHelperText=()=>this.label?l`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:y}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(o=>{o.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(o=>{this.onerror&&this.onerror(o)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,o){this.updateComplete.then(()=>{e.forEach(r=>{r.setComponentValidity(o)})}).catch(r=>{this.onerror&&this.onerror(r)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const o=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(o,!0);else{const r=o.some(i=>i.required),t=!!o.find(i=>i.checked),a=r&&!t;this.setGroupValidity(o,!a)}this.internals.setFormValue(e)}handleChange(){var r;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(t=>{var i;const a=(i=t.shadowRoot)==null?void 0:i.querySelector("input");a&&(t.checked=!1,a.checked=!1)}),this.checked=!0;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");o&&(o.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,o){var r,t;(t=(r=e[o].shadowRoot)==null?void 0:r.querySelector("input"))==null||t.focus(),e[o].handleChange()}handleKeyDown(e){var a;if(this.disabled)return;const r=this.getAllRadiosWithinSameGroup().filter(i=>!i.disabled),t=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const i=(t+1)%r.length;this.updateRadio(r,i)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const i=(t-1+r.length)%r.length;this.updateRadio(r,i)}else e.key===u.SPACE&&this.updateRadio(r,t);this.updateTabIndex(),e.key===u.ENTER&&((a=this.form)==null||a.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),o=e.find(t=>t.checked),r=e.find(t=>!t.disabled);e.forEach(t=>{var i;const a=(i=t.shadowRoot)==null?void 0:i.querySelector("input");a&&(a.tabIndex=-1,(t===o||!o&&t===r)&&(a.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return l`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
      >
        <input
          id="${this.inputId}"
          part="radio-input"
          type="radio"
          role="${k.RADIO}"
          ?autofocus="${this.autofocus}"
          name="${s(this.name)}"
          value="${s(this.value)}"
          ?required="${this.required}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          ?checked=${this.checked}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-checked="${this.checked}"
          aria-describedby="${s(this.helpText?g.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};c.styles=[...h.styles,...$];let d=c;m([p({type:Boolean,reflect:!0})],d.prototype,"checked");m([p({type:Boolean,reflect:!0})],d.prototype,"readonly");d.register(R);
