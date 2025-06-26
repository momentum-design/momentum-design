import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as r}from"./lit-element-D5KKan5q.js";import"./index-F8mRisTP.js";import{c as C,s as M}from"./commonArgTypes-BluK8w5L.js";import{d as F,h as L}from"./utils-CO8B6ZcN.js";import{P as l,D as i}from"./popover.component-D_fkT_SB.js";import"./index-EG_HgpVd.js";import"./index-BYHtsYKO.js";import"./index-BmHe-T6f.js";import"./index-DqMxPwYU.js";import"./index-B6m0URP9.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./listitem.component-18vOGq9d.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./roles-BH_hBfTz.js";import"./index-BrLJ_9IK.js";import"./index-5cASsYq0.js";import"./v4-CmTdKEVZ.js";import"./index-Cx7wvr8C.js";import"./menusection.constants-CectB7Mc.js";import"./menubar.constants-Cq-jpWsM.js";import"./menupopover.constants-C3xzY-3O.js";import"./menuitem.component-ICM-PeNX.js";import"./menuitemcheckbox.constants-Cja4JgF_.js";import"./menuitemradio.constants-DzN5_ujm.js";import"./if-defined-D5BV9-c0.js";import"./button.component-Cx4by9Nb.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./button.utils-rNW36Ji7.js";import"./divider.constants-DyEGqhgz.js";import"./iframe-MsbHSaEb.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const o=(e,k=r``)=>r`
  <mdc-menupopover
    id="${e.id}"
    triggerID="${e.triggerID}"
    placement="${e.placement}"
    ?visible="${e.visible}"
    .offset="${e.offset??0}"
    ?flip="${e.flip}"
    ?size="${e.size}"
    z-index="${e["z-index"]}"
    delay="${e.delay}"
    ?prevent-scroll="${e["prevent-scroll"]}"
    append-to="${e["append-to"]}"
    aria-label="${e["aria-label"]}"
    aria-labelledby="${e["aria-labelledby"]}"
    aria-describedby="${e["aria-describedby"]}"
    @shown="${n("onshown")}"
    @hidden="${n("onhidden")}"
    @created="${n("oncreated")}"
    @destroyed="${n("ondestroyed")}"
  >
    ${k}
  </mdc-menupopover>
`,$e={title:"Work In Progress/menu/menupopover",tags:["autodocs"],component:"mdc-menupopover",parameters:{badges:["wip"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(l)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},flip:{control:"boolean"},size:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"prevent-scroll":{control:"boolean"},"append-to":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},...C,...M,...F(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3","--mdc-popover-max-width","--mdc-popover-max-height"]),...L(["arrowElement","backdrop","cancelCloseDelay","close-button-aria-label","color","should-focus-trap-wrap","disable-aria-haspopup","disableAriaHasPopup","disable-aria-expanded","focus-back-to-trigger","focus-trap","show-arrow","close-button","interactive","hidePopover","hide-on-outside-click","hide-on-blur","hide-on-escape","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","role","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},s=r`
  <mdc-menuitem label="New"></mdc-menuitem>
  <mdc-menuitem label="Open"></mdc-menuitem>
  <mdc-menuitem label="Save"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Share" id="share-id" arrow-position="trailing"></mdc-menuitem>
  <mdc-menupopover triggerID="share-id" placement="right-start">
    <mdc-menuitem label="AirDrop"></mdc-menuitem>
    <mdc-menuitem label="Messages"></mdc-menuitem>
    <mdc-menuitem label="Notes"></mdc-menuitem>
    <mdc-menuitem label="Freeform"></mdc-menuitem>
    <mdc-menuitem label="Reminders"></mdc-menuitem>
  </mdc-menupopover>
`,N=r` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menusection label="Preferences">
    <mdc-menuitemcheckbox label="Enable feature" aria-checked="false"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" aria-checked="true"></mdc-menuitemcheckbox>
    <mdc-menuitemradio name="theme" label="Light" aria-checked="true"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" label="Dark" aria-checked="false"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" label="System" aria-checked="false"></mdc-menuitemradio>
  </mdc-menusection>
  <mdc-menuitem label="Notifications"></mdc-menuitem>`,_=r` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position="trailing"></mdc-menuitem>
  <mdc-menuitem label="Notifications"></mdc-menuitem>
  <mdc-menuitem label="Logout" disabled></mdc-menuitem>
  <mdc-menupopover triggerID="submenu-trigger" placement="right">
    <mdc-menupopover triggerID="security-id" placement="right-start">
      <mdc-menuitem label="Change Password"></mdc-menuitem>
      <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
      <mdc-menuitem label="Security Questions"></mdc-menuitem>
    </mdc-menupopover>
    <mdc-menuitem label="Account"></mdc-menuitem>
    <mdc-menuitem label="Privacy" disabled></mdc-menuitem>
    <mdc-menuitem label="Security" id="security-id" arrow-position="trailing"></mdc-menuitem>
    <mdc-menuitem label="Advanced"></mdc-menuitem>
  </mdc-menupopover>`,t={args:{id:"popover",triggerID:"popover-trigger",placement:l.BOTTOM_START,offset:i.OFFSET,"z-index":i.Z_INDEX,delay:i.DELAY,flip:i.FLIP,"disable-aria-haspopup":!1},render:e=>r`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    ${o(e,s)}
  `},m={args:{...t.args,triggerID:"button-trigger"},render:e=>r`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${o(e,s)}
  `},a={args:{...t.args,triggerID:"icon-trigger"},render:e=>r`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    ${o(e,s)}
  `},d={args:{...t.args,triggerID:"button-group-trigger"},render:e=>r`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    ${o(e,s)}
  `},c={args:{...t.args,placement:l.RIGHT_START,triggerID:"trigger-btn"},render:e=>r`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${o(e,N)}
    </div>
  `},p={args:{...t.args,placement:l.RIGHT_END,triggerID:"trigger-btn"},render:e=>r`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${o(e,_)}
    </div>
  `};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'disable-aria-haspopup': false
  },
  render: args => html\`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,h,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(f=(h=m.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,E,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'icon-trigger'
  },
  render: args => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(T=(E=a.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var y,D,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-group-trigger'
  },
  render: args => html\`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var I,$,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    placement: POPOVER_PLACEMENT.RIGHT_START,
    triggerID: 'trigger-btn'
  },
  render: (args: Args) => html\`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      \${createPopover(args, groupedMenuContent)}
    </div>
  \`
}`,...(S=($=c.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var w,O,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    placement: POPOVER_PLACEMENT.RIGHT_END,
    triggerID: 'trigger-btn'
  },
  render: (args: Args) => html\`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      \${createPopover(args, nestedSubmenuContent)}
    </div>
  \`
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Se=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger","WithGroups","WithNestedSubmenus"];export{d as ButtonGroupTrigger,m as ButtonTrigger,t as Example,a as IconTrigger,c as WithGroups,p as WithNestedSubmenus,Se as __namedExportsOrder,$e as default};
