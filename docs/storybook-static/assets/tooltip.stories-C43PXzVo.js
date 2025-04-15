import{T as n,D as e}from"./index-BL7cBJOV.js";import{k as c}from"./lit-element-D5KKan5q.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{C as a,P as s,D as m}from"./popover.component-BXope1DD.js";import"./index-BSsK6Tjg.js";import{d as b,h as v}from"./utils-CO8B6ZcN.js";import"./index-C9z9WAEj.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./v4-CQkTLCs1.js";import"./if-defined-D5BV9-c0.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-PSrQpcnn.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.constants-DagSuLvr.js";import"./button.utils-rNW36Ji7.js";import"./index-DTxwd9QR.js";import"./iframe-uoZmXkm1.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const d=o=>c`
  <div style="margin: 100px;">
    <mdc-button id="${o.triggerID}">Hover here</mdc-button>
    <mdc-tooltip
      color="${o.color}"
      delay="${o.delay}"
      id="${o.id}"
      offset="${o.offset}"
      placement="${o.placement}"
      ?show-arrow="${o["show-arrow"]}"
      tooltip-type="${o["tooltip-type"]}"
      triggerid="${o.triggerID}"
      @shown="${t("onshown")}"
      @hidden="${t("onhidden")}"
      @created="${t("oncreated")}"
      @destroyed="${t("ondestroyed")}"
      ?visible="${o.visible}"
      >${o.children}</mdc-tooltip>
  </div>
`,Y={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:d,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(a)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(s)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(n)},triggerID:{control:"text"},...b(["--mdc-tooltip-max-width","--mdc-tooltip-padding","--mdc-tooltip-text-color","--mdc-tooltip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...v(["trigger","z-index","flip","role","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","showPopover","hidePopover","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},r={render:d,args:{children:"This is a tooltip",color:m.COLOR,delay:e.DELAY,id:"tooltip",offset:e.OFFSET,placement:e.PLACEMENT,"show-arrow":e.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":e.TOOLTIP_TYPE,visible:!1}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=["Example"];export{r as Example,N as __namedExportsOrder,Y as default};
