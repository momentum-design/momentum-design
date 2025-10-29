import{S as x,U as y,X as f,W as T,k as r,V as p,q as d,h as u,E,n as c}from"./iframe-Dc28Xrb1.js";import{T as R,K as n}from"./TabIndexMixin-JLXIfUOP.js";import{p as S}from"./index-DlRBn3Wd.js";import{D as k,b as C,a as o,c as h,d as A}from"./stepper.component-rTb7EsLM.js";import"./index-D6AJipRQ.js";const N=x`
  :host {
    gap: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;

    --mdc-stepperitem-status-container-background: transparent;
    --mdc-stepperitem-status-container-border-color: transparent;
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-stepperitem-label-container-background: transparent;
  }

  :host([variant='stacked']) {
    flex-direction: column;
    text-align: center;
  }

  :host::part(label) {
    color: var(--mdc-stepperitem-label-color);
  }
  :host::part(help-text) {
    color: var(--mdc-stepperitem-help-text-color);
  }

  :host::part(status-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--mdc-stepperitem-status-container-background);
    border: 1px solid var(--mdc-stepperitem-status-container-border-color);
  }

  :host::part(step-number) {
    color: var(--mdc-stepperitem-label-color);
  }

  :host::part(label-container) {
    background-color: var(--mdc-stepperitem-label-container-background);
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  :host([variant='stacked'])::part(label-container) {
    width: 8.75rem;
    padding: 0.25rem 0;
  }

  :host([variant='stacked'])::part(label),
  :host([variant='stacked'])::part(help-text) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([status='error-current']),
  :host([status='error-incomplete']) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-normal);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([status='error-current'])::part(help-text-container),
  :host([status='error-incomplete'])::part(help-text-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  :host([status='completed'])::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-normal);
  }
  :host([status='completed'])::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  :host([status='current'])::part(status-container) {
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-control-active-normal);
  }
  :host([status='error-current'])::part(status-container) {
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-stepperitem-status-container-background: none;
  }
  :host([status='error-incomplete'])::part(status-container),
  :host([status='not-started'])::part(status-container) {
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-stepperitem-status-container-background: none;
  }

  :host([status='error-current'])::part(help-icon),
  :host([status='error-incomplete'])::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-normal);
    flex-shrink: 0;
  }

  :host(:hover) {
    --mdc-stepperitem-label-container-background: var(--mds-color-theme-background-primary-hover);
  }
  :host(:active) {
    --mdc-stepperitem-label-container-background: var(--mds-color-theme-background-primary-active);
  }

  :host([status='completed']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-hover);
  }
  :host([status='completed']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-active);
  }

  :host([status='current']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-outline-secondary-normal);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-control-active-hover);
  }
  :host([status='current']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-control-active-hover);
  }

  :host([status='not-started']:hover)::part(status-container),
  :host([status='error-incomplete']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-hover);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-secondary-normal);
  }
  :host([status='not-started']:active)::part(status-container),
  :host([status='error-incomplete']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-secondary-normal);
  }

  :host([status='error-current']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-hover);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-cancel-normal);
  }
  :host([status='error-current']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-cancel-normal);
  }

  :host([status='error-current']:hover)::part(help-icon),
  :host([status='error-incomplete']:hover)::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-hover);
  }
  :host([status='error-current']:hover),
  :host([status='error-incomplete']:hover) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-hover);
  }
  :host([status='error-current']:hover)::part(help-icon),
  :host([status='error-incomplete']:hover)::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-active);
  }

  :host([status='error-current']:active),
  :host([status='error-incomplete']:active) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-active);
  }
`,_=[y,N,...f()];var $=Object.defineProperty,i=(b,t,s,l)=>{for(var a=void 0,m=b.length-1,g;m>=0;m--)(g=b[m])&&(a=g(t,s,a)||a);return a&&$(t,s,a),a};const v=class v extends R(E){constructor(){super(),this.variant=k.VARIANT,this.status=k.STATUS,this.label="",this.stepperContext=S.consume({host:this,context:C.Context}),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this))}updated(t){var l;super.updated(t);const s=(l=this.stepperContext)==null?void 0:l.value;!s||!s.variant||(this.variant=s.variant)}connectedCallback(){super.connectedCallback(),this.role=T.LISTITEM}handleKeyDown(t){[n.ENTER,n.SPACE].includes(t.key)&&(this.classList.add("pressed"),t.key===n.ENTER&&this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleKeyUp(t){[n.ENTER,n.SPACE].includes(t.key)&&(this.classList.remove("pressed"),t.key===n.SPACE&&this.triggerClickEvent())}renderStatusIcon(){return this.status===o.COMPLETED?r`<mdc-icon part="status-icon" name=${h.COMPLETED} length-unit="rem" size="1"></mdc-icon>`:this.status===o.ERROR_CURRENT||this.status===o.CURRENT?r`<mdc-icon part="status-icon" name=${h.PENCIL} length-unit="rem" size="1"></mdc-icon>`:this.stepNumber&&(this.status===o.NOT_STARTED||this.status===o.ERROR_INCOMPLETE)?r`<mdc-text part="step-number" tagname=${p.SPAN} type=${d.BODY_MIDSIZE_REGULAR}
        >${this.stepNumber}</mdc-text
      >`:u}renderHelpText(){if(!this.helpText)return u;const t=r`<mdc-text
      part="help-text"
      tagname=${p.SPAN}
      type=${d.BODY_MIDSIZE_REGULAR}
      >${this.helpText}</mdc-text
    >`;return this.status===o.ERROR_INCOMPLETE||this.status===o.ERROR_CURRENT?r`<div part="help-text-container">
        <mdc-icon part="help-icon" name=${h.ERROR} length-unit="rem" size="1"></mdc-icon>
        ${t}
      </div>`:t}render(){return r` <div part="status-container">${this.renderStatusIcon()}</div>
      <div part="label-container">
        ${this.label?r`<mdc-text part="label" tagname=${p.SPAN} type=${d.BODY_MIDSIZE_REGULAR}
              >${this.label}</mdc-text
            >`:u}
        ${this.renderHelpText()}
      </div>`}};v.styles=[...E.styles,..._];let e=v;i([c({type:String,reflect:!0})],e.prototype,"variant");i([c({type:String,reflect:!0})],e.prototype,"status");i([c({type:String,reflect:!0})],e.prototype,"label");i([c({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");i([c({type:Number,reflect:!0,attribute:"step-number"})],e.prototype,"stepNumber");e.register(A);
