import"./index-BQ2PLB_I.js";import"./index-CBfQUMDE.js";import"./index-C1MefYaG.js";import{a3 as y,a2 as v,a4 as k,h as g,k as m,R as E,n as x}from"./iframe-ojQsro1_.js";import"./index-CPcbJ-7I.js";import{t as c}from"./if-defined-CVMw9D_D.js";import{F as f}from"./formfieldwrapper.component-NfHYx8j2.js";import{D as A}from"./DataAriaLabelMixin-BDsf-JHW.js";import{F as R}from"./FormInternalsMixin-TCbF8GsZ.js";import{D as T}from"./formfieldwrapper.constants-DLC9PYne.js";import{A as S}from"./buttonsimple.component-y4d96y3m.js";import{K as $,a as C,A as r,N as w}from"./KeyDownHandledMixin-CwWe2bID.js";import{T as D}from"./radio.constants-ajeGeiUW.js";const I=[y,v`
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
  `,...k(!0)];var F=Object.defineProperty,V=(h,i,e,o)=>{for(var t=void 0,s=h.length-1,a;s>=0;s--)(a=h[s])&&(t=a(i,e,t)||t);return t&&F(i,e,t),t};const l=class l extends $(C(S(R(A(f))))){constructor(){super(...arguments),this.checked=!1,this.renderLabelAndHelperText=()=>this.label?m`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:g}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(i){this.updateTabIndex(),this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(i)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(e=>{e.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(e=>{this.onerror&&this.onerror(e)})}formStateRestoreCallback(i){this.value===i&&i!==""&&(this.checked=!0)}setComponentValidity(i){i?this.internals.setValidity({}):this.required&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(i,e){this.updateComplete.then(()=>{i.forEach(o=>{o.setComponentValidity(e)})}).catch(o=>{this.onerror&&this.onerror(o)})}setActualFormValue(){let i="";this.checked?i=this.value?this.value:"on":i=null;const e=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(e,!0);else{const o=e.some(a=>a.required),t=!!e.find(a=>a.checked),s=o&&!t;this.setGroupValidity(e,!s)}this.internals.setFormValue(i)}handleChange(){var o;if(this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(t=>{var a;const s=(a=t.shadowRoot)==null?void 0:a.querySelector("input");s&&(t.checked=!1,s.checked=!1)}),this.checked=!0;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("input");e&&(e.checked=!0),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}click(){super.click(),this.handleChange()}updateRadio(i,e){var o,t;(t=(o=i[e].shadowRoot)==null?void 0:o.querySelector("input"))==null||t.focus(),i[e].handleChange()}handleKeyDown(i){var a;if(this.disabled)return;const e=this.getActionForKeyEvent(i);(this.readonly||this.softDisabled)&&e===r.SPACE&&i.preventDefault();const t=this.getAllRadiosWithinSameGroup().filter(d=>!d.disabled),s=t.indexOf(this);if(this.getKeyboardNavMode()!==w.DEFAULT){e===r.ENTER&&(this.updateRadio(t,s),this.keyDownEventHandled()),this.getAllRadiosWithinSameGroup().forEach(b=>{var p;const u=(p=b.shadowRoot)==null?void 0:p.querySelector("input");u&&(u.tabIndex=0)});return}if(e===r.DOWN||e===r.RIGHT){const d=(s+1)%t.length;this.updateRadio(t,d)}else if(e===r.UP||e===r.LEFT){const d=(s-1+t.length)%t.length;this.updateRadio(t,d)}else e===r.SPACE&&this.updateRadio(t,s);this.updateTabIndex(),e===r.ENTER&&((a=this.form)==null||a.requestSubmit())}updateTabIndex(){const i=this.getAllRadiosWithinSameGroup(),e=i.find(t=>t.checked),o=i.find(t=>!t.disabled);i.forEach(t=>{var a;const s=(a=t.shadowRoot)==null?void 0:a.querySelector("input");s&&(s.tabIndex=-1,(t===e||!e&&t===o)&&(s.tabIndex=0))})}update(i){super.update(i),i.has("checked")&&this.setActualFormValue()}render(){return m`
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
          role="${E.RADIO}"
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
          aria-describedby="${c(this.helpText?T.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `}};l.styles=[...f.styles,...I];let n=l;V([x({type:Boolean,reflect:!0})],n.prototype,"checked");n.register(D);
