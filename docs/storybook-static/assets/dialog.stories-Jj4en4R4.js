import{D as Ae,a as ze,b as a,c as s}from"./index-jF4p3ml0.js";import{k as o}from"./lit-element-D5KKan5q.js";import{t as L}from"./if-defined-D5BV9-c0.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as ke,s as Te}from"./commonArgTypes-BluK8w5L.js";import{t as Ce}from"./utils-CFOyPOhY.js";import"./index-Dr-5jzPO.js";import"./index-jqsjuHo7.js";import"./index-BF3t4iDl.js";import"./index-DM9rY9pk.js";import"./index-BVa6cgee.js";import"./index-DeEenWCE.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./popover.component-CWSuSUni.js";import"./base-DIkkzJ-c.js";import"./roles-CJI3JVG-.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./FooterMixin-BQCuuCJE.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-DNTydABS.js";import"./v4-CQkTLCs1.js";import"./link.component-DTr-Vb69.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./linksimple.component-DbI0pHK9.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./index-S3PNIDkg.js";import"./iframe-BzlnvPy7.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./button.component-AY6DUPps.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./keys-hFXe221I.js";import"./button.utils-rNW36Ji7.js";import"./v4-CmTdKEVZ.js";import"./listitem.component-i7etquvF.js";const l=(e,t,i)=>o`<mdc-dialog
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
    @shown="${c("onshown")}"
    @hidden="${c("onhidden")}"
    @close="${i}"
  >
    ${t}
  </mdc-dialog>`,m=(e,t,i)=>o`
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
`,Le=(e,t,i)=>o`
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
`,C=(e,t=!1)=>o`
  ${t&&o` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
`,Pe=e=>o`
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
`,Be=()=>o`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`,we=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${m(e.triggerId,"Click me!",t)}
    ${l(e,C(t),i)}
  `},Oe=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${m(e.triggerId,"Click me!",t)}
    ${l(e,C(t,!0),i)}
  `},We=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")},n=()=>{window.confirm("Are you sure you want to cancel?")&&t()};return o`
    ${m(e.triggerId,"Click me!",t)}
    ${l(e,o`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${n}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${t}">Save</mdc-button>
      `,i)}
  `},Ze=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${m(e.triggerId,"Click me!",t)}
    ${l(e,o` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,i)}
  `},_e=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${Le(e.triggerId,"Click me!",t)}
    ${l(e,Pe(t),i)}
  `},Ge=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},n=()=>{document.getElementById(e.id).removeAttribute("visible")},k=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return o`
    ${m(e.triggerId,"Click me!",t)}
    ${l(e,o`
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
  `},He=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},i=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
    ${m(e.triggerId,"Click me!",t)}
    ${l(e,Be(),i)}
  `},Ne=(e,t)=>o`
  <mdc-list aria-label="${t}">
    ${e?o`<mdc-listheader slot="list-header" header-text="${e}"></mdc-listheader>`:""}
    <mdc-listitem @click=${c("onclick")} label="List Item 1">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${c("onclick")} label="List Item 2">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${c("onclick")} label="List Item 3">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
  </mdc-list>
`,Fe=e=>o`
  ${m(e.triggerId,"Click me!",()=>{document.getElementById(e.id).toggleAttribute("visible")})}
  ${l(e,o`
      <div slot="dialog-body" style="width: 100%">
        <p>This is the body content of the dialog.</p>
        ${Ne(e.textPassedToListHeader,e["aria-label"])}
      </div>
    `,()=>{document.getElementById(e.id).removeAttribute("visible")})}
`,Lt={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:we,parameters:{badges:["stable"]},argTypes:{...ke,...Te,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Ae)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(ze)},size:{control:"select",options:Object.values(a)},visible:{control:"boolean"},...Ce(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"])}},r={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},d={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},g={args:{size:s.SIZE,...r,...d}},p={name:"Size: Small",args:{size:a[0],...r,...d}},u={name:"Size: Medium",args:{size:a[1],...r,...d}},b={name:"Size: Large",args:{size:a[2],...r,...d}},h={name:"Size: XLarge",args:{size:a[3],...r,...d}},v={name:"Size: Fullscreen",args:{size:a[4],...r,...d}},y={args:{...r,size:a[0]}},I={render:Ze,args:{...r,size:a[0]}},f={render:We,args:{...r,...d,size:s.SIZE}},$={render:Oe,args:{...r,...d,size:s.SIZE}},D={render:e=>o`
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
      @shown="${c("onshown")}"
      @hidden="${c("onhidden")}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `},S={render:e=>{const t=()=>{document.getElementById(e.id).removeAttribute("visible")};return o`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${e.mountDialog?l(e,C(),t):""}
    `},args:{...r,...d,size:s.SIZE,mountDialog:!0,visible:!0}},E={render:_e,args:{...r,size:a[0]}},x={render:Ge,args:{...r,size:a[0]}},A={render:He,args:{...r,size:a[0]}},z={render:Fe,args:{...r,size:a[1]}};var P,B,w;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,ee,te;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ie,re;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(re=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ne,ae,se;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(se=(ae=$.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,de,ce;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ge,pe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(be=E.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ve,ye,Ie;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ie=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var fe,$e,De;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(De=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Se,Ee,xe;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: renderDialogWithList,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1]
  }
}`,...(xe=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source}}};const Pt=["Example","small","medium","large","xlarge","fullscreen","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithIframe","DialogWithList"];export{A as DialogWithIframe,z as DialogWithList,x as DialogWithinDialog,g as Example,S as MountUnmount,E as WithPopover,D as WithoutTriggerElement,Pt as __namedExportsOrder,Lt as default,v as fullscreen,b as large,u as medium,p as small,$ as withCustomHeader,f as withSaveCancelButtons,y as withoutHeader,I as withoutHeaderOrFooter,h as xlarge};
