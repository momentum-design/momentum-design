import{k as n}from"./iframe-eduPLbBc.js";import{V as l,e as u}from"./dialog.component-DZdpbrWl.js";import"./index-DglZ7vXR.js";import"./index-B228BwXa.js";import"./index-0qYfPTQw.js";import"./index-DmlJr7us.js";import"./index-CvEaGgMd.js";import"./index-Cwgv1X43.js";import"./index-C9vUPvHh.js";import{h as s}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-DF1BNp8W.js";import"./BackdropMixin-C6ckmUxp.js";import"./FooterMixin-BRx9kMmC.js";import"./query-assigned-elements-BUBJ0xwP.js";import"./link.constants-CP2BMbHD.js";import"./index-ByNZ0Tb5.js";import"./KeyDownHandledMixin-CTBSN6yg.js";import"./popover.component-Dm3UWkbP.js";import"./popover.constants-Cws9S4jg.js";import"./index-1aWyLt7a.js";import"./button.component-JPWiLR9l.js";import"./buttonsimple.component-DGAFLjmv.js";import"./DisabledMixin-xnjcZ0fX.js";import"./button.utils-rNW36Ji7.js";import"./index-NqmhigYf.js";import"./index-DTrDRi1E.js";import"./menuitemradio.constants-BdxLpQM-.js";import"./menupopover.constants-CM4qSMpZ.js";import"./badge.constants-DdGw89So.js";import"./menuitem.component-B6GuGbe6.js";import"./listitem.component-N2t_9JcK.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D47XfGBl.js";import"./menuitemcheckbox.constants-Ccmr5kJO.js";import"./index-DMxE6rRu.js";import"./index-DFSbjR7Q.js";import"./v4-CmTdKEVZ.js";import"./class-map-C3KMyPae.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-xyEaQgTB.js";import"./index-BN3I1Myy.js";import"./formfieldwrapper.constants-Bmdl4TXi.js";import"./toggle.constants-C9ZlbnbY.js";import"./index-CU50msi3.js";const p=e=>n`
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
