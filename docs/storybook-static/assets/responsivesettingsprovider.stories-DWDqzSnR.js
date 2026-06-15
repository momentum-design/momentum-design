import{k as n}from"./iframe-Cw3hWe9-.js";import{V as l,e as u}from"./dialog.component-fm8AWR1s.js";import"./index-CBcFuzZv.js";import"./index-C0AgdMeC.js";import"./index-g8Vle-aB.js";import"./index-DeDRmzOJ.js";import"./index-D6-UMZmd.js";import"./index-Dmm9gqIE.js";import"./index-DY6jHwVy.js";import{h as s}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-_ax9bU8M.js";import"./BackdropMixin-DuSRThUy.js";import"./FooterMixin-Ct343Btj.js";import"./query-assigned-elements-IIwFEuFy.js";import"./link.constants-CwB_lkbI.js";import"./index-aG5WixC3.js";import"./KeyDownHandledMixin-CjJRInCW.js";import"./popover.component-BmLZZY3r.js";import"./popover.constants-dm2CvP71.js";import"./index-mtDfOsBl.js";import"./button.component-Cwvl9zZ2.js";import"./buttonsimple.component-Bt0MD22L.js";import"./DisabledMixin-CLuiJxRs.js";import"./button.utils-rNW36Ji7.js";import"./index-D27HkEz6.js";import"./index-DTrDRi1E.js";import"./menuitemradio.constants-CvcftiLr.js";import"./menupopover.constants-k_loWMr8.js";import"./badge.constants-C0q7dFN3.js";import"./menuitem.component-BqaWbZI0.js";import"./listitem.component-jsGktKJ_.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BQ3h_7x9.js";import"./menuitemcheckbox.constants-1xJz9EI-.js";import"./index-tHt3kdo8.js";import"./index-DjCebfT5.js";import"./v4-CmTdKEVZ.js";import"./class-map-7-MW9LRd.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-Cj6FSW1w.js";import"./index-DtjaD_4i.js";import"./formfieldwrapper.constants-C6FyC3aq.js";import"./toggle.constants-DvI_BMAp.js";import"./index-D-W8vsue.js";const p=e=>n`
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
