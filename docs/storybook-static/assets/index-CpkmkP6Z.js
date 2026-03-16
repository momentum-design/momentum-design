import"./index-BIIJaanJ.js";import"./index-DHTL7P3T.js";import"./index-Di_K_AKp.js";import{a3 as p,a2 as m,ab as f,a8 as b,R as v,k as g,n as k}from"./iframe-Di3vHc7R.js";import"./index-CEEHqXRO.js";import{F as h}from"./formfieldwrapper.component-Cd_ZNgO7.js";import{F as y}from"./FormInternalsMixin-BvSnqDU7.js";import{A}from"./buttonsimple.component-D1rOXtv-.js";import{K as x,a as E,A as o,N as u}from"./KeyDownHandledMixin-y4wmVPeu.js";import{T as C}from"./radio.constants-Dt9Z7VxD.js";const R=[p,m`
    :host {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 0.5rem;
    }

    :host::part(radio-indicator) {
      flex: none;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
    }

    :host::part(label-text) {
      display: contents;
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

    :host(:focus-within),
    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible)::part(radio-indicator) {
      outline: none;
    }
    :host([disabled]:focus) {
      box-shadow: none;
    }

    :host(:focus-within)::part(radio-indicator) {
      position: relative;
      box-shadow: ${f};
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host(:focus-visible)::part(radio-indicator) {
        outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
      }
    }
  `,...b(!0)];var S=Object.defineProperty,I=(c,e,t,a)=>{for(var s=void 0,i=c.length-1,r;i>=0;i--)(r=c[i])&&(s=r(e,t,s)||s);return s&&S(e,t,s),s};const l=class l extends x(E(A(y(h)))){constructor(){super(),this.checked=!1,this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown)}connectedCallback(){super.connectedCallback(),this.role=v.RADIO,this.shouldRenderLabel=!1,this.helpTextType=void 0,this.toggletipPlacement=void 0,this.toggletipStrategy=void 0,this.updateAriaLabel()}firstUpdated(e){this.updateTabIndex(),this.autoFocusOnMount&&(this.elementToAutoFocus=this),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(t=>{t.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(t=>{this.onerror&&this.onerror(t)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&this.setValidity(),this.updateTabIndex()}setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(a=>a.setComponentValidity(t))}).catch(a=>{var s;return(s=this.onerror)==null?void 0:s.call(this,a)})}setActualFormValue(){const e=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(e,!0),this.internals.setFormValue(this.value||"on");else{const t=e.some(i=>i.required),a=e.some(i=>i.checked),s=t&&!a;this.setGroupValidity(e,!s),this.internals.setFormValue(null)}}handleChange(e=!1){if(this.checked||this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(a=>{a.checked=!1}),this.checked=!0,e&&super.click(),this.emitCheckedChangeEvent()}click(){this.handleChange(!0)}updateRadio(e,t){const a=e[t];a.focus(),a.handleChange()}handleClick(){this.handleChange()}emitCheckedChangeEvent(){this.checked&&(this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}handleKeyDown(e){var r;if(this.disabled)return;const t=this.getActionForKeyEvent(e);(this.readonly||this.softDisabled)&&t===o.SPACE&&e.preventDefault();const s=this.getAllRadiosWithinSameGroup().filter(d=>!d.disabled),i=s.indexOf(this);if(this.getKeyboardNavMode()===u.SPATIAL){t===o.ENTER&&(this.updateRadio(s,i),this.keyDownEventHandled()),this.updateTabIndex();return}if(t===o.DOWN||t===o.RIGHT){const d=(i+1)%s.length;this.updateRadio(s,d)}else if(t===o.UP||t===o.LEFT){const d=(i-1+s.length)%s.length;this.updateRadio(s,d)}else t===o.SPACE&&this.updateRadio(s,i);this.updateTabIndex(),t===o.ENTER&&((r=this.form)==null||r.requestSubmit())}updateTabIndex(){const e=this.getKeyboardNavMode()===u.SPATIAL,t=this.getAllRadiosWithinSameGroup(),a=t.find(i=>i.checked),s=t.find(i=>!i.disabled);t.forEach(i=>{i.tabIndex=-1,(e||i===a||!a&&i===s)&&(i.tabIndex=0)})}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked.toString(),this.setActualFormValue()),e.has("label")&&this.updateAriaLabel()}updateAriaLabel(){!this.ariaLabel&&this.ariaLabel!==this.label&&(this.ariaLabel=this.label||"")}setValidity(){this.required&&!this.checked&&this.validationMessage&&this.internals.setValidity({valueMissing:!0,customError:!0},this.validationMessage,this),this.internals.setValidity({})}render(){return g`
      <slot name="indicator">
        <mdc-staticradio
          part="radio-indicator"
          role="presentation"
          class="mdc-focus-ring"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?soft-disabled="${this.softDisabled}"
        >
        </mdc-staticradio>
      </slot>
      <div part="label-text">
        <slot name="label">${this.renderLabelElement()}</slot>
      </div>
    `}};l.styles=[...h.styles,...R];let n=l;I([k({type:Boolean,reflect:!0})],n.prototype,"checked");n.register(C);
