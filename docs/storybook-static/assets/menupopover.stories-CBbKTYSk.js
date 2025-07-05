import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-BrO4IecJ.js";import{c as Z,s as j}from"./commonArgTypes-BluK8w5L.js";import{d as H,h as U}from"./utils-CF1irry3.js";import{P as r,D as o}from"./popover.component-Bw5zQP8M.js";import"./index-BvpqwTJw.js";import"./index-BYHtsYKO.js";import"./index-BmHe-T6f.js";import"./index-mTcDoloB.js";import"./index-AbUC510B.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./listitem.component-Bh3_BYs0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./roles-BH_hBfTz.js";import"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import"./v4-CmTdKEVZ.js";import"./index-Cx7wvr8C.js";import"./menusection.constants-BCYXL6dH.js";import"./menupopover.constants-Df21F9dQ.js";import"./menuitem.component-C82Go1iM.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./menuitemradio.constants-CPWIpsqE.js";import"./if-defined-D5BV9-c0.js";import"./button.component-Cx4by9Nb.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./button.utils-rNW36Ji7.js";import"./divider.constants-DyEGqhgz.js";import"./iframe--lMDQk3A.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const n=(e,W=t``)=>t`
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
    @shown="${i("onshown")}"
    @hidden="${i("onhidden")}"
    @created="${i("oncreated")}"
    @destroyed="${i("ondestroyed")}"
    @action="${i("onaction")}"
    @change="${i("onchange")}"
  >
    ${W}
  </mdc-menupopover>
