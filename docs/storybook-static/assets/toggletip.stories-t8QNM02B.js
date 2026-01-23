import{D as o}from"./index-BcO7BA_0.js";import"./index-DDt7Q2JC.js";import"./index-DBXfNPvn.js";import{k as g}from"./iframe-BsSOvdiI.js";import{t}from"./if-defined-Cv7J1nAi.js";import{C as b,P as u,S as h,D as v}from"./popover.constants-BSWNBOE7.js";import{h as T,a as f}from"./utils-D6nie9pS.js";import"./popover.component-D6Eqefys.js";import"./BackdropMixin-DzXuwf05.js";import"./dom-BlZvhF8F.js";import"./KeyToActionMixin-NJAwsg8D.js";import"./index-CDpY4Xpy.js";import"./button.component-lOqoOFxR.js";import"./buttonsimple.component-DIoIQKM2.js";import"./DisabledMixin-fjLCGnVB.js";import"./button.utils-rNW36Ji7.js";import"./index-D5ySaiVt.js";import"./preload-helper-C1FmrZbK.js";import"./index-BD9j_4IV.js";import"./index-DTrDRi1E.js";import"./index-CyshhQF0.js";import"./v4-CmTdKEVZ.js";import"./index-DCy74A_6.js";import"./IconNameMixin-Bds9UP_C.js";import"./index-DjIf1Oru.js";import"./linksimple.component-DyAKhscJ.js";import"./DataAriaLabelMixin-Bdk731Yz.js";import"./link.constants-Tv0Ple2n.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,m=e=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
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
  </div>`,G={title:"Components/toggletip",tags:["autodocs"],component:"mdc-toggletip",render:m,argTypes:{color:{control:"select",options:Object.values(b)},"close-button":{control:"boolean"},"close-button-aria-label":{control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(u)},"show-arrow":{control:"boolean"},triggerID:{control:"text"},"screenreader-announcer-identity":{control:"text"},"boundary-root":{control:"radio",options:["viewport","document"]},boundary:{control:"text"},"boundary-padding":{control:"number"},"backdrop-append-to":{control:"text"},"is-backdrop-invisible":{control:"boolean"},strategy:{control:"select",options:Object.values(h)},"should-focus-trap-wrap":{control:"boolean"},"propagate-event-on-escape":{control:"boolean"},...T(["id","delay","disable-aria-expanded","triggerElement","trigger","z-index","disable-flip","role","visible","focus-trap","prevent-scroll","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","keep-connected-tooltip-open","animation-frame","size","append-to","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","handleMouseEnter","handleMouseLeave","handleFocusOut","handleFocusIn","parseTrigger","positionPopover","removeAllListeners","removeTriggerListeners","setupTriggerListeners","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},n={render:m,args:{color:v.COLOR,"close-button":o.CLOSE_BUTTON,"close-button-aria-label":o.CLOSE_BUTTON_ARIA_LABEL,offset:o.OFFSET,placement:o.PLACEMENT,"show-arrow":o.SHOW_ARROW,"screenreader-announcer-identity":"",triggerID:"toggletip-trigger"}},i={render:()=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
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
    </div>`,...f()};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const q=["Example","MultipleToggletips"];export{n as Example,i as MultipleToggletips,q as __namedExportsOrder,G as default};
