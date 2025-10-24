import{k as r}from"./iframe-BPwLWgIo.js";import{S as v}from"./sidenavigation.component-CTM9aDGz.js";import{T as s,V as b,a as p}from"./menupopover.constants-DI4Exrne.js";import"./index-yNa5-MzL.js";import"./index-DLT9CAMB.js";import{c as g,s as h}from"./commonArgTypes-BluK8w5L.js";import{a as x}from"./utils-Dd_sfl9-.js";import"./index-BdHw_rmL.js";import"./index-TqbEjwL4.js";import"./index-KvtOgVxB.js";import"./index-DKq9LV7l.js";import"./index-D5q5Kuu8.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-QOPx_rL9.js";import"./popover.component-DKA8cdHS.js";import"./if-defined-oxJKdKKV.js";import"./BackdropMixin-zptfLQVi.js";import"./badge.constants-DcWON9Ua.js";import"./button.component-Cy2gzU5I.js";import"./buttonsimple.component-B9G7za6d.js";import"./DisabledMixin--pSk0K2n.js";import"./button.utils-rNW36Ji7.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menuitemradio.constants-DpF5yPGE.js";import"./menuitem.component-CdGOLnXk.js";import"./listitem.component-NC-9odwW.js";import"./menuitemcheckbox.constants-DuARFAI9.js";import"./index-KpFIBkg6.js";import"./IconNameMixin-ljsYmhVr.js";import"./index-CK7jRy1d.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./v4-CmTdKEVZ.js";import"./index-Dli9n_Yv.js";import"./index-DTrDRi1E.js";import"./index-CxubHpzz.js";v.register(s);const{action:m}=__STORYBOOK_MODULE_ACTIONS__,y=e=>r`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      variant="${e.variant}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      parent-nav-tooltip-text="${e["parent-nav-tooltip-text"]}"
      @activechange="${m("onactivechange")}"
      @toggle="${m("ontoggle")}"
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
`,S=e=>{const u=()=>{window.confirm("Are you sure you want to cancel?")};return r` <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      variant="${e.variant}"
      footer-text=${e["footer-text"]}
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      parent-nav-tooltip-text="${e["parent-nav-tooltip-text"]}"
      @activechange="${m("onactivechange")}"
    >
      <!-- Upper Nav (scrollable section) -->
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="verify1" label="Main Meetings" slot="scrollable-menubar"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="audio-call-bold" nav-id="verify2" label="Main Calling" slot="scrollable-menubar" id="temp"></mdc-navmenuitem>
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
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings" soft-disabled></mdc-navmenuitem>
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="audio-call-bold"
            nav-id="3"
            label="Callings"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="more-circle-bold" nav-id="4" label="More" id="menu-button-trigger"></mdc-navmenuitem>
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
            <mdc-navmenuitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" id="share-id"></mdc-navmenuitem>
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
            @click="${u}"
            icon-name="help-circle-bold"
            nav-id="19"
            label="Help"
            disable-aria-current
          ></mdc-navmenuitem>
        </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"> </mdc-icon>
    </mdc-sidenavigation>
  </div>`},me={title:"Components/sidenavigation/sidenavigation",tags:["autodocs"],component:"mdc-sidenavigation",render:y,argTypes:{variant:{control:"select",options:Object.values(b)},"grabber-btn-aria-label":{control:"text"},"parent-nav-tooltip-text":{control:"text"},...x(["Context"]),...g,...h}},n={args:{variant:p.VARIANT,"footer-text":"%Customer Name%","grabber-btn-aria-label":"Toggle Side navigation","parent-nav-tooltip-text":"Contains active navmenuitem"}},a={render:S,args:{...n.args}};var t,i,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: DEFAULTS.VARIANT,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
    'parent-nav-tooltip-text': 'Contains active navmenuitem'
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderNestedSideNavigation,
  args: {
    ...Example.args
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const te=["Example","NestedSideNavigation"];export{n as Example,a as NestedSideNavigation,te as __namedExportsOrder,me as default};
