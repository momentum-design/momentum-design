import{i as E,k as f}from"./lit-element-D5KKan5q.js";import{u as T,n as A}from"./index-C9z9WAEj.js";import{r as L}from"./state-CSSggq2n.js";import{a as c,b as C,P as g,n as y,C as x,D as w}from"./popover.component-CLVcAiaC.js";import"./index-kAuWNkNv.js";import"./index-CWUJHaLg.js";import"./index-CLTHqd-L.js";import"./index-wPjeZ8cL.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as S,h as _}from"./utils-CO8B6ZcN.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./button.component-DP9lGkCN.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./button.utils-rNW36Ji7.js";import"./index-DTUAfOMb.js";import"./iframe-C7hvKWjo.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CmTdKEVZ.js";import"./index-BwyzI1MS.js";import"./IconNameMixin-CujGSn0t.js";import"./index-CUTP4Eqs.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./link.constants-CqyNsepP.js";import"./linksimple.component-CTvKnIXa.js";import"./v4-CQkTLCs1.js";const P=T.constructTagName("toggletip"),t={CLOSE_BUTTON:!0,CLOSE_BUTTON_ARIA_LABEL:"Close",OFFSET:4,PLACEMENT:c.TOP,CLICK:C.CLICK,SHOW_ARROW:!0},N=E`
  :host {
    --mdc-toggletip-max-width: 400px;
    --mdc-toggletip-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-toggletip-text-color-contrast: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host::part(popover-content) {
    color: var(--mdc-toggletip-text-color);
    min-width: fit-content;
    max-width: var(--mdc-toggletip-max-width);

    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([color='contrast'])::part(popover-content) {
    color: var(--mdc-toggletip-text-color-contrast);
  }

  :host(:dir(ltr))::part(popover-content) {
    margin-right: 2rem;
  }

  :host(:dir(rtl))::part(popover-content) {
    margin-left: 2rem;
  }
`,R=[N];var U=Object.defineProperty,p=(e,o,i,m)=>{for(var r=void 0,l=e.length-1,u;l>=0;l--)(u=e[l])&&(r=u(o,i,r)||r);return r&&U(o,i,r),r};const d=class d extends g{constructor(){super(...arguments),this.currentAnnouncement="",this.screenreaderAnnouncerIdentity=""}connectedCallback(){super.connectedCallback(),this.closeButton=t.CLOSE_BUTTON,this.closeButtonAriaLabel=t.CLOSE_BUTTON_ARIA_LABEL,this.placement=t.PLACEMENT,this.trigger=t.CLICK,this.showArrow=t.SHOW_ARROW,this.interactive=!0,this.backdrop=!0,this.hideOnBlur=!0,this.hideOnEscape=!0,this.hideOnOutsideClick=!0,this.disableAriaExpanded=!1,this.focusBackToTrigger=!0}getToggleTipText(){var o,i;return((i=(o=this.defaultSlotNodes)==null?void 0:o.map(m=>m.textContent).join(" "))==null?void 0:i.trim())||""}onPlacementUpdated(){Object.values(c).includes(this.placement)||(this.placement=t.PLACEMENT)}update(o){super.update(o),o.has("placement")&&this.onPlacementUpdated(),o.has("visible")&&(this.currentAnnouncement=this.visible?this.getToggleTipText():"")}render(){return f`
      ${super.render()}
      <mdc-screenreaderannouncer
        identity="${this.screenreaderAnnouncerIdentity}"
        announcement="${this.currentAnnouncement}"
        delay="300">
      </mdc-screenreaderannouncer>
    `}};d.styles=[...g.styles,...R];let n=d;p([y()],n.prototype,"defaultSlotNodes");p([L()],n.prototype,"currentAnnouncement");p([A({type:String,reflect:!0,attribute:"screenreader-announcer-identity"})],n.prototype,"screenreaderAnnouncerIdentity");n.register(P);const O=e=>f`
  <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    <mdc-avatarbutton
      aria-label="Trigger button"
      icon-name="placeholder-bold"
      id="${e.triggerID}"
      initials="MD">
    </mdc-avatarbutton>
    <mdc-toggletip
      color="${e.color}"
      ?close-button="${e["close-button"]}"
      close-button-aria-label="${e["close-button-aria-label"]}"
      offset="${e.offset}"
      placement="${e.placement}"
      ?show-arrow="${e["show-arrow"]}"
      triggerid="${e.triggerID}"
      @shown="${a("onshown")}"
      @hidden="${a("onhidden")}"
      @created="${a("oncreated")}"
      @destroyed="${a("ondestroyed")}"
      ><div>
        The toggletip with a
        <mdc-link
          inline icon-name="placeholder-bold"
          href="https://www.webex.com" target="_blank" rel="noopener noreferrer"
        >
          Link
        </mdc-link>
      </div>
    </mdc-toggletip>
  </div>`,be={title:"Components/toggletip",tags:["autodocs"],component:"mdc-toggletip",render:O,parameters:{badges:["stable"]},argTypes:{color:{control:"select",options:Object.values(x)},"close-button":{control:"boolean"},"close-button-aria-label":{control:"text"},offset:{control:"number"},placement:{control:"select",options:Object.values(c)},"show-arrow":{control:"boolean"},triggerID:{control:"text"},...S(["--mdc-toggletip-max-width","--mdc-toggletip-text-color","--mdc-toggletip-text-color-contrast","--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),..._(["id","delay","disable-aria-expanded","triggerElement","trigger","z-index","flip","role","visible","focus-trap","prevent-scroll","interactive","hide-on-escape","hide-on-blur","hide-on-outside-click","focus-back-to-trigger","backdrop","size","append-to","aria-labelledby","aria-describedby","showPopover","hidePopover","togglePopoverVisible","arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils","defaultSlotNodes"])}},s={render:O,args:{color:w.COLOR,"close-button":t.CLOSE_BUTTON,"close-button-aria-label":t.CLOSE_BUTTON_ARIA_LABEL,offset:t.OFFSET,placement:t.PLACEMENT,"show-arrow":t.SHOW_ARROW,triggerID:"toggletip-trigger"}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const ve=["Example"];export{s as Example,ve as __namedExportsOrder,be as default};
