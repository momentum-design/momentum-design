import{i as R,k as i,D as p}from"./lit-element-CHllvULs.js";import{u as j,n as P}from"./index-HW6KrQZO.js";import{h as F,a as Y}from"./index-MYSkQ1zX.js";import{g as U}from"./button.utils-DSouLKFM.js";import{B as f}from"./buttonsimple.component-DVyOksUm.js";import{T as x,V as W}from"./text.constants-DJu2q-6E.js";import{I as Z}from"./IconNameMixin-DXlfdGtk.js";import"./index-BnIP7Wfy.js";import"./index-BGkqZMsC.js";import"./index-BW_o9Wdb.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as c}from"./if-defined-C4tJgJ33.js";import{d as X,h as M,r as h}from"./utils-D1SE5bce.js";import"./button.constants-CjxsrM-Y.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BFc9mT2k.js";import"./create-context-89xeped_.js";import"./class-map-DVSk4OQh.js";import"./directive-Ctav8iJK.js";import"./v4-CQkTLCs1.js";const q=[F,R`

  :host {
    --mdc-tab-content-gap: 0.5rem;
    --mdc-tab-height: 2rem;

    --mdc-tab-glass-active-background-color-disabled: var(--mds-color-theme-button-primary-disabled);
    --mdc-tab-glass-active-background-color-hover: var(--mds-color-theme-button-primary-hover);
    --mdc-tab-glass-active-background-color-normal: var(--mds-color-theme-button-primary-normal);
    --mdc-tab-glass-active-background-color-pressed: var(--mds-color-theme-button-primary-pressed);

    --mdc-tab-glass-active-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-tab-glass-active-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);

    --mdc-tab-glass-border-radius: 0.5rem;

    --mdc-tab-glass-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-glass-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-glass-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-glass-inactive-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

    --mdc-tab-glass-inactive-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-tab-glass-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

    --mdc-tab-line-active-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-line-active-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-line-active-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-line-active-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

    --mdc-tab-line-active-color: var(--mds-color-theme-text-primary-normal);
    --mdc-tab-line-active-color-disabled: var(--mds-color-theme-text-primary-disabled);

    --mdc-tab-line-active-indicator-color: var(--mds-color-theme-outline-input-active);
    --mdc-tab-line-active-indicator-color-disabled: var(--mds-color-theme-outline-primary-disabled);
    --mdc-tab-line-active-indicator-height: 0.125rem;
    --mdc-tab-line-active-indicator-width: 100%;

    --mdc-tab-line-border-bottom-left-radius: 0;
    --mdc-tab-line-border-bottom-right-radius: 0;
    --mdc-tab-line-border-top-left-radius: 0.25rem;
    --mdc-tab-line-border-top-right-radius: 0.25rem;

    --mdc-tab-line-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-line-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-line-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-line-inactive-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

    --mdc-tab-line-inactive-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-tab-line-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

    --mdc-tab-padding-left: 0.75rem;
    --mdc-tab-padding-right: 0.75rem;

    --mdc-tab-pill-active-background-color-disabled: var(--mds-color-theme-button-secondary-active-normal);
    --mdc-tab-pill-active-background-color-hover: var(--mds-color-theme-button-secondary-active-hover);
    --mdc-tab-pill-active-background-color-normal: var(--mds-color-theme-button-secondary-active-normal);
    --mdc-tab-pill-active-background-color-pressed: var(--mds-color-theme-button-secondary-active-pressed);

    --mdc-tab-pill-active-color: var(--mds-color-theme-text-primary-normal);
    --mdc-tab-pill-active-color-disabled: var(--mds-color-theme-text-primary-disabled);

    --mdc-tab-pill-border-radius: 0.5rem;

    --mdc-tab-pill-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-pill-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-pill-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-pill-inactive-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

    --mdc-tab-pill-inactive-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-tab-pill-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

    flex-direction: column;
    height: var(--mdc-tab-height);
    padding-left: var(--mdc-tab-padding-left);
    padding-right: var(--mdc-tab-padding-right);
    position: relative;
    border: none;
  }

  :host::part(container) {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: var(--mdc-tab-content-gap);
    justify-content: center;
    width: fit-content;
  }

  :host::part(text) {
    display: flex;
    flex-direction: column;
  }

  :host::part(text)::after{
    content: attr(data-text);
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    /* body-midsize-bold font styling */
    font-size: var(--mds-font-apps-body-midsize-bold-font-size);
    font-weight: var(--mds-font-apps-body-midsize-bold-font-weight);
    line-height: var(--mds-font-apps-body-midsize-bold-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-bold-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-bold-text-case);
  }

  :host::part(indicator) {
    width: var(--mdc-tab-line-active-indicator-width);
    height: var(--mdc-tab-line-active-indicator-height);
    bottom: 0;
    position: absolute;
    visibility: hidden;
  }

  :host([disabled]) {
    cursor: default;
  }

  :host([variant="glass"]) {
    background-color: var(--mdc-tab-glass-inactive-background-color-normal);
    border-radius: var(--mdc-tab-glass-border-radius);
    color: var(--mdc-tab-glass-inactive-color);
  }

  :host([variant="glass"]:hover) {
    background-color: var(--mdc-tab-glass-inactive-background-color-hover);
  }

  :host([variant="glass"]:active) {
    background-color: var(--mdc-tab-glass-inactive-background-color-pressed);
  }

  :host([variant="glass"][disabled]) {
    background-color: var(--mdc-tab-glass-inactive-background-color-disabled);
    color: var(--mdc-tab-glass-inactive-color-disabled);
  }

  :host([variant="glass"][active]) {
    background-color: var(--mdc-tab-glass-active-background-color-normal);
    color: var(--mdc-tab-glass-active-color);
  }

  :host([variant="glass"][active]:hover) {
    background-color: var(--mdc-tab-glass-active-background-color-hover);
  }

  :host([variant="glass"][active]:active) {
    background-color: var(--mdc-tab-glass-active-background-color-pressed);
  }

  :host([variant="glass"][active][disabled]) {
    background-color: var(--mdc-tab-glass-active-background-color-disabled);
    color: var(--mdc-tab-glass-active-color-disabled);
  }

  :host([variant="line"]) {
    background-color: var(--mdc-tab-line-inactive-background-color-normal);
    border-top-left-radius: var(--mdc-tab-line-border-top-left-radius);
    border-top-right-radius: var(--mdc-tab-line-border-top-right-radius);
    border-bottom-left-radius: var(--mdc-tab-line-border-bottom-left-radius);
    border-bottom-right-radius: var(--mdc-tab-line-border-bottom-right-radius);
    color: var(--mdc-tab-line-inactive-color);
  }

  :host([variant="line"]:hover) {
    background-color: var(--mdc-tab-line-inactive-background-color-hover);
  }

  :host([variant="line"]:active) {
    background-color: var(--mdc-tab-line-inactive-background-color-pressed);
  }

  :host([variant="line"][disabled]) {
    background-color: var(--mdc-tab-line-inactive-background-color-disabled);
    color: var(--mdc-tab-line-inactive-color-disabled);
  }

  :host([variant="line"][active]) {
    background-color: var(--mdc-tab-line-active-background-color-normal);
    color: var(--mdc-tab-line-active-color);
  }

  :host([variant="line"][active])::part(indicator) {
    background-color:var(--mdc-tab-line-active-indicator-color);
    visibility: visible;
  }

  :host([variant="line"][active]:hover) {
    background-color: var(--mdc-tab-line-active-background-color-hover);
  }

  :host([variant="line"][active]:active) {
    background-color: var(--mdc-tab-line-active-background-color-pressed);
  }

  :host([variant="line"][active][disabled]) {
    background-color: var(--mdc-tab-line-active-background-color-disabled);
    color: var(--mdc-tab-line-active-color-disabled);
  }

  :host([variant="line"][active][disabled])::part(indicator) {
    background-color:var(--mdc-tab-line-active-indicator-color-disabled);
  }

  :host([variant="pill"]) {
    background-color: var(--mdc-tab-pill-inactive-background-color-normal);
    border-radius: var(--mdc-tab-pill-border-radius);
    color: var(--mdc-tab-pill-inactive-color);
  }

  :host([variant="pill"]:hover) {
    background-color: var(--mdc-tab-pill-inactive-background-color-hover);
  }

  :host([variant="pill"]:active) {
    background-color: var(--mdc-tab-pill-inactive-background-color-pressed);
  }

  :host([variant="pill"][disabled]) {
    background-color: var(--mdc-tab-pill-inactive-background-color-disabled);
    color: var(--mdc-tab-pill-inactive-color-disabled);
  }

  :host([variant="pill"][active]) {
    background-color: var(--mdc-tab-pill-active-background-color-normal);
    color: var(--mdc-tab-pill-active-color);
  }

  :host([variant="pill"][active]:hover) {
    background-color: var(--mdc-tab-pill-active-background-color-hover);
  }

  :host([variant="pill"][active]:active) {
    background-color: var(--mdc-tab-pill-active-background-color-pressed);
  }

  :host([variant="pill"][active][disabled]) {
    background-color: var(--mdc-tab-pill-active-background-color-disabled);
    color: var(--mdc-tab-pill-active-color-disabled);
  }

