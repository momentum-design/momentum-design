import{u as E,n as y}from"./index-C9z9WAEj.js";import{e as g,v as L}from"./v4-BnQ50LvX.js";import{C as f,a as c,P as h}from"./popover.component-RtPrXFSh.js";import{i as A,k as P}from"./lit-element-D5KKan5q.js";import"./index-vGa-YSJb.js";import{d as x,h as I}from"./utils-D1SE5bce.js";import"./if-defined-D5BV9-c0.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-BX3Tn-Br.js";import"./button.constants-D3lNAbe_.js";import"./button.utils-idYASaaz.js";import"./index-P21x_s7g.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(e){return(t,s)=>{const{slot:i}={},l="slot"+(i?`[name=${i}]`:":not([name])");return g(t,s,{get(){var p;const a=(p=this.renderRoot)==null?void 0:p.querySelector(l);return(a==null?void 0:a.assignedNodes(e))??[]}})}}const C=E.constructTagName("tooltip"),r={DESCRIPTION:"description",LABEL:"label",NONE:"none"},o={BACKDROP:!1,COLOR:f.TONAL,DELAY:"0,0",OFFSET:4,PLACEMENT:c.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:r.DESCRIPTION},w=A`

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
`,D=[w];var N=Object.defineProperty,v=(e,t,s,i)=>{for(var l=void 0,a=e.length-1,p;a>=0;a--)(p=e[a])&&(l=p(t,s,l)||l);return l&&N(t,s,l),l};const m=class m extends h{constructor(){super(),this.tooltipType=o.TOOLTIP_TYPE,this.backdrop=!1,this.color=o.COLOR,this.delay=o.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=o.OFFSET,this.placement=o.PLACEMENT,this.role="tooltip",this.showArrow=!0,this.trigger="mouseenter focusin",this.visible=!1,this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.flip=!0,this.focusTrap=!1,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,s;return((s=(t=this.defaultSlotNodes)==null?void 0:t.map(i=>i.textContent).join(" "))==null?void 0:s.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(r).includes(t)?t:o.TOOLTIP_TYPE)}onIdUpdated(){this.id.length===0&&(this.id=`mdc-tooltip-${L()}`);const t=document.getElementById(this.triggerID);if(t)switch(this.tooltipType){case r.DESCRIPTION:t.setAttribute("aria-describedby",this.id);break;case r.LABEL:t.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(c).includes(this.placement)||(this.placement=o.PLACEMENT)}onTooltipTypeUpdated(t){const s=t.get("tooltipType");Object.values(r).includes(this.tooltipType)||this.setTooltipType(o.TOOLTIP_TYPE);const i=document.getElementById(this.triggerID);if(i){const l=this.getTooltipText();switch(this.tooltipType){case r.DESCRIPTION:s===r.LABEL&&i.removeAttribute("aria-labelledby"),i.setAttribute("aria-describedby",this.id);break;case r.LABEL:s===r.DESCRIPTION&&i.removeAttribute("aria-describedby"),i.setAttribute("aria-labelledby",this.id);break;default:s===r.DESCRIPTION?i.removeAttribute("aria-describedby"):s===r.LABEL&&i.removeAttribute("aria-labelledby");break}l.length>0&&this.tooltipType!==r.NONE&&!this.ariaLabel&&(this.ariaLabel=l)}}update(t){super.update(t),t.has("id")&&this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};m.styles=[...h.styles,...D];let d=m;v([y({type:String,attribute:"tooltip-type",reflect:!0})],d.prototype,"tooltipType");v([S()],d.prototype,"defaultSlotNodes");d.register(C);const O=e=>P`
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
      >${e.children}</mdc-tooltip>
  </div>
  `,Z={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:O,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(f)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(c)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(r)},triggerID:{control:"text"},...x(["--mdc-tooltip-max-width","--mdc-tooltip-padding","--mdc-tooltip-text-color","--mdc-tooltip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...I(["trigger","z-index","flip","role","visible","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","showPopover","hidePopover","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},n={render:O,args:{children:"This is a tooltip",color:o.COLOR,delay:o.DELAY,id:"tooltip",offset:o.OFFSET,placement:o.PLACEMENT,"show-arrow":o.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":o.TOOLTIP_TYPE}};var u,b,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const tt=["Example"];export{n as Example,tt as __namedExportsOrder,Z as default};
