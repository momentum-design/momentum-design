import{k as t}from"./iframe-BceO9xBA.js";import"./index-D2-PRd_f.js";import{c as ue,s as se}from"./commonArgTypes-BG7EqI50.js";import{h as ge}from"./utils-D6nie9pS.js";import{P as a,D as p}from"./popover.constants-TDxUTn-L.js";import"./index-DqcwKQda.js";import"./index-B8gRmHFs.js";import"./index-C-PBsjQe.js";import"./index-BNKTdc42.js";import"./index-CfiDcyqg.js";import"./index-DCY2NGNo.js";import"./index-BFLYD4pV.js";import"./index-gQ-ZuzrQ.js";import{K as P}from"./TabIndexMixin-CLzlMbCP.js";import"./preload-helper-C1FmrZbK.js";import"./menuitemradio.constants-CWBahg7l.js";import"./menupopover.constants-Ccx4lRqJ.js";import"./badge.constants-DKYhnHS8.js";import"./menuitem.component-BvHAac3X.js";import"./listitem.component-C8WVkIJH.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-CJ7Qsp83.js";import"./menuitemcheckbox.constants-Caow4iUO.js";import"./popover.component-CQWL8Pns.js";import"./if-defined-DJvvsfJY.js";import"./BackdropMixin-CmuxcyPn.js";import"./button.component-CfRI-83W.js";import"./buttonsimple.component-CAmLtJMK.js";import"./button.utils-rNW36Ji7.js";import"./index-ByQ9qkf1.js";import"./index-DTrDRi1E.js";import"./index-BlZ9RlOP.js";import"./formfieldwrapper.constants-Bag4jpl3.js";import"./toggle.constants-CuwHR2ah.js";import"./index-DPIbp1YI.js";import"./v4-CmTdKEVZ.js";import"./class-map-CaTh44fb.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-COCSaysz.js";import"./index-DHUfDX3F.js";import"./ListNavigationMixin-Dbdpwkve.js";import"./CaptureDestroyEventForChildElement-TbhJtl6m.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,i=(e,r=t``)=>t`
  <mdc-menupopover
    id="${e.id}"
    triggerID="${e.triggerID}"
    placement="${e.placement}"
    ?visible="${e.visible}"
    .offset="${e.offset??0}"
    ?disable-flip="${e["disable-flip"]}"
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
    @action="${n("onaction")}"
    @change="${n("onchange")}"
  >
    ${r}
  </mdc-menupopover>
