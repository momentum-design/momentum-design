import{D as t}from"./index-uhIHmwRL.js";import"./index-CLj8CKut.js";import"./index-BUfSgImA.js";import{k as g}from"./iframe-C93ychXb.js";import{C as m,P as b,D as u}from"./popover.constants-Dzrzzlst.js";import{h}from"./utils-D6nie9pS.js";import"./base-DIkkzJ-c.js";import"./if-defined-CnyXlyTe.js";import"./popover.component-SNyoClXb.js";import"./BackdropMixin-BBVMbF3b.js";import"./index-DUmxh51I.js";import"./button.component-CnBjEV1_.js";import"./buttonsimple.component-X2HTReun.js";import"./TabIndexMixin-B6h01s2W.js";import"./DisabledMixin-BVCCD_zI.js";import"./button.utils-rNW36Ji7.js";import"./index-B7qECx3P.js";import"./preload-helper-C1FmrZbK.js";import"./index-bgO36agF.js";import"./index-DTrDRi1E.js";import"./index-tNbq4o_O.js";import"./v4-CmTdKEVZ.js";import"./index-BHMp62aL.js";import"./IconNameMixin-DS7O60Bi.js";import"./index-C34hOA_R.js";import"./linksimple.component-B2Sq36jz.js";import"./DataAriaLabelMixin-rJTBAIkI.js";import"./link.constants-BmtTf-56.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,p=e=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    <mdc-avatarbutton aria-label="Trigger button" icon-name="placeholder-bold" id="${e.triggerID}" initials="MD">
    </mdc-avatarbutton>
    <mdc-toggletip
      color="${e.color}"
      ?close-button="${e["close-button"]}"
      close-button-aria-label="${e["close-button-aria-label"]}"
      offset="${e.offset}"
      placement="${e.placement}"
      ?show-arrow="${e["show-arrow"]}"
      triggerid="${e.triggerID}"
      @shown="${o("onshown")}"
      @hidden="${o("onhidden")}"
      @created="${o("oncreated")}"
      @destroyed="${o("ondestroyed")}"
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
  </div>`,H={title:"Components/toggletip",tags:["autodocs"],component:"mdc-toggletip",render:p,argTypes:{color:{control:"select",options:Object.values(m)},"close-button":{control:"boolean"},"close-button-aria-label":{control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(b)},"show-arrow":{control:"boolean"},triggerID:{control:"text"},...h(["id","delay","disable-aria-expanded","triggerElement","trigger","z-index","disable-flip","role","visible","focus-trap","prevent-scroll","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},r={render:p,args:{color:u.COLOR,"close-button":t.CLOSE_BUTTON,"close-button-aria-label":t.CLOSE_BUTTON_ARIA_LABEL,offset:t.OFFSET,placement:t.PLACEMENT,"show-arrow":t.SHOW_ARROW,triggerID:"toggletip-trigger"}},i={render:()=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
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
    </div>`};var n,l,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render,
  args: {
    color: POPOVER_DEFAULTS.COLOR,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    'close-button-aria-label': DEFAULTS.CLOSE_BUTTON_ARIA_LABEL,
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-arrow': DEFAULTS.SHOW_ARROW,
    triggerID: 'toggletip-trigger'
  }
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var c,d,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    </div>\`
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const K=["Example","MultipleToggletips"];export{r as Example,i as MultipleToggletips,K as __namedExportsOrder,H as default};
