import{D as o}from"./index-2hoP3hjw.js";import"./index-Dq1JfA8h.js";import"./index-DJWH5sh-.js";import{k as g,t}from"./iframe-BDHu_yvJ.js";import{C as b,P as u,S as h,D as v}from"./popover.constants-bfq-aWCY.js";import{h as T,a as w}from"./utils-B5QUENNQ.js";import"./popover.component-0Zl7a4bR.js";import"./BackdropMixin-Bb5K80y3.js";import"./KeyDownHandledMixin-lfim3BWe.js";import"./index-D-HwGd98.js";import"./index-CdSL4kC8.js";import"./button.component-U_hJOoCv.js";import"./buttonsimple.component-y37B5Ig5.js";import"./DisabledMixin-DBitIXox.js";import"./button.utils-rNW36Ji7.js";import"./index-uvgfi3Jp.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-Bs7jqCS5.js";import"./v4-CmTdKEVZ.js";import"./index-BONhwTVn.js";import"./IconNameMixin-BT8yayou.js";import"./index-ByCjSAHl.js";import"./linksimple.component-bBJ3U9SD.js";import"./DataAriaLabelMixin-Dx52Q3Al.js";import"./link.constants-BJ_Xc43k.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,m=e=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    <mdc-avatarbutton aria-label="Trigger button" icon-name="placeholder-bold" id="${e.triggerID}" initials="MD">
    </mdc-avatarbutton>
    <mdc-toggletip
      color="${e.color}"
      ?close-button="${e["close-button"]}"
      close-button-aria-label="${e["close-button-aria-label"]}"
      offset="${e.offset}"
      placement="${e.placement}"
      ?show-arrow="${e["show-arrow"]}"
      screenreader-announcer-identity="${t(e["screenreader-announcer-identity"])}"
      boundary-root="${t(e["boundary-root"])}"
      boundary="${t(e.boundary)}"
      boundary-padding="${t(e["boundary-padding"])}"
      backdrop-append-to="${t(e["backdrop-append-to"])}"
      ?is-backdrop-invisible="${e["is-backdrop-invisible"]}"
      strategy="${t(e.strategy)}"
      ?should-focus-trap-wrap="${e["should-focus-trap-wrap"]}"
      ?propagate-event-on-escape="${e["propagate-event-on-escape"]}"
      triggerid="${e.triggerID}"
      @shown="${r("onshown")}"
      @hidden="${r("onhidden")}"
      @created="${r("oncreated")}"
      @destroyed="${r("ondestroyed")}"
      ><div>
        The toggletip with a
        <mdc-link
          inline
          icon-name="placeholder-bold"
          href="https://www.webex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </mdc-link>
      </div>
    </mdc-toggletip>
  </div>`,K={title:"Components/toggletip",tags:["autodocs"],component:"mdc-toggletip",render:m,argTypes:{color:{control:"select",options:Object.values(b)},"close-button":{control:"boolean"},"close-button-aria-label":{control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(u)},"show-arrow":{control:"boolean"},triggerID:{control:"text"},"screenreader-announcer-identity":{control:"text"},"boundary-root":{control:"radio",options:["viewport","document"]},boundary:{control:"text"},"boundary-padding":{control:"number"},"backdrop-append-to":{control:"text"},"is-backdrop-invisible":{control:"boolean"},strategy:{control:"select",options:Object.values(h)},"should-focus-trap-wrap":{control:"boolean"},"propagate-event-on-escape":{control:"boolean"},...T(["id","delay","disable-aria-expanded","triggerElement","trigger","z-index","disable-flip","role","visible","focus-trap","prevent-scroll","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","keep-connected-tooltip-open","animation-frame","size","append-to","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","handleMouseEnter","handleMouseLeave","handleFocusOut","handleFocusIn","parseTrigger","positionPopover","removeAllListeners","removeTriggerListeners","setupTriggerListeners","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},n={render:m,args:{color:v.COLOR,"close-button":o.CLOSE_BUTTON,"close-button-aria-label":o.CLOSE_BUTTON_ARIA_LABEL,offset:o.OFFSET,placement:o.PLACEMENT,"show-arrow":o.SHOW_ARROW,"screenreader-announcer-identity":"",triggerID:"toggletip-trigger"}},i={render:()=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
      <mdc-avatarbutton aria-label="Trigger button" icon-name="placeholder-bold" id="trigger-1" initials="MD">
      </mdc-avatarbutton>
      <mdc-avatarbutton aria-label="Trigger button" id="trigger-2" initials="MD"> </mdc-avatarbutton>
      <mdc-toggletip triggerid="trigger-1">
        <div>
          First toggletip with a
          <mdc-link
            inline
            icon-name="placeholder-bold"
            href="https://www.webex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </mdc-link>
        </div>
      </mdc-toggletip>
      <mdc-toggletip triggerid="trigger-2" close-button close-button-aria-label="Close toggletip">
        <div>Second toggletip with close button</div>
      </mdc-toggletip>
    </div>`,...w()};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render,
  args: {
    color: POPOVER_DEFAULTS.COLOR,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    'close-button-aria-label': DEFAULTS.CLOSE_BUTTON_ARIA_LABEL,
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-arrow': DEFAULTS.SHOW_ARROW,
    'screenreader-announcer-identity': '',
    triggerID: 'toggletip-trigger'
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,s,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
      <mdc-avatarbutton aria-label="Trigger button" icon-name="placeholder-bold" id="trigger-1" initials="MD">
      </mdc-avatarbutton>
      <mdc-avatarbutton aria-label="Trigger button" id="trigger-2" initials="MD"> </mdc-avatarbutton>
      <mdc-toggletip triggerid="trigger-1">
        <div>
          First toggletip with a
          <mdc-link
            inline
            icon-name="placeholder-bold"
            href="https://www.webex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </mdc-link>
        </div>
      </mdc-toggletip>
      <mdc-toggletip triggerid="trigger-2" close-button close-button-aria-label="Close toggletip">
        <div>Second toggletip with close button</div>
      </mdc-toggletip>
    </div>\`,
  ...hideAllControls()
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Y=["Example","MultipleToggletips"];export{n as Example,i as MultipleToggletips,Y as __namedExportsOrder,K as default};