`,ot={title:"Components/menupopover/menupopover",tags:["autodocs"],component:"mdc-menupopover",argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(a)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},"disable-flip":{control:"boolean"},size:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"prevent-scroll":{control:"boolean"},"append-to":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},...ue,...se,...ge(["arrowElement","backdrop","cancelCloseDelay","close-button-aria-label","color","should-focus-trap-wrap","disableAriaHasPopup","disable-aria-expanded","focus-back-to-trigger","focus-trap","show-arrow","close-button","interactive","hide","hide-on-outside-click","hide-on-blur","hide-on-escape","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","role","show","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},l=t`
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
`,pe=t` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menusection headerText="Preferences">
    <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
  </mdc-menusection>
  <mdc-divider></mdc-divider>
  <mdc-menusection header-text="Theme">
    <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
    <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
  </mdc-menusection>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Notifications"></mdc-menuitem>`,be=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,ve=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,m={args:{id:"popover",triggerID:"popover-trigger",placement:a.BOTTOM_START,offset:p.OFFSET,"z-index":p.Z_INDEX,delay:p.DELAY,"disable-flip":p.DISABLE_FLIP,"disable-aria-expanded":!1},render:e=>t`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    ${i(e,l)}
  `},b={args:{...m.args,triggerID:"button-trigger"},render:e=>t`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${i(e,l)}
  `},v={args:{...m.args,triggerID:"icon-trigger"},render:e=>t`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    ${i(e,l)}
  `},h={args:{...m.args,triggerID:"button-group-trigger"},render:e=>t`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    ${i(e,l)}
  `},y={args:{...m.args,placement:a.RIGHT_START,triggerID:"trigger-btn"},render:e=>t`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${i(e,pe)}
    </div>
  `},k={args:{...m.args,placement:a.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${i(e,be)}
    </div>
  `},f={args:{...m.args,placement:a.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${i(e,ve)}
    </div>
  `},w={render:()=>t`
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
        <mdc-divider></mdc-divider>
        <mdc-menuitemradio indicator="checkmark" name="length" checked label="Short"></mdc-menuitemradio>
        <mdc-menuitemradio indicator="checkmark" name="length" label="Medium"></mdc-menuitemradio>
        <mdc-menuitemradio indicator="checkmark" name="length" label="Looooooooooong"></mdc-menuitemradio>
      </mdc-menupopover>
    </div>
  `},x={args:{...m.args,triggerID:"button-trigger"},render:e=>t`
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
    ${i(e,t` <mdc-menusection headerText="Layout" class="layout-section">
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
  `},I={args:{...m.args,triggerID:"button-trigger"},render:e=>t` <mdc-list>
        <mdc-listitem @click=${n("onclick")} label="List Item 1">
          <mdc-button
            variant="tertiary"
            id="button-trigger"
            slot="trailing-controls"
            aria-label="Open Menu"
            prefix-icon="more-bold"
          >
          </mdc-button>
        </mdc-listitem>
        <mdc-listitem @click=${n("onclick")} label="List Item 2"></mdc-listitem>
        <mdc-listitem @click=${n("onclick")} label="List Item 3"></mdc-listitem>
        <mdc-divider></mdc-divider>
        <mdc-listitem @click=${n("onclick")} label="List Item 4"></mdc-listitem>
        <mdc-listitem @click=${n("onclick")} label="List Item 5"></mdc-listitem>
        <mdc-listitem @click=${n("onclick")} label="List Item 6"></mdc-listitem>
      </mdc-list>
      ${i(e,l)}`},S={args:{...m.args,triggerID:"button-trigger"},render:()=>{let e=1;const r=o=>o.key===P.ENTER||o.key===P.SPACE?o.stopPropagation():void 0,u=o=>{var $,A;o.stopImmediatePropagation();const E=(($=o.target)==null?void 0:$.getAttribute("name"))==="delay",d=(A=o.target)==null?void 0:A.closest("mdc-menupopover"),c=document.createElement("mdc-menuitem");c.setAttribute("label",`#${e} Remove itself ${E?"with delay":""}`),c.addEventListener("click",D=>{var s,T;D.stopPropagation(),E?setTimeout(()=>{var g,M;return(M=(g=D.target)==null?void 0:g.remove)==null?void 0:M.call(g)},500):(T=(s=D.target)==null?void 0:s.remove)==null||T.call(s)}),c.addEventListener("keydown",r),E?setTimeout(()=>d==null?void 0:d.append(c),500):d==null||d.append(c),e+=1};return t`<mdc-button id="trigger-btn">Dynamic menu</mdc-button>
      <mdc-menupopover triggerID="trigger-btn" placement="bottom-start">
        <mdc-menuitem label="Add menu item..." name="instant" @click=${u} @keydown=${r}>
          <mdc-icon name="plus-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
        </mdc-menuitem>
        <mdc-menuitem label="Add with delay..." name="delay" @click=${u} @keydown=${r}>
          <mdc-icon name="completed-by-time-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
        </mdc-menuitem>
        <mdc-menuitem label="Nested" id="sub-trigger" arrow-position="trailing"> </mdc-menuitem>
        <mdc-menupopover triggerID="sub-trigger" placement="right-start">
          <mdc-menuitem label="Add menu item..." name="instant" @click=${u} @keydown=${r}>
            <mdc-icon name="plus-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitem>
          <mdc-menuitem label="Add with delay..." name="delay" @click=${u} @keydown=${r}>
            <mdc-icon name="completed-by-time-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitem>
          <mdc-divider></mdc-divider>
        </mdc-menupopover>
        <mdc-divider></mdc-divider>
      </mdc-menupopover>`}};var L,O,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    'disable-aria-expanded': false
  },
  render: args => html\`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var C,z,_;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(_=(z=b.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var F,R,B;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'icon-trigger'
  },
  render: args => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(B=(R=v.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var G,V,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var W,Z,j;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var H,K,Y;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var q,Q,X;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,ee,te;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        <mdc-divider></mdc-divider>
        <mdc-menuitemradio indicator="checkmark" name="length" checked label="Short"></mdc-menuitemradio>
        <mdc-menuitemradio indicator="checkmark" name="length" label="Medium"></mdc-menuitemradio>
        <mdc-menuitemradio indicator="checkmark" name="length" label="Looooooooooong"></mdc-menuitemradio>
      </mdc-menupopover>
    </div>
  \`
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var me,ne,ie;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,oe,de;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\` <mdc-list>
        <mdc-listitem @click=\${action('onclick')} label="List Item 1">
          <mdc-button
            variant="tertiary"
            id="button-trigger"
            slot="trailing-controls"
            aria-label="Open Menu"
            prefix-icon="more-bold"
          >
          </mdc-button>
        </mdc-listitem>
        <mdc-listitem @click=\${action('onclick')} label="List Item 2"></mdc-listitem>
        <mdc-listitem @click=\${action('onclick')} label="List Item 3"></mdc-listitem>
        <mdc-divider></mdc-divider>
        <mdc-listitem @click=\${action('onclick')} label="List Item 4"></mdc-listitem>
        <mdc-listitem @click=\${action('onclick')} label="List Item 5"></mdc-listitem>
        <mdc-listitem @click=\${action('onclick')} label="List Item 6"></mdc-listitem>
      </mdc-list>
      \${createPopover(args, defaultMenuContent)}\`
}`,...(de=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,ae,le;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: () => {
    let counter = 1;
    const stopEnterAndSpace = (event: any) => event.key === KEYS.ENTER || event.key === KEYS.SPACE ? event.stopPropagation() : undefined;
    const addNewMenu = (event: any) => {
      event.stopImmediatePropagation();
      const withDelay = event.target?.getAttribute('name') === 'delay';
      const parent = event.target?.closest('mdc-menupopover');
      const menuItem = document.createElement('mdc-menuitem');
      menuItem.setAttribute('label', \`#\${counter} Remove itself \${withDelay ? 'with delay' : ''}\`);
      menuItem.addEventListener('click', (e: any) => {
        e.stopPropagation();
        if (withDelay) {
          setTimeout(() => e.target?.remove?.(), 500);
        } else {
          e.target?.remove?.();
        }
      });
      menuItem.addEventListener('keydown', stopEnterAndSpace);
      if (withDelay) {
        setTimeout(() => parent?.append(menuItem), 500);
      } else {
        parent?.append(menuItem);
      }
      counter += 1;
    };
    return html\`<mdc-button id="trigger-btn">Dynamic menu</mdc-button>
      <mdc-menupopover triggerID="trigger-btn" placement="bottom-start">
        <mdc-menuitem label="Add menu item..." name="instant" @click=\${addNewMenu} @keydown=\${stopEnterAndSpace}>
          <mdc-icon name="plus-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
        </mdc-menuitem>
        <mdc-menuitem label="Add with delay..." name="delay" @click=\${addNewMenu} @keydown=\${stopEnterAndSpace}>
          <mdc-icon name="completed-by-time-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
        </mdc-menuitem>
        <mdc-menuitem label="Nested" id="sub-trigger" arrow-position="trailing"> </mdc-menuitem>
        <mdc-menupopover triggerID="sub-trigger" placement="right-start">
          <mdc-menuitem label="Add menu item..." name="instant" @click=\${addNewMenu} @keydown=\${stopEnterAndSpace}>
            <mdc-icon name="plus-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitem>
          <mdc-menuitem label="Add with delay..." name="delay" @click=\${addNewMenu} @keydown=\${stopEnterAndSpace}>
            <mdc-icon name="completed-by-time-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitem>
          <mdc-divider></mdc-divider>
        </mdc-menupopover>
        <mdc-divider></mdc-divider>
      </mdc-menupopover>\`;
  }
}`,...(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const dt=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger","WithGroups","WithNestedSubmenus","WithNestedSubmenuContentAndSelectMenuItems","MixedUsage","CustomMenu","MenuInList","DynamicMenu"];export{h as ButtonGroupTrigger,b as ButtonTrigger,x as CustomMenu,S as DynamicMenu,m as Example,v as IconTrigger,I as MenuInList,w as MixedUsage,y as WithGroups,f as WithNestedSubmenuContentAndSelectMenuItems,k as WithNestedSubmenus,dt as __namedExportsOrder,ot as default};