`,...Y()],H=j.constructTagName("tab"),G={GLASS:"glass",LINE:"line",PILL:"pill"},J={TAB_VARIANT:G.PILL};var K=Object.defineProperty,V=(a,o,e,Q)=>{for(var r=void 0,u=a.length-1,y;u>=0;u--)(y=a[u])&&(r=y(o,e,r)||r);return r&&K(o,e,r),r};const k=class k extends Z(f){constructor(){super(),this.variant=J.TAB_VARIANT,this.role="tab",this.softDisabled=void 0,this.size=void 0,this.type=void 0}modifyIconName(o){this.iconName&&(o?(this.prevIconName=this.iconName,this.iconName=`${U(this.iconName)}-filled`):this.prevIconName&&(this.iconName=this.prevIconName))}setActive(o,e){o.setAttribute("aria-selected",e?"true":"false"),this.modifyIconName(e)}executeAction(){this.active=!this.active}render(){return i`
      <div part="container">
        <slot name="badge" part="badge"></slot>
        ${this.iconName?i` <mdc-icon name="${this.iconName}" size="1" length-unit="rem" part="icon"></mdc-icon>`:p}
        ${this.text?i` <mdc-text
              type=${this.active?x.BODY_MIDSIZE_BOLD:x.BODY_MIDSIZE_MEDIUM}
              tagname=${W.SPAN}
              data-text=${this.text}
              part="text"
              >${this.text}</mdc-text
            >`:p}
      </div>
      <div part="indicator"></div>
    `}};k.styles=[...f.styles,...q];let d=k;V([P({type:String,reflect:!0})],d.prototype,"text");V([P({type:String,reflect:!0})],d.prototype,"variant");d.register(H);const t=a=>i`<div role="tablist">
  <mdc-tab
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    ?active="${a.active}"
    aria-label="${c(a.text?p:"Label")}"
    ?disabled="${a.disabled}"
    icon-name="${c(a["icon-name"])}"
    tabIndex="${c(a.tabIndex)}"
    text="${c(a.text)}"
    variant="${c(a.variant)}"
    >${a.showBadge?i`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:p}</mdc-tab>
</div>`,Ia={title:"Work In Progress/tab",tags:["autodocs"],component:"mdc-tab",render:t,parameters:{badges:["wip"]},argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(G)},...X(["--mdc-tab-content-gap","--mdc-tab-height","--mdc-tab-glass-active-background-color-disabled","--mdc-tab-glass-active-background-color-hover","--mdc-tab-glass-active-background-color-normal","--mdc-tab-glass-active-background-color-pressed","--mdc-tab-glass-active-color","--mdc-tab-glass-active-color-disabled","--mdc-tab-glass-border-radius","--mdc-tab-glass-inactive-background-color-disabled","--mdc-tab-glass-inactive-background-color-hover","--mdc-tab-glass-inactive-background-color-normal","--mdc-tab-glass-inactive-background-color-pressed","--mdc-tab-glass-inactive-color","--mdc-tab-glass-inactive-color-disabled","--mdc-tab-line-active-background-color-disabled","--mdc-tab-line-active-background-color-hover","--mdc-tab-line-active-background-color-normal","--mdc-tab-line-active-background-color-pressed","--mdc-tab-line-active-color","--mdc-tab-line-active-color-disabled","--mdc-tab-line-active-indicator-color","--mdc-tab-line-active-indicator-color-disabled","--mdc-tab-line-active-indicator-height","--mdc-tab-line-active-indicator-width","--mdc-tab-line-border-bottom-left-radius","--mdc-tab-line-border-bottom-right-radius","--mdc-tab-line-border-top-left-radius","--mdc-tab-line-border-top-right-radius","--mdc-tab-line-inactive-background-color-disabled","--mdc-tab-line-inactive-background-color-hover","--mdc-tab-line-inactive-background-color-normal","--mdc-tab-line-inactive-background-color-pressed","--mdc-tab-line-inactive-color","--mdc-tab-line-inactive-color-disabled","--mdc-tab-padding-left","--mdc-tab-padding-right","--mdc-tab-pill-active-background-color-disabled","--mdc-tab-pill-active-background-color-hover","--mdc-tab-pill-active-background-color-normal","--mdc-tab-pill-active-background-color-pressed","--mdc-tab-pill-active-color","--mdc-tab-pill-active-color-disabled","--mdc-tab-pill-border-radius","--mdc-tab-pill-inactive-background-color-disabled","--mdc-tab-pill-inactive-background-color-hover","--mdc-tab-pill-inactive-background-color-normal","--mdc-tab-pill-inactive-background-color-pressed","--mdc-tab-pill-inactive-color","--mdc-tab-pill-inactive-color-disabled"]),...M(["role","size","soft-disabled","type"])}},l={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},s={render:t,args:{...l,showBadge:!0}},b={render:t,args:{...l,variant:"glass"},argTypes:{...h(["variant"])}},m={render:t,args:{...l,variant:"line"},argTypes:{...h(["variant"])}},v={render:t,args:{...l,variant:"pill"},argTypes:{...h(["variant"])}},g={render:t,args:{...l,text:""},argTypes:{...M(["text"])}};var T,I,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var N,$,w;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(w=($=b.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var S,_,B;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var L,O,z;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'pill'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(z=(O=v.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var E,D,C;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(C=(D=g.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const Aa=["Example","GlassTab","LineTab","PillTab","IconOnlyTab"];export{s as Example,b as GlassTab,g as IconOnlyTab,m as LineTab,v as PillTab,Aa as __namedExportsOrder,Ia as default};
