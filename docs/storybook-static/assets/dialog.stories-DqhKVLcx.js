import"./index-Dt8A9gY4.js";import{k as o}from"./iframe-CfitjWUE.js";import{t as w}from"./if-defined-B92OEDYj.js";import{c as Ne,s as He}from"./commonArgTypes-BG7EqI50.js";import{b as Fe}from"./utils-D6nie9pS.js";import{S as B}from"./popover.constants-BfURR8Av.js";import{b as Me,D as Ue,c as a,a as l}from"./dialog.component-mtDX41qy.js";import"./index-Crr3g2LE.js";import"./index-B0gnaOC9.js";import"./index-C9OJNBLH.js";import"./index-BJskGwBL.js";import"./index-Dk0p9BTn.js";import"./index-CN9vTtRB.js";import"./index-1kG1CCc-.js";import"./index-CEi9hZ-P.js";import"./index-BlCY6O7Q.js";import"./index-Brp2nQrk.js";import"./index-DMXgfFqe.js";import"./index-Cd0LFQli.js";import"./index-DLamZbG-.js";import"./index-Blq3aC3u.js";import"./preload-helper-C1FmrZbK.js";import"./BackdropMixin-CoG9kfZL.js";import"./dom-BlZvhF8F.js";import"./FooterMixin-C863NT-e.js";import"./query-assigned-elements-DYg43Ijs.js";import"./link.constants-BzfjIF3Q.js";import"./index-C9SFOIud.js";import"./IconNameMixin-JpeZpjUG.js";import"./linksimple.component-bEzbTVgf.js";import"./DataAriaLabelMixin-C0eirZqS.js";import"./DisabledMixin-W25vj83_.js";import"./index-Cs_OuWm2.js";import"./index-DTrDRi1E.js";import"./button.component-wQ-F7Mht.js";import"./buttonsimple.component-CHF3jYvP.js";import"./KeyToActionMixin-CroOPhbe.js";import"./button.utils-rNW36Ji7.js";import"./popover.component-5fveDtIW.js";import"./menuitemradio.constants-CTMv_6xb.js";import"./menupopover.constants-B_DLSVVw.js";import"./badge.constants-Dz04XMZC.js";import"./menuitem.component-GMjAjT8e.js";import"./listitem.component-BxEI-N4E.js";import"./menuitemcheckbox.constants-BR2DH72-.js";import"./v4-CmTdKEVZ.js";import"./ListNavigationMixin-DB69DWe0.js";import"./CaptureDestroyEventForChildElement-DoEv-33W.js";import"./index-BsJzmGgQ.js";import"./index-B7S1CVJR.js";import"./index-BWgaNW8z.js";import"./formfieldwrapper.component-Chq4h6Pf.js";import"./formfieldwrapper.constants-BgypaDPT.js";import"./input.constants-J2NnI_5u.js";import"./FormInternalsMixin-BkwtBCb3.js";import"./index-BQPE_SGk.js";import"./index-O3mqq0YK.js";import"./input.component-CvE5tQ4i.js";import"./directive-Ctav8iJK.js";import"./optgroup.constants-CgXv6s8y.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,d=(e,t,i)=>o`<mdc-dialog
    class="${e.class}"
    style="${e.style}"
    id="${e.id}"
    z-index="${e["z-index"]}"
    close-button-aria-label="${e["close-button-aria-label"]}"
    header-text="${e["header-text"]}"
    description-text="${e["description-text"]}"
    header-tag-name="${e["header-tag-name"]}"
    description-tag-name="${e["description-tag-name"]}"
    role="${e.role}"
    triggerId="${e.triggerId}"
    aria-labelledby="${w(e["aria-labelledby"])}"
    aria-label="${w(e["aria-label"])}"
    ?should-focus-trap-wrap=${e["should-focus-trap-wrap"]}
    size="${e.size}"
    ?visible="${e.visible}"
    variant="${e.variant}"
    ?focus-trap="${e["focus-trap"]}"
    ?hide-backdrop="${e["hide-backdrop"]}"
    @shown="${p("onshown")}"
    @hidden="${p("onhidden")}"
    @close="${i}"
  >
    ${t}
  </mdc-dialog>`,c=(e,t,i)=>o`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${i}" id="${e}">${t}</mdc-button>
  </div>
