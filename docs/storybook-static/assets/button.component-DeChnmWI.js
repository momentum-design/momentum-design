import{z as y,n as d,i as _,k as h}from"./iframe-D-08lnMy.js";import{D as s,B as v,a as E,b as p,I as O,P as A}from"./button.constants-DzGos4JS.js";import{R}from"./roles-CJI3JVG-.js";import{B as S}from"./buttonsimple.component-CR82t0Wb.js";import{g as w}from"./button.utils-rNW36Ji7.js";var C=Object.defineProperty,b=(c,o,l,r)=>{for(var t=void 0,e=c.length-1,a;e>=0;e--)(a=c[e])&&(t=a(o,l,t)||t);return t&&C(o,l,t),t};const F=c=>{class o extends c{constructor(){super(...arguments),this.variant=s.VARIANT,this.color=s.COLOR,this.typeInternal=s.TYPE_INTERNAL}setVariant(r){this.setAttribute("variant",Object.values(v).includes(r)?r:s.VARIANT)}setColor(r){!Object.values(E).includes(r)||this.variant===v.TERTIARY?this.setAttribute("color",`${s.COLOR}`):this.setAttribute("color",r)}setSize(r){const e=this.typeInternal===p.ICON?Object.values(O).includes(r)&&!(r===O[20]&&this.variant!==v.TERTIARY):Object.values(A).includes(r);this.setAttribute("size",e?`${r}`:`${s.SIZE}`)}inferButtonType(){var x,k,I,z,N,T;const r=(k=(x=this.shadowRoot)==null?void 0:x.querySelector("slot:not([name])"))==null?void 0:k.assignedNodes().filter(n=>{var i;return n.nodeType!==Node.TEXT_NODE||((i=n.textContent)==null?void 0:i.trim())}).length,t=(z=(I=this.shadowRoot)==null?void 0:I.querySelector('slot[name="prefix"]'))==null?void 0:z.assignedNodes().filter(n=>{var i;return n.nodeType!==Node.TEXT_NODE||((i=n.textContent)==null?void 0:i.trim())}).length,e=this.prefixIcon||t&&t>0,a=(T=(N=this.shadowRoot)==null?void 0:N.querySelector('slot[name="postfix"]'))==null?void 0:T.assignedNodes().filter(n=>{var i;return n.nodeType!==Node.TEXT_NODE||((i=n.textContent)==null?void 0:i.trim())}).length,g=this.postfixIcon||a&&a>0;r&&(e||g)?(this.typeInternal=p.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!r&&(e||g)?(this.typeInternal=p.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=p.PILL,this.setAttribute("data-btn-type","pill"))}}return b([d({type:String,attribute:"prefix-icon",reflect:!0})],o.prototype,"prefixIcon"),b([d({type:String,attribute:"postfix-icon",reflect:!0})],o.prototype,"postfixIcon"),b([d({type:String})],o.prototype,"variant"),b([d({type:String})],o.prototype,"color"),b([y()],o.prototype,"typeInternal"),o},B=_`
  :host {
    background-color: transparent;
    border-radius: 1.25rem;
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    outline: none;

    --mdc-button-primary-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-primary-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-primary-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-primary-pressed);
    --mdc-button-primary-disabled-background-color: var(--mds-color-theme-button-primary-disabled);
    --mdc-button-primary-disabled-color: var(--mds-color-theme-text-primary-disabled);

    --mdc-button-secondary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-button-secondary-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-button-secondary-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-button-secondary-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);

    --mdc-button-tertiary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-tertiary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-tertiary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-button-tertiary-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-button-tertiary-disabled-color: var(--mds-color-theme-text-primary-disabled);

    --mdc-button-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
    --mdc-button-active-hover-background-color: var(--mds-color-theme-button-secondary-active-hover);
    --mdc-button-active-pressed-background-color: var(--mds-color-theme-button-secondary-active-pressed);
    --mdc-button-active-disabled-background-color: var(--mds-color-theme-button-secondary-active-disabled);

    --mdc-button-line-height-size-40: var(--mds-font-lineheight-body-large);
    --mdc-button-line-height-size-32: var(--mds-font-lineheight-body-large);
    --mdc-button-line-height-size-28: var(--mds-font-lineheight-body-midsize);
    --mdc-button-line-height-size-24: var(--mds-font-lineheight-body-small);

    --mdc-button-prefix-icon-size: 1rem;
    --mdc-button-postfix-icon-size: 1rem;
  }

  :host([size='64']) {
    --mdc-button-prefix-icon-size: 2rem;
    --mdc-button-postfix-icon-size: 2rem;
  }

  :host([size='52']) {
    --mdc-button-prefix-icon-size: 1.75rem;
    --mdc-button-postfix-icon-size: 1.75rem;
  }

  :host([size='40']) {
    --mdc-button-prefix-icon-size: 1.25rem;
    --mdc-button-postfix-icon-size: 1.25rem;
  }

  /* Apply icon size for prefix and postfix icons */
  :host::part(prefix-icon) {
    --mdc-icon-size: var(--mdc-button-prefix-icon-size);
  }

  :host::part(postfix-icon) {
    --mdc-icon-size: var(--mdc-button-postfix-icon-size);
  }

  :host([active]) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
  }

  :host([active][color='default']:not([variant='primary'])) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    background: var(--mdc-button-active-background-color);
  }
  :host([active][color='default']:not([variant='primary']):hover) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    background: var(--mdc-button-active-hover-background-color);
  }
  :host([active][color='default']:not([variant='primary']):active),
  :host([active][color='default']:not([variant='primary']).pressed) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    background: var(--mdc-button-active-pressed-background-color);
  }
  :host([active][color='default']:not([variant='primary'])[disabled]),
  :host([active][color='default']:not([variant='primary'])[soft-disabled]) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    background: var(--mdc-button-active-disabled-background-color);
  }

  :host([variant='primary']) {
    background: var(--mdc-button-primary-background-color);
    color: var(--mdc-button-primary-color);
  }
  :host([variant='primary']:hover) {
    background: var(--mdc-button-primary-hover-background-color);
  }
  :host([variant='primary']:active),
  :host([variant='primary'].pressed) {
    background: var(--mdc-button-primary-pressed-background-color);
  }
  :host([variant='primary'][disabled]),
  :host([variant='primary'][soft-disabled]) {
    background: var(--mdc-button-primary-disabled-background-color);
    color: var(--mdc-button-primary-disabled-color);
    cursor: auto;
  }

  :host([variant='secondary']) {
    color: var(--mdc-button-secondary-color);
    border-color: var(--mdc-button-secondary-border-color);
  }
  :host([variant='secondary']:hover) {
    background: var(--mdc-button-secondary-hover-background-color);
  }
  :host([variant='secondary']:active),
  :host([variant='secondary'].pressed) {
    background: var(--mdc-button-secondary-pressed-background-color);
  }
  :host([variant='secondary'][disabled]),
  :host([variant='secondary'][soft-disabled]) {
    color: var(--mdc-button-primary-disabled-color);
    border-color: var(--mdc-button-secondary-disabled-border-color);
    background: var(--mdc-button-secondary-disabled-background-color);
    cursor: auto;
  }

  :host([variant='tertiary']) {
    border-color: transparent;
    color: var(--mdc-button-tertiary-color);
  }
  :host([variant='tertiary']:hover) {
    background: var(--mdc-button-tertiary-hover-background-color);
  }
  :host([variant='tertiary']:active),
  :host([variant='tertiary'].pressed) {
    background: var(--mdc-button-tertiary-pressed-background-color);
  }
  :host([variant='tertiary'][disabled]),
  :host([variant='tertiary'][soft-disabled]) {
    color: var(--mdc-button-tertiary-disabled-color);
    background: var(--mdc-button-tertiary-disabled-background-color);
    cursor: auto;
  }

  :host([size='64'][data-btn-type='icon']),
  :host([size='52'][data-btn-type='icon']),
  :host([size='40'][data-btn-type='icon']),
  :host([size='32'][data-btn-type='icon']),
  :host([size='28'][data-btn-type='icon']),
  :host([size='24'][data-btn-type='icon']) {
    border-radius: 6.25rem;
    aspect-ratio: 1;
    padding: unset;
  }
  :host([size='40']) {
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-40);
    padding: 0 1rem;
    gap: 0.5rem;
  }
  :host([size='32']) {
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-32);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size='28']) {
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mdc-button-line-height-size-28);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size='24']) {
    font-size: var(--mds-font-size-body-small);
    line-height: var(--mdc-button-line-height-size-24);
    padding: 0 0.625rem;
    gap: 0.25rem;
  }
  :host([size='20']) {
    padding: 0.0625rem;
    aspect-ratio: 1;
  }

  :host([color='accent']) {
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-accent-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-accent-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-accent-pressed);

    --mdc-button-secondary-color: var(--mds-color-theme-text-accent-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
  :host([color='positive']) {
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-join-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-join-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-join-pressed);

    --mdc-button-secondary-color: var(--mds-color-theme-text-success-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-join-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
  :host([color='negative']) {
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-button-cancel-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-button-cancel-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-button-cancel-pressed);

    --mdc-button-secondary-color: var(--mds-color-theme-text-error-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }
  :host([color='promotional']) {
    --mdc-button-primary-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-common-button-promotion-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-common-button-promotion-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-common-button-promotion-active);

    --mdc-button-secondary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-promotion-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([inverted][variant='primary'][color='default']) {
    --mdc-button-primary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-primary-background-color: var(--mds-color-theme-inverted-button-primary-normal);
    --mdc-button-primary-hover-background-color: var(--mds-color-theme-inverted-button-primary-hover);
    --mdc-button-primary-pressed-background-color: var(--mds-color-theme-inverted-button-primary-pressed);
    --mdc-button-primary-disabled-background-color: var(--mds-color-theme-inverted-button-primary-disabled);
    --mdc-button-primary-disabled-color: var(--mds-color-theme-inverted-text-primary-disabled);
  }

  :host([data-btn-type='pill'])::part(button-text),
  :host([data-btn-type='pill-with-icon'])::part(button-text) {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host::part(prefix-icon),
  :host::part(postfix-icon) {
    flex-shrink: 0;
  }
`,L=[B];var $=Object.defineProperty,u=(c,o,l,r)=>{for(var t=void 0,e=c.length-1,a;e>=0;e--)(a=c[e])&&(t=a(o,l,t)||t);return t&&$(o,l,t),t};const f=class f extends F(S){constructor(){super(...arguments),this.size=s.SIZE,this.inverted=s.INVERTED,this.role=R.BUTTON}update(o){super.update(o),o.has("active")&&this.inferFilledIconName(this.active),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&(this.inferFilledIconName(this.active),this.inferButtonType())}inferFilledIconName(o){o?(this.prefixIcon&&(this.prefixFilledIconName=`${w(this.prefixIcon)}-filled`),this.postfixIcon&&(this.postfixFilledIconName=`${w(this.postfixIcon)}-filled`)):(this.prefixFilledIconName=this.prefixIcon,this.postfixFilledIconName=this.postfixIcon)}render(){return h`
      <slot name="prefix" part="prefix">
        ${this.prefixFilledIconName?h` <mdc-icon
              name="${this.prefixFilledIconName}"
              part="prefix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </slot>
      <slot @slotchange=${this.inferButtonType} part="button-text"></slot>
      <slot name="postfix" part="postfix">
        ${this.postfixFilledIconName?h` <mdc-icon
              name="${this.postfixFilledIconName}"
              part="postfix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </slot>
    `}};f.styles=[...S.styles,...L];let m=f;u([d({type:Number})],m.prototype,"size");u([d({type:Boolean,reflect:!0})],m.prototype,"inverted");u([d({type:String,reflect:!0})],m.prototype,"role");u([y()],m.prototype,"prefixFilledIconName");u([y()],m.prototype,"postfixFilledIconName");export{m as B,F as a};
