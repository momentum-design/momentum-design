import{u as E,n as g}from"./index-C9z9WAEj.js";import{e as L,v as A}from"./v4-BnQ50LvX.js";import{C as v,a as m,P as u}from"./popover.component-BJBaaoho.js";import{i as P,k as x}from"./lit-element-D5KKan5q.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-gzus7acS.js";import{d as I,h as S}from"./utils-D1SE5bce.js";import"./if-defined-D5BV9-c0.js";import"./v4-CQkTLCs1.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-BX3Tn-Br.js";import"./button.constants-D3lNAbe_.js";import"./button.utils-idYASaaz.js";import"./index-DfZde-XB.js";import"./iframe-F2T7fWhq.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(e){return(t,s)=>{const{slot:r}={},l="slot"+(r?`[name=${r}]`:":not([name])");return L(t,s,{get(){var d;const a=(d=this.renderRoot)==null?void 0:d.querySelector(l);return(a==null?void 0:a.assignedNodes(e))??[]}})}}const C=E.constructTagName("tooltip"),i={DESCRIPTION:"description",LABEL:"label",NONE:"none"},o={BACKDROP:!1,COLOR:v.TONAL,DELAY:"0,0",OFFSET:4,PLACEMENT:m.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:i.DESCRIPTION},D=P`

  :host {
    --mdc-tooltip-max-width: 400px;
    --mdc-tooltip-padding: 0.75rem;
    --mdc-tooltip-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-tooltip-text-color-contrast: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host::part(popover-content) {
    padding: var(--mdc-tooltip-padding);
    color: var(--mdc-tooltip-text-color);
    min-width: fit-content;
    max-width: var(--mdc-tooltip-max-width);

    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([color='contrast'])::part(popover-content) {
    color: var(--mdc-tooltip-text-color-contrast);
  }
`,N=[D];var R=Object.defineProperty,O=(e,t,s,r)=>{for(var l=void 0,a=e.length-1,d;a>=0;a--)(d=e[a])&&(l=d(t,s,l)||l);return l&&R(t,s,l),l};const h=class h extends u{constructor(){super(),this.tooltipType=o.TOOLTIP_TYPE,this.backdrop=!1,this.color=o.COLOR,this.delay=o.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=o.OFFSET,this.placement=o.PLACEMENT,this.role="tooltip",this.showArrow=!0,this.trigger="mouseenter focusin",this.visible=!1,this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.flip=!0,this.focusTrap=!1,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,s;return((s=(t=this.defaultSlotNodes)==null?void 0:t.map(r=>r.textContent).join(" "))==null?void 0:s.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(i).includes(t)?t:o.TOOLTIP_TYPE)}onIdUpdated(){this.id.length===0&&(this.id=`mdc-tooltip-${A()}`);const t=document.getElementById(this.triggerID);if(t)switch(this.tooltipType){case i.DESCRIPTION:t.setAttribute("aria-describedby",this.id);break;case i.LABEL:t.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(m).includes(this.placement)||(this.placement=o.PLACEMENT)}onTooltipTypeUpdated(t){const s=t.get("tooltipType");Object.values(i).includes(this.tooltipType)||this.setTooltipType(o.TOOLTIP_TYPE);const r=document.getElementById(this.triggerID);if(r){const l=this.getTooltipText();switch(this.tooltipType){case i.DESCRIPTION:s===i.LABEL&&r.removeAttribute("aria-labelledby"),r.setAttribute("aria-describedby",this.id);break;case i.LABEL:s===i.DESCRIPTION&&r.removeAttribute("aria-describedby"),r.setAttribute("aria-labelledby",this.id);break;default:s===i.DESCRIPTION?r.removeAttribute("aria-describedby"):s===i.LABEL&&r.removeAttribute("aria-labelledby");break}l.length>0&&this.tooltipType!==i.NONE&&!this.ariaLabel&&(this.ariaLabel=l)}}update(t){super.update(t),t.has("id")&&this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};h.styles=[...u.styles,...N];let p=h;O([g({type:String,attribute:"tooltip-type",reflect:!0})],p.prototype,"tooltipType");O([w()],p.prototype,"defaultSlotNodes");p.register(C);const y=e=>x`
  <div style="margin: 100px;">
    <mdc-button id="${e.triggerID}">Hover here</mdc-button>
    <mdc-tooltip
      color="${e.color}"
      delay="${e.delay}"
      id="${e.id}"
      offset="${e.offset}"
      placement="${e.placement}"
      ?show-arrow="${e["show-arrow"]}"
      tooltip-type="${e["tooltip-type"]}"
      triggerid="${e.triggerID}"
      @shown="${n("onshown")}"
      @hidden="${n("onhidden")}"
      @created="${n("oncreated")}"
      @destroyed="${n("ondestroyed")}"
      >${e.children}</mdc-tooltip
    >
  </div>
`,ot={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:y,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(v)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(m)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(i)},triggerID:{control:"text"},...I(["--mdc-tooltip-max-width","--mdc-tooltip-padding","--mdc-tooltip-text-color","--mdc-tooltip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...S(["trigger","z-index","flip","role","visible","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","showPopover","hidePopover","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},c={render:y,args:{children:"This is a tooltip",color:o.COLOR,delay:o.DELAY,id:"tooltip",offset:o.OFFSET,placement:o.PLACEMENT,"show-arrow":o.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":o.TOOLTIP_TYPE}};var b,T,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render,
  args: {
    children: 'This is a tooltip',
    color: DEFAULTS.COLOR,
    delay: DEFAULTS.DELAY,
    id: 'tooltip',
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-arrow': DEFAULTS.SHOW_ARROW,
    triggerID: 'tooltip-trigger',
    'tooltip-type': DEFAULTS.TOOLTIP_TYPE
  }
}`,...(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const rt=["Example"];export{c as Example,rt as __namedExportsOrder,ot as default};