`,Ve=(e,t,i)=>o`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${i}" id="${e}">${t}</mdc-button>
    <mdc-tooltip id="tooltip" triggerId="${e}" placement="top"> Open a dialog </mdc-tooltip>
  </div>
`,W=(e,t=!1)=>o`
  ${t&&o` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
`,Re=e=>o`
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
    <mdc-popover
      id="popover"
      placement="bottom"
      trigger="click"
      triggerId="popover-trigger"
      focus-trap
      interactive
      hide-on-escape
      focus-back-to-trigger
      hide-on-outside-click
    >
      <div class="popover-content">
        <p>This is the content of the popover.</p>
        <mdc-button @click="${e}">Close Popover</mdc-button>
      </div>
    </mdc-popover>
    <mdc-button id="popover-trigger">Toggle Popover</mdc-button>
    <mdc-tooltip id="tooltip" triggerId="tooltip-trigger" placement="top"> This is a tooltip </mdc-tooltip>
    <mdc-button id="tooltip-trigger">Hover me for tooltip</mdc-button>
  </div>
`,Ye=()=>o`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
    <mdc-buttongroup variant="secondary" style="margin-top: 1rem;">
      <mdc-button prefix-icon="zoom-out-regular"></mdc-button>
      <mdc-button>100%</mdc-button>
      <mdc-button prefix-icon="zoom-in-regular"></mdc-button>
    </mdc-buttongroup>
  </div>
`,je=()=>o`
  <div slot="dialog-body">
    <p>This is the body content of the dialog with a textarea. Try out pressing Tab to see the Focus Trap in action.</p>
    <mdc-textarea
      label="Type something here..."
      rows="4"
      cols="50"
      max-character-limit="75"
      character-limit-announcement="%{number-of-characters} out of %{max-character-limit} characters are typed."
    ></mdc-textarea>
    <mdc-button>This is a mdc-button after the Textarea</mdc-button>
  </div>
`,qe=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,W(t),i)}
  `},Ke=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,W(t,!0),i)}
  `},Xe=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")},r=()=>{window.confirm("Are you sure you want to cancel?")&&t()};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,o`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${r}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${t}">Save</mdc-button>
      `,i)}
  `},Je=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,o` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,i)}
  `},Qe=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${Ve(e.triggerId,"Click me!",t)}
    ${d(e,Re(t),i)}
  `},et=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},r=()=>{document.getElementById(e.id).removeAttribute("visible")},g=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,o`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
          <mdc-button id="nested-dialog-trigger" @click=${i}>Open Nested Dialog</mdc-button>
          <mdc-dialog
            id="nested-dialog"
            triggerId="nested-dialog-trigger"
            aria-label="nested-dialog"
            size="small"
            close-button-aria-label="Close nested dialog"
            header-text="Nested Dialog Header"
            description-text="This is a nested dialog description."
            @close="${g}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,r)}
  `},tt=e=>{const t=()=>{document.getElementById("outer-dialog").toggleAttribute("visible")},i=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},r=()=>{document.getElementById("outer-dialog").removeAttribute("visible")},g=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return o`
    <style>
      #dialog {
        bottom: calc(100% - 100px) !important;
      }
      [triggerId='popup-lvl2'] {
        top: 90px !important;
        left: 100px !important;
      }
      #nested-dialog {
        bottom: calc(100% - 150px) !important;
        right: calc(100% - 150px);
      }
    </style>
    <div id="root">
      ${c(e.triggerId,"Open Dialog (lvl 1)",t)}
      <mdc-dialog id="outer-dialog" .onClose="${r}">
        <div slot="dialog-body">
          <p>Dialog lvl 1.</p>
          <mdc-button id="popup-lvl2">Open Popover (lvl 2)</mdc-button>
          <mdc-tooltip triggerId="popup-lvl2" placement="top">Open Popover (lvl 2)</mdc-tooltip>
          <mdc-popover
            triggerId="popup-lvl2"
            hide-on-escape
            focus-back-to-trigger
            interactive
            focus-trap
            strategy="${e.lvl2PopoverStrategy==="append to root"?B.ABSOLUTE:e.lvl2PopoverStrategy}"
            append-to="${w(e.lvl2PopoverStrategy==="append to root"?"root":void 0)}"
          >
            <p>Popover lvl 2.</p>
            <mdc-button id="nested-dialog-trigger" @click=${i}>Open Dialog (lvl 3)</mdc-button>
            <mdc-tooltip triggerid="nested-dialog-trigger" placement="top">Open Dialog (lvl 3)</mdc-tooltip>
            <mdc-dialog
              id="nested-dialog"
              triggerid="nested-dialog-trigger"
              aria-label="nested-dialog"
              size="small"
              close-button-aria-label="Close nested dialog"
              @close="${g}"
            >
              <div slot="dialog-body">
                <p>Dialog lvl 3.</p>
                <mdc-button id="menu-lvl4">Open Menu (lvl 4)</mdc-button>
                <mdc-tooltip triggerid="menu-lvl4" placement="top">Open Menu (lvl 4)</mdc-tooltip>

                <mdc-menupopover triggerid="menu-lvl4">
                  <mdc-menuitem id="submenu-trigger" label="Sub-menu (lvl 5)" arrow-position="trailing"></mdc-menuitem>
                  <mdc-menuitem label="Menu with tooltip" id="menu-with-tooltip"></mdc-menuitem>
                  <mdc-tooltip triggerid="menu-with-tooltip" placement="right">This is a tooltip</mdc-tooltip>
                  <mdc-menupopover triggerid="submenu-trigger" placement="right">
                    <mdc-menupopover triggerid="security-id" placement="right-start">
                      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
                      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
                      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
                    </mdc-menupopover>
                    <mdc-menuitem label="Sub-menu (lvl 6)" id="security-id" arrow-position="trailing"></mdc-menuitem>
                  </mdc-menupopover>
                </mdc-menupopover></div
            ></mdc-dialog>
            <mdc-select
              label="Headquarters location"
              required
              help-text="Select Help Text"
              data-aria-label="Select label"
              placeholder="Select your headquarters location"
            >
              <mdc-selectlistbox>
                <mdc-option id="select-tooltip-1" value="london" label="London, UK"></mdc-option>
                <mdc-tooltip triggerid="select-tooltip-1" strategy="fixed">London, UK"</mdc-tooltip>
                <mdc-option id="select-tooltip-2" selected value="losangeles" label="Los Angeles, CA"></mdc-option>
                <mdc-tooltip triggerid="select-tooltip-2" strategy="fixed">Los Angeles, CA</mdc-tooltip>
                <mdc-option id="select-tooltip-3" value="newyork" label="New York, NY"></mdc-option>
                <mdc-tooltip triggerid="select-tooltip-3" strategy="fixed">New York, NY</mdc-tooltip>
              </mdc-selectlistbox>
            </mdc-select>

            <mdc-combobox
              data-aria-label="Select a country"
              help-text="Select a country"
              help-text-type="default"
              info-icon-aria-label="Required icon label"
              label="Top Countries"
              name="country"
              placeholder="Start typing"
              placement="bottom-start"
              invalid-custom-value-text="Custom values are not allowed"
            >
              <mdc-selectlistbox>
                <mdc-option id="cmb-tooltip-1" value="arg" label="Argentina"></mdc-option>
                <mdc-tooltip triggerid="cmb-tooltip-1" strategy="fixed">Argentina</mdc-tooltip>
                <mdc-option id="cmb-tooltip-2" value="aus" label="Australia"></mdc-option>
                <mdc-tooltip triggerid="cmb-tooltip-2" strategy="fixed">Australia</mdc-tooltip>
                <mdc-option id="cmb-tooltip-3" value="au" label="Austria"></mdc-option>
                <mdc-tooltip triggerid="cmb-tooltip-3" strategy="fixed">Austria</mdc-tooltip>
              </mdc-selectlistbox>
            </mdc-combobox>
          </mdc-popover>
        </div>
      </mdc-dialog>
    </div>
  `},ot=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)} ${d(e,je(),i)}
  `},it=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,Ye(),i)}
  `},rt=(e,t)=>o`
  <mdc-list aria-label="${t}">
    ${e?o`<mdc-listheader slot="list-header" header-text="${e}"></mdc-listheader>`:""}
    <mdc-listitem @click=${p("onclick")} label="List Item 1">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${p("onclick")} label="List Item 2">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${p("onclick")} label="List Item 3">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
  </mdc-list>
