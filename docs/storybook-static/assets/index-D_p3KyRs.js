import"./index-D7xTBYHY.js";import"./index-Ty40rxEB.js";import"./index-pv5Lu9M7.js";import{a3 as m,a2 as p,a8 as f,R as b,k as v,n as g}from"./iframe-BMQAO-1d.js";import"./index-Dgy9qw7e.js";import{F as h}from"./formfieldwrapper.component-BsecmuTY.js";import{F as k}from"./FormInternalsMixin-B-_ePyXw.js";import{A as y}from"./buttonsimple.component-CywH7ZQb.js";import{K as A,a as E,A as o,N as u}from"./KeyDownHandledMixin-D5ID8XRZ.js";import{T as C}from"./radio.constants-DFF8TDbr.js";const x=[m,p`
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

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host(:focus-within)::part(radio-indicator) {
        outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
      }
    }
  `,...f(!0,"parent-to-child")];var R=Object.defineProperty,S=(c,e,t,a)=>{for(var i=void 0,s=c.length-1,r;s>=0;s--)(r=c[s])&&(i=r(e,t,i)||i);return i&&R(e,t,i),i};const l=class l extends A(E(y(k(h)))){constructor(){super(),this.checked=!1,this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown)}connectedCallback(){super.connectedCallback(),this.role=b.RADIO,this.shouldRenderLabel=!1,this.helpTextType=void 0,this.toggletipPlacement=void 0,this.toggletipStrategy=void 0,this.updateAriaLabel()}firstUpdated(e){this.updateTabIndex(),this.autoFocusOnMount&&(this.elementToAutoFocus=this),super.firstUpdated(e)}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(t=>{t.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(t=>{this.onerror&&this.onerror(t)})}formStateRestoreCallback(e){this.value===e&&e!==""&&(this.checked=!0)}setComponentValidity(e){e?this.internals.setValidity({}):this.required&&!this.checked&&this.setValidity(),this.updateTabIndex()}setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(a=>a.setComponentValidity(t))}).catch(a=>{var i;return(i=this.onerror)==null?void 0:i.call(this,a)})}setActualFormValue(){const e=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(e,!0),this.internals.setFormValue(this.value||"on");else{const t=e.some(s=>s.required),a=e.some(s=>s.checked),i=t&&!a;this.setGroupValidity(e,!i),this.internals.setFormValue(null)}}handleChange(e=!1){if(this.checked||this.disabled||this.readonly||this.softDisabled)return;this.getAllRadiosWithinSameGroup().forEach(a=>{a.checked=!1}),this.checked=!0,e&&super.click(),this.emitCheckedChangeEvent()}click(){this.handleChange(!0)}updateRadio(e,t){const a=e[t];a.focus(),a.handleChange()}handleClick(){this.handleChange()}emitCheckedChangeEvent(){this.checked&&(this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}handleKeyDown(e){var r;if(this.disabled)return;const t=this.getActionForKeyEvent(e);(this.readonly||this.softDisabled)&&t===o.SPACE&&e.preventDefault();const i=this.getAllRadiosWithinSameGroup().filter(d=>!d.disabled),s=i.indexOf(this);if(this.getKeyboardNavMode()===u.SPATIAL){t===o.ENTER&&(this.updateRadio(i,s),this.keyDownEventHandled()),this.updateTabIndex();return}if(t===o.DOWN||t===o.RIGHT){const d=(s+1)%i.length;this.updateRadio(i,d)}else if(t===o.UP||t===o.LEFT){const d=(s-1+i.length)%i.length;this.updateRadio(i,d)}else t===o.SPACE&&this.updateRadio(i,s);this.updateTabIndex(),t===o.ENTER&&((r=this.form)==null||r.requestSubmit())}updateTabIndex(){const e=this.getKeyboardNavMode()===u.SPATIAL,t=this.getAllRadiosWithinSameGroup(),a=t.find(s=>s.checked),i=t.find(s=>!s.disabled);t.forEach(s=>{s.tabIndex=-1,(e||s===a||!a&&s===i)&&(s.tabIndex=0)})}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked.toString(),this.setActualFormValue()),e.has("label")&&this.updateAriaLabel()}updateAriaLabel(){!this.ariaLabel&&this.ariaLabel!==this.label&&(this.ariaLabel=this.label||"")}setValidity(){this.required&&!this.checked&&this.validationMessage&&this.internals.setValidity({valueMissing:!0,customError:!0},this.validationMessage,this),this.internals.setValidity({})}handleIndicatorSlotChange(e){const a=e.target.assignedNodes({flatten:!0}).filter(i=>i.nodeType===Node.ELEMENT_NODE);this.classList.toggle("mdc-focus-ring",a.length>0)}render(){return v`
      <slot name="indicator" @slotchange=${this.handleIndicatorSlotChange}>
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
    `}};l.styles=[...h.styles,...x];let n=l;S([g({type:Boolean,reflect:!0})],n.prototype,"checked");n.register(C);
