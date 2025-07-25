import{i as G,k as o,D as v}from"./lit-element-D5KKan5q.js";import{u as Y,C as N,n as i}from"./index-C9z9WAEj.js";import{V as E,T}from"./index-BrLJ_9IK.js";import{T as j}from"./TabIndexMixin-CsrHswKP.js";import{R as H}from"./roles-BH_hBfTz.js";import{K as c}from"./keys-Hz01Ianf.js";import{h as z,a as B}from"./index-B-GnYs90.js";import"./index-B1F6ryiU.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as F}from"./utils-CF1irry3.js";import{c as Z,s as W}from"./commonArgTypes-BluK8w5L.js";import"./iframe-DbyPoBUR.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const X=G`
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
    max-width: 8.75rem;
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
`,q=[z,X,...B()],J=Y.constructTagName("stepperitem"),a={INLINE:"inline",STACKED:"stacked"},e={COMPLETED:"completed",CURRENT:"current",ERROR_CURRENT:"error-current",ERROR_INCOMPLETE:"error-incomplete",NOT_STARTED:"not-started"},R={COMPLETED:"check-bold",ERROR:"error-legacy-badge-filled",PENCIL:"edit-bold"},S={VARIANT:a.INLINE,STATUS:e.NOT_STARTED};var Q=Object.defineProperty,l=(r,t,y,et)=>{for(var n=void 0,b=r.length-1,k;b>=0;b--)(k=r[b])&&(n=k(t,y,n)||n);return n&&Q(t,y,n),n};const x=class x extends j(N){constructor(){super(),this.variant=S.VARIANT,this.status=S.STATUS,this.label="",this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this))}connectedCallback(){super.connectedCallback(),this.role=H.LISTITEM}handleKeyDown(t){[c.ENTER,c.SPACE].includes(t.key)&&(this.classList.add("pressed"),t.key===c.ENTER&&this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleKeyUp(t){[c.ENTER,c.SPACE].includes(t.key)&&(this.classList.remove("pressed"),t.key===c.SPACE&&this.triggerClickEvent())}renderStatusIcon(){return this.status===e.COMPLETED?o`<mdc-icon part="status-icon" name=${R.COMPLETED} length-unit="rem" size="1"></mdc-icon>`:this.status===e.ERROR_CURRENT||this.status===e.CURRENT?o`<mdc-icon part="status-icon" name=${R.PENCIL} length-unit="rem" size="1"></mdc-icon>`:this.stepNumber&&(this.status===e.NOT_STARTED||this.status===e.ERROR_INCOMPLETE)?o`<mdc-text part="step-number" tagname=${E.SPAN} type=${T.BODY_MIDSIZE_REGULAR}
        >${this.stepNumber}</mdc-text
      >`:v}renderHelpText(){if(!this.helpText)return v;const t=o`<mdc-text
      part="help-text"
      tagname=${E.SPAN}
      type=${T.BODY_MIDSIZE_REGULAR}
      >${this.helpText}</mdc-text
    >`;return this.status===e.ERROR_INCOMPLETE||this.status===e.ERROR_CURRENT?o`<div part="help-text-container">
        <mdc-icon part="help-icon" name=${R.ERROR} length-unit="rem" size="1"></mdc-icon>
        ${t}
      </div>`:t}render(){return o` <div part="status-container">${this.renderStatusIcon()}</div>
      <div part="label-container">
        ${this.label?o`<mdc-text part="label" tagname=${E.SPAN} type=${T.BODY_MIDSIZE_REGULAR}
              >${this.label}</mdc-text
            >`:v}
        ${this.renderHelpText()}
      </div>`}};x.styles=[...N.styles,...q];let s=x;l([i({type:String,reflect:!0})],s.prototype,"variant");l([i({type:String,reflect:!0})],s.prototype,"status");l([i({type:String,reflect:!0})],s.prototype,"label");l([i({type:String,reflect:!0,attribute:"help-text"})],s.prototype,"helpText");l([i({type:Number,reflect:!0,attribute:"step-number"})],s.prototype,"stepNumber");s.register(J);const tt=r=>o` <mdc-stepperitem
    @click=${g("onClick")}
    @keydown=${g("onKeyDown")}
    @keyup=${g("onKeyUp")}
    variant=${r.variant}
    status=${r.status}
    help-text=${r["help-text"]}
    label=${r.label}
    step-number=${r["step-number"]}
    class=${r.class}
    style=${r.style}
  ></mdc-stepperitem>`,Rt={title:"Work In Progress/stepper/stepperitem",tags:["autodocs"],component:"mdc-stepperitem",render:tt,parameters:{badges:["wip"]},argTypes:{variant:{control:{type:"select"},options:Object.values(a)},status:{control:{type:"select"},options:Object.values(e)},"help-text":{control:{type:"text"}},label:{control:{type:"text"}},"step-number":{control:{type:"number"}},...F(["--mdc-stepperitem-status-container-background","--mdc-stepperitem-status-container-border-color","--mdc-stepperitem-label-color","--mdc-stepperitem-help-text-color","--mdc-stepperitem-label-container-background"]),...Z,...W}},p={args:{variant:a.INLINE,status:e.COMPLETED,"help-text":"Help text",label:"Label","step-number":"1"}},m={args:{variant:a.INLINE,status:e.CURRENT,label:"Label","step-number":"1"}},d={args:{variant:a.STACKED,status:e.CURRENT,label:"Label","step-number":"1"}},u={args:{variant:a.INLINE,status:e.ERROR_CURRENT,"help-text":"Error message",label:"Label","step-number":"1"}},h={args:{variant:a.STACKED,label:"This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container","help-text":"This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container",status:e.CURRENT,"step-number":"1"}};var f,A,C;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.COMPLETED,
    'help-text': 'Help text',
    label: 'Label',
    'step-number': '1'
  }
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,L,O;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1'
  }
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var U,D,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1'
  }
}`,...($=(D=d.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var _,w,P;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR_CURRENT,
    'help-text': 'Error message',
    label: 'Label',
    'step-number': '1'
  }
}`,...(P=(w=u.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var M,K,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    label: 'This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container',
    'help-text': 'This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container',
    status: STATUS.CURRENT,
    'step-number': '1'
  }
}`,...(V=(K=h.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const xt=["Example","Inline","Stacked","Error","LongText"];export{u as Error,p as Example,m as Inline,h as LongText,d as Stacked,xt as __namedExportsOrder,Rt as default};
