import{k as a}from"./iframe-CYZ064vw.js";import{S as w}from"./sidenavigation.component-CSlQm0v7.js";import{T as N,V as f,S as M,a as d}from"./menupopover.constants-C5XzAs8k.js";import"./index-DM419G9w.js";import"./index-BRF_lqhB.js";import{c as T,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as $}from"./utils-B5QUENNQ.js";import"./index-DWBjme5d.js";import"./index-BCoCt2OM.js";import"./index-C-a6jsM_.js";import"./index-D5GKmp8c.js";import"./index-IWbs5dDg.js";import"./preload-helper-C1FmrZbK.js";import"./KeyDownHandledMixin-DGzJ0rYO.js";import"./index-Cm4DuzN6.js";import"./badge.constants-BGT540PQ.js";import"./popover.constants-gNuL8rzb.js";import"./button.component-DTdegw5n.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./button.utils-rNW36Ji7.js";import"./query-assigned-elements-D2XoKueq.js";import"./menuitemradio.constants-CrIqXSV_.js";import"./BackdropMixin-DDg7Q_Id.js";import"./menuitem.component-CEMs2qRx.js";import"./listitem.component-Db8W56sD.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CBNLPVQ0.js";import"./menuitemcheckbox.constants-Cy-h6jCK.js";import"./popover.component-BIUkn_Yc.js";import"./index-B1RCHNN3.js";import"./v4-CmTdKEVZ.js";import"./index-CbK4qKYb.js";import"./IconNameMixin-DeWqQ5kO.js";import"./index-DTrDRi1E.js";import"./index-CQT5f8DH.js";w.register(N);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,A=e=>a`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      ?expanded="${e.expanded}"
      variant="${e.variant}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      submenu-type="${e["submenu-type"]}"
      @activechange="${n("onactivechange")}"
      @toggle="${n("ontoggle")}"
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
        <mdc-navmenuitem nav-id="14" label="Teams" icon-name="webex-teams-bold"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          nav-id="15"
          label="Contacts"
        ></mdc-navmenuitem>
        <mdc-navmenuitem nav-id="16" label="Whiteboards"></mdc-navmenuitem>
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
`,E=e=>a`
  <div style="height: calc(100vh - 320px); margin: 1rem">
    <mdc-sidenavigation
      ?expanded="${e.expanded}"
      variant="${e.variant}"
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      submenu-type="${e["submenu-type"]}"
      @activechange="${n("onactivechange")}"
      @toggle="${n("ontoggle")}"
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
`,I=e=>{const S=()=>{window.confirm("Are you sure you want to cancel?")};return a` <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      variant="${e.variant}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      submenu-type="${e["submenu-type"]}"
      @activechange="${n("onactivechange")}"
    >
      <!-- Upper Nav (scrollable section) -->
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="verify1" label="Main Meetings" slot="scrollable-menubar" tooltip-text="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="audio-call-bold" nav-id="verify2" label="Main Calling" slot="scrollable-menubar" id="temp" tooltip-text="Calling" is-active-parent-tooltip-text="Calling, contains active navmenuitem"></mdc-navmenuitem>
        <mdc-menupopover triggerid="temp" slot="scrollable-menubar">
          <mdc-navmenuitem label="Webex App Hub" nav-id="verify3" badge-type="dot" ></mdc-navmenuitem>
          <mdc-navmenuitem label="Team Insights" nav-id="verify4" ></mdc-navmenuitem>
          <mdc-navmenuitem label="Release Notes" nav-id="verify5" badge-type="counter" counter="2" max-counter="66" ></mdc-navmenuitem>
          <mdc-navmenuitem label="Cisco Spaces" nav-id="verify6" ></mdc-navmenuitem>
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
            <mdc-navmenuitem label="App Hub" nav-id="5" badge-type="dot" ></mdc-navmenuitem>
            <mdc-navmenuitem label="Personal Insights" nav-id="6" ></mdc-navmenuitem>
            <mdc-navmenuitem
              label="What's new?"
              nav-id="7"
              badge-type="counter"
              counter="2"
              max-counter="66"
              
            ></mdc-navmenuitem>
            <mdc-navmenuitem label="Collaboration Tools" nav-id="8"  id="share-id" is-active-parent-tooltip-text="Contains active navmenuitem"></mdc-navmenuitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navmenuitem
                label="Webex App Hub"
                nav-id="temp1"
                badge-type="dot"
                
              ></mdc-navmenuitem>
                <mdc-menusection>
                  <mdc-navmenuitem label="Team Insights" nav-id="temp2" ></mdc-navmenuitem>
                  <mdc-navmenuitem
                    label="Release Notes"
                    nav-id="temp3"
                    badge-type="counter"
                    counter="2"
                    max-counter="66"
                    
                  ></mdc-navmenuitem>
                </mdc-menusection>
                <mdc-navmenuitem label="Cisco Spaces" nav-id="temp4" ></mdc-navmenuitem>
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
            @click="${S}"
            icon-name="help-circle-bold"
            nav-id="19"
            label="Help"
            disable-aria-current
          ></mdc-navmenuitem>
        </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"> </mdc-icon>
    </mdc-sidenavigation>
  </div>`},U=e=>a`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      variant="${e.variant}"
      ?expanded="${e.expanded}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      ?hide-fixed-section-divider="${e["hide-fixed-section-divider"]}"
      submenu-type="${e["submenu-type"]}"
      @activechange="${n("onactivechange")}"
      @toggle="${n("ontoggle")}"
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
        <mdc-navmenuitem
          badge-type="dot"
          icon-name="audio-call-bold"
          nav-id="3"
          label="Calling"
          tooltip-text="Calling"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section name">
        <mdc-navmenuitem
          icon-name="chat-bold"
          nav-id="4"
          label="Messaging"
          id="dropdown-trigger-1"
          tooltip-text="Messaging"
          is-active-parent-tooltip-text="Messaging, contains active navmenuitem"
        ></mdc-navmenuitem>
        <div data-trigger="dropdown-trigger-1">
          <mdc-navmenuitem label="Sub Item 1" nav-id="4-1"></mdc-navmenuitem>
          <mdc-navmenuitem label="Sub Item 2" nav-id="4-2"></mdc-navmenuitem>
          <mdc-navmenuitem label="Sub Item 3" nav-id="4-3"></mdc-navmenuitem>
        </div>

        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="5"
          label="Meetings"
          id="dropdown-trigger-2"
          tooltip-text="Meetings"
          is-active-parent-tooltip-text="Meetings, contains active navmenuitem"
        ></mdc-navmenuitem>
        <div data-trigger="dropdown-trigger-2">
          <mdc-navmenuitem label="Daily Standup" nav-id="5-1"></mdc-navmenuitem>
          <mdc-navmenuitem label="Sprint Review" nav-id="5-2"></mdc-navmenuitem>
          <mdc-navmenuitem label="Retrospective" nav-id="5-3"></mdc-navmenuitem>
          <mdc-navmenuitem label="Planning" nav-id="5-4"></mdc-navmenuitem>
        </div>

        <mdc-navmenuitem
          icon-name="audio-call-bold"
          nav-id="6"
          label="Calling"
          tooltip-text="Calling"
        ></mdc-navmenuitem>
        <mdc-navmenuitem nav-id="7" label="Teams" tooltip-text="Teams" icon-name="webex-teams-bold"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" header-text="Section name">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="8" label="Messaging" tooltip-text="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="9"
          label="Meetings"
          tooltip-text="Meetings"
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="audio-call-bold"
          nav-id="10"
          label="Calling"
          tooltip-text="Calling"
        ></mdc-navmenuitem>
        <mdc-navmenuitem nav-id="11" label="Teams" tooltip-text="Teams" icon-name="webex-teams-bold"></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
      <mdc-menusection slot="fixed-menubar">
        <mdc-navmenuitem
          icon-name="settings-bold"
          nav-id="12"
          label="Settings"
          tooltip-text="Settings"
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="help-circle-bold"
          nav-id="13"
          label="Help"
          tooltip-text="Help"
          disable-aria-current
        ></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"> </mdc-icon>
    </mdc-sidenavigation>
  </div>
`,be={title:"Components/sidenavigation/sidenavigation",tags:["autodocs"],component:"mdc-sidenavigation",render:A,argTypes:{expanded:{control:"boolean"},variant:{control:"select",options:Object.values(f)},"grabber-btn-aria-label":{control:"text"},"hide-fixed-section-divider":{control:"boolean"},"submenu-type":{control:"select",options:Object.values(M)},...$(["Context"]),...T,...C}},t={args:{expanded:!0,variant:d.VARIANT,"submenu-type":d.SUBMENU_TYPE,"footer-text":"%Customer Name%","grabber-btn-aria-label":"Toggle Side navigation"}},i={render:E,parameters:{docs:{description:{story:a`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
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
          ></mdc-banner> `}}},args:{expanded:!0,variant:d.VARIANT,"submenu-type":d.SUBMENU_TYPE,"footer-text":"%Customer Name%","grabber-btn-aria-label":"Toggle Side navigation","hide-fixed-section-divider":!0}},m={render:I,args:{...t.args}},o={render:U,parameters:{docs:{description:{story:a`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
          The Dropdown Side Navigation example demonstrates the use of NavMenuItems with inline dropdown submenus. When
          the sidenavigation is expanded and <code>submenu-type="dropdown"</code>, clicking a parent NavMenuItem toggles
          its child items inline below it. When collapsed, flyout menus are used instead. This works only for a single
          level of nesting to avoid complexity and accessibility issues.
          <br />
        </mdc-text>`}}},args:{...t.args,"submenu-type":M.DROPDOWN}};var c,l,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    expanded: true,
    variant: DEFAULTS.VARIANT,
    'submenu-type': DEFAULTS.SUBMENU_TYPE,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation'
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var s,u,v;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    'submenu-type': DEFAULTS.SUBMENU_TYPE,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
    'hide-fixed-section-divider': true
  }
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,g,p;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: renderNestedSideNavigation,
  args: {
    ...Example.args
  }
}`,...(p=(g=m.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var x,h,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: renderDropdownSideNavigation,
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
          The Dropdown Side Navigation example demonstrates the use of NavMenuItems with inline dropdown submenus. When
          the sidenavigation is expanded and <code>submenu-type="dropdown"</code>, clicking a parent NavMenuItem toggles
          its child items inline below it. When collapsed, flyout menus are used instead. This works only for a single
          level of nesting to avoid complexity and accessibility issues.
          <br />
        </mdc-text>\`
      }
    }
  },
  args: {
    ...Example.args,
    'submenu-type': SUBMENU_TYPES.DROPDOWN
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const ge=["Example","Mixed","NestedSideNavigation","DropdownSideNavigation"];export{o as DropdownSideNavigation,t as Example,i as Mixed,m as NestedSideNavigation,ge as __namedExportsOrder,be as default};
