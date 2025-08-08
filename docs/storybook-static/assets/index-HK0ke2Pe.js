import{i as E,k as r,D as p}from"./lit-element-D5KKan5q.js";import{C as k,n as c}from"./provider.component-BaQC7CJH.js";import{V as d,T as u}from"./index-riA1qVWu.js";import{T as y}from"./TabIndexMixin-TvgH_pmh.js";import{R as f}from"./roles-DU0xbrD4.js";import{K as n}from"./keys-hFXe221I.js";import{p as T}from"./index-CbmtUAjA.js";import{D as x,b as R,a as o,c as h,d as S}from"./stepper.component-BGHjrCyu.js";import{h as C,a as A}from"./index-B-GnYs90.js";import"./index-Dhb6aEYF.js";const N=E`
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
`,_=[C,N,...A()];var $=Object.defineProperty,i=(b,t,s,m)=>{for(var a=void 0,l=b.length-1,g;l>=0;l--)(g=b[l])&&(a=g(t,s,a)||a);return a&&$(t,s,a),a};const v=class v extends y(k){constructor(){super(),this.variant=x.VARIANT,this.status=x.STATUS,this.label="",this.stepperContext=T.consume({host:this,context:R.Context}),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this))}updated(t){var m;super.updated(t);const s=(m=this.stepperContext)==null?void 0:m.value;!s||!s.variant||(this.variant=s.variant)}connectedCallback(){super.connectedCallback(),this.role=f.LISTITEM}handleKeyDown(t){[n.ENTER,n.SPACE].includes(t.key)&&(this.classList.add("pressed"),t.key===n.ENTER&&this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleKeyUp(t){[n.ENTER,n.SPACE].includes(t.key)&&(this.classList.remove("pressed"),t.key===n.SPACE&&this.triggerClickEvent())}renderStatusIcon(){return this.status===o.COMPLETED?r`<mdc-icon part="status-icon" name=${h.COMPLETED} length-unit="rem" size="1"></mdc-icon>`:this.status===o.ERROR_CURRENT||this.status===o.CURRENT?r`<mdc-icon part="status-icon" name=${h.PENCIL} length-unit="rem" size="1"></mdc-icon>`:this.stepNumber&&(this.status===o.NOT_STARTED||this.status===o.ERROR_INCOMPLETE)?r`<mdc-text part="step-number" tagname=${d.SPAN} type=${u.BODY_MIDSIZE_REGULAR}
        >${this.stepNumber}</mdc-text
      >`:p}renderHelpText(){if(!this.helpText)return p;const t=r`<mdc-text
      part="help-text"
      tagname=${d.SPAN}
      type=${u.BODY_MIDSIZE_REGULAR}
      >${this.helpText}</mdc-text
    >`;return this.status===o.ERROR_INCOMPLETE||this.status===o.ERROR_CURRENT?r`<div part="help-text-container">
        <mdc-icon part="help-icon" name=${h.ERROR} length-unit="rem" size="1"></mdc-icon>
        ${t}
      </div>`:t}render(){return r` <div part="status-container">${this.renderStatusIcon()}</div>
      <div part="label-container">
        ${this.label?r`<mdc-text part="label" tagname=${d.SPAN} type=${u.BODY_MIDSIZE_REGULAR}
              >${this.label}</mdc-text
            >`:p}
        ${this.renderHelpText()}
      </div>`}};v.styles=[...k.styles,..._];let e=v;i([c({type:String,reflect:!0})],e.prototype,"variant");i([c({type:String,reflect:!0})],e.prototype,"status");i([c({type:String,reflect:!0})],e.prototype,"label");i([c({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");i([c({type:Number,reflect:!0,attribute:"step-number"})],e.prototype,"stepNumber");e.register(S);
