import{D as xe,a as ze,b as a,c as s}from"./index-BN9IGrjO.js";import{k as t}from"./lit-element-D5KKan5q.js";import{t as L}from"./if-defined-D5BV9-c0.js";import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as ke,s as Ce}from"./commonArgTypes-BluK8w5L.js";import{t as Te}from"./utils-CFOyPOhY.js";import"./index-CUA5XITW.js";import"./index-CMXahBZ9.js";import"./index-1Uo6vXT-.js";import"./index-DYRxW7oy.js";import"./index-FOCL2P7j.js";import"./index-riA1qVWu.js";import"./provider.component-BaQC7CJH.js";import"./popover.component-BeJYT0F1.js";import"./base-DIkkzJ-c.js";import"./roles-DU0xbrD4.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./FooterMixin-9o7JZZe3.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-Df3Yk0mX.js";import"./v4-CQkTLCs1.js";import"./link.component-Ccgin3ck.js";import"./IconNameMixin-CRlZlTtq.js";import"./linksimple.component-D2w8QSTB.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./index-Dhb6aEYF.js";import"./iframe-nDJmt100.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./button.component-DvOKP7op.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";import"./listitem.component-CqDx-T5W.js";const l=(e,o,i)=>t`<mdc-dialog
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
    aria-labelledby="${L(e["aria-labelledby"])}"
    aria-label="${L(e["aria-label"])}"
    ?should-focus-trap-wrap=${e["should-focus-trap-wrap"]}
    size="${e.size}"
    ?visible="${e.visible}"
    variant="${e.variant}"
    ?focus-trap="${e["focus-trap"]}"
    @shown="${m("onshown")}"
    @hidden="${m("onhidden")}"
    @close="${i}"
  >
    ${o}
  </mdc-dialog>`,c=(e,o,i)=>t`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${i}" id="${e}">${o}</mdc-button>
  </div>
`,T=(e,o=!1)=>t`
  ${o&&t` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
`,Le=e=>t`
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
`,Pe=()=>t`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`,Be=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,T(o),i)}
  `},we=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,T(o,!0),i)}
  `},Oe=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")},n=()=>{window.confirm("Are you sure you want to cancel?")&&o()};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,t`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${n}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${o}">Save</mdc-button>
      `,i)}
  `},We=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,t` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,i)}
  `},Ze=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,Le(o),i)}
  `},_e=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},n=()=>{document.getElementById(e.id).removeAttribute("visible")},k=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,t`
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
            @close="${k}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,n)}
  `},Ge=e=>{const o=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return t`
    ${c(e.triggerId,"Click me!",o)}
    ${l(e,Pe(),i)}
  `},He=(e,o)=>t`
  <mdc-list aria-label="${o}">
    ${e?t`<mdc-listheader slot="list-header" header-text="${e}"></mdc-listheader>`:""}
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
`,Ne=e=>t`
  ${c(e.triggerId,"Click me!",()=>{document.getElementById(e.id).toggleAttribute("visible")})}
  ${l(e,t`
      <div slot="dialog-body" style="width: 100%">
        <p>This is the body content of the dialog.</p>
        ${He(e.textPassedToListHeader,e["aria-label"])}
      </div>
    `,()=>{document.getElementById(e.id).removeAttribute("visible")})}
`,To={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Be,parameters:{badges:["stable"]},argTypes:{...ke,...Ce,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(xe)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(ze)},size:{control:"select",options:Object.values(a)},visible:{control:"boolean"},...Te(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"])}},r={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},d={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},g={args:{size:s.SIZE,...r,...d}},p={name:"Size: Small",args:{size:a[0],...r,...d}},u={name:"Size: Medium",args:{size:a[1],...r,...d}},b={name:"Size: Large",args:{size:a[2],...r,...d}},h={name:"Size: XLarge",args:{size:a[3],...r,...d}},v={name:"Size: Fullscreen",args:{size:a[4],...r,...d}},y={args:{...r,size:a[0]}},I={render:We,args:{...r,size:a[0]}},f={render:Oe,args:{...r,...d,size:s.SIZE}},D={render:we,args:{...r,...d,size:s.SIZE}},$={render:e=>t`
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
  `},S={render:e=>{const o=()=>{document.getElementById(e.id).removeAttribute("visible")};return t`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${e.mountDialog?l(e,T(),o):""}
    `},args:{...r,...d,size:s.SIZE,mountDialog:!0,visible:!0}},E={render:Ze,args:{...r,size:a[0]}},A={render:_e,args:{...r,size:a[0]}},x={render:Ge,args:{...r,size:a[0]}},z={render:Ne,args:{...r,size:a[1]}};var P,B,w;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(w=(B=g.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var O,W,Z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var _,G,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Size: Medium',
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,F,V;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(V=(F=b.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var M,U,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Size: XLarge',
  args: {
    size: DIALOG_SIZE[3],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(R=(U=h.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var j,X,q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Size: Fullscreen',
  args: {
    size: DIALOG_SIZE[4],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(q=(X=v.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,ee,oe;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(oe=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ie,re;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(re=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ne,ae,se;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(se=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,de,ce;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(de=$.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ge,pe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ue,be,he;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(he=(be=E.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ve,ye,Ie;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ie=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var fe,De,$e;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...($e=(De=x.parameters)==null?void 0:De.docs)==null?void 0:$e.source}}};var Se,Ee,Ae;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: renderDialogWithList,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1]
  }
}`,...(Ae=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const Lo=["Example","small","medium","large","xlarge","fullscreen","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithIframe","DialogWithList"];export{x as DialogWithIframe,z as DialogWithList,A as DialogWithinDialog,g as Example,S as MountUnmount,E as WithPopover,$ as WithoutTriggerElement,Lo as __namedExportsOrder,To as default,v as fullscreen,b as large,u as medium,p as small,D as withCustomHeader,f as withSaveCancelButtons,y as withoutHeader,I as withoutHeaderOrFooter,h as xlarge};
