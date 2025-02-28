import{i as j,k as i,D as p}from"./lit-element-CHllvULs.js";import{u as F,n as M}from"./index-HW6KrQZO.js";import{a as Y,h as U}from"./index-CEbgplXA.js";import{g as Z}from"./button.utils-F1-WjXoW.js";import{a as x}from"./buttonsimple.component-BZ9r9wPy.js";import{T,V as W}from"./text.constants-DJu2q-6E.js";import{I as X}from"./IconNameMixin-DXlfdGtk.js";import"./index-8XRYgcxm.js";import"./index-BGkqZMsC.js";import"./index-Dtcn-vPr.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as c}from"./if-defined-C4tJgJ33.js";import{d as q,h as G,r as h}from"./utils-D1SE5bce.js";import"./button.constants-DopO3xW8.js";import"./DisabledMixin-DBt9didn.js";import"./iframe-BtqB3ETb.js";import"../sb-preview/runtime.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./class-map-DVSk4OQh.js";import"./directive-Ctav8iJK.js";import"./v4-CQkTLCs1.js";const H=[Y,j`

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

`,...U()],J=F.constructTagName("tab"),k={GLASS:"glass",LINE:"line",PILL:"pill"},A={VARIANT:k.PILL};var K=Object.defineProperty,R=(o,a,e,Q)=>{for(var t=void 0,u=o.length-1,f;u>=0;u--)(f=o[u])&&(t=f(a,e,t)||t);return t&&K(a,e,t),t};const y=class y extends X(x){constructor(){super(),this.variant=A.VARIANT,this.role="tab",this.softDisabled=void 0,this.size=void 0,this.type=void 0}modifyIconName(a){this.iconName&&(a?(this.prevIconName=this.iconName,this.iconName=`${Z(this.iconName)}-filled`):this.prevIconName&&(this.iconName=this.prevIconName))}setVariant(a){this.setAttribute("variant",Object.values(k).includes(a)?a:A.VARIANT)}setActive(a,e){a.setAttribute("aria-selected",e?"true":"false"),this.modifyIconName(e)}executeAction(){this.active=!this.active}update(a){super.update(a),a.has("variant")&&this.setVariant(this.variant)}render(){return i`
      <div part="container">
        ${this.iconName?i` <mdc-icon name="${this.iconName}" size="1" length-unit="rem" part="icon"></mdc-icon>`:p}
        ${this.text?i` <mdc-text
              type=${this.active?T.BODY_MIDSIZE_BOLD:T.BODY_MIDSIZE_MEDIUM}
              tagname=${W.SPAN}
              data-text=${this.text}
              part="text"
              >${this.text}</mdc-text
            >`:p}
        <slot name="badge"></slot>
        <slot name="chip"></slot>
      </div>
      <div part="indicator"></div>
    `}};y.styles=[...x.styles,...H];let d=y;R([M({type:String,reflect:!0})],d.prototype,"text");R([M({type:String,reflect:!0})],d.prototype,"variant");d.register(J);const r=o=>i`<div role="tablist">
  <mdc-tab
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    ?active="${o.active}"
    aria-label="${c(o.text?p:"Label")}"
    ?disabled="${o.disabled}"
    icon-name="${c(o["icon-name"])}"
    tabIndex="${c(o.tabIndex)}"
    text="${c(o.text)}"
    variant="${c(o.variant)}"
    >${o.showBadge?i`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>`:p}</mdc-tab>
</div>`,Ia={title:"Components/tab",tags:["autodocs"],component:"mdc-tab",render:r,parameters:{badges:["stable"]},argTypes:{active:{control:"boolean",description:"Tab can be active or inactive. Active tab means the tab is selected."},disabled:{control:"boolean"},"icon-name":{control:"text"},showBadge:{control:"boolean",description:"This is an internal argument to show the badge in the story",table:{disable:!0}},tabIndex:{control:"number"},text:{control:"text"},variant:{control:"select",options:Object.values(k)},...q(["--mdc-tab-content-gap","--mdc-tab-height","--mdc-tab-glass-active-background-color-disabled","--mdc-tab-glass-active-background-color-hover","--mdc-tab-glass-active-background-color-normal","--mdc-tab-glass-active-background-color-pressed","--mdc-tab-glass-active-color","--mdc-tab-glass-active-color-disabled","--mdc-tab-glass-border-radius","--mdc-tab-glass-inactive-background-color-disabled","--mdc-tab-glass-inactive-background-color-hover","--mdc-tab-glass-inactive-background-color-normal","--mdc-tab-glass-inactive-background-color-pressed","--mdc-tab-glass-inactive-color","--mdc-tab-glass-inactive-color-disabled","--mdc-tab-line-active-background-color-disabled","--mdc-tab-line-active-background-color-hover","--mdc-tab-line-active-background-color-normal","--mdc-tab-line-active-background-color-pressed","--mdc-tab-line-active-color","--mdc-tab-line-active-color-disabled","--mdc-tab-line-active-indicator-color","--mdc-tab-line-active-indicator-color-disabled","--mdc-tab-line-active-indicator-height","--mdc-tab-line-active-indicator-width","--mdc-tab-line-border-bottom-left-radius","--mdc-tab-line-border-bottom-right-radius","--mdc-tab-line-border-top-left-radius","--mdc-tab-line-border-top-right-radius","--mdc-tab-line-inactive-background-color-disabled","--mdc-tab-line-inactive-background-color-hover","--mdc-tab-line-inactive-background-color-normal","--mdc-tab-line-inactive-background-color-pressed","--mdc-tab-line-inactive-color","--mdc-tab-line-inactive-color-disabled","--mdc-tab-padding-left","--mdc-tab-padding-right","--mdc-tab-pill-active-background-color-disabled","--mdc-tab-pill-active-background-color-hover","--mdc-tab-pill-active-background-color-normal","--mdc-tab-pill-active-background-color-pressed","--mdc-tab-pill-active-color","--mdc-tab-pill-active-color-disabled","--mdc-tab-pill-border-radius","--mdc-tab-pill-inactive-background-color-disabled","--mdc-tab-pill-inactive-background-color-hover","--mdc-tab-pill-inactive-background-color-normal","--mdc-tab-pill-inactive-background-color-pressed","--mdc-tab-pill-inactive-color","--mdc-tab-pill-inactive-color-disabled"]),...G(["role","size","soft-disabled","type"])}},l={active:!1,disabled:!1,"icon-name":"placeholder-bold",role:"tab",showBadge:!1,tabIndex:0,text:"Label",variant:"pill"},s={render:r,args:{...l,showBadge:!0}},b={render:r,args:{...l,variant:"glass"},argTypes:{...h(["variant"])}},m={render:r,args:{...l,variant:"line"},argTypes:{...h(["variant"])}},v={render:r,args:{...l,variant:"pill"},argTypes:{...h(["variant"])}},g={render:r,args:{...l,text:""},argTypes:{...G(["text"])}};var I,N,$;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    showBadge: true
  }
}`,...($=(N=s.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var S,w,L;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'glass'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(L=(w=b.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,_,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'line'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var E,B,C;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    variant: 'pill'
  },
  argTypes: {
    ...readOnlyControls(['variant'])
  }
}`,...(C=(B=v.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,V,P;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    text: ''
  },
  argTypes: {
    ...hideControls(['text'])
  }
}`,...(P=(V=g.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const Na=["Example","GlassTab","LineTab","PillTab","IconOnlyTab"];export{s as Example,b as GlassTab,g as IconOnlyTab,m as LineTab,v as PillTab,Na as __namedExportsOrder,Ia as default};
