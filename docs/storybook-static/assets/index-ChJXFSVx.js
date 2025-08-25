import"./index-Qkef0PBd.js";import"./index-C4hiRl7R.js";import"./index-CY9PwAYn.js";import"./index-DeEenWCE.js";import"./index-DM9rY9pk.js";import{i as b,D as f,k as u}from"./lit-element-D5KKan5q.js";import{n as c}from"./property-Bj3TGwkg.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{D as v,F as m}from"./formfieldwrapper.component-BfkD1w96.js";import{D as y}from"./DataAriaLabelMixin-DVpSBUFD.js";import{F as k}from"./FormInternalsMixin-DHE-e7AC.js";import{R as g}from"./roles-CJI3JVG-.js";import{K as p}from"./keys-hFXe221I.js";import{h as x,a as A}from"./index-B-GnYs90.js";import{T as R}from"./radio.constants-CDGvXYPm.js";const E=[x,b`
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
  `,...A(!0)];var _=Object.defineProperty,l=(h,e,t,r)=>{for(var o=void 0,a=h.length-1,i;a>=0;a--)(i=h[a])&&(o=i(e,t,o)||o);return o&&_(e,t,o),o};const n=class n extends k(y(m)){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?u`<div class="mdc-radio__label-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:f}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(){this.updateTabIndex()}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(t=>{t.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(t=>{this.onerror&&this.onerror(t)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(r=>{r.setComponentValidity(t)})}).catch(r=>{this.onerror&&this.onerror(r)})}setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null;const t=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(t,!0);else{const r=t.some(i=>i.required),o=!!t.find(i=>i.checked),a=r&&!o;this.setGroupValidity(t,!a)}this.internals.setFormValue(e)}handleChange(){var r;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(o=>{var i;const a=(i=o.shadowRoot)==null?void 0:i.querySelector("input");a&&(o.checked=!1,a.checked=!1)}),this.checked=!0;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("input");t&&(t.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}updateRadio(e,t){var r,o;(o=(r=e[t].shadowRoot)==null?void 0:r.querySelector("input"))==null||o.focus(),e[t].handleChange()}handleKeyDown(e){var a;if(this.disabled)return;const r=this.getAllRadiosWithinSameGroup().filter(i=>!i.disabled),o=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const i=(o+1)%r.length;this.updateRadio(r,i)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const i=(o-1+r.length)%r.length;this.updateRadio(r,i)}else e.key===p.SPACE&&this.updateRadio(r,o);this.updateTabIndex(),e.key===p.ENTER&&((a=this.form)==null||a.requestSubmit())}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),t=e.find(o=>o.checked),r=e.find(o=>!o.disabled);e.forEach(o=>{var i;const a=(i=o.shadowRoot)==null?void 0:i.querySelector("input");a&&(a.tabIndex=-1,(o===t||!t&&o===r)&&(a.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setActualFormValue()}render(){return u`
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
    `}};n.styles=[...m.styles,...E];let d=n;l([c({type:Boolean,reflect:!0})],d.prototype,"checked");l([c({type:Boolean,reflect:!0})],d.prototype,"readonly");l([c({type:Boolean,reflect:!0})],d.prototype,"autofocus");d.register(R);
