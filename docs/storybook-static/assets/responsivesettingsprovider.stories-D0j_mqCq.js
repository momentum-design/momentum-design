import{u as I,a2 as y,a3 as O,n as s,k as h}from"./iframe-C75P9SA2.js";import"./index-CekoBomk.js";import"./index-0yMFPBDK.js";import"./index-DAWtRZBV.js";import"./index-B9DQNI0j.js";import"./index-r4ermNkA.js";import"./index-BYEC8dyy.js";import{a as x}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./popover.component-DbJvY94D.js";import"./if-defined-CZ8A3pCa.js";import"./BackdropMixin-DW6eTJQf.js";import"./index-DN1sq91H.js";import"./button.component-CYN2hRWz.js";import"./buttonsimple.component-Culcvj7V.js";import"./TabIndexMixin-DrAohP6k.js";import"./DisabledMixin-BOa0uV5G.js";import"./button.utils-rNW36Ji7.js";import"./index-C1AES1ef.js";import"./index-D1npLFpQ.js";import"./index-DTrDRi1E.js";import"./menuitemradio.constants-ZDnYzEqg.js";import"./menupopover.constants-Ei2_Uahg.js";import"./badge.constants-ga8wsrRA.js";import"./menuitem.component-Dtd-QYc5.js";import"./listitem.component-DH9CDDFm.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menuitemcheckbox.constants-CJk04Hfw.js";import"./index-Bzwo9pus.js";import"./index-Dg3Pvlce.js";import"./v4-CmTdKEVZ.js";import"./class-map-9sx_XhFO.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-pOe0BKKa.js";import"./index-B69u-rNp.js";import"./formfieldwrapper.constants-6Z3ajpXO.js";import"./toggle.constants-S_6VsLyU.js";import"./dialog.component-Dm2Obsbt.js";import"./FooterMixin-IAbzFG9m.js";import"./link.constants-DBfyo44E.js";const f=I.constructTagName("responsivesettingsprovider"),t={FORCE_FULLSCREEN_DIALOG:!1,POPOVER_POSITIONING:"float",MEDIA:"unknown"},P=["float","dialog"],D=["unknown","mobile","desktop","tablet"],p=class p{constructor(e={}){this.media=t.MEDIA,this.forceFullscreenDialog=t.FORCE_FULLSCREEN_DIALOG,this.popoverPositioning=t.POPOVER_POSITIONING,Object.assign(this,e)}};p.context=y(f);let n=p;var E=Object.defineProperty,A=Object.getOwnPropertyDescriptor,u=(i,e,o,m)=>{for(var r=m>1?void 0:m?A(e,o):e,c=i.length-1,l;c>=0;c--)(l=i[c])&&(r=(m?l(e,o,r):l(r))||r);return m&&r&&E(e,o,r),r};class a extends O{constructor(){super({context:n.context,initialValue:new n({media:t.MEDIA,popoverPositioning:t.POPOVER_POSITIONING,forceFullscreenDialog:t.FORCE_FULLSCREEN_DIALOG})}),this.forceFullscreenDialog=t.FORCE_FULLSCREEN_DIALOG,this.privatePopoverPositioning=t.POPOVER_POSITIONING,this.privateMedia=t.MEDIA}static get Context(){return n.context}set popoverPositioning(e){P.includes(e)&&(this.privatePopoverPositioning=e)}get popoverPositioning(){return this.privatePopoverPositioning}set media(e){D.includes(e)&&(this.privateMedia=e)}get media(){return this.privateMedia}updateContext(){var e,o,m;(((e=this.context.value)==null?void 0:e.media)!==this.privateMedia||((o=this.context.value)==null?void 0:o.popoverPositioning)!==this.privatePopoverPositioning||((m=this.context.value)==null?void 0:m.forceFullscreenDialog)!==this.forceFullscreenDialog)&&(this.context.value.media=this.media,this.context.value.popoverPositioning=this.popoverPositioning,this.context.value.forceFullscreenDialog=this.forceFullscreenDialog,this.context.updateObservers())}}u([s({type:Boolean,attribute:"force-fullscreen-dialog",reflect:!0})],a.prototype,"forceFullscreenDialog",2);u([s({type:String,attribute:"popover-positioning",reflect:!0})],a.prototype,"popoverPositioning",1);u([s({type:String,attribute:"media",reflect:!0})],a.prototype,"media",1);a.register(f);const S=i=>h`
  <mdc-responsivesettingsprovider
    ?force-fullscreen-dialog="${i["force-fullscreen-dialog"]}"
    popover-positioning="${i["popover-positioning"]}"
    media="${i.media}"
  >
  </mdc-responsivesettingsprovider>
`,ve={title:"WIP/responsivesettingsprovider",tags:["autodocs"],component:"mdc-responsivesettingsprovider",render:S,argTypes:{"force-fullscreen-dialog":{control:"boolean"},"popover-positioning":{control:"select",options:P},media:{control:"select",options:D},...x(["Context"])}},d={render:i=>{const e=()=>document.getElementById("dialog-id").removeAttribute("visible"),o=()=>document.getElementById("dialog-id").toggleAttribute("visible");return h`
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="${i["force-fullscreen-dialog"]}"
        popover-positioning="${i["popover-positioning"]}"
        media="${i.media}"
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="${o}">Dialog trigger</mdc-button>
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

        <mdc-dialog
          id="dialog-id"
          triggerID="dialog-trigger"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-desc"
          @close="${e}"
        >
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
      </mdc-responsivesettingsprovider>
    `}};var g,v,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const hideDialog = () => document.getElementById('dialog-id')!.removeAttribute('visible');
    const showDialog = () => document.getElementById('dialog-id')!.toggleAttribute('visible');
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

        <mdc-dialog
          id="dialog-id"
          triggerID="dialog-trigger"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-desc"
          @close="\${hideDialog}"
        >
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
      </mdc-responsivesettingsprovider>
    \`;
  }
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const be=["Example"];export{d as Example,be as __namedExportsOrder,ve as default};
