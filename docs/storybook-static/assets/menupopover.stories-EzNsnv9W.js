import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-DPJ24JJG.js";import{c as q,s as Q}from"./commonArgTypes-BluK8w5L.js";import{d as X,h as Y}from"./utils-CF1irry3.js";import{P as r,D as c}from"./popover.component-q7gOo8Yi.js";import"./index-wOiy6T-p.js";import"./index-BYHtsYKO.js";import"./index-C4TNBl9D.js";import"./index-CsRjoqOy.js";import"./index-hB4NswLc.js";import"./index-CwWKd5w1.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./listitem.component-DDDLhHxU.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./roles-BH_hBfTz.js";import"./index-BrLJ_9IK.js";import"./index-D2NeUKIj.js";import"./v4-CmTdKEVZ.js";import"./index-Cx7wvr8C.js";import"./menuitemradio.constants-BhdhQZcn.js";import"./menuitem.component-fYeQJXIJ.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./menupopover.constants-BkwERfSm.js";import"./if-defined-D5BV9-c0.js";import"./button.component-Cx4by9Nb.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./button.utils-rNW36Ji7.js";import"./divider.constants-DyEGqhgz.js";import"./iframe-BUHTHVcf.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";const n=(e,U=t``)=>t`
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
    @shown="${m("onshown")}"
    @hidden="${m("onhidden")}"
    @created="${m("oncreated")}"
    @destroyed="${m("ondestroyed")}"
    @action="${m("onaction")}"
    @change="${m("onchange")}"
  >
    ${U}
  </mdc-menupopover>
`,We={title:"Components/menupopover/menupopover",tags:["autodocs"],component:"mdc-menupopover",parameters:{badges:["wip"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(r)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},flip:{control:"boolean"},size:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"prevent-scroll":{control:"boolean"},"append-to":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},...q,...Q,...X(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3","--mdc-popover-max-width","--mdc-popover-max-height"]),...Y(["arrowElement","backdrop","cancelCloseDelay","close-button-aria-label","color","should-focus-trap-wrap","disable-aria-haspopup","disableAriaHasPopup","disable-aria-expanded","focus-back-to-trigger","focus-trap","show-arrow","close-button","interactive","hidePopover","hide-on-outside-click","hide-on-blur","hide-on-escape","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","role","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},o=t`
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
`,K=t` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menusection headerText="Preferences">
    <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
    <mdc-divider></mdc-divider>
    <mdc-menusection header-text="Theme">
      <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
      <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
      <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
    </mdc-menusection>
  </mdc-menusection>
  <mdc-menuitem label="Notifications"></mdc-menuitem>`,J=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,ee=t` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`,i={args:{id:"popover",triggerID:"popover-trigger",placement:r.BOTTOM_START,offset:c.OFFSET,"z-index":c.Z_INDEX,delay:c.DELAY,flip:c.FLIP,"disable-aria-haspopup":!1},render:e=>t`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    ${n(e,o)}
  `},d={args:{...i.args,triggerID:"button-trigger"},render:e=>t`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${n(e,o)}
  `},a={args:{...i.args,triggerID:"icon-trigger"},render:e=>t`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    ${n(e,o)}
  `},l={args:{...i.args,triggerID:"button-group-trigger"},render:e=>t`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    ${n(e,o)}
  `},u={args:{...i.args,placement:r.RIGHT_START,triggerID:"trigger-btn"},render:e=>t`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${n(e,K)}
    </div>
  `},s={args:{...i.args,placement:r.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${n(e,J)}
    </div>
  `},p={args:{...i.args,placement:r.RIGHT_END,triggerID:"trigger-btn"},render:e=>t`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${n(e,ee)}
    </div>
  `},g={render:()=>t`
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
  `},b={args:{...i.args,triggerID:"button-trigger"},render:e=>t`
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
  `},v={args:{...i.args,triggerID:"button-trigger"},render:e=>t` <mdc-list>
        <mdc-listitem @click=${m("onclick")} label="List Item 1">
          <mdc-button
            variant="tertiary"
            id="button-trigger"
            slot="trailing-controls"
            aria-label="Open Menu"
            prefix-icon="more-bold"
          >
          </mdc-button>
        </mdc-listitem>
        <mdc-listitem @click=${m("onclick")} label="List Item 2"></mdc-listitem>
        <mdc-listitem @click=${m("onclick")} label="List Item 3"></mdc-listitem>
        <mdc-divider></mdc-divider>
        <mdc-listitem @click=${m("onclick")} label="List Item 4"></mdc-listitem>
        <mdc-listitem @click=${m("onclick")} label="List Item 5"></mdc-listitem>
        <mdc-listitem @click=${m("onclick")} label="List Item 6"></mdc-listitem>
      </mdc-list>
      ${n(e,o)}`};var h,k,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var x,f,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'button-trigger'
  },
  render: args => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var I,S,D;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    triggerID: 'icon-trigger'
  },
  render: args => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    \${createPopover(args, defaultMenuContent)}
  \`
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var $,T,E;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,M,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var A,O,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(O=s.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var N,F,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(F=p.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var R,_,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,V,W;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Z,j,H;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(H=(j=v.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Ze=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger","WithGroups","WithNestedSubmenus","WithNestedSubmenuContentAndSelectMenuItems","MixedUsage","CustomMenu","MenuInList"];export{l as ButtonGroupTrigger,d as ButtonTrigger,b as CustomMenu,i as Example,a as IconTrigger,v as MenuInList,g as MixedUsage,u as WithGroups,p as WithNestedSubmenuContentAndSelectMenuItems,s as WithNestedSubmenus,Ze as __namedExportsOrder,We as default};
