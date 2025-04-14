import{i as p,D as _,k as u}from"./lit-element-D5KKan5q.js";import{n,u as v}from"./index-C9z9WAEj.js";import{t as c}from"./if-defined-D5BV9-c0.js";import{a as f,h as k}from"./index-MA1r3zrt.js";import{D as y,F as b}from"./formfieldwrapper.component-DNKMXI01.js";import{D as g}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as x}from"./FormInternalsMixin-CSixOKbK.js";const A=[f,p`
  :host{
    --mdc-radio-inner-circle-size: 0.375rem;
    --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-radio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-radio-normal-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-radio-inner-circle-normal-background: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-radio-inner-circle-disabled-background: var(--mds-color-theme-inverted-text-primary-disabled);

    --mdc-radio-control-inactive-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-radio-control-inactive-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-radio-control-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-radio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);

    --mdc-radio-control-active-color: var(--mds-color-theme-control-active-normal);
    --mdc-radio-control-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-radio-control-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-radio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);

  }
  :host([readonly]) .mdc-radio__input,
  :host([disabled]) .mdc-radio__input,
  :host([disabled]) .mdc-label,
  :host([readonly]) .mdc-label{
    cursor: default;
  }

  .mdc-label {
    cursor: pointer;
  }

  :host([disabled]) .mdc-radio__label-text,
  :host([disabled]) .mdc-radio__help-text {
    color: var(--mdc-radio-text-disabled-color);
  }

  :host([disabled]) .mdc-radio__icon,
  :host([disabled]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-disabled-border-color);
    background: var(--mdc-radio-control-inactive-disabled-background);
  }

  :host([disabled][checked]) .mdc-radio__icon,
  :host([disabled][checked]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon {
    border: var(--mdc-radio-control-active-disabled-background);
    background: var(--mdc-radio-control-active-disabled-background);
  }

  :host([disabled][checked]) .mdc-radio__icon:after,
  :host([disabled][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after {
    background: var(--mdc-radio-inner-circle-disabled-background);
  }

  :host .mdc-radio__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 0.0625rem solid var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
    border-radius: 50%;
  }

  :host([checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-color);
    background-color: var(--mdc-radio-control-active-color);
  }

  :host([checked]) .mdc-radio__icon:after {
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--mdc-radio-inner-circle-size);
    height: var(--mdc-radio-inner-circle-size);
    border-radius: 50%;
    background: var(--mdc-radio-inner-circle-normal-background);
  }

  :host .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-hover);
  }

  :host([checked]) .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-hover-color);
    background-color: var(--mdc-radio-control-active-hover-color);
  }

  :host .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-pressed-color);
  }

  :host([checked]) .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-pressed-color);
    background-color: var(--mdc-radio-control-active-pressed-color);
  }

  :host([readonly]) .mdc-radio__icon,
  :host([readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
  }

  :host([readonly][checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
  }

  :host([readonly][checked]) .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:active .mdc-radio__icon:after {
    background-color: var(--mdc-radio-text-disabled-color);
  }

  .mdc-radio__container {
    display: flex;
    align-items: start;
    gap: 0.5rem;
  }
  .mdc-radio__icon-container {
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem 0;
    border-radius: 50%;
  }

  .mdc-radio__icon-container input{
    position: absolute;
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
  }
  
  .mdc-radio__icon-container .mdc-radio__icon:after {
    content: "";
    position: absolute;
    display: none;
  }

  .mdc-radio__label-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }
  :host::part(required-label){
    display: none;
  }

`,...k(!0)];var E=Object.defineProperty,s=(h,o,r,d)=>{for(var e=void 0,i=h.length-1,a;i>=0;i--)(a=h[i])&&(e=a(o,r,e)||e);return e&&E(o,r,e),e};const l=class l extends x(g(b)){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?u`<div class="mdc-radio__label-container">
      ${this.renderLabel()}
      ${this.renderHelperText()}
    </div>`:_}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(){this.updateTabIndex()}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}dispatchChangeEvent(o){const r=o.constructor;this.dispatchEvent(new r(o.type,o))}formResetCallback(){this.getAllRadiosWithinSameGroup().forEach(r=>{r.checked=!1}),this.updateComplete.then(()=>{this.setActualFormValue()}).catch(r=>{this.onerror&&this.onerror(r)})}formStateRestoreCallback(o){this.value===o&&o!==""&&(this.checked=!0)}setComponentValidity(o){o?this.internals.setValidity({}):this.requiredLabel&&!this.checked&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()),this.updateTabIndex()}setGroupValidity(o,r){this.updateComplete.then(()=>{o.forEach(d=>{d.setComponentValidity(r)})}).catch(d=>{this.onerror&&this.onerror(d)})}setActualFormValue(){let o="";this.checked?o=this.value?this.value:"on":o=null;const r=this.getAllRadiosWithinSameGroup();if(this.checked)this.setGroupValidity(r,!0);else{const d=r.some(a=>a.requiredLabel),e=!!r.find(a=>a.checked),i=d&&!e;this.setGroupValidity(r,!i)}this.internals.setFormValue(o)}handleChange(o){var e;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(i=>{var m;const a=(m=i.shadowRoot)==null?void 0:m.querySelector("input");a&&(i.checked=!1,a.checked=!1)}),this.checked=!0;const d=(e=this.shadowRoot)==null?void 0:e.querySelector("input");d&&(d.checked=!0),this.dispatchChangeEvent(o)}updateRadio(o,r,d){var e,i;(i=(e=o[r].shadowRoot)==null?void 0:e.querySelector("input"))==null||i.focus(),o[r].handleChange(d)}handleKeyDown(o){var i;if(this.disabled)return;const d=this.getAllRadiosWithinSameGroup().filter(a=>!a.disabled),e=d.indexOf(this);if(["ArrowDown","ArrowRight"].includes(o.key)){const a=(e+1)%d.length;this.updateRadio(d,a,o)}else if(["ArrowUp","ArrowLeft"].includes(o.key)){const a=(e-1+d.length)%d.length;this.updateRadio(d,a,o)}else o.key===" "&&this.updateRadio(d,e,o);this.updateTabIndex(),o.key==="Enter"&&((i=this.form)==null||i.requestSubmit())}updateTabIndex(){const o=this.getAllRadiosWithinSameGroup(),r=o.find(e=>e.checked),d=o.find(e=>!e.disabled);o.forEach(e=>{var a;const i=(a=e.shadowRoot)==null?void 0:a.querySelector("input");i&&(i.tabIndex=-1,(e===r||!r&&e===d)&&(i.tabIndex=0))})}update(o){super.update(o),o.has("checked")&&this.setActualFormValue()}render(){return u`
      <div class="mdc-radio__container">
        <div class="mdc-radio__icon-container mdc-focus-ring">
          <input
            id="${this.id}"
            type="radio"
            role="radio"
            ?autofocus="${this.autofocus}"
            name="${c(this.name)}"
            value="${c(this.value)}"
            ?required="${!!this.requiredLabel}"
            @change=${this.handleChange}
            @keydown=${this.handleKeyDown}
            ?checked=${this.checked}
            ?readonly=${this.readonly}
            ?disabled=${this.disabled}
            class="mdc-radio__input"
            aria-checked="${this.checked}"
            aria-describedby="${c(this.helpText?y.HELPER_TEXT_ID:"")}"
            aria-label="${this.dataAriaLabel??""}"
          />
          <span class="mdc-radio__icon"></span>
        </div>
        ${this.renderLabelAndHelperText()}
      </div>
    `}};l.styles=[...b.styles,...A];let t=l;s([n({type:Boolean,reflect:!0})],t.prototype,"checked");s([n({type:Boolean,reflect:!0})],t.prototype,"readonly");s([n({type:Boolean,reflect:!0})],t.prototype,"autofocus");const C=v.constructTagName("radio");t.register(C);export{C as T};
