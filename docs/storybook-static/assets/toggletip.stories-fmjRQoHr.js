import{D as t}from"./index-tABX5FSG.js";import"./index-BKV0fMqb.js";import"./index-quIg3TdA.js";import{k as g}from"./iframe-DbgY0XZq.js";import{C as m,P as b,D as u}from"./popover.component-RihxNwpq.js";import{t as v,a as h}from"./utils-CFOyPOhY.js";import"./if-defined-eKDu-_p9.js";import"./index-B-gC7uq5.js";import"./button.component-DgeaCnJx.js";import"./button.constants-DWbpQzt7.js";import"./buttonsimple.constants-pBsvrQJ0.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-B0C9jY48.js";import"./keys-hFXe221I.js";import"./DisabledMixin-Dr_5VXrL.js";import"./TabIndexMixin-CwZtzu4c.js";import"./index-D-Wwp81n.js";import"./button.utils-rNW36Ji7.js";import"./index-DkikKdpp.js";import"./preload-helper-C1FmrZbK.js";import"./index-ClI7Erma.js";import"./index-DTrDRi1E.js";import"./index-Dy3aFbU4.js";import"./v4-CmTdKEVZ.js";import"./index-bsMK9RpR.js";import"./IconNameMixin-y-yu1gsN.js";import"./index-e340kz-P.js";import"./index-DQT4P-Wl.js";import"./linksimple.component-SYLXSDtF.js";import"./DataAriaLabelMixin-CoVRLiNl.js";import"./link.constants-DPp1HJ2n.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DUtEMsV1.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,s=e=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
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
  </div>`,Q={title:"Components/toggletip",tags:["autodocs"],component:"mdc-toggletip",render:s,argTypes:{color:{control:"select",options:Object.values(m)},"close-button":{control:"boolean"},"close-button-aria-label":{control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(b)},"show-arrow":{control:"boolean"},triggerID:{control:"text"},...v(["--mdc-toggletip-max-width","--mdc-toggletip-text-color","--mdc-toggletip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...h(["id","delay","disable-aria-expanded","triggerElement","trigger","z-index","flip","role","visible","focus-trap","prevent-scroll","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","aria-labelledby","aria-describedby","show","hide","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},r={render:s,args:{color:u.COLOR,"close-button":t.CLOSE_BUTTON,"close-button-aria-label":t.CLOSE_BUTTON_ARIA_LABEL,offset:t.OFFSET,placement:t.PLACEMENT,"show-arrow":t.SHOW_ARROW,triggerID:"toggletip-trigger"}},i={render:()=>g` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
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
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var c,d,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const X=["Example","MultipleToggletips"];export{r as Example,i as MultipleToggletips,X as __namedExportsOrder,Q as default};
