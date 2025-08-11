import{i as x,k as u}from"./lit-element-D5KKan5q.js";import{n as c}from"./provider.component-BaQC7CJH.js";import{r as h}from"./state-C0WmBOuD.js";import{D as n,B as p,a as I,b,I as f,P as z}from"./button.constants-BpS-4nLb.js";import{R as N}from"./roles-DU0xbrD4.js";import{B as g}from"./buttonsimple.component-I-gcvU8_.js";import{g as k}from"./button.utils-rNW36Ji7.js";var T=Object.defineProperty,m=(i,o,d,r)=>{for(var t=void 0,e=i.length-1,a;e>=0;e--)(a=i[e])&&(t=a(o,d,t)||t);return t&&T(o,d,t),t};const O=i=>{class o extends i{constructor(){super(...arguments),this.variant=n.VARIANT,this.color=n.COLOR,this.typeInternal=n.TYPE_INTERNAL}setVariant(r){this.setAttribute("variant",Object.values(p).includes(r)?r:n.VARIANT)}setColor(r){!Object.values(I).includes(r)||this.variant===p.TERTIARY?this.setAttribute("color",`${n.COLOR}`):this.setAttribute("color",r)}setSize(r){const e=this.typeInternal===b.ICON?Object.values(f).includes(r)&&!(r===f[20]&&this.variant!==p.TERTIARY):Object.values(z).includes(r);this.setAttribute("size",e?`${r}`:`${n.SIZE}`)}inferButtonType(){var t,e;const r=(e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"))==null?void 0:e.assignedNodes().filter(a=>{var y;return a.nodeType!==Node.TEXT_NODE||((y=a.textContent)==null?void 0:y.trim())}).length;r&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=b.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!r&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=b.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=b.PILL,this.setAttribute("data-btn-type","pill"))}}return m([c({type:String,attribute:"prefix-icon",reflect:!0})],o.prototype,"prefixIcon"),m([c({type:String,attribute:"postfix-icon",reflect:!0})],o.prototype,"postfixIcon"),m([c({type:String})],o.prototype,"variant"),m([c({type:String})],o.prototype,"color"),m([h()],o.prototype,"typeInternal"),o},S=x`
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
`,w=[S];var A=Object.defineProperty,l=(i,o,d,r)=>{for(var t=void 0,e=i.length-1,a;e>=0;e--)(a=i[e])&&(t=a(o,d,t)||t);return t&&A(o,d,t),t};const v=class v extends O(g){constructor(){super(...arguments),this.size=n.SIZE,this.inverted=n.INVERTED,this.role=N.BUTTON}update(o){super.update(o),o.has("active")&&this.inferFilledIconName(this.active),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&(this.inferFilledIconName(this.active),this.inferButtonType())}inferFilledIconName(o){o?(this.prefixIcon&&(this.prefixFilledIconName=`${k(this.prefixIcon)}-filled`),this.postfixIcon&&(this.postfixFilledIconName=`${k(this.postfixIcon)}-filled`)):(this.prefixFilledIconName=this.prefixIcon,this.postfixFilledIconName=this.postfixIcon)}render(){return u`
      ${this.prefixFilledIconName?u` <mdc-icon
            name="${this.prefixFilledIconName}"
            part="prefix-icon"
            length-unit="rem"
          ></mdc-icon>`:""}
      <slot @slotchange=${this.inferButtonType} part="button-text"></slot>
      ${this.postfixFilledIconName?u` <mdc-icon
            name="${this.postfixFilledIconName}"
            part="postfix-icon"
            length-unit="rem"
          ></mdc-icon>`:""}
    `}};v.styles=[...g.styles,...w];let s=v;l([c({type:Number})],s.prototype,"size");l([c({type:Boolean,reflect:!0})],s.prototype,"inverted");l([c({type:String,reflect:!0})],s.prototype,"role");l([h()],s.prototype,"prefixFilledIconName");l([h()],s.prototype,"postfixFilledIconName");export{s as B,O as a};
