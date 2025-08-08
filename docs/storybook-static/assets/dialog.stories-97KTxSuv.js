import{D as Se,a as Ee,b as a,c as s}from"./index-CLvqIp3c.js";import{k as r}from"./lit-element-D5KKan5q.js";import{t as P}from"./if-defined-D5BV9-c0.js";import{a as z}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $e,s as Ae}from"./commonArgTypes-BluK8w5L.js";import{t as ze}from"./utils-CFOyPOhY.js";import"./index-D9joXvQS.js";import"./index-D9B9YfOT.js";import"./index-Bc-9NRme.js";import"./index-DYRxW7oy.js";import"./index-riA1qVWu.js";import"./provider.component-BaQC7CJH.js";import"./popover.component-BeJYT0F1.js";import"./base-DIkkzJ-c.js";import"./roles-DU0xbrD4.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./FooterMixin-9o7JZZe3.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-Df3Yk0mX.js";import"./v4-CQkTLCs1.js";import"./link.component-Ccgin3ck.js";import"./IconNameMixin-CRlZlTtq.js";import"./linksimple.component-D2w8QSTB.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./index-BGF5-tDE.js";import"./iframe-B9i_6K3H.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./button.component-DvOKP7op.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";const l=(e,o,t)=>r`<mdc-dialog
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
    aria-labelledby="${P(e["aria-labelledby"])}"
    aria-label="${P(e["aria-label"])}"
    ?should-focus-trap-wrap=${e["should-focus-trap-wrap"]}
    size="${e.size}"
    ?visible="${e.visible}"
    variant="${e.variant}"
    ?focus-trap="${e["focus-trap"]}"
    @shown="${z("onshown")}"
    @hidden="${z("onhidden")}"
    @close="${t}"
  >
    ${o}
  </mdc-dialog>`,c=(e,o,t)=>r`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${t}" id="${e}">${o}</mdc-button>
  </div>
`,T=(e,o=!1)=>r`
  ${o&&r` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
`,xe=e=>r`
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
`,Ce=()=>r`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`,Te=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById(e.id).removeAttribute("visible")};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,T(o),t)}
  `},Pe=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById(e.id).removeAttribute("visible")};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,T(o,!0),t)}
  `},ke=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById(e.id).removeAttribute("visible")},n=()=>{window.confirm("Are you sure you want to cancel?")&&o()};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,r`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${n}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${o}">Save</mdc-button>
      `,t)}
  `},Le=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById(e.id).removeAttribute("visible")};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,r` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,t)}
  `},we=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById(e.id).removeAttribute("visible")};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,xe(o),t)}
  `},Be=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},n=()=>{document.getElementById(e.id).removeAttribute("visible")},x=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,r`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
          <mdc-button id="nested-dialog-trigger" @click=${t}>Open Nested Dialog</mdc-button>
          <mdc-dialog
            id="nested-dialog"
            triggerId="nested-dialog-trigger"
            aria-label="nested-dialog"
            size="small"
            close-button-aria-label="Close nested dialog"
            header-text="Nested Dialog Header"
            description-text="This is a nested dialog description."
            @close="${x}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,n)}
  `},Oe=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},t=()=>{document.getElementById(e.id).removeAttribute("visible")};return r`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,Ce(),t)}
  `},So={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Te,parameters:{badges:["stable"]},argTypes:{...$e,...Ae,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Se)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(Ee)},size:{control:"select",options:Object.values(a)},visible:{control:"boolean"},...ze(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"])}},i={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},d={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},m={args:{size:s.SIZE,...i,...d}},g={name:"Size: Small",args:{size:a[0],...i,...d}},p={name:"Size: Medium",args:{size:a[1],...i,...d}},u={name:"Size: Large",args:{size:a[2],...i,...d}},b={name:"Size: XLarge",args:{size:a[3],...i,...d}},h={name:"Size: Fullscreen",args:{size:a[4],...i,...d}},v={args:{...i,size:a[0]}},I={render:Le,args:{...i,size:a[0]}},y={render:ke,args:{...i,...d,size:s.SIZE}},f={render:Pe,args:{...i,...d,size:s.SIZE}},D={render:e=>r`
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
      @shown="${z("onshown")}"
      @hidden="${z("onhidden")}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `},S={render:e=>{const o=()=>{document.getElementById(e.id).removeAttribute("visible")};return r`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${e.mountDialog?l(e,T(),o):""}
    `},args:{...i,...d,size:s.SIZE,mountDialog:!0,visible:!0}},E={render:we,args:{...i,size:a[0]}},$={render:Be,args:{...i,size:a[0]}},A={render:Oe,args:{...i,size:a[0]}};var k,L,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var B,O,Z;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var _,W,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Size: Medium',
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(W=p.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var H,N,F;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var V,M,U;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size: XLarge',
  args: {
    size: DIALOG_SIZE[3],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(U=(M=b.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var R,j,X;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size: Fullscreen',
  args: {
    size: DIALOG_SIZE[4],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(X=(j=h.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var q,J,K;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ee=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var oe,te,re;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,ne,ae;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,de,le;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(de=D.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,me,ge;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(me=S.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var pe,ue,be;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(be=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,ve,Ie;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ie=(ve=$.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var ye,fe,De;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(De=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};const Eo=["Example","small","medium","large","xlarge","fullscreen","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithIframe"];export{A as DialogWithIframe,$ as DialogWithinDialog,m as Example,S as MountUnmount,E as WithPopover,D as WithoutTriggerElement,Eo as __namedExportsOrder,So as default,h as fullscreen,u as large,p as medium,g as small,f as withCustomHeader,y as withSaveCancelButtons,v as withoutHeader,I as withoutHeaderOrFooter,b as xlarge};
