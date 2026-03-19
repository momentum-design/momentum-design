import{k as n}from"./iframe-n_pPM-AH.js";import{V as l,e as u}from"./dialog.component-BoD29wvq.js";import"./index-TG45JQW4.js";import"./index-DT1p8xm2.js";import"./index-HPIj6rY9.js";import"./index-DLRk35bW.js";import"./index-CagPHaus.js";import"./index-UNJT2p-s.js";import"./index-DZqu0BK3.js";import{h as s}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-Ci9G1PLj.js";import"./BackdropMixin-B0-id4DG.js";import"./FooterMixin-C9VEt56W.js";import"./query-assigned-elements-DK5RpBr_.js";import"./link.constants-DQvgOPdM.js";import"./index-Mza85U84.js";import"./KeyDownHandledMixin-DZIjQ3jq.js";import"./popover.component-BsPvCrCV.js";import"./popover.constants-BG8BtsK7.js";import"./index-DKUdKCPs.js";import"./button.component-CRCj3cYz.js";import"./buttonsimple.component-BhVhD8WC.js";import"./DisabledMixin-CSX0_rm2.js";import"./button.utils-rNW36Ji7.js";import"./index-DPX8NBux.js";import"./index-DTrDRi1E.js";import"./menuitemradio.constants-C1nJuvxr.js";import"./menupopover.constants-Bpmk2BWQ.js";import"./badge.constants-4T4IFTMT.js";import"./menuitem.component-DHK09zyX.js";import"./listitem.component-CxQ4RKJ4.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CHN0co3D.js";import"./menuitemcheckbox.constants-DwvLqc-t.js";import"./index-CBP3N6H-.js";import"./index-CU9w1pWm.js";import"./v4-CmTdKEVZ.js";import"./class-map-DCpQEf27.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-CXx4ka7u.js";import"./index-BaB97zpC.js";import"./formfieldwrapper.constants-B8ILkPv5.js";import"./toggle.constants-DK1NqveL.js";import"./index-C90kUwBR.js";const p=e=>n`
  <mdc-responsivesettingsprovider
    ?force-fullscreen-dialog="${e["force-fullscreen-dialog"]}"
    popover-positioning="${e["popover-positioning"]}"
    media="${e.media}"
  >
  </mdc-responsivesettingsprovider>
`,ne={title:"Providers/Responsive Settings Provider",tags:["autodocs"],component:"mdc-responsivesettingsprovider",render:p,argTypes:{"force-fullscreen-dialog":{control:"boolean"},"popover-positioning":{control:"select",options:l},media:{control:"select",options:u},...s(["Context"])}},t={render:e=>{const d=()=>document.getElementById("dialog-id").removeAttribute("visible"),r=()=>document.getElementById("dialog-id").toggleAttribute("visible"),c=()=>document.getElementById("announcement-id").removeAttribute("visible"),a=()=>document.getElementById("announcement-id").toggleAttribute("visible");return n`
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="${e["force-fullscreen-dialog"]}"
        popover-positioning="${e["popover-positioning"]}"
        media="${e.media}"
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="${r}">Dialog trigger</mdc-button>
          <mdc-button @click="${a}">Announcement trigger</mdc-button>
        </div>
        <mdc-popover triggerID="popover-trigger" placement="bottom" show-arrow>
          <div style="padding: 1rem; max-width: 200px;">
            This is a popover content. It should adjust its behavior based on the ResponsiveSettingsProvider settings.
          </div>
        </mdc-popover>

        <mdc-menupopover triggerID="menu-trigger" placement="bottom">
          <mdc-menuitem label="Profile"></mdc-menuitem>
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
          </mdc-menupopover>
        </mdc-menupopover>

        <mdc-dialog id="dialog-id" @close="${d}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
        <mdc-announcementdialog id="announcement-id" @close="${c}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Announcement Dialog</h2>
          <mdc-text slot="description-container" type="body-large-regular">
            Introduction sentence.
            <br />
            Feature description.
            <br />
            Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
            instructional or technical.
            <br />
            Max 8 lines of copy with or without breaks.
          </mdc-text>
        </mdc-announcementdialog>
      </mdc-responsivesettingsprovider>
    `}};var i,o,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const hideDialog = () => document.getElementById('dialog-id')!.removeAttribute('visible');
    const showDialog = () => document.getElementById('dialog-id')!.toggleAttribute('visible');
    const hideAnnouncement = () => document.getElementById('announcement-id')!.removeAttribute('visible');
    const showAnnouncement = () => document.getElementById('announcement-id')!.toggleAttribute('visible');
    return html\`
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="\${args['force-fullscreen-dialog']}"
        popover-positioning="\${args['popover-positioning']}"
        media="\${args.media}"
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="\${showDialog}">Dialog trigger</mdc-button>
          <mdc-button @click="\${showAnnouncement}">Announcement trigger</mdc-button>
        </div>
        <mdc-popover triggerID="popover-trigger" placement="bottom" show-arrow>
          <div style="padding: 1rem; max-width: 200px;">
            This is a popover content. It should adjust its behavior based on the ResponsiveSettingsProvider settings.
          </div>
        </mdc-popover>

        <mdc-menupopover triggerID="menu-trigger" placement="bottom">
          <mdc-menuitem label="Profile"></mdc-menuitem>
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
          </mdc-menupopover>
        </mdc-menupopover>

        <mdc-dialog id="dialog-id" @close="\${hideDialog}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
        <mdc-announcementdialog id="announcement-id" @close="\${hideAnnouncement}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Announcement Dialog</h2>
          <mdc-text slot="description-container" type="body-large-regular">
            Introduction sentence.
            <br />
            Feature description.
            <br />
            Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
            instructional or technical.
            <br />
            Max 8 lines of copy with or without breaks.
          </mdc-text>
        </mdc-announcementdialog>
      </mdc-responsivesettingsprovider>
    \`;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Example"];export{t as Example,de as __namedExportsOrder,ne as default};
