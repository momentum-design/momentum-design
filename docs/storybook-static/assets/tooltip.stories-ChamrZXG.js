import{u as y,n as O}from"./index-C9z9WAEj.js";import{e as g}from"./base-DIkkzJ-c.js";import{a as m,P as u,C as P,D as A}from"./popover.component-DR6Z0Jh5.js";import{i as L,k as x}from"./lit-element-D5KKan5q.js";import{v as S}from"./v4-CmTdKEVZ.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-BLHjXjde.js";import{d as I,h as w}from"./utils-D1SE5bce.js";import"./if-defined-D5BV9-c0.js";import"./v4-CQkTLCs1.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-erRKITyq.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CrgYZA2k.js";import"./button.constants-ZfNn7qyJ.js";import"./button.utils-DsAX4jmL.js";import"./index-fgTGGUkO.js";import"./iframe-CIhAmhYh.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(e){return(t,r)=>{const{slot:o}={},l="slot"+(o?`[name=${o}]`:":not([name])");return g(t,r,{get(){var n;const a=(n=this.renderRoot)==null?void 0:n.querySelector(l);return(a==null?void 0:a.assignedNodes(e))??[]}})}}const C=y.constructTagName("tooltip"),i={DESCRIPTION:"description",LABEL:"label",NONE:"none"},s={BACKDROP:!1,DELAY:"0,0",OFFSET:4,PLACEMENT:m.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:i.DESCRIPTION},N=L`

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
`,$=[N];var F=Object.defineProperty,v=(e,t,r,o)=>{for(var l=void 0,a=e.length-1,n;a>=0;a--)(n=e[a])&&(l=n(t,r,l)||l);return l&&F(t,r,l),l};const h=class h extends u{constructor(){super(...arguments),this.tooltipType=s.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.backdrop=!1,this.delay=s.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=s.OFFSET,this.placement=s.PLACEMENT,this.role="tooltip",this.showArrow=!0,this.trigger="mouseenter focusin",this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.flip=!0,this.focusTrap=!1,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,r;return((r=(t=this.defaultSlotNodes)==null?void 0:t.map(o=>o.textContent).join(" "))==null?void 0:r.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(i).includes(t)?t:s.TOOLTIP_TYPE)}onIdUpdated(){this.id.length===0&&(this.id=`mdc-tooltip-${S()}`);const t=document.getElementById(this.triggerID);if(t)switch(this.tooltipType){case i.DESCRIPTION:t.setAttribute("aria-describedby",this.id);break;case i.LABEL:t.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(m).includes(this.placement)||(this.placement=s.PLACEMENT)}onTooltipTypeUpdated(t){const r=t.get("tooltipType");Object.values(i).includes(this.tooltipType)||this.setTooltipType(s.TOOLTIP_TYPE);const o=document.getElementById(this.triggerID);if(o){const l=this.getTooltipText();switch(this.tooltipType){case i.DESCRIPTION:r===i.LABEL&&o.removeAttribute("aria-labelledby"),o.setAttribute("aria-describedby",this.id);break;case i.LABEL:r===i.DESCRIPTION&&o.removeAttribute("aria-describedby"),o.setAttribute("aria-labelledby",this.id);break;default:r===i.DESCRIPTION?o.removeAttribute("aria-describedby"):r===i.LABEL&&o.removeAttribute("aria-labelledby");break}l.length>0&&this.tooltipType!==i.NONE&&!this.ariaLabel&&(this.ariaLabel=l)}}update(t){super.update(t),t.has("id")&&this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};h.styles=[...u.styles,...$];let d=h;v([O({type:String,attribute:"tooltip-type",reflect:!0})],d.prototype,"tooltipType");v([D()],d.prototype,"defaultSlotNodes");d.register(C);const E=e=>x`
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
      @shown="${p("onshown")}"
      @hidden="${p("onhidden")}"
      @created="${p("oncreated")}"
      @destroyed="${p("ondestroyed")}"
      ?visible="${e.visible}"
      >${e.children}</mdc-tooltip>
  </div>
`,rt={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:E,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(P)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(m)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(i)},triggerID:{control:"text"},...I(["--mdc-tooltip-max-width","--mdc-tooltip-padding","--mdc-tooltip-text-color","--mdc-tooltip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...w(["trigger","z-index","flip","role","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","showPopover","hidePopover","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},c={render:E,args:{children:"This is a tooltip",color:A.COLOR,delay:s.DELAY,id:"tooltip",offset:s.OFFSET,placement:s.PLACEMENT,"show-arrow":s.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":s.TOOLTIP_TYPE,visible:!1}};var b,f,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render,
  args: {
    children: 'This is a tooltip',
    color: POPOVER_DEFAULTS.COLOR,
    delay: DEFAULTS.DELAY,
    id: 'tooltip',
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-arrow': DEFAULTS.SHOW_ARROW,
    triggerID: 'tooltip-trigger',
    'tooltip-type': DEFAULTS.TOOLTIP_TYPE,
    visible: false
  }
}`,...(T=(f=c.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const st=["Example"];export{c as Example,st as __namedExportsOrder,rt as default};
