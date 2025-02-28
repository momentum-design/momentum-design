import{i as b,D as u,k as v}from"./lit-element-CHllvULs.js";import{n as h,u as p}from"./index-HW6KrQZO.js";import{t as n}from"./if-defined-C4tJgJ33.js";import{N as f,V as k,v as y}from"./ValueMixin-B2saez_i.js";import{a as g,h as x}from"./index-CEbgplXA.js";import{D as w,F as m}from"./formfieldwrapper.component-CWIPqk6J.js";import{D as A}from"./DataAriaLabelMixin-vs_lw9aw.js";const E=[g,b`
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
`,...x(!0)];var $=Object.defineProperty,_=(l,o,a,d)=>{for(var r=void 0,e=l.length-1,i;e>=0;e--)(i=l[e])&&(r=i(o,a,r)||r);return r&&$(o,a,r),r};const t=class t extends f(k(A(m))){constructor(){super(),this.checked=!1,this.readonly=!1,this.internals=this.attachInternals(),this.id=`mdc-input-${y()}`}get form(){return this.internals.form}setFormValue(){this.internals.setFormValue(this.checked?this.value:null)}firstUpdated(){this.updateTabIndex()}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}dispatchChangeEvent(o){const a=o.constructor;this.dispatchEvent(new a(o.type,o))}handleChange(o){var r;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(e=>{var s;const i=(s=e.shadowRoot)==null?void 0:s.querySelector("input");i&&(e.checked=!1,i.checked=!1)}),this.checked=!0;const d=(r=this.shadowRoot)==null?void 0:r.querySelector("input");d&&(d.checked=!0),this.updateTabIndex(),this.dispatchChangeEvent(o)}updateRadio(o,a,d){var r,e;(e=(r=o[a].shadowRoot)==null?void 0:r.querySelector("input"))==null||e.focus(),o[a].handleChange(d)}handleKeyDown(o){if(this.disabled)return;const d=this.getAllRadiosWithinSameGroup().filter(e=>!e.disabled),r=d.indexOf(this);if(["ArrowDown","ArrowRight"].includes(o.key)){const e=(r+1)%d.length;this.updateRadio(d,e,o)}else if(["ArrowUp","ArrowLeft"].includes(o.key)){const e=(r-1+d.length)%d.length;this.updateRadio(d,e,o)}this.updateTabIndex()}updateTabIndex(){const o=this.getAllRadiosWithinSameGroup(),a=o.find(r=>r.checked),d=o.find(r=>!r.disabled);o.forEach(r=>{var i;const e=(i=r.shadowRoot)==null?void 0:i.querySelector("input");e&&(e.tabIndex=-1,(r===a||!a&&r===d)&&(e.tabIndex=0))})}update(o){super.update(o),o.has("checked")&&this.setFormValue()}render(){const o=this.helpText?this.renderHelperText():u;return v`
      <div class="mdc-radio__container">
        <div class="mdc-radio__icon-container mdc-focus-ring">
          <input
            id="${this.id}"
            type="radio"
            role="radio"
            name="${n(this.name)}"
            value="${n(this.value)}"
            @change=${this.handleChange}
            @keydown=${this.handleKeyDown}
            ?checked=${this.checked}
            ?readonly=${this.readonly}
            ?disabled=${this.disabled}
            class="mdc-radio__input"
            aria-checked="${this.checked}"
            aria-describedby="${n(this.helpText?w.HELPER_TEXT_ID:"")}"
            aria-label="${this.dataAriaLabel??""}"
          />
          <span class="mdc-radio__icon"></span>
        </div>
        <div class="mdc-radio__label-container">
          ${this.renderLabel()}
          ${o}
        </div>
      </div>
    `}};t.formAssociated=!0,t.styles=[...m.styles,...E];let c=t;_([h({type:Boolean,reflect:!0})],c.prototype,"checked");_([h({type:Boolean,reflect:!0})],c.prototype,"readonly");const T=p.constructTagName("radio");c.register(T);export{T};
