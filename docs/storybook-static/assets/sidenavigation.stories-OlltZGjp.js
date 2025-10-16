import{k as r}from"./iframe-Bf6-IwAq.js";import{S as v}from"./sidenavigation.component-z8J4LGmw.js";import{T as s,V as b,a as p}from"./menupopover.constants-Avi210jE.js";import"./index-CUTflbsM.js";import"./index-CZDWQco9.js";import{c as g,s as h}from"./commonArgTypes-BluK8w5L.js";import{a as x}from"./utils-Dd_sfl9-.js";import"./index-DLUw99h4.js";import"./index-ClbzVVUv.js";import"./index-BWbNLf4I.js";import"./index-D_ECVX3R.js";import"./index-Xcv1DzzC.js";import"./preload-helper-C1FmrZbK.js";import"./keys-hFXe221I.js";import"./popover.component-4uKr9v9E.js";import"./base-DIkkzJ-c.js";import"./if-defined-DdJfs53F.js";import"./BackdropMixin-C2wU_3qk.js";import"./badge.constants-jSWaOn1O.js";import"./button.component-CQzCH_PC.js";import"./buttonsimple.component-BDbkvrcc.js";import"./DisabledMixin-VQPUxNBU.js";import"./TabIndexMixin-DwRLYS46.js";import"./button.utils-rNW36Ji7.js";import"./query-assigned-elements-uEuc3rg8.js";import"./menuitemradio.constants-El-wG_P1.js";import"./menuitem.component-DeZSB-nX.js";import"./listitem.component-DfVtcUxi.js";import"./menuitemcheckbox.constants-kyugYcTn.js";import"./index-7U_I6KX4.js";import"./IconNameMixin-D-VuWImk.js";import"./index-BeK5xPCr.js";import"./v4-CmTdKEVZ.js";import"./index-DSKDI5Bd.js";import"./index-DTrDRi1E.js";import"./index-C0dtYJy5.js";v.register(s);const{action:m}=__STORYBOOK_MODULE_ACTIONS__,y=e=>r`
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
