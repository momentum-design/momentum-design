import{k as s}from"./iframe-D1RGJO9g.js";import{T as b,D as e}from"./index-Cc6Q5g1v.js";import{t as g,a as u}from"./utils-CFOyPOhY.js";import"./index-B4ra579S.js";import"./index-Uu7FmNbu.js";import"./index-BcRk93IX.js";import"./index-Dxe5zRPe.js";import{C as h,P as v,D as L}from"./popover.component-DYjVfDou.js";import"./preload-helper-C1FmrZbK.js";import"./roles-CJI3JVG-.js";import"./v4-CmTdKEVZ.js";import"./button.component-DqAqkrM0.js";import"./button.constants-ctBMf0Nr.js";import"./buttonsimple.constants-DiW5GZvm.js";import"./buttonsimple.component-bVzR6LPV.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CFnJTGkD.js";import"./TabIndexMixin-Bl7-LDRA.js";import"./index-CQUTSyim.js";import"./button.utils-rNW36Ji7.js";import"./index-DGuVKFIz.js";import"./index-0dAn93WX.js";import"./index-DTrDRi1E.js";import"./ListNavigationMixin-DgCStHq0.js";import"./listitem.component-D9_vqDtz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-DcbpN_bp.js";import"./CaptureDestroyEventForChildElement-B9960-RZ.js";import"./if-defined-CEt-h5rX.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,p=t=>s`
  <div style="margin: 100px;">
    <mdc-button id="${t.triggerID}">Hover here</mdc-button>
    <mdc-tooltip
      color="${t.color}"
      delay="${t.delay}"
      id="${t.id}"
      offset="${t.offset}"
      placement="${t.placement}"
      ?show-arrow="${t["show-arrow"]}"
      tooltip-type="${t["tooltip-type"]}"
      triggerid="${t.triggerID}"
      @shown="${o("onshown")}"
      @hidden="${o("onhidden")}"
      @created="${o("oncreated")}"
      @destroyed="${o("ondestroyed")}"
      ?visible="${t.visible}"
      >${t.children}</mdc-tooltip
    >
  </div>
`,G={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:p,argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(h)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(v)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(b)},triggerID:{control:"text"},...g(["--mdc-tooltip-max-width","--mdc-tooltip-padding","--mdc-tooltip-text-color","--mdc-tooltip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...u(["trigger","z-index","flip","role","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},i={render:p,args:{children:"This is a tooltip",color:L.COLOR,delay:e.DELAY,id:"tooltip",offset:e.OFFSET,placement:e.PLACEMENT,"show-arrow":e.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":e.TOOLTIP_TYPE,visible:!1}},l={render:()=>s`
    <mdc-popover visible hide-on-outside-click>
      <div style="margin: 10rem; width: 8rem;">
        <p>Click below button & Hover on Label 5</p>
        <mdc-button id="popover-trigger">Click me</mdc-button>
        <mdc-popover triggerid="popover-trigger" hide-on-outside-click>
          <mdc-list>
            <mdc-listitem label="Label 1"></mdc-listitem>
            <mdc-listitem label="Label 2"></mdc-listitem>
            <mdc-listitem label="Label 3"></mdc-listitem>
            <mdc-listitem label="Label 4"></mdc-listitem>
            <mdc-listitem label="Label 5" id="tooltip-trigger"></mdc-listitem>
            <mdc-tooltip triggerid="tooltip-trigger" show-arrow style="--mdc-popover-max-width: 750px;">
              This tooltip is inside a popover and it has a long text to read. Please take your time to go through it
              carefully, as it contains valuable information that might help you understand the context, functionality,
              or features related to the element you're interacting with.
            </mdc-tooltip>
            <mdc-listitem label="Label 6"></mdc-listitem>
            <mdc-listitem label="Label 7"></mdc-listitem>
            <mdc-listitem label="Label 8"></mdc-listitem>
            <mdc-listitem label="Label 9"></mdc-listitem>
            <mdc-listitem label="Label 10"></mdc-listitem>
          </mdc-list>
        </mdc-popover>
      </div>
    </mdc-popover>
  `};var r,m,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,a,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-popover visible hide-on-outside-click>
      <div style="margin: 10rem; width: 8rem;">
        <p>Click below button & Hover on Label 5</p>
        <mdc-button id="popover-trigger">Click me</mdc-button>
        <mdc-popover triggerid="popover-trigger" hide-on-outside-click>
          <mdc-list>
            <mdc-listitem label="Label 1"></mdc-listitem>
            <mdc-listitem label="Label 2"></mdc-listitem>
            <mdc-listitem label="Label 3"></mdc-listitem>
            <mdc-listitem label="Label 4"></mdc-listitem>
            <mdc-listitem label="Label 5" id="tooltip-trigger"></mdc-listitem>
            <mdc-tooltip triggerid="tooltip-trigger" show-arrow style="--mdc-popover-max-width: 750px;">
              This tooltip is inside a popover and it has a long text to read. Please take your time to go through it
              carefully, as it contains valuable information that might help you understand the context, functionality,
              or features related to the element you're interacting with.
            </mdc-tooltip>
            <mdc-listitem label="Label 6"></mdc-listitem>
            <mdc-listitem label="Label 7"></mdc-listitem>
            <mdc-listitem label="Label 8"></mdc-listitem>
            <mdc-listitem label="Label 9"></mdc-listitem>
            <mdc-listitem label="Label 10"></mdc-listitem>
          </mdc-list>
        </mdc-popover>
      </div>
    </mdc-popover>
  \`
}`,...(n=(a=l.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const J=["Example","TooltipInsidePopover"];export{i as Example,l as TooltipInsidePopover,J as __namedExportsOrder,G as default};
