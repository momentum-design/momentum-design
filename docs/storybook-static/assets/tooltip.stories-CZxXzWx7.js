import{k as d}from"./iframe-CoZufWyv.js";import{T as O,D as e}from"./index-B-k8MRrJ.js";import{h as k}from"./utils-B5QUENNQ.js";import"./index-B_dI6GZ6.js";import"./index-gef9MWkI.js";import"./index-CgcexRJI.js";import"./index-C5Qz_PKs.js";import"./index-CK8zTN3p.js";import{C as S,P as A,D}from"./popover.constants-C2NeOelP.js";import"./preload-helper-C1FmrZbK.js";import"./popover.component-yjR190Q8.js";import"./if-defined-B0318-pP.js";import"./BackdropMixin-92KLvOLs.js";import"./KeyDownHandledMixin-C7VmcIzg.js";import"./index-nMML2DHc.js";import"./v4-CmTdKEVZ.js";import"./button.component-CcTMZWXg.js";import"./buttonsimple.component-C8evNhor.js";import"./DisabledMixin-oyOWrvDE.js";import"./button.utils-rNW36Ji7.js";import"./index-CZnTnomU.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-DbaYQX-_.js";import"./linksimple.component-DF0oBa9m.js";import"./DataAriaLabelMixin-CZeKGBaN.js";import"./link.constants-C6w5fJxN.js";import"./list.component-DVTo65Ds.js";import"./ListNavigationMixin-BJFyfjbL.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-RV7P9Fxe.js";import"./CaptureDestroyEventForChildElement-DR5l64Pc.js";import"./listitem.component-CcZqBYlI.js";import"./query-assigned-elements-Bb9V_31n.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,E=t=>d`
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
      @shown="${i("onshown")}"
      @hidden="${i("onhidden")}"
      @created="${i("oncreated")}"
      @destroyed="${i("ondestroyed")}"
      ?visible="${t.visible}"
      >${t.children}</mdc-tooltip
    >
  </div>
`,at={title:"Components/tooltip",tags:["autodocs"],component:"mdc-tooltip",render:E,argTypes:{children:{control:"text"},color:{control:"select",options:Object.values(S)},delay:{control:"text"},id:{description:"The id of the tooltip(optional, if not set, a random id will be generated)",control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(A)},"show-arrow":{control:"boolean"},"tooltip-type":{control:"select",options:Object.values(O)},triggerID:{control:"text"},...k(["trigger","z-index","disable-flip","role","focus-trap","prevent-scroll","close-button","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","close-button-aria-label","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},l={render:E,args:{children:"This is a tooltip",color:D.COLOR,delay:e.DELAY,id:"tooltip",offset:e.OFFSET,placement:e.PLACEMENT,"show-arrow":e.SHOW_ARROW,triggerID:"tooltip-trigger","tooltip-type":e.TOOLTIP_TYPE,visible:!1}},r={render:()=>{let t=!1;const m="width: 100px;";return d`
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
      <mdc-button @click=${()=>{t=!t;const a=document.getElementById("text"),c=document.getElementById("button"),o="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";t?(a.setAttribute("style",o),c.setAttribute("style",o)):(a.setAttribute("style",m+o),c.setAttribute("style",m+o))}}>Toggle Width</mdc-button>
    `}},n={render:()=>d`
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
  `},s={render:()=>d`
    <div style="margin: 100px; max-width: 300px;">
      <mdc-text type="body-large-regular" tagname="p">
        Here is some text with a
        <mdc-link id="inline-link-trigger" inline style="display: inline;">
          longer inline link that should wrap across multiple lines to demonstrate positioning
        </mdc-link>
        and more text after the link.
      </mdc-text>
      <mdc-tooltip triggerid="inline-link-trigger" placement="top" inline>
        This tooltip is attached to an inline link
      </mdc-tooltip>
    </div>
  `};var p,g,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,u,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(u=r.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var y,v,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,T,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="margin: 100px; max-width: 300px;">
      <mdc-text type="body-large-regular" tagname="p">
        Here is some text with a
        <mdc-link id="inline-link-trigger" inline style="display: inline;">
          longer inline link that should wrap across multiple lines to demonstrate positioning
        </mdc-link>
        and more text after the link.
      </mdc-text>
      <mdc-tooltip triggerid="inline-link-trigger" placement="top" inline>
        This tooltip is attached to an inline link
      </mdc-tooltip>
    </div>
  \`
}`,...(L=(T=s.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const ct=["Example","TooltipOnTextOverflow","TooltipInsidePopover","TooltipOnInlineLink"];export{l as Example,n as TooltipInsidePopover,s as TooltipOnInlineLink,r as TooltipOnTextOverflow,ct as __namedExportsOrder,at as default};