`,nt=e=>o`
  ${c(e.triggerId,"Click me!",()=>{document.getElementById(e.id).toggleAttribute("visible")})}
  ${d(e,o`
      <div slot="dialog-body" style="width: 100%">
        <p>This is the body content of the dialog.</p>
        ${rt(e.textPassedToListHeader,e["aria-label"])}
      </div>
    `,()=>{document.getElementById(e.id).removeAttribute("visible")})}
`,go={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:qe,argTypes:{...Ne,...He,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Me)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},"hide-backdrop":{control:"boolean"},role:{control:"select",options:Object.values(Ue)},size:{control:"select",options:Object.values(a)},visible:{control:"boolean"}}},n={id:"dialog","z-index":l.Z_INDEX,role:l.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:l.VARIANT},s={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":l.HEADER_TAG_NAME,"description-tag-name":l.DESCRIPTION_TAG_NAME},u={args:{size:l.SIZE,...n,...s}},b={args:{size:l.SIZE,...n,...s,"hide-backdrop":!0},parameters:{docs:{description:{story:"This example shows a dialog without a backdrop. The backdrop can be disabled by setting the `hide-backdrop` attribute to `true`. When disabled, users can interact with elements behind the dialog."}}}},h={name:"Size: Small",args:{size:a[0],...n,...s}},v={name:"Size: Medium",args:{size:a[1],...n,...s}},y={name:"Size: Large",args:{size:a[2],...n,...s}},I={name:"Size: XLarge",args:{size:a[3],...n,...s}},S={name:"Size: Fullscreen",args:{size:a[4],...n,...s}},x={args:{...n,size:a[0]}},D={render:Je,args:{...n,size:a[0]}},f={render:Xe,args:{...n,...s,size:l.SIZE}},E={render:Ke,args:{...n,...s,size:l.SIZE}},A={render:e=>o`
    <p>Toggle the visible property to show/hide the dialog</p>
    <mdc-dialog
      id="dialog"
      aria-label="dialog"
      size="small"
      variant="default"
      close-button-aria-label="Close dialog"
      ?visible="${e.visible}"
      z-index="100"
      role="dialog"
      header-text="Dialog Header"
      description-text="This is a dialog description. It is only present if the header is present."
      header-tag-name="h2"
      description-tag-name="p"
      @shown="${p("onshown")}"
      @hidden="${p("onhidden")}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `},T={render:e=>{const t=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${e.mountDialog?d(e,W(),t):""}
    `},args:{...n,...s,size:l.SIZE,mountDialog:!0,visible:!0}},$={render:Qe,args:{...n,size:a[0]}},k={render:et,args:{...n,size:a[0]}},P="Level 2 Popover's strategy",z={render:tt,argTypes:{[P]:{control:"select",options:[...Object.values(B),"append to root"]}},args:{[P]:B.ABSOLUTE},...Fe("Demo multiple level overlays nested into each other. They should maintains consistent (monotonic) z-indexing and Esc key handling. Esc should close only the top-most overlay (even tooltips)."),parameters:{controls:{include:[P]}}},C={render:it,args:{...n,size:a[0]}},L={render:nt,args:{...n,size:a[1]}},O={render:ot,args:{...n,size:a[1]}};var _,Z,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var N,H,F;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties,
    'hide-backdrop': true
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows a dialog without a backdrop. The backdrop can be disabled by setting the \`hide-backdrop\` attribute to \`true\`. ' + 'When disabled, users can interact with elements behind the dialog.'
      }
    }
  }
}`,...(F=(H=b.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var M,U,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var R,Y,j;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size: Medium',
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(j=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,K,X;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(X=(K=y.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var J,Q,ee;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Size: XLarge',
  args: {
    size: DIALOG_SIZE[3],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(ee=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Size: Fullscreen',
  args: {
    size: DIALOG_SIZE[4],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ne,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,de,se;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(se=(de=D.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ce,me,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(pe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(be=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,ve,ye;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <p>Toggle the visible property to show/hide the dialog</p>
    <mdc-dialog
      id="dialog"
      aria-label="dialog"
      size="small"
      variant="default"
      close-button-aria-label="Close dialog"
      ?visible="\${args.visible}"
      z-index="100"
      role="dialog"
      header-text="Dialog Header"
      description-text="This is a dialog description. It is only present if the header is present."
      header-tag-name="h2"
      description-tag-name="p"
      @shown="\${action('onshown')}"
      @hidden="\${action('onhidden')}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  \`
}`,...(ye=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ie,Se,xe;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: (args: Args) => {
    const onClose = () => {
      const dialog = document.getElementById(args.id) as HTMLElement;
      dialog.removeAttribute('visible');
    };
    return html\`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      \${args.mountDialog ? createDialog(args, dialogBodyContent(), onClose) : ''}
    \`;
  },
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE,
    mountDialog: true,
    visible: true
  }
}`,...(xe=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var De,fe,Ee;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ee=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};var Ae,Te,$e;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...($e=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var ke,ze,Ce;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: renderDialogWithOtherOverlays,
  argTypes: {
    [lvl2PopoverStrategy]: {
      control: 'select',
      options: [...Object.values(STRATEGY), 'append to root']
    }
  },
  args: {
    [lvl2PopoverStrategy]: STRATEGY.ABSOLUTE
  },
  ...describeStory('Demo multiple level overlays nested into each other. They should maintains consistent (monotonic) z-indexing and Esc key handling. Esc should close only the top-most overlay (even tooltips).'),
  parameters: {
    controls: {
      include: [lvl2PopoverStrategy]
    }
  }
}`,...(Ce=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var Le,Oe,Pe;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Pe=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var we,Be,We;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: renderDialogWithList,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1]
  }
}`,...(We=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var _e,Ze,Ge;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: renderDialogWithTextarea,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1]
  }
}`,...(Ge=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.source}}};const uo=["Example","WithoutBackdrop","small","medium","large","xlarge","fullscreen","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithinOtherOverlays","DialogWithIframe","DialogWithList","DialogWithTextarea"];export{C as DialogWithIframe,L as DialogWithList,O as DialogWithTextarea,k as DialogWithinDialog,z as DialogWithinOtherOverlays,u as Example,T as MountUnmount,$ as WithPopover,b as WithoutBackdrop,A as WithoutTriggerElement,uo as __namedExportsOrder,go as default,S as fullscreen,y as large,v as medium,h as small,E as withCustomHeader,f as withSaveCancelButtons,x as withoutHeader,D as withoutHeaderOrFooter,I as xlarge};
