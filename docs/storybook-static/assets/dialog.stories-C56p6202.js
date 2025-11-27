import"./index-DO_EIwFf.js";import{k as o}from"./iframe-DHOQtyml.js";import{t as w}from"./if-defined-DClzWNv2.js";import{c as Be,s as We}from"./commonArgTypes-BluK8w5L.js";import{b as Oe,D as _e,c as a,a as s}from"./dialog.component-Docu9jNb.js";import"./index-c98GbePI.js";import"./index-D6qKHznb.js";import"./index-BioOL5ux.js";import"./index-BDboxI16.js";import"./index-CPiUBq7E.js";import"./index-Du5oaM0A.js";import"./index-B0S-Vns9.js";import"./preload-helper-C1FmrZbK.js";import"./BackdropMixin-DO-GzP2a.js";import"./FooterMixin-1tAL11Me.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-BGVYnema.js";import"./index-CGHaPVXe.js";import"./IconNameMixin-BjKpCPYn.js";import"./linksimple.component-Te6CcN-H.js";import"./DataAriaLabelMixin-B6s508Zp.js";import"./DisabledMixin-DvdaRsAD.js";import"./index-CTR5va3i.js";import"./index-DTrDRi1E.js";import"./button.component-1ojSbRKD.js";import"./buttonsimple.component-kfxrU5QZ.js";import"./TabIndexMixin-CJnrukpa.js";import"./button.utils-rNW36Ji7.js";import"./popover.component-VS8Aqnx3.js";import"./v4-CmTdKEVZ.js";import"./ListNavigationMixin-BgtvAz1c.js";import"./listitem.component-8Ay7yom4.js";import"./CaptureDestroyEventForChildElement-DGIGgCKC.js";import"./query-BPxBhMfF.js";import"./index-BSzdZAIU.js";import"./index-BoFW0mmU.js";import"./index-CqRdlcq1.js";import"./formfieldwrapper.component-BakUXNIX.js";import"./formfieldwrapper.constants-sxhKTaIN.js";import"./input.constants--ABcaAj4.js";import"./FormInternalsMixin-DGkfn0hW.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d=(e,t,i)=>o`<mdc-dialog
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
    @shown="${m("onshown")}"
    @hidden="${m("onhidden")}"
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
`,Ze=(e,t,i)=>o`
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
`,P=(e,t=!1)=>o`
  ${t&&o` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
`,Ge=e=>o`
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
`,He=()=>o`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`,Fe=()=>o`
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
`,Ne=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,P(t),i)}
  `},Ve=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,P(t,!0),i)}
  `},Ue=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")},n=()=>{window.confirm("Are you sure you want to cancel?")&&t()};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,o`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${n}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${t}">Save</mdc-button>
      `,i)}
  `},Me=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,o` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,i)}
  `},Re=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${Ze(e.triggerId,"Click me!",t)}
    ${d(e,Ge(t),i)}
  `},je=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},n=()=>{document.getElementById(e.id).removeAttribute("visible")},C=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return o`
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
            @close="${C}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,n)}
  `},Xe=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)} ${d(e,Fe(),i)}
  `},Ke=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${c(e.triggerId,"Click me!",t)}
    ${d(e,He(),i)}
  `},Ye=(e,t)=>o`
  <mdc-list aria-label="${t}">
    ${e?o`<mdc-listheader slot="list-header" header-text="${e}"></mdc-listheader>`:""}
    <mdc-listitem @click=${m("onclick")} label="List Item 1">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${m("onclick")} label="List Item 2">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${m("onclick")} label="List Item 3">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
  </mdc-list>
`,qe=e=>o`
  ${c(e.triggerId,"Click me!",()=>{document.getElementById(e.id).toggleAttribute("visible")})}
  ${d(e,o`
      <div slot="dialog-body" style="width: 100%">
        <p>This is the body content of the dialog.</p>
        ${Ye(e.textPassedToListHeader,e["aria-label"])}
      </div>
    `,()=>{document.getElementById(e.id).removeAttribute("visible")})}
`,Ht={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Ne,argTypes:{...Be,...We,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Oe)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},"hide-backdrop":{control:"boolean"},role:{control:"select",options:Object.values(_e)},size:{control:"select",options:Object.values(a)},visible:{control:"boolean"}}},r={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},l={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},g={args:{size:s.SIZE,...r,...l}},p={args:{size:s.SIZE,...r,...l,"hide-backdrop":!0},parameters:{docs:{description:{story:"This example shows a dialog without a backdrop. The backdrop can be disabled by setting the `hide-backdrop` attribute to `true`. When disabled, users can interact with elements behind the dialog."}}}},u={name:"Size: Small",args:{size:a[0],...r,...l}},b={name:"Size: Medium",args:{size:a[1],...r,...l}},h={name:"Size: Large",args:{size:a[2],...r,...l}},v={name:"Size: XLarge",args:{size:a[3],...r,...l}},y={name:"Size: Fullscreen",args:{size:a[4],...r,...l}},I={args:{...r,size:a[0]}},D={render:Me,args:{...r,size:a[0]}},f={render:Ue,args:{...r,...l,size:s.SIZE}},$={render:Ve,args:{...r,...l,size:s.SIZE}},S={render:e=>o`
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
      @shown="${m("onshown")}"
      @hidden="${m("onhidden")}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `},E={render:e=>{const t=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${e.mountDialog?d(e,P(),t):""}
    `},args:{...r,...l,size:s.SIZE,mountDialog:!0,visible:!0}},k={render:Re,args:{...r,size:a[0]}},x={render:je,args:{...r,size:a[0]}},T={render:Ke,args:{...r,size:a[0]}},A={render:qe,args:{...r,size:a[1]}},z={render:Xe,args:{...r,size:a[1]}};var B,W,O;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(O=(W=g.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var _,Z,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var H,F,N;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,U,M;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size: Medium',
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(M=(U=b.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var R,j,X;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(X=(j=h.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var K,Y,q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Size: XLarge',
  args: {
    size: DIALOG_SIZE[3],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,Q,ee;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Size: Fullscreen',
  args: {
    size: DIALOG_SIZE[4],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(ee=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ie;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ne,ae;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,de,le;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(le=(de=f.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,me,ge;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ge=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var pe,ue,be;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,ve,ye;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ie,De,fe;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(fe=(De=k.parameters)==null?void 0:De.docs)==null?void 0:fe.source}}};var $e,Se,Ee;x.parameters={...x.parameters,docs:{...($e=x.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ee=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var ke,xe,Te;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Te=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ae,ze,Ce;A.parameters={...A.parameters,docs:{...(Ae=A.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: renderDialogWithList,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1]
  }
}`,...(Ce=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var Le,Pe,we;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: renderDialogWithTextarea,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1]
  }
}`,...(we=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};const Ft=["Example","WithoutBackdrop","small","medium","large","xlarge","fullscreen","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithIframe","DialogWithList","DialogWithTextarea"];export{T as DialogWithIframe,A as DialogWithList,z as DialogWithTextarea,x as DialogWithinDialog,g as Example,E as MountUnmount,k as WithPopover,p as WithoutBackdrop,S as WithoutTriggerElement,Ft as __namedExportsOrder,Ht as default,y as fullscreen,h as large,b as medium,u as small,$ as withCustomHeader,f as withSaveCancelButtons,I as withoutHeader,D as withoutHeaderOrFooter,v as xlarge};
