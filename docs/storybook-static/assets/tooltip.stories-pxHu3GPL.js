import{k as n}from"./iframe-Dxl5JR04.js";import{T as x,D as e}from"./index-DTURrGDY.js";import{h as T}from"./utils-D6nie9pS.js";import"./index-A4-hMiqu.js";import"./index-BdkcgZAW.js";import"./index-BCWHRvTc.js";import"./index-CEqrV_Q3.js";import{C as L,P as E,D as O}from"./popover.constants-DQzcjyKr.js";import"./preload-helper-C1FmrZbK.js";import"./popover.component-DmBzfHXE.js";import"./if-defined-C0_rihGE.js";import"./BackdropMixin-B9iwA8Pd.js";import"./dom-BlZvhF8F.js";import"./KeyToActionMixin-C-lGXqvj.js";import"./v4-CmTdKEVZ.js";import"./button.component-CjD-zRkO.js";import"./buttonsimple.component-IBnNJfn4.js";import"./DisabledMixin-CidSUaWv.js";import"./button.utils-rNW36Ji7.js";import"./index-BW7z8kIE.js";import"./index-D7Hd0FkL.js";import"./index-DTrDRi1E.js";import"./ListNavigationMixin-D_DR0ZK2.js";import"./listitem.component-DY0uLTU1.js";import"./query-assigned-elements-BITy9NLX.js";import"./CaptureDestroyEventForChildElement-yyNiJRyJ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,f=t=>n`
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
      @shown="${l("onshown")}"
      @hidden="${l("onhidden")}"
      @created="${l("oncreated")}"
      @destroyed="${l("ondestroyed")}"
      ?visible="${t.visible}"
      >${t.children}</mdc-tooltip
    >
  </div>
`,Z={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:f,argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(L)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(E)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(x)},triggerID:{control:"text"},...T(["trigger","z-index","disable-flip","role","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},i={render:f,args:{children:"This is a tooltip",color:O.COLOR,delay:e.DELAY,id:"tooltip",offset:e.OFFSET,placement:e.PLACEMENT,"show-arrow":e.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":e.TOOLTIP_TYPE,visible:!1}},r={render:()=>{let t=!1;const d="width: 100px;";return n`
      <mdc-text
        id="text"
        style="width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
        tagname="h1"
        >This is really long text that will overflow</mdc-text
      >
      <mdc-tooltip triggerID="text" only-show-when-trigger-overflows tooltip-type="none" placement="right"
        >This is really long text that will overflow</mdc-tooltip
      >
      <br />
      <mdc-button id="button" style="width: 100px;"> This is really long text that will overflow </mdc-button>
      <mdc-tooltip triggerID="button" only-show-when-trigger-overflows tooltip-type="none" placement="right"
        >This is really long text that will overflow</mdc-tooltip
      >

      <hr />
      <mdc-button @click=${()=>{t=!t;const m=document.getElementById("text"),a=document.getElementById("button"),o="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";t?(m.setAttribute("style",o),a.setAttribute("style",o)):(m.setAttribute("style",d+o),a.setAttribute("style",d+o))}}>Toggle Width</mdc-button>
    `}},s={render:()=>n`
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
  `};var c,p,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,b,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    let toggle = false;
    const smallWidth = 'width: 100px;';
    const toggleWidth = () => {
      toggle = !toggle;
      const textElement = document.getElementById('text');
      const buttonElement = document.getElementById('button');
      const defaultStyles = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
      if (toggle) {
        textElement!.setAttribute('style', defaultStyles);
        buttonElement!.setAttribute('style', defaultStyles);
      } else {
        textElement!.setAttribute('style', smallWidth + defaultStyles);
        buttonElement!.setAttribute('style', smallWidth + defaultStyles);
      }
    };
    return html\`
      <mdc-text
        id="text"
        style="width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
        tagname="h1"
        >This is really long text that will overflow</mdc-text
      >
      <mdc-tooltip triggerID="text" only-show-when-trigger-overflows tooltip-type="none" placement="right"
        >This is really long text that will overflow</mdc-tooltip
      >
      <br />
      <mdc-button id="button" style="width: 100px;"> This is really long text that will overflow </mdc-button>
      <mdc-tooltip triggerID="button" only-show-when-trigger-overflows tooltip-type="none" placement="right"
        >This is really long text that will overflow</mdc-tooltip
      >

      <hr />
      <mdc-button @click=\${toggleWidth}>Toggle Width</mdc-button>
    \`;
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var w,y,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const tt=["Example","TooltipOnTextOverflow","TooltipInsidePopover"];export{i as Example,s as TooltipInsidePopover,r as TooltipOnTextOverflow,tt as __namedExportsOrder,Z as default};
