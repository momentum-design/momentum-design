import{k as t}from"./iframe-x5Cmm7xc.js";import"./index-Cse0s4oI.js";import{c as be,s as ve}from"./commonArgTypes-BG7EqI50.js";import{h as he}from"./utils-B5QUENNQ.js";import{P as c,D as g}from"./popover.constants-2QYQWnRQ.js";import"./index-BSH06jcK.js";import"./index-Cw35sGkO.js";import"./index-CaNZ-jvL.js";import"./index-CTpNAC6R.js";import"./index-DYwqAarF.js";import"./index-c2wTb4B6.js";import"./index-DKISK3OO.js";import"./index-D47krbUw.js";import{b as L}from"./KeyDownHandledMixin-DIn8aPq8.js";import"./preload-helper-C1FmrZbK.js";import"./menuitemradio.constants-BushsrI1.js";import"./menupopover.constants-0Q2qsXRB.js";import"./badge.constants-C5-zrR7A.js";import"./menuitem.component-OusPU-aV.js";import"./listitem.component-BNyVPliG.js";import"./query-assigned-elements-iIfB4Uee.js";import"./DisabledMixin-DKKVvzhX.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-Crwf8ftN.js";import"./menuitemcheckbox.constants-DUVxLHgj.js";import"./popover.component-hl8ES8ht.js";import"./if-defined-DskKR71u.js";import"./BackdropMixin-BzymTYuX.js";import"./button.component-BPpIFZ7Z.js";import"./buttonsimple.component-B8hH1qX5.js";import"./button.utils-rNW36Ji7.js";import"./index-HHx-Sicq.js";import"./index-DTrDRi1E.js";import"./index-DT2ARHx9.js";import"./formfieldwrapper.constants-BLtLGgAm.js";import"./toggle.constants-BDbae0Ra.js";import"./index-BC5Rab-I.js";import"./v4-CmTdKEVZ.js";import"./class-map-DWaR6g6Y.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-SCKxDHBp.js";import"./index-Cpu4Wc2Y.js";import"./list.component-xvCtkjY-.js";import"./ListNavigationMixin-2yuBNJ_A.js";import"./CaptureDestroyEventForChildElement-CwoA4h4O.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,i=(e,r=t``)=>t`
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
`,st={title:"Components/menupopover/menupopover",tags:["autodocs"],component:"mdc-menupopover",argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(c)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},"disable-flip":{control:"boolean"},size:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"prevent-scroll":{control:"boolean"},"append-to":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},...be,...ve,...he(["arrowElement","backdrop","cancelCloseDelay","close-button-aria-label","color","should-focus-trap-wrap","disableAriaHasPopup","disable-aria-expanded","focus-back-to-trigger","focus-trap","show-arrow","close-button","interactive","hide","hide-on-outside-click","hide-on-blur","hide-on-escape","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","role","show","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},l=t`
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
`,ye=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  <mdc-menuitem label="Notifications"></mdc-menuitem>`,fe=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,ke=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,m={args:{id:"popover",triggerID:"popover-trigger",placement:c.BOTTOM_START,offset:g.OFFSET,"z-index":g.Z_INDEX,delay:g.DELAY,"disable-flip":g.DISABLE_FLIP,"disable-aria-expanded":!1},render:e=>t`
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
  `},y={args:{...m.args,placement:c.RIGHT_START,triggerID:"trigger-btn"},render:e=>t`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${i(e,ye)}
    </div>
  `},f={args:{...m.args,placement:c.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100%;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${i(e,fe)}
    </div>
  `},k={args:{...m.args,placement:c.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100%;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${i(e,ke)}
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
        flex-direction: row;
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
          <mdc-menuitemradio
            data-spatial-focusable
            data-spatial-up="notification-menu-item"
            data-spatial-down="enable-feature"
            name="layout"
            label="Grid"
            checked
            indicator="none"
          >
            <mdc-icon name="video-layout-equal-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio
            data-spatial-focusable
            data-spatial-up="notification-menu-item"
            data-spatial-down="enable-feature"
            name="layout"
            label="Stack"
            indicator="none"
          >
            <mdc-icon name="video-layout-stack-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio
            data-spatial-focusable
            data-spatial-up="notification-menu-item"
            data-spatial-down="enable-feature"
            name="layout"
            label="Side by side"
            indicator="none"
          >
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
          <mdc-menuitemcheckbox id="enable-feature" label="Enable feature"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menuitem id="notification-menu-item" label="Notifications"></mdc-menuitem>`)}
  `},S={args:{...m.args,triggerID:"button-trigger"},render:e=>t` <mdc-list>
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
      ${i(e,l)}`},I={args:{...m.args,triggerID:"button-trigger"},render:()=>{let e=1;const r=o=>o.key===L.ENTER||o.key===L.SPACE?o.stopPropagation():void 0,u=o=>{var A,T;o.stopImmediatePropagation();const D=((A=o.target)==null?void 0:A.getAttribute("name"))==="delay",d=(T=o.target)==null?void 0:T.closest("mdc-menupopover"),a=document.createElement("mdc-menuitem");a.setAttribute("label",`#${e} Remove itself ${D?"with delay":""}`),a.addEventListener("click",$=>{var s,M;$.stopPropagation(),D?setTimeout(()=>{var p,P;return(P=(p=$.target)==null?void 0:p.remove)==null?void 0:P.call(p)},500):(M=(s=$.target)==null?void 0:s.remove)==null||M.call(s)}),a.addEventListener("keydown",r),D?setTimeout(()=>d==null?void 0:d.append(a),500):d==null||d.append(a),e+=1};return t`<mdc-button id="trigger-btn">Dynamic menu</mdc-button>
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
      </mdc-menupopover>`}},E={render:()=>t`
          <div id="menupopover-test-wrapper">
            <mdc-button id="trigger-btn">Options</mdc-button>
            <mdc-menupopover triggerid="trigger-btn">
              <mdc-menuitem id="menu-item-1" data-spatial-up="" data-spatial-down="menu-item-3"  label="Profile"></mdc-menuitem>
              <mdc-menuitem id="menu-item-2" label="Settings"></mdc-menuitem>
              <mdc-menuitem id="menu-item-3" label="Notifications"></mdc-menuitem>
              <mdc-menuitem id="menu-item-4" data-spatial-up="menu-item-1" label="Logout"></mdc-menuitem>
            </mdc-menupopover>
          </div>
        `};var O,N,C;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var z,_,F;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var R,B,G;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'icon-trigger'
  },
  render: args => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var Z,V,U;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var W,Y,j;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var H,K,X;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    placement: POPOVER_PLACEMENT.RIGHT_END,
    triggerID: 'trigger-btn'
  },
  render: (args: Args) => html\`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100%;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      \${createPopover(args, nestedSubmenuContent)}
    </div>
  \`
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var q,Q,J;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    placement: POPOVER_PLACEMENT.RIGHT_END,
    triggerID: 'trigger-btn'
  },
  render: (args: Args) => html\`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100%;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      \${createPopover(args, nestedSubmenuContentAndSelectMenuItems)}
    </div>
  \`
}`,...(J=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var ee,te,me;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(me=(te=w.parameters)==null?void 0:te.docs)==null?void 0:me.source}}};var ne,ie,re;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
        flex-direction: row;
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
          <mdc-menuitemradio
            data-spatial-focusable
            data-spatial-up="notification-menu-item"
            data-spatial-down="enable-feature"
            name="layout"
            label="Grid"
            checked
            indicator="none"
          >
            <mdc-icon name="video-layout-equal-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio
            data-spatial-focusable
            data-spatial-up="notification-menu-item"
            data-spatial-down="enable-feature"
            name="layout"
            label="Stack"
            indicator="none"
          >
            <mdc-icon name="video-layout-stack-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio
            data-spatial-focusable
            data-spatial-up="notification-menu-item"
            data-spatial-down="enable-feature"
            name="layout"
            label="Side by side"
            indicator="none"
          >
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
          <mdc-menuitemcheckbox id="enable-feature" label="Enable feature"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menuitem id="notification-menu-item" label="Notifications"></mdc-menuitem>\`)}
  \`
}`,...(re=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,de,ae;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};var ce,le,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var se,pe,ge;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => html\`
          <div id="menupopover-test-wrapper">
            <mdc-button id="trigger-btn">Options</mdc-button>
            <mdc-menupopover triggerid="trigger-btn">
              <mdc-menuitem id="menu-item-1" data-spatial-up="" data-spatial-down="menu-item-3"  label="Profile"></mdc-menuitem>
              <mdc-menuitem id="menu-item-2" label="Settings"></mdc-menuitem>
              <mdc-menuitem id="menu-item-3" label="Notifications"></mdc-menuitem>
              <mdc-menuitem id="menu-item-4" data-spatial-up="menu-item-1" label="Logout"></mdc-menuitem>
            </mdc-menupopover>
          </div>
        \`
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const pt=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger","WithGroups","WithNestedSubmenus","WithNestedSubmenuContentAndSelectMenuItems","MixedUsage","CustomMenu","MenuInList","DynamicMenu","MenuXYZ"];export{h as ButtonGroupTrigger,b as ButtonTrigger,x as CustomMenu,I as DynamicMenu,m as Example,v as IconTrigger,S as MenuInList,E as MenuXYZ,w as MixedUsage,y as WithGroups,k as WithNestedSubmenuContentAndSelectMenuItems,f as WithNestedSubmenus,pt as __namedExportsOrder,st as default};
