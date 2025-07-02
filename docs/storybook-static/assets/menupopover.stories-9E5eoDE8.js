import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as m}from"./lit-element-D5KKan5q.js";import"./index-RWAZ0P83.js";import{c as C,s as R}from"./commonArgTypes-BluK8w5L.js";import{d as _,h as z}from"./utils-CF1irry3.js";import{P as p,D as i}from"./popover.component-Bw5zQP8M.js";import"./index-Dc4yJYq-.js";import"./index-BYHtsYKO.js";import"./index-BmHe-T6f.js";import"./index-oMsuEkDa.js";import"./index-WFlMAPaA.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./listitem.component-Bh3_BYs0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./roles-BH_hBfTz.js";import"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import"./v4-CmTdKEVZ.js";import"./index-Cx7wvr8C.js";import"./menusection.constants-CectB7Mc.js";import"./menupopover.constants-Df21F9dQ.js";import"./menuitem.component-BoKm6qLY.js";import"./menuitemcheckbox.constants-Cja4JgF_.js";import"./menuitemradio.constants-DzN5_ujm.js";import"./if-defined-D5BV9-c0.js";import"./button.component-Cx4by9Nb.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./button.utils-rNW36Ji7.js";import"./divider.constants-DyEGqhgz.js";import"./iframe-D-haYJKl.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const r=(e,L=m``)=>m`
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
    ${L}
  </mdc-menupopover>
`,Ae={title:"Work In Progress/menu/menupopover",tags:["autodocs"],component:"mdc-menupopover",parameters:{badges:["wip"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(p)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},flip:{control:"boolean"},size:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"prevent-scroll":{control:"boolean"},"append-to":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},...C,...R,..._(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3","--mdc-popover-max-width","--mdc-popover-max-height"]),...z(["arrowElement","backdrop","cancelCloseDelay","close-button-aria-label","color","should-focus-trap-wrap","disable-aria-haspopup","disableAriaHasPopup","disable-aria-expanded","focus-back-to-trigger","focus-trap","show-arrow","close-button","interactive","hidePopover","hide-on-outside-click","hide-on-blur","hide-on-escape","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","role","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},s=m`
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
`,B=m` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menusection label="Preferences">
    <mdc-menuitemcheckbox label="Enable feature" aria-checked="false"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" aria-checked="true"></mdc-menuitemcheckbox>
    <mdc-menuitemradio name="theme" label="Light" aria-checked="true"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" label="Dark" aria-checked="false"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" label="System" aria-checked="false"></mdc-menuitemradio>
  </mdc-menusection>
  <mdc-menuitem label="Notifications"></mdc-menuitem>`,G=m` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,t={args:{id:"popover",triggerID:"popover-trigger",placement:p.BOTTOM_START,offset:i.OFFSET,"z-index":i.Z_INDEX,delay:i.DELAY,flip:i.FLIP,"disable-aria-haspopup":!1},render:e=>m`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    ${r(e,s)}
  `},o={args:{...t.args,triggerID:"button-trigger"},render:e=>m`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${r(e,s)}
  `},d={args:{...t.args,triggerID:"icon-trigger"},render:e=>m`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    ${r(e,s)}
  `},c={args:{...t.args,triggerID:"button-group-trigger"},render:e=>m`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    ${r(e,s)}
  `},a={args:{...t.args,placement:p.RIGHT_START,triggerID:"trigger-btn"},render:e=>m`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${r(e,B)}
    </div>
  `},l={args:{...t.args,placement:p.RIGHT_END,triggerID:"trigger-btn"},render:e=>m`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${r(e,G)}
    </div>
  `},u={render:()=>m`
    <div style="display: flex; justify-content: space-between; width: 10rem;">
      <mdc-button id="file-menu-trigger">File</mdc-button>
      <mdc-menupopover triggerid="file-menu-trigger" backdrop>
        <mdc-menuitem label="New" id="new-menu-trigger" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="new-menu-trigger" placement="right-start">
          <mdc-menuitem label="New Document"></mdc-menuitem>
          <mdc-menuitem label="New Folder"></mdc-menuitem>
          <mdc-menuitem label="New Window"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Open"></mdc-menuitem>
        <mdc-menuitem label="Save"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Save At" id="save-as-menu-trigger" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="save-as-menu-trigger" placement="right-start">
          <mdc-menuitem label="Multiple Folders" id="folder-menu-trigger" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="folder-menu-trigger" placement="right-start">
            <mdc-menuitemcheckbox label="Desktop"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Documents"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Downloads"></mdc-menuitemcheckbox>
            <mdc-divider></mdc-divider>
            <mdc-menuitem label="Save somewhere else"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem id="location-menu-trigger" label="Location" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="location-menu-trigger" placement="right-start">
            <mdc-menuitemradio label="Apple Maps Location"></mdc-menuitemradio>
            <mdc-menuitemradio label="Google Maps Location"></mdc-menuitemradio>
            <mdc-divider></mdc-divider>
            <mdc-menuitem label="Save somewhere else"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem label="Auto Save"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Save All"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-button id="view-menu-trigger">View</mdc-button>
      <mdc-menupopover triggerid="view-menu-trigger">
        <mdc-menuitem label="Zoom In"></mdc-menuitem>
        <mdc-menuitem label="Zoom Out"></mdc-menuitem>
        <mdc-menuitem label="Reset Zoom"></mdc-menuitem>
      </mdc-menupopover>
    </div>
  `};var g,b,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,f,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,D,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'icon-trigger'
  },
  render: args => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(y=(D=d.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var S,E,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var k,I,P;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,$,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=($=l.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var M,F,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-between; width: 10rem;">
      <mdc-button id="file-menu-trigger">File</mdc-button>
      <mdc-menupopover triggerid="file-menu-trigger" backdrop>
        <mdc-menuitem label="New" id="new-menu-trigger" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="new-menu-trigger" placement="right-start">
          <mdc-menuitem label="New Document"></mdc-menuitem>
          <mdc-menuitem label="New Folder"></mdc-menuitem>
          <mdc-menuitem label="New Window"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Open"></mdc-menuitem>
        <mdc-menuitem label="Save"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Save At" id="save-as-menu-trigger" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="save-as-menu-trigger" placement="right-start">
          <mdc-menuitem label="Multiple Folders" id="folder-menu-trigger" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="folder-menu-trigger" placement="right-start">
            <mdc-menuitemcheckbox label="Desktop"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Documents"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Downloads"></mdc-menuitemcheckbox>
            <mdc-divider></mdc-divider>
            <mdc-menuitem label="Save somewhere else"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem id="location-menu-trigger" label="Location" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="location-menu-trigger" placement="right-start">
            <mdc-menuitemradio label="Apple Maps Location"></mdc-menuitemradio>
            <mdc-menuitemradio label="Google Maps Location"></mdc-menuitemradio>
            <mdc-divider></mdc-divider>
            <mdc-menuitem label="Save somewhere else"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem label="Auto Save"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Save All"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-button id="view-menu-trigger">View</mdc-button>
      <mdc-menupopover triggerid="view-menu-trigger">
        <mdc-menuitem label="Zoom In"></mdc-menuitem>
        <mdc-menuitem label="Zoom Out"></mdc-menuitem>
        <mdc-menuitem label="Reset Zoom"></mdc-menuitem>
      </mdc-menupopover>
    </div>
  \`
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const $e=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger","WithGroups","WithNestedSubmenus","MixedUsage"];export{c as ButtonGroupTrigger,o as ButtonTrigger,t as Example,d as IconTrigger,u as MixedUsage,a as WithGroups,l as WithNestedSubmenus,$e as __namedExportsOrder,Ae as default};
