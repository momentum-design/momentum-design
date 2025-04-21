import{i as f,k as m}from"./lit-element-D5KKan5q.js";import{n as s}from"./index-C9z9WAEj.js";import{r as g}from"./state-CSSggq2n.js";import{a as p}from"./buttonsimple.component-w9K_m-nk.js";import{D as e,B as l,b as d,I as v,P as k,a as x,T as I}from"./button.constants-BVKjykrp.js";import{g as y}from"./button.utils-rNW36Ji7.js";import"./index-YCYUWtyh.js";const z=f`
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
`,T=[z];var N=Object.defineProperty,a=(u,o,n,i)=>{for(var r=void 0,c=u.length-1,h;c>=0;c--)(h=u[c])&&(r=h(o,n,r)||r);return r&&N(o,n,r),r};const b=class b extends p{constructor(){super(...arguments),this.variant=e.VARIANT,this.size=e.SIZE,this.color=e.COLOR,this.role="button",this.typeInternal=e.TYPE_INTERNAL}update(o){super.update(o),o.has("active")&&this.modifyIconName(this.active),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}modifyIconName(o){o?(this.prefixIcon&&(this.prevPrefixIcon=this.prefixIcon,this.prefixIcon=`${y(this.prefixIcon)}-filled`),this.postfixIcon&&(this.prevPostfixIcon=this.postfixIcon,this.postfixIcon=`${y(this.postfixIcon)}-filled`)):(this.prevPrefixIcon&&(this.prefixIcon=this.prevPrefixIcon),this.prevPostfixIcon&&(this.postfixIcon=this.prevPostfixIcon))}setVariant(o){this.setAttribute("variant",Object.values(l).includes(o)?o:e.VARIANT)}setSize(o){const i=this.typeInternal===d.ICON?Object.values(v).includes(o)&&!(o===v[20]&&this.variant!==l.TERTIARY):Object.values(k).includes(o);this.setAttribute("size",i?`${o}`:`${e.SIZE}`)}setColor(o){!Object.values(x).includes(o)||this.variant===l.TERTIARY?this.setAttribute("color",`${e.COLOR}`):this.setAttribute("color",o)}inferButtonType(){var n,i;const o=(i=(n=this.shadowRoot)==null?void 0:n.querySelector("slot"))==null?void 0:i.assignedNodes().filter(r=>{var c;return r.nodeType!==Node.TEXT_NODE||((c=r.textContent)==null?void 0:c.trim())}).length;o&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=d.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!o&&(this.prefixIcon||this.postfixIcon)?(this.typeInternal=d.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=d.PILL,this.setAttribute("data-btn-type","pill"))}render(){return m`
      ${this.prefixIcon?m` <mdc-icon name="${this.prefixIcon}" part="prefix-icon"></mdc-icon>`:""}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon?m` <mdc-icon name="${this.postfixIcon}" part="postfix-icon"></mdc-icon>`:""}
    `}};b.styles=[...p.styles,...T];let t=b;a([s({type:String,attribute:"prefix-icon",reflect:!0})],t.prototype,"prefixIcon");a([s({type:String,attribute:"postfix-icon",reflect:!0})],t.prototype,"postfixIcon");a([s({type:String})],t.prototype,"variant");a([s({type:Number})],t.prototype,"size");a([s({type:String})],t.prototype,"color");a([s({type:String,reflect:!0})],t.prototype,"role");a([g()],t.prototype,"typeInternal");t.register(I);export{t as B};
