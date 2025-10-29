import{D as t}from"./index-Di-ZdPqw.js";import"./index-DRPOYh3-.js";import"./index-C-DfG5Fe.js";import{k as g}from"./iframe-CIWT31eQ.js";import{C as m,P as b,D as u}from"./popover.component-D-eZEHXi.js";import{a as h}from"./utils-Dd_sfl9-.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./if-defined-ANivnARJ.js";import"./index-BniTtJNo.js";import"./button.component-DBi2KVRS.js";import"./buttonsimple.component-xF3qZqsX.js";import"./TabIndexMixin-D6Dugml5.js";import"./DisabledMixin-DKVMpEIO.js";import"./button.utils-rNW36Ji7.js";import"./index-BZ0W2Fk1.js";import"./preload-helper-C1FmrZbK.js";import"./index-DOiWVS3z.js";import"./index-DTrDRi1E.js";import"./index-C4vhA__l.js";import"./v4-CmTdKEVZ.js";import"./index-BN0LYQzU.js";import"./IconNameMixin-VVhjwWv6.js";import"./index-PyPpD9J9.js";import"./linksimple.component-BIaA1mjj.js";import"./DataAriaLabelMixin-J0qnxRIa.js";import"./link.constants-CFMTLiFM.js";import"./BackdropMixin-WQFjoqtV.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,p=e=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
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
  </div>`,H={title:"Components/toggletip",tags:["autodocs"],component:"mdc-toggletip",render:p,argTypes:{color:{control:"select",options:Object.values(m)},"close-button":{control:"boolean"},"close-button-aria-label":{control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(b)},"show-arrow":{control:"boolean"},triggerID:{control:"text"},...h(["id","delay","disable-aria-expanded","triggerElement","trigger","z-index","flip","role","visible","focus-trap","prevent-scroll","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},r={render:p,args:{color:u.COLOR,"close-button":t.CLOSE_BUTTON,"close-button-aria-label":t.CLOSE_BUTTON_ARIA_LABEL,offset:t.OFFSET,placement:t.PLACEMENT,"show-arrow":t.SHOW_ARROW,triggerID:"toggletip-trigger"}},i={render:()=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
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
