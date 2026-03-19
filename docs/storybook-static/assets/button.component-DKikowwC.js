import{n as l,a4 as f,a5 as i,B as v,b as E,a6 as p,I as O,P as _,a2 as A,a7 as R,R as C,k as u,t as F}from"./iframe-CAHFTIFZ.js";import{B as S}from"./buttonsimple.component-DwRE44XV.js";import{g as w}from"./button.utils-rNW36Ji7.js";var B=Object.defineProperty,h=(c,t,m,e)=>{for(var o=void 0,r=c.length-1,a;r>=0;r--)(a=c[r])&&(o=a(t,m,o)||o);return o&&B(t,m,o),o};const L=c=>{class t extends c{constructor(){super(...arguments),this.variant=i.VARIANT,this.color=i.COLOR,this.typeInternal=i.TYPE_INTERNAL}setVariant(e){this.setAttribute("variant",Object.values(v).includes(e)?e:i.VARIANT)}setColor(e){!Object.values(E).includes(e)||this.variant===v.TERTIARY?this.setAttribute("color",`${i.COLOR}`):this.setAttribute("color",e)}setSize(e){const r=this.typeInternal===p.ICON?Object.values(O).includes(e)&&!(e===O[20]&&this.variant!==v.TERTIARY):Object.values(_).includes(e);this.setAttribute("size",r?`${e}`:`${i.SIZE}`)}inferButtonType(){var x,I,k,z,N,T;const e=(I=(x=this.shadowRoot)==null?void 0:x.querySelector("slot:not([name])"))==null?void 0:I.assignedNodes().filter(n=>{var s;return n.nodeType!==Node.TEXT_NODE||((s=n.textContent)==null?void 0:s.trim())}).length,o=(z=(k=this.shadowRoot)==null?void 0:k.querySelector('slot[name="prefix"]'))==null?void 0:z.assignedNodes().filter(n=>{var s;return n.nodeType!==Node.TEXT_NODE||((s=n.textContent)==null?void 0:s.trim())}).length,r=this.prefixIcon||o&&o>0,a=(T=(N=this.shadowRoot)==null?void 0:N.querySelector('slot[name="postfix"]'))==null?void 0:T.assignedNodes().filter(n=>{var s;return n.nodeType!==Node.TEXT_NODE||((s=n.textContent)==null?void 0:s.trim())}).length,g=this.postfixIcon||a&&a>0;e&&(r||g)?(this.typeInternal=p.PILL_WITH_ICON,this.setAttribute("data-btn-type","pill-with-icon")):!e&&(r||g)?(this.typeInternal=p.ICON,this.setAttribute("data-btn-type","icon")):(this.typeInternal=p.PILL,this.setAttribute("data-btn-type","pill"))}}return h([l({type:String,attribute:"prefix-icon",reflect:!0})],t.prototype,"prefixIcon"),h([l({type:String,attribute:"postfix-icon",reflect:!0})],t.prototype,"postfixIcon"),h([l({type:String})],t.prototype,"variant"),h([l({type:String})],t.prototype,"color"),h([f()],t.prototype,"typeInternal"),t},$=A`
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
  :host([color='accent'][variant='primary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-accent-hover);
  }
  :host([color='accent'][variant='primary']:active:not([disabled]):not([soft-disabled])),
  :host([color='accent'][variant='primary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-accent-pressed);
  }

  :host([color='accent'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-accent-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-theme-normal);
  }
  :host([color='accent'][variant='secondary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='accent'][variant='secondary']:active:not([disabled]):not([soft-disabled])),
  :host([color='accent'][variant='secondary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([color='positive'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-button-join-normal);
  }
  :host([color='positive'][variant='primary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-join-hover);
  }
  :host([color='positive'][variant='primary']:active:not([disabled]):not([soft-disabled])),
  :host([color='positive'][variant='primary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-join-pressed);
  }

  :host([color='positive'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-success-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-join-normal);
  }
  :host([color='positive'][variant='secondary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='positive'][variant='secondary']:active:not([disabled]):not([soft-disabled])),
  :host([color='positive'][variant='secondary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([color='negative'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-button-cancel-normal);
  }
  :host([color='negative'][variant='primary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-cancel-hover);
  }
  :host([color='negative'][variant='primary']:active:not([disabled]):not([soft-disabled])),
  :host([color='negative'][variant='primary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-cancel-pressed);
  }

  :host([color='negative'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-error-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-cancel-normal);
  }
  :host([color='negative'][variant='secondary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='negative'][variant='secondary']:active:not([disabled]):not([soft-disabled])),
  :host([color='negative'][variant='secondary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-pressed);
  }

  :host([color='promotional'][variant='primary']) {
    --mdc-button-text-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-button-background: var(--mds-color-theme-common-button-promotion-normal);
  }
  :host([color='promotional'][variant='primary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-common-button-promotion-hover);
  }
  :host([color='promotional'][variant='primary']:active:not([disabled]):not([soft-disabled])),
  :host([color='promotional'][variant='primary'].pressed:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-common-button-promotion-active);
  }

  :host([color='promotional'][variant='secondary']) {
    --mdc-button-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-border-color: var(--mds-color-theme-outline-promotion-normal);
  }
  :host([color='promotional'][variant='secondary']:hover:not([disabled]):not([soft-disabled])) {
    --mdc-button-background: var(--mds-color-theme-button-secondary-hover);
  }
  :host([color='promotional'][variant='secondary']:active:not([disabled]):not([soft-disabled])),
  :host([color='promotional'][variant='secondary'].pressed:not([disabled]):not([soft-disabled])) {
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
`,j=[$];var U=Object.defineProperty,b=(c,t,m,e)=>{for(var o=void 0,r=c.length-1,a;r>=0;r--)(a=c[r])&&(o=a(t,m,o)||o);return o&&U(t,m,o),o};const y=class y extends R(L(S)){constructor(){super(...arguments),this.size=i.SIZE,this.inverted=i.INVERTED,this.role=C.BUTTON}get overflowElement(){return this.buttonTextPart}update(t){super.update(t),t.has("active")&&this.inferFilledIconName(this.active),t.has("size")&&this.setSize(this.size),t.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),t.has("color")&&this.setColor(this.color),t.has("typeInternal")&&this.setSize(this.size),(t.has("prefixIcon")||t.has("postfixIcon"))&&(this.inferFilledIconName(this.active),this.inferButtonType())}inferFilledIconName(t){t?(this.prefixIcon&&(this.prefixFilledIconName=`${w(this.prefixIcon)}-filled`),this.postfixIcon&&(this.postfixFilledIconName=`${w(this.postfixIcon)}-filled`)):(this.prefixFilledIconName=this.prefixIcon,this.postfixFilledIconName=this.postfixIcon)}render(){return u`
      <slot name="prefix" part="prefix">
        ${this.prefixFilledIconName?u` <mdc-icon
              name="${this.prefixFilledIconName}"
              part="prefix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </slot>
      <slot @slotchange=${this.inferButtonType} part="button-text"></slot>
      <slot name="postfix" part="postfix">
        ${this.postfixFilledIconName?u` <mdc-icon
              name="${this.postfixFilledIconName}"
              part="postfix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </slot>
    `}};y.styles=[...S.styles,...j];let d=y;b([F('slot[part="button-text"]')],d.prototype,"buttonTextPart");b([l({type:Number})],d.prototype,"size");b([l({type:Boolean,reflect:!0})],d.prototype,"inverted");b([l({type:String,reflect:!0})],d.prototype,"role");b([f()],d.prototype,"prefixFilledIconName");b([f()],d.prototype,"postfixFilledIconName");export{d as B,L as a};
