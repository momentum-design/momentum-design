import{k as m}from"./iframe-C_HbRYVK.js";import{S as h}from"./sidenavigation.component-BqWaKDmR.js";import{T as x,V as M,a as g}from"./menupopover.constants-nUIXYLUB.js";import"./index-DXCglqwv.js";import"./index-CY8ICfNJ.js";import{c as y,s as f}from"./commonArgTypes-BG7EqI50.js";import{h as N}from"./utils-D6nie9pS.js";import"./index-DIKYBJ5O.js";import"./index-DlXmqbrh.js";import"./index-DlNYQCn6.js";import"./index-aLQ3cro_.js";import"./index-BjPEFOhy.js";import"./index-DVDHmkxv.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-J3NjxR3v.js";import"./badge.constants-Hjx1TZzp.js";import"./popover.constants-DYu0R6PJ.js";import"./button.component-ReLfwGko.js";import"./buttonsimple.component-C0fNamps.js";import"./DisabledMixin-BVUoG_L5.js";import"./button.utils-rNW36Ji7.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menuitemradio.constants-C1RYE7Fd.js";import"./popover.component-CI9WLYq4.js";import"./if-defined-CJwtqgn3.js";import"./BackdropMixin-DcAnIb1V.js";import"./menuitem.component-3dLTqsFw.js";import"./listitem.component-B9_TTRL3.js";import"./menuitemcheckbox.constants-D43amODj.js";import"./index-Gp1MG_Yr.js";import"./index-Cu0GudqY.js";import"./v4-CmTdKEVZ.js";import"./index-hNe38XHV.js";import"./IconNameMixin-9mj_CL2a.js";import"./index-DTrDRi1E.js";import"./index-c8F7sK6h.js";h.register(x);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,S=e=>m`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      ?expanded="${e.expanded}"
      variant="${e.variant}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      @activechange="${a("onactivechange")}"
      @toggle="${a("ontoggle")}"
    >
      <!-- Upper Nav (scrollable section) -->
      <mdc-menusection slot="scrollable-menubar" show-divider>
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="1"
          label="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings" disabled></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="3" label="Calling"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 1">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="4" label="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="5"
          label="Meetings"
          badge-type="counter"
          counter="2"
          max-counter="66"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="audio-call-bold" nav-id="6" label="Calling"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 2">
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="8"
          label="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="9" label="Meetings"> </mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="10" label="Calling"> </mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 3">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="11" label="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          icon-name="meetings-bold"
          nav-id="12"
          label="Meetings"
        ></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="13" label="Calling"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="placeholder-bold" nav-id="14" label="Teams"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          icon-name="placeholder-bold"
          nav-id="15"
          label="Contacts"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="placeholder-bold" nav-id="16" label="Whiteboards"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" header-text="Section 4">
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="17"
          label="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="18" label="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="19" label="Calling"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="chat-bold" nav-id="20" label="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="21" label="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="22" label="Calling"></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
      <mdc-menusection slot="fixed-menubar">
        <mdc-navmenuitem icon-name="settings-bold" nav-id="23" label="Settings"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          icon-name="help-circle-bold"
          nav-id="24"
          label="Help"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is a brandlogo." name="apple-bold"></mdc-icon>
    </mdc-sidenavigation>
  </div>
`,w=e=>m`
  <div style="height: calc(100vh - 320px); margin: 1rem">
    <mdc-sidenavigation
      ?expanded="${e.expanded}"
      variant="${e.variant}"
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      @activechange="${a("onactivechange")}"
      @toggle="${a("ontoggle")}"
    >
      <!-- Upper Nav (scrollable section) -->
      <mdc-menusection slot="scrollable-menubar" show-divider>
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="1"
          label="Messaging"
          tooltip-text="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="2"
          label="Meetings"
          tooltip-text="Meetings"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" header-text="Section 1">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="4" label="Messaging" tooltip-text="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="5"
          label="Meetings"
          tooltip-text="Meetings"
          badge-type="counter"
          counter="2"
          max-counter="66"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
      <mdc-menusection slot="fixed-menubar" show-divider>
        <mdc-navmenuitem
          icon-name="settings-bold"
          nav-id="13"
          label="Settings"
          tooltip-text="Settings"
          cannot-activate
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="help-circle-bold"
          nav-id="14"
          label="Help"
          tooltip-text="Help, opens a new tab"
          cannot-activate
          tooltip-appearance="always"
          @click="${()=>window.open("https://momentum.design","_blank")}"
        ></mdc-navmenuitem>
      </mdc-menusection>
      <mdc-menusection slot="fixed-menubar">
        <mdc-navmenuitem
          icon-name="settings-bold"
          nav-id="23"
          label="Settings"
          tooltip-text="Settings"
          cannot-activate
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="help-circle-bold"
          nav-id="24"
          label="Help"
          tooltip-text="Help, opens a new tab"
          cannot-activate
          tooltip-appearance="always"
          @click="${()=>window.open("https://momentum.design","_blank")}"
        ></mdc-navmenuitem>
      </mdc-menusection>
    </mdc-sidenavigation>
  </div>
`,A=e=>{const p=()=>{window.confirm("Are you sure you want to cancel?")};return m` <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      variant="${e.variant}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      @activechange="${a("onactivechange")}"
    >
      <!-- Upper Nav (scrollable section) -->
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="verify1" label="Main Meetings" slot="scrollable-menubar" tooltip-text="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="audio-call-bold" nav-id="verify2" label="Main Calling" slot="scrollable-menubar" id="temp" tooltip-text="Calling" is-active-parent-tooltip-text="Calling, contains active navmenuitem"></mdc-navmenuitem>
        <mdc-menupopover triggerid="temp" slot="scrollable-menubar">
          <mdc-navmenuitem label="Webex App Hub" nav-id="verify3" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Team Insights" nav-id="verify4" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Release Notes" nav-id="verify5" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Cisco Spaces" nav-id="verify6" icon-name="placeholder-bold"></mdc-navmenuitem>
        </mdc-menupopover>
        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 1">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="1"
            label="Messaging"
            tooltip-text="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings" soft-disabled 
            tooltip-text="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="audio-call-bold"
            nav-id="3"
            label="Callings"
            tooltip-text="Callings"
          ></mdc-navmenuitem>
          <mdc-navmenuitem
            icon-name="more-circle-bold"
            nav-id="4"
            label="More"
            id="menu-button-trigger"
            tooltip-text="More"
            is-active-parent-tooltip-text="More, contains active navmenuitem"
            >
          </mdc-navmenuitem>
          <mdc-menupopover triggerid="menu-button-trigger">
            <mdc-navmenuitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem
              label="What's new?"
              nav-id="7"
              badge-type="counter"
              counter="2"
              max-counter="66"
              icon-name="placeholder-bold"
            ></mdc-navmenuitem>
            <mdc-navmenuitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" id="share-id" is-active-parent-tooltip-text="Contains active navmenuitem"></mdc-navmenuitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navmenuitem
                label="Webex App Hub"
                nav-id="temp1"
                badge-type="dot"
                icon-name="placeholder-bold"
              ></mdc-navmenuitem>
                <mdc-menusection>
                  <mdc-navmenuitem label="Team Insights" nav-id="temp2" icon-name="placeholder-bold"></mdc-navmenuitem>
                  <mdc-navmenuitem
                    label="Release Notes"
                    nav-id="temp3"
                    badge-type="counter"
                    counter="2"
                    max-counter="66"
                    icon-name="placeholder-bold"
                  ></mdc-navmenuitem>
                </mdc-menusection>
                <mdc-navmenuitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navmenuitem>
              </mdc-menusection>
            </mdc-menupopover>
          </mdc-menupopover>
        </mdc-menusection>

        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 2">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="9"
            label="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="10" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>

        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 3">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="12"
            label="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="13" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>

        <mdc-menusection slot="scrollable-menubar" header-text="Section 4">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="15"
            label="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="16" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
       <mdc-menusection slot="fixed-menubar">
          <mdc-navmenuitem
            badge-type="counter"
            counter="3"
            max-counter="66"
            icon-name="settings-bold"
            nav-id="18"
            label="Settings"
          ></mdc-navmenuitem>
          <mdc-navmenuitem
            @click="${p}"
            icon-name="help-circle-bold"
            nav-id="19"
            label="Help"
            disable-aria-current
          ></mdc-navmenuitem>
        </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"> </mdc-icon>
    </mdc-sidenavigation>
  </div>`},le={title:"Components/sidenavigation/sidenavigation",tags:["autodocs"],component:"mdc-sidenavigation",render:S,argTypes:{expanded:{control:"boolean"},variant:{control:"select",options:Object.values(M)},"grabber-btn-aria-label":{control:"text"},"hide-fixed-section-divider":{control:"boolean"},...N(["Context"]),...y,...f}},n={args:{expanded:!0,variant:g.VARIANT,"footer-text":"%Customer Name%","grabber-btn-aria-label":"Toggle Side navigation"}},t={render:w,parameters:{docs:{description:{story:m`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Mixed Side Navigation example demonstrates the use of NavMenuItems which either can be activated (when
            changing content on the screen like "Messaging") or cannot be activated (when opening external links or
            opening dialogs like "Help"). NavMenuItems that cannot be activated need to have the 'cannot-activate'
            attribute set to true.
            <br />
          </mdc-text>
          <mdc-banner
            variant="informational"
            label="As a A11y recommendation, NavMenuItems that cannot be activated must have a tooltip-text provided (including
            information like 'Opens a new tab') and tooltip-appearance set to 'always' to indicate to users that clicking on
            the NavMenuItem will redirect to a new tab."
          ></mdc-banner> `}}},args:{expanded:!0,variant:g.VARIANT,"footer-text":"%Customer Name%","grabber-btn-aria-label":"Toggle Side navigation","hide-fixed-section-divider":!0}},i={render:A,args:{...n.args}};var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    expanded: true,
    variant: DEFAULTS.VARIANT,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation'
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,r,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: renderMixedSideNavigation,
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Mixed Side Navigation example demonstrates the use of NavMenuItems which either can be activated (when
            changing content on the screen like "Messaging") or cannot be activated (when opening external links or
            opening dialogs like "Help"). NavMenuItems that cannot be activated need to have the 'cannot-activate'
            attribute set to true.
            <br />
          </mdc-text>
          <mdc-banner
            variant="informational"
            label="As a A11y recommendation, NavMenuItems that cannot be activated must have a tooltip-text provided (including
            information like 'Opens a new tab') and tooltip-appearance set to 'always' to indicate to users that clicking on
            the NavMenuItem will redirect to a new tab."
          ></mdc-banner> \`
      }
    }
  },
  args: {
    expanded: true,
    variant: DEFAULTS.VARIANT,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
    'hide-fixed-section-divider': true
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var v,u,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: renderNestedSideNavigation,
  args: {
    ...Example.args
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const re=["Example","Mixed","NestedSideNavigation"];export{n as Example,t as Mixed,i as NestedSideNavigation,re as __namedExportsOrder,le as default};
