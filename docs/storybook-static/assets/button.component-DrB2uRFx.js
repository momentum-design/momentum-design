import{$ as y,a0 as s,B as u,a as _,a1 as v,I as S,P as E,n as d,S as A,W as R,k as b}from"./iframe-D6lHhKC3.js";import{B as O}from"./buttonsimple.component-X_w4hL51.js";import{g as w}from"./button.utils-rNW36Ji7.js";var C=Object.defineProperty,h=(c,t,l,r)=>{for(var o=void 0,e=c.length-1,a;e>=0;e--)(a=c[e])&&(o=a(t,l,o)||o);return o&&C(t,l,o),o};const F=c=>{class t extends c{constructor(){super(...arguments),this.variant=s.VARIANT,this.color=s.COLOR,this.typeInternal=s.TYPE_INTERNAL}setVariant(r){this.setAttribute("variant",Object.values(u).includes(r)?r:s.VARIANT)}setColor(r){!Object.values(_).includes(r)||this.variant===u.TERTIARY?this.setAttribute("color",`${s.COLOR}`):this.setAttribute("color",r)}setSize(r){const e=this.typeInternal===v.ICON?Object.values(S).includes(r)&&!(r===S[20]&&this.variant!==u.TERTIARY):Object.values(E).includes(r);this.setAttribute("size",e?`${r}`:`${s.SIZE}`)}inferButtonType(){var x,I,k,z,N,T;const r=(I=(x=this.shadowRoot)==null?void 0:x.querySelector("slot:not([name])"))==null?void 0:I.assignedNodes().filter(n=>{var i;return n.nodeType!==Node.TEXT_NODE||((i=n.textContent)==null?void 0:i.trim())}).length,o=(z=(k=this.shadowRoot)==null?void 0:k.querySelector('slot[name="prefix"]'))==null?void 0:z.assignedNodes().filter(n=>{var i;return n.nodeType!==Node.TEXT_NODE||((i=n.textContent)==null?void 0:i.trim())}).length,e=this.prefixIcon||o&&o>0,a=(T=(N=this.shadowRoot)==null?void 0:N.querySelector('slot[name="postfix"]'))==null?void 0:T.assignedNodes().filter(n=>{var i;return n.nodeType!==Node.TEXT_NODE||((i=n.textContent)==null?void 0:i.trim())}).length,g=this.postfixIcon||a&&a>0;r&&(e||g)?(this.typeInternal=v.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!r&&(e||g)?(this.typeInternal=v.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=v.PILL,this.setAttribute("data-btn-type","pill"))}}return h([d({type:String,attribute:"prefix-icon",reflect:!0})],t.prototype,"prefixIcon"),h([d({type:String,attribute:"postfix-icon",reflect:!0})],t.prototype,"postfixIcon"),h([d({type:String})],t.prototype,"variant"),h([d({type:String})],t.prototype,"color"),h([y()],t.prototype,"typeInternal"),t},$=A`
  :host {
    --mdc-button-prefix-icon-size: 1rem;
    --mdc-button-postfix-icon-size: 1rem;
    --mdc-button-line-height: var(--mds-font-lineheight-body-large);

    background: var(
      --mdc-button-background
    ); /* Using background instead of background-color since gradients are not supported in background-color */
    border-color: var(--mdc-button-border-color);
    border-radius: 1.25rem;
    color: var(--mdc-button-text-color);
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    outline: none;
    line-height: var(--mdc-button-line-height);
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
    --mdc-button-background: var(--mds-color-theme-button-secondary-active-normal);
  }
  :host([active][color='default']:not([variant='primary']):hover) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    --mdc-button-background: var(--mds-color-theme-button-secondary-active-hover);
  }
  :host([active][color='default']:not([variant='primary']):active),
  :host([active][color='default']:not([variant='primary']).pressed) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    --mdc-button-background: var(--mds-color-theme-button-secondary-active-pressed);
  }
  :host([active][color='default']:not([variant='primary'])[disabled]),
  :host([active][color='default']:not([variant='primary'])[soft-disabled]) {
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    --mdc-button-background: var(--mds-color-theme-button-secondary-active-disabled);
  }

  :host([variant='primary']) {
    --mdc-button-background: var(--mds-color-theme-button-primary-normal);
    --mdc-button-text-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  :host([variant='primary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-primary-hover);
  }
  :host([variant='primary']:active),
  :host([variant='primary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-primary-pressed);
  }

  :host([variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-button-normal);
  }
  :host([variant='secondary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([variant='secondary']:active),
  :host([variant='secondary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([variant='tertiary']) {
    --mdc-button-border-color: transparent;
    --mdc-button-text-color: var(--mds-color-theme-text-primary-normal);
  }
  :host([variant='tertiary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([variant='tertiary']:active),
  :host([variant='tertiary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
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
    padding: 0 1rem;
    gap: 0.5rem;
  }
  :host([size='32']) {
    font-size: var(--mds-font-size-body-large);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size='28']) {
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mds-font-lineheight-body-midsize);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([size='24']) {
    font-size: var(--mds-font-size-body-small);
    line-height: var(--mds-font-lineheight-body-small);
    padding: 0 0.625rem;
    gap: 0.25rem;
  }
  :host([size='20']) {
    padding: 0.0625rem;
    aspect-ratio: 1;
  }

  :host([color='accent'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-button-accent-normal);
  }
  :host([color='accent'][variant='primary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-accent-hover);
  }
  :host([color='accent'][variant='primary']:active),
  :host([color='accent'][variant='primary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-accent-pressed);
  }

  :host([color='accent'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-accent-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-theme-normal);
  }
  :host([color='accent'][variant='secondary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='accent'][variant='secondary']:active),
  :host([color='accent'][variant='secondary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([color='positive'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-button-join-normal);
  }
  :host([color='positive'][variant='primary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-join-hover);
  }
  :host([color='positive'][variant='primary']:active),
  :host([color='positive'][variant='primary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-join-pressed);
  }

  :host([color='positive'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-success-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-join-normal);
  }
  :host([color='positive'][variant='secondary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='positive'][variant='secondary']:active),
  :host([color='positive'][variant='secondary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([color='negative'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-button-cancel-normal);
  }
  :host([color='negative'][variant='primary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-cancel-hover);
  }
  :host([color='negative'][variant='primary']:active),
  :host([color='negative'][variant='primary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-cancel-pressed);
  }

  :host([color='negative'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-error-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-cancel-normal);
  }
  :host([color='negative'][variant='secondary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='negative'][variant='secondary']:active),
  :host([color='negative'][variant='secondary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([color='promotional'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-common-button-promotion-normal);
  }
  :host([color='promotional'][variant='primary']:hover) {
    --mdc-button-background: var(--mds-color-theme-common-button-promotion-hover);
  }
  :host([color='promotional'][variant='primary']:active),
  :host([color='promotional'][variant='primary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-common-button-promotion-active);
  }

  :host([color='promotional'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-promotion-normal);
  }
  :host([color='promotional'][variant='secondary']:hover) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='promotional'][variant='secondary']:active),
  :host([color='promotional'][variant='secondary'].pressed) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([inverted][variant='primary'][color='default']) {
    --mdc-button-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-inverted-button-primary-normal);
  }

  :host([inverted][variant='primary'][color='default']:hover) {
    --mdc-button-background: var(--mds-color-theme-inverted-button-primary-hover);
  }

  :host([inverted][variant='primary'][color='default']:active),
  :host([inverted][variant='primary'][color='default'].pressed) {
    --mdc-button-background: var(--mds-color-theme-inverted-button-primary-pressed);
  }
  :host([inverted][variant='primary'][color='default'][disabled]),
  :host([inverted][variant='primary'][color='default'][soft-disabled]) {
    --mdc-button-background: var(--mds-color-theme-inverted-button-primary-disabled);
    --mdc-button-text-color: var(--mds-color-theme-inverted-text-primary-disabled);
    cursor: auto;
  }

  :host([variant='primary'][disabled]),
  :host([variant='primary'][soft-disabled]) {
    --mdc-button-background: var(--mds-color-theme-button-primary-disabled);
    --mdc-button-text-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
  :host([variant='secondary'][disabled]),
  :host([variant='secondary'][soft-disabled]) {
    --mdc-button-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-button-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-button-background: var(--mds-color-theme-button-secondary-disabled);
    cursor: auto;
  }
  :host([variant='tertiary'][disabled]),
  :host([variant='tertiary'][soft-disabled]) {
    --mdc-button-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-button-background: var(--mds-color-theme-button-secondary-disabled);
    cursor: auto;
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
`,B=[$];var L=Object.defineProperty,p=(c,t,l,r)=>{for(var o=void 0,e=c.length-1,a;e>=0;e--)(a=c[e])&&(o=a(t,l,o)||o);return o&&L(t,l,o),o};const f=class f extends F(O){constructor(){super(...arguments),this.size=s.SIZE,this.inverted=s.INVERTED,this.role=R.BUTTON}update(t){super.update(t),t.has("active")&&this.inferFilledIconName(this.active),t.has("size")&&this.setSize(this.size),t.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),t.has("color")&&this.setColor(this.color),t.has("typeInternal")&&this.setSize(this.size),(t.has("prefixIcon")||t.has("postfixIcon"))&&(this.inferFilledIconName(this.active),this.inferButtonType())}inferFilledIconName(t){t?(this.prefixIcon&&(this.prefixFilledIconName=`${w(this.prefixIcon)}-filled`),this.postfixIcon&&(this.postfixFilledIconName=`${w(this.postfixIcon)}-filled`)):(this.prefixFilledIconName=this.prefixIcon,this.postfixFilledIconName=this.postfixIcon)}render(){return b`
      <slot name="prefix" part="prefix">
        ${this.prefixFilledIconName?b` <mdc-icon
              name="${this.prefixFilledIconName}"
              part="prefix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </slot>
      <slot @slotchange=${this.inferButtonType} part="button-text"></slot>
      <slot name="postfix" part="postfix">
        ${this.postfixFilledIconName?b` <mdc-icon
              name="${this.postfixFilledIconName}"
              part="postfix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </slot>
    `}};f.styles=[...O.styles,...B];let m=f;p([d({type:Number})],m.prototype,"size");p([d({type:Boolean,reflect:!0})],m.prototype,"inverted");p([d({type:String,reflect:!0})],m.prototype,"role");p([y()],m.prototype,"prefixFilledIconName");p([y()],m.prototype,"postfixFilledIconName");export{m as B,F as a};
