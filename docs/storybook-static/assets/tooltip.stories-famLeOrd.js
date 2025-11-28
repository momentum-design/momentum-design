import{k as c}from"./iframe-Dz6bdCHw.js";import{T as b,D as e}from"./index-DRiULUWw.js";import{h}from"./utils-CO8B6ZcN.js";import"./index-cOAv1Lq7.js";import"./index-DYZBhBMe.js";import"./index-BLuA8rf3.js";import"./index-DEoo6sWP.js";import{C as g,P as u,D as v}from"./popover.component-DYSzmks6.js";import"./preload-helper-C1FmrZbK.js";import"./v4-CmTdKEVZ.js";import"./button.component-DBC6JZHJ.js";import"./buttonsimple.component-DzWSD_E-.js";import"./TabIndexMixin-BAiNPty-.js";import"./DisabledMixin-DY4t-H77.js";import"./button.utils-rNW36Ji7.js";import"./index-CmRLYQ9M.js";import"./index-CfYEoHsm.js";import"./index-DTrDRi1E.js";import"./ListNavigationMixin-Bx4BvAyC.js";import"./listitem.component-BeZa1oOB.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./CaptureDestroyEventForChildElement-BhmidJun.js";import"./if-defined-BX_n7AzT.js";import"./BackdropMixin-2lPk_DxX.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,p=t=>c`
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
`,j={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:p,argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(g)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(u)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(b)},triggerID:{control:"text"},...h(["trigger","z-index","disable-flip","role","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},i={render:p,args:{children:"This is a tooltip",color:v.COLOR,delay:e.DELAY,id:"tooltip",offset:e.OFFSET,placement:e.PLACEMENT,"show-arrow":e.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":e.TOOLTIP_TYPE,visible:!1}},l={render:()=>c`
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
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var a,s,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=l.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const V=["Example","TooltipInsidePopover"];export{i as Example,l as TooltipInsidePopover,V as __namedExportsOrder,j as default};