`,Re={title:"Work In Progress/menu/menupopover",tags:["autodocs"],component:"mdc-menupopover",parameters:{badges:["wip"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(r)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},flip:{control:"boolean"},size:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"prevent-scroll":{control:"boolean"},"append-to":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},...Z,...j,...H(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3","--mdc-popover-max-width","--mdc-popover-max-height"]),...U(["arrowElement","backdrop","cancelCloseDelay","close-button-aria-label","color","should-focus-trap-wrap","disable-aria-haspopup","disableAriaHasPopup","disable-aria-expanded","focus-back-to-trigger","focus-trap","show-arrow","close-button","interactive","hidePopover","hide-on-outside-click","hide-on-blur","hide-on-escape","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","role","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},b=t`
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
`,q=t` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menusection headerText="Preferences">
    <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
    <mdc-divider></mdc-divider>
    <mdc-menuitemradio name="theme" label="Light" checked></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" label="Dark"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" label="System"></mdc-menuitemradio>
  </mdc-menusection>
  <mdc-menuitem label="Notifications"></mdc-menuitem>`,Q=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,X=t` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position="trailing"></mdc-menuitem>
  <mdc-menuitem label="Notifications"></mdc-menuitem>
  <mdc-menuitem label="Logout" disabled></mdc-menuitem>
  <mdc-menusection headerText="Preferences">
    <mdc-menuitemcheckbox label="Enable feature" name="enableFeature"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" checked name="betaMode"></mdc-menuitemcheckbox>
    <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
  </mdc-menusection>
  <mdc-menupopover triggerID="submenu-trigger" placement="right">
    <mdc-menupopover triggerID="security-id" placement="right-start">
      <mdc-menuitem label="Change Password"></mdc-menuitem>
      <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
      <mdc-menuitem label="Security Questions"></mdc-menuitem>
      <mdc-menusection headerText="Virtual background">
        <mdc-menuitemradio name="virtualbg" value="none" label="Off" checked></mdc-menuitemradio>
        <mdc-menuitemradio name="virtualbg" value="office" label="Office"></mdc-menuitemradio>
        <mdc-menuitemradio name="virtualbg" value="custom" label="Custom"></mdc-menuitemradio>
      </mdc-menusection>
    </mdc-menupopover>
    <mdc-menuitem label="Account"></mdc-menuitem>
    <mdc-menuitem label="Privacy" disabled></mdc-menuitem>
    <mdc-menuitem label="Security" id="security-id" arrow-position="trailing"></mdc-menuitem>
    <mdc-menuitem label="Advanced"></mdc-menuitem>
  </mdc-menupopover>`,m={args:{id:"popover",triggerID:"popover-trigger",placement:r.BOTTOM_START,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"disable-aria-haspopup":!1},render:e=>t`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    ${n(e,b)}
  `},d={args:{...m.args,triggerID:"button-trigger"},render:e=>t`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${n(e,b)}
  `},c={args:{...m.args,triggerID:"icon-trigger"},render:e=>t`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    ${n(e,b)}
  `},a={args:{...m.args,triggerID:"button-group-trigger"},render:e=>t`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    ${n(e,b)}
  `},l={args:{...m.args,placement:r.RIGHT_START,triggerID:"trigger-btn"},render:e=>t`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${n(e,q)}
    </div>
  `},u={args:{...m.args,placement:r.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${n(e,Q)}
    </div>
  `},s={args:{...m.args,placement:r.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${n(e,X)}
    </div>
  `},p={render:()=>t`
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
  `},g={args:{...m.args,triggerID:"button-trigger"},render:e=>t`
    <mdc-button id="button-trigger">Menu</mdc-button>

    <style>
      .layout-section {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        width: 21rem;
      }

      .layout-section::part(header-text) {
        width: 100%;
      }

      .layout-section mdc-menuitemradio {
        flex-basis: 1rem;
        flex-grow: 1;
        margin-block-end: 0.5rem;
        padding-inline: 0;
        padding-block: 0.65rem;
      }

      .layout-section mdc-menuitemradio::part(leading) {
        flex-direction: column;
        text-align: center;
      }

      .layout-section mdc-menuitemradio::part(trailing) {
        display: none;
      }

      .layout-section mdc-menuitemradio[checked] {
        color: var(--mds-color-theme-text-accent-normal);
        background-color: var(--mds-color-theme-button-secondary-active-normal);
      }

      .layout-section mdc-menuitemradio[checked]::part(leading-text-primary-label) {
        color: inherit;
      }
    </style>
    ${n(e,t` <mdc-menusection headerText="Layout" class="layout-section">
          <mdc-menuitemradio name="layout" label="Grid" checked indicator="none">
            <mdc-icon name="video-layout-equal-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="layout" label="Stack" indicator="none">
            <mdc-icon name="video-layout-stack-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="layout" label="Side by side" indicator="none">
            <mdc-icon
              name="layout-side-by-side-vertical-light"
              size="2"
              slot="leading-controls"
              length-unit="rem"
            ></mdc-icon>
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Preferences">
          <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Notifications"></mdc-menuitem>`)}
  `};var v,h,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(h=m.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,f,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,S,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'icon-trigger'
  },
  render: args => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,E,I;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(E=a.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,A,$;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(A=l.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var M,O,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var C,L,F;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      \${createPopover(args, nestedSubmenuContentAndSelectMenuItems)}
    </div>
  \`
}`,...(F=(L=s.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var z,R,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var B,G,V;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>

    <style>
      .layout-section {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        width: 21rem;
      }

      .layout-section::part(header-text) {
        width: 100%;
      }

      .layout-section mdc-menuitemradio {
        flex-basis: 1rem;
        flex-grow: 1;
        margin-block-end: 0.5rem;
        padding-inline: 0;
        padding-block: 0.65rem;
      }

      .layout-section mdc-menuitemradio::part(leading) {
        flex-direction: column;
        text-align: center;
      }

      .layout-section mdc-menuitemradio::part(trailing) {
        display: none;
      }

      .layout-section mdc-menuitemradio[checked] {
        color: var(--mds-color-theme-text-accent-normal);
        background-color: var(--mds-color-theme-button-secondary-active-normal);
      }

      .layout-section mdc-menuitemradio[checked]::part(leading-text-primary-label) {
        color: inherit;
      }
    </style>
    \${createPopover(args, html\` <mdc-menusection headerText="Layout" class="layout-section">
          <mdc-menuitemradio name="layout" label="Grid" checked indicator="none">
            <mdc-icon name="video-layout-equal-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="layout" label="Stack" indicator="none">
            <mdc-icon name="video-layout-stack-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="layout" label="Side by side" indicator="none">
            <mdc-icon
              name="layout-side-by-side-vertical-light"
              size="2"
              slot="leading-controls"
              length-unit="rem"
            ></mdc-icon>
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Preferences">
          <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Notifications"></mdc-menuitem>\`)}
  \`
}`,...(V=(G=g.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const _e=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger","WithGroups","WithNestedSubmenus","WithNestedSubmenuContentAndSelectMenuItems","MixedUsage","CustomMenu"];export{a as ButtonGroupTrigger,d as ButtonTrigger,g as CustomMenu,m as Example,c as IconTrigger,p as MixedUsage,l as WithGroups,s as WithNestedSubmenuContentAndSelectMenuItems,u as WithNestedSubmenus,_e as __namedExportsOrder,Re as default};
