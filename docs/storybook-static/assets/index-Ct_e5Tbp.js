import"./index-D9B9YfOT.js";import"./index-BGF5-tDE.js";import"./index-CeWuhPGb.js";import"./index-riA1qVWu.js";import"./index-DYRxW7oy.js";import{i as f,D as v,k as m}from"./lit-element-D5KKan5q.js";import{n as c}from"./provider.component-BaQC7CJH.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{D as y,F as p}from"./formfieldwrapper.component-C-SgLT80.js";import{D as k}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{F as g}from"./FormInternalsMixin-BIoSiX4k.js";import{R as x}from"./roles-DU0xbrD4.js";import{K as b}from"./keys-hFXe221I.js";import{h as A,a as E}from"./index-B-GnYs90.js";import{T as R}from"./radio.constants-9sXjEnlE.js";const _=[A,f`
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
  `,...E(!0)];var $=Object.defineProperty,l=(h,e,t,r)=>{for(var o=void 0,i=h.length-1,a;i>=0;i--)(a=h[i])&&(o=a(e,t,o)||o);return o&&$(e,t,o),o};const n=class n extends g(k(p)){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?m`<div class="mdc-radio__label-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:v}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(){this.updateTabIndex()}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}dispatchChangeEvent(e){const t=e.constructor;this.dispatchEvent(new t(e.type,e))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(t=>{t.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(t=>{this.onerror&&this.onerror(t)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(r=>{r.setComponentValidity(t)})}).catch(r=>{this.onerror&&this.onerror(r)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const t=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(t,!0);else{const r=t.some(a=>a.required),o=!!t.find(a=>a.checked),i=r&&!o;this.setGroupValidity(t,!i)}this.internals.setFormValue(e)}handleChange(e){var o;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(i=>{var u;const a=(u=i.shadowRoot)==null?void 0:u.querySelector("input");a&&(i.checked=!1,a.checked=!1)}),this.checked=!0;const r=(o=this.shadowRoot)==null?void 0:o.querySelector("input");r&&(r.checked=!0),this.dispatchChangeEvent(e)}updateRadio(e,t,r){var o,i;(i=(o=e[t].shadowRoot)==null?void 0:o.querySelector("input"))==null||i.focus(),e[t].handleChange(r)}handleKeyDown(e){var i;if(this.disabled)return;const r=this.getAllRadiosWithinSameGroup().filter(a=>!a.disabled),o=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const a=(o+1)%r.length;this.updateRadio(r,a,e)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const a=(o-1+r.length)%r.length;this.updateRadio(r,a,e)}else e.key===b.SPACE&&this.updateRadio(r,o,e);this.updateTabIndex(),e.key===b.ENTER&&((i=this.form)==null||i.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),t=e.find(o=>o.checked),r=e.find(o=>!o.disabled);e.forEach(o=>{var a;const i=(a=o.shadowRoot)==null?void 0:a.querySelector("input");i&&(i.tabIndex=-1,(o===t||!t&&o===r)&&(i.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return m`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
      >
        <input
          id="${this.id}"
          type="radio"
          role="${x.RADIO}"
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
          aria-describedby="${s(this.helpText?y.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};n.styles=[...p.styles,..._];let d=n;l([c({type:Boolean,reflect:!0})],d.prototype,"checked");l([c({type:Boolean,reflect:!0})],d.prototype,"readonly");l([c({type:Boolean,reflect:!0})],d.prototype,"autofocus");d.register(R);
